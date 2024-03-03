const userModel = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error("Error in userController.getAllUsers", err);
        res.status(500).send("Error retrieving users");
    }
};

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await userModel.createUser(userData);
        res.status(201).send("User added successfully");
    } catch (err) {
        console.error("Error in userController.createUser", err);
        res.status(500).send("Error adding user");
    }
};
