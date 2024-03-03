const casesModel = require("../models/casesModel");

exports.getAllCases = async (req, res) => {
    try {
        const cases = await casesModel.getAllCases();
        res.json(cases);
    } catch (err) {
        console.error("Error in casesController.getAllCases", err);
        res.status(500).send("Error retrieving cases");
    }
}

exports.createCase = async (req, res) => {
    try {
        const caseData = req.body;
        const result = await casesModel.createCase(caseData);
        res.status(201).send("Case added successfully");
    } catch (err) {
        console.error("Error in casesController.createCase", err);
        res.status(500).send("Error adding case");
    }
}