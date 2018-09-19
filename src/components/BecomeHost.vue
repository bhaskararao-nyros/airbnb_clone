<template>
<div class="becomehost_div">
<div class="head_component">
	<HeaderComponent ref="headerComp" />
</div>
  	<div class="becomehost_blk" v-if="becomehost_block">
  		<b-row>
	        <b-col>
	        	<div class="fillout_blk_left">
		  			<p>HOST ON FLYHOME</p>
		  			<h1>Earn money as an Flyhome host</h1>
		  		</div>
	  		</b-col>
  			<b-col>
  				<div class="fillout_blk">
  					<p class="fillout_title">Find out what top hosts earn in your area</p>
		  			<input type="text" name="search" id="fillout_location" class="fillout_search"  @focus="filloutSearch" ref="fillout_search"><br>
		  			<select class="fillout_select" @change="changeGuests" v-model="guest_count">
		  				<option v-for="guest in guests" :value="guest">{{ guest }} Guests</option>
		  			</select><br>
		  			<select id="rooms_select" class="fillout_select" @change="changeRooms" v-model="room_price">
		  				<option v-for="room in rooms" :value="room.price">{{ room.name }}</option>
		  			</select><br>
		  			<p class="price_tag">&#x20B9;{{ total_price }}</p>
		  			<b-button class="fillout_btn" variant="primary" @click="submitFillout">get started</b-button>
  				</div>
  			</b-col>
	    </b-row>
  	</div>
  	<div class="becomehost_fillout" v-if="!becomehost_block">
  		<div class="alert_blk">
  			<b-alert variant="danger"
             	dismissible
             	:show="showDismissibleAlert"
             	@dismissed="showDismissibleAlert=false">
	      		Listing created successfully
	    	</b-alert>
  		</div>
  		<h3 class="text-center list_heading">Listing Creation</h3>
  		<b-row>
	        <b-col>
	        	<span class="bg-color">Choose number of beds :</span> 
	        	<p class="ml-3"><b-button variant="outline-primary" @click="decreBeds" class="beds_btns">-</b-button> - {{ beds_count }} - <b-button variant="outline-primary" @click="increBeds" class="beds_btns">+</b-button></p>

	        	<div class="kitchen_blk">
	        		<b-form-group label="Is kitchen available ?">
	        			<b-form-radio-group v-model="kitchen" name="kitchen" class="ml-3">
					     	<b-form-radio value="yes">Yes</b-form-radio>
					        <b-form-radio value="no">No</b-form-radio>
				        </b-form-radio-group>
				    </b-form-group>
		        	<div v-if="kitchen === 'yes'">
		        		<b-form-group label="Is it shared kitchen ?">
		        			<b-form-radio-group v-model="shared_kitchen" name="shared_kitchen" class="ml-3">
						     	<b-form-radio value="yes">Yes</b-form-radio>
						        <b-form-radio value="no">No</b-form-radio>
					        </b-form-radio-group>
					    </b-form-group>
		        	</div>
	        	</div>
	        	<div class="washroom_blk">
	        		<b-form-group label="Shared washroom ?">
	        			<b-form-radio-group v-model="shared_washroom" name="shared_washroom" class="ml-3">
					     	<b-form-radio value="yes">Yes</b-form-radio>
					        <b-form-radio value="no">No</b-form-radio>
				        </b-form-radio-group>
				    </b-form-group>
	        	</div>
	        	<div>
	        		Upload some property images :
	        		<input
		                type="file"
		                style="display: none"
		                ref="image"
		                accept="image/*"
		                @change="onFilePicked"
		                multiple
		            ><br>
		            <b-button size="sm" class="upload_image_btn ml-3" variant="outline-primary" @click="uploadImages">Upload Images</b-button>
		            <p class="text-danger" v-if="images_err">Property images required</p>
	        	</div>
	        	<div class="property_desc">
	        		Property description :
	        		<b-form-textarea
                     	v-model="property_desc"
                     	placeholder="Enter something about property"
                     	:rows="3"
                     	class="desc_textarea"
                     	:max-rows="6">
    				</b-form-textarea>
    				<p class="text-danger" v-if="description_err">Property description required</p>
	        	</div>
	        </b-col>
	        <b-col class="fillout_right_blk">
	        	<div class="guests_blk">
		        	<div v-if="guest_count <= 4">
		        		<span>Number of guests allowed : </span>
		        		<span v-for="n in guest_count" :key="n">
		        			<img src="../assets/img/guest.jpg" class="guest_img">
		        		</span>
		        			
		        	</div>
		        	<div v-if="guest_count > 4">
		        		Number of guests allowed : 
		        		<span v-for="n in guest_count" v-if="n <= 3" :key="n">
		        			<img src="../assets/img/guest.jpg" class="guest_img">
		        		</span>... + {{ guest_count }}
		        	</div>
		        </div>
	        	<div id="room_type_blk">
		        	<p v-if="room_price === 15000">Room type : <span class="badge">Entire Place</span></p>
		        	<p v-if="room_price === 7500">Room type : <span class="badge">Private Room</span></p>
		        	<p v-if="room_price === 10000">Room type : <span class="badge">Shared Room</span></p>
	        	</div>
	        	<div>
	        		<p>Total cost : <span class="badge">&#x20B9; {{ total_price }}</span></p>
	        	</div>
	        	<div>
	        		<span>Number of beds available : 
	        		<span v-if="beds_count <= 3">
	        			<img v-for="n in beds_count" src="../assets/img/bed.png" class="guest_img">
	        		</span>
	        		<span v-if="beds_count > 3">
	        			<img v-for="n in beds_count" v-if="n <= 3" src="../assets/img/bed.png" class="guest_img"> ... + {{ beds_count }}
	        		</span>
	        		</span>
	        	</div>
	        	<div>
	        		<p v-if="kitchen === 'yes'">Kitchen avaliable.
	        			<span class="badge" v-if="shared_kitchen === 'yes'">Shared kitchen</span>
	        			<span class="badge" v-if="shared_kitchen === 'no'">Individual kitchen</span>
	        		</p>
	        	</div>
	        	<div>
	        		<p class="badge" v-if="shared_washroom === 'yes'">Shared washroom</p>
	        		<p class="badge" v-if="shared_washroom === 'no'">Individual washroom</p>
	        	</div>
	        	<div v-if="image_url_arr.length != 0 ">
	        		Property Images : <br>
	        		<span v-for="image in image_url_arr">
	        			<b-img thumbnail fluid :src="image.url" alt="Thumbnail" class="property_img" />
	        		</span>
	        	</div>
	        	<div v-if="property_desc != ''">
	        		Property description : 
	        		<p class="description_txt">{{ property_desc }}</p>
	        	</div>
	        	
	        </b-col>
	    </b-row>
	    <div class="text-center">
	    	<b-button size="sm" @click="submitListing" variant="primary">submit listing</b-button>
	    </div>
  	</div>
  </div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'

export default {
  name: 'BecomeHost',
  data () {
    return {
    	guests:[2,4,6,8,10,12,14],
    	rooms:[
    		{ name: 'Entire Place', value: 'entire', price: 15000 },
    		{ name: 'Private Room', value: 'private', price: 10000 },
    		{ name: 'Shared Room', value: 'shared', price: 7500 }
    	],
    	total_price: '',
    	room_price: 15000,
    	guest_count: 2,
    	becomehost_block: true,
    	fillout_search_addr: '',
    	beds_count: 1,
    	kitchen: 'no',
    	shared_kitchen: 'yes',
    	shared_washroom: 'no',
    	image_url_arr: [],
    	property_desc:'',
    	images_err: false,
    	property_location:'',
    	map_coordinates:{ lat:'', lng: ''},
    	showDismissibleAlert: false
    }
  },
  methods: {
  	filloutSearch () {
  		var autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.fillout_search),
      {types: ['geocode']})

  		google.maps.event.addListener(autocomplete, 'place_changed', () => {
      		const place = autocomplete.getPlace()
      		this.property_location = place.formatted_address
      		this.map_coordinates = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      	})
  	},
  	changeGuests (e) {
  		let obj = { name: 'guests', value: e.target.value }
  		this.calcTotalPrice(obj)
  	},
  	changeRooms (e) {
  		let obj = { name: 'rooms', value: e.target.value }
  		this.calcTotalPrice(obj)
  	},
  	calcTotalPrice(obj) {
  		var tot_val;
  		if (obj.name === 'guests') {
  			tot_val = 3000 * parseInt(obj.value) + parseInt(this.room_price)
  		}
  		if (obj.name === 'rooms') {
  			tot_val = 3000 * parseInt(this.guest_count) + parseInt(obj.value)
  		}

  		this.total_price = tot_val
  	},
  	submitFillout () {

  		// this.property_location = document.getElementById('fillout_location').value
  		if (localStorage.user) {
  			this.becomehost_block = false
  		} else {
  			this.$refs.headerComp.openLoginModal()
  		}
  	},
  	decreBeds () {
  		if (this.beds_count !== 1) {
  			this.beds_count = this.beds_count - 1
  		}
  	},
  	increBeds () {
  		this.beds_count = this.beds_count + 1
  	},
  	uploadImages () {
  		this.$refs.image.click()
  	},
  	onFilePicked (e) {
  		const files = e.target.files
  		for (var i = 0; i < files.length; i++) {
  			if (files[i] !== undefined) {
		        var imageName = files[i].name
		        if (imageName.lastIndexOf('.') <= 0) {
		          return
		        }
		        const fr = new FileReader()
		        fr.readAsDataURL(files[i])
		        fr.addEventListener('load', () => {
		          this.image_url_arr.push({ url: fr.result })
		        })
		    }
  		}

  		console.log('files array', this.image_url_arr)
  	},
  	submitListing () {
  		let kitchen_obj = { kitchen_avail:this.kitchen, shared_kitchen: this.shared_kitchen }
  		let room_type = document.getElementById('room_type_blk').children[0].children[0].textContent

  		if (this.image_url_arr.length === 0) {
  			this.images_err = true
  		} else {
  			this.images_err = false
  		}
  		if (this.property_desc === '') {
  			this.description_err = true
  		} else {
  			this.description_err = false
  		}

  		if (this.image_url_arr.length !== 0 && this.property_desc !== '') {
  			let user = JSON.parse(localStorage.getItem('user'))

  			let data = {
  				guests: this.guest_count,
  				room_type: room_type,
  				location: this.property_location,
  				beds_count: this.beds_count,
  				kitchen: kitchen_obj,
  				shared_washroom: this.shared_washroom,
  				images: this.image_url_arr,
  				about: this.property_desc,
  				total_price: this.total_price,
  				owner: user._id,
  				map_coordinates: this.map_coordinates
  			}
  			
  			AppService.becomeHost(data).then(res => {
  				console.log('becomehost res', res.data)
  				if (res.data.status === 'success') {
  					this.showDismissibleAlert = true
  				}
  			})
  			
  		}
  	}
  },
  mounted () {
  	var options = {
      timeout: 5000
    };

  	this.$getLocation(options)
	  .then(coordinates => {
	    var geocoder = new google.maps.Geocoder();
	    var latlng = new google.maps.LatLng(coordinates.lat, coordinates.lng);
	    geocoder.geocode({'latLng': latlng}, function(results, status) {
	        if(status == google.maps.GeocoderStatus.OK) {
	        	console.log(results[0]['formatted_address'])
	        	document.getElementById('fillout_location').value = results[0]['formatted_address']
	        };
	    });
	});

	this.total_price = 3000 * parseInt(this.guest_count) + parseInt(this.room_price)
  },
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.head_component {
	background-color: #a4a77f;
}
.becomehost_blk {
	/*background: url('../assets/img/home_5.png') no-repeat center;*/
	background-color: #dcdec5;
	height: 723px;
}
.fillout_blk {
	background-color: #fff;
	padding: 8%;
	margin: 15%;
	border: 1px solid #696e35;
}
.fillout_search {
	width: 100%;
	padding: 3%;
	border: 1px solid #ccc;
	border-radius: 0px;
}
.fillout_select {
	width: 100%;
    border-radius: 0px;
    border: 1px solid #ccc;
    padding: 3%;
    background-color: #fff;
    margin-top: 3%;
}
.fillout_title {
	font-size: 22px;
	font-weight: bold;
	opacity: 0.8;
}
.price_tag {
	margin-top: 3%;
	font-size: 40px;
	font-weight: bold;
	opacity: 0.7;
}
.row {
	margin: 0px !important;
}
.fillout_blk_left {
	margin: 40% 0% 0% 15%;
	color: #696e35;
}
.fillout_blk_left p {
	font-weight: bold;
}
.fillout_blk_left h1 {
	font-weight: bold;
	width: 70%;
}
.fillout_btn {
	width: 96%;
}
.becomehost_fillout {
	margin: 5% 10% 0% 10%;
	background-color: #e9e9e9;
	padding: 5%;
}
.guest_img {
	width: 50px;
	opacity: 0.7;
	margin-right: 1%;
	border: 1px solid green;
	padding: 5px;
}
.beds_btns {
	border-radius: 21px;
	padding: 0px;
	padding-left: 14px;
	padding-right: 11px;
	font-size: 25px;
	font-weight: bold;
}
.upload_image_btn {
	border-radius: 17px;
}
.property_img {
	width: 150px;
	height: 150px;
}
.ml-3 {
	margin-left: 3%;
}
.badge {
	font-size: 100% !important;
	color: #585b5d !important;
}
.fillout_right_blk div {
	margin-top: 3%;
}
.list_heading {
	margin-bottom: 2%;
}
.desc_textarea {
	width: 75%;
}
.description_txt {
	border: 1px solid #ccc;
	padding: 2%;
}
.alert_blk {
	text-align: center;
}

</style>
