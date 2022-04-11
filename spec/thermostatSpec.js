'use strict';
// So as to ensure clear tests
describe('Thermostat', () => {
// for the Thermostat class
// This is what is created before each new test. 
beforeEach(() => {
  thermostat = new Thermostat();
}
});

it('starts at 20 degrees', () => {
  expect(thermostat.temperature).toEqual(20);
});
})