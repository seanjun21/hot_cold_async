var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( 'react-redux' ).Provider;

var store = require( './store' );
var actions = require( './actions' );
var GameContainer = require( './game-container' );
var Nav = require( './nav' );

document.addEventListener( 'DOMContentLoaded', function() {
  store.dispatch( actions.updateFewest( store.getState().counter ) );
  store.dispatch( actions.newGame() );
  ReactDOM.render(
    <Provider store={store}>
    <GameContainer/>
  </Provider>, document.getElementById( 'app' ) );
} );
