import {Document} from "mongoose";
import {Message, Section, User} from "./index";

export interface Thread extends Document {
  parent?: Section;
  _id: string;
  title: string;
  description: string;
  author: User;
  messages?: Message[];
}
