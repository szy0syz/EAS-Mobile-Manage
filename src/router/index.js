import Vue from 'vue'
import Router from 'vue-router'

// import Login from '@/page/login'
// import Home from '@/page/home'
// import Manage from '@/page/manage'
// import UserList from '@/page/userlist'

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList')
const permission = r => require.ensure([], () => r(require('@/page/permission')), 'permission')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [{  // 从这里开始，里面的都是子路由数据。
        path: '',
        component: home, // 子路由后台首页单独放home里
        meta: []
      }, {
        path: '/userList',
        name: 'userList',
        component: userList,
        meta: ['系统设置', '用户列表']
      }, {
        path: '/permission',
        name: 'permission',
        component: permission,
        meta: ['系统设置', '权限管理']
      }]
    }
  ]
})
