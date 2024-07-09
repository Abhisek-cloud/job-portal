import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new Schema({
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    default: "new user",
    type: String,
    enum: ["new user", "candidate", "employer"],
  },
  providerId: {
    type: String,
  },
  userName: {
    type: String,
  },
  recurterInfo: {
    name: { type: String },
    companyRole: { type: String },
    companyName: { type: String },
  },
  candidateInfo: {
    name: { type: String },
    currentJobLocation: { type: String },

    noticePeriod: { type: String },
    skills: { type: String },
    currentCompany: { type: String },

    totalExperience: { type: String },
    college: { type: String },

    graduatedYear: { type: String },
    linkedinProfile: { type: String },
    githubProfile: { type: String },
    resume: { type: String },
  },
  memberShipEndDate: String,
  memberShipStartDate: String,
  memberShipType: String,
  isPremiumUser: Boolean,
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
