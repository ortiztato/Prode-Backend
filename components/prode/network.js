const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
    controller.addProde(
        req.body.Nombre,
        req.body.Liga,
        req.body.Ganador,
        req.body.Desilusion,
        req.body.Lamentable,
        req.body.Revelacion,
        req.body.Octavos,
        req.body.Cuartos,
        req.body.Semis,
        req.body.Final,
        req.body.Goleadores,
        req.body.Partidos,
        req.body.GanadorPtos,
        req.body.DesilusionPtos,
        req.body.LamentablePtos,
        req.body.RevelacionPtos,
        req.body.OctavosPtos,
        req.body.CuartosPtos,
        req.body.SemisPtos,
        req.body.FinalPtos,
        req.body.GoleadoresPtos,
        req.body.PartidosPtos,
        req.body.TotalPtos


    )
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function (req, res) {
    controller.listUsers()
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.patch('/', function (req, res) {
    controller.updateMessage(req.body.id, req.body.Liga)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;