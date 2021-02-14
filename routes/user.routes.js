const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Auth
router.post("/register/", authController.signUp);
// User display : "block" 

router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)

module.exports = router;
