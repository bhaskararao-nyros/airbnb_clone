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
      <div>
        <!-- Modal Component -->
        <b-modal id="login_modal" title="Login">
          <p class="my-4">Login with e-mail</p>
          <form>
            <b-form-input v-model="signin.email"
              type="text"
              placeholder="Email address">
            </b-form-input><br>
            <b-form-input v-model="signin.password"
              type="text"
              placeholder="Password">
            </b-form-input><br>
            <b-button block variant="success">Login</b-button><br>
          </form>
          <p class="text-center">------------------------------  or  -----------------------------</p>
          <b-button variant="primary" block @click="openFbLoginDialog"><img src="../assets/img/fb.png" width="20px"> Login with Facebook</b-button><br>
          <b-button variant="danger" block><img src="../assets/img/google.png" width="20px"> Login with Gmail</b-button>
        </b-modal>

        <b-modal id="signup_modal" title="Sign up" ref="signup_modal">
          <div class="social_signup" v-if="!custom_signup">
            <p class="my-4">Sign up with e-mail</p>
            <form>
              <b-form-input
                type="text"
                placeholder="Email address"
                v-model="signup_email">
              </b-form-input>
              <span class="text-danger" v-if="email_err"> *email required</span>
            <b-button block variant="success" class="goto_signup_btn" @click="goToSignup">Next</b-button><br>
            </form>
            <p class="text-center">------------------------------  or  -----------------------------</p>
            <b-button variant="primary" block @click="openFbSignupDialog"><img src="../assets/img/fb.png" width="20px"> Sign up with Facebook</b-button><br>
            <b-button variant="danger" @click="onSignIn" block><img src="../assets/img/google.png" width="20px"> Sign up with Gmail</b-button>
          </div>
          <div class="custom_signup" v-if="custom_signup">
            <p class="my-4">Please provide below details</p>
            <form class="signup_form">
              <b-form-input
                type="text"
                placeholder="Email address"
                v-model="signup.email" disabled>
              </b-form-input>
              <b-form-input
                type="password"
                placeholder="Password"
                v-model="signup.password">
              </b-form-input>
              <span class="text-danger" v-if="pass_err">Password required</span>
              <b-form-input
                type="password"
                placeholder="Confirm Password"
                v-model="signup.cnfpass">
              </b-form-input>
              <span class="text-danger" v-if="cnf_pass_err">{{ cnf_pass_err_msg }}</span>
              <b-form-input
                type="text"
                placeholder="First name"
                v-model="signup.firstname">
              </b-form-input>
              <span class="text-danger" v-if="fn_err">First name required</span>
              <b-form-input
                type="text"
                placeholder="Last name"
                v-model="signup.lastname">
              </b-form-input>
              <span class="text-danger" v-if="ln_err">Last name required</span>
            <b-button block class="submit_signup_btn" variant="success" @click="submitSignup">Sign up</b-button><br>
            <p class="text-center">Sign up using <a href="#" @click="openFbSignupDialog">Facebook</a> or <a href="#" @click="onSignIn">Google</a></p>
            </form>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'


export default {
  data() {
    return {
      imageUrl: 'http://localhost/Vue_js/airbnb/src/assets/img/home_0.jpg',
      mapLoaded: false,
      googleSignInParams: {
        client_id: '266477204854-qhppbtd5r0l1laeu703bl7m0m6068si0.apps.googleusercontent.com'
      },
      signin: {},
      custom_signup: false,
      signup: { password: '', cnfpass: '', firstname: '', lastname: '', login_type: 'custom',profile_pic: null },
      email_err: false,
      signup_email: '',
      cnf_pass_err_msg: 'Confirm password required',
      pass_err: false,
      cnf_pass_err: false,
      fn_err: false,
      ln_err: false,
      opacityChangeAmount: 0.9
    }
  },
  name: 'HelloWorld',
  props: {
  },
  methods: {
    changeBgImage () {
      let rand = Math.round(Math.random() * 4)
      this.imageUrl = "http://localhost/Vue_js/airbnb/src/assets/img/home_" + rand + ".jpg"
      document.getElementById('home_search').style.background = "url("+ this.imageUrl +") no-repeat center"
      let opacity = document.getElementById('home_search').style.opacity;
       document.getElementById('home_search').style.opacity = opacity + this.opacityChangeAmount
    },
    fbInit () {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '236468323718701',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.10'
        })
          
        FB.AppEvents.logPageView()
          
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id
         js.src = "https://connect.facebook.net/en_US/sdk.js"
         fjs.parentNode.insertBefore(js, fjs)
       }(document, 'script', 'facebook-jssdk'))
    },
    openFbSignupDialog () {
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState (response) {
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'first_name,last_name,name,email,picture.height(150).width(150)' }, function(profile) {
          let data = { firstname: profile.first_name, lastname: profile.last_name, email:'fb_email', login_type: 'facebook', profile_pic: profile.picture.data.url }
          AppService.fbSignup(data).then(res => {
            console.log('fb_login', res)
          })
        })
      } else if (response.status === 'not_authorized') {
        console.log('not_authorized')
      } else {
        console.log('not logged in facebook')
      }
    },
    onSignIn(googleUser) {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function() {
        let email = auth2.currentUser.get().w3.getEmail(),
        firstname = auth2.currentUser.get().w3.getGivenName(),
        lastname = auth2.currentUser.get().w3.getFamilyName(),
        profile_pic = auth2.currentUser.get().w3.getImageUrl(),
        login_type = 'google'
        let data = { email: email, firstname: firstname, lastname: lastname, profile_pic: profile_pic, login_type: login_type }
        AppService.gmailSignup(data).then(res => {
          console.log('gmail_res', res)
        })

      }); 
    },
    goToSignup () {
      if (this.signup_email === '' || this.signup_email === undefined || this.signup_email === null){
        this.email_err = true
      } else {
        this.custom_signup = true
        this.email_err = false
        this.signup.email = this.signup_email
      }
      
    },
    submitSignup () {
      if (this.signup.password === '') {
        alert()
        this.pass_err = true
      } else {
        this.pass_err = false
      }
      if (this.signup.cnfpass === '') {
        this.cnf_pass_err = true
      } else {
        this.cnf_pass_err = false
      }
      if (this.signup.cnfpass != this.signup.password) {
        this.cnf_pass_err = true
        this.cnf_pass_err_msg = 'Both passwords must be same'
      } else {
        this.cnf_pass_err = false
      }
      if (this.signup.firstname === '') {
        this.fn_err = true
      } else {
        this.fn_err = false
      }
      if (this.signup.lastname === '') {
        this.ln_err = true
      } else {
        this.ln_err = false
      }
      if (!this.pass_err && !this.cnf_pass_err && !this.fn_err && !this.ln_err) {
        AppService.customSignup(this.signup).then(res => {
          this.$refs.signup_modal.hide()
          console.log('custom_res', res)
        })
      }
    }
  },
  mounted () {
    this.fbInit()

    setInterval(function () {
      this.changeBgImage()
    }.bind(this), 5000)

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

.home_search {
  height: 800px;
  opacity: 0;
}
.google-search-box {
  margin: auto;
  display: block;
  width: 60%;
  padding: 15px;
  font-size: 20px;
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
  font-size: 50px;
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
.hello div {
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
.goto_signup_btn, .submit_signup_btn {
  margin-top: 2%;
}
.signup_form input {
  margin-top: 2%;
}

</style>
