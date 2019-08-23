import mongoose, {Schema} from "mongoose";
import {Message} from "../../../interfaces/index";
import {UserSchema} from "./index";

export const MessageSchema = new Schema({
  author: UserSchema,
  content: String,
  threadId: Schema.Types.ObjectId,
});
const MessageStore = mongoose.model<Message>("Message", MessageSchema);
export default MessageStore;
