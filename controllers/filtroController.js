const objetoController = require("../controllers/objetoController");

let self = {};

self.filtro = function(req, res, next) {
  let arrFiltro = [];
  const id = req.params.id;
  console.log(arrFiltro);
  for (var i = 0; i < objetoController.productos.length; i++) {
    if (id == objetoController.productos[i].filtro) {
      arrFiltro.push(objetoController.productos[i]);
    }
  }
  if (arrFiltro.length == 0) {
    return res.render("error");
  } else {
    res.render("productos", {
      productos: arrFiltro
    });
    console.log(arrFiltro);
  }
};

module.exports = self;
