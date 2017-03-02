# webpakc_config_01

## 目标

- 掌握 webpack 基本配置。
- 引入 babel-loader 来支持 ES6。
- 引入 style-loader/css-loader 来打包样式文件。
- 引入自己编写模块和第三方模块。

## 问题

- webpack.config.js 中 output 下字段 publicPath 意义。

  https://github.com/webpack/docs/wiki/configuration
  https://github.com/webpack/webpack/issues/1791

  不太明白，和磁盘路径不同，可能与上线后 CDN 缓存策略有关。

- webpack 如何实现 html 自动注入 bundle.js。
