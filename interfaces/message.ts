import {Thread, User} from "./index";

export interface Message {
  author: User;
  content: string;
  thread: Thread;
}
