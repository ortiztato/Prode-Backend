const store = require("./store");

function addProde(
	Nombre,
	Liga,
	Ganador,
	Desilusion,
	Lamentable,
	Revelacion,
	Octavos,
	Cuartos,
	Semis,
	Final,
	Goleadores,
	Partidos,
	GanadorPtos,
	DesilusionPtos,
	LamentablePtos,
	RevelacionPtos,
	OctavosPtos,
	CuartosPtos,
	SemisPtos,
	FinalPtos,
	GoleadoresPtos,
	PartidosPtos,
	TotalPtos,
	PIN, // Añadimos PIN
) {
	return new Promise(async (resolve, reject) => {
		if (!Nombre || !Liga) {
			console.error("[messageController] algún dato esta incorrecto");
			reject("Los datos son incorrectos");
			return false;
		}

		// Validar PIN si la liga no es GENERAL
		if (Liga.toUpperCase() !== "GENERAL") {
			const isValid = await store.validateLeaguePIN(Liga, PIN);
			if (!isValid) {
				// Si la liga no existe, la creamos (o podrías manejarlo distinto)
				// Para simplificar, si no existe la creamos con el PIN enviado
				const exists = await store.checkLeague(Liga);
				if (!exists) {
					await store.createLeague(Liga, PIN);
				} else {
					reject("PIN incorrecto para la liga");
					return;
				}
			}
		}

		const prode = {
			Nombre: Nombre,
			Liga: Liga,
			Ganador: Ganador,
			Desilusion: Desilusion,
			Lamentable: Lamentable,
			Revelacion: Revelacion,
			Octavos: Octavos,
			Cuartos: Cuartos,
			Semis: Semis,
			Final: Final,
			Goleadores: Goleadores,
			Partidos: Partidos,
			GanadorPtos: GanadorPtos,
			DesilusionPtos: DesilusionPtos,
			LamentablePtos: LamentablePtos,
			RevelacionPtos: RevelacionPtos,
			OctavosPtos: OctavosPtos,
			CuartosPtos: CuartosPtos,
			SemisPtos: SemisPtos,
			FinalPtos: FinalPtos,
			GoleadoresPtos: GoleadoresPtos,
			PartidosPtos: PartidosPtos,
			TotalPtos: TotalPtos,
		};
		store.add(prode);

		resolve(prode);
	});
}

function listUsers(filter) {
	return store.list(filter);
}

function listUsersNames() {
	return store.listNames();
}

function updateLiga(id, Liga) {
	return new Promise(async (resolve, reject) => {
		if (!id || !Liga) {
			reject("Invalid data");
			return false;
		}

		const result = await store.updateLiga(id, Liga);

		resolve(result);
	});
}

function updateScores() {
	// return store.listNames();
	const list = store.list().then((data) => {
		store.requestUpdate(data);
	});
	return list;
}

function checkLeague(leagueName) {
	return new Promise((resolve, reject) => {
		if (!leagueName) {
			reject("Invalid league name");
			return false;
		}

		store
			.checkLeague(leagueName)
			.then((exists) => {
				resolve(exists);
			})
			.catch((e) => {
				reject(e);
			});
	});
}

function validateLeaguePIN(leagueName, pin) {
	return new Promise((resolve, reject) => {
		if (!leagueName || !pin) {
			reject("Invalid data");
			return false;
		}

		store
			.validateLeaguePIN(leagueName, pin)
			.then((isValid) => resolve(isValid))
			.catch((e) => reject(e));
	});
}

function createLeague(leagueName, pin) {
	return new Promise((resolve, reject) => {
		if (!leagueName || !pin) {
			reject("Invalid data");
			return false;
		}

		store
			.createLeague(leagueName, pin)
			.then((league) => resolve(league))
			.catch((e) => reject(e));
	});
}

module.exports = {
	addProde,
	listUsers,
	updateLiga,
	listUsersNames,
	updateScores,
	checkLeague,
	validateLeaguePIN,
	createLeague,
};
