const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../../utils/layautEntidades");

const centroController = {
  getAllCentro: async (req, res) => {
    try {
      const getAll = await getAllData(req, "centro");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCentro: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("centro", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatecentro: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updatecentro = await updateData("centro", req.body, {
        idCentro: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updatecentro,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletecentroes: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteC = await deleteData("centro", {
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

module.exports = { centroController };
