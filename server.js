const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const app = express();

require('dotenv').config()
requireDir("./src/models");
//Conectando o DB
mongoose.connect(
  "mongodb+srv://suaQuadra:suaquadra@suaquadra.ubpzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



app.use(express.json());
//Rotas
app.use(cors())
const routes = require("./src/routes");
app.use("/api", routes);
app.get("*", (req, res) => res.json("Initial page"))

//Servidor rodando na porta 3003
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
