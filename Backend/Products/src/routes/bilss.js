var express = require("express");

const Bills = require("../models/bills");
const Products = require("../models/products");

const billsRouter = express.Router();

billsRouter
  .route("/")
  .get((req, res, next) => {
    Bills.find({})
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
    Bills.create(req.body)
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

billsRouter
  .route("/:id")
  .get((req, res, next) => {
    Bills.findById(req.params.id)

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
    Bills.findByIdAndUpdate(
      req.params.id,
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
    Bills.findByIdAndDelete(req.params.id)
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

module.exports = billsRouter;
