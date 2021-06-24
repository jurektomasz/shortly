const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const config = require("./config");
const shortUrlRoutes = require("./routes/shortUrl");
const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to DB!");
  }
);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", shortUrlRoutes);
app.use("/api/v1/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "..", "build");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    return res.sendFile(path.resolve(buildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server runing on port: " + PORT);
});
