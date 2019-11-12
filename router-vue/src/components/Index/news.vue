<template>
  <el-col :span="24" class="g_lists">
    <add :getNewsData="getNewsData"></add>
    <el-col :span="4">
      <el-input v-model="input" placeholder="请输入搜索内容" :changeValue="changeValue" clearable></el-input>
    </el-col>
    <el-col :span="2" style="text-align:right;">
      <el-button type="primary">查 询</el-button>
    </el-col>
    <el-table :data="lists" style="width: 100%">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success">
              <router-link :to="'/detail/' + scope.row.id">详情</router-link>
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, lists)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </el-col>
</template>

<script>
import axios from 'axios'
import add from '@/components/Dynamic/add.vue'
export default {
  components: { add },
  data () {
    return {
      lists: [],
      input: ''
    }
  },
  mounted () {
    // 
    this.getNewsData()
  },
  // 计算属性 监听值的实时变化做出动作
  computed: {
    changeValue () {
      let value = this.input
      return this.searchNews(value)
    }
  },
  methods: {
    // 移除按钮
    handleDelete: function (index, rows) {
      rows.splice(index, 1)
    },
    // 获取news
    getNewsData () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/getNews'
      }).then((res) => {
        res = res.data
        if (res.status === 200) {
          this.lists = res.data
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 查询news
    searchNews (value) {
        console.log(value)
        axios({
          method: 'post',
          params: {
            data: {
              value
            }
          },
          url: 'http://localhost:3000/searchNews',
        }).then((res) => {
          if (res.status === 200) {
            // console.log(res.data)
            let lists = []
            for(let i in res.data.data) {
              lists.push(res.data.data[i])
            }
            this.lists = lists
            // console.log(this.lists)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.top-title {
  text-align: center;
  font-size: 24px;
  line-height: 80px;
  background: #e2e2e2;
}

.el-table th {
  text-align: center;
  padding: 0;
}

.el-table th .cell {
  line-height: 50px;
}

.el-table_1_column_1 .cell,
.el-table_1_column_3 .cell {
  line-height: 50px;
}

.el-table .cell {
  height: 50px;
  text-align: center;
  text-overflow: ellipsis;
  overflow:hidden;
}
</style>
