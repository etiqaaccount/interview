"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create_student",{

/***/ "./pages/create_student.js":
/*!*********************************!*\
  !*** ./pages/create_student.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Student() {\n    var _handleSubmit = function _handleSubmit(e) {\n        e.preventDefault();\n        console.log($(\"#student_create_form\").serialize());\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/saveStudent\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"POST\",\n            dataType: \"json\",\n            data: $(\"#student_create_form\").serialize(),\n            success: function success(result) {},\n            error: function error() {\n                console.log(\"error\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"student_create_form\",\n                onSubmit: _handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mb-3\",\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                name: \"name\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit btn btn-primary\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNaO0FBQ1g7QUFFYixTQUFTSyxPQUFPLEdBQUc7UUFDdkJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxDQUFDLEVBQUU7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNuREQsQ0FBQyxDQUFDRSxJQUFJLENBQUM7WUFDTEMsR0FBRyxFQUFFLCtDQUErQztZQUNwREMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFLE1BQU07WUFDWkMsUUFBUSxFQUFFLE1BQU07WUFDaEJDLElBQUksRUFBRVAsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLFNBQVMsRUFBRTtZQUMzQ08sT0FBTyxFQUFFLFNBQVRBLE9BQU8sQ0FBWUMsTUFBTSxFQUFFLEVBQzFCO1lBQ0NDLEtBQUssRUFBRSxTQUFQQSxLQUFLLEdBQWM7Z0JBQ25CWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBQ0QscUJBQVE7a0JBQ04sNEVBQUNZLFdBQVM7c0JBQ1YsNEVBQUNDLE1BQUk7Z0JBQUNDLEVBQUUsRUFBQyxxQkFBcUI7Z0JBQUNDLFFBQVEsRUFBRW5CLGFBQWE7O2tDQUNwRCw4REFBQ29CLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7d0JBQUNDLEtBQUssRUFBRTs0QkFBQ0MsT0FBTyxFQUFDLGNBQWM7eUJBQUM7OzBDQUM5RCw4REFBQ0MsT0FBSzswQ0FBQyxNQUFJOzs7OztvQ0FBUTswQ0FDbkIsOERBQUNDLE9BQUs7Z0NBQUNKLFNBQVMsRUFBQyxjQUFjO2dDQUFDSyxJQUFJLEVBQUcsTUFBTUM7Z0NBQUFBLFdBQVcsRUFBQyxNQUFNOzs7OztvQ0FBRTs7Ozs7OzRCQUM3RDtrQ0FDTiw4REFBQ0MsUUFBTTt3QkFBQ1AsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBQyxRQUFNOzs7Ozs0QkFBUzs7Ozs7O29CQUNyRDs7Ozs7Z0JBQ0s7cUJBQ1gsQ0FDRjtDQUNGO0FBL0J1QnRCLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlX3N0dWRlbnQuanM/OGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50KCkge1xuICBmdW5jdGlvbiBfaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgIFxuICAgIGNvbnNvbGUubG9nKCQoJyNzdHVkZW50X2NyZWF0ZV9mb3JtJykuc2VyaWFsaXplKCkpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvRXRpcWFTY2hvb2wvc2F2ZVN0dWRlbnQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBkYXRhOiAkKCcjc3R1ZGVudF9jcmVhdGVfZm9ybScpLnNlcmlhbGl6ZSgpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgfVxuICAgICAgLCBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoPD5cbiAgICA8Y29udGFpbmVyPlxuICAgIDxmb3JtIGlkPVwic3R1ZGVudF9jcmVhdGVfZm9ybVwiIG9uU3VibWl0PXtfaGFuZGxlU3VibWl0fSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItM1wiIHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxuICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lID0gXCJuYW1lXCJwbGFjZWhvbGRlcj1cIk5hbWVcIi8+ICAgICAgICAgIFxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdCBidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPC9jb250YWluZXI+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJTdHVkZW50IiwiX2hhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCIkIiwic2VyaWFsaXplIiwiYWpheCIsInVybCIsImhlYWRlcnMiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsImVycm9yIiwiY29udGFpbmVyIiwiZm9ybSIsImlkIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create_student.js\n");

/***/ })

});