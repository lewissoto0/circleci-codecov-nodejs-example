'use strict';
const assert = require('chai').assert;
const fizzbuzz = require('../lib');

describe('fizzbuzz()', function() {
  it('returns fizz if divisible by 3', function() {
    assert.strictEqual(fizzbuzz(3), 'fizz');
  });
});
