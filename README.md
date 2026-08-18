# IpsumCode 🚀

IpsumCode is a comprehensive platform for coding assessments. It consists of a robust backend, an admin dashboard for instructors to create and manage contests, and a dedicated student portal for taking assessments in a fully integrated coding environment.

---

## 🏗️ Project Architecture

The project is broken down into four main components:
1. **Backend (`/backend`)**: A Node.js + Express API server that handles all business logic, powered by **Prisma ORM** connecting to a PostgreSQL database.
2. **Admin Dashboard (`/admin`)**: A React + Vite frontend for administrators to manage classrooms, question banks, and create live assessments.
3. **Student Portal (`/Student`)**: A React + Vite frontend providing a rich IDE-like workspace for students to read questions, write code, and submit their solutions.
4. **Execution Engine (Docker)**: Uses **Judge0** (running via Docker Compose) to securely compile and execute student code submissions in isolated containers.

---

## ⚙️ Initial Setup

### 1. Install Dependencies
You need to install dependencies in all three primary directories:
```bash
# In the backend directory
cd backend
npm install

# In the admin directory
cd ../admin
npm install

# In the student directory
cd ../Student
npm install
```

### 2. Start the Database and Judge0
Make sure Docker Desktop is running on your machine, then start the services from the root of the project:
```bash
docker-compose up -d
```
*This starts the PostgreSQL database (`backend-db`) on port 5433, and the Judge0 engine alongside its dedicated Redis and Postgres instances.*

### 3. Initialize the Database
Navigate to the backend and push the schema to your database:
```bash
cd backend
npx prisma db push
# Or, if using migrations: npx prisma migrate dev
```
*(Optional)* Seed the database with mock data:
```bash
node prisma/seed.js
```

---

## 🏃 Running the Application

To run the full stack locally during development, you will need to open **three separate terminals** and start each service:

**Terminal 1: Backend API**
```bash
cd backend
npm run dev
# The backend typically runs on http://localhost:3000
```

**Terminal 2: Admin Dashboard**
```bash
cd admin
npm run dev
# The admin dashboard typically runs on http://localhost:5173
```

**Terminal 3: Student Portal**
```bash
cd Student
npm run dev
# The student portal typically runs on http://localhost:5174
```

---

## 🛠️ Frequently Used Commands

Here are the most common commands you will use while developing or debugging:

### Database & Prisma
- **`npx prisma studio`** (Run inside `/backend`): Opens a visual spreadsheet-like UI in your browser (usually at `http://localhost:5555`) where you can easily view, add, edit, or delete database records manually!
- **`npx prisma generate`** (Run inside `/backend`): Run this anytime you make a change to `schema.prisma`. It regenerates the TypeScript types so your IDE knows about the new fields.
- **`npx prisma db push`** (Run inside `/backend`): Syncs your Prisma schema state with the actual database structure.

### Docker Services
- **`docker-compose up -d`** (Run in root): Starts the Postgres database and the Judge0 environment in the background.
- **`docker-compose down`** (Run in root): Stops all running Docker containers.

### Troubleshooting Node.js / Windows File Locks
If you ever encounter an `EPERM` error where a file is locked, or if a port is "already in use", you can kill the dangling Node.js process:
```powershell
# Find running Node processes
Get-WmiObject Win32_Process -Filter "name='node.exe'" | Select-Object ProcessId, CommandLine

# Force kill a specific process
taskkill /F /PID <ProcessId>
```