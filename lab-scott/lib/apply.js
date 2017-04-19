'use strict';

module.exports = exports = {};

function Planet(name, numFromSol){
  this.name = name;
  this.numFromSol = numFromSol;
}

function GasPlanet(name, numFromSol){
  Planet.apply(this, [name, numFromSol]);
  this.type = 'gas';
}

let saturn = new GasPlanet('Saturn', 6);
console.log(saturn);
