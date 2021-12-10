const express = require('express');
const Measure_Unit = require('../models/measure');

const measureUnitRouter = express.Router();

measureUnitRouter.route('/')
  .get((req, res, next) => {

    Measure_Unit.find({})
      .then(mesure => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(mesure);
      },
        error => next(error)
      )
      .catch(err => next(err));
  })

  .post((req, res, next) => {
    Measure_Unit.create(req.body)
      .then(
        (mesure) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(mesure);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });


measureUnitRouter.route('/:id')
  .get((req, res, next) => {
    Measure_Unit.findById(req.params.id)
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
    Measure_Unit.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (mesure) => {        
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(mesure);
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  })

  .delete((req, res, next) => {
    Measure_Unit.findByIdAndDelete(req.params.id)
      .then(
        (response) => {
          res.statusCode = 200;
          res.setHeader("content-Type", "application/json");
          res.json({ mensaje: 'Unidad de Medida Eliminada' });
        },
        (error) => next(error)
      )
      .catch((error) => next(error));
  });



module.exports = measureUnitRouter;