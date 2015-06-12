# DegreeTracker
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , test = require('./routes/Test')
  , Course_view = require('./routes/Course_view')
  , table_view = require('./routes/table_view')
  , LogIn = require('./routes/LogIn');

var app = express();
//var table_view = require('./routes/table_view');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test', test.get);
app.post('/test', test.post);
app.get('/database/view/:db_resource/:table', table_view.get);
app.get('/database/course/:db_resource/:table', Course_view.get); 
app.get('/database/LogIn/', LogIn.get);
app.post('/database/LogIn/', LogIn.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
