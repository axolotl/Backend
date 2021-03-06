const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	createJob,
	getAllJobs,
	getJobById,
	updateJob,
	deleteJob,
	saveJob,
	removeJob,
};

async function createJob(jobPost) {
	try {
		const result = await db('jobPosting').insert(jobPost);

		return 1;
	} catch (error) {
		return error;
	}
}
function getAllJobs() {
	return db('jobPosting');
}

function getJobById(id) {
	return db('jobPosting')
		.where('id', id)
		.first();
}

function updateJob(id, updateInfo) {
	return db('jobPosting')
		.where('id', id)
		.update(updateInfo);
}

async function deleteJob(id) {
	try {
		const saves = await db('userJobSaves').where('job_id', id);
		const job = await db('jobPosting').where('id', id);
		if (saves.length > 0 || job.length > 0) {
			const saves = await db('userJobSaves')
				.where('job_id', id)
				.del();
			const deleteJob = await db('jobPosting')
				.where('id', id)
				.del();

			return 1;
		} else {
			return 1;
		}
	} catch (error) {
		return error;
	}
}

async function saveJob(userId, jobId) {
	const job = await db('jobPosting')
		.where('id', jobId)
		.first();
	console.log('job', job);
	return db('userJobSaves').insert({
		user_id: userId,
		job_id: jobId,
		company_id: job.company_id,
	});
}
async function removeJob(userId, jobId) {
	try {
		await db('userJobSaves')
			.where({ user_id: userId, job_id: jobId, company_id: job.company_id })
			.del();

		await db('jobPosting')
			.where('id', id)
			.del();
	} catch (error) {
		res.status(500).json(error);
	}
}
