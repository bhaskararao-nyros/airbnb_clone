<template>
<div class="listings">
	<div class="head_component">
		<HeaderComponent ref="headerComp" />
	</div>
	  	<div class="listings_blk">
	  		<div v-if="listings.length > 0">
			  	<h4 class="listing_head">Searched for homes in <span>{{ location_address }}</span></h4>
			  	<div class="listing_row" v-for="listing in listings" :key="listing._id">
			  	<h4 class="listing_name">{{ listing.name }}</h4>
				  	<b-row>
				        <b-col>
				        	<b-img :src="listing.images[0].url" fluid alt="Responsive image" class="listing_image" />
				        	<div class="location_div">
				        	Address :
					        	<a>{{ listing.location }}</a>
					        </div>
					        <div class="review_rating_blk">
					        	Reviews & Ratings ({{ listing.review_rating.length }})
					        </div>
				        </b-col>
				        <b-col class="listings_right_blk">
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
				        </b-col>
				        <b-col class="listings_right_blk">
				        <div class="view_more_btn">
				        	<b-button :href="'#/full-details/' + listing._id"  variant="outline-success" size="sm">View More</b-button>	
				        </div>
				        
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
				        <div class="price_btn">
				        	<b-button  variant="success" size="sm">&#x20B9; {{ listing.price }}</b-button>	
				        </div>
				        </b-col>
				    </b-row>
			    </div>
			</div>
			<div v-else class="not_found">
				<h3>No Listings Found on this location </h3>
				<p> {{ searched_location }}</p>
			</div>
	  	</div>
	  	<FooterComponent/>
  	</div>
  	
</template>

<script>

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import AppService from '@/services/AppService'

export default {
  name: 'ListingsPage',
  data () {
    return {
    	listings:[],
    	location_address:'',
    	searched_location: this.$route.params.location
    }
  },
  methods: {
  	
  },
  mounted () {
  	console.log('params', this.$route.params.location)
  	let location = { location: this.$route.params.location }
  	AppService.searchHomes(location).then(res => {
      console.log('location response', res.data.data)
      if (res.data.status === 'success') {
      	if (res.data.data.length > 0) {
      		this.listings = res.data.data
        	this.location_address = res.data.data[0].location
      	}
        
      } else {
        this.location_null_err = true
      }
    })

  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.head_component {
	background-color: #a4a77f;
}
.listing_row {
	background-color: #fff;
	margin: 2% 5% 0% 5%;
	border: 4px solid #ade9c5;
	padding: 1%;
	opacity: 0.9;
	z-index: 100;
	border-radius: 5px;
}
.listing_row .col {
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
}
.listing_head span {
	color: #9f0712;
	font-weight: bold;
}
.listing_head {
	margin-left: 5%;
	opacity: 0.7;
	padding-top: 1%;
}
.listing_image {
	width: 250px;
	border: 1px solid #fff;
	padding: 5px;
}
.view_more_btn {
	float: right;
}
.price_btn {
	float: right;
}
.location_div {
	margin-top: 7%;
	width: 60%;
}
.location_div a {
	transition: all 0.2s ease-in-out;
	color: #007bff;
}
.location_div a:hover {
	transition: all 0.2s ease-in-out;
	color: #007bff;
	text-decoration: underline;
}
.price_btn .btn {
	font-size: 16px;
	font-weight: bold;
}
.listing_details li {
	list-style: none !important;
	color: #2c2c2c;
	margin-top: 2px;
}
.listings_blk {
	background-color: #dcdec5;
	height: 100%;
}
.listings_right_blk {
	background-color: #f1f3f0;
	padding: 5px;
}
.not_found {
	padding-top: 15%;
	padding-left: 33%;
}
.amentities {
	font-weight: bold;
	margin-bottom: 0px;
	margin-top: 5px;
}
.listing_name {
	color: #4e904e;
	font-weight: bold;
}
body, html {
  height: 100%;
}
.review_rating_blk {
	margin-top: 1%;
}

</style>
