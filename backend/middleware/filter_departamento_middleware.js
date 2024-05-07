const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const xprismaDepartameto = prisma.$extends({
  query: {
    $allModels: {
      findMany({ args, query }) {
        args.where = {
          ...args.where,
          estadoRegistro: true,
          ciudad: args.ciudad,
        };
        return query(args);
      },
    },
  },
});

module.exports = xprismaDepartameto;
