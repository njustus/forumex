import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import path from "path";

import threadsRouter from "./routes/threads";
import usersRouter from "./routes/users";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/threads", threadsRouter);

module.exports = app;
