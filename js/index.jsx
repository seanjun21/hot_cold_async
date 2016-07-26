var React = require( 'react');
var ReactDOM = require( 'react-dom' );
var GameContainer = require( './game-container');

document.addEventListener( 'DOMContentLoaded', function() {
  ReactDOM.render( <GameContainer />, document.getElementById( 'app' ) );
} );
