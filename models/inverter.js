const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InverterSchema = new Schema({
  inverterManufacturer: {
    type: String,
    required: true
  },
  inverterType: {
    type: String,
    required: true
  },
  maxPowerOutput: {
    type: String,
    required: true
  },
  acOutputVoltage: {
    type: String,
    required: true
  },
  maxAcCurrentOutput: {
    type: String,
    required: true
  },
  maxDcVoltage: {
    type: String,
    required: true
  },
  startupVoltage: {
    type: String,
    required: true
  },
  cec: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Inverter = mongoose.model('inverters', InverterSchema);
