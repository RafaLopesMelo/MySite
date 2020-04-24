
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){

        table.increments('id');

        table.string('date').notNullable();
        table.string('author').notNullable();
        table.string('category').notNullable();

        table.varchar('illustration');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.text('content').notNullable();
        

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
