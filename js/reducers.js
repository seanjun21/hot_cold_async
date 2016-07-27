var actions = require( './actions' );

var hotColdReducer = function( state, action ) {
  state = state || {};

  if ( action.type === actions.NEW_GAME ) {
    var randNum = Math.floor( ( Math.random() * 100 ) + 1 );
    return {
      correct: randNum,
      guess: null,
      counter: 0,
      hotness: 'Make your Guess!',
      relative: null,
      guesslist: []
    };
  }

  if ( action.type === actions.MAKE_GUESS ) {
    if ( state.counter > 9 ) {
      return Object.assign( {}, state, {
        hotness: 'You lose!',
        relative: null
      } );
    }

    if ( action.guess > 0 && action.guess <= 100 ) {
      var difference = Math.abs( state.correct - action.guess );
      var hotness;

      if ( difference > 50 ) {
        hotness = 'Super Cold';
      } else if ( difference > 30 ) {
        hotness = 'Cold';
      } else if ( difference > 15 ) {
        hotness = 'Warm';
      } else if ( difference > 10 ) {
        hotness = 'Hot';
      } else if ( difference > 5 ) {
        hotness = 'SO HOT';
      } else if ( difference >= 1 ) {
        hotness = 'ALEX HOT';
      } else {
        hotness = 'Got it!';
      }

      var oldDiff = Math.abs( state.correct - state.guess );
      var relative;

      if ( state.hotness === 'Make your Guess!' ) {
        relative = null;
      } else if ( difference < oldDiff ) {
        relative = 'You are getting warmer';
      } else if ( difference > oldDiff ) {
        relative = 'You are getting colder';
      } else {
        relative = 'You are getting stupider';
      }
      // var guesslist = state.guesslist.slice();
      state.guesslist.push( action.guess );

      console.log( hotness );
      console.log( relative );
      return Object.assign( {}, state, {
        guess: action.guess,
        counter: state.counter + 1,
        hotness: hotness,
        relative: relative,
        guesslist: state.guesslist
      } );
    }
  }
  return state;
};

exports.hotColdReducer = hotColdReducer;
