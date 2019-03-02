
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('username')
            .notNullable()
            .unique('uq_username');

        tbl
            .string('password')
            .notNullable();

        tbl
            .string('first_name')
            .notNullable();

        tbl
            .string('last_name')
            .notNullable();

        tbl
            .timestamp('created_at')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
