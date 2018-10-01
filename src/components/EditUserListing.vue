<template>
<div>
  <div class="head_component">
    <HeaderComponent ref="headerComp" />
  </div>
  <div class="user_profile_blk">
    <b-row>
      <b-col>
        <label>aaaaa</label>
        <p><input type="text" name="" class="form-control"></p>
        <label>aaaaa</label>
      </b-col>
      <b-col>
        ccccccc
      </b-col>
    </b-row>
  </div>
</div>
</template>
<script>

import HeaderComponent from '@/components/Header'
import AppService from '@/services/AppService'

export default {
  name: 'EditUserListing',
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
</style>
