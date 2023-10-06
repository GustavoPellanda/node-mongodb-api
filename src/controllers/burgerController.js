import burger from "../models/Burger.js";

class burgerController {
    
    static async listsAllBurgers(req, res){
        try{
            const cheeseburgers = await burger.find({});
            res.status(200).json(cheeseburgers);
        } catch (error) {
            res.status(500).json({ message: "Can't find burgers.", error: error.message });
        }
    }

    static async listsBurgerById(req, res){
        try{
            const id = req.params.id;
            const cheeseburger = await burger.findById(id);
            res.status(200).json(cheeseburger);
        } catch (error) {
            res.status(500).json({ message: "Can't find burger.", error: error.message });
        }
    }

    static async registersNewBurger(req, res){
        try {
            const newBurger = await burger.create(req.body);
            res.status(201).json({ message: "Burger received!", burger: newBurger });
        } catch (error) {
            res.status(500).json({ message: "Error registering burger.", error: error.message });
        }
    }

    static async updatesBurger(req, res){
        try {
            const id = req.params.id;
            const updatedBurger = await burger.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({ message: "Burger updated!", burger: updatedBurger });
        } catch (error) {
            res.status(500).json({ message: "Error updating burger.", error: error.message });
        }
    }

    static async deletesBurger(req, res){
        try {
            const id = req.params.id;
            await burger.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting burger.", error: error.message });
        }
    }
};

export default burgerController;
