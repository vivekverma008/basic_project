const express = require('express');
const router = express.Router();
const usersHandler = require('../controller/user_handler');

console.log('users called');
router.get('/profile',usersHandler.profile);
router.get('/posts',usersHandler.posts);


module.exports = router ;