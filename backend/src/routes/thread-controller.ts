import express from "express";
import {Thread, User} from "../../../interfaces/index";
import {ThreadStore} from "../stores/index";
import { paramAsId } from "./extractors";
import messagesRouter from "./messages-controller";

const threadsRouter = express.Router({mergeParams: true});

const dummyUser = {
  displayName: "tim mueller",
  username: "tim",
};

/* GET thread listing. */
threadsRouter.get("/", async (req, res) => {
  const threads = await ThreadStore.find().sort("-createdAt");
  res.json(threads);
});
threadsRouter.get("/:threadId", async (req, res) => {
  const thread = await ThreadStore.findOne({_id: paramAsId(req, "threadId")});
  res.json(thread);
});
threadsRouter.post("/", async (req, res) => {
  const thread = new ThreadStore(req.body);
  thread.createdAt = new Date();
  const newThread = await thread.save();
  res.json(newThread);
});

threadsRouter.use("/:threadId/messages", messagesRouter);

export default threadsRouter;
