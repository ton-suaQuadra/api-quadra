const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const app = express();

const PORT = 3003 || process.env.PORT;

require('dotenv').config()
requireDir("./src/models");
//Conectando o DB
mongoose.connect(
  process.env.MONGODB_URI,
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
app.listen(PORT, () => {
  console.log("Rodando na porta 3003");
});
