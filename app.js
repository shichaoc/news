// 1. 导包
const express = require('express');
const router = require('./router');
// 2. 配置路由
const app = express();

// 3. 使用路由
app.use(router);
// 4. 监听
app.listen('12345',()=>{
    console.log('run it---');
})