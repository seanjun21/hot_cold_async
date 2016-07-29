var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var actions = require( './actions' );
var Nav = require( './nav' );
var Overlay = require( './overlay' );
var Game = require( './game' );


/**
 * Create GameContainer component
 * @param  {boolean} hits.props.games.show - If True, displays overlay.
 * @param {array} this.props.games.guesslist - Array of user guesses.
 * @param {number} this.props.games.counter - Keeps track of guess attempts.
 * @param {string} this.props.games.hotness - Feedback on how close the guess is to the answer.
 * @param {string} this.props.games.relative - Compares user's progresses.
 * @return {HTML} Displays game app.
 */


var GameContainer = React.createClass( {
  componentDidMount: function() {
    this.props.dispatch(actions.fetchFewest());
  },
  render: function() {
    return (
      <div>
        <header>
          <Nav/>
          <Overlay show={this.props.games.show}/>
          <h1>HOT or COLD</h1>
          <h1>{this.props.games.fewest}</h1>
        </header>
        <Game guesslist={this.props.games.guesslist} counter={this.props.games.counter} hotness={this.props.games.hotness} relative={this.props.games.relative}/>
        
      </div>
    );
  }
} );

var mapStateToProps = function( state, props ) {
  return {
    games: state
  };
};

var Container = connect( mapStateToProps )( GameContainer );

module.exports = Container;
