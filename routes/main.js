// routes to all basic PAGES of CRUDs
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const homeController = require('../controllers/home')
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main routes
router.get('/', homeController.getIndex)
router.get('/landing', homeController.getLanding)
router.get('/portCode', homeController.getPort)
router.get('/profile', ensureAuth, postsController.getProfile);
router.get('/feed', ensureAuth, postsController.getFeed);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

module.exports = router;
