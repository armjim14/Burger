var conn = require(".connection.js")

var layout = {

    selectAll = () => {
        conn.query("SELECT * FROM food", (err, data) => {
            return data;
        })
    },

    insertOne = () => {

    },

    updateOne = () => {

    }

};

module.exports = layout;