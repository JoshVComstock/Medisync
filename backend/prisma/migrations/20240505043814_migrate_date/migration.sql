-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nombrePaciente" TEXT NOT NULL,
    "apellidoPaciente" TEXT,
    "apellidoMaterno" TEXT,
    "sexo" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "horaNacimiento" TIMESTAMP(3) NOT NULL,
    "madreRelacionId" INTEGER,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "madre" (
    "idMadre" SERIAL NOT NULL,
    "nombreMadre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "ci" VARCHAR(11) NOT NULL,
    "direccion" TEXT NOT NULL,
    "detalleDireccion" TEXT,
    "telefono1" TEXT,
    "telefono2" TEXT,
    "tratamientoHipertiroidismo" TEXT NOT NULL,
    "tratamientoHiportiroidismo" TEXT NOT NULL,
    "enfermedad" TEXT,
    "ciudadRelacionId" INTEGER NOT NULL,

    CONSTRAINT "madre_pkey" PRIMARY KEY ("idMadre")
);

-- CreateTable
CREATE TABLE "cartilla" (
    "idCartilla" SERIAL NOT NULL,
    "codigoBarras" TEXT NOT NULL,
    "fechaTomaMuestras" TEXT NOT NULL,
    "nacimientoTermino" BOOLEAN NOT NULL,
    "edadGestionalSemanas" INTEGER NOT NULL,
    "edadGestionalDia" INTEGER NOT NULL,
    "NumeroMuestra" INTEGER NOT NULL,
    "pesoNacimiento" DECIMAL(65,30) NOT NULL,
    "transfucion" BOOLEAN NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "antibioticos" TEXT NOT NULL,
    "centroRelacionId" INTEGER NOT NULL,
    "pacienteRelacionId" INTEGER NOT NULL,

    CONSTRAINT "cartilla_pkey" PRIMARY KEY ("idCartilla")
);

-- CreateTable
CREATE TABLE "ciudad" (
    "idCiudad" SERIAL NOT NULL,
    "nombreCiudad" TEXT NOT NULL,

    CONSTRAINT "ciudad_pkey" PRIMARY KEY ("idCiudad")
);

-- CreateTable
CREATE TABLE "centro" (
    "idCentro" SERIAL NOT NULL,
    "nombreCentro" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "municipioRelacionId" INTEGER NOT NULL,
    "area" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,

    CONSTRAINT "centro_pkey" PRIMARY KEY ("idCentro")
);

-- CreateTable
CREATE TABLE "municipio" (
    "idMunicipios" SERIAL NOT NULL,
    "nombreMunicipio" TEXT NOT NULL,
    "provinciaRelacionId" INTEGER NOT NULL,

    CONSTRAINT "municipio_pkey" PRIMARY KEY ("idMunicipios")
);

-- CreateTable
CREATE TABLE "provincia" (
    "idProvincia" SERIAL NOT NULL,
    "nombreProvincia" TEXT NOT NULL,
    "ciudadRelacionId" INTEGER NOT NULL,

    CONSTRAINT "provincia_pkey" PRIMARY KEY ("idProvincia")
);

-- CreateTable
CREATE TABLE "redes" (
    "idRedes" SERIAL NOT NULL,
    "nombreRedes" TEXT NOT NULL,

    CONSTRAINT "redes_pkey" PRIMARY KEY ("idRedes")
);

-- CreateTable
CREATE TABLE "hospital" (
    "idHospital" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "hospital_pkey" PRIMARY KEY ("idHospital")
);

-- CreateTable
CREATE TABLE "registroProbincias" (
    "idRegistroProvincias" SERIAL NOT NULL,
    "manejoCartillaRelacionId" INTEGER NOT NULL,

    CONSTRAINT "registroProbincias_pkey" PRIMARY KEY ("idRegistroProvincias")
);

-- CreateTable
CREATE TABLE "registroHospitales" (
    "idRegistroHospitales" SERIAL NOT NULL,
    "manejoCartillaRelacionId" INTEGER NOT NULL,

    CONSTRAINT "registroHospitales_pkey" PRIMARY KEY ("idRegistroHospitales")
);

-- CreateTable
CREATE TABLE "manejoCartillas" (
    "idManejoCartilla" SERIAL NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "centroRelacionId" INTEGER,
    "redesIdRedes" INTEGER,
    "cantidadResivido" INTEGER NOT NULL,
    "cantidadEntregado" INTEGER NOT NULL,
    "condigoTarjeta" TEXT NOT NULL,
    "entregadoPor" TEXT,
    "telefono" TEXT,
    "resividoPor" TEXT,

    CONSTRAINT "manejoCartillas_pkey" PRIMARY KEY ("idManejoCartilla")
);

-- CreateTable
CREATE TABLE "user" (
    "idUser" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("idUser")
);

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_madreRelacionId_fkey" FOREIGN KEY ("madreRelacionId") REFERENCES "madre"("idMadre") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "madre" ADD CONSTRAINT "madre_ciudadRelacionId_fkey" FOREIGN KEY ("ciudadRelacionId") REFERENCES "ciudad"("idCiudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartilla" ADD CONSTRAINT "cartilla_centroRelacionId_fkey" FOREIGN KEY ("centroRelacionId") REFERENCES "ciudad"("idCiudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartilla" ADD CONSTRAINT "cartilla_pacienteRelacionId_fkey" FOREIGN KEY ("pacienteRelacionId") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "centro" ADD CONSTRAINT "centro_municipioRelacionId_fkey" FOREIGN KEY ("municipioRelacionId") REFERENCES "municipio"("idMunicipios") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipio" ADD CONSTRAINT "municipio_provinciaRelacionId_fkey" FOREIGN KEY ("provinciaRelacionId") REFERENCES "provincia"("idProvincia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provincia" ADD CONSTRAINT "provincia_ciudadRelacionId_fkey" FOREIGN KEY ("ciudadRelacionId") REFERENCES "ciudad"("idCiudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registroProbincias" ADD CONSTRAINT "registroProbincias_manejoCartillaRelacionId_fkey" FOREIGN KEY ("manejoCartillaRelacionId") REFERENCES "manejoCartillas"("idManejoCartilla") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registroHospitales" ADD CONSTRAINT "registroHospitales_manejoCartillaRelacionId_fkey" FOREIGN KEY ("manejoCartillaRelacionId") REFERENCES "manejoCartillas"("idManejoCartilla") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manejoCartillas" ADD CONSTRAINT "manejoCartillas_centroRelacionId_fkey" FOREIGN KEY ("centroRelacionId") REFERENCES "centro"("idCentro") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manejoCartillas" ADD CONSTRAINT "manejoCartillas_redesIdRedes_fkey" FOREIGN KEY ("redesIdRedes") REFERENCES "redes"("idRedes") ON DELETE SET NULL ON UPDATE CASCADE;
