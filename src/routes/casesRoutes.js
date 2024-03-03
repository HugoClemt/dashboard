const express = require("express");
const router = express.Router();
const casesController = require("../controllers/casesController");

const authenticateToken = require("../middleware/authMiddleware");


router.get("/cases", authenticateToken, casesController.getAllCases);
router.post("/cases", authenticateToken, casesController.createCase);

module.exports = router;