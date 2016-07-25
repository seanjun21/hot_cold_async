var actions = require('./actions');

var hotColdReducer = function(state, action) {
  state = state || {};

  if (action.type === actions.NEW_GAME) {
    var randNum = Math.floor((Math.random() * 100) + 1);
    return {
      correct: randNum,
      guess: null,
      counter: 0,
      hotness: null
    };
  }

  if (action.type === actions.MAKE_GUESS) {
    if (action.guess > 0 && action.guess <= 100) {
      var difference = Math.abs(state.correct - action.guess);
      var hotness;

      if (difference > 50) {
        hotness = 'Super Cold';
      } else if (difference > 30) {
        hotness = 'Cold';
      } else if (difference > 15) {
        hotness = 'Warm';
      } else if (difference > 1) {
        hotness = 'Hot';
      } else {
        hotness = 'Got it!';
      }

      return Object.assign({}, state, {
        guess: action.guess,
        counter: state.counter + 1,
        hotness: hotness
      });
    }
  }
  return state;
};

exports.hotColdReducer = hotColdReducer;


// var MAKE_GUESS = 'MAKE_GUESS';
// var makeGuess = function(guess) {
//   return {
//     type: MAKE_GUESS,
//     guess: guess
//   };
// };

// var NEW_GAME = 'NEW_GAME';
// var newGame = function() {
//   return {
//     type: NEW_GAME
//   };
// };
