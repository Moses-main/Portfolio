const express = require("express");
const app = express();
const PORT = 3500;

const portfolioCont = require("./controllers/portfolio");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/portfolio", portfolioCont);

app / app.listen(PORT, () => console.log(`app listening on ${PORT}`));
