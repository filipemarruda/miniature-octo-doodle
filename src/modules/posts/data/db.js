const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const db_name = path.join(__dirname, "posts.db");

const _getConnection = async () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(db_name, err => {
      if (err) {
        reject(err)
      } else {
        resolve(db);
      }
    });
  });
}

const createTable = async () => {
  return new Promise(async (resolve, reject) => {
    const db = await _getConnection();
    const sqlCreate = `CREATE TABLE IF NOT EXISTS posts (
      id INTEGER,
      user_id INTEGER,
      title TEXT,
      body TEXT,
      image TEXT
    );`;
    db.run(sqlCreate, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
    db.close();
  });
}

module.exports = {
  createTable,
}