var express = require('express');
var app = express();

let returnTime = {
  unix: null,
  utc: ''
};
let returnItem = {
  ipaddress: 'bob',
  language: '',
  software: ''
};

let port = process.env.PORT || 3000;

/** this project needs a db !! **/

// mongoose.connect(process.env.DB_URI);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.json);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  console.log('hello');
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp', (req, res) => {
  // blank date
  let requestTime = new Date();
  returnTime.unix = requestTime.getTime();
  returnTime.utc = requestTime.toUTCString();
  res.json(returnTime);
});

app.get('/api/timestamp/:requestDate', (req, res) => {
  let requestTime;
  if (!isNaN(req.params.requestDate)) {
    requestTime = parseInt(req.params.requestDate);
  } else {
    requestTime = req.params.requestDate;
  }
  requestTime = new Date(requestTime);
  if (requestTime.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
  }
  returnTime.unix = requestTime.getTime();
  returnTime.utc = requestTime.toUTCString();
  res.json(returnTime);
});

app.get('/api/whoami', (req, res) => {
  returnItem.ipaddress = req.header('x-forwarded-for');
  returnItem.language = req.header('Accept-Language');
  returnItem.software = req.header('User-Agent');
  res.json(returnItem);
});

app.post('/api/shorturl/new', (req, res) => {
  console.log(req);
});

var listener = app.listen(port, function() {
  //var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
