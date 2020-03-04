// header.js

// init project
var express = require('express');
var app = express();

let returnItem = {
  ipaddress: 'bob',
  language: '',
  software: ''
};

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/api/whoami', (req, res) => {
  returnItem.ipaddress = req.header('x-forwarded-for');
  returnItem.language = req.header('Accept-Language');
  returnItem.software = req.header('User-Agent');
  res.json(returnItem);
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
