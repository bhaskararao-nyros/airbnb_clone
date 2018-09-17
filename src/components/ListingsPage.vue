<template>
  	<div class="listings">
	  	<div class="head_component">
	  		<HeaderComponent ref="headerComp" />
	  	</div>
	  	<div class="listings_blk">
		  	<h4 class="listing_head">Searched for homes in <span>{{ listings[0].location }}</span></h4>
		  	<b-row class="listing_row" v-for="list in listings" :key="list._id">
		        <b-col>
		        	<b-img :src="list.images[0].url" fluid alt="Responsive image" class="listing_image" />
		        	<div class="location_div">
		        	Address :
			        	<a>{{ list.location }}</a>
			        </div>
		        </b-col>
		        <b-col class="listings_right_blk">
		        <div class="view_more_btn">
		        	<b-button  variant="outline-success" size="sm">View More</b-button>	
		        </div>
		        
		        <p>About :</p>
		        	<ul class="listing_details">
		        		<li>- No smoking</li>
		        		<li>- No pets</li>
		        		<li>- No parties and No events</li>
		        		<li>- {{ list.room_type }}</li>
		        		<li>- {{ list.guests }} Guests</li>
		        		<li>- {{ list.beds }} Beds</li>
		        		<li>- {{ list.washroom === 'no' ? 'Individual washroom' : 'Shared washroom' }}</li>
		        		<li>- {{ list.kitchen.kitchen_avail === 'yes' && list.kitchen.shared_kitchen === 'yes' ? 'Shared kitchen available' : 'Individual kitchen'  }}</li>
		        	</ul>
		        <div class="price_btn">
		        	<b-button  variant="success" size="sm">&#x20B9; {{ list.price }}</b-button>	
		        </div>
		        </b-col>
		    </b-row>
	  	</div>
  	</div>
  	
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'

export default {
  name: 'ListingsPage',
  data () {
    return {
    	listings:[]
    }
  },
  methods: {
  	
  },
  mounted () {
  	console.log('params', this.$route.params.id.data)
  	this.listings = this.$route.params.id.data

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
.listing_row {
	background-color: #fff;
	margin: 2% 5% 0% 5%;
	border: 4px solid #ade9c5;
	padding: 1%;
	opacity: 0.9;
	z-index: 100;
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
	background: url('../assets/img/bg.jpeg') no-repeat center;
}
.listings_right_blk {
	background-color: #f1f3f0;
	padding: 5px;
}

</style>
