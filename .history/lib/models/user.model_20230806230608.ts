import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type: String, required: true},
    username:{type: String, required: true},unique,
}); 