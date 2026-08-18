import axios from "axios";
import { LanguageCode } from "@prisma/client";
import { spawn, execSync } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

const JUDGE0_URL = process.env.JUDGE0_URL || "http://localhost:2358";

export const JUDGE0_LANGUAGE_MAP: Record<LanguageCode, number> = {
  [LanguageCode.C]:      50,
  [LanguageCode.CPP]:    54,
  [LanguageCode.JAVA]:   62,
  [LanguageCode.JS]:     63,
  [LanguageCode.PYTHON]: 71,
};

export interface Judge0SubmissionPayload {
  source_code: string;
  language_id: number;
  stdin?: string;
  expected_output?: string;
  cpu_time_limit?: number;
  memory_limit?: number;
  max_processes_and_or_threads?: number;
  enable_network?: boolean;
}

export interface Judge0Response {
  stdout: string | null;
  time: string | null;
  memory: number | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  status: { id: number; description: string };
}

export class Judge0Service {
  static async execute(payload: Judge0SubmissionPayload): Promise<Judge0Response> {
    try {
      const response = await axios.post(`${JUDGE0_URL}/submissions?wait=true`, {
        ...payload,
        max_processes_and_or_threads: payload.max_processes_and_or_threads ?? 60,
        enable_network: payload.enable_network ?? false,
      });
      const data = response.data;
      if (data.status?.id === 13 && data.message?.includes("rb_sysopen")) {
        console.warn("Judge0 sandbox failed (Windows cgroup issue). Falling back to local execution.");
        return await executeLocal(payload.language_id, payload.source_code, payload.stdin || "");
      }
      return data;
    } catch (error) {
      console.error("Judge0 Execution Error", error);
      throw new Error("Failed to execute code in Judge0");
    }
  }

  static async submitBatch(payloads: Judge0SubmissionPayload[]): Promise<Judge0Response[]> {
    try {
      return await Promise.all(payloads.map(p => this.execute(p)));
    } catch (error) {
      console.error("Judge0 Batch Error", error);
      throw new Error("Failed to execute batch in Judge0");
    }
  }
}

// --- Local fallback ----------------------------------------------------------

function makeOk(stdout: string | null, timeSecs: string): Judge0Response {
  return { stdout, time: timeSecs, memory: 4096, stderr: null, compile_output: null, message: "Local Fallback", status: { id: 3, description: "Accepted" } };
}
function makeRuntimeErr(stderr: string, timeSecs: string): Judge0Response {
  return { stdout: null, time: timeSecs, memory: 4096, stderr, compile_output: null, message: "Local Fallback", status: { id: 11, description: "Runtime Error (NZEC)" } };
}
function makeCompileErr(compile_output: string): Judge0Response {
  return { stdout: null, time: null, memory: null, stderr: null, compile_output, message: "Local Fallback", status: { id: 6, description: "Compilation Error" } };
}

async function executeLocal(langId: number, source: string, stdin: string): Promise<Judge0Response> {
  const tmp = os.tmpdir();
  const id = Date.now();

  if (langId === 71) { // Python
    const f = path.join(tmp, `sol_${id}.py`);
    fs.writeFileSync(f, source);
    return runProcess("python", [f], stdin, () => { try { fs.unlinkSync(f); } catch {} });
  }

  if (langId === 63) { // Node.js
    const f = path.join(tmp, `sol_${id}.js`);
    fs.writeFileSync(f, source);
    return runProcess("node", [f], stdin, () => { try { fs.unlinkSync(f); } catch {} });
  }

  if (langId === 62) { // Java — each job gets its own isolated subdir to avoid parallel race conditions
    const workDir = path.join(tmp, `java_${id}`);
    fs.mkdirSync(workDir, { recursive: true });
    const f = path.join(workDir, `Main.java`);
    fs.writeFileSync(f, source);
    try { execSync(`javac "${f}"`, { cwd: workDir }); } catch (e: any) {
      fs.rmSync(workDir, { recursive: true, force: true });
      return makeCompileErr(e.stderr?.toString() || e.message);
    }
    const cleanup = () => fs.rmSync(workDir, { recursive: true, force: true });
    return runProcess("java", ["-cp", workDir, "Main"], stdin, cleanup);
  }

  if (langId === 54) { // C++
    const f = path.join(tmp, `sol_${id}.cpp`);
    const bin = path.join(tmp, `sol_${id}.exe`);
    fs.writeFileSync(f, source);
    try { execSync(`g++ -o "${bin}" "${f}" -std=c++17`, { cwd: tmp }); } catch (e: any) {
      try { fs.unlinkSync(f); } catch {}
      return makeCompileErr(e.stderr?.toString() || e.message);
    }
    const cleanup = () => { try { fs.unlinkSync(f); } catch {} try { fs.unlinkSync(bin); } catch {} };
    return runProcess(bin, [], stdin, cleanup);
  }

  if (langId === 50) { // C
    const f = path.join(tmp, `sol_${id}.c`);
    const bin = path.join(tmp, `sol_${id}.exe`);
    fs.writeFileSync(f, source);
    try { execSync(`gcc -o "${bin}" "${f}"`, { cwd: tmp }); } catch (e: any) {
      try { fs.unlinkSync(f); } catch {}
      return makeCompileErr(e.stderr?.toString() || e.message);
    }
    const cleanup = () => { try { fs.unlinkSync(f); } catch {} try { fs.unlinkSync(bin); } catch {} };
    return runProcess(bin, [], stdin, cleanup);
  }

  return makeRuntimeErr("Language not supported in local fallback.", "0");
}

function runProcess(cmd: string, args: string[], stdin: string, cleanup: () => void): Promise<Judge0Response> {
  return new Promise((resolve) => {
    const t0 = process.hrtime();
    const child = spawn(cmd, args, { stdio: ["pipe", "pipe", "pipe"] });
    let out = ""; let err = "";

    child.stdin.write(stdin);
    child.stdin.end();
    child.stdout.on("data", (d) => { out += d.toString(); });
    child.stderr.on("data", (d) => { err += d.toString(); });

    child.on("close", (code) => {
      const diff = process.hrtime(t0);
      const t = (diff[0] + diff[1] / 1e9).toFixed(3);
      cleanup();
      if (code === 0) { resolve(makeOk(out || null, t)); }
      else { resolve(makeRuntimeErr(err || `Exit code ${code}`, t)); }
    });

    child.on("error", (e) => {
      cleanup();
      resolve({ stdout: null, time: null, memory: null, stderr: e.message, compile_output: null, message: "Spawn failed", status: { id: 13, description: "Internal Error" } });
    });
  });
}
