const { 
  createTable,
  selectAll,
  insert 
} = require('./data/db');

const _init = async () => {
  await createTable();
}

const saveAll = async (posts) => {
  const promises = posts.map(async post => {
    await insert(post);
  });
  await Promise.all(promises);
}

const getAll = async () => {
  await _init();
  return await selectAll();
}

module.exports = {
  saveAll,
  getAll
}