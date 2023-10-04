import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectsToDatabase() {
  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error("MongoDB connection string is not defined in the .env file.");
  }

  mongoose.connect(connectionString);
  return mongoose.connection;
}

export default connectsToDatabase;
