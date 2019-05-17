'use strict';
let Hapi = require('hapi');

let server = new Hapi.Server();
server.connection({port: 8080});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply('Hello world');
        }
    }
])

server.start(function(err) {
    console.log('Server is started');
})