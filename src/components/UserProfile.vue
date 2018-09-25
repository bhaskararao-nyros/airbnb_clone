<template>
<div class="listings">
	<div class="head_component">
		<HeaderComponent ref="headerComp" />
	</div>
	  	<div class="user_profile_blk">
		  	<b-row class="user_profile_row">
		        <b-col class="image_col">
		        	<img v-if="user.profile_pic !== null" class="user_img" :src="user.profile_pic">
		        	<img v-else class="user_img" src="../assets/img/user.png">
		        </b-col>
        		<b-col cols="8" class="username_col">
        			<h3>{{ user.firstname }} {{ user.lastname }} </h3>
        			<div class="edit_btn">
        				<b-button variant="primary" size="sm">Edit Info</b-button>
        			</div>
        		</b-col>
		    </b-row>
		    <p>{{ user }}</p>
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
    	user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
  	
  },
  mounted () {
  	

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
.user_profile_blk {
	margin-right: 5%;
	margin-left: 5%;
	margin-top: 1%;
	background-color: #dcdec5;
	padding: 2%;
}
.user_img {
	width: 100px;
	border-radius: 49%;
	border: 2px solid #fff;
	padding: 1px;
}
.image_col {
	max-width: 11% !important;
}
.username_col h3 {
	padding-top: 2%;
}
.edit_btn {
	position: absolute;
	float: right;
}
.user_profile_row {
	border-bottom: 1px solid #fff;
	padding-bottom: 1%;
}


</style>
