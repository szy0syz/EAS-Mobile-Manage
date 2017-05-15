import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/home'
import Manage from '@/page/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      children: [{
        path: '',
        component: Home, // 后台首页单独放home里
        meta: []
        // meta: [{'name': 'szy'}]
      }]
    }
  ]
})
