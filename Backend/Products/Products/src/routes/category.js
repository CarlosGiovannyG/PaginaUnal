const express = require('express');
const Category = require('../models/category');

const categoryRouter = express.Router();

categoryRouter.route('/')
  .get((req, res, next) => {

    Category.find({})
      .then(category => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(category);
      },
        error => next(error)
      )
      .catch(err => next(err));
  })

  .post((req, res, next) => {
    Category.create(req.body)
      .then(
        (category) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(category);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });


categoryRouter.route('/:id')
  
  
  .get((req, res, next) => {
    Category.findById(req.params.id)
      .then(
        (category) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(category);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })


  .put((req, res, next) => {
    Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (category) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(category);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })

  .delete((req, res, next) => {
    Category.findByIdAndDelete(req.params.id)
      .then(
        (response) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json({ mensaje: 'Categoria Eliminada' });
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });
module.exports = categoryRouter;
