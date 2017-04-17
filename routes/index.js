"use strict;"

const { Router } = require('express');
const router = Router();
// pull method from Show model
const { getShows } = require('../controllers/showCtrl');

router.get('/shows', getShows)


module.exports = router;
