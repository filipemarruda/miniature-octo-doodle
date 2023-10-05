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
