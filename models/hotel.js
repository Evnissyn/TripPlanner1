var db = require('./_db');

var Sequelize = require('sequelize')


var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	// place: Place,
	num_stars: {
		type: Sequelize.INTEGER
	},
	amenities: {
		type: Sequelize.STRING
	}
})

module.exports = Hotel;