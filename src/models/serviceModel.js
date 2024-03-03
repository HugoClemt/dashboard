const client = require("../config/database");

exports.getAllServices = async () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT * FROM services", (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.createService = async (serviceData) => {
    return new Promise((resolve, reject) => {
        client.query("INSERT INTO services SET ?", serviceData, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
