import mongoose, {Schema} from "mongoose";
import {Message} from "../../../interfaces/index";
import {UserSchema} from "./index";

export const MessageSchema = new Schema({
  author: {type: UserSchema, required: true},
  content: {type: String, required: true},
  threadId: {type: Schema.Types.ObjectId, required: true},
  createdAt: { type: Date, required: true },
  updatedAt: Date,
});
const MessageStore = mongoose.model<Message>("Message", MessageSchema);
export default MessageStore;
