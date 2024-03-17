"use strict";
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 6080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ ThemeProvider),
  "F": () => (/* binding */ useTheme)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/api/fetchApi.js
// fetchApi.js
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Contex.js
// context/ThemeContext.js

 // Create a new context


const ThemeContext = /*#__PURE__*/(0,external_react_.createContext)(); // Create a provider component

function ThemeProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae#');
      setUser(res.user);
    };

    fetchDataAsync();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(ThemeContext.Provider, {
    value: {
      user
    },
    children: children
  });
} // Custom hook for consuming the theme context

function useTheme() {
  return (0,external_react_.useContext)(ThemeContext);
}

/***/ })

};
;