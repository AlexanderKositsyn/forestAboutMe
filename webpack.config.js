const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, "source"),
  dist: path.join(__dirname, "dist")
};

module.exports = {
  //функция которая возвращает следить или нет в зависимости от глобальной переменной NODE_ENV, которая устанавливается в scripts npm
  watch: (function () {
    return process.env.NODE_ENV === "development";
  })(),

  entry: {
    index: "./app/pages/index/index.js",
    about: "./app/pages/about/about.js",
    blog: "./app/pages/blog/blog.js",
    works: "./app/pages/works/works.js"
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  output: {
    path: PATHS.dist,
    filename: "./js/[name].bundle.js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,

        loader: "babel-loader"


      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: "../",
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          publicPath: "../",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new HtmlWebpackPlugin({
      filename: "index.html",
      // указываем подключаемый budle
      chunks: ["index", "common"],
      template: "./app/pug/pages/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      chunks: ["about", "common"],
      template: "./app/pug/pages/about.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      chunks: ["blog", "common"],
      template: "./app/pug/pages/blog.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "works.html",
      chunks: ["works", "common"],
      template: "./app/pug/pages/works.pug"
    }),
    new ExtractTextPlugin("./css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    // new OptimizeCssAssetsPlugin({
    //   cssProcessorOptions: { discardComments: { removeAll: true } }
    // }),
    new StyleLintPlugin({
      configFile: "./.stylelintrc"
    }),
    new UglifyJsPlugin()
  ]
};