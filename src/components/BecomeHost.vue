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
		  			<input type="text" name="search" id="fillout_search" class="fillout_search"  @focus="filloutSearch" ref="fillout_search"><br>
		  			<select class="fillout_select" @change="changeGuests" v-model="guest_count">
		  				<option v-for="guest in guests" :value="guest">{{ guest }} Guests</option>
		  			</select><br>
		  			<select class="fillout_select" @change="changeRooms" v-model="room_price">
		  				<option v-for="room in rooms" :value="room.price">{{ room.name }}</option>
		  			</select><br>
		  			<p class="price_tag">&#x20B9;{{ total_price }}</p>
		  			<b-button class="fillout_btn" variant="primary" @click="submitFillout">get started</b-button>
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
  name: 'BecomeHost',
  data () {
    return {
    	guests:["2","4","6","8","10","12","14"],
    	rooms:[
    		{ name: 'Entire Place', value: 'entire', price: 15000 },
    		{ name: 'Private Room', value: 'private', price: 10000 },
    		{ name: 'Shared Room', value: 'shared', price: 7500 }
    	],
    	total_price: '',
    	room_price: 15000,
    	guest_count: 2,
    	becomehost_block: true,
    	fillout_search_addr: ''
    }
  },
  methods: {
  	filloutSearch () {
  		var autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.fillout_search),
      {types: ['geocode']})
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
  		if (localStorage.user) {
  			this.becomehost_block = false
  		} else {
  			this.$refs.headerComp.openLoginModal()
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
	        	document.getElementById('fillout_search').value = results[0]['formatted_address']
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
	background: url('../assets/img/home_5.png') no-repeat center;
	height: 723px;
}
.fillout_blk {
	background-color: #fff;
	padding: 8%;
	margin: 15%;
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
	color: #fff;
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

</style>
