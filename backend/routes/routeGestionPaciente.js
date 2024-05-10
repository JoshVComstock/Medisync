const express = require("express");
const pacienteController = require("../controllers/gestionPaciente/paciente");
const router = express.Router();

router.get("/", pacienteController.getAllpacientes);
router.get("/centro", pacienteController.getPacientesFilterCentro);
router.post("/", pacienteController.createPacientes);

module.exports = router;
