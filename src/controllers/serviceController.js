const serviceModel = require("../models/serviceModel");

exports.getAllServices = async (req, res) => {
    try {
        const services = await serviceModel.getAllServices();
        res.json(services);
    } catch (err) {
        console.error("Error in serviceController.getAllServices", err);
        res.status(500).send("Error retrieving services");
    }
};

exports.createService = async (req, res) => {
    try {
        const serviceData = req.body;
        const result = await serviceModel.createService(serviceData);
        res.status(201).send("Service added successfully");
    } catch (err) {
        console.error("Error in serviceController.createService", err);
        res.status(500).send("Error adding service");
    }
};
