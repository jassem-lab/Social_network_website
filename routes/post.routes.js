const router = require("express").Router();

const postController = require("../controllers/post.controller");


// Basic CRUD Posts 

router.get("/", postController.readPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

// Like & Unlike Posts 

router.patch("/post-like/:id", postController.likePost);
router.patch("/post-unlike/:id", postController.unlikePost);


module.exports = router;
