const express = require("express");
const router = express.Router();

const { loggedUser } = require("../middlewares");

const {
  // getShortUrls,
  getShortUrlById,
  createShortUrl,
  getUserUrls,
} = require("../controllers/shortUrl");

// router.get("/", getShortUrls);
router.get("api/v1/shortUrls/userUrls", loggedUser, getUserUrls);
router.post("api/v1/shortUrls/create-short-url", loggedUser, createShortUrl);
router.get("/:id", loggedUser, getShortUrlById);

module.exports = router;
