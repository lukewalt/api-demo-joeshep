'use strict';

const { bookshelf } = require('../db/database');
const Show = require('../models/showMd');

module.exports.getShows = (req, res, next) => {
  Show.getAll()
  .then( (shows) => {
    res.status(200).json(shows);
  })
  .catch( (error) => {
    next(error);
  });
};


module.exports.addShow = ({body}, res, next) => {
    Show.forge(body)
    .save()
    .then(() => res.status(200).json({"msg": "Nice POST"}))
    .catch((err) => {
      next(err)
    })

};

module.exports.deleteShow = ({body}, res, next) => {
    Show.forge({id})
    .destroy()
    .then(() => res.status(200).json(show))
    .catch((err) => {
      next(err)
    })
};

module.exports.getShow = ({params: {id}}, res, next) => {
  Show.getSingleShow(id)
  .then( (show) => {
    res.status(200).json(show)
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getShowFaves = ({query: {showId}}, res, next) => {
  console.log("The query string", showId);
  Show.forge({id: showId})
  .fetch({withRelated: ['upvotes'], require: true})
  .then( (faves) => {
    res.status(200).json(faves)
  })
  .catch( (err) => {
    next(err);
  });
};
