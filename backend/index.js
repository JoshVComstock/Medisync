const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const pacienteRoute = require("./routes/routeGestionPaciente");
const getEntidades = require("./routes/routeEntidades");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/api/paciente", pacienteRoute);
app.use("/api/entidades", getEntidades);

app.listen(port, () => {
  console.log(`port:  ${port}`);
});
