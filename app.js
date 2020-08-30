const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//Connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//Port
app.listen(3000);
