const ShortUrl = require("../models/shortUrl");

exports.getShortUrls = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();

    return res.json(shortUrls);
  } catch (error) {
    return res.status(422).send(error);
  }
};

exports.getShortUrlById = async (req, res) => {
  try {
    const foundUrl = await ShortUrl.findOne({ shortUrl: req.params.id });
    if (foundUrl == null) return res.sendStatus(404);

    res.redirect(foundUrl.fullUrl);
  } catch (error) {
    return res.status(422).send(error);
  }
};

exports.createShortUrl = (req, res) => {
  const newUrlData = req.body;
  const { user } = res.locals;

  if (user && user._id) newUrlData.owner = user._id;

  ShortUrl.create(newUrlData, (errors, newUrl) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(newUrl);
  });
};

exports.getUserUrls = async (req, res) => {
  const { user } = res.locals;

  try {
    const urls = await ShortUrl.find({ owner: user._id });
    return res.json(urls);
  } catch (error) {
    return res.status(422).send(error);
  }
};
