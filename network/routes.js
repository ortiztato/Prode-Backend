const express = require('express');
const prode = require('../components/prode/network');

const routes = function (server) {
    server.use('/prode', prode);
}

module.exports = routes;