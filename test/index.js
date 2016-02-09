var chai = require('chai'),
	should = require('chai').should(),
	assert = require('chai').assert,
    aslog = require('../index');

// describing test suites

describe('#logging module', function() {
  it('it exists', function() {
    assert.ok(aslog);
  });
});


