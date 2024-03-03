const sectorModel = require("../models/sectorModel");

exports.getAllSectors = async (req, res) => {
    try {
        const sectors = await sectorModel.getAllSectors();
        res.json(sectors);
    } catch (err) {
        console.error("Error in sectorController.getAllSectors", err);
        res.status(500).send("Error retrieving sectors");
    }
};

exports.createSector = async (req, res) => {
    try {
        const sectorData = req.body;
        const result = await sectorModel.createSector(sectorData);
        res.status(201).send("Sector added successfully");
    } catch (err) {
        console.error("Error in sectorController.createSector", err);
        res.status(500).send("Error adding sector");
    }
};