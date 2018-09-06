const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.use('/signup',function(req, res){
	console.log('|||||||| Signup |||||||||||', req.body)
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
			if(!err && user != null){
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
			} else {
				res.json({
					status:'fail',
					message : 'Invalid email'
				})
			}
		})
	}
});

module.exports = router;