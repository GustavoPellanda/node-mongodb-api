import express from "express";
import burgers from "./burgerRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Hello!"));
    app.use(express.json(), burgers);
};
  
export default routes;