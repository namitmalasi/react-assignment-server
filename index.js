import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!!! I am listening");
});

app.listen(5000, () => {
  console.log("Hi!!! I am listening you on port 5000 ");
});
