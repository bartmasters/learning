let express = require('express');
let bodyParser = require('body-parser');
let expect = require('chai').expect;
let cors = require('cors');
const helmet = require('helmet');

let apiRoutes = require('./routes/api.js');
let fccTestingRoutes = require('./routes/fcctesting.js');
let runner = require('./test-runner');

let app = express();
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({ origin: '*' })); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API
apiRoutes(app);

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type('text').send('Not Found');
});

//Start our server and tests!
app.listen(3000, function () {
  console.log('Listening on port 3000');
  if (process.env.NODE_ENV === 'test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch (e) {
        let error = e;
        console.log('Tests are not valid:');
        console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
