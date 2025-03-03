import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 character"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 character"]
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone must contain at least 11 Digits"],
        maxLength: [11, "Phone must contain at least 11 Digits"]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Phone must contain at least 10 characters"],
    },

});

export const Message = mongoose.model("Message", messageSchema);