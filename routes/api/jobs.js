const express = require('express');
const router = express.Router();

// @route  GET api/job/test
// @desc   Tests job route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'job Works'}));

module.exports = router;
