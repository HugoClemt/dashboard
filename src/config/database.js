const mysql = require("mysql");

const client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dashboard"
});

module.exports = client;