var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')

// Naming and path settings
var appName = 'app'
var entryPoint = './src/main.js'
var exportPath = path.resolve(__dirname, './dist')

// Enviroment flag
var plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    chunksSortMode: 'dependency'
  }), new CopyWebpackPlugin([{
    from: 'static'
  }])
]
var env = process.env.WEBPACK_ENV

// Differ settings based on production flag
if (env === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      pure_funcs: ['console.log', 'window.console.log.apply']
    }
  }))
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }))

  appName = appName + '.min.js?v=' + require('./package.json').version
  exportPath = path.resolve(__dirname, './public')
} else {
  appName = appName + '.js'
}

// Main Settings config
module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  module: {
    loaders: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, './src')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.s[a|c]ss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true
          }
        }
      ]
    }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins
}
