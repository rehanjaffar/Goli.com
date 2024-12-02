import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/goli-db");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
