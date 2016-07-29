var express = require( 'express' );

var Storage = function() {
  this.fewest = -1;
};

Storage.prototype.put = function( attempt ) {
  this.fewest = attempt;
};

var storage = new Storage();

var app = express();

// https://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
app.disable('etag');

// Middleware suggested by 
// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');

  // Pass to next layer of middleware
  next();
});

app.get( '/fewest-guesses', function( req, res ) {
  if ( storage.fewest < 1 ) {
    return res.json('Just Starting');
  }
  return res.json(storage.fewest);
} );

app.put( '/fewest-guesses/:attempt', function( req, res ) {
  var attempt = parseInt( req.params.attempt );
  if ( isNaN(attempt) || storage.fewest === -1 ) {
    storage.put(attempt);
    return res.json( storage.fewest );
  } else if ( storage.fewest > attempt ) {
    storage.put(attempt);
    return res.json( storage.fewest );
  } else if ( storage.fewest < attempt ) {
    return res.json( storage.fewest );
  } else {
    return res.sendStatus( 404 );
  }
} );

app.listen( process.env.PORT || 3000 );
