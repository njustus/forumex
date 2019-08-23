import mongoose, {Schema} from "mongoose";
import {User} from "../../../interfaces/index";

export const UserSchema = new Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  displayName: String
});

export const UserStore = mongoose.model<User>("User", UserSchema);
