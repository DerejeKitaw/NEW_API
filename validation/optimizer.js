const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOptimizerInput(data) {
  let errors = {};

  data.optimizerModel = !isEmpty(data.optimizerModel) ? data.optimizerModel : '';
  data.optimizerMaxDcVoltage = !isEmpty(data.optimizerMaxDcVoltage) ? data.optimizerMaxDcVoltage : '';
  data.optimizerMaxPowerOutput = !isEmpty(data.optimizerMaxPowerOutput) ? data.optimizerMaxPowerOutput : '';
  data.optimizerMaxDcCurrentOutput = !isEmpty(data.optimizerMaxDcCurrentOutput) ? data.optimizerMaxDcCurrentOutput : '';
  data.optimizerMaxDcCurrentInput = !isEmpty(data.optimizerMaxDcCurrentInput) ? data.optimizerMaxDcCurrentInput : '';
 
 
  if (Validator.isEmpty(data.optimizerModel)) {
    errors.optimizerModel = 'optimizer Model field is required';
  }

  if (Validator.isEmpty(data.optimizerMaxDcVoltage)) {
    errors.optimizerMaxDcVoltage = 'optimizerMaxDcVoltage Output field is required';
  }
  if (Validator.isEmpty(data.optimizerMaxPowerOutput)) {
    errors.optimizerMaxPowerOutput = 'optimizerMaxPowerOutput put Voltage field is required';
  }
  if (Validator.isEmpty(data.optimizerMaxDcCurrentOutput)) {
    errors.optimizerMaxDcCurrentOutput = 'optimizerMaxDcCurrentOutput field is required';
  }
  if (Validator.isEmpty(data.optimizerMaxDcCurrentInput)) {
    errors.optimizerMaxDcCurrentInput = 'optimizerMaxDcCurrentInput field is required';
  }
    return {
    errors,
    isValid: isEmpty(errors)
  };

