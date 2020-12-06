const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const isLocal = !process.env.NODE_ENV;

module.exports = {
  target: 'node',
  mode: isLocal ? 'development' : 'production',
  watch: isLocal,
  // watch: false,
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false,
    nodeEnv: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin({ paths: [/\.js$/, /\.d\.ts$/] }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,js}',
      },
    }),
  ],
};
