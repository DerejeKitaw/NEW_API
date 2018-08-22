const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateInverterInput(data) {
  let errors = {};

  data.inverterManufacturer = !isEmpty(data.inverterManufacturer) ? data.inverterManufacturer : '';
  data.inverterType = !isEmpty(data.inverterType) ? data.inverterType : '';
  data.maxPowerOutput = !isEmpty(data.maxPowerOutput) ? data.maxPowerOutput : '';
  data.acOutputVoltage = !isEmpty(data.acOutputVoltage) ? data.acOutputVoltage : '';
  data.maxAcCurrentOutpu = !isEmpty(data.maxAcCurrentOutpu) ? data.maxAcCurrentOutpu : '';
  data.maxDcVoltage = !isEmpty(data.maxDcVoltage) ? data.maxDcVoltage : '';
  data.startupVoltage = !isEmpty(data.startupVoltage) ? data.startupVoltage : '';
  data.cec = !isEmpty(data.cec) ? data.cec : '';
 
  if (Validator.isEmpty(data.inverterManufacturer)) {
    errors.inverterManufacturer = 'Inverter Manufacturer field is required';
  }

  if (Validator.isEmpty(data.inverterType)) {
    errors.inverterType = 'Inverter Type field is required';
  }
  if (Validator.isEmpty(data.maxPowerOutput)) {
    errors.maxPowerOutput = 'Max Power Output field is required';
  }
  if (Validator.isEmpty(data.acOutputVoltage)) {
    errors.acOutputVoltage = 'AC Out put Voltage field is required';
  }
  if (Validator.isEmpty(data.maxAcCurrentOutpu)) {
    errors.maxAcCurrentOutpu = 'max AC Current Outpu field is required';
  }
  if (Validator.isEmpty(data.maxDcVoltage)) {
    errors.maxDcVoltage = 'max Dc Voltage field is required';
  }
  if (Validator.isEmpty(data.startupVoltage)) {
    errors.startupVoltage = 'Start up Voltage field is required';
  }
  if (Validator.isEmpty(data.cec)) {
    errors.cec = 'cec field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
