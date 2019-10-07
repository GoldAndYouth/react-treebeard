"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NodeHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(NodeHeader, _Component);

  function NodeHeader() {
    _classCallCheck(this, NodeHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(NodeHeader).apply(this, arguments));
  }

  _createClass(NodeHeader, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      var nextPropKeys = Object.keys(nextProps);

      for (var i = 0; i < nextPropKeys.length; i++) {
        var key = nextPropKeys[i];

        if (key === 'animations') {
          continue;
        }

        var isEqual = (0, _shallowequal["default"])(props[key], nextProps[key]);

        if (!isEqual) {
          return true;
        }
      }

      return !(0, _deepEqual["default"])(props.animations, nextProps.animations, {
        strict: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animations = _this$props.animations,
          decorators = _this$props.decorators,
          node = _this$props.node,
          onClick = _this$props.onClick,
          style = _this$props.style,
          onSelect = _this$props.onSelect,
          onRightSelect = _this$props.onRightSelect,
          customStyles = _this$props.customStyles;
      var active = node.active,
          children = node.children;
      var terminal = !children;
      var styles;

      if (active) {
        styles = Object.assign(style, {
          container: _objectSpread({}, style.link, {}, style.activeLink)
        });
      } else {
        styles = style;
      }

      return _react["default"].createElement(decorators.Container, {
        animations: animations,
        decorators: decorators,
        node: node,
        onClick: onClick,
        customStyles: customStyles,
        onSelect: onSelect,
        onRightSelect: onRightSelect,
        terminal: terminal,
        style: styles
      });
    }
  }]);

  return NodeHeader;
}(_react.Component);

NodeHeader.propTypes = {
  style: _propTypes["default"].object.isRequired,
  customStyles: _propTypes["default"].object,
  decorators: _propTypes["default"].object.isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]).isRequired,
  node: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onRightSelect: _propTypes["default"].func
};
NodeHeader.defaultProps = {
  customStyles: {}
};
var _default = NodeHeader;
exports["default"] = _default;