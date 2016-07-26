var React = require( 'react' );
var connect = require( 'react-redux' ).connect;

var Nav = React.createClass({
  render: function() {

    return(
      <nav>
				<ul className="clearfix">
					<li><a className="what" href="#">What ?</a></li>
					<li><a className="new" href="#">+ New Game</a></li>
				</ul>
			</nav>
    );
  }
});

module.exports = Nav;
