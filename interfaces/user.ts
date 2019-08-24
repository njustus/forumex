import {Document} from "mongoose";

export interface UserDoc extends User, Document {}

export interface User {
  username: string;
  displayName?: string;
}
