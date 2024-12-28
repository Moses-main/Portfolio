// const express = require("express");
// const app = express();
// const PORT = 3500;

// const portfolioCont = require("./controllers/portfolio");
// app.use(express.static("public"));
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/portfolio", portfolioCont);

// app / app.listen(PORT, () => console.log(`app listening on ${PORT}`));

const express = require("express");
const app = express();
const PORT = 3500;

// Import the portfolio controller
const portfolioCont = require("./controllers/portfolio");

// Middleware for serving static files
app.use(express.static("public"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Home" });
}); // Pass `pageTitle` for consistency

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About" });
}); // Pass `pageTitle` for consistency

app.get("/portfolio", portfolioCont);

// Start the server
app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
