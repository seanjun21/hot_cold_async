// ACTIONS are like messengers telling REDUCERS (are like event handlers) what action to be done
// Only create ACTIONS that will attach to event listeners
var fetch = require( 'isomorphic-fetch' );

// displays instructions on how to play
var WHAT = 'WHAT';
var what = function() {
  return {
    type: WHAT
  };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function( guess ) {
  return {
    type: MAKE_GUESS,
    guess: guess
  };
};

var FETCH_FEWEST_SUCCESS = 'FETCH_FEWEST_SUCCESS';
var fetchFewestSuccess = function( fewest ) {
  return {
    type: FETCH_FEWEST_SUCCESS,
    fewest: fewest
  };
};

var FETCH_FEWEST_ERROR = 'FETCH_FEWEST_ERROR';
var fetchFewestError = function( error ) {
  return {
    type: FETCH_FEWEST_ERROR,
    error: error
  };
};

var fetchFewest = function() {
  return function( dispatch ) {
    var url = 'http://localhost:3000/fewest-guesses';
    return fetch( url, { method: 'GET' } ).then( function( response ) {
      
      if ( response.status < 200 || response.status >= 300 ) {
        var error = new Error( response.statusText );
        error.response = response;
        throw error;
      }
      return response.json();
    } ).then( function( data ) {
      return dispatch( fetchFewestSuccess( data ) );
    } ).catch( function( error ) {
      return dispatch( fetchFewestError( error ) );
    } );
  };
};

var UPDATE_FEWEST_SUCCESS = 'UPDATE_FEWEST_SUCCESS';
var updateFewestSuccess = function( fewest ) {
  return {
    type: UPDATE_FEWEST_SUCCESS,
    fewest: fewest
  };
};

var UPDATE_FEWEST_ERROR = 'UPDATE_FEWEST_ERROR';
var updateFewestError = function( error ) {
  return {
    type: UPDATE_FEWEST_SUCCESS,
    error: error
  };
};

var updateFewest = function( attempt ) {
  return function( dispatch ) {
    var url = 'http://localhost:3000/fewest-guesses/' + attempt;
    return fetch( url, { method: 'PUT'} ).then( function( response ) {
        if ( response.status < 200 || response.status >= 300 ) {
          var error = new Error( response.statusText );
          error.response = response;
          throw error;
        }
        return response.json();
      } )
      .then( function( data ) {
        return dispatch( updateFewestSuccess( data ) );
      } ).catch( function( error ) {
        return dispatch( updateFewestError( error ) );
      } );
  };
};

exports.newGame = newGame;
exports.what = what;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.WHAT = WHAT;
exports.MAKE_GUESS = MAKE_GUESS;

exports.fetchFewestSuccess = fetchFewestSuccess;
exports.FETCH_FEWEST_SUCCESS = FETCH_FEWEST_SUCCESS;

exports.fetchFewestError = fetchFewestError;
exports.FETCH_FEWEST_ERROR = FETCH_FEWEST_ERROR;

exports.fetchFewest = fetchFewest;

exports.updateFewestSuccess = updateFewestSuccess;
exports.UPDATE_FEWEST_SUCCESS = UPDATE_FEWEST_SUCCESS;

exports.updateFewestError = updateFewestError;
exports.UPDATE_FEWEST_ERROR = UPDATE_FEWEST_ERROR;

exports.updateFewest = updateFewest;

// Use Ref for input field
