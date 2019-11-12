
let express = require('express');
let app = express();

let bodyParser = require('body-parser');

let router = require('./router');
// console.log(router)

// 解析 application/json
let jsonParser = bodyParser.json();

// 解析 application/x-www-form-urlencoded
let urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/static'));

// 跨域问题
app.all('*', function (req, res, next) {
    // 解决跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 继续往下走
    next()
})

// 注册
app.post('/register', urlencodeParser, router.register);

// 登录
app.post('/login', urlencodeParser, router.login);

// 验证登录
app.post('/verifylogin', urlencodeParser, router.verifyLogin);

// 退出登录
app.post('/signout', urlencodeParser, router.signOut);

// 获取news
app.get('/getNews', router.getNews);

// 根据id获取news
app.get('/getNewsById', router.getNewsById);

// 添加news
app.get('/putNews', router.putNews)

// 搜索news
app.post('/searchNews',urlencodeParser, router.searchNews)

app.listen(3000);