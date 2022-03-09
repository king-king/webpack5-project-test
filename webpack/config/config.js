/*
 * Created by king at 2022-1-24 11:18:00
 * Copyright (c) 2022
*/

const os = require('os');

const appMap = {
    Linux: 'google chrome', // linux
    Darwin: 'google chrome', // mac
    // eslint-disable-next-line
    Windows_NT: 'chrome' // windows
};
module.exports.app = appMap[os.type()];

module.exports.flag = 'brandweb';
