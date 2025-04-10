import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(express.static("files"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";

// Routes
app.use("/api/v1/user", userRouter);

export { app };
