import express from "express";
import burgerController from "../controllers/burgerController.js";

const routes = express.Router();

routes.get("/cheeseburgers", burgerController.listsAllBurgers);