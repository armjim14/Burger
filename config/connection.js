var mysql = require("mysql");
var conn;

if ( process.env.JAWSDB_URL ){
    conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var conn = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        database: "restaurants",
        password: "rootroot"
    })
}

conn.connect();

module.exports = conn;