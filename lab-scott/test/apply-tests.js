'use strict';

const assert = require('assert');
const applys = require('../lib/apply.js');

describe('apply.js', function(){
  describe('#GasPlanet', function(){
    it('saturn should be a have type gas', function(){
      assert.equal(applys.GasPlanet('Saturn', 6).type, 'gas');
    });
  });
});
