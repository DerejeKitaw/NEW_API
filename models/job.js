const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  equipment: {
    inverter: {
      type: Schema.Types.ObjectId,
      ref: "inverters"
    },
    panel: {
      type: Schema.Types.ObjectId,
      ref: "panels"
    },
    optimizer: {
      type: Schema.Types.ObjectId,
      ref: "optimizers"
    }
  },
  jobNumber: {
    type: String,
    required: true,
    max: 40
  },
  customerName: {
    type: String
  },
  address: {
    city: String,
    street: String,
    houseNumber: String,
    state: String
  },
  jobDate: {
    type: Date
  },
  status: {
    type: String,
    required: true
  },
  preparedBy: {
    type: [String],
    required: true
  },

  siteAssesment: {
    mainPanel: {
      Size: {
        type: String,
        required: true
      },
      SpaceAvailable: {
        type: String,
        required: true
      },
      breakerType: {
        type: String,
        required: true
      },
      brand: {
        type: String,
        required: true
      },
      volt: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    isGeneratorExist: {
      type: String,
      required: true
    },
    partialHouseGenerator: {
      type: Boolean,
      default: false
    },
    partialHouseGeneratorFuse: {
      type: String
    },
    undergroundCunduitLength: {
      type: String
    },
    unFusedAcDisconectAdditional: {
      type: String
    },
    fusedAcDisconect: {
      type: String
    },
    fusedAcDisconectFuse: {
      type: String
    },
    interconnection: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);
