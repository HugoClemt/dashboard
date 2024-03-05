const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authMiddleware");
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
	try {
		const loginData = req.body;
		if (!loginData.username || !loginData.password) {
			return res.status(400).send("Invalid username or password");
		}

		const users = await userModel.getAllUsers();
		const user = users.find((user) => user.username === loginData.username);
		if (!user) {
			return res.status(400).send("User not found");
		}

		const passwordMatch = await bcrypt.compare(loginData.password, user.password);
		if (!passwordMatch) {
			return res.status(400).send("Invalid password");
		}

		const token = jwt.sign(
			{ username: user.username},
			process.env.JWT_SECRET
		);
		res.json({ token });
	} catch (err) {
		console.error("Error in login", err);
		res.status(500).send("Error logging in");
	}
});


router.get("/users", authenticateToken, userController.getAllUsers);
router.post("/users", authenticateToken, userController.createUser);

module.exports = router;
