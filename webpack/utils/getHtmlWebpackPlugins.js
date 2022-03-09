/*
 * Created by king at 2022-1-20 21:29:43
 * Copyright (c) 2022
 */
// 多页应用获取每个页面模板
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = entry => Object.keys(entry).map(chunk => {
    // chunk形如brandweb/brand/static/js/easyBI/appList/main.jsx
    // 需要转换成brandweb/brand/views/easyBI/appList.html
    const filename = chunk.replace('static/js', 'views').replace('/main.jsx', '.html');
    return new HtmlWebpackPlugin({
        filename,
        template: path.resolve(__dirname, '../../src/views/template.html'),
        chunks: [chunk],
        inject: 'body',
        cache: true,
        minify: {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
    });
});
