<template>
  <el-col :span="2" class="btn-cont">
    <el-col :span="2" style="text-align:right;">
      <el-button type="primary" @click="dialogFormVisible = true">新 增</el-button>
      <el-dialog title="添加新闻" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="标题" :label-width="formLabelWidth">
            <el-input id="titVal" v-model="form.name" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
           <el-input
            id="contVal"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea2">
          </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible=false, subNews()">提 交</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-col>
</template>

<script>
import axios from 'axios'
import newsData from '@/components/Index/news.vue'
export default {
  props: {
    getNewsData: {
      type: Function
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      textarea2: '',
      input: ''
    }
  },
  methods: {
    // 点击提交按钮 发送提交的news
    subNews () {
      axios({
        method: 'get',
        params: {
          data: {
            title: this.form.name,
            content: this.textarea2
          }
        },
        url: 'http://localhost:3000/putNews',
        responseType: 'stream'
      }).then((res) => {
        if (res.status === 200) {
          // 插件：消息提示
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.getNewsData()
        }
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 消息提示
    // skip () {
    //   this.$message({
    //       message: '提交成功',
    //       type: 'success'
    //     })
    // }
  }
}
</script>

<style>
  .btn-cont {
    line-height: 60px;
    padding-left: 10px;
    margin-right: 10px;
  }
  .el-dialog__header::after {
    content: '';
    display: block;
    overflow: hidden;
  }
  .el-dialog__title {
    float: left;
  }
</style>
