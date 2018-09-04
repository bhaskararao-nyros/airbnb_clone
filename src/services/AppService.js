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
}