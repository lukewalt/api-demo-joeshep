
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', function(table){
    table.increments();
    table.string('name').notNullable().unique();
    table.string('network').notNullable();
    table.string('genre').notNullable();
    table.boolean('inProduction').notNullable();

  })
};

exports.down = function(knex, Promise) {

};
