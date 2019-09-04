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
    title: '账号',
    name: 'account',
    icon: 'el-icon-tickets',
    component: () => import('@/views/Home.vue'),
    redirect: 'account/info',
    children: [
      {
        path: '/account/info',
        title: '账号信息',
        name: 'accountinfo',
        component: () => import('@/views/Account/Account.vue')
      }
    ]
  },
  {
    path: '/article',
    title: '文章',
    name: 'article',
    icon: 'el-icon-tickets',
    component: () => import('@/views/Home.vue'),
    redirect: 'article/info',
    children: [
      {
        path: '/article/info',
        title: '文章信息',
        name: 'articleinfo',
        component: () => import('@/views/Article/Article.vue')
      }
    ]
  }
]

export default new Router({
  routes: menuRouter
})
export {menuRouter}
