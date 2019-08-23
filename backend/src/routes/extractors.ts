import {Request} from "express";
import mongoose from "mongoose";

export function paramAsId(req: Request, id: string): mongoose.Types.ObjectId {
  return mongoose.Types.ObjectId(req.params[id]);
}
