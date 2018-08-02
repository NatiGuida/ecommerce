const objetoController = require("../controllers/objetoController");

let self = {};

self.producto = function(req, res, next) {
  if (isNaN(req.params.id)) {
    return res.render("error");
  } else {
    let product = search(req.params.id);
    return res.render("ficha", {
      product: product
    });
  }
};

// BUSCAR EL CODIGO PARA MOSTRARLO EN UN "NUEVO TAB", POR PARAMETRO
function search(id) {
  for (var i = 0; i < objetoController.productos.length; i++) {
    if (id == objetoController.productos[i].cod) {
      return objetoController.productos[i];
    }
  }
  return res.render("error");
}
module.exports = self;
