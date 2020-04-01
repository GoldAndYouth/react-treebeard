"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _default2 = _interopRequireDefault(require("../themes/default"));

var _animations = _interopRequireDefault(require("../themes/animations"));

var _util = require("../util");

var _common = require("./common");

var _Decorators = _interopRequireDefault(require("./Decorators"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeBeard = function TreeBeard(_ref) {
  var animations = _ref.animations,
      decorators = _ref.decorators,
      data = _ref.data,
      onToggle = _ref.onToggle,
      onDrag = _ref.onDrag,
      style = _ref.style,
      onSelect = _ref.onSelect,
      onRightSelect = _ref.onRightSelect,
      customStyles = _ref.customStyles,
      onSdkIconClick = _ref.onSdkIconClick;
  return _react["default"].createElement(_common.Ul, {
    style: _objectSpread({}, _default2["default"].tree.base, {}, style.tree.base)
  }, (0, _lodash.castArray)(data).map(function (node) {
    return _react["default"].createElement(_TreeNode["default"], {
      decorators: decorators,
      node: node,
      onToggle: onToggle,
      onDrag: onDrag,
      animations: animations,
      onSelect: onSelect,
      onRightSelect: onRightSelect,
      onSdkIconClick: onSdkIconClick,
      customStyles: customStyles,
      key: node.id || (0, _util.randomString)(),
      style: _objectSpread({}, _default2["default"].tree.node, {}, style.tree.node)
    });
  }));
};

TreeBeard.propTypes = {
  style: _propTypes["default"].object,
  customStyles: _propTypes["default"].object,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]),
  onToggle: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onRightSelect: _propTypes["default"].func,
  onSdkIconClick: _propTypes["default"].func,
  decorators: _propTypes["default"].object
};
TreeBeard.defaultProps = {
  style: _default2["default"],
  animations: _animations["default"],
  decorators: _Decorators["default"],
  customStyles: {}
};
var _default = TreeBeard;
exports["default"] = _default;