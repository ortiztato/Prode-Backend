const store = require('./store');

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
    TotalPtos
) {
    return new Promise((resolve, reject) => {
        if (!Nombre || !Liga) {
            console.error('[messageController] algún dato esta incorrecto');
            reject('Los datos son incorrectos');
            return false;
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
            TotalPtos: TotalPtos
        };
        /* return store.add(prode); */
        store.add(prode);

        resolve(prode);
    })
}

function listUsers() {
    return store.list();
}

function listUsersNames() {
    return store.listNames();
}

function updateLiga(id, Liga) {
    return new Promise(async (resolve, reject) => {
        if (!id || !Liga) {
            reject('Invalid data');
            return false;
        }

        const result = await store.updateLiga(id, Liga);

        resolve(result);
    })
}

function updateScores() {
    store.list()
        .then(data => {
            return store.requestUpdate(data)
        })
}

module.exports = {
    addProde,
    listUsers,
    updateLiga,
    listUsersNames,
    updateScores
}