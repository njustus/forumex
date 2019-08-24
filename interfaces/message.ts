import {Document, Schema, Types} from "mongoose";
import {Thread, User} from "./index";

export interface MessageDoc extends Message, Document {
  _id: Types.ObjectId;
}

export interface Message {
  _id: Types.ObjectId;
  author: User;
  content: string;
  threadId: Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}
