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
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  address: {
    city: String,
    street: String,
    houseNumber: String,
    state: String
  },
  preparedBy: {
    type: String,
    required: true
  },
  jobInformation: {
    jobDate: {
      type: Date
    },
    status: {
      type: String,
      required: true
    },
    filter: {
      type: String
    },
  },
  electrical: {
    undergroundCunduitLength: {
      type: String,
      required: true
    },
    unFusedAcDisconectAdditional: {
      type: String,
      required: true
    },
    fusedAcDisconect: {
      type: String,
      required: true
    },
    fusedAcDisconectFuse: {
      type: String,
      required: true
    },
    interconnection: {
      type: String,
      required: true
    }
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
    generator: {
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
      }
    }
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);
