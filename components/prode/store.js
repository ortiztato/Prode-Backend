const { prependOnceListener } = require('./model');
const Model = require('./model');

function addProde(prode) {
    const myUser = new Model(prode);
    return myUser.save();
}

function listUsers() {
    return Model.find();
}

async function updateLiga(id, Partidos) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.Partidos = Partidos;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addProde,
    list: listUsers,
    updateLiga: updateLiga,
}