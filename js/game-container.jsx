var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var Nav = require( './nav' );
var Overlay = require( './overlay' );
var Game = require( './game' );

var GameContainer = React.createClass( {
  render: function() {
    console.log( this.props.games.guesslist, 'GUESSLIST' );
    return (
      <div>
        <header>
          <Nav/>
          <Overlay/>
          <h1>HOT or COLD</h1>
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
