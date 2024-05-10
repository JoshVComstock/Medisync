const xprisma = require("../middleware/control_estado_middleware");
const {
  xprismaDepartamento,
} = require("../middleware/filter_departamento_middleware");

const getAllData = async (tabla) => {
  try {
    if (!xprisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }

    return await xprismaDepartamento[tabla].findMany({
      // args: { where: { filter } },
    });
  } catch (error) {
    throw new Error(
      `Error al obtener los datos de la tabla ${tabla}: ${error.message}`
    );
  }
};
