var Hapi = require('hapi');
var mongoose = require('mongoose');
var config = require('./app.json');
var Fitbit = require('fitbit-node');

var client = new Fitbit('------','---replace this with personal number---');
var redirect_uri = "http://localhost:8080/fitbit_auth_callback";
var scope = "activity profile";

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var userSchema = mongoose.Schema({
        userid: String,
        accessToken: String,
        refreshToken: String
});

var User = mongoose.model('User', userSchema)

var server = new Hapi.Server();
server.connection({ port: 8080 });


server.route([
  // Auth callback
  {
    method: 'GET',
    path: '/fitbit',
    handler: function(request, reply) {
        reply().redirect( client.getAuthorizeUrl(scope, redirect_uri));
    }
   },
   {
    method: 'GET',
    path: '/fitbit_auth_callback',
    handler: function(request, reply) {
        client.getAccessToken(request.query.code, redirect_uri).then(function (result) {
            client.get("/profile.json", result.access_token).then(function(results) {
                reply(results);
            })
        })
   }},
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
