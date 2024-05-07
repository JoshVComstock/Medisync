const xprisma = require("../middleware/control_estado_middleware");

const getAllData = async (tabla, filter) => {
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

const createData = async (tabla, data) => {
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
const updateData = async (tabla, data, id) => {
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
const deleteData = async (tabla, id) => {
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

module.exports = { getAllData, createData, updateData, deleteData };
