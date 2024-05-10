const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const pacienteRoute = require("./routes/routeGestionPaciente");
const entidadesRoute = require("./routes/routeEntidades");
const gestionCartillaRoute = require("./routes/routeGestionCartillas");
const gestionPacienteRoute = require("./routes/routeGestionPaciente");
const routeLogett = require("./routes/routeLogin");
const { xprismaMiddleware } = require("./middleware/control_estado_middleware");
const decodeToken = require("./middleware/dec-Token");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/api/paciente", decodeToken, xprismaMiddleware, pacienteRoute);
app.use("/api/entidades", decodeToken, xprismaMiddleware, entidadesRoute);
app.use("/api/gestion", decodeToken, xprismaMiddleware, gestionCartillaRoute);
app.use("/api/gestion", decodeToken, xprismaMiddleware, gestionPacienteRoute);
app.use("/api/auth", routeLogett);

app.listen(port, () => {
  console.log(`port:  ${port}`);
});
