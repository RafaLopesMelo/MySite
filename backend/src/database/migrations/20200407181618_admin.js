
exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table) {

        table.string('user').notNullable();
        table.string('password').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
