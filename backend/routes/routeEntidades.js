const express = require("express");
const { departamentoController } = require("../controllers/entidades/ciudad");
const { centroController } = require("../controllers/entidades/centro");
const { municipioController } = require("../controllers/entidades/municipio");
const { provinciaController } = require("../controllers/entidades/provincia");
const {
  redesController,
} = require("../controllers/entidades/manejoInformacion/redes");

const decodeToken = require("../middleware/dec-Token");
const { xprismaMiddleware } = require("../middleware/control_estado_middleware");
const router = express.Router();
// -------------rutas de ciudades----------------
router.get("/departamento",decodeToken,xprismaMiddleware, departamentoController.getAlldepartamento);
router.post("/departamento",decodeToken, departamentoController.createdepartamento);
router.put("/departamento/:id", departamentoController.updatedepartamento);
router.delete("/departamento/:id", departamentoController.deletedepartamento);
// -------------rutas de centro----------------
router.get("/centro",decodeToken, xprismaMiddleware,centroController.getAllCentro);
router.post("/centro",decodeToken, centroController.createCentro);
router.put("/centro/:id", centroController.updatecentro);
router.delete("/centro/:id", centroController.deletecentroes);
// -------------rutas de municipio----------------
router.get("/municipio", decodeToken, xprismaMiddleware,municipioController.getAllCentro);
router.post("/municipio",decodeToken, municipioController.createMunicipio);
router.put("/municipio/:id", municipioController.updateMunicipio);
router.delete("/municipio/:id", municipioController.deleteCiudades);
// -------------rutas de provincia----------------
router.get("/provincia", decodeToken, xprismaMiddleware, provinciaController.getAllProvincia);
router.post("/provincia", decodeToken, provinciaController.createProvincia);
router.put("/provincia/:id", provinciaController.updateProvincia);
router.delete("/provincia/:id", provinciaController.deleteProvincia);

// -------------rutas de entidades que manejaran informacion----------------

// router.get("/centro", centroController.getAllCentro);
// router.post("/centro", centroController.createCentro);
// router.put("/centro/:id", centroController.updatecentro);
// router.delete("/centro/:id", centroController.deletecentroes);

// -------------rutas de redes----------------

router.get("/redes", redesController.getAllRedes);
router.post("/redes", redesController.createRedes);
router.put("/redes/:id", redesController.updateRedes);
router.delete("/redes/:id", redesController.deleteRedes);
module.exports = router;
