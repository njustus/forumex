import {Document} from "mongoose";

export interface Section extends Document {
  _id: string;
  name: string;
  parent?: Section;
}
