import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path:'/',
    // component:resolve => require(['@/containers/Home/Main'],resolve)
  }
]

const router = new Router({
  mode: 'history',//去掉路由中的#号
  routes
})
export default router;