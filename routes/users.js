const express = require('express');
const router = express.Router();
const usersHandler = require('../controller/user_handler');


router.get('/profile',usersHandler.profile);
router.get('/posts',usersHandler.posts);


module.exports = router ;