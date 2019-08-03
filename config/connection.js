var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    port: 0000,
    user: "root",
    database: "restaurants",
    password: ""
})

conn.connect();

module.exports = conn;