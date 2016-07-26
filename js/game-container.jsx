var React = require( 'react');
var connect = require( 'react-redux').connect;
var Nav = require( './nav');
var Overlay = rquire( './overlay');
var Game = require( './game');

var GameContainer = React.createClass({
  render: function() {
    return(
      <header> <!--Header -->

        <!-- Top Navigation -->
        <Nav />

        <!-- Modal Information Box -->
        <Overlay />

        <!-- logo text -->
        <h1>HOT or COLD</h1>

      </header>
      <Game />
    );
  }
});

module.exports = GameContainer;
