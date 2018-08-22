const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateJobInput(data) {
  let errors = {};

  data.jobNumber = !isEmpty(data.jobNumber) ? data.jobNumber : '';
  data.customerName = !isEmpty(data.customerName) ? data.customerName : '';
 
  if (Validator.isEmpty(data.jobNumber)) {
    errors.jobNumber = 'Job Number field is required';
  }

  if (Validator.isEmpty(data.customerName)) {
    errors.customerName = 'Customer Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
