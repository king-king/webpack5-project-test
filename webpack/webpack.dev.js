/*
 * Created by king at 2022-1-20 22:16:12
 * Copyright (c) 2022
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { app, flag } = require('./config/config');
const config = require('./webpack.config');

const port = 8000 + Math.floor(Math.random() * 100);
const host = 'local.brand.jd.com';
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
            },
            '/brand/common/**': {
                ...base,
                target: 'http://bpp-api.jd.com/bppapi/brand/'
            },
            '/brand/industry/**': {
                ...base,
                target: 'http://bpp-api.jd.com/bppapi/brand/'
            }
        }
    }
});
