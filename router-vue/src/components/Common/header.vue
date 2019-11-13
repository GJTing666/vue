<template>
  <div class="v-header">
    <el-row type="flex" justify="end" v-if="!isLogin">
      <el-col :span="3" style="line-height: 60px; text-align: right; padding-right: 10px;">123456@qq.com</el-col>
      <el-col :span="3" style="line-height: 60px;">
        <router-link to="">退出登录</router-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" v-else>
      <el-col :span="1" style="line-height: 50px; text-align: right; padding-right: 16px;">
        <router-link to=""><span @click="login">登录</span></router-link>
      </el-col>
      <el-col :span="3" style="line-height: 50px;">
        <router-link to=""><span @click="login">注册</span></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
      return {
          isLogin: true
      }
  },
  methods: {
    login () {
      let token = window.localStorage.getItem('token')
      if(token) {
        window.location.href= '/news'
      }else{
        window.location.href= 'http://localhost:3000/welcome.html'
      }
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
