var Hapi = require('hapi');
var mongoose = require('mongoose');
var config = require('./app.json');
var crypto = require('crypto');
var Fitbit = require('fitbit-node');
var Q = require('q');

var client = new Fitbit('------','---replace this with personal number---');
var redirect_uri = "http://calm-refuge-24086.herokuapp.com/fitbit_auth_callback";
var fitbit_verification = "e824d027252c391143f2ad89c246ccb25e947acb412084764aa561f8b9ddbe06";
var scope = "activity profile";

mongoose.connect('mongodb://synedra:3urfew@jello.modulusmongo.net:27017/inor8Ivo');
var db = mongoose.connection;

var userSchema = mongoose.Schema({
    userid: String,
    accessToken: String,
    refreshToken: String
});

var User = mongoose.model('User', userSchema);

var server = new Hapi.Server();
var port = parseInt(process.env.PORT, 10) || '8080'

server.connection({ 
    host: '0.0.0.0', 
    port: port
});


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
                updateUser(result.user_id, result.access_token, result.refresh_token).then(function(user) {
                    subscribeToActivities(user);
                    reply().redirect("/api/v1/users/" + user.userid);
                }).catch(function(error) {
                    console.log(error);
                })
            }).catch(function(error) {
                console.log(error.context.errors);
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
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                if (!user) { 
                    reply().redirect("/fitbit");
                } else {
                    getFitbit("/profile.json", user).then( function (results) {
                        reply(results);
                    })
                }
            })
        }
    },
    {
        method: 'GET',
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/activities/summary',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                if (!user) { reply().redirect("/fitbit") }
                var requestDate = getFitbitDate(request.query.date);
                var requestUrl = "/activities/date/" + requestDate + ".json";
                client.get(requestUrl, user.accessToken).then(function (results) {
                    reply(results);
                })
            })
        }
    },
    {
        method: 'GET',
        config: { json: { space: 2 } },
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                if (!user) { reply().redirect("/fitbit") }
                var requestDate = getFitbitDate(request.query.date);
                var queryString =   "?afterDate=" + requestDate +
                                    "&sort=asc&offset=0&limit=50";
                var requestUrl = "/activities/list.json" + queryString;
                console.log(user);
                getFitbit(requestUrl, user).then( function (results) {
                        reply(results);
                })
            })
        }
    },
    {
        method: 'POST',
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                var requestDate = getFitbitDate(request.query.date);
                var activity = {
                    "activityName":"Cycling", // Activity name or ID required
                    "manualCalories":300,     // Required with activityName
                    "startTime":"09:00:00",   
                    "durationMillis":1000*60*30,
                    "date":requestDate
                };
                var requestUrl = "/activities.json";
                client.post(requestUrl, user.accessToken, activity).then(function(results) {
                    reply(results);
                })
            })
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function (request, reply) {
            var result = User.findOne({ "userid": request.params.fitbitid });
            result.exec(function (err, user) {
                var requestUrl = "/activities/" + request.params.activityId + ".json";
                client.delete(requestUrl, user.accessToken).then(function(results, response) {
                    console.log(response);
                    reply().code(204);
                })
            })
        }
    },
    { 
        method: 'GET',
        path:'/webhook-receiver',
        handler: function(request, reply) {
            if (request.query.verify && request.query.verify != fitbit_verification) {
                    reply().code(404);
            } else {
                    reply().code(204);
            }
        }
    },
    { 
        method: 'POST',
        path:'/webhook-receiver',
        handler: function (request, reply) {
            console.log(request.payload);
            reply().code(204);
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
    var deferred = Q.defer();
      var newUserInfo = {
           'userid': userid,
           'accessToken': accessToken,
           'refreshToken': refreshToken
      };
      var newUser = new User(newUserInfo);
      User.update({ "userid": userid }, newUser, {upsert: true}, function(err) {
            deferred.resolve(newUserInfo);
      });
      return deferred.promise;
}

function getFitbitDate(requestDate) {
    if (requestDate) {
        var returnDate = request.query.date;
    } else {
        var d = new Date();
        var dateArray = [d.getFullYear(),d.getMonth()+1,d.getDate()];
        var returnDate = dateArray.join('-');
    }
    return returnDate;           
}

function getFitbit(requestUrl, user) {
    var deferred = Q.defer();
    
    client.get(requestUrl, user.accessToken).then(function (results) {
            if (results[0]["errors"]) {
                deferred.reject(results[0]["errors"]);
            } else {
                deferred.resolve(results);
            }
    }).catch(function(error) {
        deferred.reject(error);
    })
    return deferred.promise;
}      

function subscribeToActivities(user) {
    requestUrl = "/activities/apiSubscriptions/1.json";
    console.log(requestUrl);
    client.post(requestUrl, user.accessToken).then(function(results) {
        console.log(results);
    }).catch(function(results) {
        console.log(results[0].errors);
    })
}    


server.start(function (err) {
    console.log('Hapi is listening to port ' + port);
});
