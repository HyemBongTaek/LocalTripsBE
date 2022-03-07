import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";

import connectToDB from "./db";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  return res
    .status(500)
    .json({ message: "서버 에러 발생!", error: error.message });
});

app.listen(4000, async () => {
  console.log("✅ Server listening on 4000");
  await connectToDB();
});
