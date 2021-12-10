var express = require("express");

const BillsModel = require("../models/bills");
const Products = require("../models/products");

const billsRouter = express.Router();

billsRouter
  .route("/")
  .get(async (req, res, next) => {

    const idUser = req.query.idUser

    let respuesta = idUser ? BillsModel.find({ "id_user": idUser }) : BillsModel.find({})
       
    await respuesta.populate("products")
      .then( (books) => {        
        res.json(books);  
    },
      (error) => next(error)
    ).catch((error) => next(error));
  })

  .post((req, res, next) => {

    const bills = new BillsModel({
      id_user: req.body.id_user,
      products: req.body.products
    });
    return bills.save()
      .then(newBill => {
        res.json(newBill)
      })
      .catch((error) => next(error))
  })


    billsRouter
      .route("/:id")
      .get((req, res, next) => {
        BillsModel.findById(req.params.id)
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
        console.log(req.params.id,)
        BillsModel.findByIdAndUpdate(
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
        BillsModel.findByIdAndDelete(req.params.id)
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


    module.exports = billsRouter
