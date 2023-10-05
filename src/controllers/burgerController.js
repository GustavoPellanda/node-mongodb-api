import burger from "../models/Burger.js";

class burgerController {
    
    static async listsAllBurgers (req, res){
        const cheeseburgers = await burger.find({});
        res.status(200).json(cheeseburgers);
    }

    static async registersNewBurger (req, res){
        try {
            const newBurger = await burger.create(req.body);
            res.status(201).json({message: "Burger received!", burger: newBurger});
        } catch (error){
            res.status(500).json({ message: "Error registering burguer.", error: error.message });
        }
    }

};

export default burgerController;