"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/delete_student",{

/***/ "./pages/delete_student.js":
/*!*********************************!*\
  !*** ./pages/delete_student.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Student() {\n    var _handleSubmit = function _handleSubmit(e) {\n        e.preventDefault();\n        var jsonData = {};\n        $.each($(\"#student_search_form\").serializeArray(), function() {\n            jsonData[this.name] = this.value;\n        });\n        var data = JSON.stringify(jsonData);\n        console.log(data);\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/student/\" + $(\"#id\").val(),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"GET\",\n            contentType: \"text/json\",\n            success: function success(result) {\n                $(\"#name\").text(result.name);\n            },\n            error: function error() {\n                alert(\"error\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"student_delete_form\",\n                onSubmit: _handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group mb-5\",\n                        style: {\n                            display: \"inline-block\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Id\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                id: \"id\",\n                                name: \"id\",\n                                placeholder: \"Id\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit btn btn-danger\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Student Name : \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                id: \"name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\delete_student.js\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGVfc3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNaO0FBQ1g7QUFFYixTQUFTSyxPQUFPLEdBQUc7UUFDdkJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxDQUFDLEVBQUU7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7UUFDakJDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0UsY0FBYyxFQUFFLEVBQUUsV0FBVztZQUM1REgsUUFBUSxDQUFDLElBQUksQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDO1FBQ25DUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7UUFDbEJMLENBQUMsQ0FBQ1UsSUFBSSxDQUFDO1lBQ0xDLEdBQUcsRUFBRSw0Q0FBNEMsR0FBQ1gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDWSxHQUFHLEVBQUU7WUFDaEVDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRSxLQUFLO1lBQ1hDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCQyxPQUFPLEVBQUUsU0FBVEEsT0FBTyxDQUFZQyxNQUFNLEVBQUU7Z0JBQ3pCakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDa0IsSUFBSSxDQUFDRCxNQUFNLENBQUNkLElBQUksQ0FBQyxDQUFDO2FBQzlCO1lBQ0NnQixLQUFLLEVBQUUsU0FBUEEsS0FBSyxHQUFjO2dCQUNuQkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxxQkFBUTs7MEJBQ04sOERBQUNDLE1BQUk7Z0JBQUNDLEVBQUUsRUFBQyxxQkFBcUI7Z0JBQUNDLFFBQVEsRUFBRTNCLGFBQWE7O2tDQUNwRCw4REFBQzRCLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7d0JBQUNDLEtBQUssRUFBRTs0QkFBQ0MsT0FBTyxFQUFDLGNBQWM7eUJBQUM7OzBDQUM5RCw4REFBQ0MsT0FBSzswQ0FBQyxJQUFFOzs7OztvQ0FBUTswQ0FDakIsOERBQUNDLE9BQUs7Z0NBQUNKLFNBQVMsRUFBQyxjQUFjO2dDQUFDSCxFQUFFLEVBQUUsSUFBSTtnQ0FBQ25CLElBQUksRUFBQyxJQUFJMkI7Z0NBQUFBLFdBQVcsRUFBQyxJQUFJOzs7OztvQ0FBRTs7Ozs7OzRCQUNoRTtrQ0FDTiw4REFBQ0MsUUFBTTt3QkFBQ04sU0FBUyxFQUFDLHVCQUF1QjtrQ0FBQyxRQUFNOzs7Ozs0QkFBUzs7Ozs7O29CQUNwRDswQkFDUCw4REFBQ08sTUFBSTswQkFBQyxpQkFBZTs7Ozs7b0JBQU87MEJBQzVCLDhEQUFDQSxNQUFJO2dCQUFDVixFQUFFLEVBQUMsTUFBTTs7Ozs7b0JBQVE7O29CQUN0QixDQUNGO0NBQ0Y7QUFwQ3VCM0IsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZWxldGVfc3R1ZGVudC5qcz85NDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnQoKSB7XG4gIGZ1bmN0aW9uIF9oYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgXG4gICAgdmFyIGpzb25EYXRhID0ge307XG4gICAgJC5lYWNoKCQoXCIjc3R1ZGVudF9zZWFyY2hfZm9ybVwiKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbigpIHtcbiAgICAgIGpzb25EYXRhW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgIH0pO1xuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvRXRpcWFTY2hvb2wvc3R1ZGVudC8nKyQoJyNpZCcpLnZhbCgpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9qc29uJywgICAgICBcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgJCgnI25hbWUnKS50ZXh0KHJlc3VsdC5uYW1lKTtcbiAgICAgIH1cbiAgICAgICwgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWxlcnQoXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKDw+ICAgIFxuICAgIDxmb3JtIGlkPVwic3R1ZGVudF9kZWxldGVfZm9ybVwiIG9uU3VibWl0PXtfaGFuZGxlU3VibWl0fSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItNVwiIHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxuICAgICAgICA8bGFiZWw+SWQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQgPVwiaWRcIiBuYW1lPVwiaWRcInBsYWNlaG9sZGVyPVwiSWRcIi8+ICAgICAgICBcbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQgYnRuIGJ0bi1kYW5nZXJcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+ICAgIFxuICAgIDxzcGFuPlN0dWRlbnQgTmFtZSA6IDwvc3Bhbj5cbiAgICA8c3BhbiBpZD1cIm5hbWVcIj48L3NwYW4+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJTdHVkZW50IiwiX2hhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImpzb25EYXRhIiwiJCIsImVhY2giLCJzZXJpYWxpemVBcnJheSIsIm5hbWUiLCJ2YWx1ZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ1cmwiLCJ2YWwiLCJoZWFkZXJzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHQiLCJlcnJvciIsImFsZXJ0IiwiZm9ybSIsImlkIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJsYWJlbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/delete_student.js\n");

/***/ })

});