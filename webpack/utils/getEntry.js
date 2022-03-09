/*
 * Created by king at 2022-1-20 21:13:37
 * Copyright (c) 2022
 */

const path = require('path');
const glob = require('glob');
const { flag } = require('../config/config');

module.exports = () => {
    const entrySrcList = glob.sync(`${path.resolve(__dirname, '../../src/static/js/**/main.jsx')}`);
    const entry = {};
    if (entrySrcList && entrySrcList.length) {
        entrySrcList.forEach(src => {
            entry[`${flag}/brand/${src.slice(src.indexOf('src') + 4, src.length)}`] = src;
        });
    }
    return entry;
};
