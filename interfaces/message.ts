import {Document, Schema} from "mongoose";
import {Thread, User} from "./index";

export interface Message extends Document {
  author: User;
  content: string;
  threadId: Schema.Types.ObjectId;
}
