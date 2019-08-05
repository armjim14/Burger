var express = require("express");
var exh = require("express-handlebars");
var orm = require("./config/orm.js");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exh({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    orm.selectAll((data) => {
        res.render("index", {send: data});
    });
})

app.post("/api/food", (req, res) => {
    var item = req.body.input;
    orm.insertOne(item);
    res.redirect("/");
})

app.put("/move/:id", (req, res) => {
    var item = req.params.id
    orm.updateOne(item);
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})