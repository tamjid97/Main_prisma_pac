import "dotenv/config";
import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";

import cors from "cors";
import httpStatus from "http-status";

import bcrypt from "bcryptjs";
import config from "./config";
import { prisma } from "./lib/prisma";
import { userRoutes } from "./modules/user/user.route";
;

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO EPICK");
});

app.use("/api/users",userRoutes)

export default app;
