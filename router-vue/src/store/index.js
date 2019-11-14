// 存储数据

// 在组件中，store中的数据是共同的，所有组件都可以访问vue中的数据
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'


Vue.use(Vuex)

let store = new Vuex.Store({
  // 数据 用于多个组件间使用同一个数据
  state: {
      value: 123,
      // axios 请求回来的数据存放的数组
      gLists: [],
      uLists: []
  },
  // 改变state中变量的方法  改变state数据的唯一路径  commit()触发
  mutations: {
    // 改变state中的value的时候传入的参数
    changeValue (state, data) {
      state.value = data
    },
    changeGoodLits (state, data) {
      console.log(data)
      // 把请求传过来的数据传到state中的lists空数组里面
      state.gLists = data
    },
    changeULits (state, data) {
      state.uLists = data
    }
  },
  // 做一些逻辑操作 计算、发送ajax  dispatch()触发
  actions: {
    getLists (gLists) {
      // console.log(gLists)
      axios ({
        method: 'get',
        url: 'http://192.168.97.229:3001/lists',
      }).then((res) => {
        if (res.status === 200) {
          // 把请求返回的数据传给changeGoodLits
          gLists.commit('changeGoodLits', res.data.data)
        }
      })
    },
    getUserLists (uLists) {
      axios ({
        method: 'get',
        url: 'http://192.168.97.229:300/lists',
      }).then((res) => {
        if (res.status === 200) {
          // 把请求返回的数据传给changeGoodLits
          uLists.commit('changeULits', res.data.data)
        }
      })
    }
  },

  getters: {
    // 拿到state中的lists数据，进行价格计算并返回给total
    total (state) {
      let total = 0
      // 循环计算每一个商品的价格之后加起来赋给total
      for (let prop of state.gLists) {
        total += prop.price * prop.stock
      }
      return total
    }
  }
})

export default store
