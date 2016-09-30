var db = require('./_db');

var Sequelize = require('sequelize')

// define models, make associations, etc.

// var Place = db.define('place', {
// 	address: {
// 		type: Sequelize.STRING
// 	},
// 	city: {
// 		type: Sequelize.STRING	
// 	},
// 	state: {
// 		type: Sequelize.STRING
// 	},
// 	phone: {
// 		type: Sequelize.STRING
// 	},
// 	location: {
// 		type: Sequelize.ARRAY(Sequelize.FLOAT)
// 	}
// })

// var Hotel = db.define('hotel', {
// 	name: {
// 		type: Sequelize.STRING
// 	},
// 	// place: Place,
// 	num_stars: {
// 		type: Sequelize.INTEGER
// 	},
// 	amenities: {
// 		type: Sequelize.STRING
// 	}
// })

// var Activity = db.define('activity', {
// 	name:{
// 		type: Sequelize.STRING
// 	},
// 	// place: Place,
// 	age_range: {
// 		type: Sequelize.STRING
// 	}
// })

// var Restaurant = db.define('restaurant', {
// 	name: {
// 		type: Sequelize.STRING
// 	},
// 	// place: Place,
// 	cuisine: {
// 		type: Sequelize.STRING
// 	},
// 	price: {
// 		type: Sequelize.INTEGER
// 	}
// })

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
// module.exports = {
// 	Place,
// 	Hotel,
// 	Activity,
// 	Restaurant
// }