import mongoose from "mongoose";

const burguerSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String },
    ingredients: { type: String },
    spicinessLevel: { type: Number }, 
    price: { type: Number }
}, { versionKey: false });

const burger = mongoose.model("burguers", burguerSchema);
export default burger;