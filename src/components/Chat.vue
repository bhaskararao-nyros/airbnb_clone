<template>
	<div class="chat">
		<div class="head_component">
			<HeaderComponent ref="headerComp" />
		</div>
		<div class="chat_room">
			<b-row>
				<b-col cols="3">
					<ul class="users_list">
						<li><b-navbar toggleable="md" type="dark" variant="primary">
						<b-navbar-brand>Users</b-navbar-brand>
					</b-navbar></li>
						<li v-for="user in users" v-if="user._id !== loggedin_user._id" :class="{ active_user: user._id === active_user_id }" @click="activeUserChat(user)" :key="user._id">{{ user.firstname }}</li>
					</ul>
				</b-col>
				<b-col>
					<b-navbar toggleable="md" type="dark" variant="primary">
						<b-navbar-brand href="#">{{ active_chat_user }}</b-navbar-brand>
					</b-navbar>
					<div class="messages_blk">
						<div v-for="(chat, index) in chats" class="message_class " :class="{ loggedin_user_class: loggedin_user._id === chat.user_id._id }" v-if="active_chat_user !== 'No chat'">
							<span class="chat_username">{{ chat_user_id === chat.user_id._id ? '' : chat.user_id.firstname === loggedin_user.firstname ? 'You' :  chat.user_id.firstname }}</span>
							<p class="message_tag">{{ chat.message }}</p>
							<span class="chat_username">{{ chatUsername(chat.user_id._id) }}</span>
						</div>
						<div v-if="active_chat_user === 'No chat'">
							Select users to start chat
						</div>
					</div>
					<div class="messages_input">
						<input type="text" id="chat_input" name="chat_input" @keyup.enter="submitMessage" v-model="input_message" placeholder="Type here">
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import AppService from '@/services/AppService'

export default {
  name: 'Chat',
  data () {
    return {
    	users:[],
    	active_chat_user:'No chat',
    	active_user_id:'',
    	input_message:'',
    	loggedin_user: JSON.parse(localStorage.getItem('user')),
    	chat_user_id:'',
    	chats:[]
    }
  },
  methods: {
  	getUsers () {
  		AppService.getAllUsers().then(res => {
  			this.users = res.data.data
  		})
  	},
  	activeUserChat (user) {
  		this.active_chat_user = user.firstname
  		this.active_user_id = user._id
  		let obj = { user_id: this.loggedin_user._id, receiver_id: user._id }

  		AppService.getSoloChat(obj).then(res => {
  			console.log('get solo chat', res.data)
  			this.chats = res.data.data
  		})
  	},
  	chatUsername (user_id) {
  		this.chat_user_id = user_id
  	},
  	submitMessage () {
  		let data = { user_id: this.loggedin_user._id, message: this.input_message, receiver_id: this.active_user_id, date: Date.now() }

  		// console.log('data--------', data)
  		this.$socket.emit('send_message', data)
  		this.input_message = ''
  	}
  },
  mounted () {

  	if (localStorage.user) {
		this.getUsers()

	  	this.$socket.on('onload_chat', (data)=> {
	  		console.log('on load chat data')
	  		this.chats = data
	  	});

	  	this.$socket.on('messages', (data)=> {
	  		this.chats.push(data)
	  		console.log('on send message')
	  	});
	} else {
		this.$refs.headerComp.openLoginModal()
	}
  },
  computed: {
 
  },
  components: {
  	HeaderComponent,
    FooterComponent
  }
}

</script>
<style>
.head_component {
	background-color: #a4a77f;
}
.messages_blk {
	height: 550px;
	background-color: #d8e2f3;
	padding: 2%;
	overflow: scroll;
}
.chat_room {
	margin-right: 5%;
	margin-left: 5%;
	margin-top: 1%;
	background-color: #f2f2f2;
	padding: 2%;
	min-height: 720px;
	padding-left: 0px !important;
}
.users_list li {
	list-style: none;
	padding: 5%;
	min-height: 50px;
	background-color: #d8e2f3;
	border-bottom: 1px solid #fff;
	cursor: pointer;
}
.users_list li:hover {
	background-color: #9aaecf;
}
.users_list {
	min-height: 655px;
	background-color: #d8e2f3;
	margin-left: 10%;
	padding-left: 0px;
}
#chat_input {
	height: 50px;
	padding: 1%;
	border-radius: 0px;
	border: 1px solid #ccc;
	width: 100%;
}
.users_list li.active_user {
	background-color: #9aaecf !important;
}
.message_tag {
	padding: 10px;
	width: fit-content;
	background-color: #f8e9b7;
	border-radius: 5px;
	border: 1px solid #ccc;
	color: #473838;
	position: relative;
	margin-bottom: 0px;
}
.chat_username {
	font-size: 12px;
	font-weight: bold;
	color: #473838;
}
.loggedin_user_class {
	float: right;
}
.loggedin_user_class .message_tag {
	background-color: #fff;
}
.message_class {
	clear: both;
}
</style>