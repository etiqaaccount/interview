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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\n\n\n\nfunction Student() {\n    var search = function search(e) {\n        e.preventDefault();\n        console.log(\"The link was clicked.\");\n        var studentIdInput = $(\"#studentIdInput\").val();\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/student/\" + studentIdInput,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"GET\",\n            dataType: \"json\",\n            data: {},\n            success: function success(result) {},\n            error: function error() {\n                console.log(\"error\");\n            }\n        });\n    };\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n            style: {\n                margin: \"5px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"exampleInputEmail1\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"form-control\",\n                                id: \"exampleInputEmail1\",\n                                \"aria-describedby\": \"emailHelp\",\n                                placeholder: \"Enter email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                id: \"emailHelp\",\n                                className: \"form-text text-muted\",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"exampleInputPassword1\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                className: \"form-control\",\n                                id: \"exampleInputPassword1\",\n                                placeholder: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", (_obj = {\n                        className: \"submit\"\n                    }, _defineProperty(_obj, \"className\", \"btn btn-primary\"), _defineProperty(_obj, \"children\", \"Submit\"), _obj), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUNYO0FBRWIsU0FBU0ssT0FBTyxHQUFHO1FBQ3ZCQyxNQUFNLEdBQWYsU0FBU0EsTUFBTSxDQUFDQyxDQUFDLEVBQUU7UUFDakJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsSUFBSUMsY0FBYyxHQUFHQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO1FBQy9DRCxDQUFDLENBQUNFLElBQUksQ0FBQztZQUNMQyxHQUFHLEVBQUUsNENBQTRDLEdBQUdKLGNBQWM7WUFDbEVLLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRSxLQUFLO1lBQ1hDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxJQUFJLEVBQUUsRUFDTDtZQUNEQyxPQUFPLEVBQUUsU0FBVEEsT0FBTyxDQUFZQyxNQUFNLEVBQUUsRUFDMUI7WUFDQ0MsS0FBSyxFQUFFLFNBQVBBLEtBQUssR0FBYztnQkFDbkJiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7O0lBQ0QscUJBQVE7a0JBQ04sNEVBQUNhLFdBQVM7WUFBQ0MsS0FBSyxFQUFFO2dCQUFDQyxNQUFNLEVBQUMsS0FBSzthQUFDO3NCQUNoQyw0RUFBQ0MsTUFBSTs7a0NBQ0gsOERBQUNDLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxZQUFZOzswQ0FDekIsOERBQUNDLE9BQUs7Z0NBQUNDLEdBQUcsRUFBQyxvQkFBb0I7MENBQUMsZUFBYTs7Ozs7b0NBQVE7MENBQ3JELDhEQUFDQyxPQUFLO2dDQUFDZCxJQUFJLEVBQUMsT0FBTztnQ0FBQ1csU0FBUyxFQUFDLGNBQWM7Z0NBQUNJLEVBQUUsRUFBQyxvQkFBb0I7Z0NBQUNDLGtCQUFnQixFQUFDLFdBQVc7Z0NBQUNDLFdBQVcsRUFBQyxhQUFhOzs7OztvQ0FBRTswQ0FDM0gsOERBQUNDLE9BQUs7Z0NBQUNILEVBQUUsRUFBQyxXQUFXO2dDQUFDSixTQUFTLEVBQUMsc0JBQXNCOzBDQUFDLGdEQUE4Qzs7Ozs7b0NBQVE7Ozs7Ozs0QkFDM0c7a0NBQ04sOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxZQUFZOzswQ0FDekIsOERBQUNDLE9BQUs7Z0NBQUNDLEdBQUcsRUFBQyx1QkFBdUI7MENBQUMsVUFBUTs7Ozs7b0NBQVE7MENBQ25ELDhEQUFDQyxPQUFLO2dDQUFDZCxJQUFJLEVBQUMsVUFBVTtnQ0FBQ1csU0FBUyxFQUFDLGNBQWM7Z0NBQUNJLEVBQUUsRUFBQyx1QkFBdUI7Z0NBQUNFLFdBQVcsRUFBQyxVQUFVOzs7OztvQ0FBRTs7Ozs7OzRCQUMvRjtrQ0FDTiw4REFBQ0UsUUFBTTt3QkFBQ1IsU0FBUyxFQUFDLFFBQVE7dUJBQUNBLHNCQUFBQSxXQUFTLEVBQUMsaUJBQWlCLEdBckM1RCxrQ0FxQzZELFFBQU07Ozs7NEJBQVM7Ozs7OztvQkFDakU7Ozs7O2dCQUNLO3FCQUNYLENBQ0Y7Q0FDRjtBQXRDdUJ2QixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZV9zdHVkZW50LmpzPzhjNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudCgpIHtcbiAgZnVuY3Rpb24gc2VhcmNoKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ1RoZSBsaW5rIHdhcyBjbGlja2VkLicpO1xuICAgIHZhciBzdHVkZW50SWRJbnB1dCA9ICQoXCIjc3R1ZGVudElkSW5wdXRcIikudmFsKCk7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9FdGlxYVNjaG9vbC9zdHVkZW50LycgKyBzdHVkZW50SWRJbnB1dCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgfVxuICAgICAgLCBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoPD5cbiAgICA8Y29udGFpbmVyIHN0eWxlPXt7bWFyZ2luOic1cHgnfX0+XG4gICAgPGZvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiLz5cbiAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPC9jb250YWluZXI+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJTdHVkZW50Iiwic2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0dWRlbnRJZElucHV0IiwiJCIsInZhbCIsImFqYXgiLCJ1cmwiLCJoZWFkZXJzIiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJlcnJvciIsImNvbnRhaW5lciIsInN0eWxlIiwibWFyZ2luIiwiZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJwbGFjZWhvbGRlciIsInNtYWxsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create_student.js\n");

/***/ })

});