var express = require("express");
var exh = require("express-handlebars");
var dataB = require("./controllers/burger-control.js")

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exh({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    var allx = dataB.all();
    res.render("index", {send: allx});
})

app.post("/api/food", (req, res) => {
    var item = req.body.input;
    conn.query(`INSERT INTO food (namex, done) values ('${item}', false)`, (err, data) => {
        if (err) throw err;
        res.redirect("/");
    })
})

app.put("/move/:id", (req, res) => {
    conn.query(`UPDATE food SET done = true WHERE id = ${req.params.id}`, (err, data) => {
        if (err) throw err;
        res.redirect("/");
    })
})

app.listen(3000, () => {
    console.log("localhost:3000");
})