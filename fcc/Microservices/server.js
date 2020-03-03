// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

let returnTime = {
  unix: null,
  utc: ''
};

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
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

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
