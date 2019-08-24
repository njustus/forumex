import { Document, Types } from "mongoose";
import {Message, Section, User} from "./index";

export interface ThreadDoc extends Document, Thread {
  _id: Types.ObjectId;
}

export interface Thread {
  parent?: Section;
  _id: Types.ObjectId;
  title: string;
  description: string;
  author: User;
  messages?: Message[];
  createdAt: Date;
  updatedAt?: Date;
}
