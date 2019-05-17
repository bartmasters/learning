var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world from hapi');
    }
  }
]);

server.start(function(err) {
  console.log('Hapi is listening to http://localhost:8080');
});
