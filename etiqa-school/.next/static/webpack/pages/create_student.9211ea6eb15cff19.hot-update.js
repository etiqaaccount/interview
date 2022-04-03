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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Student() {\n    var _handleSubmit = function _handleSubmit(e) {\n        e.preventDefault();\n        var jsonData = {};\n        $.each($(\"#student_create_form\").serializeArray(), function() {\n            jsonData[this.name] = this.value;\n        });\n        var data = JSON.stringify(jsonData);\n        console.log(data);\n        $.ajax({\n            url: \"http://127.0.0.1:8080/EtiqaSchool/saveStudent\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            type: \"POST\",\n            contentType: \"text/json\",\n            data: data,\n            success: function success(result) {\n                $(\"#alert_div\").show();\n                $(\"#alert\").addClass(\"alert-success\");\n            },\n            error: function error() {\n                console.log(\"error\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            id: \"student_create_form\",\n            onSubmit: _handleSubmit,\n            className: \"row g-3 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Create Student\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-12\",\n                    id: \"alert_div\",\n                    style: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"alert\",\n                        role: \"alert\",\n                        id: \"alert\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit btn btn-success\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\x\\\\Documents\\\\SpingWorkSpace\\\\etiqa\\\\etiqa-school\\\\pages\\\\create_student.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNaO0FBQ1g7QUFFYixTQUFTSyxPQUFPLEdBQUc7UUFDdkJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxDQUFDLEVBQUU7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7UUFDakJDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0UsY0FBYyxFQUFFLEVBQUUsV0FBWTtZQUM3REgsUUFBUSxDQUFDLElBQUksQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDO1FBQ25DUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7UUFDbEJMLENBQUMsQ0FBQ1UsSUFBSSxDQUFDO1lBQ0xDLEdBQUcsRUFBRSwrQ0FBK0M7WUFDcERDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRSxNQUFNO1lBQ1pDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCVCxJQUFJLEVBQUVBLElBQUk7WUFDVlUsT0FBTyxFQUFFLFNBQVRBLE9BQU8sQ0FBWUMsTUFBTSxFQUFFO2dCQUN6QmhCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2lCLElBQUksRUFBRSxDQUFDO2dCQUN2QmpCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2tCLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN2QztZQUNDQyxLQUFLLEVBQUUsU0FBUEEsS0FBSyxHQUFjO2dCQUNuQlgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7U0FDRixDQUFDLENBQUM7S0FDSjtJQUNELHFCQUFRO2tCQUNOLDRFQUFDVyxNQUFJO1lBQUNDLEVBQUUsRUFBQyxxQkFBcUI7WUFBQ0MsUUFBUSxFQUFFMUIsYUFBYTtZQUFFMkIsU0FBUyxFQUFDLGlCQUFpQjs7OEJBQ2pGLDhEQUFDQyxJQUFFOzhCQUFDLGdCQUFjOzs7Ozt3QkFBSzs4QkFDdkIsOERBQUNDLEtBQUc7b0JBQUNGLFNBQVMsRUFBQyxXQUFXO29CQUFDRixFQUFFLEVBQUMsV0FBVztvQkFBQ0ssS0FBSyxFQUFFO3dCQUFFQyxPQUFPLEVBQUUsTUFBTTtxQkFBRTs4QkFDbEUsNEVBQUNGLEtBQUc7d0JBQUNHLEtBQUssRUFBQyxPQUFPO3dCQUFDQyxJQUFJLEVBQUMsT0FBTzt3QkFBQ1IsRUFBRSxFQUFDLE9BQU87Ozs7OzRCQUNwQzs7Ozs7d0JBQ0Y7OEJBQ04sOERBQUNJLEtBQUc7b0JBQUNGLFNBQVMsRUFBQyxVQUFVOztzQ0FDdkIsOERBQUNPLE9BQUs7c0NBQUMsTUFBSTs7Ozs7Z0NBQVE7c0NBQ25CLDhEQUFDQyxPQUFLOzRCQUFDUixTQUFTLEVBQUMsY0FBYzs0QkFBQ0YsRUFBRSxFQUFDLE1BQU07NEJBQUNsQixJQUFJLEVBQUMsTUFBTTs0QkFBQzZCLFdBQVcsRUFBQyxNQUFNOzs7OztnQ0FBRzs7Ozs7O3dCQUN2RTs4QkFDTiw4REFBQ1AsS0FBRztvQkFBQ0YsU0FBUyxFQUFDLFFBQVE7OEJBQ3JCLDRFQUFDVSxRQUFNO3dCQUFDVixTQUFTLEVBQUMsd0JBQXdCO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDdEQ7Ozs7OztnQkFDRDtxQkFDTixDQUNGO0NBQ0Y7QUEzQ3VCNUIsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVfc3R1ZGVudC5qcz84YzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnQoKSB7XG4gIGZ1bmN0aW9uIF9oYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIganNvbkRhdGEgPSB7fTtcbiAgICAkLmVhY2goJChcIiNzdHVkZW50X2NyZWF0ZV9mb3JtXCIpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGpzb25EYXRhW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xuICAgIH0pO1xuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvRXRpcWFTY2hvb2wvc2F2ZVN0dWRlbnQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICBjb250ZW50VHlwZTogJ3RleHQvanNvbicsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAkKCcjYWxlcnRfZGl2Jykuc2hvdygpO1xuICAgICAgICAkKCcjYWxlcnQnKS5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICB9XG4gICAgICAsIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuICg8PlxuICAgIDxmb3JtIGlkPVwic3R1ZGVudF9jcmVhdGVfZm9ybVwiIG9uU3VibWl0PXtfaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJyb3cgZy0zIG14LWF1dG9cIj5cbiAgICAgIDxoMj5DcmVhdGUgU3R1ZGVudDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIGlkPVwiYWxlcnRfZGl2XCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydFwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdCBidG4gYnRuLXN1Y2Nlc3NcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsIlN0dWRlbnQiLCJfaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwianNvbkRhdGEiLCIkIiwiZWFjaCIsInNlcmlhbGl6ZUFycmF5IiwibmFtZSIsInZhbHVlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiYWpheCIsInVybCIsImhlYWRlcnMiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2hvdyIsImFkZENsYXNzIiwiZXJyb3IiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImgyIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3MiLCJyb2xlIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create_student.js\n");

/***/ })

});