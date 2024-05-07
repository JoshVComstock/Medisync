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
    const passwordMatch = await bcrypt.compare(password, userLog.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = generateToken(userLog);
    res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error: " + error });
  }
};
module.exports = { Logincontroller };
