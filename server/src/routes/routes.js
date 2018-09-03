const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.use('/signup',function(req, res){
	console.log('|||||||| airbnb login |||||||||||', req.body)
	User.findOne({email: req.body.email},function(err, user){
		if(!err && user == null){
			new User({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
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
				message : 'User already exists',	
				data : user
			})
		}
	})
});



module.exports = router;