const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../../utils/layautEntidades");

const departamentoController = {
  getAlldepartamento: async (req, res) => {
    try {
      const getAll = await getAllData("departamento");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createdepartamento: async (req, res) => {
    try {
      const newData = await createData("departamento", req.body);
      res
        .status(201)
        .json({ message: "Datos creados correctamente", data: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatedepartamento: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updatedepartamento = await updateData("departamento", req.body, {
        idDepartamento: id,
      });
      res.status(201).json({
        message: "Datos actualizados correctamente",
        data: updatedepartamento,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletedepartamento: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const updatedepartamento = await deleteData("departamento", {
        idDepartamento: id,
      });
      res.status(201).json({
        message: "Datos elimiados correctamente",
        data: updatedepartamento,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = { departamentoController };
