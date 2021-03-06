module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "./public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
    ]
  }
};
