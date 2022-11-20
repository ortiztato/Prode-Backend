const { prependOnceListener } = require('./model');
const Model = require('./model');

function addProde(prode) {
    const myUser = new Model(prode);
    return myUser.save();
}

function listUsers() {
    return Model.find().sort({ TotalPtos: -1 });

}

function listUsersNames() {
    let Nombres = Model.find({}, 'Nombre')
    return Nombres;
}

async function updateLiga(id, Liga) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.Liga = Liga;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addProde,
    list: listUsers,
    updateLiga: updateLiga,
    listNames: listUsersNames
}