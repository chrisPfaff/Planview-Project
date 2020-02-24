const app = require("express")();
const fetch = require("node-fetch");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.get("/api", (req, res, next) => {
  const api =
    "https://planview-media.s3.us-west-2.amazonaws.com/interview/sessions.json";
  fetch(api).then(item => {
    item.json().then(data => {
      res.json(data);
    });
  });
});

app.listen(3000, () => {
  console.log("app listening");
});
