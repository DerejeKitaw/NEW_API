const express = require('express');
const router = express.Router();

// @route  GET api/optimizer/test
// @desc   Tests optimizer route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'optimizer Works'}));

module.exports = router;
