"use strict;"

const { Router } = require('express');

const router = Router();

router.get('/shows', (req, res, next) => {
  // sending back to the client directly
  res.status(200)
})
