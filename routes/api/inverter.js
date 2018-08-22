const express = require('express');
const router = express.Router();

// @route  GET api/inverter/test
// @desc   Tests inverter route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'inverter Works'}));

module.exports = router;
