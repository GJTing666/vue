<template>
  <el-col :span="24">
      <div v-for="item in lists" :key="item.id">
          <div class="title"><h2>{{item.title}}</h2></div>
          <div class="news-time">{{item.createTime}}</div>
          <div class="news-cont">{{item.content}}</div>
      </div>
  </el-col>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.getNewsId(id)
  },
  methods: {
    getNewsId (id) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/getNewsById?id=' + id,
        params: {
          data: {
            id
          }
        }
      }).then((res) => {
        res = res.data
        if (res.status === 200) {
          for (let item of res.data) {
            var timeStr = moment(item.createTime).format('Y-MM-DD HH:mm:ss')
            item.createTime = timeStr
          }
          this.lists = res.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.title {
    text-align: center;
    line-height: 100px;
}

.news-time {
    font-size: 18px;
    text-align: center;
    line-height: 10px;
    color: #4F4F4F;
}

.news-cont {
    font-size: 20px;
    margin-top: 20px;
    line-height: 50px;
}
</style>
