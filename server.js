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

app.use(cors())
app.use(express.json());

const routes = require("./src/routes");
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//Servidor rodando na porta 3003
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
