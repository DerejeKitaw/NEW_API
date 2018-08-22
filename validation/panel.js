const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePanelInput(data) {
  let errors = {};

  data.panelManufacturer = !isEmpty(data.panelManufacturer) ? data.panelManufacturer : '';
  data.panelType = !isEmpty(data.panelType) ? data.panelType : '';
  data.power = !isEmpty(data.power) ? data.power : '';
  data.vmp = !isEmpty(data.vmp) ? data.vmp : '';
  data.imp = !isEmpty(data.imp) ? data.imp : '';
  data.vocTempCoef = !isEmpty(data.vocTempCoef) ? data.vocTempCoef : '';
  data.vmpTempCoef = !isEmpty(data.vmpTempCoef) ? data.vmpTempCoef : '';
  data.iscTempCoef = !isEmpty(data.iscTempCoef) ? data.iscTempCoef : '';
  data.maxSystemVoltage = !isEmpty(data.maxSystemVoltage) ? data.maxSystemVoltage : '';
 
 
  if (Validator.isEmpty(data.panelManufacturer)) {
    errors.panelManufacturer = 'panel Manufacturer field is required';
  }
  if (Validator.isEmpty(data.panelType)) {
    errors.panelType = 'panelType Output field is required';
  }
  if (Validator.isEmpty(data.power)) {
    errors.power = 'power put Voltage field is required';
  }
  if (Validator.isEmpty(data.vmp)) {
    errors.vmp = 'vmp field is required';
  }
  if (Validator.isEmpty(data.imp)) {
    errors.imp = 'Imp field is required';
  }
  if (Validator.isEmpty(data.vocTempCoef)) {
    errors.vocTempCoef = 'Start up Voltage field is required';
  }
  if (Validator.isEmpty(data.vmpTempCoef)) {
    errors.vmpTempCoef = 'vmpTempCoef field is required';
  }
  if (Validator.isEmpty(data.iscTempCoef)) {
    errors.iscTempCoef = 'iscTempCoef field is required';
  }
  if (Validator.isEmpty(data.maxSystemVoltage)) {
    errors.maxSystemVoltage = 'maxSystemVoltage field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
