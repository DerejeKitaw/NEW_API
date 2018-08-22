const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PanelSchema = new Schema({
  panelManufacturer: {
    type: String,
    required: true
  },
  panelType: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  vmp: {
    type: String,
    required: true
  },
  imp: {
    type: String,
    required: true
  },
  vocTempCoef: {
    type: String,
    required: true
  },
  vmpTempCoef: {
    type: String,
    required: true
  },
  iscTempCoef: {
    type: String,
    required: true
  },
   maxSystemVoltage: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Panel = mongoose.model('panels', PanelSchema);
