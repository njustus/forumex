import express from "express";
import {Thread, User} from "../../../interfaces/index";
const threadsRouter = express.Router();

const dummyUser = {
  displayName: "tim mueller",
  username: "tim",
};

/* GET thread listing. */
threadsRouter.get("/", (req, res) => {
  const thread = {
    author: dummyUser,
    description: "just a sample",
    id: "abc-123",
    title: "a sample thread",
  };
  res.json([thread]);
});

export default threadsRouter;
