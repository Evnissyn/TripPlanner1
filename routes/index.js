
var express = require('express');
var router = express.Router();

var Models = require('../models');

var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


module.exports = router;

router.get('/', function(req, res, next) {
	var hotel_list = Hotel.findAll();
	var restaurant_list = Restaurant.findAll();
	var activity_list = Activity.findAll();

	Promise.all([hotel_list, restaurant_list, activity_list])
	.then(function(list_of_lists){
		// console.log(lists[0]);
		res.render('index', {hotel_list: list_of_lists[0], 
							restaurant_list: list_of_lists[1], 
							activity_list: list_of_lists[2]});
	})
})

