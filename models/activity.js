var db = require('./_db');

var Sequelize = require('sequelize')


var Activity = db.define('activity', {
	name:{
		type: Sequelize.STRING
	},
	// place: Place,
	age_range: {
		type: Sequelize.STRING
	}
})

module.exports = Activity;
