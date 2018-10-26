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

function openUnapprovalModal(listing_obj) {
	var listing = JSON.parse(listing_obj);
	$("#unapproval_reason").val('');
	$("#unapproval_modal").modal();
	$("#listing_id").val(listing._id);
	$("#user_id").val(listing.owner._id);
}

function unapprovalListing() {
	var listing_id = $("#listing_id").val();
	var user_id = $("#user_id").val();
	var reason = $("#unapproval_reason").val();

	$.ajax({
		url:'unapprove_listing',
		type:'post',
		data:{ listing_id: listing_id, user_id: user_id, reason: reason, type: 'unapprove_listing' },
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