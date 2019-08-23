import express from "express";
import {Thread, User} from "../../../interfaces/index";
import {ThreadStore} from "../stores/index";
const threadsRouter = express.Router();

const dummyUser = {
  displayName: "tim mueller",
  username: "tim",
};

/* GET thread listing. */
threadsRouter.get("/", async (req, res) => {
  const threads = await ThreadStore.find();
  res.json(threads);
});
threadsRouter.post("/", async (req, res) => {
  const thread = new ThreadStore(req.body);
  const newThread = await thread.save();
  res.json(newThread);
});

export default threadsRouter;
