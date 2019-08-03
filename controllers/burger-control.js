var orm = require("./../config/orm.js");

var sendOver = {
    all = () => {
        return orm.selectAll();
    }
}

module.exports = sendOver;