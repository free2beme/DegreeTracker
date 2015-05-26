# DegreeTrackervar passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.use(new HashStragtegy(

		  function(hash, done) {
		    User.findOne({ hash: hash }, function (err, user) {
		      if (err) { return done(err); }
		      if (!user) { return done(null, false); }
		      if (!user.isUnconfirmed()) { return done(null, false); }
		      return done(null, user);
		    });
		  }
		));


app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});

app.post('/confirm/:hash',
		  passport.authenticate('hash', { successRedirect: '/',
		                                   failureRedirect: '/login',
		                                   failureFlash: true }));
	function(req, res){
	res.redirect('/');
	});

	
passport.use(new LocalStrategy({
	    usernameField: 'email',
	    passwordField: 'passwd'
	  },
	  function(username, password, done) {
	  }
	));
	
