<template>
  <div>
	<b-navbar class="home_nav_bar" toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#/">Flyhome</b-navbar-brand>

	  <b-collapse is-nav id="nav_collapse">
	  	<b-navbar-nav>
	      <b-nav-item v-if="head_search"><input type="text" class="head_search" name="search" placeholder="Try India homes" @focus="expandSearch()" id="head_search" @blur="normalSearch()" ref="head_autocomplete"></b-nav-item>
	    </b-navbar-nav>

	    <!-- Right aligned nav items -->
	    <b-navbar-nav class="ml-auto">
	    	<b-nav-item class="nav_item" href="#/become_host">Become a host</b-nav-item>
	      	<b-nav-item class="nav_item" href="#" v-b-modal.signup_modal v-if="!userLoggedin">Sign up</b-nav-item>
	      	<b-nav-item class="nav_item" href="#" v-b-modal.login_modal v-if="!userLoggedin">Log in</b-nav-item>
	      	<b-nav-item href="#" v-if="userLoggedin">
	      		<b-dropdown variant="link" size="sm" id="ddown1" class="m-md-2 user_dropdown" no-caret>
	      			<template slot="button-content" >
                <img v-if="user_icon !== '' && user_icon !== null " :src="user_icon" class="user_img">
	      				<img v-else src="../assets/img/user.png" class="user_img">
	      			</template>
            <b-dropdown-item @click="goToUserProfile">Profile</b-dropdown-item>
				    <b-dropdown-item @click="onLogout">Logout</b-dropdown-item>
			  	</b-dropdown>
	      	</b-nav-item>
	    </b-navbar-nav>

	  </b-collapse>
	</b-navbar>
	      <div>
        <!-- Login Modal Component Start -->
        <b-modal id="login_modal" title="Login" ref="login_modal">
          <p class="my-4">Login with e-mail</p>
          	<b-alert variant="danger"
             	dismissible
             	:show="showDismissibleAlert"
             	@dismissed="showDismissibleAlert=false">
	      		{{ login_err }}
	    	</b-alert>
          <form>
            <b-form-input v-model="signin.email"
              type="text"
              placeholder="Email address">
            </b-form-input>
            <span class="text-danger" v-if="login_email_err">Email required</span>
            <b-form-input v-model="signin.password"
              type="text"
              placeholder="Password">
            </b-form-input>
            <span class="text-danger" v-if="login_pass_err">Password required</span>
            <b-button block variant="success" id="cust_login_btn" @click="onCustomLogin">Login</b-button><br>
          </form>
          <p class="text-center">------------------------------  or  -----------------------------</p>
          <b-button variant="primary" block @click="openFbLoginDialog"><img src="../assets/img/fb.png" width="20px"> Login with Facebook</b-button><br>
          <b-button variant="danger" @click="onGoogleLogin" block><img src="../assets/img/google.png" width="20px"> Login with Gmail</b-button>
          <div class="signup_link">
          	<span>Don't have an account? <a @click="clickSignupLink">Signup</a></span>
          </div>
        </b-modal>
        <!-- Login Modal Component End -->

        <!-- Signup Modal Component Start -->
        <b-modal id="signup_modal" title="Sign up" ref="signup_modal">
          <div class="social_signup" v-if="!custom_signup">
            <p class="my-4">Sign up with e-mail</p>
            <form>
              <b-form-input
                type="text"
                placeholder="Email address"
                v-model="signup_email">
              </b-form-input>
              <span class="text-danger" v-if="email_err"> {{ email_err_msg }}</span>
            <b-button block variant="success" class="goto_signup_btn" @click="goToSignup">Next</b-button><br>
            </form>
            <p class="text-center">------------------------------  or  -----------------------------</p>
            <b-button variant="primary" block @click="openFbSignupDialog"><img src="../assets/img/fb.png" width="20px"> Sign up with Facebook</b-button><br>
            <b-button variant="danger" @click="onGoogleSignup" block><img src="../assets/img/google.png" width="20px"> Sign up with Gmail</b-button>
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
            <p class="text-center">Sign up using <a href="#" @click="openFbSignupDialog">Facebook</a> or <a href="#" @click="onGoogleSignup">Google</a></p>
            </form>
          </div>
        </b-modal>
        <!-- Signup Modal Component End -->

      </div>
  </div>
</template>

<script>

import AppService from '@/services/AppService'

export default {
  name: 'Header',
  data () {
    return {
    	head_search:false,
        signin: { login_type:'custom', email: '', password: '' },
        custom_signup: false,
        signup: { password: '', cnfpass: '', firstname: '', lastname: '', login_type: 'custom',profile_pic: null },
        email_err: false,
        email_err_msg: '*email required',
        signup_email: '',
        cnf_pass_err_msg: 'Confirm password required',
        pass_err: false,
        cnf_pass_err: false,
        fn_err: false,
        ln_err: false,
        login_email_err: false,
        login_pass_err: false,
        login_err: '',
        userLoggedin: false,
        showDismissibleAlert: false,
        user_icon:''
    }
  },
  methods: {
  	expandSearch () {
  		document.getElementById('head_search').style.width = "260%"
  		var autocomplete = new google.maps.places.Autocomplete(
	      (this.$refs.head_autocomplete),
	      {types: ['geocode']})

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
          const place = autocomplete.getPlace()
          console.log('google location', place.geometry.location.lat())

          if ( place.formatted_address !== undefined ) {
            let selected_location = place.formatted_address
            this.$router.push({ name: 'ListingsPage', params: { location: selected_location } })
          } else {
            let selected_location = place.name
            this.$router.push({ name: 'ListingsPage', params: { location: selected_location } })
          }
        })
  	},
  	normalSearch () {
  		document.getElementById('head_search').style.width = "160%";
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
      FB.login(this.checkSignupState, { scope: 'email' })
    },
    checkSignupState (response) {
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'first_name,last_name,name,email,picture.height(150).width(150)' }, (profile) => {
          let data = { firstname: profile.first_name, lastname: profile.last_name, email:'fb_email', login_type: 'facebook', profile_pic: profile.picture.data.url, password: 'no_password' }
          AppService.fbSignup(data).then(res => {
            console.log('fb_signup', res.data)
            if (res.data.status === 'success') {
            	localStorage.setItem('user', JSON.stringify(res.data.data))
            	let user = JSON.parse(localStorage.getItem('user'))
            	this.setUserData(user)
            	this.$router.go()
            }
          })
        })
      } else if (response.status === 'not_authorized') {
        console.log('not_authorized')
      } else {
        console.log('not logged in facebook')
      }
    },
    openFbLoginDialog () {
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState (response) {
      if (response.status === 'connected') {
        FB.api('/me', { fields: 'first_name,email' }, (profile) => {
          let data = { firstname: profile.first_name, email:'fb_email', login_type: 'facebook' }
          AppService.fbLogin(data).then(res => {
            console.log('fb_login', res.data)
            if (res.data.status === 'success') {
            	this.$refs.login_modal.hide()
            	localStorage.setItem('user', JSON.stringify(res.data.data))
            	let user = JSON.parse(localStorage.getItem('user'))
            	this.setUserData(user)
              this.$router.go()
            }
          })
        })
      } else if (response.status === 'not_authorized') {
        console.log('not_authorized')
      } else {
        console.log('not logged in facebook')
      }
    },
    onGoogleSignup () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function(res) {
        let email = res.w3.getEmail(),
        firstname = res.w3.getGivenName(),
        lastname = res.w3.getFamilyName(),
        profile_pic = res.w3.getImageUrl()
        let data = { email: email, firstname: firstname, lastname: lastname, profile_pic: profile_pic, login_type: 'google', password: 'no_password' }
        AppService.gmailSignup(data).then(res => {
          	console.log('signup gmail_res', res.data)
          	if (res.data.status === 'success') {
            	localStorage.setItem('user', JSON.stringify(res.data.data))
            	let user = JSON.parse(localStorage.getItem('user'))
              this.$refs.signup_modal.hide()
            	this.setUserData(user)
            }
        })

      }); 
    },
    onGoogleLogin () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function() {
        let email = auth2.currentUser.get().w3.getEmail(),
        firstname = auth2.currentUser.get().w3.getGivenName()
        let data = { email: email, firstname: firstname, login_type: 'google' }
        AppService.gmailLogin(data).then(res => {
          	if (res.data.status === 'success') {
            	localStorage.setItem('user', JSON.stringify(res.data.data))
            	let user = JSON.parse(localStorage.getItem('user'))
              // this.$refs.login_modal.hide()
            	// this.setUserData(user)
              window.location.reload()
            }
        })

      }); 
    },
    onCustomLogin () {
    	if (this.signin.email === '') {
    		this.login_email_err = true
    	} else {
    		this.login_email_err = false
    	}
    	if (this.signin.password === '') {
    		this.login_pass_err = true
    	} else {
    		this.login_pass_err = false
    	}

    	if (!this.login_email_err && !this.login_pass_err) {
    		AppService.customLogin(this.signin).then(res => {
	        	console.log('custom login res', res.data)
	        	if (res.data.status === 'fail') {
	        		this.showDismissibleAlert = true
	        		this.login_err = res.data.message
	        	}
            if (res.data.status === 'success') {
              localStorage.setItem('user', JSON.stringify(res.data.data))
              let user = JSON.parse(localStorage.getItem('user'))
              this.setUserData(user)
              this.$router.go()
            }
	      	})
    	}
    },
    goToSignup () {
      if (this.signup_email === ''){
        this.email_err = true
      } else {
        let email = { email: this.signup_email }
        AppService.checkEmail(email).then(res => {
            console.log('checking email res', res.data)
            if (res.data.status === 'fail') {
                this.email_err = true
                this.email_err_msg = res.data.message
            } else {
                this.custom_signup = true
                this.email_err = false
                this.signup.email = this.signup_email
            }
        })
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
            if (res.data.status === 'success') {
                localStorage.setItem('user', JSON.stringify(res.data.data))
                let user = JSON.parse(localStorage.getItem('user'))
                this.setUserData(user)
                this.$router.go()
            }
        })
      }
    },
    openLoginModal () {
    	this.$refs.login_modal.show()
    },
    clickSignupLink () {
    	this.$refs.login_modal.hide()
    	this.$refs.signup_modal.show()
    },
    checkUserSession () {
    	if (localStorage.user) {
    		this.userLoggedin = true
    	}
    },
    setUserData (user) {
    	this.user_icon = user.profile_pic
    },
    onLogout () {
    	localStorage.clear()
      // this.$router.push('/')
      window.location.href = "/"
    },
    goToUserProfile () {
      this.$router.push('/user_profile')
    }
  },
  mounted () {

    this.fbInit()
    this.checkUserSession()

  	let user = JSON.parse(localStorage.getItem('user'))
    // console.log('localStorage user', user)
    if (user != null) {
      this.setUserData(user)
    }

    gapi.load('auth2', function() {
      gapi.auth2.init({
          client_id: '266477204854-qhppbtd5r0l1laeu703bl7m0m6068si0.apps.googleusercontent.com',
          //This two lines are important not to get profile info from your users
          fetch_basic_profile: true,
          scope: 'email'
      });        
    });
    

  	var pathname = window.location.hash
  	if( pathname.indexOf('become_host') > -1 ) {
  		this.head_search = true
  	}
  }
}
</script>

<style scoped>
.home_nav_bar {
	padding: 0rem 0rem !important;
	background-color: #7f8442 !important;
}
.home_nav_bar .ml-auto a.nav-link {
	color: #fff;
	font-size: 15px !important;
	font-weight: bold;
}
.home_nav_bar a.navbar-brand {
	margin-left: 1%;
}
.home_nav_bar .ml-auto li:hover {
	border-bottom: 2px solid #fff;
}
.home_nav_bar .ml-auto li {
  border-bottom: 2px solid transparent;
}
.home_nav_bar .ml-auto li.nav_item {
    padding-top: 5%;
}
.head_search {
	padding: 10px;
	border: none;
	border-radius: 0px;
	width: 160%;
	transition: 1s;
}
.goto_signup_btn, .submit_signup_btn {
  margin-top: 2%;
}
.signup_form input {
  margin-top: 2%;
}
#login_modal input {
	margin-top: 2%;
}
#login_modal #cust_login_btn {
	margin-top: 2%;
}
.signup_link {
	margin-top: 2%;
	text-align: center;
}
.user_img {
	width: 30px;
	border-radius: 15px;
  border: 2px solid #fff;
  height: 30px;
}
.user_dropdown {
	margin: 0px !important;
}
.navbar .dropdown-menu a {
    padding: 0px 0px 0px 10px;
}
div[style] {
    left: -106px !important;
}
</style>
