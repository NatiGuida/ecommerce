const objetoController = require("../controllers/objetoController");
var express = require("express");
var router = express.Router();

let self = {};

self.home = function(req, res, next) {
  res.render("index", { productos: objetoController.productos });
};

module.exports = self;
