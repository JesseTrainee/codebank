/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "./pages/api/products/index.ts":
/*!*************************************!*\
  !*** ./pages/api/products/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model */ \"./pages/model.ts\");\n\nfunction handler(_, res) {\n  res.status(200).json(_model__WEBPACK_IMPORTED_MODULE_0__.products);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC50cz9kYmE0Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJfIiwicmVzIiwic3RhdHVzIiwianNvbiIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUNYQyxDQURXLEVBRVhDLEdBRlcsRUFHYjtBQUNFQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsNENBQXJCO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJvZHVjdCwgcHJvZHVjdHMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIgKFxuICAgIF86IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPFByb2R1Y3RbXT5cbikge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/products/index.ts\n");

/***/ }),

/***/ "./pages/model.ts":
/*!************************!*\
  !*** ./pages/model.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": function() { return /* binding */ products; }\n/* harmony export */ });\nconst products = [{\n  id: \"uuid\",\n  name: \"produto 1\",\n  description: \"muito bom\",\n  price: 50.9,\n  image_url: \"https://source.unsplash.com/random?product\",\n  slug: \"produto-1\",\n  created_at: \"2022-01-29T00:00:000\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZS1mcm9udGVuZC8uL3BhZ2VzL21vZGVsLnRzPzNlN2UiXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2VfdXJsIiwic2x1ZyIsImNyZWF0ZWRfYXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFVTyxNQUFNQSxRQUFtQixHQUFHLENBQy9CO0FBQ0VDLElBQUUsRUFBRSxNQUROO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLGFBQVcsRUFBRSxXQUhmO0FBSUVDLE9BQUssRUFBRSxJQUpUO0FBS0VDLFdBQVMsRUFBRSw0Q0FMYjtBQU1FQyxNQUFJLEVBQUUsV0FOUjtBQU9FQyxZQUFVLEVBQUU7QUFQZCxDQUQrQixDQUE1QiIsImZpbGUiOiIuL3BhZ2VzL21vZGVsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGltYWdlX3VybDogc3RyaW5nO1xuICAgIHNsdWc6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXG4gICAge1xuICAgICAgaWQ6IFwidXVpZFwiLFxuICAgICAgbmFtZTogXCJwcm9kdXRvIDFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIm11aXRvIGJvbVwiLFxuICAgICAgcHJpY2U6IDUwLjksXG4gICAgICBpbWFnZV91cmw6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbT9wcm9kdWN0XCIsXG4gICAgICBzbHVnOiBcInByb2R1dG8tMVwiLFxuICAgICAgY3JlYXRlZF9hdDogXCIyMDIyLTAxLTI5VDAwOjAwOjAwMFwiLCBcbiAgICB9LFxuICBdOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/model.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/index.ts"));
module.exports = __webpack_exports__;

})();