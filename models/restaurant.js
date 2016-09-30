var db = require('./_db');

var Sequelize = require('sequelize')


var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	// place: Place,
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER
	}
})

module.exports = Restaurant;