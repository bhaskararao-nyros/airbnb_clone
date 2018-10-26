<template>
	<div class="listings">
		<div class="head_component">
			<HeaderComponent ref="headerComp" />
		</div>
	  	<div class="notifications_blk">
	  		<b-card-group deck>
			  <b-card header="<b>Notifications</b>">
			    <b-list-group>
				  <b-list-group-item variant="dark" class="d-flex justify-content-between align-items-center">
				    <span><b>Listing Name</b></span>
				    <span><b>Reason</b></span>
				  </b-list-group-item>
				  <b-list-group-item v-for="notif in notifications" :key="notif._id" class="d-flex justify-content-between align-items-center">
				    <span>{{ notif.listing_id.name }}</span>
				    <span>{{ notif.reason }}</span>
				  </b-list-group-item>
				  </b-list-group-item>
				</b-list-group>
			  </b-card>
			</b-card-group>
		</div>
		<FooterComponent/>
	</div>
</template>
<script>
	import HeaderComponent from '@/components/Header'
	import FooterComponent from '@/components/Footer'
	import AppService from '@/services/AppService'

export default {
  name: 'Notifications',
  data () {
    return {
    	notifications:[]
    }
  },
  methods: {
  	getNotifications (user_id) {
  		let data = { user_id: user_id }
	    AppService.getNotifications(data).then(res => {
	        console.log('get notifications res', res.data.data)
	        this.notifications = res.data.data
	    })
  	},
  	setNotifAsViewed (user_id) {
  		let data = { user_id: user_id }
	    AppService.setNotifAsViewed(data).then(res => {
	        console.log('Notifications set as viewed')
	    })
  	}
  },
  mounted () {

  	let user = JSON.parse(localStorage.getItem('user'))

  	this.setNotifAsViewed(user._id)
  	this.getNotifications(user._id)
  },
  components: {
  	HeaderComponent,
  	FooterComponent
  }
}
</script>
<style scoped>
	.head_component {
		background-color: #a4a77f;
	}
	.notifications_blk {
		margin-right: 5%;
		margin-left: 5%;
		margin-top: 1%;
		background-color: #f2f2f2;
		padding: 2%;
		min-height: 430px;
	}
</style>