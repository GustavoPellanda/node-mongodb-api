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

// app.get("/cheeseburgers/:id", (req, res) => {
//     const index = searchburger(req.params.id);
//     if (index !== -1) {
//         res.status(200).json(cheeseburgers[index]);
//     } else {
//         res.status(404).send("Burger not found.");
//     }
// });

// app.patch("/cheeseburgers/:id", (req, res) => {
//     const index = searchburger(req.params.id);
//     if (index !== -1) {
//         cheeseburgers[index].burger = req.body.burger;
//         res.status(200).send("Burger updated!");
//     } else {
//         res.status(404).send("Burger not found.");
//     }
// });

// app.delete("/cheeseburgers/:id", (req, res) => {
//     const index = searchburger(req.params.id);
//     if (index !== -1) {
//         cheeseburgers.splice(index, 1);
//         res.status(200).send("Burger deleted!");
//     } else {
//         res.status(404).send("Burger not found.");
//     }
// });

export default app;