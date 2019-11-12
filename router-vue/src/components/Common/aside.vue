<template>
  <el-col class="aside-box clearfix" :span="4">
    <!-- 侧边导航 start -->
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-picture-outline-round"></i>
                <span>选项3</span>
              </template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-1">选项2</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-picture-outline-round"></i>
                <span>选项3</span>
              </template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-1">选项2</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <!-- 侧边导航 end -->
  </el-col>
</template>

<script>
export default {
    methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-row {
    width: 100%;
}
</style>
