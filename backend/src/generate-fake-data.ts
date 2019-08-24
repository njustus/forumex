import faker from "faker";
import mongoose from "mongoose";
import R from "ramda";
import { Message, Thread, User } from "../../interfaces";
import config from "./config";
import MessageStore from "./stores/message-store";
import {ThreadStore} from "./stores/thread-store";
const debug = require("debug")("forumex:faker");

debug("connecting to mongodb..");
mongoose.connect(config.mongoAddress(), {useNewUrlParser: true});

const threads: Thread[] = R.repeat(5, 10).map((five) => {
  const user: User = {
    displayName: faker.name.findName(),
    username: faker.internet.userName()
  };
  return {
    _id: mongoose.Types.ObjectId(),
    title: faker.hacker.noun(),
    description: faker.lorem.sentences(5),
    author: user,
    createdAt: faker.date.recent()
  };
});

const promises = threads.map(async (thread) => {
  delete thread._id;
  let threadModel = new ThreadStore(thread);
  debug("writing: ", thread);
  threadModel = await threadModel.save();
  for (let i = 0; i < 9; i++) {
    const user: User = {
      displayName: faker.name.findName(),
      username: faker.internet.userName()
    };
    const msg: Message = {
      _id: mongoose.Types.ObjectId(),
      author: user,
      content: faker.lorem.sentences(10),
      threadId: threadModel._id,
      createdAt: faker.date.recent()
    };
    const msgModel = new MessageStore(msg);
    debug("writing: ", msgModel);
    await msgModel.save();
  }
  return threadModel;
});

Promise.all(promises);
debug("faker finished!");

mongoose.connection.close();
