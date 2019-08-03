var conn = require("./connection.js")

var layout = {

    selectAll: (fun) => {
        conn.query("SELECT * FROM food", (err, data) => {
            fun(data)
        })
    },

    insertOne: (item) => {
        conn.query("INSERT INTO food (namex, done) values (?, false)",[item] , (err, data) => {
            console.log(data);
        })
    },

    updateOne: (item) => {
        conn.query("UPDATE food SET done = true WHERE id = ?",[item] , (err, data) => {
            console.log(data);
        })
    }

};

module.exports = layout;