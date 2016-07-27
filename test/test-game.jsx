var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Provider = require( 'react-redux' ).Provider;
var store = require( '../js/store' );
var Game = require('../js/game');

describe('Game component', function() {
  it('Renders the game', function () {
    var guesslist = [3, 7];
    var counter = 2;
    var hotness = 'cold';
    var relative = 'warmer';
    var renderer = TestUtils.createRenderer();
    renderer.render(<Provider store={store}>
      <Game guesslist={guesslist} counter={counter} hotness={hotness} relative={relative} />
    </Provider>);
    var result = renderer.getRenderOutput();
    result.props.hotness.should.equal(hotness);
  });
});
