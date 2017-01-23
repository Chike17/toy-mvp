 module.exports = {
     entry: './1client/src/index.js',
     output: {
         path: './1client/src/bin',
         filename: 'index.bundle.js'
     },
      module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             'query': {'presets': ['react', 'es2015']}
         }]
     }
 };