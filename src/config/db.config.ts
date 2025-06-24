import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Alaganeni:Student@training-cluster.xt9h5.mongodb.net/?retryWrites=true&w=majority&appName=training-cluster');
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed", err);
    process.exit(1);
  }
};
