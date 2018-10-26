import Api from '@/services/Api'

export default {

  fbSignup (params) {
    return Api().post('/signup', params)
  },
  gmailSignup (params) {
    return Api().post('/signup', params)
  },
  customSignup (params) {
    return Api().post('/signup', params)
  },  
  fbLogin (params) {
    return Api().post('/login', params)
  },
  gmailLogin (params) {
    return Api().post('/login', params)
  },
  customLogin (params) {
    return Api().post('/login', params)
  },
  becomeHost (params) {
    return Api().post('/becomehost', params)
  },
  searchHomes (params) {
    return Api().post('/search_home', params) 
  },
  getSingleHome (params) {
    return Api().post('/get_single_home', params) 
  },
  checkEmail (params) {
    return Api().post('/check_custom_signup_email', params) 
  },
  updateUser (params) {
    return Api().post('/update_user', params) 
  },
  getUserListings (params) {
    return Api().post('/get_user_listings', params) 
  },
  updateHostDetails (params) {
    return Api().post('/update_user_listing', params) 
  },
  saveRatingReview (params) {
    return Api().post('/save_user_rating', params) 
  },
  getAllListings () {
    return Api().get('/get_all_listings') 
  },
  getAllUsers () {
    return Api().get('/get_all_users')
  },
  getSoloChat (params) {
    return Api().post('/get_solo_chat', params) 
  },
  getNotifications (params) {
    return Api().post('/get_notifications', params) 
  },
  getNewNotifications (params) {
    return Api().post('/get_new_notifications', params) 
  },
  setNotifAsViewed (params) {
    return Api().post('/set_notif_as_viewed', params) 
  }
}