"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/student_list",{

/***/ "./pages/student_list.js":
/*!*******************************!*\
  !*** ./pages/student_list.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt/css/jquery.dataTables.min.css */ \"./node_modules/datatables.net-dt/css/jquery.dataTables.min.css\");\n/* harmony import */ var datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Student() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/students\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"GET\",\n            /* or type:\"GET\" or type:\"PUT\" */ dataType: \"json\",\n            data: {},\n            success: function success(result) {\n                $(\"#table_id\").DataTable({\n                    data: result,\n                    columns: [\n                        {\n                            data: \"id\"\n                        },\n                        {\n                            data: \"name\"\n                        }, \n                    ]\n                });\n                var table = $(\"#table_id\").DataTable();\n                $(\"#table_id tbody\").on(\"dblclick\", \"tr\", function() {\n                    var data = table.row(this).data();\n                    console.log(data.id);\n                });\n            },\n            error: function error() {\n                console.log(\"error\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row g-3 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Delete Student\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: \"table_id\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Student Id\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Student Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_s(Student, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50X2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNlO0FBQ2pCO0FBQ1k7O0FBRXBDLFNBQVNJLE9BQU8sR0FBRzs7SUFDaEMsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCRyxnREFBUyxDQUFDLFdBQU07UUFDZEcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDTEMsR0FBRyxFQUFFLDRDQUE0QztZQUNqREMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFLEtBQUs7WUFBRSxpQ0FBaUMsQ0FDOUNDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxJQUFJLEVBQUUsRUFDTDtZQUNEQyxPQUFPLEVBQUUsU0FBVEEsT0FBTyxDQUFZQyxNQUFNLEVBQUU7Z0JBQ3pCUixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNTLFNBQVMsQ0FBQztvQkFDdkJILElBQUksRUFBRUUsTUFBTTtvQkFBRUUsT0FBTyxFQUFFO3dCQUNyQjs0QkFBRUosSUFBSSxFQUFFLElBQUk7eUJBQUU7d0JBQ2Q7NEJBQUVBLElBQUksRUFBRSxNQUFNO3lCQUFFO3FCQUFFO2lCQUNyQixDQUFDLENBQUM7Z0JBQ0gsSUFBSUssS0FBSyxHQUFHWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNTLFNBQVMsRUFBRTtnQkFDdENULENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDWSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFZO29CQUNwRCxJQUFJTixJQUFJLEdBQUdLLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDUCxJQUFJLEVBQUU7b0JBQ2pDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsSUFBSSxDQUFDVSxFQUFFLENBQUMsQ0FBQztpQkFDdEIsQ0FBQyxDQUFDO2FBQ0o7WUFDQ0MsS0FBSyxFQUFFLFNBQVBBLEtBQUssR0FBYztnQkFDbkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUFRO2tCQUNOLDRFQUFDRyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxpQkFBaUI7OzhCQUM5Qiw4REFBQ0MsSUFBRTs4QkFBQyxnQkFBYzs7Ozs7d0JBQUs7OEJBQ3ZCLDhEQUFDVCxPQUFLO29CQUFDSyxFQUFFLEVBQUMsVUFBVTs7c0NBQ2xCLDhEQUFDSyxPQUFLO3NDQUNKLDRFQUFDQyxJQUFFOztrREFDRCw4REFBQ0MsSUFBRTtrREFBQyxZQUFVOzs7Ozs0Q0FBSztrREFDbkIsOERBQUNBLElBQUU7a0RBQUMsY0FBWTs7Ozs7NENBQUs7Ozs7OztvQ0FDbEI7Ozs7O2dDQUNDO3NDQUNSLDhEQUFDQyxPQUFLOzs7O2dDQUNFOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDSjtxQkFDTCxDQUNGO0NBQ0Y7R0E5Q3VCMUIsT0FBTzs7UUFDZEosa0RBQVM7OztBQURGSSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0dWRlbnRfbGlzdC5qcz8xMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWR0L2Nzcy9qcXVlcnkuZGF0YVRhYmxlcy5taW4uY3NzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudCgpIHsgIFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo4MDgwL0V0aXFhU2Nob29sL3N0dWRlbnRzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHR5cGU6IFwiR0VUXCIsIC8qIG9yIHR5cGU6XCJHRVRcIiBvciB0eXBlOlwiUFVUXCIgKi9cbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGRhdGE6IHtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICQoJyN0YWJsZV9pZCcpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgZGF0YTogcmVzdWx0LCBjb2x1bW5zOiBbXG4gICAgICAgICAgICB7IGRhdGE6ICdpZCcgfSxcbiAgICAgICAgICAgIHsgZGF0YTogJ25hbWUnIH0sXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0YWJsZSA9ICQoJyN0YWJsZV9pZCcpLkRhdGFUYWJsZSgpO1xuICAgICAgICAkKCcjdGFibGVfaWQgdGJvZHknKS5vbignZGJsY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSB0YWJsZS5yb3codGhpcykuZGF0YSgpOyAgICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAsIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zIG14LWF1dG9cIj5cbiAgICAgIDxoMj5EZWxldGUgU3R1ZGVudDwvaDI+XG4gICAgICA8dGFibGUgaWQ9XCJ0YWJsZV9pZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN0dWRlbnQgSWQ8L3RoPlxuICAgICAgICAgICAgPHRoPlN0dWRlbnQgTmFtZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3R1ZGVudCIsInJvdXRlciIsIiQiLCJhamF4IiwidXJsIiwiaGVhZGVycyIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiRGF0YVRhYmxlIiwiY29sdW1ucyIsInRhYmxlIiwib24iLCJyb3ciLCJjb25zb2xlIiwibG9nIiwiaWQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/student_list.js\n");

/***/ })

});