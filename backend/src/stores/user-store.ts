import mongoose, {Schema} from "mongoose";
import {UserDoc} from "../../../interfaces/index";

export const UserColSchema = new Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  displayName: String
});

export const UserSchema = new Schema({
  username: String,
  displayName: String
});

export const UserStore = mongoose.model<UserDoc>("User", UserColSchema);
