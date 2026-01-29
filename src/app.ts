import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// route
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//  not fund handler

app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});

//  generic error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!" });
});

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
