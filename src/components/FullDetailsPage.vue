<template>
<div class="full_details_page">
	<div class="head_component">
		<HeaderComponent ref="headerComp" />
	</div>
	  	<div class="full_details_div">
	  		<b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
          	>

	            <!-- Text slides with image -->
	            <b-carousel-slide v-for="(image, index) in host_images" :key="index">
	              <img slot="img" class="w-100" width="1024" height="500"
	             :src="image.url" alt="image slot">
	            </b-carousel-slide>

          	</b-carousel>
          	<b-row>
		        <b-col class="details_blk">
		        	<ul class="details_ul">
		        		<li>
		        			<p class="sleeping_head">Sleeping arrangements</p>
		        			<span v-for="bed in host.beds">
		        				<img class="bed_img" src="../assets/img/bed.png">
		        			</span>
		        		</li>
		        		<li> 
		        		<p class="sleeping_head">Guests allowed</p>
		        			<span v-for="bed in host.guests">
		        				<img class="bed_img" src="../assets/img/guest.jpg">
		        			</span>
		        		</li>
		        		<li>
		        			<p class="sleeping_head">Host Type</p>
		        			<span>
		        			{{ host.room_type }} &nbsp;&nbsp;
		        				<img v-if="host.room_type === 'Shared Room'" class="bed_img" src="../assets/img/shared.png">
		        				<img v-if="host.room_type === 'Private Room'" class="bed_img" src="../assets/img/single.png">
		        				<img v-if="host.room_type === 'Entire Place'" class="bed_img" src="../assets/img/house.png">
		        			</span>
		        		</li>
		        		<li> <p class="sleeping_head">Price</p><span class="price_tag">&#x20B9; {{ host.price }}</span></li>
		        		<li> <p class="sleeping_head">Amentities</p>
	        				<p>{{ host.washroom === 'no' ? 'Individual washroom' : 'Shared washroom' }}</p>
	        				<p>{{ kitechCal }}</p>
	        				<p>Free Wi-Fi available</p>
		        		</li>
		        		<li>
		        			<p class="sleeping_head">Location</p>
		        		 	{{ host.location }}
		        		</li>
		        	</ul>
		        </b-col>
		        <b-col class="map_blk">
		        	<GmapMap
					  :center="map_coordinates"
					  :zoom="15"
					  map-type-id="terrain"
					  style="width: 100%; height: 650px"
					>
					  <GmapMarker
					    :position="map_coordinates"
					    :clickable="true"
					    :draggable="true"
					    @click="center=map_coordinates"
					  />
					</GmapMap>
		        </b-col>
		    </b-row>
	  	</div>
  	</div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'

export default {
  name: 'FullDetailsPage',
  data () {
    return {
    	host:[],
    	host_images:[],
    	map_coordinates:{},
    	markers:[{ lat:'16.9754085', lng:'82.23523969999997' }]
    }
  },
  methods: {
  	
  },
  mounted () {
  	console.log('params', this.$route.params.id)
  	let host_id = { id : this.$route.params.id }
  	AppService.getSingleHome(host_id).then(res => {
      console.log('single host response', res.data.data)
      this.host_images = res.data.data.images
      this.map_coordinates = res.data.data.map_coordinates
      this.host = res.data.data
    })
  },
  computed: {
  	kitechCal () {
  		if (this.host.kitchen !== undefined) {
	  		if (this.host.kitchen.kitchen_avail === 'yes') {
	  			if (this.host.kitchen.shared_kitchen === 'yes') {
	  				return "Shared kitchen available"
	  			} else {
	  				return "Individual kitchen available"
	  			}
	  		} else {
	  			return "No kitchen available"
	  		}
	  	}
  	}
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
.full_details_div {
	margin-right: 5%;
	margin-left: 5%;
	margin-top: 1%;
}
.map_blk {
	padding: 5px;
}
.details_blk {
	padding: 10px;
	background-color: #f1f3f0;
}
.details_ul li {
	list-style: none;
	padding: 5px;
}
.sleeping_head {
	font-weight: bold;
}
.bed_img {
	width: 50px;
	opacity: 0.7;
	margin-right: 1%;
	border: 1px solid green;
	padding: 5px;
}
.price_tag {
	padding: 5px;
	font-weight: bold;
	background-color: #fff;
	border: 1px solid orange;
}

</style>
