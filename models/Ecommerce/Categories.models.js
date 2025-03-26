import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
},{timestamps:true})


export const Categories = mongoose.model("Categories", categoriesSchema)