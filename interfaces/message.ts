import {Document, Schema} from "mongoose";
import {Thread, User} from "./index";

export interface Message extends Document {
  _id: string;
  author: User;
  content: string;
  threadId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}
