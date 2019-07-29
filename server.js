var express = require("express");
var exh = require("express-handlebars");

var app = express();

app.engine("handlebars", exh({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var fav = [
    {
    name: "what"
    },
    {
    name: "no"
    }
]

app.get("/test", (req, res) => {
    res.render("index", {send: fav});
})

app.listen(3000, () => {
    console.log("localhost:3000");
})