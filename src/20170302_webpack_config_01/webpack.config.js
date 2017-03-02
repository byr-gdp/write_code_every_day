// webpack.config.js
var path = require("path");

module.exports = {
  entry: './src/js/index.js', //演示单入口文件
  output: {
      path: path.join(__dirname, 'dist'),  //打包输出的路径
      filename: 'bundle.js',               //打包后的名字
      // publicPath: "./assets/"       //html引用路径，在这里是本地地址。
  },
  // 新添加的module属性
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpgpng)$/,
        loader: "url?limit=8192"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
};
