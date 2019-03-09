exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();

		tbl.string('firstName', 255).notNullable();
		tbl.string('lastName', 255).notNullable();
		tbl
			.string('email', 255)
			.notNullable()
			.unique();
		tbl.string('password', 255).notNullable();
		tbl.string('ocupation', 255);
		tbl.string('experience', 255);
		tbl.string('interests', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
