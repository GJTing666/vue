
let express = require('express');
let mysql = require('mysql');
// 引入上传图片模块
// let formidable = require('formidable');
// let path = require('path')

let app = express();

// 静态服务器 某个问佳佳下的文件可以通过当前服务器设置的端口和ip访问
// app.use(express.static('./html'));
// upload
//  存放图片 图片服务器
app.use(express.static('./upload'));
app.use(express.static('./html'));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
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
    // 查询数据库数据
    /*connection.query('select * from goods', function (err, data) {
        if (!err) {
            // 返回接口数据，并结束接口请求
            res.json({
                status: true,
                data: data
            })
        }else{
            res.json({
                status: 500,
                data: []
            })
        }
    })*/
    res.json({
        status: 200,
        data: [{
            id: 1,
            name: '守柴炉烤鸭',
            price: '50.00',
            stock: '15'
        }, {
            id: 2,
            name: '九七烤鱼',
            price: '45.00',
            stock: '23'
        }, {
            id: 3,
            name: '干锅牛肉',
            price: '85.00',
            stock: '99'
        }]
    })
})

/*// 获取商品分类列表
app.get('/class', function(req,res){
    connection.query('select * from classify', function(err, data){
        if(!err){
            res.json({
                status: 200,
                data: data
            })
        }else{
            res.json({
                status: 500,
                data: []
            })
        }
    })
})

// 监听添加商品的接口
app.post('/addgoods', function(req, res){
    // 获取请求的参数
    // 获取form传入的表单 解析地址传入的form表单
    let form = new formidable.IncomingForm();

    // 设置图片上传地址
    form.uploadDir = './upload';
    // 保留图片后缀名
    form.keepExtensions = true;

    // 解析参数
    // fileds 上传图片的其他数据 files 上传的文件
    form.parse(req, function(err, fields, files){
        // 将获取的参数写入数据库
        let filebase = path.parse(files.img.path).base;

        let addsql = 'insert into goods(name, price, stock, class, img) values (?,?,?,?,?)';
        let adddata = [fields.name,fields.price,fields.stock,fields.class,filebase];

        connection.query(addsql, adddata, function(err, data){
            if(!err){
                res.json({
                status: 200,
                data: ''
            })
            }
        })
    })
})*/

console.log('port:' + 3001);
app.listen(3001)

