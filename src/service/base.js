import axios from 'axios'

const ERR_OK = 0
const baseURL = "/"

axios.defaults.baseURL = baseURL

// export function get(url, params) {
//   return axios.get(url, {
//     params
//   }).then(res => {
//     let serviceData = res.data
//     if (serviceData.code === ERR_OK) {
//       return serviceData.result
//     }
//   }).catch(e => console.log(e))
// }
export function get(url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}