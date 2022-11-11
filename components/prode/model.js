const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    Nombre: String,
    Liga: String,
    Ganador: String,
    Desilusion: String,
    Lamentable: String,
    Revelacion: String,
    Octavos: [String],
    Cuartos: [String],
    Semis: [String],
    Final: [String],
    Goleadores: [String],
    Partidos: [Number],


});

const model = mongoose.model('User', mySchema);
module.exports = model;