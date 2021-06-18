const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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

app.use("/api/v1/shortUrls", shortUrlRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server runing on port: " + PORT);
});
