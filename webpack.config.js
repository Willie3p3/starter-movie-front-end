module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
        mode: 'production',
 };
  
