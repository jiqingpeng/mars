import axios from 'axios'
import Vue from 'vue'
let v = new Vue()
const http = (params, cb) => {
  console.log(params)
  axios({url: 'http://47.100.30.67:7001/' + params.path}).then(res => {
    cb && cb(res.data)
  }).catch((err) => {
    console.log(err)
    v.$message('这是一条消息提示')
  })
}
export { http }
