'use strict';

const assert = require('assert');
const calls = require('../lib/call.js');

describe('call.js', function(){
  describe('#RockPlanet', function(){
    it('earth should be a rock planet', function(){
      assert.equal(calls.RockPlanet('Earth', 3).name, 'Earth');
    });
  });
});
