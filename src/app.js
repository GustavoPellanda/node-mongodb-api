import express from "express";
import connectsToDatabase from "./config/dbConnect.js";
import burger from "./models/Burger.js";

const dbConnection = await connectsToDatabase();
dbConnection.once("open", () => {
    console.log("Connection to MongoDB successful.");
});
dbConnection.on("error", (e) => {
    console.log("Error connecting to MongoDB.", e);
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello!");
});

app.get("/cheeseburgers", async (req, res) => {
    const cheeseburgers = await burger.find({});
    res.status(200).json(cheeseburgers);
});

app.get("/cheeseburgers/:id", (req, res) => {
    const index = searchburger(req.params.id);
    if (index !== -1) {
        res.status(200).json(cheeseburgers[index]);
    } else {
        res.status(404).send("Burger not found.");
    }
});

app.post("/cheeseburgers", (req, res) => {
   cheeseburgers.push(req.body);
   res.status(201).send("Burger received!");
});

app.patch("/cheeseburgers/:id", (req, res) => {
    const index = searchburger(req.params.id);
    if (index !== -1) {
        cheeseburgers[index].burger = req.body.burger;
        res.status(200).send("Burger updated!");
    } else {
        res.status(404).send("Burger not found.");
    }
});

app.delete("/cheeseburgers/:id", (req, res) => {
    const index = searchburger(req.params.id);
    if (index !== -1) {
        cheeseburgers.splice(index, 1);
        res.status(200).send("Burger deleted!");
    } else {
        res.status(404).send("Burger not found.");
    }
});

export default app;