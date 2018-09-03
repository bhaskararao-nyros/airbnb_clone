import Api from '@/services/Api'

export default {
  fbLogin (params) {
    return Api().post('/signup', params)
  },
  // getParks () {
  //   return Api().get('/get_parks')
  // },
}