var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var lodash = require('lodash');
var morgan = require('morgan');
var fs = require('fs');
var jade = require('jade');

var db = require('./db/dbController.js')
var index = require('./routes/index.js')
var apiRoutes = require('./routes/apiRoutes.js')

var mongoUri = 'mongodb://localhost/noderest';
var port = 3001;
var app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

// VIEW ENGINE
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

// STATIC LOADER
app.use(express.static(path.join(__dirname, 'src')));

// ADD MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));

// ROUTING
app.use('/', index);
app.use('/api', apiRoutes);

// Connect to Mongo on start
db.connect(mongoUri, function (err, result) {
	if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(port, function() {
      console.log('Listening on port ' + port + '....');
    });
  }
});

module.exports = app;
