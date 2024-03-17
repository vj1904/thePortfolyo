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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/Contex.js":
/*!*************************!*\
  !*** ./pages/Contex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"useTheme\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetchApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/fetchApi */ \"./pages/api/fetchApi.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Vaibhav Jaiswal\\\\Desktop\\\\dizme\\\\pages\\\\Contex.js\";\n// context/ThemeContext.js\n\n // Create a new context\n\n\nconst ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(); // Create a provider component\n\nfunction ThemeProvider({\n  children\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchDataAsync = async () => {\n      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_1__.fetchData)('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae#');\n      setUser(res.user);\n      console.log(user);\n    };\n\n    fetchDataAsync();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ThemeContext.Provider, {\n    value: {\n      user\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 1\n  }, this);\n} // Custom hook for consuming the theme context\n\nfunction useTheme() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db250ZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7OztBQUNBLE1BQU1NLFlBQVksZ0JBQUdMLG9EQUFhLEVBQWxDLEVBRUE7O0FBQ08sU0FBU00sYUFBVCxDQUF1QjtBQUFFQyxFQUFBQTtBQUFGLENBQXZCLEVBQXFDO0FBRXhDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQlIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0FFLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1PLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFlBQU1DLEdBQUcsR0FBRyxNQUFNUCx3REFBUyxDQUFDLHVGQUFELENBQTNCO0FBRUFLLE1BQUFBLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDSCxJQUFMLENBQVA7QUFDQUksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDRCxLQUxEOztBQU9BRSxJQUFBQSxjQUFjO0FBQ2YsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdGLHNCQUNGLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFDRixNQUFBQTtBQUFELEtBQTlCO0FBQUEsY0FDT0Q7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUFLRCxFQUVEOztBQUNPLFNBQVNPLFFBQVQsR0FBb0I7QUFDekIsU0FBT1osaURBQVUsQ0FBQ0csWUFBRCxDQUFqQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGl6bWUvLi9wYWdlcy9Db250ZXguanM/Y2I4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb250ZXh0L1RoZW1lQ29udGV4dC5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGkvZmV0Y2hBcGknO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IGNvbnRleHRcclxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gQ3JlYXRlIGEgcHJvdmlkZXIgY29tcG9uZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YUFzeW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSgnaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlIycpO1xyXG4gICAgICAgXHJcbiAgICAgICAgc2V0VXNlcihyZXMudXNlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBmZXRjaERhdGFBc3luYygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG48VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlcn19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gaG9vayBmb3IgY29uc3VtaW5nIHRoZSB0aGVtZSBjb250ZXh0XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImZldGNoRGF0YUFzeW5jIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZVRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Contex.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Contex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contex */ \"./pages/Contex.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Vaibhav Jaiswal\\\\Desktop\\\\dizme\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Contex__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTRyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSwyQkFDQSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsa0xBRFA7QUFFRSxhQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFDRSxjQUFJLEVBQUMsbUpBRFA7QUFFRSxhQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztBQUVELGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGl6bWUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuL0NvbnRleFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0ZyYWdtZW50PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZyYWdtZW50IiwiVGhlbWVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/api/fetchApi.js":
/*!*******************************!*\
  !*** ./pages/api/fetchApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n// fetchApi.js\nasync function fetchData(endpoint) {\n  try {\n    const response = await fetch(endpoint);\n\n    if (!response.ok) {\n      throw new Error('Failed to fetch data');\n    }\n\n    return await response.json();\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    return null;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmV0Y2hBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRU8sZUFBZUEsU0FBZixDQUF5QkMsUUFBekIsRUFBbUM7QUFDdEMsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLFFBQUQsQ0FBNUI7O0FBQ0EsUUFBSSxDQUFDQyxRQUFRLENBQUNFLEVBQWQsRUFBa0I7QUFDaEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNEOztBQUNELFdBQU8sTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQWI7QUFDRCxHQU5ELENBTUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLHNCQUFkLEVBQXNDQSxLQUF0QztBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXptZS8uL3BhZ2VzL2FwaS9mZXRjaEFwaS5qcz84NDk1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZldGNoQXBpLmpzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGVuZHBvaW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiZmV0Y2hEYXRhIiwiZW5kcG9pbnQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/fetchApi.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();