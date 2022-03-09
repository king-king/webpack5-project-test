const envHost = window.location.hostname; // 应用运行环境host

const onlineHostArr = ['ppzh.jd.com']; // 线上品牌版host
const onlineBdpHostArr = ['ppzh.bdp.jd.com', 'ge.jd.com']; // 线上运营版host

const localHost = ['local.brand.jd.com']; // 本地host, 由于本地host不走网关，所以只有一个域名

const preHostArr = ['web.ppzh.jd.com', '233.ppzh.jd.com', '80.ppzh.jd.com', 'zylp.jd.com']; // 商智品牌版测试、预发环境host
const preBdpHostArr = ['bdp.ppzh.jd.com', '25.ppzh.jd.com']; // 商智运营版测试、预发环境host

// 若共建方自己的测试、预发环境想直接访问商智的网关
const gzHostArr = ['beta-fans.quality.jd.com']; // 共建方host想直接访问商智品牌版网关
const gzBdpHostArr = ['quality-kanban.jd.com']; // 共建方host想直接访问商智运营版网关

// 现在我终于明白了，我们的网关需要配置host
const FOCUS_GATEWAY = true;

let curVersion = ''; // 默认当前版本是品牌版（如果是本地环境想走线上，那就直接改这个值）

// 品牌版
if (onlineHostArr.includes(envHost) || preHostArr.includes(envHost) || gzHostArr.includes(envHost)) {
    curVersion = '';
}

// 运营版
if (onlineBdpHostArr.includes(envHost) || preBdpHostArr.includes(envHost) || gzBdpHostArr.includes(envHost)) {
    curVersion = 'Bdp';
}

/**
 *
 * 线上环境host配置，任何时候都不能更改！！！
 * 线上环境host配置，任何时候都不能更改！！！
 * 线上环境host配置，任何时候都不能更改！！！
 * */

// 品牌版一下配置还需确认2020-11-11注
const onlineGateway = {
    common: 'https://zhgateway.jd.com', // 线上公共接口网关
    commonBdp: 'http://szbrom.back.jd.com', // 线上运营版网关
    business: 'https://zhgateway.jd.com/geajax', // fanajax是共建方的业务网关id，共建方需要替换成自己的网关id
    businessBdp: 'http://szbrom.back.jd.com/geajax' // 业务运营版网关
};

// 测试、预发网关配置，商智的测试 & 预发的网关域名都是同一个域名
const preGateway = {
    common: '//yf-szgateway.jd.com', // 测试、预发公共接口网关
    commonBdp: '//dev-szbrom.back.jd.com',
    business: '//yf-szgateway.jd.com/geajax', // fanajax是共建方的业务网关id，共建方需要替换成自己的网关id
    businessBdp: '//dev-szbrom.back.jd.com/geajax' // 业务运营版网关
};

/** *
 * 1、线上不管配置了什么，走统一的线上网关
 * 2、本地环境，全局强制
 * 3、测试环境 、 预发环境
 * @param hostObj
 * @param urlConfig
 * @returns {{}}
 */
export default function dealFun(hostObj, urlConfig) {
    if (onlineHostArr.includes(envHost) || onlineBdpHostArr.includes(envHost)) {
        // 线上环境
        hostObj.devhost = onlineGateway[`${hostObj.type}${curVersion}`];
    } else if (localHost.includes(envHost)) {
        // 本地环境
        if (FOCUS_GATEWAY) {
            hostObj.devhost = '';
            // hostObj.devhost = preGateway[`${hostObj.type}${curVersion}`];
        }
    } else if (gzHostArr.includes(envHost) || gzBdpHostArr.includes(envHost)) {
        // 共建方自己的测试、预发环境
        if (FOCUS_GATEWAY) {
            hostObj.devhost = preGateway[`${hostObj.type}${curVersion}`];
        }
    } else if (preHostArr.includes(envHost) || preBdpHostArr.includes(envHost)) {
        // 商智测试、预发环境
        if (FOCUS_GATEWAY) {
            hostObj.devhost = preGateway[`${hostObj.type}${curVersion}`];
        }
    } else {
        // 托底方案，认为是线上环境
        hostObj.devhost = onlineGateway[`${hostObj.type}${curVersion}`];
    }

    const retObj = {};
    for (const key in urlConfig) {
        if (urlConfig.hasOwnProperty(key) === true) {
            retObj[key] = hostObj.devhost + urlConfig[key];
        }
    }

    return retObj;
}

// 导出当前系统版本
export const sysVersion = curVersion;
