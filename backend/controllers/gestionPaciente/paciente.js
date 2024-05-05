const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const pacienteController = {
  getAllPacientes: async (req, res) => {
    try {
      const getAll = await prisma.paciente.findMany({});
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {}
  },
};
module.exports = pacienteController;
