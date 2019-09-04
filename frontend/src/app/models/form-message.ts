import { User } from '../../../../interfaces';

export interface FormMessage {
  author: User,
  content: string,
  threadId: string,
}