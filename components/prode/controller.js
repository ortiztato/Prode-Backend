const store = require('./store');

function addProde(Nombre, Liga, Ganador, Desilusion, Lamentable, Revelacion, Octavos, Cuartos, Semis, Final, Goleadores, Partidos) {
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
            Partidos: Partidos
        };
        /* return store.add(prode); */
        store.add(prode);

        resolve(prode);
    })
}

function listUsers() {
    return store.list();
}

function updateMessage(id, Partidos) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(Partidos);
        if (!id || !Partidos) {
            reject('Invalid data');
            return false;
        }

        const result = await store.updateLiga(id, Partidos);

        resolve(result);
    })
}

module.exports = {
    addProde,
    listUsers,
    updateMessage
}