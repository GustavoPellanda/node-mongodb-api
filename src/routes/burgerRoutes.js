import express from "express";
import burgerController from "../controllers/burgerController.js";

const routes = express.Router();

routes.get("/cheeseburgers", burgerController.listsAllBurgers);
routes.get("/cheeseburgers/:id", burgerController.findsBurgerById);
routes.get("/cheeseburgers/name", burgerController.findsBurgerByName);
routes.post("/cheeseburgers", burgerController.registersNewBurger);
routes.patch("/cheeseburgers/:id", burgerController.updatesBurger);
routes.delete("/cheeseburgers/:id", burgerController.deletesBurger);

export default routes;
