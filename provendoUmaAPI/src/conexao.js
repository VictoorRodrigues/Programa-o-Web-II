const mysql = require('serverless-mysql')({
    config: {
        host: "localhost",
        database: "pokemon",
        user: "root",
        password: ""
    }
});

module.exports = mysql;