const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../../utils/layautEntidades");

const laboratorioController = {
  getAllLaboratorio: async (req, res) => {
    try {
      const getAll = await getAllData(req, "laboratorio");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createLaboratorio: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("laboratorio", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateLaboratorio: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateR = await updateData("laboratorio", req.body, {
        idLaboratorio: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updateR,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deteLaboratorio: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteC = await deleteData("laboratorio", {
        idCentro: id,
      });
      res.status(201).json({
        message: "Datos elimiados correctamente",
        data: deleteC,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = { laboratorioController };
