const express = require("express");

const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 5000;

try {
  mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB Database");
} catch (error) {
  console.log("error", error);
}
app.get("/", (req, res) => {
  res.send("Hello World mahira!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
