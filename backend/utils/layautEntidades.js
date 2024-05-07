const xprisma = require("../middleware/control_estado_middleware");

const getAllGestion = async (tabla, filter) => {
  try {
    if (!xprisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await xprisma[tabla].findMany({
      args: { where: { filter } },
    });
  } catch (error) {
    throw new Error(
      `Error al obtener los datos de la tabla ${tabla}: ${error.message}`
    );
  }
};

const createGestion = async (tabla, data) => {
  try {
    if (!xprisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await xprisma[tabla].create({ data });
  } catch (error) {
    throw new Error(
      `Error al crear datos en la tabla ${tabla}: ${error.message}`
    );
  }
};
const updateGestion = async (tabla, data, id) => {
  try {
    if (!xprisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await xprisma[tabla].update({
      where: id,
      data,
    });
  } catch (error) {
    throw new Error(
      `Error al actualizar los datos en la tabla ${tabla}: ${error.message}`
    );
  }
};
const deleteGestion = async (tabla, id) => {
  try {
    if (!xprisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await xprisma[tabla].delete({
      where: id,
    });
  } catch (error) {
    throw new Error(
      `Error al elimiar los datos en la tabla ${tabla}: ${error.message}`
    );
  }
};

module.exports = { getAllGestion, createGestion, updateGestion, deleteGestion };
