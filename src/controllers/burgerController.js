import burger from "../models/Burger.js";

class burgerController {
    
    static async listsAllBurgers (req, res){
        const cheeseburgers = await burger.find({});
        res.status(200).json(cheeseburgers);
    }

};

export default burgerController;