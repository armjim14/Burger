var express = require("express");
var exh = require("express-handlebars");
var mysql = require("mysql");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var conn = mysql.createConnection({
    host: "localhost",
    port: 0000,
    user: "root",
    database: "restaurants",
    password: ""
})

conn.connect();

app.engine("handlebars", exh({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    conn.query(`SELECT * FROM food`, (err, data) => {
        res.render("index", {send: data});
    })
})

app.post("/api/food", (req, res) => {
    var item = req.body.input;
    conn.query(`INSERT INTO food (namex, done) values ('${item}', false)`, (err, data) => {
        if (err) throw err;
    })
})

app.put("/move/:id", (req, res) => {
    conn.query(`UPDATE food SET done = true WHERE id = ${req.params.id}`, (err, data) => {
        if (err) throw err;
    })
})

app.listen(3000, () => {
    console.log("localhost:3000");
})