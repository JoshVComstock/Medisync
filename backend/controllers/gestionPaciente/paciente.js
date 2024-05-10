const {
  createData,
  getAllData,
  getAllDataID,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

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
  getAllpacienteID: async (req, res) => {
    try {
      const idPaciente = Number(req.params.id);
      const getAll = await getAllDataID("paciente", { id: idPaciente });
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createPacientes: async (req, res) => {
    try {
      const dataToken = req.tokenDecodificado;
      const newData = await createData("paciente", req.body, dataToken);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  updatePaciente: async (req, res) => {
    try {
      // const dataToken = req.tokenDecodificado;
      const idPaciente = Number(req.params.id);
      const updateDat = await updateData("paciente", req.body, {
        id: idPaciente,
      });
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: updateDat });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  deletePaciente: async (req, res) => {
    try {
      // const dataToken = req.tokenDecodificado;
      const idPaciente = Number(req.params.id);
      const deleteP = await deleteData("paciente", {
        id: idPaciente,
      });
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: deleteP });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = pacienteController;
