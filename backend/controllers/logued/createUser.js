const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const userController = {
  createUser: async (req, res) => {
    try {
      const { password, ...userData } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const saveUser = await prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
      });
      if (!saveUser) {
        return res.status(401).json({ message: "no se pudo crear el user" });
      }
      res.json(saveUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "error: " + error });
    }
  },
  getUser: async (req, res) => {
    try {
      const getUser = await prisma.user.findMany();
      console.log(getUser);
      res.json(getUser);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },
};
module.exports = { userController };
