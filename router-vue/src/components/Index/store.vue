<template>
  <div>
    asdasd
    <input type="text" @change="changeName" :value="name" />
    <input type="password" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  // 计算属性
  computed: {
    name () {
      return this.$store.state.value
    }
  },
  methods: {
    changeName (e) {
      let name = e.target.value
      // console.log(name)
      this.$store.commit('changeValue', name)

    }
  }
}
</script>

<style>
</style>
