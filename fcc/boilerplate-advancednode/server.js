const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const routes = require('./routes.js');
const auth = require('./auth.js');

const ObjectID = require('mongodb').ObjectID;
const mongo = require('mongodb').MongoClient;

const app = express();
const session = require('express-session');
const passport = require('passport');

fccTesting(app); //For FCC testing purposes

app.set('view engine', 'pug');

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUnitialized: true
  })
);
app.use(passport.session());

mongo.connect(process.env.MONGO_URI, (err, client) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');
    let db = client.db('test');

    auth(app, db);
    routes(app, db);
  }
});
