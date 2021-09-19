const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pass123',
    database: 'nodelogin'
});

module.exports = dbConnection.promise();