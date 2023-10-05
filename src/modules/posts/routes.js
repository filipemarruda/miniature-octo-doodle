const { getAllPosts } = require('./controller');

const router = require('express').Router();
router.get('/', getAllPosts);

module.exports = router;