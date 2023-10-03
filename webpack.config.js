const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: 'web',
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js',
      },
    module: {
    rules: [{ 
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
          loader: 'postcss-loader'
          }
        ],
    },
    {
        test: /\.(png|gif|jpg)/,
        type: 'asset/resource',
    }
  ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css'
    })
  ],
    devtool: 'source-map'
  };