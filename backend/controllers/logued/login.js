const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { generateToken } = require("../../utils/generateToken");
const bcrypt = require("bcryptjs");

const Logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLog = await prisma.user.findMany({
      where: {
        email,
      },
    });
    console.log(userLog);
    if (!userLog) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    user = userLog[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = generateToken(user);
    res.json({ token });

    verificar(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error: " + error });
  }
};

const jwt = require("jsonwebtoken");

const verificar = (token) => {
  const claveSecreta = "PesquisasV22024";
  jwt.verify(token, claveSecreta, (error, decoded) => {
    if (error) {
      console.error("Error al decodificar el token:", error);
    } else {
      console.log("Token decodificado:", decoded);
    }
  });
};

module.exports = { Logincontroller };
