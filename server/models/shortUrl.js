const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, default: shortId.generate },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
