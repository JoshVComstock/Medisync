const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const xprismaDepartamento = prisma.$extends({
  query: {
    $allModels: {
      async findMany({ args, query }) {
        const registros = await query(args);

        if (!registros || registros.length === 0 || !registros[0].hasOwnProperty('idUsuarioCreacion')) {
          return registros;
        }

        // Obtener el tipo de relación y el ID del parámetro
        const { tipoRelacion, idParametro } = args.where;
        // Definir el nombre del campo de relación según el tipo
        let campoRelacion = '';
        if (tipoRelacion === 'hospital') {
          campoRelacion = 'hospitalRelacionId';
        } else if (tipoRelacion === 'centro') {
          campoRelacion = 'centroRelacionId';
        } else if (tipoRelacion === 'laboratorio') {
          campoRelacion = 'laboratorioRelacionId';
        } else {
          throw new Error(`Tipo de relación no válido: ${tipoRelacion}`);
        }

        // Filtrar los registros según el tipo de relación y el ID del parámetro
        const registrosFiltrados = registros.filter(registro => registro[campoRelacion] === idParametro);

        // Si se encuentran registros que coinciden, agregar los datos del usuario
        if (registrosFiltrados.length > 0) {
          const idsUsuarios = Array.from(new Set(registrosFiltrados.map(registro => registro.idUsuarioCreacion)));
          const usuarios = await prisma.user.findMany({
            where: {
              idUser: { in: idsUsuarios }
            },
            select: {
              idUser: true,
              hospitalRelacionId: true,
              centroRelacionId: true,
              laboratorioRelacionId: true
            }
          });

          const mapaUsuarios = usuarios.reduce((mapa, usuario) => {
            mapa[usuario.idUser] = usuario;
            return mapa;
          }, {});

          registrosFiltrados.forEach((registro) => {
            if (mapaUsuarios.hasOwnProperty(registro.idUsuarioCreacion)) {
              const usuario = mapaUsuarios[registro.idUsuarioCreacion];
              registro.usuario = {
                hospitalRelacionId: usuario.hospitalRelacionId !== null ? usuario.hospitalRelacionId : undefined,
                centroRelacionId: usuario.centroRelacionId !== null ? usuario.centroRelacionId : undefined,
                laboratorioRelacionId: usuario.laboratorioRelacionId !== null ? usuario.laboratorioRelacionId : undefined
              };
            }
          });
        }

        return registrosFiltrados;
      },
    },
  },
});

module.exports = { xprismaDepartamento };
