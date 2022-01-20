const mongoose = require("mongoose");
const Inscritos = mongoose.model("Inscritos");

module.exports = {
  async index(req, res) {
    try {
      const inscritos = await Inscritos.find();
      if (inscritos) {
        return res.json(inscritos).status(200);
      } else {
        return res.status({ code: 500, msg: "Internal server error" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async store(req, res) {
    const inscritos = await Inscritos.create(req.body);
    return res.json(inscritos);
  },
};
