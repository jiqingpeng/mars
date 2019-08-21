import axios from 'axios'
import Vue from 'vue'
let v = new Vue()
const http = (api, id, data = {}, cb) => {
  console.log(api)
  let url = ' '
  if (id === null) {
    url = 'http://47.100.30.67:7001/' + api.path
  } else {
    url = 'http://47.100.30.67:7001/' + api.path + '/' + id
  }
  axios({url: url, method: api.method, data}).then(res => {
    cb && cb(res.data)
  }).catch((err) => {
    v.$message({
      message: err.response.data.res,
      type: 'warning'
    })
  })
}
export { http }
