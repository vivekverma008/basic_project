const express = require('express');
const router = express.Router();
const usersHandler = require('../controller/user_handler');


router.get('/profile',usersHandler.profile);
router.get('/posts',usersHandler.posts);
router.get('/signIn',usersHandler.signIn);
router.get('/signUp',usersHandler.signUp);
router.post('/create',usersHandler.createUser);
router.post('/create_session' , usersHandler.createSession);
module.exports = router ;