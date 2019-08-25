import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
import path from "path";

import config from "./config";
import threadsRouter from "./routes/thread-controller";
import usersRouter from "./routes/users";

const route = (route: string) => `/api/${route}`;

mongoose.connect(config.mongoAddress(), {useNewUrlParser: true});

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(route("users"), usersRouter);
app.use(route("threads"), threadsRouter);
module.exports = app;
