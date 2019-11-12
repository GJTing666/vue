<template>
  <!-- <el-row class="main-cont">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="集团新闻">集团新闻</el-tab-pane>
      <el-tab-pane label="业务动态">业务动态</el-tab-pane>
      <el-tab-pane label="星河视频">星河视频</el-tab-pane>
      <el-tab-pane label="留言">留言</el-tab-pane>
    </el-tabs>
  </el-row> -->
  <div>
    <ul>
      <li><router-link to="/news">集团新闻</router-link></li>
      <li><router-link to="/dynamic">业务动态</router-link></li>
      <li><router-link to="/video">星河视频</router-link></li>
      <li><router-link to="/liuyan">留言</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     tabPosition: 'left'
  //   };
  // }
}
</script>

<style>
.main-cont {
  margin-top: 20px;
  background: #fff;
}
</style>
