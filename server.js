var express = require("express");
var exh = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// var conn = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     database: "restaurants",
//     password: ""
// })

// conn.connect();

app.engine("handlebars", exh({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", (req, res) => {
//     conn.query(`SELECT * FROM food`, (err, data) => {
//         res.render("index", {send: data});
//     })
// })

var test = [
    {
        id: 1,
        name: "bacon burger",
        done: false
    },
    {
        id: 2,
        name: "double burger",
        done: true
    }
]

app.get("/", (req, res) => {
    res.render("index", {send: test})
})

app.listen(3000, () => {
    console.log("localhost:3000");
})