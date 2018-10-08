<template>
<div>
  <div class="head_component">
    <HeaderComponent ref="headerComp" />
  </div>
  <div class="user_profile_blk">
  <div class="text-center"><h4>{{ host_name }}</h4></div>
    <b-row>
          <b-col>
            <span>Name of the host :</span>
            <input type="text" name="host_name" placeholder="Name your host" class="form-control" v-model="host_name">
            <span>Location :</span>
            <input type="text" name="property_location" id="fillout_location" @focus="filloutSearch" ref="fillout_search" class="form-control" v-model="property_location">
            <span>Select guests :</span>
            <select class="fillout_select" @change="changeGuests" v-model="guest_count">
              <option v-for="guest in guests" :value="guest">{{ guest }} Guests</option>
            </select><br>
            <span>Select room type :</span>
            <select id="rooms_select" class="fillout_select" @change="changeRooms" v-model="room_price">
              <option v-for="room in rooms" :value="room.price">{{ room.name }}</option>
            </select><br>
            <p class="price_tag"><small>Total price :</small> &#x20B9;{{ total_price }}</p>
            <p class="text-danger" v-if="host_name_err">Property name required</p>
            <span class="bg-color">Choose number of bedrooms :</span> 
            <p class="ml-3"><b-button variant="outline-primary" @click="decreBedrms" class="beds_btns">-</b-button> {{ bedrooms.length }} <b-button variant="outline-primary" @click="increBedrms" class="beds_btns">+</b-button></p>
            <div v-for="(bedrm, index) in bedrooms" :key="index">
         
          <b-btn size="sm" variant="outline-success" v-b-toggle="'bedroom'+ index" class="m-1">Bed Room {{ index + 1 }}</b-btn>

          
          <b-collapse :id="'bedroom'+ index">
            <b-card>
              <p class="ml-3">Queen Bed <b-button variant="outline-primary" @click="decreBeds('queen', index)" class="beds_btns">-</b-button> {{ bedrm.queen }} <b-button variant="outline-primary" @click="increBeds('queen', index)" class="beds_btns">+</b-button></p>
              <p class="ml-3">Double Bed <b-button variant="outline-primary" @click="decreBeds('double', index)" class="beds_btns">-</b-button> {{ bedrm.double }} <b-button variant="outline-primary" @click="increBeds('double', index)" class="beds_btns">+</b-button></p>
              <p class="ml-3">Single Bed <b-button variant="outline-primary" @click="decreBeds('single', index)" class="beds_btns">-</b-button> {{ bedrm.single }} <b-button variant="outline-primary" @click="increBeds('single', index)" class="beds_btns">+</b-button></p>
              <p class="ml-3">Sofa Bed <b-button variant="outline-primary" @click="decreBeds('sofa', index)" class="beds_btns">-</b-button> {{ bedrm.sofa }} <b-button variant="outline-primary" @click="increBeds('sofa', index)" class="beds_btns">+</b-button></p>
            </b-card>
          </b-collapse>
        </div>

        <span class="bg-color">Choose number of bathrooms :</span> 
            <p class="ml-3"><b-button variant="outline-primary" @click="decreBathrms" class="beds_btns">-</b-button> {{ bathrooms.length }} <b-button variant="outline-primary" @click="increBathrms" class="beds_btns">+</b-button></p>

            <div v-for="(bathrm, index) in bathrooms" :key="'a'+ index">
         
          <b-btn size="sm" variant="outline-success" v-b-toggle="'bathroom'+ index" class="m-1">Bath Room {{ index + 1 }}</b-btn>

          
          <b-collapse :id="'bathroom'+ index">
            <b-card>
              <label>Shared :</label> &nbsp;&nbsp;
              <b-form-radio-group id="radios2" v-model="bathrm.shared" :name="'shared' + index">
                <b-form-radio value="yes">Yes</b-form-radio>
                <b-form-radio value="no">No</b-form-radio>
              </b-form-radio-group>
            </b-card>
          </b-collapse>
        </div>
        <label style="font-weight: bold">Amentities :</label>
            <div class="amentities">
              <b-form-checkbox id="wifi"
                      v-model="amentities.wifi">
                Wi-fi
            </b-form-checkbox><br>
            <b-form-checkbox id="tv"
                      v-model="amentities.tv">
                Tv
            </b-form-checkbox><br>
            <b-form-checkbox id="ac"
                      v-model="amentities.ac">
                Ac
            </b-form-checkbox><br>
            <b-form-checkbox id="iron"
                      v-model="amentities.iron">
                Iron
            </b-form-checkbox><br>
            <b-form-checkbox id="pets"
                      v-model="amentities.pets">
                Pets
            </b-form-checkbox><br>
            <b-form-checkbox id="hair_dryer"
                      v-model="amentities.hair_dryer">
                Hair Dryer
            </b-form-checkbox>
            </div>
            <label style="font-weight: bold">Safety amentities :</label>
            <div class="safety_amentities">
              <b-form-checkbox id="first_aid_kit"
                      v-model="safety_amentities.first_aid_kit">
                First Aid Kit
            </b-form-checkbox><br>
            <b-form-checkbox id="fire_safety"
                      v-model="safety_amentities.fire_safety">
                Fire Safety
            </b-form-checkbox>
            </div>

            <label style="font-weight: bold">Rules :</label>
            <div class="rules">
              <b-form-checkbox id="smoking"
                      v-model="rules.smoking">
                Smoking
            </b-form-checkbox><br>
            <b-form-checkbox id="parties"
                      v-model="rules.parties">
                Parties
            </b-form-checkbox><br>
            <b-form-checkbox id="events"
                      v-model="rules.events">
                Events
            </b-form-checkbox>
            </div>

            <label style="font-weight: bold">Allowed spaces :</label>
            <div class="allowed_spaces">
              <b-form-checkbox id="pvt_living_room"
                      v-model="allowed_spaces.pvt_living_room">
                Private living room
            </b-form-checkbox><br>
            <b-form-checkbox id="pool"
                      v-model="allowed_spaces.pool">
                Pool
            </b-form-checkbox><br>
            <b-form-checkbox id="kitchen"
                      v-model="allowed_spaces.kitchen">
                Kitchen
            </b-form-checkbox><br>
            <b-form-checkbox id="laundry_washer"
                      v-model="allowed_spaces.laundry_washer">
                Laundry washer
            </b-form-checkbox><br>
            <b-form-checkbox id="laundry_dryer"
                      v-model="allowed_spaces.laundry_dryer">
                Laundry dryer
            </b-form-checkbox><br>
            <b-form-checkbox id="hot_tub"
                      v-model="allowed_spaces.hot_tub">
                Hot tub
            </b-form-checkbox><br>
            <b-form-checkbox id="gym"
                      v-model="allowed_spaces.gym">
                Gym
            </b-form-checkbox>
            </div>
            <div>
              Upload some property images :
              <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="onFilePicked"
                    multiple
                ><br>
                <b-button size="sm" class="upload_image_btn ml-3" variant="outline-primary" @click="uploadImages">Upload Images</b-button>
                <p class="text-danger" v-if="images_err">Property images required</p>
            </div>
            <div class="property_desc">
              Property description :
              <b-form-textarea
                      v-model="property_desc"
                      placeholder="Enter something about property"
                      :rows="3"
                      class="desc_textarea"
                      :max-rows="6">
            </b-form-textarea>
            <p class="text-danger" v-if="description_err">Property description required</p>
            </div>
          </b-col>
          <b-col class="fillout_right_blk">
            <div class="guests_blk">
              <div v-if="guest_count <= 4">
                <span>Number of guests allowed : </span>
                <span v-for="n in guest_count" :key="n">
                  <img src="../assets/img/guest.jpg" class="guest_img">
                </span>
                  
              </div>
              <div v-if="guest_count > 4">
                Number of guests allowed : 
                <span v-for="n in guest_count" v-if="n <= 3" :key="'b'+ n">
                  <img src="../assets/img/guest.jpg" class="guest_img">
                </span>... + {{ guest_count }}
              </div>
            </div>
            <div id="room_type_blk">
              <p v-if="room_price === 15000">Room type : <span class="badge">Entire Place</span></p>
              <p v-if="room_price === 7500">Room type : <span class="badge">Private Room</span></p>
              <p v-if="room_price === 10000">Room type : <span class="badge">Shared Room</span></p>
            </div>
            <div>
              <p>Total price : <span class="badge">&#x20B9; {{ total_price }}</span></p>
            </div>
            <div>
              <div v-for="(bedrm, index) in bedrooms" class="bedrooms_div">
                <span style="font-weight: bold">Bed Room{{ index + 1 }} - {{ bedrm.single + bedrm.double + bedrm.sofa + bedrm.queen }}</span><br>
                <span>Single Beds: {{ bedrm.single }}<br> Double Beds: {{ bedrm.double }} <br>Sofa Beds: {{ bedrm.sofa }}<br> Queen Beds: {{ bedrm.queen }}</span>
              </div>
            </div>

            <div>
              <div v-for="(bathrm, index) in bathrooms" class="bedrooms_div">
                <span>Bath Room{{ index + 1 }} - {{ bathrm.shared === 'yes' ? "Shared" : "Private" }}</span>
              </div>
            </div>
            <div class="amentities">
              <label style="font-weight: bold">Amentities : </label><br>
              <span v-if="amentities.wifi">Wi-fi</span><br>
              <span v-if="amentities.tv">Tv</span><br>
              <span v-if="amentities.ac">Ac</span><br>
              <span v-if="amentities.iron">Iron</span><br>
              <span v-if="amentities.pets">Pets</span><br>
              <span v-if="amentities.hair_dryer">Hair dryer</span>
            </div>

            <div class="safety_amentities">
              <label style="font-weight: bold">Safety amentities : </label><br>
              <span v-if="safety_amentities.first_aid_kit">First aid kit</span><br>
              <span v-if="safety_amentities.fire_safety">Fire Safety</span>
            </div>

            <div class="rules">
              <label style="font-weight: bold">Rules : </label><br>
              <span v-if="rules.smoking">Smoking</span><br>
              <span v-if="rules.events">Events</span><br>
              <span v-if="rules.parties">Parties</span>
            </div>

            <div class="allowed_spaces">
              <label style="font-weight: bold">Allowed spaces : </label><br>
              <span v-if="allowed_spaces.pool">Pool</span><br>
              <span v-if="allowed_spaces.kitchen">Kitchen</span><br>
              <span v-if="allowed_spaces.laundry_washer">Laundry washer</span><br>
              <span v-if="allowed_spaces.laundry_dryer">Laundry dryer</span><br>
              <span v-if="allowed_spaces.hot_tub">Hot tub</span><br>
              <span v-if="allowed_spaces.gym">Gym</span>
            </div>

            <div v-if="image_url_arr.length != 0 ">
              Property Images : <br>
              <span v-for="image in image_url_arr">
                <b-img thumbnail fluid :src="image.url" alt="Thumbnail" class="property_img" />
                <img src="../assets/img/close.png" width="20px" height="20px" class="del_img_btn" @click="delHostImage(image)">
              </span>
            </div>
            <div v-if="property_desc != ''">
              Property description : 
              <p class="description_txt">{{ property_desc }}</p>
            </div>
            
          </b-col>
      </b-row>
      <div class="text-center">
        <b-button variant="primary" @click="updateHost" size="sm">Update</b-button>
      </div>
  </div>
  <FooterComponent />
</div>
</template>
<script>

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import AppService from '@/services/AppService'

export default {
  name: 'EditUserListing',
  data () {
    return {
    	guests:[2,4,6,8,10,12,14],
      rooms:[
        { name: 'Entire Place', value: 'entire', price: 15000 },
        { name: 'Private Room', value: 'private', price: 10000 },
        { name: 'Shared Room', value: 'shared', price: 7500 }
      ],
      total_price: '',
      fillout_search_addr: '',
      bedrooms: [{ single: 0, double: 0, sofa: 0, queen: 0 }],
      bathrooms: [{ shared: "no" }],
      amentities: { wifi: true, tv: true, ac: false, hair_dryer: false, pets: false, iron: false },
      safety_amentities: { first_aid_kit: true, fire_safety: true },
      rules: { smoking: true, events: false, parties: true },
      allowed_spaces: { pvt_living_room: false, pool: true, kitchen: false, gym: true, laundry_washer: false, laundry_dryer: false, hot_tub: false },
      image_url_arr: [],
      property_desc:'',
      images_err: false,
      property_location:'',
      map_coordinates:{ lat:'', lng: ''},
      showDismissibleAlert: false,
      host_name: '',
      host_name_err: false,
      description_err:'',
      guest_count: 2,
      room_price: 10000,
    }
  },
  methods: {
  	getListingDetails () {
      let host_id = { id : this.$route.params.id }
      AppService.getSingleHome(host_id).then(res => {
        console.log('edit single host response', res.data.data)
        this.image_url_arr = res.data.data.images
        this.map_coordinates = res.data.data.map_coordinates
        this.bedrooms = res.data.data.bed_rooms
        this.bathrooms = res.data.data.bath_rooms
        this.amentities = res.data.data.amentities
        this.safety_amentities = res.data.data.safety_amentities
        this.rules = res.data.data.rules
        this.allowed_spaces = res.data.data.allowed_spaces
        this.host_name = res.data.data.name
        this.property_desc = res.data.data.about
        this.total_price = res.data.data.price
        this.property_location = res.data.data.location
        this.guest_count = res.data.data.guests
        if (res.data.data.host_type === "Entire Place") {
          this.room_price = 15000
        }
        if (res.data.data.host_type === "Private Room") {
          this.room_price = 10000
        }
        if (res.data.data.host_type === "Shared Room") {
          this.room_price = 7500
        }
      })
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

      // this.property_location = document.getElementById('fillout_location').value
      if (localStorage.user) {
        this.becomehost_block = false
      } else {
        this.$refs.headerComp.openLoginModal()
      }
    },
    filloutSearch () {
      var autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.fillout_search),
      {types: ['geocode']})

      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          const place = autocomplete.getPlace()
          this.property_location = place.formatted_address
          this.map_coordinates = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
        })
    },
    decreBedrms () {
      this.bedrooms.pop()
    },
    increBedrms () {
      let obj = { queen: 0, single: 0, double: 0, sofa: 0 }
      this.bedrooms.push(obj)
    },
    increBeds (name, index) {
      this.bedrooms[index][name] = this.bedrooms[index][name] + 1; 
    },
    decreBeds (name, index) {
      this.bedrooms[index][name] = this.bedrooms[index][name] - 1;
    },
    increBathrms () {
      let obj = { shared: "no" }
      this.bathrooms.push(obj)
    },
    decreBathrms () {
      this.bathrooms.pop()
    },
    uploadImages () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      for (var i = 0; i < files.length; i++) {
        if (files[i] !== undefined) {
            var imageName = files[i].name
            if (imageName.lastIndexOf('.') <= 0) {
              return
            }
            const fr = new FileReader()
            fr.readAsDataURL(files[i])
            fr.addEventListener('load', () => {
              this.image_url_arr.push({ url: fr.result })
            })
        }
      }

      console.log('files array', this.image_url_arr)
    },
    delHostImage (img_obj) {
      let index = this.image_url_arr.indexOf(img_obj)
      this.image_url_arr.splice(index, 1)
      console.log('images arr', this.image_url_arr)
    },
    updateHost () {
      let host_type = document.getElementById('room_type_blk').children[0].children[0].textContent

      let data = {
        id: this.$route.params.id,
        name: this.host_name,
        guests: this.guest_count,
        host_type: host_type,
        location: this.property_location,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        images: this.image_url_arr,
        about: this.property_desc,
        total_price: this.total_price,
        map_coordinates: this.map_coordinates,
        amentities: this.amentities,
        safety_amentities: this.safety_amentities,
        rules: this.rules,
        allowed_spaces: this.allowed_spaces
      }
      AppService.updateHostDetails(data).then(res => {
        console.log('update host res', res)
        if (res.status === "success") {
          this.$router.push('/user_profile')
        }
      })
    }
  },
  beforeMount () {
    this.getListingDetails()
  },
  computed: {
  	
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
.user_profile_blk {
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 1%;
  background-color: #dcdec5;
  padding: 2%;
  height: 720px;
  overflow: scroll;
}
.head_component {
  background-color: #a4a77f;
}
.becomehost_blk {
  /*background: url('../assets/img/home_5.png') no-repeat center;*/
  background-color: #dcdec5;
  height: 723px;
}
.fillout_blk {
  background-color: #fff;
  padding: 8%;
  margin: 15%;
  border: 1px solid #696e35;
}
.fillout_search {
  width: 100%;
  padding: 3%;
  border: 1px solid #ccc;
  border-radius: 0px;
}
.fillout_select {
    width: 70%;
    border-radius: 0px;
    border: 1px solid #ccc;
    padding: 1%;
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
  font-size: 30px;
  font-weight: bold;
  opacity: 0.7;
}
.row {
  margin: 0px !important;
}
.fillout_blk_left {
  margin: 40% 0% 0% 15%;
  color: #696e35;
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
.becomehost_fillout {
  margin: 5% 10% 0% 10%;
  background-color: #e9e9e9;
  padding: 5%;
  height: 650px;
  overflow: scroll;
}
.guest_img {
  width: 50px;
  opacity: 0.7;
  margin-right: 1%;
  border: 1px solid green;
  padding: 5px;
}
.beds_btns {
  border-radius: 21px;
  padding: 0px;
  padding-left: 14px;
  padding-right: 11px;
  font-size: 25px;
  font-weight: bold;
}
.upload_image_btn {
  border-radius: 17px;
}
.property_img {
  width: 150px;
  height: 150px;
}
.ml-3 {
  margin-left: 3%;
}
.badge {
  font-size: 100% !important;
  color: #585b5d !important;
}
.fillout_right_blk div {
  margin-top: 3%;
}
.list_heading {
  margin-bottom: 2%;
}
.desc_textarea {
  width: 75%;
}
.description_txt {
  border: 1px solid #ccc;
  padding: 2%;
}
.alert_blk {
  text-align: center;
}
.bedrooms_div, .amentities, .safety_amentities, .rules, .allowed_spaces {
  background-color: #fff;
  padding: 10px;
}
.del_img_btn {
  position: relative;
  top: -63px;
  left: -26px;
  cursor: pointer;
}
</style>
