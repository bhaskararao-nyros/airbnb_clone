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
  }
}