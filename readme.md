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
CLIENT_URL=http://localhost:5173 or frontend url
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
# Project ERD Diagram

<a href="https://res.cloudinary.com/dmhfrwdq3/image/upload/v1770206499/Transport_Management_Module_ERD_rhfejs.png">
  <img src="https://res.cloudinary.com/dmhfrwdq3/image/upload/v1770206499/Transport_Management_Module_ERD_rhfejs.png" alt="ERD Diagram" width="600">
</a>

## API documentation

### Bsae Url : `https://transport-management-backend-beta.vercel.app/api/v1`

## 1 Vehicle Management

| Method | Endpoint       | Description                |
| ------ | -------------- | -------------------------- |
| POST   | `/vehicle`     | Create a new vehicle       |
| GET    | `/vehicle`     | Get all vehicles           |
| GET    | `/vehicle/:id` | Get single vehicle details |
| PUT    | `/vehicle/:id` | Update vehicle information |
| DELETE | `/vehicle/:id` | Remove a vehicle           |

---

## 2 Pickup Point Management

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| POST   | `/pickup-point`     | Create a new pickup point |
| GET    | `/pickup-point`     | Get all pickup points     |
| GET    | `/pickup-point/:id` | Get specific pickup point |
| PUT    | `/pickup-point/:id` | Update pickup point       |
| DELETE | `/pickup-point/:id` | Delete a pickup point     |

---

## 3 Route Management

| Method | Endpoint              | Description                                  |
| ------ | --------------------- | -------------------------------------------- |
| POST   | `/route`              | Create a new route                           |
| GET    | `/route`              | Get all routes                               |
| GET    | `/route/stop-watch`   | Get routes with assigned stops/pickup points |
| GET    | `/route/unassign-fee` | Get routes without assigned fees             |
| GET    | `/route/:id`          | Get specific route details                   |
| PUT    | `/route/:id`          | Update route details                         |
| DELETE | `/route/:id`          | Delete a route                               |

---

## 4 Route-Vehicle Assignment

| Method | Endpoint                            | Description                            |
| ------ | ----------------------------------- | -------------------------------------- |
| POST   | `/route-vehicle`                    | Assign a vehicle to a specific route   |
| GET    | `/route-vehicle`                    | Get all route-vehicle assignments      |
| GET    | `/route-vehicle/unassigned-route`   | List routes without any vehicle        |
| GET    | `/route-vehicle/unassigned-vehicle` | List vehicles without any route        |
| DELETE | `/route-vehicle/:id`                | Remove vehicle assignment from a route |

---

## 5 Route-Pickup Point Mapping

| Method | Endpoint                        | Description                          |
| ------ | ------------------------------- | ------------------------------------ |
| POST   | `/route-pickup-point`           | Add a pickup point (stop) to a route |
| GET    | `/route-pickup-point`           | Get all route-pickup point mappings  |
| GET    | `/route-pickup-point/route/:id` | Get all stops for a specific route   |
| DELETE | `/route-pickup-point/:id`       | Remove a stop from a route           |

---

## 6 Transport Fee Management

| Method | Endpoint             | Description                           |
| ------ | -------------------- | ------------------------------------- |
| POST   | `/transport-fee`     | Set a monthly fee for a route         |
| GET    | `/transport-fee`     | Get all transport fees                |
| GET    | `/transport-fee/:id` | Get fee details for a specific record |
| PUT    | `/transport-fee/:id` | Update monthly fee amount             |
| DELETE | `/transport-fee/:id` | Remove transport fee record           |

---

## 7 Student Transport Assignment & Fees

| Method | Endpoint                                | Description                                       |
| ------ | --------------------------------------- | ------------------------------------------------- |
| POST   | `/student-transport/student-assign`     | Assign a student to a route and pickup point and auto fee generation      |
| GET    | `/student-transport/student-assign`     | Get all student transport assignments             |
| PUT    | `/student-transport/student-assign/:id` | Toggle (Active/Inactive) student transport status |
| DELETE | `/student-transport/student-assign/:id` | Delete student transport assignment               |
| GET    | `/student-transport/transport-fee`      | Get all student transport fee payment records     |

**Note:** Assigning a student automatically generates a transport fee record in `StudentFeeAssignment` for the current month.

---

## 8 Student Management

| Method | Endpoint   | Description                                                        |
| ------ | ---------- | ------------------------------------------------------------------ |
| GET    | `/student` | Get list of students (filtered for those without active transport) |

---
