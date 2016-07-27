var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var Nav = React.createClass( {
  newGame: function() {
    location.reload();
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

var Container = connect()( Nav );

module.exports = Container;
