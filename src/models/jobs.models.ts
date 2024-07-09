import mongoose from "mongoose";
import User from "./user.model";

const jobsSchema = new mongoose.Schema({
  companyName: { type: String },
  title: { type: String },
  location: { type: String },
  skills: { type: String },
  experince: { type: String },
  type: { type: String },
  recruiterId: { type: mongoose.Schema.ObjectId, ref: User },
  description: { type: String },
  applicants: [
    {
      applicantID: {
        type: mongoose.Schema.ObjectId,
        ref: User,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      userId: {
        type: String,
      },
      status: {
        type: String,
      },
    },
  ],
});

const Jobs = mongoose.models?.Jobs || mongoose.model("Jobs", jobsSchema);
export default Jobs;
