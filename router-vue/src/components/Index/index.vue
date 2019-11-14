<template>
  <!-- <el-header>神秘岛</el-header> -->
  <el-col class="main-box " :span="20">
    <!--<div style="display:-webkit-box;" class="clearfix">-->
      <!--<el-main style="width:100%;">-->
        <!--<div class="banner-box">-->
          <!--<el-carousel :interval="4000" type="card" height="280px">-->
            <!--<el-carousel-item v-for="img in imgs" :key="img">-->
              <!--<h3 class="medium">-->
                <!--<img :src="img" alt="banner" />-->
              <!--</h3>-->
            <!--</el-carousel-item>-->
          <!--</el-carousel>-->
        <!--</div>-->
      <!--</el-main>-->
    <!--</div>-->
    <el-col :span="24" class="g_lists">
      <el-table
        :data="lists"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="stock"
          label="库存">
        </el-table-column>
        <el-table-column
          label="总价">
          <template slot-scope="scope">
            <div>
              {{scope.row.price * scope.row.stock}}
            </div>
          </template>
        </el-table-column>
        <!--<el-table-column
          prop="img"
          label="商品图片">
        </el-table-column>-->
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
      <div>
        总价： {{total}}
      </div>
    </el-col>
  </el-col>
</template>

<script>
import img1 from "@/assets/banner1.jpg"
import img2 from "@/assets/banner2.jpg"
import img3 from "@/assets/banner3.jpg"
import img4 from "@/assets/banner4.jpg"
import img5 from "@/assets/banner5.jpg"

export default {
  methods: {
    deleteRow(index, rows) {
      // console.log(index)
      rows.splice(index, 1)
    }
  },
  data() {
    return {
      imgs: [img1, img2, img3, img4, img5],
    }
  },
  // 实时监听事件活动
  computed: {
    // 里面的lists、total虽然是以方法的形式写，其实相当于data下面return的lists、total值
    // 渲染的lists数据 其值为可表示为lists=[$store.state.lists]
    // 然后把lists中的数据渲染出来
    lists () {
      return this.$store.state.gLists
    },
    // 拿到$store.getters.total的数据，在渲染出来
    total () {
      return this.$store.getters.total
    }
  },
  // 页面加载完成之后做的事
  mounted() {
    // this.$store.dispatch('getLists',一个参数/{多个参数})
    // 触发获取good的方法
    this.$store.dispatch('getLists')
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.el-table th{
  text-align: center;
}

.el-table .cell {
  text-align: center;
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
  margin: 0;
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

.g_lists{
  
}
</style>
