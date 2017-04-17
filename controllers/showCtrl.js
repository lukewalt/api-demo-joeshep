"use strict;"

const { bookshelf } = require('../db/database')

const Show = require('../models/showMd');

module.exports.getShows = (req, res, next) => {
  Show.getAll()
  .then( (shows) => {
    res.status(200).json(shows)
  })
  .catch((err) => {
    return err
  })
};
