const {
    getAllData,
    createData,
    updateData,
    deleteData,
  } = require("../../utils/layautEntidades");
  
  const redesController = {
    getAllRedes: async (req, res) => {
      try {
        const getAll = await getAllData("redes");
        res
          .status(200)
          .json({ message: "datos obtenidos correctamente ", data: getAll });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    createRedes: async (req, res) => {
      try {
        const newData = await createData("redes", req.body);
        res
          .status(201)
          .json({ message: "Datos creados correctamente", data: newData });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    updateRedes: async (req, res) => {
      try {
        const id = Number(req.params.id);
        const updateR = await updateData("redes", req.body, {
          idRedes: id,
        });
        res.status(201).json({
          message: "Datos actualizados correctamente",
          data: updateR,
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    deleteRedes: async (req, res) => {
      try {
        const id = Number(req.params.id);
        const deleteC = await deleteData("redes", {
          idRedes: id,
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
  
  module.exports = { redesController };
  