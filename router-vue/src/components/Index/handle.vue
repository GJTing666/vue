<template>
  <div>
    <el-button
      type="text"
      size="small"
      @click="delRow"
    >
      移除
    </el-button>
    <el-button
      type="text"
      size="small"
    >
      编辑
    </el-button>
    <el-button
      type="text"
      size="small"
    >
      详情
    </el-button>
  </div>
</template>

<script>
export default {
  // props 接收父组件上绑定的属性
  // props 接收的值跟data一样使用
  // props: ['id', 'aa', 'delArr'],
  props: {
    // id: Number,
    id: {
      type: Number
    },
    aa: {
      type: String
    },
    delArr: Function,
    index: {
      type: Number
    }
  },
  mounted() {
    // console.log(this.id)
    // console.log(this.aa)
    // console.log(this.delArr)
  },
  methods: {
    delRow () {
      // console.log(this.id)
      // this.delArr(this.index)
      this.$emit('del', this.index)
    }
  }
}
</script>

<style>

</style>
