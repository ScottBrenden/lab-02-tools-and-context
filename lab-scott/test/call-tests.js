'use strict';

const assert = require('assert');
const calls = require('../lib/call.js');

describe('call.js', function(){
  describe('#RockPlanet', function(){
    it('earth should be a rock planet', function(){
      calls.doCall(calls.earth);

      assert.equal(calls.earth.name, 'Earth');
    });
  });
});
