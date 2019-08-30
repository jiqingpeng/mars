import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const menuRouter = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue')
  // },
  {
    path: '/',
    title: '用户',
    name: 'user',
    icon: 'el-icon-place',
    component: () => import('@/views/Home.vue'),
    redirect: '/user/info',
    children: [
      {
        path: '/user/info',
        title: '用户信息',
        name: 'userinfo',
        component: () => import('@/views/User/User.vue')
      }
    ]
  },
  {
    path: '/account',
    title: '账户',
    name: 'account',
    icon: 'el-icon-tickets',
    component: () => import('@/views/Home.vue'),
    redirect: 'account/info',
    children: [
      {
        path: '/account/info',
        title: '账户信息',
        name: 'accountinfo',
        component: () => import('@/views/Account/Account.vue')
      }
    ]
  }
]

export default new Router({
  routes: menuRouter
})
export {menuRouter}
