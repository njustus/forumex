import express from "express";
const usersRouter = express.Router();
import {UserStore} from "../stores/index";

/* GET users listing. */
usersRouter.get("/", async (req, res) => {
  const users = await UserStore.find();
  res.json(users);
});
usersRouter.post("/", async (req, res) => {
  const user = new UserStore(req.body);
  res.json(await user.save());
});
usersRouter.get("/:userName", async (req, res) => {
  const user = await UserStore.find({username: req.params.userName});
  res.json(user);
});

export default usersRouter;
