module.exports.signUpErrors = (err) => {
  let errors = { username: "", email: "", password: "" };

  if (err.message.includes("username"))
    errors.username = "Username is invalid or already taken";
  if (err.message.includes("password"))
    errors.password =
      "Password must be at least 6 characters long contain a number and an uppercase letter";
  if (err.message.includes("email")) err.email = "Email is invalid";
  if (err.code === 11000) errors.email = "Email is already taken";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email is already taken"))
    errors.email = "Unkown Email";
  if ((err.message.password = "Wrong Password !")) return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file")) erors.format = "wrong Format ! ";
  if (err.message.includes("max size"))
    errors.maxSize = "File size is more than 500Ko";

  return errors;
};
