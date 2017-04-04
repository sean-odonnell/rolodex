var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/noderest';

var db = mongoose.connection;

var state = {
  db: null,
}

exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return done(err);
    }
    mongoose.connect(mongoUri);
    state.db = db;
    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
