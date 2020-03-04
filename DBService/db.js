
require('dotenv').config();
const mysql = require('mysql');

var db = mysql.createConnection({
  host     :  process.env.DB_HOST,
  user     :  process.env.DB_USER,
  password :  process.env.DB_PASS,
  database :  process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});

db.query(" \
  CREATE TABLE IF NOT EXISTS `files` ( \
    `id` Int UNSIGNED AUTO_INCREMENT NOT NULL,\
    `title` VarChar( 255 ) NOT NULL,\
    `url` Text NULL,\
    PRIMARY KEY (`id`) \
  )", function (error, results, fields) {
    if (error) throw error;
});



module.exports = db;