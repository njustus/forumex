import express from "express";
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", (req, res) => {
  res.json({name: "nico", age: 25});
});

export default usersRouter;
