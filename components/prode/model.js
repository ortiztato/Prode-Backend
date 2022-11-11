const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    Nombre: String,
    Liga: String,
    Ganador: String,
    GanadorPtos: Number,
    Desilusion: String,
    DesilusionPtos: Number,
    Lamentable: String,
    LamentablePtos: Number,
    Revelacion: String,
    RevelacionPtos: Number,
    Octavos: [String],
    OctavosPtos: Number,
    Cuartos: [String],
    CuartosPtos: Number,
    Semis: [String],
    SemisPtos: Number,
    Final: [String],
    FinalPtos: Number,
    Goleadores: [String],
    GoleadoresPtos: Number,
    Partidos: [[Number]],
    PartidosPtos: Number,
    TotalPtos: Number


});

const model = mongoose.model('User', mySchema);
module.exports = model;