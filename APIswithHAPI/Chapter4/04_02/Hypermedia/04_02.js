var Hapi = require('hapi');
var mongoose = require('mongoose');
var config = require('./app.json');
var Fitbit = require('fitbit-node');

var client = new Fitbit('2286BS', 'a224d6efc16f81a2e2760bcf9e8ab1b7');
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
        config: { json: { space: 2 } },
        path: '/api/v1/users',
        handler: function (request, reply) {
            var result = User.find();
            result.exec(function (err, users) {
                userlist = [];
                users.forEach(function (userDoc) {
                    user = userDoc.toObject();
                    user._links = [
                        {
                            "rel": "self",
                            "href": "http://localhost:8080/api/v1/users/" + user.userid,
                            "method": "GET"
                        },
                        {
                            "rel": "self",
                            "href": "http://localhost:8080/api/v1/users/" + user.userid,
                            "method": "DELETE"
                        },
                        {
                            "rel": "progress",
                            "href": "http://localhost:8080/api/v1/users/" + user.userid + "/progress",
                            "method": "GET"
                        },
                        {
                            "rel": "activities",
                            "href": "http://localhost:8080/api/v1/users/" + user.userid + "/activities",
                            "method": "GET"
                        },
                        {
                            "rel": "activities",
                            "href": "http://localhost:8080/api/v1/users/" + user.userid + "/activities",
                            "method": "POST"
                        }
                    ];
                    userlist.push(user);
                })
                reply(userlist);
            });
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/users/{fitbitid}',
        handler: function (request, reply) {
            Task.findOneAndRemove({ userid: request.params.fitbitid }, function (err, response) {
                reply().code(204);
            });
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
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/progress',
        handler: function (request, reply) {
            // Need to handle Date
            // Use request.query.date
            // yyyy-MM-dd
            reply("Get user progress");
        }
    },
    {
        method: 'GET',
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function (request, reply) {
            // Need to handle beforeDate,
            // afterDate, limit, sort 
            reply("Get activity list for user");
        }
    },
    {
        method: 'POST',
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function (request, reply) {
            reply("Add activity for user");
        }
    },
    {
        method: 'GET',
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function (request, reply) {
            reply("Get activity list for user");
        }
    },
    {
        method: 'PUT',
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function (request, reply) {
            reply("Update activity for user");
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function (request, reply) {
            reply("Delete activity for user");
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
