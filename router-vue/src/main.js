// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: { App },
  // 挂载路由
  store: store,
  router: Router,
  template: '<App/>'
})

// 全局路由守卫
Router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if(to.meta.requireUser && to.meta.requireUser === 1) {
    // 需要用户登录
    if (token) {
      next()
    }else{
      next('/')
    }
  }else if (to.meta.requireUser && to.meta.requireUser === 2) {
    // 判断是否登录，已登录就不能进入当前页面
    if(token){
      next('/usercenter')
    }else{
      next()
    }
  } else{
    // 不需要登录
    next()
  }
})

