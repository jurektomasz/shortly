const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({
      errors: [
        {
          title: "User error",
          detail: "Email or password not provided",
        },
      ],
    });
  }

  User.findOne({ email }, (error, foundUser) => {
    if (error) {
      return res.status(422).send(error);
    }

    if (!foundUser) {
      return res.status(422).send({
        errors: [
          {
            title: "User error",
            detail: "User with this email doesn't exist",
          },
        ],
      });
    }

    if (foundUser.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          sub: foundUser.id,
          username: foundUser.username,
        },
        config.JWT_SECRET,
        { expiresIn: "2h" }
      );

      return res.json(token);
    } else {
      return res.status(422).send({
        errors: [
          {
            title: "User error",
            detail: "Wrong password",
          },
        ],
      });
    }
  });
};

exports.register = (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!email || !password) {
    return res.status(422).send({
      errors: [
        { title: "User error", detail: "Email or password not provided" },
      ],
    });
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({
      errors: [
        {
          title: "User error",
          detail: "Password and password confirmation must be the same",
        },
      ],
    });
  }

  User.findOne({ email }, (error, existingUser) => {
    if (error) {
      return res.status(422).send(error);
    }
    if (existingUser) {
      return res.status(422).send({
        errors: [
          {
            title: "User error",
            detail: "User with this email already exist",
          },
        ],
      });
    }

    const user = new User({ username, email, password });
    user.save((error) => {
      if (error) {
        return res.status(422).send(error);
      }

      return res.json({ status: "registered" });
    });
  });
};
