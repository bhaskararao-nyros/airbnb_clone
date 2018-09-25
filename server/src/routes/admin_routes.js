const express = require('express');
const admin = express.Router();
const store = require('store');

const User = require('../models/user');
const Host = require('../models/host');

admin.use('/admin', isLogin, dashboard);
admin.use('/users', isLogin, getUsers);
admin.use('/listings', isLogin, getListings);
admin.use('/approve_listing', isLogin, approveListing);
admin.use('/unapprove_listing', isLogin, unapproveListing);

admin.use('/admin_login', function (req, res) {
	let username = req.body.username, password = req.body.password;
	if (username == "admin" && password == "admin") {
		store.set('user', { name:'admin' })
		res.json({
           	status:'success',
           	message : 'Login successfull'
        })
	}
});

function isLogin(req, res, next) {
	let session = store.get('user');
	if (session != undefined) {
		return next();
	}
	if(session == undefined) {
		res.render('login');
	}
}

function dashboard(req, res) {
	User.find({}, function (err, users) {
		Host.find({}, function (err1, listings) {
			let approved_listings = [];
			let unapproved_listings = [];
			if (!err && listings.length > 0) {
				for (var i = 0; i < listings.length; i++) {
					if (listings[i].approved == 0) {
						unapproved_listings.push(listings[i]);
					}
					if (listings[i].approved == 1) {
						approved_listings.push(listings[i]);
					}
				}
			res.render('index', { users_count: users.length, listings_count: listings.length, approved_listings: approved_listings, unapproved_listings: unapproved_listings });
			}
		});
	});
}

function getUsers(req, res) {
	User.find({}, function (err, users) {
		if (!err && users != null) {
			res.render('users', { user: users });
		}
	})
}

function getListings(req, res) {
	Host.find({}).populate('owner').exec(function (err, listings) {
		if (!err && listings != null) {
			res.render('listings', { listing: listings });
		}
	})
}

function approveListing(req, res) {
	Host.findOneAndUpdate({ _id: req.body.id }, {$set:{ approved: 1 }}, {new: true}, function(err, listing){
	    if (!err) {
	    	console.log('listing@@@@@@@@@@', listing)
	    	res.json({
	           	status:'success',
	           	message : 'Listings approved'
	        })
	    }
	})
}

function unapproveListing(req, res) {
	Host.findOneAndUpdate({ _id: req.body.id }, {$set:{ approved: 0 }}, {new: true}, function(err, listing){
	    if (!err) {
	    	console.log('listing@@@@@@@@@@@@@', listing)
	    	res.json({
	           	status:'success',
	           	message : 'Listings unapproved'
	        })
	    }
	})
}


module.exports = admin;