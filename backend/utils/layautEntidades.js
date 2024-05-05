const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllData = async (tabla) => {
  try {
    if (!prisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await prisma[tabla].findMany({});
  } catch (error) {
    throw new Error(
      `Error al obtener los datos de la tabla ${tabla}: ${error.message}`
    );
  }
};

const createData = async (tabla, data) => {
  try {
    if (!prisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await prisma[tabla].create({ data });
  } catch (error) {
    throw new Error(
      `Error al crear datos en la tabla ${tabla}: ${error.message}`
    );
  }
};
const updateData = async (tabla, data, id) => {
  try {
    if (!prisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await prisma[tabla].update({
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
    if (!prisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await prisma[tabla].delete({
      where: id,
    });
  } catch (error) {
    throw new Error(
      `Error al elimiar los datos en la tabla ${tabla}: ${error.message}`
    );
  }
};

module.exports = { getAllData, createData, updateData, deleteData };
