module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\julia\\OneDrive\\Dokument\\Repository\\Examensarbete\\Components\\Header.js";

const {
  default: Nav
} = __webpack_require__(/*! ./Nav */ "./Components/Nav.js");

const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/Layout.js":
/*!******************************!*\
  !*** ./Components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./Components/Header.js");
/* harmony import */ var _Styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/style.css */ "./Styles/style.css");
/* harmony import */ var _Styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_style_css__WEBPACK_IMPORTED_MODULE_3__);






const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Hj\xE4rtan av guld UF"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/litera/bootstrap.min.css"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), props.children]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./Components/Nav.js":
/*!***************************!*\
  !*** ./Components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\julia\\OneDrive\\Dokument\\Repository\\Examensarbete\\Components\\Nav.js";

const Nav = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "navbar-brand",
      href: "#",
      children: "Hj\xE4rtan av guld UF"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarColor03",
      "aria-controls": "navbarColor03",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "navbar-toggler-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "collapse navbar-collapse",
      id: "navbarColor03",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "navbar-nav mr-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item active",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "nav-link",
            href: "#",
            children: ["Hem", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "sr-only",
              children: "(current)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "nav-link",
            href: "#",
            children: "Produkter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "nav-link",
            href: "#",
            children: "Om oss"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "nav-link",
            href: "#",
            children: "Kontakt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./Components/Products.js":
/*!********************************!*\
  !*** ./Components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Product = props => {
  const {
    product
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    class: "card border-secondary mb-3",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      class: "card-header",
      children: product.name
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: product.images[0].src,
      alt: "produkt bild"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      class: "card-body",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h5", {
        class: "card-title",
        children: [product.price, " kr"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      href: "",
      className: "btn btn-secondary text-center",
      children: "K\xF6p"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./Styles/style.css":
/*!**************************!*\
  !*** ./Styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./client-config.js":
/*!**************************!*\
  !*** ./client-config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const clientConfig = {
  siteUrl: 'http://localhost:3000'
};
/* harmony default export */ __webpack_exports__["default"] = (clientConfig);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-config */ "./client-config.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Products */ "./Components/Products.js");






const Index = props => {
  const {
    products
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "product-wrapper",
      children: products.length ? products.map(product => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Components_Products__WEBPACK_IMPORTED_MODULE_4__["default"], {
        product: product
      }, product.id)) : ''
    })
  });
};

Index.getInitialProps = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${_client_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteUrl}/produkter`);
  const productsData = await res.json();
  return {
    products: productsData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQtY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiXSwibmFtZXMiOlsiZGVmYXVsdCIsIk5hdiIsInJlcXVpcmUiLCJIZWFkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJuYW1lIiwiaW1hZ2VzIiwic3JjIiwicHJpY2UiLCJjbGllbnRDb25maWciLCJzaXRlVXJsIiwiSW5kZXgiLCJwcm9kdWN0cyIsImxlbmd0aCIsIm1hcCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJwcm9kdWN0c0RhdGEiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUNLVyxRQUFRLENBQUNDLE1BQVQsR0FDR0QsUUFBUSxDQUFDRSxHQUFULENBQWFWLE9BQU8saUJBQUksOERBQUMsNERBQUQ7QUFBUyxlQUFPLEVBQUVBO0FBQWxCLFNBQWdDQSxPQUFPLENBQUNXLEVBQXhDLENBQXhCLENBREgsR0FFRztBQUhSO0FBREosSUFESjtBQVNILENBWEQ7O0FBYUFKLEtBQUssQ0FBQ0ssZUFBTixHQUF3QixZQUFZO0FBQ2hDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFFLEdBQUVULHNEQUFZLENBQUNDLE9BQVEsWUFBekIsQ0FBdkI7QUFDQSxRQUFNUyxZQUFZLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQTNCO0FBRUEsU0FBTztBQUNIUixZQUFRLEVBQUVPO0FBRFAsR0FBUDtBQUdILENBUEQ7O0FBU2VSLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHsgZGVmYXVsdDogTmF2IH0gPSByZXF1aXJlKFwiLi9OYXZcIilcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgJy4uL1N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SGrDpHJ0YW4gYXYgZ3VsZCBVRjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9saXRlcmEvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5IasOkcnRhbiBhdiBndWxkIFVGPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJDb2xvcjAzXCIgYXJpYS1jb250cm9scz1cIm5hdmJhckNvbG9yMDNcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhckNvbG9yMDNcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5IZW1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+UHJvZHVrdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5PbSBvc3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPktvbnRha3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJjb25zdCBQcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItc2Vjb25kYXJ5IG1iLTNcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9IGFsdD1cInByb2R1a3QgYmlsZFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5wcmljZX0ga3I8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IHRleHQtY2VudGVyXCI+S8O2cDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7IiwiY29uc3QgY2xpZW50Q29uZmlnID0ge1xyXG4gICAgc2l0ZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudENvbmZpZzsiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9Db21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgY2xpZW50Q29uZmlnIGZyb20gJy4uL2NsaWVudC1jb25maWcnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vQ29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiA8UHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e3Byb2R1Y3QuaWR9IC8+KVxyXG4gICAgICAgICAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2NsaWVudENvbmZpZy5zaXRlVXJsfS9wcm9kdWt0ZXJgKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNEYXRhXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9