const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const gestionCartillas = {
  getAllRegistros: async (req, res) => {
    try {
      const getAll = await getAllData("manejoCartillas");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createRegistro: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("manejoCartillas", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatemanejoCartillas: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updatemanejoCartillas = await updateData(
        "manejoCartillas",
        req.body,
        {
          idManejoCartilla: id,
        }
      );
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updatemanejoCartillas,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletemanejoCartillases: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteC = await deleteData("manejoCartillas", {
        idManejoCartilla: id,
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

module.exports = { gestionCartillas };
