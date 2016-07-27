var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var GuessList = React.createClass( {
  render: function() {
    return (
      <li>{this.props.guess}</li>
    );
  }
} );

module.exports = GuessList;
