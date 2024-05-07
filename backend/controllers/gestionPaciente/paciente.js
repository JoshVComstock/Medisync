const { getAllGestion } = require("../../utils/layautEntidades");

// function extractCityFromToken(req) {
//   const token = req.headers.authorization.split(' ')[1];
//   const decoded = jwt.verify(token, 'pesquizasv2'); 
//   return decoded.ciudad; 
// }
const pacienteController = {
  getAllpacientes: async (req, res) => {
    try {
      const getAll = await getAllGestion("paciente");
      res
        .status(200)
        .json({ message: "datos obtenidos correctamente ", data: getAll });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

};
module.exports = pacienteController;
