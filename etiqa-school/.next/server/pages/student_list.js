/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/student_list";
exports.ids = ["pages/student_list"];
exports.modules = {

/***/ "./pages/student_list.js":
/*!*******************************!*\
  !*** ./pages/student_list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Student)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt/css/jquery.dataTables.min.css */ \"./node_modules/datatables.net-dt/css/jquery.dataTables.min.css\");\n/* harmony import */ var datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Student() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/students\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"GET\",\n            /* or type:\"GET\" or type:\"PUT\" */ dataType: \"json\",\n            data: {},\n            success: function(result) {\n                $(\"#table_id\").DataTable({\n                    data: result,\n                    columns: [\n                        {\n                            data: \"id\"\n                        },\n                        {\n                            data: \"name\"\n                        }, \n                    ]\n                });\n                var table = $(\"#table_id\").DataTable();\n                $(\"#table_id tbody\").on(\"dblclick\", \"tr\", function() {\n                    var data = table.row(this).data();\n                    console.log(data.id);\n                });\n            },\n            error: function() {\n                console.log(\"error\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row g-3 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Student List\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    id: \"table_id\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Student Id\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Student Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\student_list.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50X2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNlO0FBQ2pCO0FBQ1k7QUFFcEMsU0FBU0ksT0FBTyxHQUFHO0lBQ2hDLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQkcsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ0xDLEdBQUcsRUFBRSw0Q0FBNEM7WUFDakRDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRSxLQUFLO1lBQUUsaUNBQWlDLENBQzlDQyxRQUFRLEVBQUUsTUFBTTtZQUNoQkMsSUFBSSxFQUFFLEVBQ0w7WUFDREMsT0FBTyxFQUFFLFNBQVVDLE1BQU0sRUFBRTtnQkFDekJSLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsU0FBUyxDQUFDO29CQUN2QkgsSUFBSSxFQUFFRSxNQUFNO29CQUFFRSxPQUFPLEVBQUU7d0JBQ3JCOzRCQUFFSixJQUFJLEVBQUUsSUFBSTt5QkFBRTt3QkFDZDs0QkFBRUEsSUFBSSxFQUFFLE1BQU07eUJBQUU7cUJBQUU7aUJBQ3JCLENBQUMsQ0FBQztnQkFDSCxJQUFJSyxLQUFLLEdBQUdYLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsU0FBUyxFQUFFO2dCQUN0Q1QsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVk7b0JBQ3BELElBQUlOLElBQUksR0FBR0ssS0FBSyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNQLElBQUksRUFBRTtvQkFDakNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUNVLEVBQUUsQ0FBQyxDQUFDO2lCQUN0QixDQUFDLENBQUM7YUFDSjtZQUNDQyxLQUFLLEVBQUUsV0FBWTtnQkFDbkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUFRO2tCQUNOLDRFQUFDRyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxpQkFBaUI7OzhCQUM5Qiw4REFBQ0MsSUFBRTs4QkFBQyxjQUFZOzs7Ozt3QkFBSzs4QkFDckIsOERBQUNULE9BQUs7b0JBQUNLLEVBQUUsRUFBQyxVQUFVO29CQUFDSyxLQUFLLEVBQUU7d0JBQUNDLEtBQUssRUFBQyxNQUFNO3FCQUFDOztzQ0FDeEMsOERBQUNDLE9BQUs7c0NBQ0osNEVBQUNDLElBQUU7O2tEQUNELDhEQUFDQyxJQUFFO2tEQUFDLFlBQVU7Ozs7OzRDQUFLO2tEQUNuQiw4REFBQ0EsSUFBRTtrREFBQyxjQUFZOzs7Ozs0Q0FBSzs7Ozs7O29DQUNsQjs7Ozs7Z0NBQ0M7c0NBQ1IsOERBQUNDLE9BQUs7Ozs7Z0NBQ0U7Ozs7Ozt3QkFDRjs7Ozs7O2dCQUNKO3FCQUNMLENBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aXFhLXNjaG9vbC8uL3BhZ2VzL3N0dWRlbnRfbGlzdC5qcz8xMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWR0L2Nzcy9qcXVlcnkuZGF0YVRhYmxlcy5taW4uY3NzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudCgpIHsgIFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo4MDgwL0V0aXFhU2Nob29sL3N0dWRlbnRzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHR5cGU6IFwiR0VUXCIsIC8qIG9yIHR5cGU6XCJHRVRcIiBvciB0eXBlOlwiUFVUXCIgKi9cbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIGRhdGE6IHtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICQoJyN0YWJsZV9pZCcpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgZGF0YTogcmVzdWx0LCBjb2x1bW5zOiBbXG4gICAgICAgICAgICB7IGRhdGE6ICdpZCcgfSxcbiAgICAgICAgICAgIHsgZGF0YTogJ25hbWUnIH0sXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0YWJsZSA9ICQoJyN0YWJsZV9pZCcpLkRhdGFUYWJsZSgpO1xuICAgICAgICAkKCcjdGFibGVfaWQgdGJvZHknKS5vbignZGJsY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSB0YWJsZS5yb3codGhpcykuZGF0YSgpOyAgICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAsIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zIG14LWF1dG9cIj5cbiAgICAgIDxoMj5TdHVkZW50IExpc3Q8L2gyPlxuICAgICAgPHRhYmxlIGlkPVwidGFibGVfaWRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+U3R1ZGVudCBJZDwvdGg+XG4gICAgICAgICAgICA8dGg+U3R1ZGVudCBOYW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdHVkZW50Iiwicm91dGVyIiwiJCIsImFqYXgiLCJ1cmwiLCJoZWFkZXJzIiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJEYXRhVGFibGUiLCJjb2x1bW5zIiwidGFibGUiLCJvbiIsInJvdyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsIndpZHRoIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/student_list.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/datatables.net-dt/css/jquery.dataTables.min.css":
/*!**********************************************************************!*\
  !*** ./node_modules/datatables.net-dt/css/jquery.dataTables.min.css ***!
  \**********************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/student_list.js"));
module.exports = __webpack_exports__;

})();