const api = require('./data/api');
const model = require('./model');

const _getUserMap = async () => {
  return (await api.fetchUsers()).reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}

const _getPosts = async () => {
  const usersMap = await _getUserMap();
  return (await api.fetchPosts()).map(post => {
    post.authorName = usersMap[post.userId].name;
    return post;
  });
}

const findAll = async () => {
  let posts = await model.getAll();
  if (posts.length !== 0) {
    return posts;
  }

}

module.exports = {
  findAll
}