"use strict;"

const bookshelf = require('../db/database');

const Favorite = bookshelf.Model.extend({
    tableName: 'favorites',
    show: function(){ return this.belongsTo(Show)}
  }, {
  getAll: function() {
    console.log('Get all called from Favorite model');
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch((err) => {
      return err
    })
  }

})


module.exports = bookshelf.model('Favorite', Favorite);
