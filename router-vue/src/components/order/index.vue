<template>
  <div>
    <el-button type="mini" @click="cTab(1)">tab1</el-button>
    <el-button type="mini" @click="cTab(2)">tab2</el-button>
    <div>
      <Tab1 v-if="tabValue==1"></Tab1>
      <Tab2 v-else></Tab2>
    </div>
  </div>
</template>

<script>
import Tab1 from './tab1'
import Tab2 from './tab2'
export default {
  data () {
    return {
      tabValue: 1
    }
  },
  components: {
    Tab1,
    Tab2
  },
  methods: {
    cTab(tab) {
      this.tabValue = tab
    }
  }
}
</script>

<style>

</style>
