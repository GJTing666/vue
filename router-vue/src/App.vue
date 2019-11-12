<template>
  <div>
    <Header></Header>
    <Top></Top>
    <Banner></Banner>
    <div class="content clearfix">
      <div class="content-left">
        <Left></Left>
      </div>
      <div class="content-right">
        <router-view name="addList"></router-view>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Common/header.vue'

import Top from '@/components/Common/Top.vue'

import Banner from '@/components/Index/banner.vue'

import Left from '@/components/Common/left.vue'

export default {
  components: {
    Top,
    Banner,
    Header,
    Left
  }
}
</script>

<style>
.clearfix::after {
  content: '';
  display: block;
  overflow: hidden;
}

.content-left {
  width: 14%;
  float: left;
}

.content-left ul li {
  padding: 10px 25px;
  text-align: center;
}

.content-right {
  width: 85%;
  float: right;
  border-left: 1px solid #ccc;
}
</style>
