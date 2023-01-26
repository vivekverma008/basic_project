const express = require('express');
const router = express.Router();
const postHandler = require('../controller/post_handler');

router.post('/createPost',postHandler.createPost);

router.get('/' , postHandler.posts);
router.get('/comment')

module.exports = router;