const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const User = await UserModel.create({ username, email, password });
    req.status(201).json({ user: User._id });
  } catch (err) {

    if (err.code == "11000" ){
      console.log("user already exist");
    }else{
       res.status(200).send({ err });
    }
   
  }
};
