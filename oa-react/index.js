"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DropDown", {
  enumerable: true,
  get: function get() {
    return _DropDown.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Button.Card;
  }
});
Object.defineProperty(exports, "FilterGroup", {
  enumerable: true,
  get: function get() {
    return _FilterGroup.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
});
Object.defineProperty(exports, "CubeMenu", {
  enumerable: true,
  get: function get() {
    return _CubeMenu.default;
  }
});
Object.defineProperty(exports, "Sidebar", {
  enumerable: true,
  get: function get() {
    return _Sidebar.Sidebar;
  }
});
Object.defineProperty(exports, "SidebarItem", {
  enumerable: true,
  get: function get() {
    return _Sidebar.SidebarItem;
  }
});
Object.defineProperty(exports, "SidebarInjector", {
  enumerable: true,
  get: function get() {
    return _Sidebar.SidebarInjector;
  }
});

require("./dist/index.css");

var _DropDown = _interopRequireDefault(require("./dist/DropDown"));

var _Button = _interopRequireWildcard(require("./dist/Button"));

var _FilterGroup = _interopRequireDefault(require("./dist/FilterGroup"));

var _Carousel = _interopRequireDefault(require("./dist/Carousel"));

var _CubeMenu = _interopRequireDefault(require("./dist/CubeMenu"));

var _Sidebar = require("./dist/Sidebar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// scss
// mount FontAwesome script
if (typeof window !== 'undefined' && !document.head.querySelector('#fa-script')) {
  var script = document.createElement('script');
  script.src = 'https://use.fontawesome.com/releases/v5.11.2/js/all.js';
  script.id = 'fa-script';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}
