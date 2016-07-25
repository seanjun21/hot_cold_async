// ACTIONS are like messengers telling REDUCERS (are like event handlers) what action to be done
// Only create ACTIONS that will attach to event listeners

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
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    guess: guess
  };
};

exports.newGame = newGame;
exports.what = what;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.WHAT = WHAT;
exports.MAKE_GUESS = MAKE_GUESS;

// Use Ref for input field
