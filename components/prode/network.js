const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function (req, res) {
	controller
		.addProde(
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
			req.body.TotalPtos,
			req.body.PIN,
		)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.get("/", function (req, res) {
	controller
		.listUsers(req.query.liga)
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.patch("/", function (req, res) {
	controller
		.updateLiga(req.body.id, req.body.Liga)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((e) => {
			response.error(req, res, "Error interno", 500, e);
		});
});

router.get("/names", function (req, res) {
	controller
		.listUsersNames()
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

// para ejecutar desde la terminal con powershell
// Invoke-RestMethod -Uri http://localhost:8080/prode/update -Method PATCH


router.patch("/update", function (req, res) {
	console.log("recibido el request del update");

	controller
		.updateScores()
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.get("/leagues", function (req, res) {
	controller
		.listLeagues()
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.get("/leagues/:id", function (req, res) {
	controller
		.checkLeague(req.params.id)
		.then((exists) => {
			response.success(req, res, { exists: exists }, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.post("/leagues/validate", function (req, res) {
	controller
		.validateLeaguePIN(req.body.Nombre, req.body.PIN)
		.then((isValid) => {
			response.success(req, res, { isValid: isValid }, 200);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

router.post("/leagues/create", function (req, res) {
	controller
		.createLeague(req.body.Nombre, req.body.PIN)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch((err) => {
			response.error(req, res, "Internal error", 500, err);
		});
});

module.exports = router;
