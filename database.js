const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pinki@123',
    database: 'mydb'
});
 
// connect to database
mc.connect();

module.exports = mc; 