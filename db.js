const db = require('mongoose');

db.Promise = global.Promise;


async function connect(url) {
    await db.connect(url);
    console.log('[db] Conectada con éxito');
}

module.exports = connect;
