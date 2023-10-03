import mongoose from "mongoose";

async function connectsToDatabase(){
    mongoose.connect(""); // Insert connection string (create a .env file maybe)
};

export default connectsToDatabase;