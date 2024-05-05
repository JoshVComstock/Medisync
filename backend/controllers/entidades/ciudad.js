const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const ciudadController = {
  getAllciudades: async (req, res) => {
    try {
      const getAll = await getAllData("ciudad");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCiudades: async (req, res) => {
    try {
      const newData = await createData("ciudad", req.body);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCiudades: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateciudad = await updateData("ciudad", req.body, {
        idCiudad: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updateciudad,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCiudades: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateciudad = await deleteData("ciudad", {
        idCiudad: id,
      });
      res.status(201).json({
        message: "Datos elimiados correctamente",
        data: updateciudad,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = { ciudadController };
