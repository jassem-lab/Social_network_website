const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;
const CreateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};
// SignIn

module.exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const User = await UserModel.create({ username, email, password });
    req.status(201).json({ user: User._id });
  } catch (err) {
    if (err.code == "11000") {
      console.log("user already exist");
    } else {
      res.status(200).send({ err });
    }
  }
};

//LogIn

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = CreateToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {}
};

// LogOut

module.exports.logOut = (req, res) => {};
