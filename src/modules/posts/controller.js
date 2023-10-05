const { findAll } = require('./service');

const getAllPosts = async (req, res) => {
  try {
    res.status(200).json(await findAll());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllPosts
}