const express = require("express");
const pacienteController = require("../controllers/gestionPaciente/paciente");
const router = express.Router();

router.get("/", pacienteController.getAllpacientes);

module.exports = router;
