const book = require("../models/books.js");

exports.getAllbooks = (req, res, next) => {
  book.find({}, (error, books) => {
    if (error) next(error);
    req.data = books;
    next();
  });
};

exports.getbookPage = (req, res) => {
  res.render("contact");
};

exports.savebook = (req, res) => {
  let newbook = new book({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
  });
  newbook.save((error, result) => {
    if (error) res.send(error);
    res.render("thanks");
  });
};