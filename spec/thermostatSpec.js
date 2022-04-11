'use strict';
// So as to ensure clear tests
//encourages higher standard of JS 
describe('Thermostat', () => {
// describing the Thermostat class
// This is what is created beforeEach new test.
// Always create the variable before writing beforeEach  
  let thermostat; 

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with the function up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with the function down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
});