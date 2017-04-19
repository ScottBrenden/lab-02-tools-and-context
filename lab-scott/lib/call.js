'use strict';

module.exports = exports = {};

function Planet(name, numFromSol) {
  this.name = name;
  this.numFromSol = numFromSol;
}

function RockPlanet(name, numFromSol){
  Planet.call(this, name, numFromSol);
  this.type = 'rock';
}

let earth = new RockPlanet('Earth', 3);
console.log(earth);
