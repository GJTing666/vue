<template>
  <!-- <el-header>神秘岛</el-header> -->
  <el-row type="flex" justify="center">
      <el-col class="main-box" style="width: 70%;">
        <div style="display:-webkit-box;" class="clearfix">
          <el-main style="width:100%;">
            <div class="banner-box">
              <el-carousel :interval="4000" type="card" height="280px">
                <el-carousel-item v-for="img in imgs" :key="img">
                  <h3 class="medium">
                    <img :src="img" alt="banner" />
                  </h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-main>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
// console.log(axios)
import img1 from '@/assets/banner1.jpg'
import img2 from '@/assets/banner2.jpg'
import img3 from '@/assets/banner3.jpg'
import img4 from '@/assets/banner4.jpg'
import img5 from '@/assets/banner5.jpg'

export default {
  data () {
    return {
      imgs: [img1, img2, img3, img4, img5],
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.el-row {
  background: #eeeeee;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  float: right;
  padding-bottom: 0;
}

.el-carousel__item {
  width: 512px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  line-height: 200px;
  width: 512px;
  height: 281px;
  margin: 0;
  overflow: hidden;
}

.el-carousel__item h3 > img {
  width: 100%;
  height: 100%;
}

.banner-box {
  height: 312px;
  overflow: auto;
  box-sizing: border-box;
}

.banner {
  width: 100%;
  height: 100%;
}

.banner > img {
  width: 100%;
  height: 100%;
}

</style>
