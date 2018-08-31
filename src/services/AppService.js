import Api from '@/services/Api'

export default {
  addPark (params) {
    return Api().post('/add_park', params)
  },
  getParks () {
    return Api().get('/get_parks')
  },
  updatePark (params) {
    return Api().post('/update_park', params)
  },
  deletePark (params) {
    return Api().post('/delete_park', params)
  },
  addGround (params) {
    return Api().post('/add_ground', params)
  },
  getGrounds () {
    return Api().get('/get_grounds')
  },
  updateGround (params) {
    return Api().post('/update_ground', params)
  },
  deleteGround (params) {
    return Api().post('/delete_ground', params)
  },
  addAdmin (params) {
  	return Api().post('/add_admin', params)
  },
  getAdmins () {
    return Api().get('/get_admins')
  },
  updateAdmin (params) {
    return Api().post('/update_admin', params)
  },
  deleteAdmin (params) {
    return Api().post('/delete_admin', params)
  },
  addSingleSlot (params) {
    return Api().post('/add_single_slot', params)
  },
  addSlotSchedule (params) {
    return Api().post('/add_slot_schedule', params)
  },
  getAvailableSlots () {
    return Api().get('/get_available_slots')
  },
}