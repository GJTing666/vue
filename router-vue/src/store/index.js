// 存储数据

// 在组件中，store中的数据是共同的，所有组件都可以访问vue中的数据
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  // 数据 用于多个组件间使用同一个数据
  state: {
      value: 123
  },
  // 改变state中变量的方法  改变state数据的唯一路径
  mutations: {
    // 改变state中的value的时候传入的参数
    changeValue (state, data) {
      state.value = data
      console.log(state.value)
    }
  },
  // 做一些逻辑操作 计算、发送ajax
  actions: {
  },
  getters: {
  }
})

export default store
