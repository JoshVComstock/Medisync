const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function xprismaMiddleware(req, res, next) {
  const tokenInfo = req.tokenDecodificado;
  console.log(tokenInfo);
  const extendedPrisma = prisma.$extends({
    query: {
      $allModels: {
        findMany({ args, query }) {
          const { centroId } = tokenInfo;
          args.where = {
            ...args.where,
            estadoRegistro: true,
            idUsuarioCreacion: {
              has: `centroId:${centroId}`,
            },
          };
          return query(args);
        },
      },
    },
  });

  req.extendedPrisma = extendedPrisma;
  next();
}

module.exports = { xprismaMiddleware };
