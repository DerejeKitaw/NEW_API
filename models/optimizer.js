const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OptimizerSchema = new Schema({
  optimizerModel: {
    type: String,
    required: true
  },
  optimizerMaxDcVoltage: {
    type: String,
    required: true
  },
  optimizerMaxPowerOutput: {
    type: String,
    required: true
  },
  optimizerMaxDcCurrentOutput: {
    type: String,
    required: true
  },
  optimizerMaxDcCurrentInput: {
    type: String,
    required: true
  },
   date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Optimizer = mongoose.model("optimizers", OptimizerSchema);
