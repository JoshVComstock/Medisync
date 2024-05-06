const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const xprisma = prisma.$extends({
  query: {
    $allModels: {
      findMany({ args, query }) {
        args.where = {
          ...args.where,
          estadoRegistro: true,
        };
        return query(args);
      }
    }
  }
});

module.exports = xprisma;