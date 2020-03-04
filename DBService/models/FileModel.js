const db = require('../db');

class FileModel {
  static async create({title, url}) {
    db.query(`INSERT INTO \`files\`(\`title\`, \`url\`) 
              VALUES(?, ?)`,[title, url])
  }
}

module.exports = FileModel;