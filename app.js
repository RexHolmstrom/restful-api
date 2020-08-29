const express = require("express");
const app = express();

//Middleware

app.use("/posts", () => {
  console.log("Middleware running");
});

//Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/posts", (req, res) => {
  res.send("Posts page");
});

//Port
app.listen(3000);
