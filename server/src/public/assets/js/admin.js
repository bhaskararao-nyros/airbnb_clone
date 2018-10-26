$(document).ready(function(){

	$("#username").focus(function() {
		$(this).attr('placeholder', "");
		$("#nametext").removeClass('hide');
	});
	$("#password").focus(function() {
		$(this).attr('placeholder', "");
		$("#passtext").removeClass('hide');
	});
	$("#username").blur(function() {
		$(this).attr('placeholder', "Enter username");
		$("#nametext").addClass('hide');
	});
	$("#password").blur(function() {
		$(this).attr('placeholder', "Enter password");
		$("#passtext").addClass('hide');
	});

	$("#login_btn").click(function() {
		name = $("#username").val();
		password = $("#password").val();

		if(name == "") {
			$("#nameErr").html('<p>*Username required</p>');
		} else {
			$("#nameErr").html('');
		}
		if(password == "") {
			$("#passErr").html('<p>*Password required</p>');
		} else {
			$("#passErr").html('');
		}

		if (name != '' && password != '') {
			var data = { username: name, password: password };
			$.ajax({
				url:'admin_login',
				type:'post',
				data:data,
				dataType:'json',
				success: function (res) {
					console.log('response', res);
					if (res.status == "success") {
						window.location.href = "/admin";
					}
				},
				error: function (err) {
					console.log('error', err);
				}
			})
		}
		return false;
		
	});

});