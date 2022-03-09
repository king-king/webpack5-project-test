(self.webpackChunkwebpack_demo = self.webpackChunkwebpack_demo || []).push([
    ['brandweb/brand/static/js/brand/home/main.jsx'],
    {
        20034(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__);
            const core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41539);
            const core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
            const core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(674);
            const core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);

            const p = new Promise(res => {
                setTimeout(() => {
                    res('成功');
                }, 3000);
            });
            p.then(value => {
                console.log(value);
            });
        }

    },
    function (__webpack_require__) {
        const __webpack_exec__ = function (moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); };
        __webpack_require__.O(0, ['vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js', 'vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2a1352'], () => __webpack_exec__(20034));
        const __webpack_exports__ = __webpack_require__.O();
    }
]);
