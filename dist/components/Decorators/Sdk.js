"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sdk = function Sdk(_ref) {
  var style = _ref.style,
      onClick = _ref.onClick;
  var height = style.height,
      width = style.width;
  var icons = {
    star: "M6.39092 0.911695L7.22134 3.59812C7.25253 3.70039 7.31579 3.78992 7.40178 3.85348C7.48776 3.91703 \n        7.59191 3.95124 7.69884 3.95105H10.4019C10.5059 3.95185 10.6072 3.98495 10.6916 4.04578C10.7761 4.10661 \n        10.8395 4.19215 10.8733 4.29061C10.907 4.38906 10.9093 4.49556 10.8799 4.59539C10.8505 4.69522 10.7908 \n        4.78345 10.7091 4.8479L8.46698 6.57103C8.38565 6.63288 8.3253 6.71823 8.2941 6.81553C8.26291 6.91282 \n        8.26238 7.01736 8.29259 7.11496L9.12301 9.88027C9.15564 9.98112 9.15497 10.0898 9.12111 10.1902C9.08724 \n        10.2907 9.02197 10.3776 8.93494 10.4381C8.84791 10.4986 8.74373 10.5295 8.63778 10.5262C8.53183 10.523 \n        8.42974 10.4858 8.34657 10.42L6.20407 8.7592C6.11709 8.69253 6.01056 8.6564 5.90097 8.6564C5.79138 \n        8.6564 5.68484 8.69253 5.59787 8.7592L3.45537 10.42C3.3722 10.4858 3.27011 10.523 3.16416 10.5262C3.05821 \n        10.5295 2.95403 10.4986 2.867 10.4381C2.77997 10.3776 2.7147 10.2907 2.68083 10.1902C2.64696 10.0898 \n        2.6463 9.98112 2.67892 9.88027L3.50935 7.11496C3.53956 7.01736 3.53903 6.91282 3.50784 6.81553C3.47664 \n        6.71823 3.41629 6.63288 3.33496 6.57103L1.09282 4.8479C1.0085 4.7818 0.947531 4.69048 0.918798 \n        4.58727C0.890064 4.48407 0.895075 4.37437 0.933098 4.27421C0.971121 4.17406 1.04017 4.08867 1.13015 \n        4.03053C1.22014 3.9724 1.32635 3.94454 1.43329 3.95105H4.14462C4.25063 3.95195 4.35408 3.91844 4.43943 \n        3.85555C4.52477 3.79266 4.58742 3.70379 4.61796 3.60227L5.44839 0.911695C5.47997 0.811453 5.54269 \n        0.723893 5.62744 0.661738C5.71219 0.599583 5.81456 0.566071 5.91965 0.566071C6.02475 0.566071 6.12711 \n        0.599583 6.21186 0.661738C6.29661 0.723893 6.35934 0.811453 6.39092 0.911695Z"
  };
  return _react["default"].createElement("div", {
    style: style.base,
    onClick: onClick
  }, _react["default"].createElement(_common.Div, {
    style: style.wrapper
  }, _react["default"].createElement("svg", {
    width: width,
    height: height,
    style: style,
    viewBox: "0 0 ".concat(width, " ").concat(height)
  }, _react["default"].createElement("defs", null, _react["default"].createElement("linearGradient", {
    id: "gradient",
    gradientTransform: "rotate(90)"
  }, _react["default"].createElement("stop", {
    offset: "0%",
    stopColor: "#FFFADF"
  }), _react["default"].createElement("stop", {
    offset: "100%",
    stopColor: "#FFD600"
  }))), _react["default"].createElement("path", {
    fill: 'url("#gradient")',
    strokeWidth: '0.5px',
    d: icons['star']
  }))));
};

Sdk.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  style: _propTypes["default"].object
};
var _default = Sdk;
exports["default"] = _default;