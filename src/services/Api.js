import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://10.90.90.55:8081`
  })
}
