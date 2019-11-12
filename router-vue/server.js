
let express = require('express');
let mysql = require('mysql');
// 引入上传图片模块
// let formidable = require('formidable');
// let path = require('path');

let app = express();

// 静态服务器 某个问佳佳下的文件可以通过当前服务器设置的端口和ip访问
// app.use(express.static('./html'));
// upload
//  存放图片 图片服务器
// app.use(express.static('./upload'));
// app.use(express.static('./html'));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '642315837',
    database: 'shop'
})
// 连接数据库
connection.connect();

app.all('*', function(req, res, next){
    // 解决跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 继续往下走
    next()
})

// 使用get请求监听接口
// 从数据库获取goods表中的数据并返回到接口数据中
app.get('/lists', function (req, res) {
    // console.log(res)
    // 查询数据库数据
    connection.query('select * from news', function (err, data) {
        if (!err) {
            // 返回接口数据，并结束接口请求
            res.json({
                status: 200,
                data: data
            })
            // console.log(data)
        }else{
            res.json({
                status: 500,
                data: []
            })
        }
    })
})

console.log('port:' + 3000);
app.listen(3000)

