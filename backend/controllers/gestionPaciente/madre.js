const {
  createData,
  getAllData,
  getAllDataID,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const MadreController = {
  getAllMadre: async (req, res) => {
    try {
      const getAll = await getAllData("madre");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllmadreID: async (req, res) => {
    try {
      const idMadre = Number(req.params.id);
      const getAll = await getAllDataID("paciente", { idMadre });
      res
        .status(200)
        .json({ message: "dato obtenido correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createMadre: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("madre", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  updateMadre: async (req, res) => {
    try {
      // const dataToken = req.tokenDecodificado;
      const idMadre = Number(req.params.id);
      const updateDat = await updateData("madre", req.body, {
        idMadre,
      });
      res
        .status(201)
        .json({ message: "Datos editados correctamente", data: updateDat });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  deleteMadre: async (req, res) => {
    try {
      // const dataToken = req.tokenDecodificado;
      const idMadre = Number(req.params.id);
      const deleteP = await deleteData("paciente", {
        id: idMadre,
      });
      res
        .status(201)
        .json({ message: "Datos elimiandos correctamente", data: deleteP });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = MadreController;
