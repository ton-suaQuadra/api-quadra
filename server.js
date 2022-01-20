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
app.use("/api", require("./src/routes"));

//Servidor rodando na porta 3003
app.listen(process.env.PORT || 3003, () => {
  console.log("Rodando na porta 3003");
});
