import express, {Request, Response} from "express";
import mongoose from "mongoose";
import {Thread, User} from "../../../interfaces/index";
import MessageStore from "../stores/message-store";
import {ThreadStore} from "../stores/thread-store";
const messagesRouter = express.Router();

messagesRouter.post("/", async (req, res) => {
  req.body.threadId = new mongoose.Types.ObjectId(req.params.threadId);
  const message = new MessageStore(req.body);
  const newMsg = await message.save();
  res.json(newMsg);
});

export default messagesRouter;
