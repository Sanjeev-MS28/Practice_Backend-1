const User = require("../models/userModel");

const signup = async (req, res) => {
    try {
        const { email, password, name, dateOfBirth } = req.body;
        console.log({ email, password, name, dateOfBirth });

        // Check if the user already exists
        const myuser = await User.findOne({ email });
        console.log(myuser, "user null de rhaa hin");

        if (myuser) {
            return res.status(400).send("User already exists");
        }

        // Create a new user instance using the User model
        const newUser = new User({
            email,
            password,
            name,
            dateOfBirth,
        });
        console.log(newUser);

        // Save the new user to the database
        await newUser.save();
        console.log(newUser);

        // Respond with the new user data
        res.status(201).send({ data: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};

module.exports = { signup };
