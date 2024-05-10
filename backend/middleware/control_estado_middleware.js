const { PrismaClient } = require("@prisma/client");
const { obtenerRelacion } = require("../utils/typeId");
const prisma = new PrismaClient();

function xprismaMiddleware(req, res, next) {
  const tokenInfo = req.tokenDecodificado;
  const relacion = obtenerRelacion(tokenInfo);
  const extendedPrisma = prisma.$extends({
    query: {
      $allModels: {
        findMany({ args, query }) {
          const { centroId } = tokenInfo;
          args.where = {
            ...args.where,
            estadoRegistro: true,
            idUsuarioCreacion: {
              has: relacion,
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
