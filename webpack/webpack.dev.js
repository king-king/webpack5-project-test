/*
 * Created by king at 2022-1-20 22:16:12
 * Copyright (c) 2022
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { app, flag } = require('./config/config');
const config = require('./webpack.config');

const port = 8000 + Math.floor(Math.random() * 100);
const host = 'local.test.com';
const base = {
    secure: true,
    changeOrigin: true
};
module.exports = merge(config, {
    // plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        compress: true,
        historyApiFallback: false,
        port,
        host,
        hot: false,
        webSocketServer: false,
        open: {
            target: `${flag}/brand/view/brand/home.html`,
            app: {
                name: app
            }
        },
        proxy: {
            [`/${flag}/brand/view/**`]: {
                ...base,
                target: `http://${host}:${port}/`,
                pathRewrite: path => path.replace(`/${flag}/brand/view`, `/${flag}/brand/views`)
            }
        }
    }
});
