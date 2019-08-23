import {Message, Section, User} from "./index";

export interface Thread {
  parent?: Section;
  id: string;
  title: string;
  description: string;
  author: User;
  messages?: Message[];
}
