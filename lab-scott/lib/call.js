'use strict';

module.exports = exports = {};

function Planet(name, numFromSol) {
  this.name = name;
  this.numFromSol = numFromSol;
}

function RockPlanet(pType){
  this.type = pType;
}

exports.doCall = function(planet){
  RockPlanet.call(planet, 'rock');
};

exports.earth  = new Planet('Earth', 3);


// console.log(exports.earth);
