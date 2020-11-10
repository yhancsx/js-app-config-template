const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NPM_LIFE_CYCLE_SCRIPT = process.env.npm_lifecycle_script;
const isEnvProduction = NPM_LIFE_CYCLE_SCRIPT === 'webpack';
const isEnvDevelopment = NPM_LIFE_CYCLE_SCRIPT.includes('webpack-dev-server');

module.exports = {
  mode: 'none',
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isEnvDevelopment && 'style-loader',
          isEnvProduction && MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ].filter(Boolean),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: './index.html' }),
    isEnvProduction && new MiniCssExtractPlugin({ filename: 'index.css' }),
  ].filter(Boolean),
};
