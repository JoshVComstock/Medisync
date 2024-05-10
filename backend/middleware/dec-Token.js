
const jwt = require('jsonwebtoken');
function decodeToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  jwt.verify(token, "PesquisasV22024", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }
    
    req.tokenDecodificado = decoded;
    next();
  });
}
module.exports = decodeToken;
