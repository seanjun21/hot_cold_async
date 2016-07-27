var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var GuessList = require('../js/guess-list');

describe('GuessList component', function() {
  it('Renders user guesses', function() {
    var guess = 9;
    var renderer = TestUtils.createRenderer();
    renderer.render(<GuessList guess={guess} />);
    var result = renderer.getRenderOutput();
    result.props.children.should.equal(guess);
    result.type.should.equal('li');
  });
});
