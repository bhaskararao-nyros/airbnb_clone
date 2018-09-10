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
        />
      </div>
    </div>
    <div class="grid_blks">
      <b-col md="12" class="py-12 airbnb_plus_blk">
         <span class="airbnb_plus">Introducing Airbnb plus</span><br>
         <span class="airbnb_plus_sub">A new selection of homes verified for quality and comfort</span><br>
         <img src="../assets/img/airbnb_plus.png" width="100%" height="320px">
         <button class="explore_homes_btn">EXPLORE HOMES</button>
      </b-col><br>

      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes around the world</span></b-col>
         <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>Lake View Room - Hauz Khas Village</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <p><b>Sea Hut Homestay with Aircon..</b></p>
          <p><span class="glyphicon glyphicon-star"></span></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>WOODEN CHALET ON THE RIVER BANKS</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>3 Bed Apartment Near Baga And Calangute</b></p>
         </b-col>
      </b-row>
      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes around the world</span></b-col>
         <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>Lake View Room - Hauz Khas Village</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <p><b>Sea Hut Homestay with Aircon..</b></p>
          <p><span class="glyphicon glyphicon-star"></span></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>WOODEN CHALET ON THE RIVER BANKS</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>3 Bed Apartment Near Baga And Calangute</b></p>
         </b-col>
      </b-row>
      <b-row class="homes_around_world_blk">
       <b-col md="12 head"><span>Homes around the world</span></b-col>
         <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>Lake View Room - Hauz Khas Village</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>

          </b-carousel>
          <p><b>Sea Hut Homestay with Aircon..</b></p>
          <p><span class="glyphicon glyphicon-star"></span></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>WOODEN CHALET ON THE RIVER BANKS</b></p>
         </b-col>
      </b-col>
      <b-col md="3">
          <b-carousel id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide1.jpg" alt="image slot">
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide2.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide3.jpg" alt="image slot">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="w-100" width="1024" height="180"
             src="../assets/img/slide4.jpeg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
          <p><b>3 Bed Apartment Near Baga And Calangute</b></p>
         </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'


export default {
  data() {
    return {
      mapLoaded: false,
      googleSignInParams: {
        client_id: '266477204854-qhppbtd5r0l1laeu703bl7m0m6068si0.apps.googleusercontent.com'
      },
    }
  },
  name: 'HelloWorld',
  props: {
  },
  methods: {
  },
  mounted () {

    var autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']})
  },
  components: {
    HeaderComponent
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
  border: none;
}
.autocomplete_div {
  margin-top: 13%;
}
.autocomplete_head {
  display: block;
  margin-left: 20%;
  color: #fff;
  font-weight: bold;
  font-size: 44px;
  width: 56%;
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
  margin-bottom: 2%;
}
.homes_around_world_blk {
  margin-top: 2%;
}
.home_search {
  height: 800px;
  background: url('http://10.90.90.55/Vue_js/airbnb/src/assets/img/home_2.jpg') no-repeat center;
}

</style>
