var actions = require( './actions' );

/**
 * []
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */

var hotColdReducer = function( state, action ) {
  state = state || {};

  if ( action.type === actions.WHAT ) {
    return Object.assign( {}, state, {
      show: !state.show
    } );
  } else if ( action.type === actions.NEW_GAME ) {
    var randNum = Math.floor( ( Math.random() * 100 ) + 1 );
    return Object.assign({}, state, {
      correct: randNum,
      guess: null,
      counter: 0,
      hotness: 'Make your Guess!',
      relative: null,
      guesslist: [],
      show: false,
      complete: false
    });
  } else if ( action.type === actions.MAKE_GUESS ) {
    if ( state.counter > 9 ) {
      return Object.assign( {}, state, {
        hotness: 'You lose!',
        relative: null
      } );
    }
    if ( action.guess > 0 && action.guess <= 100 ) {
      var difference = Math.abs( state.correct - action.guess );
      var hotness;
      var complete = false;

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
        complete = true;
      }

      var oldDiff = Math.abs( state.correct - state.guess );
      var relative;

      if ( state.hotness === 'Make your Guess!' ) {
        relative = null;
      } else if ( state.guess === action.guess ) {
        relative = 'You are getting stupider';
      } else if ( difference < oldDiff ) {
        relative = 'You are getting warmer';
      } else {
        relative = 'You are getting colder';
      }

      state.guesslist.push( action.guess );

      return Object.assign( {}, state, {
        guess: action.guess,
        counter: state.counter + 1,
        hotness: hotness,
        relative: relative,
        guesslist: state.guesslist,
        complete: complete
      } );
    }
  } else if ( action.type === actions.FETCH_FEWEST_SUCCESS ) {
    return Object.assign( {}, state, {
      fewest: action.fewest
    } );
  } else if ( action.type === actions.FETCH_FEWEST_ERROR ) {
    console.log( action.error );
  } else if ( action.type === actions.UPDATE_FEWEST_SUCCESS ) {
    return Object.assign( {}, state, {
      fewest: action.fewest
    } );
  } else if ( action.type === actions.UPDATE_FEWEST_ERROR ) {
    console.log( action.error );
  } else {
    return state;
  }
};

exports.hotColdReducer = hotColdReducer;
