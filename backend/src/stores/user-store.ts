import mongoose, {Schema} from "mongoose";
import {User} from "../../../interfaces/index";

export const UserSchema = new Schema({
  username: String,
  displayName: String
});
