'use strict';

module.exports = exports = {};

exports.GasPlanet = function(pType){
  this.type = pType;
};

exports.doApply = function(planet){
  exports.GasPlanet.apply(planet, ['gas']);
};
