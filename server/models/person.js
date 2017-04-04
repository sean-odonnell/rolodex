var mongoose = require('mongoose');

/**
 * @swagger
 * definition:
 *   Person:
 *     properties:
 *       name:
 *         type: string
 *       companyId:
 *         type: string
 *       email:
 *         type: string
 */
var personSchema = mongoose.Schema({
	name: String,
	companyId: String,
	email: String
});

module.exports = personSchema;
