const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const validateInverterInput = require('../../validation/inverter');

// Load inverter Model
const inverter = require('../../models/inverter');
// Load User Model
const User = require('../../models/User');


// @route  GET api/inverter/test
// @desc   Tests inverter route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'inverter Works'}));


// @route  GET api/inverter/all
// @desc   Get all inverters route
// @access public
router.get('/all', (req, res) =>res.json({ msg: 'inverter /all Works'}));


// @route  POST api/inverter/create
// @desc   Create inverter route
// @access private
router.post('/create' , 
  passport.authenticate('jwt', { session: false }), (req, res) =>res.json({ msg: 'inverter /create Works'}));


// @route  POST api/inverter/update:id
// @desc   Update inverter route
// @access private
router.post('/update/:id' ,
  passport.authenticate('jwt', { session: false }) , (req, res) =>res.json({ msg: 'inverter /update/:id Works'}));



// @route  POST api/inverter/delete:id
// @desc   Delete inverter route
// @access private
router.post('/delete/:id' ,
  passport.authenticate('jwt', { session: false }),  (req, res) =>res.json({ msg: 'inverter /delete/:id Works'}));


// @route  POST api/inverter/edit/:id
// @desc   Edit inverter route
// @access private
router.post('/edit/:id' ,
  passport.authenticate('jwt', { session: false }) , (req, res) =>res.json({ msg: 'inverter edit/:id Works'}));




module.exports = router;

