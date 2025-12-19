const Model = require('./model');
const scoresData = require('../../scoresData/scoresData')

function add(prode) {
    const myUser = new Model(prode);
    return myUser.save();
}

function list() {
    return Model.find().sort({ TotalPtos: -1 });

}

function listNames() {
    let Nombres = Model.find({}, 'Nombre')
    return Nombres;
}

async function updateLiga(id, Liga) {
    const foundUser = await Model.findOne({
        _id: id
    });

    foundUser.Liga = Liga;

    const updatedUser = await foundUser.save();
    return updatedUser;
}

async function updateUserPuntos(
    id,
    puntajeGanador,
    puntajeRevelacion,
    puntajeDesilusion,
    puntajeLamentable,
    puntajePartidos,
    puntajeGoleador,
    puntajeOctavos,
    puntajeCuartos,
    puntajeSemis,
    puntajeFinal,
    puntajeTotal
) {
    const prodeUpdated = await Model.findOne({
        _id: id
    });

    prodeUpdated.GanadorPtos = puntajeGanador;
    prodeUpdated.RevelacionPtos = puntajeRevelacion;
    prodeUpdated.DesilusionPtos = puntajeDesilusion
    prodeUpdated.LamentablePtos = puntajeLamentable
    prodeUpdated.PartidosPtos = puntajePartidos
    prodeUpdated.GoleadoresPtos = puntajeGoleador
    prodeUpdated.OctavosPtos = puntajeOctavos
    prodeUpdated.CuartosPtos = puntajeCuartos
    prodeUpdated.SemisPtos = puntajeSemis
    prodeUpdated.FinalPtos = puntajeFinal
    prodeUpdated.TotalPtos = puntajeTotal
    await prodeUpdated.save();
}



const requestUpdate = (data) => {
    let prodes = []
    prodes = data
    prodes.map((key) => {
        let id = key.id
        let puntajeGanador = scoresData.Ganador[key.Ganador]
        let puntajeRevelacion = scoresData.Revelacion[key.Revelacion]
        let puntajeDesilusion = scoresData.Desilusion[key.Desilusion]
        let puntajeLamentable = scoresData.Lamentable[key.Lamentable]
        let puntajeGoleador1 = scoresData.Goleador[key.Goleadores[0]] || 0
        let puntajeGoleador2 = scoresData.Goleador[key.Goleadores[1]] || 0
        let puntajeGoleador3 = scoresData.Goleador[key.Goleadores[2]] || 0
        let puntajeGoleador = puntajeGoleador1 + puntajeGoleador2 + puntajeGoleador3
        let arrPartidos = []
        key.Partidos.map((eleccion) => { (eleccion.map((partido) => arrPartidos.push(partido))) })
        const filteredArray = arrPartidos.filter(value => scoresData.Partidos.includes(value));
        let puntajePartidos = (filteredArray.length) * 2

        const filteredArrayOctavos = key.Octavos.filter(value => scoresData.Octavos.includes(value));
        let puntajeOctavos = (filteredArrayOctavos.length) * 2
        const filteredArrayCuartos = key.Cuartos.filter(value => scoresData.Cuartos.includes(value));
        let puntajeCuartos = (filteredArrayCuartos.length) * 3
        const filteredArraySemis = key.Semis.filter(value => scoresData.Semis.includes(value));
        let puntajeSemis = (filteredArraySemis.length) * 4
        const filteredArrayFinal = key.Final.filter(value => scoresData.Final.includes(value));
        let puntajeFinal = (filteredArrayFinal.length) * 5


        let puntajeTotal = puntajeGanador + puntajeRevelacion + puntajeLamentable + puntajeGoleador + puntajePartidos + puntajeDesilusion + puntajeOctavos + puntajeCuartos + puntajeSemis + puntajeFinal
        updateUserPuntos(id, puntajeGanador, puntajeRevelacion, puntajeDesilusion, puntajeLamentable, puntajePartidos, puntajeGoleador, puntajeOctavos, puntajeCuartos, puntajeSemis, puntajeFinal, puntajeTotal)
        

    })
}

async function checkLeague(leagueName) {
	const league = await Model.findOne({
		Liga: leagueName,
	});

	if (league) {
		return true;
	}
	return false;
}

module.exports = {
	add,
	list,
	updateLiga,
	listNames,
	requestUpdate,
	checkLeague,
};