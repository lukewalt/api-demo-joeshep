"use strict";

const { Router } = require('express');
const router = Router();
// pull method from Show model
const { getShows, getShowFaves, getShow, addShow, deleteShow } = require('../controllers/showCtrl');

router.get('/shows', getShows)
router.get('/shows/favorites', getShowFaves)
router.get('/shows/:id', getShow);
router.post('/shows/:id', addShow)
router.delete('/shows/:id', deleteShow)

module.exports = router;
