var mongoose = require('mongoose');

/**
 * @swagger
 * definition:
 *   Company:
 *     properties:
 *       name:
 *         type: string
 *       address:
 *         type: string
 *       revenue:
 *         type: integer
 *       phone:
 *         type: string
 */
var companySchema = mongoose.Schema({
 	name: String,
 	address: String,
 	revenue: Number,
 	phone: String
 });

module.exports = companySchema;
