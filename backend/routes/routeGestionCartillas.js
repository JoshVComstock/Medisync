const express = require("express");
const { gestionCartillas } = require("../controllers/gestionCarillas/gestion");
const router = express.Router();

router.get("/cartilla", gestionCartillas.getAllRegistros);
router.post("/cartilla", gestionCartillas.createRegistro);
router.put("/cartilla", gestionCartillas.updatemanejoCartillas);
router.delete("/cartilla", gestionCartillas.deletemanejoCartillases);

module.exports = router;
