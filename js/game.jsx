var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var Game = React.createClass({
  render: function() {
    return(
      <section className="game"> <!-- Guessing Section -->
        <h2 id="feedback">Make your Guess!</h2>
        <form>
          <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
              <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
            <p>Guess #<span id="count">0</span>!</p>
        <ul id="guessList" className="guessBox clearfix">
        </ul>
      </section>
    );
  }
});

module.exports = Game;
