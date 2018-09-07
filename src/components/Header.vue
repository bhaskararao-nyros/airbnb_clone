<template>
  <div>
  	<b-navbar class="home_nav_bar" toggleable="md" type="dark" variant="info">

	  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

	  <b-navbar-brand href="#/"><img src="../assets/img/logo.png" width="40px"></b-navbar-brand>

	  <b-collapse is-nav id="nav_collapse">
	  	<b-navbar-nav>
	      <b-nav-item v-if="head_search"><input type="text" class="head_search" name="search" placeholder="Try India homes" @focus="expandSearch()" id="head_search" @blur="normalSearch()" ref="head_autocomplete"></b-nav-item>
	    </b-navbar-nav>

	    <!-- Right aligned nav items -->
	    <b-navbar-nav class="ml-auto">
	    	<b-nav-item href="#/become_host">Become a host</b-nav-item>
	      	<b-nav-item href="#">Earn credit</b-nav-item>
	      	<b-nav-item href="#">Help</b-nav-item>
	      	<b-nav-item href="#" v-b-modal.signup_modal>Sign up</b-nav-item>
	      	<b-nav-item href="#" v-b-modal.login_modal>Log in</b-nav-item>
	    </b-navbar-nav>

	  </b-collapse>
	</b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    	head_search:false,
    }
  },
  methods: {
  	expandSearch () {
  		document.getElementById('head_search').style.width = "260%";
  		var autocomplete = new google.maps.places.Autocomplete(
	      (this.$refs.head_autocomplete),
	      {types: ['geocode']})
  	},
  	normalSearch () {
  		document.getElementById('head_search').style.width = "160%";
  	}
  },
  mounted () {

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
	background-color: transparent !important;
}
.home_nav_bar .ml-auto a {
	color: #fff;
	font-size: 15px !important;
	padding-right: 1rem !important;
	padding-top: 27px;
	padding-bottom: 27px;
	border-bottom: 2px solid transparent;
	font-weight: bold;
}
.home_nav_bar a.navbar-brand {
	margin-left: 1%;
}
.home_nav_bar .ml-auto a:hover {
	border-bottom: 2px solid;
}
.head_search {
	padding: 10px;
	border: none;
	border-radius: 0px;
	width: 160%;
	transition: 1s;
}
</style>
