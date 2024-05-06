const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async findMany({ model, operation, args, query }) {
        args = { estadoRegistro: true, ...args };

        return query(args);
      },
    },
  },
});
