import axios from 'axios'
import Vue from 'vue'
let v = new Vue()

const http = (api, id, data = {}, cb) => {
  let url = 'http://47.100.30.67:7001/'

  if (id === null) {
    url = url + api.path
  } else {
    url = url + api.path + '/' + id
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
  let url = 'http://47.100.30.67:7001/'

  if (id === null) {
    url = url + api.path
  } else {
    url = url + api.path + '/' + id
  }
  axios({url: url, method: api.method, params: data})
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
export {http, fetch}
