var Hapi = require('hapi');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var taskSchema = mongoose.Schema({
    task: String,
    owner: String,
    index: Number
});

var Task = mongoose.model('Task', taskSchema)

// Create the data store for the test API
var tasklist = [
    {
        "task": "Walk the cat",
        "owner": "Kirsten"
    },
    {
        "task": "Water the plants",
        "owner": "Kirsten"
    }
]


var server = new Hapi.Server();
server.connection({port: 8080});

server.route([
    // Get ToDo List
    {
        method: 'GET',
        path: '/api/v1/todolist',
        handler: (request, reply) => {
            var result = Task.find().sort({'index': -1}).limit(10);
            result.exec((err, tasks) => {
                reply(tasks);
            })
        }
    },

    {
        method: 'POST',
        path: '/api/v1/todolist',
        handler: (request, reply) => {
            var latestTask = Task.find().sort({'index': -1}).limit(1);
            latestTask.exec((err, task) => {
                newIndex = task[0]['index'] + 1;
                newTask = new Task({
                    'task': request.payload.task,
                    'owner': request.payload.owner,
                    'index': newIndex
                });
            });
            newTask.save((err, newTask) => {
                reply(newTask).code(201);
            });
        }
    },

    // Get single task
    {
        method: 'GET',
        path: '/api/v1/todolist/{index}',
        handler: function(request, reply) {
            var result = Task.findOne({"index": request.params.index});
            result.exec(function(err, task) {
                if (task) {
                    reply(task);
                } else {
                    reply().code(404);
                }
            })
        }
    },
    // Update single task
    {
        method: 'PUT',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
            var updateData = {
                'task': request.payload.task,
                'owner': request.payload.owner,
                'index': request.params.index
            }
            Task.findOneAndUpdate({'index': request.params.index},
                updateData,
                {new: true},
                (err, doc) => {
                    reply(doc);
                })
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/todolist/{index}',
        handler: (request, reply) => {
            Task.findOneAndRemove({index: request.params.index}, (err, response) => {
                reply().code(204);
            });
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('Hello world from hapi');
        }
    }
]);

server.start(function(err) {
    console.log('Hapi is listening to http://localhost:8080');
});
