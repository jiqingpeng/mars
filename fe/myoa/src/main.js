// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {http, fetch} from '../src/libs/http.js'
import api from '../src/libs/api.js'
import store from './store'
Vue.use(ElementUI)

Vue.prototype.http = http
Vue.prototype.fetch = fetch
Vue.prototype.api = api
Vue.config.productionTip = false
console.log(process.env.NODE_ENV, 2)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
