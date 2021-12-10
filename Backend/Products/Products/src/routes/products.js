var express = require("express");

const Products = require("../models/products");

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get((req, res, next) => {
    Products.find({})
      .populate("category")
      .populate("measure_unit")
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

productsRouter
  .route("/:bookId")

  .get((req, res, next) => {

   

    Products.findById(req.params.bookId)
      .populate("category")
      .populate("measure_unit")
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
          console.log(book);
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
          res.statusCode = 200;
          res.json({mensaje:'Producto Eliminado'});
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });

module.exports = productsRouter;
