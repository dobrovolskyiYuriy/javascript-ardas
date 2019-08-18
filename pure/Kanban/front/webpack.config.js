module.exports = {
    mode: 'development',
    devtool: '(none)',
    entry: './src/index.js',
    output: {
        filename: './public/boundle.js'
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:8089'
        }
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          }
        ]
    }    
};