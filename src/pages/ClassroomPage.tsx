import { Search, Filter } from "lucide-react"
import { classrooms, students } from "../data/mockData"

function ClassroomCard({ room }: { room: typeof classrooms[number] }) {
  return (
    <div className="flex h-[70px] w-[270px] max-w-full items-center justify-between rounded-lg border border-[#262626] bg-[#141414] p-4">
      <div>
        <p className="text-[20px] font-bold leading-none text-white">
          {room.name}
        </p>
        <p className="mt-1.5 text-[12px] text-[#999]">{room.year}</p>
      </div>
      <div>
        <p className="text-[18px] font-bold leading-none text-white">
          {room.students}
        </p>
        <p className="mt-1 text-[11px] text-[#999]">Students</p>
      </div>
    </div>
  )
}

export function ClassroomPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap gap-4">
          {classrooms.map((room, i) => (
            <ClassroomCard key={i} room={room} />
          ))}
        </div>
        <div className="flex shrink-0 gap-3">
          <button className="flex h-10 items-center justify-center rounded-lg bg-[#5b4aef] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#4d3ee0]">
            + Create Classroom
          </button>
          <button className="flex h-10 items-center justify-center rounded-lg border border-[#5b4aef] bg-[#5b4aef]/[0.28] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#5b4aef]/40">
            Manage
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#141414]">
        <div className="flex items-center gap-3 px-5 py-4">
          <div className="relative w-full max-w-[275px]">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#a8a8a8]" />
            <input
              type="text"
              placeholder="Search name, mailid…"
              className="h-8 w-full rounded border border-white/10 bg-white/[0.07] pl-8 pr-3 text-[13px] text-white placeholder:text-[#b8b8b8] focus:border-white/20 focus:outline-none"
            />
          </div>
          <button className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.08] text-[#a8a8a8] transition-colors hover:text-white">
            <Filter className="h-3.5 w-3.5" />
            <span className="absolute right-0.5 top-0.5 h-[5px] w-[5px] rounded-full bg-[#635ce6]" />
          </button>
          <button className="ml-auto flex h-10 shrink-0 items-center justify-center rounded-md border border-[#333] bg-[#141414] px-4 text-[14px] text-white transition-colors hover:border-[#444]">
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.5px] text-[#808080]">
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Email ID</th>
                <th className="w-[150px] px-5 py-3 font-semibold">
                  Solved Count
                </th>
                <th className="w-[150px] px-5 py-3 font-semibold">Avg Score</th>
                <th className="w-[120px] px-5 py-3 font-semibold">Class</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr
                  key={s.email}
                  className={i % 2 === 1 ? "bg-white/[0.03]" : ""}
                >
                  <td className="px-5 py-3.5 text-[14px] font-semibold text-white">
                    {s.name}
                  </td>
                  <td className="px-5 py-3.5 text-[13px] text-[#999]">
                    {s.email}
                  </td>
                  <td className="px-5 py-3.5 text-[14px] text-[#b3b3b3]">
                    {s.solved}
                  </td>
                  <td className="px-5 py-3.5 text-[14px] font-semibold text-white">
                    {s.score}
                  </td>
                  <td className="px-5 py-3.5 text-[13px] text-[#b3b3b3]">
                    {s.cls}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
