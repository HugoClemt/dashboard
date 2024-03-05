const express = require("express");
const cors = require('cors');
const userRoutes = require("./src/routes/userRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");
const sectorRoutes = require("./src/routes/sectorRoutes");
const casesRoutes = require("./src/routes/casesRoutes");
const client = require("./src/config/database");

const app = express();
app.use(express.json());
app.use(cors());

client.connect((err) => {
    if (err) {
        console.error("Error connecting to database", err);
    } else {
        console.log("Connected to database");
    }
});

app.use("/", userRoutes);
app.use("/", serviceRoutes);
app.use("/", sectorRoutes);
app.use("/", casesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to the service provider API");
});

process.env.JWT_SECRET = "HugoClemtToujoursLeMeilleur";
