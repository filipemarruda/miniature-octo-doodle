const fetch = require('node-fetch');

const fetchUsers = async () => {
  console.log('fetching users');
  const usersRequest = await fetch('https://www.scalablepath.com/api/test/test-users');
  return await usersRequest.json();
}

const fetchPosts = async () => {
  console.log('fetching posts');
  const postsRequest = await fetch('https://www.scalablepath.com/api/test/test-posts');
  return await postsRequest.json();
}

module.exports = {
  fetchUsers,
  fetchPosts
}