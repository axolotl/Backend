module.exports = { generateToken };
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

// ================================ Generate Token
function generateToken(user) {
	const payload = {
		subject: user.id,
		email: user.email,
	};
	const options = {
		expiresIn: '5d',
	};
	return jwt.sign(payload, secret, options);
}
