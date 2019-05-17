var Hapi = require('hapi');
var mongoose = require('mongoose');
// var config = require('./app.json');
var Fitbit = require('fitbit-node');

var client = new Fitbit({clientId: '22D6NT', clientSecret: '3ba6a57f0771e7b54fac1578c8a59d95'});
var redirect_uri = 'http://localhost:8080/fitbit_oauth_callback';
var scope = 'activity profile';

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var userSchema = mongoose.Schema({
    userid: String,
    accessToken: String,
    refreshToken: String
});

var User = mongoose.model('User', userSchema)

var server = new Hapi.Server();
server.connection({port: 8080});

server.route([
    // Auth callback
    {
        method: 'GET',
        path: '/fitbit',
        handler: function(request, reply) {
            reply().redirect(client.getAuthorizeUrl(scope, redirect_uri));
        }
    },
    {
        method: 'GET',
        path: '/api/v1/users/{fitbitid}',
        handler: (request, reply) => {
            let result = User.findOne({"userid": request.params.fitbitid});
            result.exec((err, user) => {
                client.get("/profile.json", user.accessToken).then((profile) => {
                    reply(profile);
                })
            });
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply('Hello world from hapi');
        }
    },
    {
        method: 'GET',
        path: '/fitbit_oauth_callback',
        handler: (request, reply) => {
            client.getAccessToken(request.query.code, redirect_uri).then((result) => {
                console.log('hi');
                updateUser(result.user_id, result.access_token, result.refresh_token);
                reply().redirect("/api/v1/users/" + result.user_id);
            });
        }
    }
]);

function updateUser(userid, accessToken, refreshToken) {
    let newUserInfo = {
        'userid': userid,
        'accessToken': accessToken,
        'refreshToken': refreshToken
    };
    let newUser = new User(newUserInfo);
    User.update({"userid": userid}, newUser, {upsert: true}, (err) => {
        return;
    });
}
server.start(function(err) {
    console.log('Hapi is listening to http://localhost:8080');
});
