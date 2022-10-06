const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/post", ensureAuth, postsController.getPost);

router.post('/createPost', postsController.createPost);

router.delete('/deletePost/:id', postsController.deletePost);

module.exports = router;