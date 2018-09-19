const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Host = require('../models/host');

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
					message : 'Login failed'
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
		beds: req.body.beds_count,
		washroom: req.body.shared_washroom,
		kitchen: req.body.kitchen,
		guests: req.body.guests,
		room_type: req.body.room_type,
		owner: req.body.owner,
		map_coordinates:req.body.map_coordinates,
		about:req.body.about
	}).save(function(err1, host1){
       res.json({
       	status:'success',
       	message : 'Listing created successfully',
       	data : host1
       })
	})
})

router.use('/search_home',function(req, res){
	console.log('@@@@@@@@ search home @@@@@@@@@@@@')
	Host.find({ location: req.body.location },function(err, host){
		if(!err && host.length > 0){
			res.json({
               	status:'success',
               	message : 'Listings found',
               	data : host
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
	Host.findOne({ _id: req.body.id },function(err, host){
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

module.exports = router;