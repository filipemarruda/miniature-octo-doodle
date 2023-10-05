const { 
  createTable,
  selectAll,
} = require('./data/db');

const _init = async () => {
  await createTable();
}


const getAll = async () => {
  await _init();
  return await selectAll();
}

module.exports = {
  getAll
}