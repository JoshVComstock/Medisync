const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const provinciaController = {
  getAllProvincia: async (req, res) => {
    try {
      const getAll = await getAllData(req, "provincia");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createProvincia: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;

      const newData = await createData("provincia", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateProvincia: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateP = await updateData("provincia", req.body, {
        idProvincia: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updateP,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteProvincia: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteC = await deleteData("provincia", {
        idProvincia: id,
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

module.exports = { provinciaController };
