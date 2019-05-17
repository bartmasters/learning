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

var User = mongoose.model('User', userSchema);

var server = new Hapi.Server();
server.connection({ port: 8080 });


server.route([
    // Auth callback
    {
        method: 'GET',
        path: '/fitbit',
        handler: function (request, reply) {
            reply().redirect(client.getAuthorizeUrl(scope, redirect_uri));
        }
    },
{
        method: 'GET',
        path: '/fitbit_auth_callback',
        handler: function (request, reply) {
            client.getAccessToken(request.query.code, redirect_uri).then(function (result) {
                updateUser(result.user_id, result.access_token, result.refresh_token);
                reply().redirect("/api/v1/users/" + result.user_id);
            })
        }
    },
    {
        method: 'GET',
        path: '/api/v1/users/{fitbitid}',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                client.get("/profile.json", user.accessToken).then(function (results) {
                    reply(results);
                })
            })
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello world from hapi');
        }
    }
]);

function updateUser(userid,accessToken,refreshToken) {
      var newUserInfo = {
           'userid': userid,
           'accessToken': accessToken,
           'refreshToken': refreshToken
      };
      var newUser = new User(newUserInfo);
      User.update({ "userid": userid }, newUser, {upsert: true}, function(err) {
           return;
      });
}

server.start(function (err) {
    console.log('Hapi is listening to http://localhost:8080');
});
