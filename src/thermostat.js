class Thermostat {
  'use strict';
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    // caps as it is clearly a constant
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up(){
    this.temperature += 1;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  down() {
    if (this.isMinimumTemperature() === true){
      return;
    }
    this.temperature -= 1;
  }
};

