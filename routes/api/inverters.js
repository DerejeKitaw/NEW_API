const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const validateInverterInput = require('../../validation/inverter');

// Load inverter Model
const inverter = require('../../models/inverter');
// Load User Model
const User = require('../../models/User');


// @route  GET api/inverters/test
// @desc   Tests inverter route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'inverter Works'}));


// @route  GET api/inverters/:id
// @desc   Get one inverter route
// @access private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) =>res.json({ msg: 'inverters /:id Works'}));


// @route  GET api/inverters/all
// @desc   Get all inverters route
// @access public
router.get('/all', (req, res) =>res.json({ msg: 'inverters /all Works'}));


// @route  POST api/inverters/create
// @desc   Create inverters route
// @access private
router.post('/create' , 
  passport.authenticate('jwt', { session: false }), (req, res) =>res.json({ msg: 'inverters /create Works'}));


// @route  POST api/inverters/:id
// @desc   Update/Create inverter route
// @access private
router.post('/:id' ,
  passport.authenticate('jwt', { session: false }) , (req, res) =>res.json({ msg: 'inverters create or update /:id Works'}));



// @route  POST api/inverters/:id
// @desc   Delete inverters route
// @access private
router.delete('/:id' ,
  passport.authenticate('jwt', { session: false }),  (req, res) =>res.json({ msg: 'inverters /delete/:id Works'}));


// @route  POST api/inverters/edit/:id
// @desc   Edit inverters route
// @access private
router.post('/edit/:id' ,
  passport.authenticate('jwt', { session: false }) , (req, res) =>res.json({ msg: 'inverters edit/:id Works'}));




module.exports = router;

