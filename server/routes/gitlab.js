/**
 * Created by sapardi on 1/19/14.
 */

// add library
var mysql = require('mysql');

// Configurasi server mysql
var MYSQL_USERNAME = 'root';
var MYSQL_PASSWORD = 'fatihah';
var MYSQL_HOST = '192.168.56.104';

// Seting koneksi
var client = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD
});

// Hapus database lama
client.query('DROP DATABASE IF EXISTS GitlabDB', function (err) {
   if (err) {
       throw err;
   }
});

// Buat database baru
client.query('CREATE DATABASE GitlabDB', function (err) {
   if (err) {
       throw err;
   }
});
console.log('database GitlabDB sudah dibuat...');
client.query('USE GitlabDB');

// Buat tabel baru
var sql = ""+
    "CREATE TABLE USERS("+
    "ID INT UNSIGNED NOT NULL AUTO_INCREMENT,"+
    "NAMA VARCHAR(50) NOT NULL DEFAULT 'UNKNOWN',"+
    "EMAIL VARCHAR(30) NOT NULL DEFAULT 'xxx@xxx.xxx',"+
    "PRIMARY KEY (ID)"+
    ");";
client.query(sql, function(err) {
   if (err) { throw err; }
});
console.log("Tabel User sudah dibuat...");

// Function untuk menambah User baru
exports.add_user = function(data, callback) {
    client.query("INSERT INTO USERS (nama, email) VALUES (?,?)", [data.nama, data.email], function(err, info) {
        // callback function mengembalikan nilai insert id terakhir
        callback(info.insertId);
        console.log("User "+data.nama+" memiliki email "+data.email);
    });
}

exports.get_user = function(err) {
    client.query("SELECT * FROM USERS", function(err, results, fields) {
        // callback function mengembalikan array user
        callback(results);
    });
}





