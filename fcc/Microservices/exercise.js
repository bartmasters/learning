const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://bart:diamondbart@cluster0-1tojs.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  exercises: [
    {
      date: Date,
      description: String,
      duration: Number
    }
  ]
});
const User = mongoose.model('ExerciseUsers', userSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index3.html');
});

app.post('/api/exercise/new-user', (req, res) => {
  // Create a new user
  const newUser = new User({
    name: req.body.username
  });
  newUser.save((err, data) => {
    if (err) console.log(err);
    res.json({ username: req.body.username, _id: data._id });
  });
});

app.get('/api/exercise/users', (req, res) => {
  // Get a list of all users
  User.find({}, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

app.post('/api/exercise/add', (req, res) => {
  // Add exercise to a user
  console.log('Add exercise to a user - ' + req.body.date);
  const today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  const tempDate = yyyy + '-' + mm + '-' + dd;
  const exDate = req.body.date ? req.body.date : tempDate;
  const newExercise = {
    description: req.body.description,
    duration: req.body.duration,
    date: exDate
  };

  User.findByIdAndUpdate(
    req.body.userId,
    { $push: { exercises: newExercise } },
    { new: true },
    (err, data) => {
      if (err) console.log(err);
      res.json(data);
    }
  );
});

app.get('/api/exercise/log/:userId', (req, res) => {
  // Get a users exercise log
  User.findById(req.params.userId, (err, data) => {
    if (err) console.log(err);
    res.json(data.exercises);
  });
});

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: 'Endpoint not found' });
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || 'Internal Server Error';
  }
  res
    .status(errCode)
    .type('txt')
    .send(errMessage);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
