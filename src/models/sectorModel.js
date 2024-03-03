const client = require("../config/database");

exports.getAllSectors = async () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT * FROM sectors", (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.createSector = async (sectorData) => {
    return new Promise((resolve, reject) => {
        client.query("INSERT INTO sectors SET ?", sectorData, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
