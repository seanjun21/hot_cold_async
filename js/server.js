var express = require( 'express' );

var Storage = function() {
  this.fewest = -1;
};

Storage.prototype.put = function( attempt ) {
  this.fewest = attempt;
};

var storage = new Storage();

var app = express();

app.get( '/fewest-guesses', function( req, res ) {
  if ( storage.fewest < 1 ) {
    return res.sendStatus( 404 );
  }
  res.json( storage.fewest );
} );

app.put( '/fewest-guesses/:attempt', function( req, res ) {
  var attempt = parseInt( req.params.attempt );
  if ( storage.fewest === -1 ) {
    storage.fewest = attempt;
    return res.json( storage.fewest );
  } else if ( storage.fewest > attempt ) {
    storage.fewest = attempt;
    return res.json( storage.fewest );
  } else if ( storage.fewest < attempt ) {
    return res.json( storage.fewest );
  } else {
    return res.sendStatus( 404 );
  }
} );

app.listen( process.env.PORT || 3000 );
