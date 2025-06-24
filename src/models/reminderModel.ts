import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: String
}, { timestamps: true });

export const Reminder = mongoose.model("Reminder", reminderSchema);
