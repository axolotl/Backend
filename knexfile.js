const localPgConnection = {
	host: 'localhost',
	database: 'hobbits',
	user: 'student',
	password: 'pass'
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './dev.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	production: {
		client: 'postgresql',
		connection: prodDbConnection,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};