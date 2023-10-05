const model = require('./model');

const findAll = async () => {
  let posts = await model.getAll();
  if (posts.length !== 0) {
    return posts;
  }

}

module.exports = {
  findAll
}