<template>
  <el-col :span="24">
    <el-table>
      <el-table-column
        prop=""
        label="账户"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, lists)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      // console.log(index)
      rows.splice(index, 1)
    }
  },
  monted() {
    this.$store.dispatch('getUserLists')
  }
}
</script>

<style>

</style>
