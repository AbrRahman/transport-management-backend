import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes";
import { seedStudent } from "./db/seed";
const app = express();

dotenv.config();

// middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// route
http: app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.use("/api/v1", router);

//  not fund handler

app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});

//  generic error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  let errorSources = err;

  if (err.name === "PrismaClientKnownRequestError") {
    statusCode = 400;
    message = "Database Operation Failed";
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: errorSources,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
});

// seed student
seedStudent();

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
