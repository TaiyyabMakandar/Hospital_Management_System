// import mongoose from "mongoose";
// import validator from "validator";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minLength: [3, "First Name must contain at least 3 character"]
//     },
//     lastName: {
//         type: String,
//         required: true,
//         minLength: [3, "Last Name must contain at least 3 character"]
//     },
//     email: {
//         type: String,
//         required: true,
//         validator: [validator.isEmail, "Please provide a valid email"]
//     },
//     phone: {
//         type: String,
//         required: true,
//         minLength: [11, "Phone must contain at least 11 Digits"],
//         maxLength: [11, "Phone must contain at least 11 Digits"]
//     },
//     nic: {
//         type: String,
//         required: true,
//         minLength: [11, "NIC must contain at least 11 Digits"],
//         maxLength: [11, "NIC must contain at least 11 Digits"]
//     },
//     dob: {
//         type: String,
//         required: [true, "DOB is required"],
//     },
//     gender: {
//         type: String,
//         required: true,
//         enum: ["Male", "Female"],
//     },
//     password: {
//         type: String,
//         minLength: [8, "Password must contain at least 8 characters"],
//         required: true,
//         select: false
//     },
//     role: {
//         type: String,
//         required: true,
//         enum: ["Admin", "Patient", "Doctor"],
//     },
//     doctorDepartment: {
//         type: String,
//     },
//     docAvatar: {
//         public_id: String,
//         url: String,
//     },
// });

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.comparePassword = async function (enterPassword) {
//     return await bcrypt.compare(enterPassword, this.password);
// };

// userSchema.methods.generateJsonWebToken = function () {
//     return jwt.sign({
//         id: this._id
//     },
//         process.env.JWT_SECRET_KEY, {
//         expiresIn: process.env.JWT_EXPIRES,
//     }
//     )
// }

// export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name Is Required!"],
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name Is Required!"],
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    email: {
        type: String,
        required: [true, "Email Is Required!"],
        validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone: {
        type: String,
        required: [true, "Phone Is Required!"],
        minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    nic: {
        type: String,
        required: [true, "NIC Is Required!"],
        minLength: [13, "NIC Must Contain Only 13 Digits!"],
        maxLength: [13, "NIC Must Contain Only 13 Digits!"],
    },
    dob: {
        type: Date,
        required: [true, "DOB Is Required!"],
    },
    gender: {
        type: String,
        required: [true, "Gender Is Required!"],
        enum: ["Male", "Female"],
    },
    password: {
        type: String,
        required: [true, "Password Is Required!"],
        minLength: [8, "Password Must Contain At Least 8 Characters!"],
        select: false,
    },
    role: {
        type: String,
        required: [true, "User Role Required!"],
        enum: ["Patient", "Doctor", "Admin"],
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User", userSchema);
