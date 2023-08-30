// models/topic.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: String,
  description: String,
  features: String,
  imageurl: String,
  livelink: String,
  gitlink: String,
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current timestamp
  },
});

let projectschema;

try {
  projectschema = mongoose.model("Project");
} catch {
  projectschema = mongoose.model("Project", projectSchema);
}

export default projectschema;
