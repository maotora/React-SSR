const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.js')

const config = {
    entry: './src/client/index.js',

    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)
