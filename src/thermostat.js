'use strict';
class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.MAX_LIM_PSM_ON = 25;
    this.MAX_LIM_PSM_OFF = 32;   
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up(){
    if (this.isMaximumTemperature()) {
      return;
    }
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
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIM_PSM_OFF;
    }
    return this.temperature == this.MAX_LIM_PSM_ON;
  }
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMP;
  }
};

