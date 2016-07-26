var React = require('react');
var connect = require('react-redux').connect;

var Nav = require('./nav');
var Overlay = require('./overlay');
var Game = require('./game');

var GameContainer = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <Nav/>
          <Overlay/>
          <h1>HOT or COLD</h1>
        </header>
        <Game counter={this.props.games.counter}/>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    games: state
  };
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;
