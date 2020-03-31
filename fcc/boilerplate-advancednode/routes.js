const passport = require('passport');
const LocalStrategy = require('passport-local');

module.exports = function(app, db) {
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('is auth');
      return next();
    }
    res.redirect('/');
  }
  app.route('/').get((req, res) => {
    res.render(process.cwd() + '/views/pug/index', {
      title: 'Home Page',
      message: 'Please login',
      showLogin: true,
      showRegistration: true
    });
  });

  app
    .route('/login')
    .post(
      passport.authenticate('local', { failureRedirect: '/' }),
      (req, res) => {
        // res.redirect("/profile");
        res.render(process.cwd() + '/views/pug/profile.pug', {
          username: req.user.username
        });
      }
    );

  app.route('/register').post((req, res, next) => {
    db.collection('users').findOne(
      { username: req.body.username },
      (err, user) => {
        if (err) {
          next(err);
        } else if (user) {
          res.redirect('/');
        } else {
          console.log('trying to register ' + req.body.username);
          let myHash = bcrypt.hashSync(req.body.password, 12);
          db.collection('users').insertOne(
            {
              username: req.body.username,
              password: myHash
            },
            (err, doc) => {
              if (err) {
                res.redirect('/');
              } else {
                next(null, user);
              }
            }
          );
        }
      },
      passport.authenticate('local', { failureRedirect: '/' }),
      (req, res, next) => {
        res.redirect('/profile');
      }
    );
  });

  app.route('/logout').get((req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.route('/profile').get(ensureAuthenticated, (req, res) => {
    res.render(process.cwd() + '/views/pug/profile', {
      username: req.user.username
    });
  });

  app.use((req, res, next) => {
    res
      .status(404)
      .type('text')
      .send('PAGE Not Found');
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + process.env.PORT);
  });
};
