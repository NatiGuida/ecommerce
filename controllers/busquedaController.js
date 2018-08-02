const objetoController = require("../controllers/objetoController");

let self = {};

self.busqueda = function(req, res, next) {
  let arrBusqueda = [];
  const id = req.params.id.toLowerCase();
  for (var i = 0; i < objetoController.productos.length; i++) {
    for (var z = 0; z < objetoController.productos[i].search.length; z++) {
      if (id == objetoController.productos[i].search[z]) {
        arrBusqueda.push(objetoController.productos[i]);
      }
    }
  }

  if (arrBusqueda.length == 0) {
    return res.render("error");
  } else {
    res.render("productos", {
      productos: arrBusqueda
    });
  }
};

module.exports = self;
