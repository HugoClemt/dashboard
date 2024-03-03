const client = require("../config/database");

exports.getAllCases = async () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT * FROM cases", (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

exports.createCase = async (caseData) => {
    return new Promise((resolve, reject) => {
        client.query("INSERT INTO cases SET ?", caseData, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}