const express = require("express");
const router = express.Router();
const sectorController = require("../controllers/sectorController");

const authenticateToken = require("../middleware/authMiddleware");

router.get("/sectors", authenticateToken, sectorController.getAllSectors);
router.post("/sectors", authenticateToken, sectorController.createSector);

module.exports = router;
