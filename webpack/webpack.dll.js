const path = require('path');
const webpack = require('webpack');
const clearDir = require('./utils/clearDir');

// 判断mode
const isProduction = process.env.NODE_ENV === 'production';

// 不同版本的dll放在不同的文件夹里
const dirFlag = isProduction ? 'release' : 'build';

// 在webpack@5.66.0配置output.clean会导致manifest.json丢失，所以手动清空dll文件夹
clearDir(path.resolve(__dirname, `./dll/${dirFlag}`));

module.exports = {
    mode: isProduction ? 'production' : 'development', // 'development',
    devtool: isProduction ? 'nosources-source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        lib: [
            'react', 'react-dom', 'prop-types',
            'redux', 'redux-thunk', 'react-app-polyfill/ie9'
        ]
    },
    output: {
        path: path.join(__dirname, `dll/${dirFlag}`),
        filename: `[name].[contenthash].${dirFlag}.dll.js`,
        library: '[name]_[fullhash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, `dll/${dirFlag}`, `[name]-manifest.${dirFlag}.json`),
            name: '[name]_[fullhash]'
        })
    ],
    performance: {
        // 关闭性能提示
        hints: false
    }
};
