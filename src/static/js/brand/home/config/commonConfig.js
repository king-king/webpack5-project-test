import dealFun from './dealFun';

const commonConfigHost = {
    type: 'common', // FOCUS_GATEWAY为false时， 可以自己设置devHost值，自定义是否走网关
    devHost: '' //
};

const commonUrlConfig = {
    getCommonMenu: '/brand/common/getMenuTreeData.ajax',
    globalInfo: '/brand/common/newGetGlobalInfo.ajax',
    getBrandAndCategoryNew: '/brand/common/getBrandAndCategoryNew.ajax', // 头部组件调用，查询品牌、类目和供应商信息
    getAdTypeData: '/brand/common/getAdTypeData.ajax', // 头部组件调用 获取广告类型数据
    searchSku: '/brand/common/common/searchSku.ajax', // 头部组件调用
    searchMultipleSkuByIds: '/brand/common/common/searchMultipleSku.ajax', // 头部组件调用
    getContactsInfo: '/brand/common/getContactsInfo.ajax', // 判断联系人信息是否填写完整
    getServerTime: '/brand/common/getServerTime.ajax', // 获取服务器时间
    getSystemNotice: '/brand/common/getSystemNotice.ajax', // 获取系统公告与菜单公告
    getContentTypeData: '/brand/contentMarketing/common/getContentTypeData.ajax', // 头部组件调用
    getWatermark: '/brand/common/getWatermark.ajax', // 获取运营版水印接口
    getWindowNotice: '/brand/common/getWindowNotice.ajax', // 获取弹窗公告
    passportLogout: '/brand/common/passportLogout.ajax', // passport登出接口
    getBdpUserInfo: '/brand/common/getBdpUserInfo.ajax', // 运营版验证用户身份是否隐藏品牌类目多选
    getSelfRunShop: '/brand/common/getSelfRunShop.ajax'
};

const retUrlConfig = dealFun(commonConfigHost, commonUrlConfig);

export default retUrlConfig;
