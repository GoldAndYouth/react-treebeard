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
    first: "M29.8246 8.03528C30.4013 7.35836 30.3611 6.35193 29.7323 5.72311L27.2718 \n               3.26263C26.643 2.63381 25.6366 2.59365 24.9597 3.17037L10.6772 15.3386C10.4878 \n               15.5 10.4763 15.7886 10.6522 15.9646L17.0303 22.3427C17.2063 \n               22.5187 17.495 22.5072 17.6564 22.3177L29.8246 8.03528Z",
    second: "M3.78904 28.655C3.65487 29.0006 3.99524 29.341 4.34085 29.2068L14.322 \n                25.3321C14.6091 25.2207 14.687 24.8509 14.4692 24.6331L8.36274 \n                18.5267C8.14495 18.3089 7.77518 18.3867 7.66372 18.6739L3.78904 28.655Z"
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
    viewBox: '0 0 35 35'
  }, _react["default"].createElement("path", {
    fill: 'white',
    d: icons['first']
  }), _react["default"].createElement("path", {
    fill: 'white',
    d: icons['second']
  }))));
};

Sdk.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  style: _propTypes["default"].object
};
var _default = Sdk;
exports["default"] = _default;