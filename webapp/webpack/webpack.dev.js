const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = options =>
  merge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-source-map', // https://reactjs.org/docs/cross-origin-errors.html
    mode: ENV,
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
      path: path.resolve(__dirname, '..', 'build'),
      filename: 'app/[name].bundle.js',
      chunkFilename: 'app/[id].chunk.js',
    },
    devServer: {
      historyApiFallback: true,
      proxy: [],
    },
    plugins: [
      new SimpleProgressWebpackPlugin({
        format: options.stats === 'minimal' ? 'compact' : 'expanded',
      }),
      new FriendlyErrorsWebpackPlugin(),
      new BrowserSyncPlugin(
        {
          host: '127.0.0.1',
          open: 'external',
          port: 9001,
          proxy: {
            target: 'http://127.0.0.1:9060',
            ws: true,
          },
        },
        {
          reload: false,
          open: false,
        }
      ),
      new webpack.HotModuleReplacementPlugin(),
      new writeFilePlugin(),
      new webpack.WatchIgnorePlugin({ paths: [path.resolve(__dirname, 'test')] }),
      new WebpackNotifierPlugin({
        title: process.env.APP_NAME || 'React-Firebase',
        contentImage: path.join(__dirname, 'logo.png'),
      }),
    ],
  });
