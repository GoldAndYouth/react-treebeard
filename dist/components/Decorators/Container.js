"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _velocityReact = require("velocity-react");

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

var Container =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "renderToggle",
    value: function renderToggle() {
      var animations = this.props.animations;

      if (!animations) {
        return this.renderToggleDecorator();
      }

      return _react["default"].createElement(_velocityReact.VelocityComponent, {
        animation: animations.toggle.animation,
        duration: animations.toggle.duration
      }, this.renderToggleDecorator());
    }
  }, {
    key: "renderSdk",
    value: function renderSdk() {
      var _this$props = this.props,
          style = _this$props.style,
          decorators = _this$props.decorators,
          onSdkIconClick = _this$props.onSdkIconClick;
      return _react["default"].createElement(decorators.Sdk, {
        style: style.sdkIcon,
        onClick: onSdkIconClick
      });
    }
  }, {
    key: "renderToggleDecorator",
    value: function renderToggleDecorator() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          decorators = _this$props2.decorators,
          onClick = _this$props2.onClick;
      return _react["default"].createElement(decorators.Toggle, {
        style: style.toggle,
        onClick: onClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          decorators = _this$props3.decorators,
          terminal = _this$props3.terminal,
          sdk = _this$props3.sdk,
          node = _this$props3.node,
          onSelect = _this$props3.onSelect,
          onRightSelect = _this$props3.onRightSelect,
          onHoverOver = _this$props3.onHoverOver,
          onHoverLeave = _this$props3.onHoverLeave,
          customStyles = _this$props3.customStyles;
      return _react["default"].createElement("div", {
        style: node.active ? _objectSpread({}, style.container) : _objectSpread({}, style.link)
      }, !terminal ? this.renderToggle() : null, _react["default"].createElement(decorators.Header, {
        node: node,
        style: style.header,
        customStyles: customStyles,
        onSelect: onSelect,
        onRightSelect: onRightSelect,
        onHoverOver: onHoverOver,
        onHoverLeave: onHoverLeave
      }), sdk ? this.renderSdk() : null);
    }
  }]);

  return Container;
}(_react.PureComponent);

Container.propTypes = {
  customStyles: _propTypes["default"].object,
  style: _propTypes["default"].object.isRequired,
  decorators: _propTypes["default"].object.isRequired,
  terminal: _propTypes["default"].bool.isRequired,
  sdk: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func,
  onRightSelect: _propTypes["default"].func,
  onHoverOver: _propTypes["default"].func,
  onHoverLeave: _propTypes["default"].func,
  onSdkIconClick: _propTypes["default"].func,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]).isRequired,
  node: _propTypes["default"].object.isRequired
};
Container.defaultProps = {
  onSelect: null,
  onRightSelect: null,
  onHoverOver: null,
  onHoverLeave: null,
  customStyles: {}
};
var _default = Container;
exports["default"] = _default;