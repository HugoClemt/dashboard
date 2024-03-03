const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

const authenticateToken = require("../middleware/authMiddleware");

router.get("/services", authenticateToken, serviceController.getAllServices);
router.post("/services", authenticateToken, serviceController.createService);


module.exports = router;
