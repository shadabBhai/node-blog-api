const express = require("express");
const router = express.Router();

// import controllers
const { createPost  , getAllPost} = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");
const {createLike} = require("../controllers/likeController");

// define API routes
router.post("/createPost" , createPost);
router.get("/allPost", getAllPost);
router.post("/post/comment",createComment);
router.post("/post/like", createLike); 


module.exports = router;