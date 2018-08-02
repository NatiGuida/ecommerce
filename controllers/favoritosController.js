var express = require("express");
var router = express.Router();

let self = {};

self.favoritos = function(req, res, next) {
  res.render("favoritos");
};

module.exports = self;
