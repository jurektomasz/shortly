const express = require("express");
const router = express.Router();

const {
  getShortUrls,
  getShortUrlById,
  createShortUrl,
} = require("../controllers/shortUrl");

router.get("/", getShortUrls);
router.post("/create-short-url", createShortUrl);
router.get("/:id", getShortUrlById);

module.exports = router;
