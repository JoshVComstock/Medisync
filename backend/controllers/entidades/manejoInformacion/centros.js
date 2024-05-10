const {
    getAllData,
    createData,
    updateData,
    deleteData,
  } = require("../../../utils/layautEntidades");
  
  const centroController = {
    getAllCentro: async (req, res) => {
      try {
        const getAll = await getAllData("centro");
        res
          .status(200)
          .json({ message: "datos obtenidos correctamente ", data: getAll });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    createcentro: async (req, res) => {
      try {
        const newData = await createData("centro", req.body);
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
        const updateR = await updateData("centro", req.body, {
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
    deletecentro: async (req, res) => {
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
  