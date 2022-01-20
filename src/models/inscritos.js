const mongoose = require('mongoose');

const InscritosSchema = new mongoose.Schema({
    contato: {
        type: String,
        required: true,
    },
    cratedAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Inscritos", InscritosSchema);