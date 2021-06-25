const ShortUrl = require("../models/shortUrl");

// exports.getShortUrls = async (req, res) => {
//   try {
//     const shortUrls = await ShortUrl.find();

//     return res.json(shortUrls);
//   } catch (error) {
//     return res.status(422).send(error);
//   }
// };

exports.getShortUrlById = async (req, res) => {
  try {
    const foundUrl = await ShortUrl.findOne({ shortUrl: req.params.id });
    const urlRegex = /https?:\/\/(www\.)?/;

    if (foundUrl == null) return res.sendStatus(404);

    if (!urlRegex.test(foundUrl.fullUrl))
      foundUrl.fullUrl = `http://${foundUrl.fullUrl}`;

    res.redirect(foundUrl.fullUrl);
  } catch (error) {
    return res.status(422).send(error);
  }
};

exports.createShortUrl = async (req, res) => {
  const newUrlData = req.body;
  const { user } = res.locals;

  if (user && user._id) newUrlData.owner = user._id;

  try {
    const existingUrl = await ShortUrl.findOne({ fullUrl: newUrlData.fullUrl });

    if (existingUrl) {
      return res.json(existingUrl);
    } else {
      ShortUrl.create(newUrlData, (error, newUrl) => {
        if (error) {
          throw new Error(error);
        }

        return res.json(newUrl);
      });
    }
  } catch (error) {
    return res.status(422).send(error);
  }
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
