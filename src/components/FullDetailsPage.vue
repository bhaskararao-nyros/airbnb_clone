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
              v-model="slide"
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
		        		<li> {{ host.room_type }}</li>
		        		<li> {{ host.price }}</li>
		        		<li> {{ host.washroom === 'no' ? 'Individual washroom' : 'Shared washroom' }}</li>
		        		<li> {{ host.kitchen.kitchen_avail !== 'no' && host.kitchen.shared_kitchen === 'yes' ? 'Shared kitchen available' : 'No kitchen available' }}</li>
		        		<li> {{ host.location }}</li>
		        	</ul>
		        </b-col>
		        <b-col class="map_blk">
		        	<GmapMap
					  :center="map_coordinates"
					  :zoom="15"
					  map-type-id="terrain"
					  style="width: 100%; height: 500px"
					>
					  <GmapMarker
					    :key="index"
					    v-for="(m, index) in markers"
					    :position="m.position"
					    :clickable="true"
					    :draggable="true"
					    @click="center=m.position"
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
    	map_coordinates:{}
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

</style>
