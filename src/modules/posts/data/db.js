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

const insert = async (post) => {
  return new Promise(async (resolve, reject) => {
    const db = await _getConnection();
    const sql = `INSERT INTO posts (id, user_id, title, body, image) VALUES (?, ?, ?, ?, ?);`;
    db.run(sql, [post.id, post.user_id, post.title, post.body, post.image], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
    db.close();
  });
}

const selectAll = async () => {
  return new Promise(async (resolve, reject) => {
    const db = await _getConnection();
    const sql = "SELECT * FROM posts";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
    db.close();
  });
}

module.exports = {
  createTable,
  insert,
  selectAll
}