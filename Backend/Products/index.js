require("dotenv").config();
var express = require("express");
var app = express();
var morgan = require("morgan");
var mongoose = require("mongoose");
const cors = require("cors");

//importing routes
var productsRouter = require("./src/routes/products");
var categoryRouter = require("./src/routes/category");
var measureUnitRouter = require("./src/routes/measure");
var billsRouter = require("./src/routes/bilss");

//setting logger
morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
});


//setting database connection
const connect = mongoose.connect("mongodb+srv://adminadmin:adminadmin@accountdb.wuvh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

connect
  .then((db) => {
    console.log("Connection successful to database");
  })
  .catch((error) => {
    console.error(error);
  });

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())

app.use("/products", productsRouter);
app.use("/category", categoryRouter);
app.use("/measure", measureUnitRouter);
app.use("/bills", billsRouter);

//setting server connection
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server ready at port: ${process.env.PORT}`);
});
