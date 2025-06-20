import mongoose, { Schema, Types } from "mongoose";
import { ITestimonial } from "./testimonial-model";
import { ICategory } from "./category-model";
import { IUser } from "./user-model";
import { IModule } from "./module-model";
import { MongoDocument } from "@/lib/convertData";

export interface ICourse extends MongoDocument {
  _id: Types.ObjectId;
  title: string;
  subtitle?: string;
  description: string;
  thumbnail: string;
  modules: IModule[];
  price: number;
  active: boolean;
  category: ICategory;
  instructor: IUser;
  testimonials?: ITestimonial[];
  quizSet?: Types.ObjectId;
  learning: string[];
  createdOn: Date;
  modifiedOn: Date;
  __v?: number;
}

const CourseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  modules: [
    {
      type: Schema.Types.ObjectId,
      ref: "Module",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testimonials: [
    {
      type: Schema.Types.ObjectId,
      ref: "Testimonial",
    },
  ],
  quizSet: {
    type: Schema.Types.ObjectId,
    ref: "QuizSet",
  },
  learning: [
    {
      required: true,
      type: String,
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

export const Course =
  mongoose.models.Course ?? mongoose.model<ICourse>("Course", CourseSchema);
