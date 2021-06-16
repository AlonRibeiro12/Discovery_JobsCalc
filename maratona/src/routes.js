const express = require('express');
const routes = express.Router()

//request, response

server.get('', ( request, response) => {
    return response.sendfile(__dirname + "/views/index.html");
})


module.exports = routes;