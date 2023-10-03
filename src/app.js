import express from "express";

const app = express();
app.use(express.json());

const cheeseburgers = [
    {
        id: 1,
        burger: "Bacon Cheeseburger"
    },
    {
        id: 2,
        burger: "Spicy Cheeseburger"
    },
    {
        id: 3,
        burger: "Mushroom Swiss Cheeseburger"
    },
    {
        id: 4,
        burger: "Jalapeño Popper Cheeseburger"
    },
    {
        id: 5,
        burger: "Avocado Bacon Cheeseburger"
    },
    {
        id: 6,
        burger: "BBQ Ranch Cheeseburger"
    },
    {
        id: 7,
        burger: "Teriyaki Pineapple Cheeseburger"
    },
    {
        id: 8,
        burger: "Buffalo Blue Cheeseburger"
    },
    {
        id: 9,
        burger: "Guacamole Fiesta Cheeseburger"
    },
    {
        id: 10,
        burger: "Southwest Chipotle Cheeseburger"
    }
];

function searchburger(id) {
    return cheeseburgers.findIndex(burger => burger.id === Number(id));
}

app.get("/", (req, res) => {
    res.status(200).send("Hello!");
});

app.get("/cheeseburgers", (req, res) => {
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