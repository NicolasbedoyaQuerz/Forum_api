const { Router} = require('express');
const {createPost} = require('../controllers/posts.controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/posts', authenticate, createPost);

module.exports = router