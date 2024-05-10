const obtenerRelacion = (dataToken) => {
  if (dataToken.hospitalId) {
    relacion = `hospitalId:${dataToken.hospitalId}`;
  } else if (dataToken.centroId) {
    relacion = `centroId:${dataToken.centroId}`;
  } else if (dataToken.laboratorioId) {
    relacion = `laboratorioId:${dataToken.laboratorioId}`;
  }
  return relacion;
};

module.exports = { obtenerRelacion };
