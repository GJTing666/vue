
// 创建路由
// 页面有多少地址就配置多少路由
// 1. 安装vue-router
// 2. 配置路由js文件
// 3. 在入口文件中挂载路由
// 4. 在组件显示的地方挂载标签 router-view
import VueRouter from 'vue-router'
import Vue from 'vue'
import News from '@/components/Index/news.vue'
import Dynamic from '@/components/Dynamic/index.vue'
import Video from '@/components/Dynamic/video.vue'
import Liuyan from '@/components/Dynamic/liuyan.vue'
import Tech from '@/components/Dynamic/tech.vue'
import Pro from '@/components/Dynamic/pro.vue'
import Detail from '@/components/Index/detail.vue'
import User from '@/components/Dynamic/usercenter.vue'
import Store from '@/components/Index/store.vue'
import goodList from '@/components/Index/index.vue'
import Aside from '@/components/Common/aside.vue'
import userLists from '@/user/user.vue'

Vue.use(VueRouter)

export default new VueRouter({
//   routers书写路由表
  routes: [{
    path: '/',
    components: {
      default: News
    }
  }, {
    path: '/goodList',
    component: goodList
  }, {
    path: '/aside',
    component: Aside
  }, {
    path: '/userlists',
    component: userLists
  }, {
    path: '/dynamic',
    component: Dynamic,
    // 嵌套路由
    children: [{
      // 二级路由路径默认为空 继承父级路由
      // 当第一个字符不是‘/’时 也会继承当前路由加上当前字符 ‘tech’
      // / 表示跟父级没有关系
      path: '/dynamic/tech',
      component: Tech
    }, {
      path: '/dynamic/pro',
      component: Pro,
      meta: {
        requireUser: true
      }
    }]
  }, {
    path: '/news',
    component: News
  }, {
    path: '/video',
    component: Video
  }, {
    path: '/liuyan',
    component: Liuyan
  }, {
    path: '/detail/:id',
    component: Detail
  }, {
    path: '/usercenter',
    component: User,
    meta: {
      requireUser: 1
    }
    // 路由守卫
    /*beforeEnter: (to, from, next) => {
      // console.log(to, from)
      let token = window.localStorage.getItem('token')
      if(token){
        next()
      } else {
        next('/')
      }
    }*/
  }, {
    path: '/login',
    component: Tech,
    meta: {
      requireUser: 2
    }
  }, {
    path: '/store',
    component: Store
  }]
})
