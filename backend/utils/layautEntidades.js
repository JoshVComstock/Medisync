const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getAllData = async (req, tabla) => {
  try {
    const extendedPrisma = req.extendedPrisma;
    if (!extendedPrisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    return await extendedPrisma[tabla].findMany({});
  } catch (error) {
    console.log(error);
    throw new Error(
      `Error al obtener los datos de la tabla ${tabla}: ${error.message}`
    );
  }
};

const createData = async (tabla, data, dataToken) => {
  try {
    if (!prisma[tabla]) {
      throw new Error(`La tabla ${tabla} no es válida`);
    }
    console.log(dataToken);
    const userId = dataToken.userId;

    if (dataToken.idHospital) {
      relacion = `idHospital:${dataToken.idHospital}`;
    }
    if (dataToken.centroId) {
      relacion = `centroId:${dataToken.centroId}`;
    }
    if (dataToken.idLaboratorio) {
      relacion = `idLaboratorio:${dataToken.idLaboratorio}`;
    }
    return await prisma[tabla].create({
      data: {
        ...data,
        idUsuarioCreacion: [`userId:${userId}`, relacion],
      },
    });
  } catch (error) {
    console.log(error);
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
