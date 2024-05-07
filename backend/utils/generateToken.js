const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = { userId: user.idUser };

  if (user.hospitalRelacionId) {
    payload.hospitalId = user.hospitalRelacionId;
  }
  if (user.centroRelacionId) {
    payload.centroId = user.centroRelacionId;
  }
  if (user.laboratorioRelacionId) {
    payload.laboratorioId = user.laboratorioRelacionId;
  }

  const token = jwt.sign(payload, "PesquisasV22024");

  return token;
}

module.exports = { generateToken };
