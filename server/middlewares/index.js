const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.loggedUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token && token !== undefined) {
    const { decodedToken, error } = parseToken(token);

    if (error) {
      return res.status(422).send(error.message);
    }

    User.findById(decodedToken.sub, (error, foundUser) => {
      if (error) {
        return res.status(422).send(error);
      }

      if (foundUser) {
        res.locals.user = foundUser;
        next();
      } else {
        return (res.locals.user = "User not found");
      }
    });
  } else {
    res.locals.user = "Token not found";
    next();
  }
};

function parseToken(token) {
  try {
    const decodedToken = jwt.verify(token.split(" ")[1], config.JWT_SECRET);

    return { decodedToken };
  } catch (error) {
    return { error };
  }
}
