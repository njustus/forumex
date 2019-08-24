import mongoose, {Schema} from "mongoose";
import {Thread} from "../../../interfaces/index";
import {MessageSchema, UserSchema} from "./index";

export const ThreadSchema = new Schema({
  title: { type: String, required: true},
  description: {type: String, required: true},
  author: {type: UserSchema, required: true},
  createdAt: {type: Date, required: true},
  updatedAt: Date,
});

export const ThreadStore = mongoose.model<Thread>("Thread", ThreadSchema);
