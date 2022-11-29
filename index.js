const mongoose = require("mongoose");
const book = require("./models/book.js");

const booksController = require("./controllers/booksController.js");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.get(
  "/subscribers",
  booksController.getAllbooks,
  (req, res, next) => {
    console.log(req.data);
    res.render("books", { books: req.data });
  }
);

app.get("/contact", booksController.getbookPage);
app.post("/subscribe", booksController.savebook);

app.listen(app.get("port"), () => {
  console.log(`Server running @ http://localhost:${app.get("port")}`);
});
