import axios from 'axios'
import website from '@/config/website'
import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'
// http request拦截
function getToken() {
  return Cookies.get('saber-access-token')
}
function getCTFToken() {
  return Cookies.get('saber-ctf-token')
}
axios.defaults.withCredentials = true
axios.interceptors.request.use(
  (config) => {
    const meta = config.meta || {}
    const isToken = meta.isToken === false
    const ctfToken = getCTFToken()

    config.headers = {
      'Blade-Auth':
        'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOiJhZG1pbmlzdHJhdG9yQDZjbG91ZCIsInJlYWxfbmFtZSI6Iui2hee6p-euoeeQhuWRmCIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwicG9zdF9pZCI6IjEzNTc1OTQzMjI0MDk3NDIzMzciLCJwZCI6IntibGFkZX1lMzQ3MWUwMjcxOWYzMWJkODNkZmQ3NmY5OWI5MGNlYmYzNDQzMWIwIiwidXNlcl9pZCI6IjEzNTMyNjMyMTc3NzM2NzQ0OTgiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJpc0NoYW5nZVB3ZCI6InJlc2V0Iiwib2F1dGhfaWQiOiIiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJleHAiOjE2NzYwMDg3MjIsImRlcHRfaWQiOiIxMzU3NTkwNjYwMDc4MTk4Nzg2IiwianRpIjoiZjdhY2Y3N2UtYTRkOS00OGRlLTg2OGEtYzgzYjFhMjY2ZTc3IiwiYWNjb3VudCI6ImFkbWluaXN0cmF0b3JANmNsb3VkIn0.DkL3TN59PbA0-yqXwapfAZ883S-Plwg1o8nGwGhm0IE'
    }
    // config.headers = {
    //   'Blade-Auth': 'bearer ' + getToken()
    // }
    let paramValue = sessionStorage.getItem('paramValue')
    let url = ''
    let one = config.url.split('?')[0]
    let two = config.url.split('?')[1]
    if (/^\/sherlock\/api/.test(config.url)) {
      if (config.url.indexOf('?') > -1) {
        url = one + `?sherlockUrl=${paramValue}` + '&' + two
      } else {
        // url = one + `?sherlockUrl=${paramValue}`
        url = one
      }
      config.url = url
      return config
    } else {
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
// http response 拦截
axios.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

export default axios
