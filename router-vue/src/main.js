// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Index from './index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: { App },
  // 挂载路由
  router: Router,
  template: '<App/>'
})
