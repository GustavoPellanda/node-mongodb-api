import express from "express";
import connectsToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const dbConnection = await connectsToDatabase();
dbConnection.once("open", () => {
    console.log("Connection to MongoDB successful.");
});
dbConnection.on("error", (e) => {
    console.log("Error connecting to MongoDB.", e);
});

const app = express();
routes(app);

export default app;
