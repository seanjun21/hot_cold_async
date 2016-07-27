var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Provider = require( 'react-redux' ).Provider;
var store = require( '../js/store' );
var Nav = require('../js/nav');

describe('Nav component', function() {
  it('Renders the nav component', function () {
    var guesslist = [3, 7];
    var counter = 2;
    var hotness = 'cold';
    var relative = 'warmer';
    var renderer = TestUtils.createRenderer();
    renderer.render(<Provider store={store}><Nav /></Provider>);
    var result = renderer.getRenderOutput();
    result.type.should.equal(Nav);

  });
});
