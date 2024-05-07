// const xprismaDepartameto = require("../middleware/filter_departamento_middleware");


// const getAllData = async (tabla) => {
//   try {
//     if (!xprismaDepartameto[tabla]) {
//       throw new Error(`La tabla ${tabla} no es válida`);
//     }
//     return await xprismaDepartameto[tabla].findMany({});
//   } catch (error) {
//     throw new Error(
//       `Error al obtener los datos de la tabla ${tabla}: ${error.message}`
//     );
//   }
// };

// const createData = async (tabla, data) => {
//   try {
//     if (!xprismaDepartameto[tabla]) {
//       throw new Error(`La tabla ${tabla} no es válida`);
//     }
//     return await xprismaDepartameto[tabla].create({ data });
//   } catch (error) {
//     throw new Error(
//       `Error al crear datos en la tabla ${tabla}: ${error.message}`
//     );
//   }
// };
// const updateData = async (tabla, data, id) => {
//   try {
//     if (!xprismaDepartameto[tabla]) {
//       throw new Error(`La tabla ${tabla} no es válida`);
//     }
//     return await xprismaDepartameto[tabla].update({
//       where: id,
//       data,
//     });
//   } catch (error) {
//     throw new Error(
//       `Error al actualizar los datos en la tabla ${tabla}: ${error.message}`
//     );
//   }
// };
// const deleteData = async (tabla, id) => {
//   try {
//     if (!xprismaDepartameto[tabla]) {
//       throw new Error(`La tabla ${tabla} no es válida`);
//     }
//     return await xprismaDepartameto[tabla].delete({
//       where: id,
//     });
//   } catch (error) {
//     throw new Error(
//       `Error al elimiar los datos en la tabla ${tabla}: ${error.message}`
//     );
//   }
// };

// module.exports = { getAllData, createData, updateData, deleteData };



// router.get('/ruta', async (req, res) => {
//     const ciudad = extractCityFromToken(req); // Extrae la ciudad del token
//     // Usa el middleware con la ciudad extraída
//     const registrosPorCiudad = await prismaCiudadMiddleware.findMany({
//       args: { where: { ciudad } }
//     });
//     res.json(registrosPorCiudad);
//   });