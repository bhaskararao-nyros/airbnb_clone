const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Host = require('../models/host');
const Chat = require('../models/chat');

router.use('/signup',function(req, res){
	console.log('|||||||| Signup |||||||||||')
	User.findOne({email: req.body.email},function(err, user){
		if(!err && user == null){
			new User({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				password: req.body.password,
				email: req.body.email,
				profile_pic: req.body.profile_pic,
				login_type: req.body.login_type,
			}).save(function(err1, user1){
               res.json({
               	status:'success',
               	message : 'Signup successfull',
               	data : user1
               })
			})
		} else {
			res.json({
				status:'fail',
				message : 'User with this email exists',	
				data : user
			})
		}
	})
});

router.use('/check_custom_signup_email',function(req, res){
	console.log('|||||||| checking email |||||||||||')
	User.findOne({email: req.body.email},function(err, user){
		if(!err && user == null){
			res.json({
				status:'success'
			})
		} else {
			res.json({
				status:'fail',
				message : 'User with this email already exists'
			})
		}
	});
})

router.use('/login',function(req, res){
	console.log('||||||||||| Login |||||||||||||', req.body)
	if (req.body.login_type == 'facebook' || req.body.login_type == 'google') {
		User.findOne({email: req.body.email},function(err, user){
			if(!err && user != null){
	            res.json({
		           	status:'success',
		           	message : 'Signin successfull',
		           	data : user
	            })
			} else {
				res.json({
					status:'fail',
					message : 'Email not registered'
				})
			}
		})
	}
	if (req.body.login_type == 'custom') {
		User.findOne({email: req.body.email},function(err, user){
			console.log('user', user)
			if(!err && user != null){
				if (user.login_type == 'custom') {
					User.findOne({ email: req.body.email, password: req.body.password },function(err1, user1){
			            if(!err1 && user1 != null){
				            res.json({
					           	status:'success',
					           	message : 'Signin successfull',
					           	data : user
				            })
				        } else {
				        	res.json({
								status:'fail',
								message : 'Invalid password'
							})
				        }
			        })
				}
				if (user.login_type == 'google') {
					res.json({
						status:'fail',
						message : 'This email registered using google'
					})
				}
				if (user.login_type == 'facebook') {
					res.json({
						status:'fail',
						message : 'This email registered using facebook'
					})
				}
					
			} else {
				res.json({
					status:'fail',
					message : 'Invalid email'
				})
			}
		})
	}
});

router.use('/becomehost',function(req, res){
	console.log('@@@@@@@@ becomehost @@@@@@@@@@@@')
	new Host({
		location: req.body.location,
		images: req.body.images,
		price: req.body.total_price,
		bed_rooms: req.body.bedrooms,
		bath_rooms: req.body.bathrooms,
		guests: req.body.guests,
		host_type: req.body.host_type,
		owner: req.body.owner,
		map_coordinates: req.body.map_coordinates,
		about: req.body.about,
		amentities: req.body.amentities,
		safety_amentities: req.body.safety_amentities,
		allowed_spaces: req.body.allowed_spaces,
		rules: req.body.rules,
		name: req.body.name
	}).save(function(err1, host1){
       res.json({
       	status:'success',
       	message : 'Listing created successfully',
       	data : host1
       })
	})
})

router.use('/search_home',function(req, res){
	console.log('@@@@@@@@ search home @@@@@@@@@@@@', req.body)
	Host.find({ location: req.body.location },function(err, host){
		if(!err && host.length > 0){
			let approved_listings = [];
			for (var i = 0; i < host.length; i++) {
				if (host[i].approved === 1) {
					approved_listings.push(host[i])
				}
			}
			console.log(approved_listings)
			res.json({
               	status:'success',
               	message : 'Listings found',
               	data : approved_listings
            })
            
		} else {
			res.json({
				status:'fail',
				message : 'No listings found in this location'
			})
		}
	

	})
})

router.use('/get_single_home',function(req, res){
	console.log('@@@@@@@@ get single home @@@@@@@@@@@@')
	Host.findOne({ _id: req.body.id }).populate('owner').populate('review_rating.user_id').exec(function (err, host) {
		if(!err && host != null){
			res.json({
               	status:'success',
               	message : 'Host details retrived',
               	data : host
            })
		} else {
			res.json({
				status:'fail',
				message : 'Failed to retrive host'
			})
		}
	})
})

router.use('/update_user',function(req, res){
	console.log('@@@@@@@@ update user @@@@@@@@@@@@')
	User.update({ _id: req.body._id }, req.body, function(err, user) {
		if(!err && user.nModified == 1) {
			User.findOne({ _id: req.body._id },function(err1, user1){
				if(!err1 && user1 != null) {
					res.json({
		               	status:'success',
		               	message : 'User details updated',
		               	data : user1
		            })
				} else {
					res.json({
						status:'fail',
						message : 'Failed to update user'
					})
				}
			})
		} else {
			res.json({
				status:'fail',
				message : 'Email registered by another user'
			})
		}
	})
})

router.use('/get_user_listings',function(req, res){
	console.log('@@@@@@@@ get user listings @@@@@@@@@@@@')
	Host.find({ owner: req.body.id },function(err, listings){
		if(!err && listings.length > 0) {
			res.json({
               	status:'success',
               	message : 'Listings found',
               	data : listings
            })
            
		} else {
			res.json({
				status:'fail',
				message : 'No listings found for this user'
			})
		}
	})
})

router.use('/update_user_listing',function(req, res){
	console.log('||||||||||| update user listings ||||||||||||')
	Host.update({ _id: req.body.id }, req.body, function(err, host) {
		if(!err && host.nModified == 1) {
			res.json({
               	status:'success',
               	message : 'Host updated successfully'
            })
		} else {
			res.json({
				status:'fail',
				message : 'Host updation failed'
			})
		}
	})
})

router.use('/save_user_rating',function(req, res){
	console.log('||||||||||| save user rating ||||||||||||')
	Host.findOne({ _id: req.body.host_id }, function(err, host) {
		let rating_arr = host.review_rating;
		rating_arr.push(req.body);
		Host.update({ _id: req.body.host_id }, { review_rating: rating_arr }, function(err1, host1) {
			if(!err1 && host1.nModified == 1) {
				res.json({
	               	status:'success',
	               	message : 'Review successful'
	            })
			} else {
				res.json({
					status:'fail',
					message : 'Review failed'
				})
			}
		})
	})
})

router.use('/get_all_listings',function(req, res){
	console.log('@@@@@@@@ get all listings @@@@@@@@@@@@')
	Host.find({},function(err, host){
		if(!err && host.length > 0){
			let approved_listings = [];
			for (var i = 0; i < host.length; i++) {
				if (host[i].approved === 1) {
					approved_listings.push(host[i])
				}
			}
			res.json({
               	status:'success',
               	message : 'Listings found',
               	data : approved_listings
            })
		} else {
			res.json({
				status:'fail',
				message : 'No listings found'
			})
		}
	

	})
})

router.use('/get_all_users',function(req, res){
	User.find({}, function (err, users) {
		if (!err && users != null) {
			res.json({
               	status:'success',
               	message : 'Users fetched',
               	data : users
            })
		} else {
			res.json({
				status:'fail',
				message : 'No users found'
			})
		}
	})
})

router.use('/get_solo_chat',function(req, res){
	Chat.find({ user_id: req.body.user_id, receiver_id: req.body.receiver_id }, function (err, chat) {
		if (!err && chat != null) {
			res.json({
               	status:'success',
               	message : 'Chat fetched',
               	data : chat
            })
		} else {
			res.json({
				status:'fail',
				message : 'No chat found'
			})
		}
	})
})

module.exports = router;