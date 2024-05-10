const express = require("express");
const pacienteController = require("../controllers/gestionPaciente/paciente");
const MadreController = require("../controllers/gestionPaciente/madre");
const router = express.Router();

router.get("/", pacienteController.getAllpacientes);
router.get("/:id", pacienteController.getAllpacienteID);
router.post("/", pacienteController.createPacientes);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

router.get("/", MadreController.getAllMadre);
router.get("/:id", MadreController.getAllmadreID);
router.post("/", MadreController.createMadre);
router.put("/:id", MadreController.updateMadre);
router.delete("/:id", MadreController.deleteMadre);

module.exports = router;
