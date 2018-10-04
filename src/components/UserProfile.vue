<template>
<div class="listings">
	<div class="head_component">
		<HeaderComponent ref="headerComp" />
	</div>
	  	<div class="user_profile_blk">
		  	<b-row class="user_profile_row">
		        <b-col cols="4" class="image_col">
		        	<img v-if="imageUrl !== null" class="user_img" :src="imageUrl">
		        	<img v-else class="user_img" src="../assets/img/user.png">
		        	<input
		                type="file"
		                style="display: none"
		                ref="image"
		                accept="image/*"
		                @change="onFilePicked"
		            >
		        	<b-button @click="onUpload" v-if="edit_user" variant="outline-primary" size="sm">Upload</b-button>
		        </b-col>
        		<b-col cols="4" class="username_col">
        			<h3>{{ user.firstname }} {{ user.lastname }} </h3>
        			<div class="edit_btn" v-if="!edit_user">
        				<b-button @click="edit_user = true" variant="primary" size="sm">Edit Info</b-button>
        			</div>
        		</b-col>
        		<b-col>
        			<div class="listings_status total">
        				<p>Total Listings <span class="lists_count">{{ listings.length }}</span></p>
        			</div>
        		</b-col>
        		<b-col>
        			<div class="listings_status approved">
        				<p>Approved <span class="lists_count">{{ approved_lists.length }}</span></p>
        			</div>
        		</b-col>
        		<b-col>
        			<div class="listings_status pending">
        				<p>Pending<span class="lists_count">{{ pending_lists.length }}</span></p>
        			</div>
        		</b-col>
		    </b-row>
		    <div class="user_details_div">
		    	<b-row>
			        <b-col cols="2">
			        	<p class="label">Firstname</p>
			        	<p class="label">Lastname</p>
			        	<p class="label">Email</p>
			        	<p class="label">Password</p>
			        </b-col>
	        		<b-col cols="6" v-if="!edit_user">
	        			<p class="label">{{ user.firstname }}</p>
			        	<p class="label">{{ user.lastname }}</p>
			        	<p class="label">{{ social_email }}</p>
			        	<p class="label">{{ social_pass }}</p>
	        		</b-col>
	        		<b-col cols="6" v-if="edit_user">
	        			<p><input type="text" v-model="user_fname" name="firstname" class="form-control"></p>
	        			<p><input type="text" v-model="user_lname" name="lastname" class="form-control"></p>
	        			<p><input :disabled="user.login_type !== 'custom'" type="text" name="email" class="form-control" v-model="social_email"></p>
	        			<p><input :disabled="user.login_type !== 'custom'" type="text" name="password" class="form-control" v-model="social_pass"></p>
	        			<p><b-button @click="onUpdateUser" variant="primary"  size="sm">Update</b-button><b-button @click="edit_user = false" variant="default"  size="sm">Cancel</b-button></p>
	        		</b-col>
			    </b-row>
		    </div>
		    <div class="listings_div">
		    	<b-tabs pills card>
				  <b-tab title="All Listings" active>
				    <div v-if="listings.length > 0" class="listings_for_div" v-for="listing in listings" :key="listing._id">
				    	<b-row>
				    		<b-col>
				    			<p class="amentities">Amentities</p>

				    			<span v-if="listing.amentities.wifi">Wi-fi,</span>
				    			<span v-if="listing.amentities.tv">Tv,</span>
				    			<span v-if="listing.amentities.ac">Air Conditioning,</span>
				    			<span v-if="listing.amentities.hair_dryer">Hair Dryer,</span>
				    			<span v-if="listing.amentities.pets">pets,</span>
				    			<span v-if="listing.amentities.iron">Iron</span><br>

				    			<span class="amentities">Bed Rooms: </span>
				    			<span>{{ listing.bed_rooms.length }}</span><br>
				    			<span class="amentities">Bath Rooms: </span>
				    			<span>{{ listing.bath_rooms.length }}</span><br>
				    			<p class="amentities">About</p>
				    			<span>{{ listing.about }}</span>
				    			<p class="amentities">Price</p>
				    			<p>&#x20B9; {{ listing.price }}</p>
				    		</b-col>
				    		<b-col>
				    			<p class="amentities">Safety Amentities</p>

				    			<span v-if="listing.safety_amentities.first_aid_kit">First Aid Kit,</span>
				    			<span v-if="listing.safety_amentities.fire_safety">Fire safety</span><br>
				    			
				    			<p class="amentities">Rules</p>
				    			<span v-if="listing.rules.smoking">No Smoking,</span>
				    			<span v-if="listing.rules.parties">No Parties,</span>
				    			<span v-if="listing.rules.events">No Events</span><br>

				    			<p class="amentities">Allowed spaces</p>

				    			<span v-if="listing.allowed_spaces.pvt_living_room">Private living room,</span>
				    			<span v-if="listing.allowed_spaces.pool">Pool,</span>
				    			<span v-if="listing.allowed_spaces.kitchen">Kitchen,</span>
				    			<span v-if="listing.allowed_spaces.laundry_dryer">Laundry dryer,</span>
				    			<span v-if="listing.allowed_spaces.laundry_washer">Laundry washer,</span>
				    			<span v-if="listing.allowed_spaces.gym">Gym,</span>
				    			<span v-if="listing.allowed_spaces.hot_tub">Hot Tub</span>

				    			<p class="amentities">Host type</p>
				    			<span>{{ listing.host_type }}</span><br>
				    			<span class="amentities">Guests: </span>
				    			<span>{{ listing.guests }}</span>
				    			<p class="amentities">Location</p>
				    			<p>{{ listing.location }}</p>
				    		</b-col>
				    		<b-col>
				    			<div class="images_col" v-for="image in listing.images">
				    				<img :src="image.url">
				    			</div>
				    		</b-col>
				    	</b-row>
				    	<div class="align_right">
				    		<b-button variant="default" size="sm" :href="'#/edit_user_listing/' + listing._id">Edit</b-button>
				    	</div>
				    </div>
				    <p v-if="listings.length === 0" class="text-center">No Listings </p>
				  </b-tab>
				  <b-tab title="Approved">
			      	<div class="listings_for_div" v-if="approved_lists.length > 0" v-for="listing in approved_lists" :key="listing._id">
				    	<b-row>
				    		<b-col>
				    			<p class="amentities">Amentities</p>

				    			<span v-if="listing.amentities.wifi">Wi-fi,</span>
				    			<span v-if="listing.amentities.tv">Tv,</span>
				    			<span v-if="listing.amentities.ac">Air Conditioning,</span>
				    			<span v-if="listing.amentities.hair_dryer">Hair Dryer,</span>
				    			<span v-if="listing.amentities.pets">pets,</span>
				    			<span v-if="listing.amentities.iron">Iron</span><br>

				    			<span class="amentities">Bed Rooms: </span>
				    			<span>{{ listing.bed_rooms.length }}</span><br>
				    			<span class="amentities">Bath Rooms: </span>
				    			<span>{{ listing.bath_rooms.length }}</span><br>
				    			<p class="amentities">About</p>
				    			<span>{{ listing.about }}</span>
				    			<p class="amentities">Price</p>
				    			<p>&#x20B9; {{ listing.price }}</p>
				    		</b-col>
				    		<b-col>
				    			<p class="amentities">Safety Amentities</p>

				    			<span v-if="listing.safety_amentities.first_aid_kit">First Aid Kit,</span>
				    			<span v-if="listing.safety_amentities.fire_safety">Fire safety</span><br>
				    			
				    			<p class="amentities">Rules</p>
				    			<span v-if="listing.rules.smoking">No Smoking,</span>
				    			<span v-if="listing.rules.parties">No Parties,</span>
				    			<span v-if="listing.rules.events">No Events</span><br>

				    			<p class="amentities">Allowed spaces</p>

				    			<span v-if="listing.allowed_spaces.pvt_living_room">Private living room,</span>
				    			<span v-if="listing.allowed_spaces.pool">Pool,</span>
				    			<span v-if="listing.allowed_spaces.kitchen">Kitchen,</span>
				    			<span v-if="listing.allowed_spaces.laundry_dryer">Laundry dryer,</span>
				    			<span v-if="listing.allowed_spaces.laundry_washer">Laundry washer,</span>
				    			<span v-if="listing.allowed_spaces.gym">Gym,</span>
				    			<span v-if="listing.allowed_spaces.hot_tub">Hot Tub</span>

				    			<p class="amentities">Host type</p>
				    			<span>{{ listing.host_type }}</span><br>
				    			<span class="amentities">Guests: </span>
				    			<span>{{ listing.guests }}</span>
				    			<p class="amentities">Location</p>
				    			<p>{{ listing.location }}</p>
				    		</b-col>
				    		<b-col>
				    			<div class="images_col" v-for="image in listing.images">
				    				<img :src="image.url">
				    			</div>
				    		</b-col>
				    	</b-row>
				    	<div class="align_right">
				    		<b-button variant="default" size="sm" :href="'#/edit_user_listing/' + listing._id">Edit</b-button>
				    	</div>
				    </div>
				    <p v-if="approved_lists.length === 0" class="text-center">No Approved Listings </p>
			      </b-tab>
			      <b-tab title="Pending">
			      	<div class="listings_for_div" v-if="pending_lists.length > 0" v-for="listing in pending_lists" :key="listing._id">
				    	<b-row>
				    		<b-col>
				    			<p class="amentities">Amentities</p>

				    			<span v-if="listing.amentities.wifi">Wi-fi,</span>
				    			<span v-if="listing.amentities.tv">Tv,</span>
				    			<span v-if="listing.amentities.ac">Air Conditioning,</span>
				    			<span v-if="listing.amentities.hair_dryer">Hair Dryer,</span>
				    			<span v-if="listing.amentities.pets">pets,</span>
				    			<span v-if="listing.amentities.iron">Iron</span><br>

				    			<span class="amentities">Bed Rooms: </span>
				    			<span>{{ listing.bed_rooms.length }}</span><br>
				    			<span class="amentities">Bath Rooms: </span>
				    			<span>{{ listing.bath_rooms.length }}</span><br>
				    			<p class="amentities">About</p>
				    			<span>{{ listing.about }}</span>
				    			<p class="amentities">Price</p>
				    			<p>&#x20B9; {{ listing.price }}</p>
				    		</b-col>
				    		<b-col>
				    			<p class="amentities">Safety Amentities</p>

				    			<span v-if="listing.safety_amentities.first_aid_kit">First Aid Kit,</span>
				    			<span v-if="listing.safety_amentities.fire_safety">Fire safety</span><br>
				    			
				    			<p class="amentities">Rules</p>
				    			<span v-if="listing.rules.smoking">No Smoking,</span>
				    			<span v-if="listing.rules.parties">No Parties,</span>
				    			<span v-if="listing.rules.events">No Events</span><br>

				    			<p class="amentities">Allowed spaces</p>

				    			<span v-if="listing.allowed_spaces.pvt_living_room">Private living room,</span>
				    			<span v-if="listing.allowed_spaces.pool">Pool,</span>
				    			<span v-if="listing.allowed_spaces.kitchen">Kitchen,</span>
				    			<span v-if="listing.allowed_spaces.laundry_dryer">Laundry dryer,</span>
				    			<span v-if="listing.allowed_spaces.laundry_washer">Laundry washer,</span>
				    			<span v-if="listing.allowed_spaces.gym">Gym,</span>
				    			<span v-if="listing.allowed_spaces.hot_tub">Hot Tub</span>

				    			<p class="amentities">Host type</p>
				    			<span>{{ listing.host_type }}</span><br>
				    			<span class="amentities">Guests: </span>
				    			<span>{{ listing.guests }}</span>
				    			<p class="amentities">Location</p>
				    			<p>{{ listing.location }}</p>
				    		</b-col>
				    		<b-col>
				    			<div class="images_col" v-for="image in listing.images">
				    				<img :src="image.url">
				    			</div>
				    		</b-col>
				    	</b-row>
				    	<div class="align_right">
				    		<b-button variant="default" size="sm" :href="'#/edit_user_listing/' + listing._id">Edit</b-button>
				    	</div>
				    </div>
				    <p v-if="pending_lists.length === 0" class="text-center">No Pending Listings </p>
			      </b-tab>
				</b-tabs>
		    </div>
		    
	  	</div>
  	</div>
  	
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'

export default {
  name: 'UserProfile',
  data () {
    return {
    	user: JSON.parse(localStorage.getItem('user')),
    	edit_user: false,
    	social_email:'',
    	social_pass:'',
    	imageUrl:'',
    	user_fname:'',
    	user_lname:'',
    	listings:[],
    	approved_lists:[],
    	pending_lists:[]
    }
  },
  methods: {
  	onUpload () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {

        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
        })
      } else {
        this.imageUrl = ''
      }
    },
    onUpdateUser () {
    	this.user.profile_pic = this.imageUrl
    	this.user.email = this.social_email
    	this.user.password = this.social_pass
    	this.user.firstname = this.user_fname
    	this.user.lastname = this.user_lname
    	// let user_data = { email: }

    	AppService.updateUser(this.user).then(res => {
	      	console.log('user update res', res.data)
	      	if (res.data.status === 'success') {
	      		localStorage.setItem('user', JSON.stringify(res.data.data))
	      		this.updateUserView()
	      	}
	    })
    },
    updateUserView () {
    	let data = JSON.parse(localStorage.getItem('user'))
    	this.user = data
    	this.imageUrl = data.profile_pic
	  	this.user_fname = data.firstname
	  	this.user_lname = data.lastname
	  	this.edit_user = false
    },
    getUserListings (id) {
    	let data = { id: id }
    	this.listings = []
      	this.approved_lists = []
      	this.pending_lists = []

    	AppService.getUserListings(data).then(res => {
	      	console.log('get user listings res', res.data.data)
	      	if (res.data.data !== undefined) {
		      	this.listings = res.data.data

		      	for (var i = 0; i < this.listings.length; i++) {
				    if (this.listings[i].approved === 1) {
				    	this.approved_lists.push(this.listings[i])
				    }
				    if (this.listings[i].approved === 0) {
				    	this.pending_lists.push(this.listings[i])
				    }
				}
			}
	    })
    }
  },
  mounted () {

  	this.getUserListings(this.user._id)
  	
  	this.imageUrl = this.user.profile_pic
  	this.user_fname = this.user.firstname
  	this.user_lname = this.user.lastname

  	if (this.user.login_type === 'google') {
  		this.social_email = "Logged in with Gmail"
  		this.social_pass = "Logged in with Gmail"
  	}
  	if (this.user.login_type === 'facebook') {
  		this.social_email = "Logged in with Facebook"
  		this.social_pass = "Logged in with Facebook"
  	}
  	if (this.user.login_type === 'custom') {
  		this.social_email = this.user.email
  		this.social_pass = this.user.password
  	}
  },
  computed: {
  	
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
.user_profile_blk {
	margin-right: 5%;
	margin-left: 5%;
	margin-top: 1%;
	background-color: #f2f2f2;
	padding: 2%;
}
.user_img {
	width: 100px;
	border-radius: 49%;
	border: 2px solid #fff;
	padding: 1px;
	height: 100px;
}
.image_col {
	max-width: 11% !important;
}
.username_col h3 {
	padding-top: 2%;
}
.edit_btn {
	position: absolute;
	float: right;
}
.user_profile_row {
	border-bottom: 1px solid #fff;
	padding-bottom: 1%;
	margin-bottom: 1%;
}
.user_details_div {
	margin-left: 11%;
}
.user_details_div .form-control {
	display: inline;
	width: 70%;
	border-radius: 0px;
}
.user_details_div .label {
	/*background-color: #f1f5df;*/
	padding: 7px;
	color: #625b5b;
}
.listings_div {
	/*border-top: 1px solid #fff;*/
	padding-top: 1%;
}
.listings_for_div {
	background-color: #fff;
	border: 1px solid #439fc9;
	padding: 2%;
	color: #625b5b;
	margin-top: 2%;
}
.amentities {
	font-weight: bold;
	margin-bottom: 0px;
	margin-top: 5px;
}
.images_col {
	display: inline-grid;
}
.images_col img {
	width: 150px;
	height: 100px;
	border: 2px solid #439fc9;
	border-radius: 5px;
	padding: 1px;
	margin-left: 5px;
}
.align_right {
	text-align: right;
}
.listings_status {
	padding-left: 5%;
	padding-right: 5%;
	color: #625b5b;
	margin-top: 8%;
	border-radius: 3px; 
}
.total {
	background-color: #6ac5c1;
	border: 2px solid #6ac5c1;
}
.approved {
	background-color: #6ac57e;
	border: 2px solid #6ac57e;
}
.pending {
	background-color: #b6c56a;
	border: 2px solid #b6c56a;
}
.lists_count {
	font-size: 30px;
	float: right;
}

</style>
