import mongoose, {Schema} from "mongoose";
import {Thread} from "../../../interfaces/index";
import {MessageSchema, UserSchema} from "./index";

export const ThreadSchema = new Schema({
  title: String,
  description: String,
  author: UserSchema
});

export const ThreadStore = mongoose.model<Thread>("Thread", ThreadSchema);
