import axios from 'axios'
import Vue from 'vue'
let v = new Vue()
const baseUrl = 'http://47.100.30.67:7001/'
const http = (api, id, data = {}, cb) => {
  let url = ''
  if (id === null) {
    url = baseUrl + api.path
  } else {
    url = baseUrl + api.path + '/' + id
  }
  axios({url: url, method: api.method, data: data})
    .then(res => {
      cb && cb(res.data)
    })

    .catch(err => {
      v.$message({
        message: err.response.data.res,
        type: 'warning'
      })
    })
}
const fetch = (api, id, data = {}, cb) => {
  let url = ''
  if (id === null) {
    url = baseUrl + api.path
  } else {
    url = baseUrl + api.path + '/' + id
  }

  axios({url: url, method: api.method, params: data})
    .then(res => {
      cb && cb(res.data)
    })

    .catch(err => {
      console.log(err)
      v.$message({
        message: err.response.data.res,
        type: 'warning'
      })
    })
}
export {http, fetch}
