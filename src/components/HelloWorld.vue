<template>
  <div class="hello">
    <div class="home_search" id="home_search">
      <HeaderComponent />
      <div class="autocomplete_div">
        <h2 class="autocomplete_head">Book unique homes and experiences all over the world.</h2>
        <input ref="autocomplete" 
           placeholder="Try homes in India" 
           type="text"
           class="google-search-box"
           id="home_search_input" 
           @keyup="onKeyUpSearch"
        />
        <p class="null_search_msg" v-if="location_null_err">No listings found for this search....!</p>
      </div>
    </div>
    <div class="grid_blks">
      <b-col md="12" class="py-12 airbnb_plus_blk">
         <span class="airbnb_plus">Introducing Flyhome plus</span><br>
         <span class="airbnb_plus_sub">A new selection of homes verified for quality and comfort</span><br>
         <img src="../assets/img/airbnb_plus.png" width="100%" height="320px">
         <button class="explore_homes_btn">EXPLORE HOMES</button>
      </b-col><br>

      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes around the world</span></b-col>
         <b-col md="3" v-for="listing in listings.slice(0, 4)" :key="listing._id">
          <b-carousel :id="listing._id"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              
          >

            <b-carousel-slide v-for="(image, index) in listing.images" :key="'sliding1'+ index">
              <img slot="img" class="w-100" width="1024" height="180"
             :src="image.url" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <a :href="'#/full-details/'+ listing._id"><p><b>{{ listing.name }}</b></p></a>
         </b-col>
      </b-col>
      </b-row>

      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes near sea shore</span></b-col>
         <b-col md="3" v-for="listing in listings.slice(4, 8)" :key="listing._id">
          <b-carousel :id="listing._id"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              
          >

            <b-carousel-slide v-for="(image, index) in listing.images" :key="'sliding2'+ index">
              <img slot="img" class="w-100" width="1024" height="180"
             :src="image.url" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <a :href="'#/full-details/'+ listing._id"><p><b>{{ listing.name }}</b></p></a>
         </b-col>
      </b-col>
      </b-row>

      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes near nature hills</span></b-col>
         <b-col md="3" v-for="listing in listings.slice(8, 12)" :key="listing._id">
          <b-carousel :id="listing._id"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            :interval="9000"
          >

            <b-carousel-slide v-for="(image, index) in listing.images" :key="'sliding3'+ index">
              <img slot="img" class="w-100" width="1024" height="180"
             :src="image.url" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <a :href="'#/full-details/'+ listing._id"><p><b>{{ listing.name }}</b></p></a>
         </b-col>
      </b-col>
      </b-row>
    </div>
    <FooterComponent/>
  </div>
</template>


<script>

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import AppService from '@/services/AppService'


export default {
  data() {
    return {
      mapLoaded: false,
      location_arr: [],
      googleSignInParams: {
        client_id: '266477204854-qhppbtd5r0l1laeu703bl7m0m6068si0.apps.googleusercontent.com'
      },
      location_null_err:false,
      listings: []
    }
  },
  name: 'HelloWorld',
  props: {
  },
  methods: {
    onKeyUpSearch () {
      this.location_null_err = false
    },
    getAllListings () {
      AppService.getAllListings().then(res => {
        console.log('get all listings', res.data.data)
        this.listings = res.data.data
      })
    }
  },
  mounted () {

    this.getAllListings()

    var autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']})

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace()
      console.log('google location', place.geometry.location.lat())
      if ( place.formatted_address !== undefined ) {
        let location = { location: place.formatted_address }
        AppService.searchHomes(location).then(res => {
          if (res.data.status === 'success') {
            this.$router.push({ name: 'ListingsPage', params: { location: place.formatted_address } })
          } else {
            this.location_null_err = true
          }
        })
        
      } else {
        let location = { location: place.name }
        AppService.searchHomes(location).then(res => {
          if (res.data.status === 'success') {
            this.$router.push({ name: 'ListingsPage', params: { location: place.name } })
          } else {
            this.location_null_err = true
          }
        })
      }
    })
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(){
      // this.$socket.emit('send_message', { message: "Hi... this is my first message" });
      console.log("message fired------------")
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
<style scoped>

.google-search-box {
  margin: auto;
  display: block;
  width: 60%;
  padding: 13px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #676c2b;
  border-radius: 0px;
}
.autocomplete_div {
  margin-top: 13%;
}
.autocomplete_head {
  display: block;
  margin-left: 20%;
  font-weight: bold;
  font-size: 44px;
  width: 56%;
  opacity: 0.8;
  color: #676c2b;
}
.airbnb_plus {
  font-size: 20px;
  font-weight: bold;
  opacity: 0.8;
}
.grid_blks {
  margin-left: 11%;
  margin-right: 11%;
}
.airbnb_plus_blk {
  margin-top: 3%;
  height: 350px;
}
.explore_homes_btn {
  position: relative;
  display: block;
  margin: auto;
  margin-top: -15%;
  padding: 18px 25px 18px 25px;
  background-color: #fff;
  border: none;
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
}
.homes_around_world_blk .head span {
  font-weight: bold;
  font-size: 20px;
  opacity: 0.8;
}
.homes_around_world_blk .head {
  margin-top: 1%;
  margin-bottom: 1%;
}
.homes_around_world_blk {
  margin-top: 2%;
}
.homes_around_world_blk a {
  color: #363f48;
}
.home_search {
  height: 800px;
  /*background: url('http://10.90.90.55/Vue_js/airbnb/src/assets/img/home_2.jpg') no-repeat center;*/
  background-color: #dcdec5;
}
.null_search_msg {
  background-color: #fff;
  color: red;
  padding: 12px;
  width: 60%;
  margin: auto;
  border-top: 1px solid #ccc;
}

</style>
