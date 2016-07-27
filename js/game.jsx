var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );
var GuessList = require( './guess-list.jsx' );

var Game = React.createClass( {
  makeGuess: function( event ) {
    event.preventDefault();
    var userGuess = this.refs.userGuess.value;
    this.props.dispatch( actions.makeGuess( userGuess ) );
  },
  render: function() {
    var guessList = [];
    this.props.guesslist.forEach( function( value ) {
      guessList.push( <GuessList guess={value}/> );
    } );
    return (
      <section className="game">
        <h2 id="feedback">{this.props.hotness}</h2>
        <h3>{this.props.relative}</h3>
        <form>
          <input type="text" ref="userGuess" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
          <input type="submit" onClick={this.makeGuess} id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
        <p>Guess #<span id="count">{this.props.counter}</span>!</p>
        <ul id="guessList" className="guessBox clearfix">{guessList}</ul>
      </section>
    );
  }
} );

var Container = connect()( Game );

module.exports = Container;
