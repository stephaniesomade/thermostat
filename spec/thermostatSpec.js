
'use strict';
// So as to ensure clear tests
//encourages higher standard of JS 
describe('Thermostat', () => {
// for the Thermostat class
// This is what is created beforeEach new test. 
  let thermostat; 
  
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });
});
