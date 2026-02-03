# 🚌 Transport Management System (Backend)

A modular, enterprise-ready backend built with **Express.js**, **TypeScript**, and **Prisma ORM**. This system manages complex transportation logic, including routes, vehicles, pickup points, and student fee management.

---

## 🛠️ Tech Stack

- **Framework:** Express.js (TypeScript)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Architectural Pattern:** Modular/Layered Architecture (Routes -> Controller -> Service)
- **Deployment:** Vercel / Node.js

---

## 📂 Project Architecture

This project follows a **modular structure** for high scalability:

- **`src/app/modules/`**: Each domain has its own module containing:
  - `routes`: API endpoints.
  - `controller`: Request/response handling.
  - `service`: Core business logic & Prisma queries.
  - `interface`: TypeScript type definitions.
- **`src/app/routes/index.ts`**: The central router that bundles all modules.
- **`src/lib/prisma.ts`**: Optimized Prisma client singleton.

---

## ⚙️ Local Installation Guide

### 1. Clone the Repository

```
git clone https://github.com/AbrRahman/transport-management-backend.git
cd transport-management-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a **.env** file in the root:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/transport_db?schema=public"
PORT=3000
CLIENT_URL:CLIENT_URL=http://localhost:5173 or frontend url
```

### 4. Database Initialization

```
npx prisma generate
npx prisma migrate dev

```

### Step 5: Run the Server

```
npm run start:dev
```
