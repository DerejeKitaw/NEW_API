const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const validateInverterInput = require('../../validation/inverter');

// Load inverter Model
const Inverter = require('../../models/inverter');
// Load User Model
const User = require('../../models/User');

// @route  GET api/inverters/test
// @desc   Tests inverter route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'inverter Works' }));

// @route  GET api/inverters/
// @desc   Get All inverter route
// @access public
router.get('/', (req, res) => {
  const errors = {};
  Inverter.find()
    .then(inverters => res.json(inverters))
    .catch(errors =>
      res.status(404).json({ noInverterFound: ' No inverter found' })
    );
});

// @route  GET api/inverters/:id
// @desc   Get one inverter route
// @access public
router.get('/:id', (req, res) => {
  const errors = {};

  Inverter.findOne({ _id: req.params.id })
    .then(inverter => {
      if (!inverter) {
        // res.json({ msg: `getting ${inverter}` })
        error.noInverter = 'There is no saved inverter';
        res.status(404).json(errors);
      }
      res.json(inverter);
    })
    .catch(errors => res.status(404).json({ inverter: 'The is no inverter' }));
});

// @route  POST api/inverters
// @desc   update(IfExist)/Create(IfNotExist) inverter route
// @access private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateInverterInput(req.body);
    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get inverter fields
    const inverterFields = {};
    if (req.body.inverterManufacturer)
      inverterFields.inverterManufacturer = req.body.inverterManufacturer;
    if (req.body.inverterType)
      inverterFields.inverterType = req.body.inverterType;
    if (req.body.maxDcVoltage)
      inverterFields.maxDcVoltage = req.body.maxDcVoltage;
    if (req.body.nominalDcInputVoltage)
      inverterFields.nominalDcInputVoltage = req.body.nominalDcInputVoltage;
    if (req.body.maxPowerOutput)
      inverterFields.maxPowerOutput = req.body.maxPowerOutput;
    if (req.body.acOutputVoltage)
      inverterFields.acOutputVoltage = req.body.acOutputVoltage;
    if (req.body.maxAcCurrentOutput)
      inverterFields.maxAcCurrentOutput = req.body.maxAcCurrentOutput;
    if (req.body.startupVoltage)
      inverterFields.startupVoltage = req.body.startupVoltage;
    if (req.body.cec) inverterFields.cec = req.body.cec;
    Inverter.findOne({
      $and: [
        { inverterType: req.body.inverterType },
        { inverterManufacturer: req.body.inverterManufacturer }
      ]
    }).then(inverterType => {
      if (inverterType) {
        // Update
        Inverter.findOneAndUpdate(
          { inverterType: req.body.inverterType },
          { $set: inverterFields },
          { new: true }
        ).then(inverter => res.json(inverter));
      } else {
      }
    });
    // Create
    const newInverter = new Inverter(inverterFields);
    newInverter.save().then(inverter => res.json(inverter));

    // res.json({ msg: 'inverters create or update  Works' });
  }
);

// @route  POST api/inverters/:id
// @desc   Delete inverters route
// @access private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Inverter.findOne({ _id: req.params.id })
      .then(inverter => {
        inverter.remove().then(() => res.json({ success: true }));
      })
      .catch(errors => res.status(404).json({ inverterNotFound: 'Inverter not found' }));
  });


module.exports = router;
