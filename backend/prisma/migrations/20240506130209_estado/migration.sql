-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nombrePaciente" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "edadGestional" TEXT[],
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "pesoNacimiento" DECIMAL(65,30) NOT NULL,
    "nacimientoTermino" BOOLEAN NOT NULL,
    "madreRelacionId" INTEGER,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "madre" (
    "idMadre" SERIAL NOT NULL,
    "nombreMadre" TEXT NOT NULL,
    "ci" VARCHAR(11) NOT NULL,
    "direccion" TEXT NOT NULL,
    "detalleDireccion" TEXT,
    "telefono" TEXT[],
    "tratamientoHipertiroidismo" BOOLEAN NOT NULL DEFAULT false,
    "tratamientoHiportiroidismo" BOOLEAN NOT NULL DEFAULT false,
    "tratamiento" TEXT,
    "enfermedad" TEXT,
    "departamentoRelacionId" INTEGER NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "madre_pkey" PRIMARY KEY ("idMadre")
);

-- CreateTable
CREATE TABLE "cartilla" (
    "idCartilla" SERIAL NOT NULL,
    "codigoBarras" TEXT NOT NULL,
    "fechaTomaMuestras" TEXT NOT NULL,
    "NumeroMuestra" INTEGER NOT NULL,
    "transfucion" BOOLEAN,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "antibioticos" TEXT,
    "notas" TEXT,
    "pacienteRelacionId" INTEGER NOT NULL,
    "centroRelacionId" INTEGER,
    "hospitalRelacionId" INTEGER,
    "redesRelacionId" INTEGER,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "cartilla_pkey" PRIMARY KEY ("idCartilla")
);

-- CreateTable
CREATE TABLE "laboratorio" (
    "idLaboratorio" SERIAL NOT NULL,
    "nombreLaboratorio" TEXT NOT NULL,
    "registroLaboratorio" INTEGER NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT[],
    "municipioRelacionId" INTEGER NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "laboratorio_pkey" PRIMARY KEY ("idLaboratorio")
);

-- CreateTable
CREATE TABLE "resultadosLaboratorio" (
    "idResultadosLaboratorio" SERIAL NOT NULL,
    "laboratorioRelacionId" INTEGER NOT NULL,
    "cartillaRelacionId" INTEGER NOT NULL,
    "userRelacionId" INTEGER NOT NULL,
    "fechaResultado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resultado" TEXT NOT NULL,
    "notas" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "resultadosLaboratorio_pkey" PRIMARY KEY ("idResultadosLaboratorio")
);

-- CreateTable
CREATE TABLE "departamento" (
    "idDepartamento" SERIAL NOT NULL,
    "nombreCiudad" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "departamento_pkey" PRIMARY KEY ("idDepartamento")
);

-- CreateTable
CREATE TABLE "provincia" (
    "idProvincia" SERIAL NOT NULL,
    "nombreProvincia" TEXT NOT NULL,
    "departamentoRelacionId" INTEGER NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "provincia_pkey" PRIMARY KEY ("idProvincia")
);

-- CreateTable
CREATE TABLE "municipio" (
    "idMunicipios" SERIAL NOT NULL,
    "nombreMunicipio" TEXT NOT NULL,
    "provinciaRelacionId" INTEGER NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "municipio_pkey" PRIMARY KEY ("idMunicipios")
);

-- CreateTable
CREATE TABLE "centro" (
    "idCentro" SERIAL NOT NULL,
    "nombreCentro" TEXT NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT[],
    "municipioRelacionId" INTEGER NOT NULL,
    "area" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,
    "contacto" TEXT NOT NULL,

    CONSTRAINT "centro_pkey" PRIMARY KEY ("idCentro")
);

-- CreateTable
CREATE TABLE "redes" (
    "idRedes" SERIAL NOT NULL,
    "nombreRedes" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "redes_pkey" PRIMARY KEY ("idRedes")
);

-- CreateTable
CREATE TABLE "hospital" (
    "idHospital" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "hospital_pkey" PRIMARY KEY ("idHospital")
);

-- CreateTable
CREATE TABLE "manejoCartillas" (
    "idManejoCartilla" SERIAL NOT NULL,
    "tipoManejo" TEXT NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "centroRelacionId" INTEGER,
    "redesIdRedes" INTEGER,
    "cantidadEntregado" INTEGER,
    "cantidadResivido" INTEGER NOT NULL,
    "condigoTarjeta" TEXT[],
    "entregadoPor" TEXT,
    "estregoResultadospor" TEXT,
    "telefono" TEXT,
    "resividoPor" TEXT,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "manejoCartillas_pkey" PRIMARY KEY ("idManejoCartilla")
);

-- CreateTable
CREATE TABLE "user" (
    "idUser" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estadoRegistro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "user_pkey" PRIMARY KEY ("idUser")
);

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_madreRelacionId_fkey" FOREIGN KEY ("madreRelacionId") REFERENCES "madre"("idMadre") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "madre" ADD CONSTRAINT "madre_departamentoRelacionId_fkey" FOREIGN KEY ("departamentoRelacionId") REFERENCES "departamento"("idDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartilla" ADD CONSTRAINT "cartilla_pacienteRelacionId_fkey" FOREIGN KEY ("pacienteRelacionId") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratorio" ADD CONSTRAINT "laboratorio_municipioRelacionId_fkey" FOREIGN KEY ("municipioRelacionId") REFERENCES "municipio"("idMunicipios") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultadosLaboratorio" ADD CONSTRAINT "resultadosLaboratorio_laboratorioRelacionId_fkey" FOREIGN KEY ("laboratorioRelacionId") REFERENCES "laboratorio"("idLaboratorio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultadosLaboratorio" ADD CONSTRAINT "resultadosLaboratorio_cartillaRelacionId_fkey" FOREIGN KEY ("cartillaRelacionId") REFERENCES "cartilla"("idCartilla") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultadosLaboratorio" ADD CONSTRAINT "resultadosLaboratorio_userRelacionId_fkey" FOREIGN KEY ("userRelacionId") REFERENCES "user"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provincia" ADD CONSTRAINT "provincia_departamentoRelacionId_fkey" FOREIGN KEY ("departamentoRelacionId") REFERENCES "departamento"("idDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipio" ADD CONSTRAINT "municipio_provinciaRelacionId_fkey" FOREIGN KEY ("provinciaRelacionId") REFERENCES "provincia"("idProvincia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "centro" ADD CONSTRAINT "centro_municipioRelacionId_fkey" FOREIGN KEY ("municipioRelacionId") REFERENCES "municipio"("idMunicipios") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manejoCartillas" ADD CONSTRAINT "manejoCartillas_centroRelacionId_fkey" FOREIGN KEY ("centroRelacionId") REFERENCES "centro"("idCentro") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manejoCartillas" ADD CONSTRAINT "manejoCartillas_redesIdRedes_fkey" FOREIGN KEY ("redesIdRedes") REFERENCES "redes"("idRedes") ON DELETE SET NULL ON UPDATE CASCADE;
