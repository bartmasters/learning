
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// --> 7)  Mount the Logger middleware here

app.get('*', function (req, res, next) {
    let myMethod = req.method;
    let myPath = req.path;
    let myIP = req.ip;
    let myConstruct = myMethod + " " + myPath + " - " + myIP;
    console.log(myConstruct);
    next();
});


// --> 11)  Mount the body-parser middleware  here

let myFunc = bodyParser.urlencoded({extended: false});

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */

app.get('/', function (req, res) {res.send('Hello Express');});

/** 3) Serve an HTML file */

let absolutePath = __dirname + '/views/index.html';
app.get('/', function (req, res) {res.sendFile(absolutePath);});

/** 4) Serve static assets  */

let assetsPath = __dirname + '/public';
app.use(express.static(assetsPath));

/** 5) serve JSON on a specific route */

let responseObj = {
    "message": "Hello json"
};
app.get('/json', function (req, res) {res.json(responseObj);});

/** 6) Use the .env file to configure the app */

app.get('/json', function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        responseObj.message = responseObj.message.toUpperCase();
    }
    res.json(responseObj);
});

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    let myObj = {
        time: req.time
    };
    res.json(myObj);
});

/** 9)  Get input from client - Route parameters */

app.get('/:echo/echo', function (req, res) {
    res.json(req.params);
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get('/name', function (req, res) {
    let myName = req.query.first + ' ' + req.query.last;
    let myObj = {name: myName};
    res.json(myObj)
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

app.use(myFunc);

/** 12) Get data form POST  */

app.post('/name', function (req, res) {
    let myName = req.body.first + ' ' + req.body.last;
    let myObj = {name: myName};
    res.json(myObj)
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;

