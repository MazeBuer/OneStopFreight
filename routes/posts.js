const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost); //only id; if you put post it registers as post/post

router.post('/createPost', postsController.createPost);

router.delete('/deletePost/:id', postsController.deletePost);

module.exports = router;