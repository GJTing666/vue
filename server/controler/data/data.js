// 只要有数据库的操作都在这里

let query = require('../mysql');

module.exports = {
    async isRegister(email) {
        // 查询email
        let data = await query('select * from user where email=?', email);
        //    console.log(data)
        if (data.length > 0) {
            //    false 表示已经注册
            return false;
        } else {
            //    true 表示未注册
            return true;
        }
    },
    
    // 插入注册的用户信息
    async register(data) {
        let sql = 'insert into user(name, email, password, status) values (?)';

        let result = await query(sql, [data]).catch(function (res) {
            console.log('error:' + res)
        });
        if (result) {
            return true;
        } else {
            return false;
        }
    },

    // 验证用户登录信息
    async login(data){
        let sql = 'select * from user where email=? and password=?';
        let result = await query(sql, data)

        if(result.length > 0){
            return result[0];
        }else{
            return false;
        }
    },

    // 获取news列表
    async News(data){
        let sql = 'select * from news';
        let result = await query(sql, data)
        if(result){
            return result
        }else{
            return false
        }
    },

    // 根据id查询news
    async newsById(data){
        // console.log(data)
        let sql = 'select * from news where id = ?';
        let result = await query(sql, data)
        if(result){
            return result
        }else{
            return false
        }
    },

    // 添加news
    async addNews(data) {
        let sql = 'insert into news(title, content, createTime) values (?)'
        let result = await query(sql, [data]).catch(function (res) {
            console.log(res)
        })
        if (result) {
            return true;
        } else {
            return false;
        }
    },

    // 搜索news
    async seaNews(value) {
        let sql = "select * from news where title like '%"+value+"%'"
        let result = await query(sql, [value]).catch(function (res) {
            console.log(res)
        })
        // console.log(value)
        if (result) {
            return result
        } else {
            return false
        }
    }

}