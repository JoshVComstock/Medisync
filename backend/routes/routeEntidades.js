const express = require("express");
const { departamentoController } = require("../controllers/entidades/ciudad");
const {
  centroController,
} = require("../controllers/entidades/manejoInformacion/centro");
const { municipioController } = require("../controllers/entidades/municipio");
const { provinciaController } = require("../controllers/entidades/provincia");
const {
  redesController,
} = require("../controllers/entidades/manejoInformacion/redes");

const {
  hospitalController,
} = require("../controllers/entidades/manejoInformacion/hospitales");
const {
  laboratorioController,
} = require("../controllers/entidades/manejoInformacion/laboratorios");
const router = express.Router();
// -------------rutas de ciudades----------------
router.get("/departamento", departamentoController.getAlldepartamento);
router.post("/departamento", departamentoController.createdepartamento);
router.put("/departamento/:id", departamentoController.updatedepartamento);
router.delete("/departamento/:id", departamentoController.deletedepartamento);
// -------------rutas de centro----------------
router.get("/centro", centroController.getAllCentro);
router.post("/centro", centroController.createCentro);
router.put("/centro/:id", centroController.updatecentro);
router.delete("/centro/:id", centroController.deletecentroes);
// -------------rutas de municipio----------------
router.get("/municipio", municipioController.getAllCentro);
router.post("/municipio", municipioController.createMunicipio);
router.put("/municipio/:id", municipioController.updateMunicipio);
router.delete("/municipio/:id", municipioController.deleteCiudades);
// -------------rutas de provincia----------------
router.get("/provincia", provinciaController.getAllProvincia);
router.post("/provincia", provinciaController.createProvincia);
router.put("/provincia/:id", provinciaController.updateProvincia);
router.delete("/provincia/:id", provinciaController.deleteProvincia);

// -------------rutas de entidades que manejaran informacion----------------

router.get("/hospital", hospitalController.getAllHospital);
router.post("/hospital", hospitalController.createHospital);
router.put("/hospital/:id", hospitalController.updateHospital);
router.delete("/hospital/:id", hospitalController.deleteHospital);

router.get("/laboratorio", laboratorioController.getAllLaboratorio);
router.post("/laboratorio", laboratorioController.createLaboratorio);
router.put("/laboratorio/:id", laboratorioController.updateLaboratorio);
router.delete("/laboratorio/:id", laboratorioController.deteLaboratorio);

// -------------rutas de redes----------------

router.get("/redes", redesController.getAllRedes);
router.post("/redes", redesController.createRedes);
router.put("/redes/:id", redesController.updateRedes);
router.delete("/redes/:id", redesController.deleteRedes);
module.exports = router;
