'use strict';
import foo from './foo.js';
import fetch from 'node-fetch';
import './../style/basic.css';  // 测试载入样式

// 测试使用自己编写的模块
foo();

// 测试使用三方模块
fetch('http://api.52byr.com/newvisitor')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        console.log(body);
    });
