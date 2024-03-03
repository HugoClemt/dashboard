const client = require("../config/database");
const bcrypt = require('bcrypt');

exports.getAllUsers = async () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT * FROM users", (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

exports.createUser = async (userData) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const userDataWithHashedPassword = {
        ...userData,
        password: hashedPassword
    };

    return new Promise((resolve, reject) => {
        client.query("INSERT INTO users SET ?", userDataWithHashedPassword, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
