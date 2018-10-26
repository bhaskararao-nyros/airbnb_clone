const express = require('express');
const admin = express.Router();
const store = require('store');

const User = require('../models/user');
const Host = require('../models/host');
const Notification = require('../models/notifications');

admin.use('/admin', isLogin, dashboard);
admin.use('/users', isLogin, getUsers);
admin.use('/listings', isLogin, getListings);
admin.use('/approve_listing', isLogin, approveListing);
admin.use('/unapprove_listing', isLogin, unapproveListing);
admin.use('/delete_user', isLogin, deleteUser);
admin.get('/listing_in_detail/:id', isLogin, getSingleListing);

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
	console.log('************* session', session)
	if (session != undefined) {
		return next();
	} else {
		console.log('************** session is undefined')
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
	console.log('*********** approve listing');
	Host.update({ _id: req.body.id }, { approved: 1 }, function(err, listing){
	    if (!err) {
	    	res.json({
	           	status:'success',
	           	message : 'Listings approved'
	        })
	    }
	})
}

function unapproveListing(req, res) {
	console.log('************ unapprove listing');
	Host.update({ _id: req.body.listing_id }, { approved: 0 }, function(err, listing){
	    if (!err) {
	    	res.json({
	           	status:'success',
	           	message : 'Listings unapproved'
	        })
	    }
	})

	sendNotification(req.body);
}

function deleteUser(req, res) {
	User.remove({ _id: req.body.id }, function(err, user){
	    if (!err) {
	    	res.json({
	           	status:'success',
	           	message : 'User deleted'
	        })
	    }
	})
}

function getSingleListing(req, res) {
	Host.findOne({ _id: req.params.id }).populate('owner').exec(function (err, listing) {
		if (!err && listing != null) {
			res.render('listing_in_detail_page', { listing: listing });
		}
	})
}

function sendNotification(obj) {
	new Notification({
		listing_id: obj.listing_id,
		user_id: obj.user_id,
		reason: obj.reason,
		type: obj.type,
	}).save();
}


module.exports = admin;