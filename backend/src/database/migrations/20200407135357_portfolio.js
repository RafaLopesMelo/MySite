
exports.up = function(knex) {
    return knex.schema.createTable('portfolio', function(table) {

        table.increments();

        table.date('date').notNullable();
        table.string('author').notNullable();

        table.string('illustration');
        table.string('images');

        table.string('title').notNullable();
        table.text('description').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('portfolio');
};
