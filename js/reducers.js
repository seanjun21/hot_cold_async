var actions = require('./actions');

/**
 * []
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */

var hotColdReducer = function(state, action) {
  state = state || {};

  if (action.type === actions.WHAT) {
    return Object.assign({}, state, {
      show: !state.show
    });
  }

  if (action.type === actions.NEW_GAME) {
    var randNum = Math.floor((Math.random() * 100) + 1);
    return {
      correct: randNum,
      guess: null,
      counter: 0,
      hotness: 'Make your Guess!',
      relative: null,
      guesslist: [],
      show: false
    };
  }

  if (action.type === actions.MAKE_GUESS) {
    if (state.counter > 9) {
      return Object.assign({}, state, {
        hotness: 'You lose!',
        relative: null
      });
    }

    if (state.hotness === 'Got it!') {
      return state;
    }

    if (action.guess > 0 && action.guess <= 100) {
      var difference = Math.abs(state.correct - action.guess);
      var hotness;

      if (difference > 50) {
        hotness = 'Super Cold';
      } else if (difference > 30) {
        hotness = 'Cold';
      } else if (difference > 15) {
        hotness = 'Warm';
      } else if (difference > 10) {
        hotness = 'Hot';
      } else if (difference > 5) {
        hotness = 'SO HOT';
      } else if (difference >= 1) {
        hotness = 'ALEX HOT';
      } else {
        hotness = 'Got it!';
      }

      var oldDiff = Math.abs(state.correct - state.guess);
      var relative;

      if (state.hotness === 'Make your Guess!') {
        relative = null;
      } else if (state.guess === action.guess) {
        relative = 'You are getting stupider';
      } else if (difference < oldDiff) {
        relative = 'You are getting warmer';
      } else {
        relative = 'You are getting colder';
      }

      state.guesslist.push(action.guess);

      return Object.assign({}, state, {
        guess: action.guess,
        counter: state.counter + 1,
        hotness: hotness,
        relative: relative,
        guesslist: state.guesslist
      });
    }
  }
  return state;
};

exports.hotColdReducer = hotColdReducer;
