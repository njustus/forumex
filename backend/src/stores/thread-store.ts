import mongoose, {Schema} from "mongoose";
import {Thread} from "../../../interfaces/index";
import {MessageSchema, UserSchema} from "./index";

export const ThreadSchema = new Schema({
  title: { type: String, required: true},
  description: {type: String, required: true},
  author: {type: UserSchema, required: true}
});

export const ThreadStore = mongoose.model<Thread>("Thread", ThreadSchema);
