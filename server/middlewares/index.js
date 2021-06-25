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

exports.provideErrorHandler = (req, res, next) => {
  res.mongoError = (dbError) => {
    const normalizedErrors = [];
    const errorField = "errors";

    if (
      dbError &&
      dbError.hasOwnProperty(errorField) &&
      dbError.name === "ValidationError"
    ) {
      const errors = dbError[errorField];
      for (let property in errors) {
        normalizedErrors.push({
          title: property,
          detail: errors[property].message,
        });
      }
    } else {
      normalizedErrors.push({
        title: "DB Error",
        detail: "Oops, something went wrong!",
      });
    }

    return res.status(422).send({ errors: normalizedErrors });
  };

  res.sendApiError = (config) => {
    const { status, title, detail } = config;
    return res.status(status).send({ error: { title, detail } });
  };

  next();
};

function parseToken(token) {
  try {
    const decodedToken = jwt.verify(token.split(" ")[1], config.JWT_SECRET);

    return { decodedToken };
  } catch (error) {
    return { error };
  }
}
