const express = require("express");
const pacienteController = require("../controllers/gestionPaciente/paciente");
const router = express.Router();

router.get("/", pacienteController.getAllPacientes);

module.exports = router;
