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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Student() {\n    var _handleSubmit = function _handleSubmit(e) {\n        e.preventDefault();\n        var jsonData = {};\n        $.each($(\"#student_create_form\").serializeArray(), function() {\n            jsonData[this.name] = this.value;\n        });\n        var data = JSON.stringify(jsonData);\n        console.log(data);\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/saveStudent\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"POST\",\n            contentType: \"text/json\",\n            data: data,\n            success: function success(result) {\n                alert(\"Student Create with Id : \" + result.id);\n            },\n            error: function error() {\n                console.log(\"error\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            id: \"student_create_form\",\n            onSubmit: _handleSubmit,\n            className: \"row g-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit btn btn-primary\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNaO0FBQ1g7QUFFYixTQUFTSyxPQUFPLEdBQUc7UUFDdkJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxDQUFDLEVBQUU7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7UUFDakJDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0UsY0FBYyxFQUFFLEVBQUUsV0FBWTtZQUM3REgsUUFBUSxDQUFDLElBQUksQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDO1FBQ25DUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7UUFDbEJMLENBQUMsQ0FBQ1UsSUFBSSxDQUFDO1lBQ0xDLEdBQUcsRUFBRSwrQ0FBK0M7WUFDcERDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRSxNQUFNO1lBQ1pDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCVCxJQUFJLEVBQUVBLElBQUk7WUFDVlUsT0FBTyxFQUFFLFNBQVRBLE9BQU8sQ0FBWUMsTUFBTSxFQUFFO2dCQUN6QkMsS0FBSyxDQUFDLDJCQUEyQixHQUFHRCxNQUFNLENBQUNFLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0NDLEtBQUssRUFBRSxTQUFQQSxLQUFLLEdBQWM7Z0JBQ25CWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBQ0QscUJBQVE7a0JBQ04sNEVBQUNXLE1BQUk7WUFBQ0YsRUFBRSxFQUFDLHFCQUFxQjtZQUFDRyxRQUFRLEVBQUV6QixhQUFhO1lBQUUwQixTQUFTLEVBQUMsU0FBUzs7OEJBQ3pFLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsVUFBVTs7c0NBQ3ZCLDhEQUFDRSxPQUFLO3NDQUFDLE1BQUk7Ozs7O2dDQUFRO3NDQUNuQiw4REFBQ0MsT0FBSzs0QkFBQ0gsU0FBUyxFQUFDLGNBQWM7NEJBQUNKLEVBQUUsRUFBQyxNQUFNOzRCQUFDZixJQUFJLEVBQUMsTUFBTTs0QkFBQ3VCLFdBQVcsRUFBQyxNQUFNOzs7OztnQ0FBRzs7Ozs7O3dCQUN2RTs4QkFDTiw4REFBQ0gsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLFFBQVE7OEJBQ3JCLDRFQUFDSyxRQUFNO3dCQUFDTCxTQUFTLEVBQUMsd0JBQXdCO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDdEQ7Ozs7OztnQkFDRDtxQkFDTixDQUNGO0NBQ0Y7QUFyQ3VCM0IsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcz84YzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnQoKSB7XG4gIGZ1bmN0aW9uIF9oYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIganNvbkRhdGEgPSB7fTtcbiAgICAkLmVhY2goJChcIiNzdHVkZW50X2NyZWF0ZV9mb3JtXCIpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGpzb25EYXRhW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgIH0pO1xuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvRXRpcWFTY2hvb2wvc2F2ZVN0dWRlbnQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICBjb250ZW50VHlwZTogJ3RleHQvanNvbicsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBhbGVydChcIlN0dWRlbnQgQ3JlYXRlIHdpdGggSWQgOiBcIiArIHJlc3VsdC5pZCk7XG4gICAgICB9XG4gICAgICAsIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuICg8PlxuICAgIDxmb3JtIGlkPVwic3R1ZGVudF9jcmVhdGVfZm9ybVwiIG9uU3VibWl0PXtfaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQgYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJTdHVkZW50IiwiX2hhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImpzb25EYXRhIiwiJCIsImVhY2giLCJzZXJpYWxpemVBcnJheSIsIm5hbWUiLCJ2YWx1ZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ1cmwiLCJoZWFkZXJzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImFsZXJ0IiwiaWQiLCJlcnJvciIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create_student.js\n");

/***/ })

});