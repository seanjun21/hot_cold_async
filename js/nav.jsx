var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var Nav = React.createClass( {
  newGame: function() {
    // if the user has won update the fewest tracker
    if (this.props.games.complete) {
      this.props.dispatch(actions.updateFewest(this.props.games.counter));
    }
    // load new game
    this.props.dispatch(actions.newGame());
  },
  what: function() {
    this.props.dispatch( actions.what() );
  },
  render: function() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#" onClick={this.what}>What ?</a>
          </li>
          <li>
            <a className="new" href="#" onClick={this.newGame}>+ New Game</a>
          </li>
        </ul>
      </nav>
    );
  }
} );
var mapStateToProps = function( state, props ) {
  return {
    games: state
  };
};

var Container = connect(mapStateToProps)( Nav );

module.exports = Container;
