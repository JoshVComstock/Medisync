const { createData, getAllData } = require("../../utils/layautEntidades");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const pacienteController = {
  getAllpacientes: async (req, res) => {
    try {
      const getAll = await getAllData("paciente");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createPacientes: async (req, res) => {
    try {
      const newData = await createData("paciente", req.body);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  getPacientesFilterCentro: async (req, res) => {},
};
module.exports = pacienteController;
