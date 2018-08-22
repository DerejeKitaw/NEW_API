const express = require('express');
const router = express.Router();

// @route  GET api/panel/test
// @desc   Tests panel route
// @access Public
router.get('/test', (req, res) =>res.json({ msg: 'panel Works'}));

module.exports = router;
