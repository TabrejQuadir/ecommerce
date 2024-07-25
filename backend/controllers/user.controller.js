const Users = require("../model/UserSchema.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config();

const signUp = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Log the request body

        // Check if user already exists
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with same email address" });
        }

        // Initialize empty cart
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create new user
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart,
        });

        // Save the user to the database
        await user.save();

        // Create JWT token
        const data = {
            user: {
                id: user.id,
                username: user.name, 
            },
        }

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response
        res.json({
            success: true,
            token,
            user,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Creating Login Endpoint
const login = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Log the request body

        // Check if user exists
        let user = await Users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, errors: "Wrong Email" });
        }

        // Compare the password
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (!passCompare) {
            return res.status(400).json({ success: false, errors: "Wrong Password" });
        }

        // Create JWT token
        const data = {
            user: {
                id: user.id,
                username:user.name,
            },
        };

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response
        res.json({
            success: true,
            token,
            user
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { signUp, login };
