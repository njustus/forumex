import express, {Request, Response} from "express";
import mongoose from "mongoose";
import {Thread, User} from "../../../interfaces/index";
import MessageStore from "../stores/message-store";
import {ThreadStore} from "../stores/thread-store";
import { paramAsId } from "./extractors";
const messagesRouter = express.Router({ mergeParams: true });

messagesRouter.get("/", async (req, res) => {
  const msgs = await MessageStore.find({ threadId: paramAsId(req, "threadId")});
  res.json(msgs);
});
messagesRouter.get("/:messageId", async (req, res) => {
  const msgs = await MessageStore.find({ threadId: paramAsId(req, "threadId"), _id: paramAsId(req, "messageId") });
  res.json(msgs);
});
messagesRouter.post("/", async (req, res) => {
  req.body.threadId = paramAsId(req, "threadId");
  const message = new MessageStore(req.body);
  const newMsg = await message.save();
  res.json(newMsg);
});

export default messagesRouter;
