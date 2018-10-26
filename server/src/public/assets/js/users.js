function deleteUser(id) {
	if (confirm('Are you sure want to delete this user ?')) {
		$.ajax({
			url:'delete_user',
			type:'post',
			data:{ id: id },
			dataType:'json',
			success: function (res) {
				console.log('response', res);
				if (res.status == "success") {
					window.location.reload();
				}
			},
			error: function (err) {
				console.log('error', err);
			}
		})
	}
}