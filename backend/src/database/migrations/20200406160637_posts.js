
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){

        table.increments();

        table.date('date').notNullable();

        table.string('author').notNullable();

        table.binary('illustration');
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.string('content').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
