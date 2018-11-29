const path = require('path');
// 配置参数
module.exports = {
  entry: './src/',// 入口 把index.js导入进来处理
  output: {
    path: path.resolve(__dirname, 'dist'),// 写一段路径，寻找output文件夹
    filename: 'bundle.js'// 在output文件夹里面导出文件名为bundle.js
  },
  module :{
    rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              {loader: 'css-loader',}
            ]
          }
        ]
  }
      
};