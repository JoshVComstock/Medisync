const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const municipioController = {
  getAllCentro: async (req, res) => {
    try {
      const getAll = await getAllData(req,"centro");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMunicipio: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;

      const newData = await createData("municipio", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateMunicipio: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updateMun = await updateData("municipio", req.body, {
        idMunicipio: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updateMun,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCiudades: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteM = await deleteData("municipio", {
        idMunicipio: id,
      });
      res.status(201).json({
        message: "Datos elimiados correctamente",
        data: deleteM,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = { municipioController };
