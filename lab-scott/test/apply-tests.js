'use strict';

const assert = require('assert');
const applys = require('../lib/apply.js');

describe('apply.js', function(){
  describe('#GasPlanet', function(){
    it('saturn should be a have type gas', function(){
      let saturn = {name:'Saturn', numFromSol:6};
      applys.doApply(saturn);
      
      assert.equal(saturn.type, 'gas');
    });
  });
});
