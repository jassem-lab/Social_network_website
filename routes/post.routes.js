const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const postController = require("../controllers/post.controller");

// Basic CRUD Posts

router.get("/", postController.readPost);
router.post("/", upload.single("file"), postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

// Like & Unlike Posts

router.patch("/post-like/:id", postController.likePost);
router.patch("/post-unlike/:id", postController.unlikePost);

// comments

router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);

module.exports = router;
