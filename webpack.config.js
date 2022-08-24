const path = require('path') // Node.js 에서 파일을 쉽게 다룰 수 있도록 도와주는 모듈

module.exports = {
  name: 'test',
  mode: 'development',
  devtool: 'eval',

  entry: {
    app: ['./views/index.js']
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }
    }],
  },

  plugins: [],

  output: {
    path: path.join(__dirname, 'dist'),	// __dirname: webpack.config.js 파일이 위치한 경로
    filename: 'app.js',
    publicPath: '/dist/'
  },
}