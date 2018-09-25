var table = $('#listings-table').DataTable();
$(document).ready(function(){
	$('#listings-table').DataTable();
})

function showImages(images) {
	console.log('images', JSON.parse(images))
	var images_arr = JSON.parse(images).images; 
	imgs_data = '';
	for (var i = 0; i < images_arr.length; i++) {
		imgs_data += "<p><img src="+ images_arr[i].url +" width='500px'></p>";
	}
	$("#modal_images_body").html(imgs_data);
	$("#images_modal").modal()
}

function approveListing(id) {
	$.ajax({
		url:'approve_listing',
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

function unapproveListing(id) {
	$.ajax({
		url:'unapprove_listing',
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