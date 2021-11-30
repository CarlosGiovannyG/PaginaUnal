var express = require("express");

const Products = require("../models/products");

const peoductsRouter = express.Router();

peoductsRouter
  .route("/")
  .get((req, res, next) => {
    Products.find({})
      .then(
        (books) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(books);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })

  .post((req, res, next) => {
    Products.create(req.body)
      .then(
        (book) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });

peoductsRouter
  .route("/:bookId")

  .get((req, res, next) => {
    Products.findById(req.params.bookId)
      .then(
        (book) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })

  .put((req, res, next) => {
    Products.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (book) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(book);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })

  .delete((req, res, next) => {
    Products.findByIdAndDelete(req.params.bookId)
      .then(
        (response) => {
          res.statusCode = 204;
          res.setHeader("content-Type", "application/json");
          res.json(response);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });

module.exports = peoductsRouter;
