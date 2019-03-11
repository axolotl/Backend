const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	// registerUser,
	// loginUser,
	getAllCompanies,
	getCompanyInfo,
	getUserById,
	updateUser,
	deleteUser,
};

// function registerUser(user) {
// 	user.userRole = user.userRole.toLowerCase();
// 	return db('users').insert(user);
// }

// function loginUser(user) {
// 	return db('users')
// 		.where({ username: user.userName })
// 		.first();
// }

function getAllCompanies() {
	return db('companies').select('id', 'companyName', 'email', 'bio', 'address');
}

function getCompanyInfo(user) {
	return db('companies')
		.where('email', user.email)
		.select('id', 'companyName', 'email', 'bio', 'address')
		.first();
}
function getUserById(id) {
	return db('companies')
		.where('id', id)
		.select('id', 'companyName', 'email', 'bio', 'address')
		.first();
}

function updateUser(user, updateInfo) {
	console.log(updateInfo);
	return db('companies')
		.where('email', user.email)
		.update(updateInfo);
}

function deleteUser(user) {
	console.log('delete', user.email);
	const userDelete = db('companies')
		.where('email', user.email)
		.del();
	return user.email;
}
