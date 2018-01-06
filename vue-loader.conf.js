module.exports = {
  loader: {
    css: {
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }],
      fallback: 'vue-style-loader'
    }
  }
}
