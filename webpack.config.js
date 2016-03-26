var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: ['webpack/hot/dev-server', __dirname + '/src/app/main.ts'],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.sass', '.scss', '.jade']
  },
  devServer: {
    hot: true,
    inline: true,
    colors: true,
    historyApiFallback: true,
    host: process.env.IP || '127.0.0.1',
    port: process.env.PORT || 3000,
    contentBase: 'public/'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.jade$/, loader: 'raw!jade-html' },
      {test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/]},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./some-folder")]
  }
};
