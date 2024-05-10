const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../../utils/layautEntidades");

const hospitalController = {
  getAllHospital: async (req, res) => {
    try {
      const getAll = await getAllData(req, "hospital");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createHospital: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("hospital", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateHospital: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateR = await updateData("hospital", req.body, {
        idCentro: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updateR,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteHospital: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteC = await deleteData("hospital", {
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

module.exports = { hospitalController };
