'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Pinki@123',
    database : 'mydb'
});

connection.connect(function(err) {
  console.log("Connected!");
  connection.query("create database mydb", function (err) {
    if (err) {
    console.log("Database already exist");
  }else{
    console.log("Database created");
  }
  });
});


var sql = "create table tasks(id int (10)NOT NULL AUTO_INCREMENT,task varchar(50)COLLATE utf8mb4_unicode_ci NOT NULL,status VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL, created_at varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE KEY task(value))ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";
connection.query(sql, function (err, result) {
  if (err) {
  console.log("table Already exist");
}
else{
  console.log("Table created");
}
})
module.exports = connection;