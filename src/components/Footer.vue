<template>
	<div>
		<div class="footer_blk">
			<b-row>
				<b-col>
					<ul>
						<li>About</li>
						<li>Services</li>
						<li>Careers</li>
						<li>Contact</li>
						<li>Flyhome offers</li>
						<li>Flyhome discounts</li>
					</ul>
				</b-col>
				<b-col>
					<ul>
						<li>Flyhome</li>
						<li>9193 High Ridge Street</li>
						<li>Indio, CA 92201</li>
						<li>flyhome@support.com</li>
						<li>+ 012558694664</li>
						<li>California, North America</li>
					</ul>
				</b-col>
				<b-col>
					<ul>
						<li>Join our team</li>
						<li>Products</li>
						<li>Clients</li>
						<li>Most visited</li>
						<li>Feedback</li>
						<li>Management</li>
					</ul>
				</b-col>
			</b-row>
			<div class="social_icons">
				<img src="../assets/img/fb.png" width="30px" height="30px">
				<img src="../assets/img/insta.png" width="30px" height="30px">
				<img src="../assets/img/li.png" width="30px" height="30px">
				<img src="../assets/img/google.png" width="30px" height="30px">
				<img src="../assets/img/watsapp.png" width="30px" height="30px">
				<img src="../assets/img/twitter.png" width="30px" height="30px">
				<img src="../assets/img/pin.jpeg" width="30px" height="30px">
			</div>
			<div class="copy_right">Copy right flyhome</div>
		</div>
	</div>
</template>
<style>
.row {
	margin: 0px !important;
}
.footer_blk {
	padding: 2%;
	background-color: #7d833e;
	text-align: center;
}
.footer_blk ul li {
	list-style: none;
	color: #f2f2f2;
	cursor: pointer;
}
.footer_blk ul li:hover {
	font-size: 15px;
	transition: 0.2s;
	color: orange;
}
.copy_right {
	margin-top: 1%;
	color: #f2f2f2;
}
</style>
<script>

export default {
  name: 'Footer',
  data () {
    return {
    	
    }
  },
  methods: {
  	
  },
  mounted () {
  	
  },
  computed: {
  	
  },
  components: {
  }
}