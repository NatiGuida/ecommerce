var express = require("express");
var router = express.Router();

const homeController = require("../controllers/homeController");
const productosController = require("../controllers/productosController");
const fichaController = require("../controllers/fichaController");
const favoritosController = require("../controllers/favoritosController");
const busquedaController = require("../controllers/busquedaController");
const filtroController = require("../controllers/filtroController");

// HOME
router.get("/", homeController.home);
// LISTADO
router.get("/productos", productosController.productos);
// FICHA
router.get("/producto/:id", fichaController.producto);
// FAVORITOS
router.get("/favoritos", favoritosController.favoritos);
//PAGINADO
router.get("/productos/:page", productosController.productos);
// BUSQUEDA
router.get("/busqueda/:id", busquedaController.busqueda);
// FILTROS
router.get("/filtro/:id", filtroController.filtro);

module.exports = router;
