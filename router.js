// 路由模块
// 1.导包
const express = require('express');
const c_user = require('./controllers/c_user');
// 2.实例化路由对象
const router = express.Router();
// 3.使用路由
router.get('/',c_user.showSignin);
// 4.导出
module.exports = router;