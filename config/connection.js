var mysql = require("mysql");
var conn;

if ( process.env.JAWSDB_URL ){
    conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var conn = mysql.createConnection({
        host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "fkfkwm9nkv9p03gl",
        database: "ji8cc56wxea75wzz",
        password: "f2t3mkp29gplveip"
    })
}

conn.connect();

module.exports = conn;