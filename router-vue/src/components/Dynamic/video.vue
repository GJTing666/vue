<template>
  <div>
    <div>vuex模块化：</div>
    <div v-for="item in gblists">
      {{item}}
    </div>
    <el-button type="success" @click="cgbLists">改变gblists</el-button>{{name}}
  </div>
</template>

<script>
// import {mapState, mapMutations, createNamespacedHelpers} from 'vuex'
import {mapState, createNamespacedHelpers} from 'vuex'

// 解构 创建属于order的命名空间
let {mapMutations} = createNamespacedHelpers('order')
export default {
  computed: {
    /*gblists () {
      return this.$store.state.order.lists
    },
    name () {
      return this.$store.state.order.name
    }*/
    // 箭头函数函数体只有一句的时候，可省略{}
    // 只有一个参数时，会获取所有的state
    /*...mapState({
      gblists: state => {
        return state.order.lists
      },
      name: state => {
        return state.order.name
      }
    })*/
    // 加入模块名之后  将state固定到模块名中的state里面去
    ...mapState('order', {
      gblists: state => state.lists,
      name: state => state.name
    })
  },
  methods: {
    /*cgbLists () {
      this.$store.commit('order/gbLists', {
        lists: [6,7,8,'a','e','y'],
        name: 'xiaopapa'
      })
      console.log(this.$store)
    }*/
    // 没有定义命名空间之前，不传模块名的
    /*...mapMutations(['order/gbLists']),
    cgbLists () {
      this['order/gbLists']({
        lists: [6,7,8,'a','e','y'],
        name: '没有定义命名空间之前，不传模块名的'
      })
    }*/
    // 没有定义命名空间之前，传入模块名的
    /*...mapMutations('order', ['gbLists']),
    cgbLists () {
      this.gbLists({
        lists: [6,7,8,'a','e','y'],
        name: '没有定义命名空间之前，传入模块名的'
      })
    }*/
    // 定义模块名之后
    ...mapMutations(['gbLists']),
    cgbLists () {
      this.gbLists({
        lists: [6,7,8,'a','e','y'],
        name: '定义模块名之后'
      })
    }
  }
}
</script>

<style>

</style>
