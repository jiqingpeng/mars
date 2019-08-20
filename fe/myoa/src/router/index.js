import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: () => import('@/views/Login.vue')
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '/',
          title: '用户',
          name: 'user',
          component: () => import('@/views/User.vue')

        }
      ]
    }
  ]
})
