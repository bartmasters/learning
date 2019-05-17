var Hapi = require('hapi');
var mongoose = require('mongoose');
// var config = require('./app.json');
var Fitbit = require('fitbit-node');

var client = new Fitbit({clientId: '22D6NT', clientSecret: '3ba6a57f0771e7b54fac1578c8a59d95'});
var redirect_uri = 'http://localhost:8080/fitbit_oauth_callback';
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
        path: '/fitbit_oauth_callback',
        handler: function(request, reply) {
            client.getAccessToken(request.query.code, redirect_uri).then(function(result) {
                updateUser(result.user_id, result.access_token, result.refresh_token);
                reply().redirect("/api/v1/users/" + result.user_id);
            })
        }
    },
    {
        method: 'GET',
        config: {json: {space: 2}},
        path: '/api/v1/users',
        handler: function(request, reply) {
            var result = User.find();
            result.exec(function(err, users) {
                reply(users);
            });
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/users/{fitbitid}',
        handler: function(request, reply) {
            reply("Delete user");
        }
    },
    {
        method: 'GET',
        path: '/api/v1/users/{fitbitid}',
        handler: function(request, reply) {
            var result = User.findOne({"userid": request.params.fitbitid});
            result.exec(function(err, user) {
                client.get("/profile.json", user.accessToken).then(function(results) {
                    reply(results);
                })
            })
        }
    },
    {
        method: 'GET',
        config: {json: {space: 2}},
        path: '/api/v1/users/{fitbitid}/progress',
        handler: function(request, reply) {
            // Need to handle Date
            // Use request.query.date
            // yyyy-MM-dd
            reply("Get user progress");
        }
    },
    {
        method: 'GET',
        config: {json: {space: 2}},
        path: '/api/v1/users/{fitbitid}/activities/summary',
        handler: (request, reply) => {
            let result = User.findOne({'userid': request.params.fitbitid});
            result.exec((err, user) => {
                if (!user) {reply().redirect('/fitbit');}
                let requestDate = getFitbitDate(request.query.date);
                let requestUrl = '/activities/date/' + requestDate + '.json';
                client.get(requestUrl, user.accessToken).then((results) => {
                    reply(results[0]['summary']);
                });
            });
        }
    },
    {
        method: 'GET',
        config: {json: {space: 2}},
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function(request, reply) {
            let result = User.findOne({'userid': request.params.fitbitid});
            result.exec((err, user) => {
                if (!user) {reply().redirect('/fitbit');}
                let requestDate = getFitbitDate(request.query.date);
                let queryString = '?afterDate=' + requestDate + '&sort=asc&offset=0&limit=50';
                let requestUrl = '/activities/list.json' + queryString;
                client.get(requestUrl, user.accessToken).then((results) => {
                    reply(results[0]['activities']);
                });
            });
        }
    },
    {
        method: 'POST',
        path: '/api/v1/users/{fitbitid}/activities',
        handler: function(request, reply) {
            let result = User.findOne({'userid': request.params.fitbitid});
            result.exec((err, user) => {
                if (!user) {reply().redirect('/fitbit');}
                let requestDate = getFitbitDate(request.query.date);
                let activity = {
                    "activityName": "Cycling",
                    "manualCalories": 300,
                    "startTime": "09:00:00",
                    "durationMillis": 1000 * 60 * 30,
                    "date": requestDate
                }
                let requestUrl = '/activities.json';
                client.post(requestUrl, user.accessToken, activity).then((results) => {
                    reply(results);
                })
            });
        }
    },
    {
        method: 'GET',
        config: {json: {space: 2}},
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function(request, reply) {
            reply("Get activity list for user");
        }
    },
    {
        method: 'PUT',
        config: {json: {space: 2}},
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function(request, reply) {
            reply("Update activity for user");
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/users/{fitbitid}/activities/{activityId}',
        handler: function(request, reply) {
            let result = User.findOne({'userid': request.params.fitbitid});
            result.exec((err, user) => {
                if (!user) {reply().redirect('/fitbit');}
                let requestUrl = '/activities/' + request.params.activityId + '.json';
                client.delete(requestUrl, user.accessToken).then((results, response) => {
                    console.log(response);
                    reply().code(204);
                });
            });
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply('Hello world from hapi');
        }
    }
]);
function updateUser(userid, accessToken, refreshToken) {
    var newUserInfo = {
        'userid': userid,
        'accessToken': accessToken,
        'refreshToken': refreshToken
    };
    var newUser = new User(newUserInfo);
    User.update({"userid": userid}, newUser, {upsert: true}, function(err) {
        return;
    });
}

function getFitbitDate(requestDate) {
    let returnDate = '';
    if (requestDate) {
        returnDate = requestDate;
    } else {
        var d = new Date();
        var dateArray = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
        returnDate = dateArray.join('-');
    }
    return returnDate;
}

server.start(function(err) {
    console.log('Hapi is listening to http://localhost:8080');
});
