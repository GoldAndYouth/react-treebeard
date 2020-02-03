"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _lodash = require("lodash");

var _animations = _interopRequireDefault(require("../../themes/animations"));

var _util = require("../../util");

var _common = require("../common");

var _NodeHeader = _interopRequireDefault(require("../NodeHeader"));

var _dragginit = require("dragginit");

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Li = (0, _styled["default"])('li', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['className', 'children', 'ref'].indexOf(prop) !== -1;
  }
})(function (_ref) {
  var style = _ref.style;
  return style;
});

var TreeNode =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeNode).apply(this, arguments));
  }

  _createClass(TreeNode, [{
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          node = _this$props.node,
          onToggle = _this$props.onToggle;

      if (onToggle) {
        onToggle(node, !node.toggled);
      }
    }
  }, {
    key: "animations",
    value: function animations() {
      var _this$props2 = this.props,
          animations = _this$props2.animations,
          node = _this$props2.node;

      if (!animations) {
        return {
          toggle: _animations["default"].toggle(this.props, 0)
        };
      }

      var animation = Object.assign({}, animations, node.animations);
      return {
        toggle: animation.toggle(this.props),
        drawer: animation.drawer(this.props)
      };
    }
  }, {
    key: "decorators",
    value: function decorators() {
      var _this$props3 = this.props,
          decorators = _this$props3.decorators,
          node = _this$props3.node;
      var nodeDecorators = node.decorators || {};
      return Object.assign({}, decorators, nodeDecorators);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(decorators) {
      var _this$props4 = this.props,
          animations = _this$props4.animations,
          propDecorators = _this$props4.decorators,
          node = _this$props4.node,
          style = _this$props4.style,
          onToggle = _this$props4.onToggle,
          onSelect = _this$props4.onSelect,
          onDrag = _this$props4.onDrag,
          onRightSelect = _this$props4.onRightSelect,
          customStyles = _this$props4.customStyles;

      if (node.loading) {
        return _react["default"].createElement(_Loading["default"], {
          decorators: decorators,
          style: style
        });
      }

      var children = node.children;

      if (!(0, _lodash.isArray)(children)) {
        children = children ? [children] : [];
      }

      return _react["default"].createElement(_common.Ul, {
        style: style.subtree
      }, children.map(function (child) {
        return _react["default"].createElement(TreeNode, {
          onSelect: onSelect,
          onRightSelect: onRightSelect,
          onToggle: onToggle,
          onDrag: onDrag,
          animations: animations,
          style: style,
          customStyles: customStyles,
          decorators: propDecorators,
          key: child.id || (0, _util.randomString)(),
          node: child
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props5 = this.props,
          node = _this$props5.node,
          style = _this$props5.style,
          onSelect = _this$props5.onSelect,
          onRightSelect = _this$props5.onRightSelect,
          onDrag = _this$props5.onDrag,
          customStyles = _this$props5.customStyles;
      var decorators = this.decorators();
      var animations = this.animations();

      var restAnimationInfo = _extends({}, animations.drawer);

      return _react["default"].createElement(Li, {
        style: style.base
      }, _react["default"].createElement(_dragginit.Draggable, {
        onDrag: (0, _lodash.isFunction)(onDrag) ? function (e) {
          return onDrag(e, node);
        } : undefined
      }, _react["default"].createElement(_NodeHeader["default"], {
        decorators: decorators,
        animations: animations,
        node: node,
        style: style,
        customStyles: customStyles,
        onClick: function onClick() {
          return _this.onClick();
        },
        onSelect: (0, _lodash.isFunction)(onSelect) ? function (e) {
          return onSelect(e, node);
        } : undefined,
        onRightSelect: (0, _lodash.isFunction)(onRightSelect) ? function (e) {
          return onRightSelect(e, node);
        } : undefined
      })), _react["default"].createElement(_Drawer["default"], {
        restAnimationInfo: _objectSpread({}, restAnimationInfo)
      }, node.toggled ? this.renderChildren(decorators, animations) : null));
    }
  }]);

  return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
  onSelect: _propTypes["default"].func,
  onRightSelect: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  onToggle: _propTypes["default"].func,
  style: _propTypes["default"].object.isRequired,
  customStyles: _propTypes["default"].object,
  node: _propTypes["default"].object.isRequired,
  decorators: _propTypes["default"].object.isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]).isRequired
};
TreeNode.defaultProps = {
  customStyles: {}
};
var _default = TreeNode;
exports["default"] = _default;