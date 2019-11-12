<template>
  <div class="v-header">
    <el-row type="flex" justify="end" v-if="!isLogin">
      <el-col :span="3" style="line-height: 60px; text-align: right; padding-right: 10px;">123456@qq.com</el-col>
      <el-col :span="3" style="line-height: 60px;">
        <el-link to="">退出登录</el-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" v-else>
      <el-col :span="1" style="line-height: 50px; text-align: right; padding-right: 16px;">
        <el-link to="">登录</el-link>
      </el-col>
      <el-col :span="3" style="line-height: 50px;">
        <el-link to="">注册</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
      return {
          isLogin: false
      }
  }
}
</script>

<style>
.v-header {
    height: 60px;
    background: #f2f2f2;
}
</style>