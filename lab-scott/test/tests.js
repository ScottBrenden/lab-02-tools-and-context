'use strict';

const calls = require('../lib/call.js');
const assert = require('assert');

describe('call.js', function(){
  describe('#planet', function(){
    it('earth should be a rock planet', function(){
      assert.equal(calls.Planet('Earth', 3).name, 'Earth');
    });
  });
});
