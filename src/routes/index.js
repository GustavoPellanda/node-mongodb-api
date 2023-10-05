import express from "express";
import burguers from "./burgerRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Hello!"));
    app.use(express.json(), burguers);
};
  
export default routes;