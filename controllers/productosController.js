const objetoController = require("../controllers/objetoController");

let self = {};

self.productos = function(req, res, next) {
  let page; //mi nuemero de pagina que ponga en la ruta

  if (req.params.page) {
    //si existe un numero de pagina
    page = req.params.page;
  } else {
    page = 1;
  }

  // let page = req.params.page ? req.params.page : 1

  const limit = 8; //cantidad de productos por pag
  const offset = (page - 1) * limit;
  let productArr = [];

  for (var i = offset; i < offset + limit; i++) {
    if (objetoController.productos[i]) {
      productArr.push(objetoController.productos[i]);
    }
  }
  if (productArr.length == 0) {
    res.render("error");
  }

  res.render("productos", {
    total: Math.ceil(objetoController.productos.length / limit),
    currentPage: req.params.page,
    productos: productArr
  });
};

module.exports = self;
