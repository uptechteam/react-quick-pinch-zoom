'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cn = _interopDefault(require('classnames'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var abs = Math.abs,
    max = Math.max,
    min = Math.min,
    sqrt = Math.sqrt;
var isMac = /(Mac)/i.test(navigator.platform);
var isDragInteraction = function isDragInteraction(i) {
  return i === "drag";
};
var isZoomInteraction = function isZoomInteraction(i) {
  return i === "zoom";
};
var isZoomGesture = function isZoomGesture(wheelEvent) {
  return isMac && wheelEvent.ctrlKey;
};
var cancelEvent = function cancelEvent(event) {
  // event.stopPropagation();
  event.preventDefault();
};

var getDistance = function getDistance(a, b) {
  var x = a.x - b.x;
  var y = a.y - b.y;
  return sqrt(x * x + y * y);
};

var calculateScale = function calculateScale(startTouches, endTouches) {
  var startDistance = getDistance(startTouches[0], startTouches[1]);
  var endDistance = getDistance(endTouches[0], endTouches[1]);
  return endDistance / startDistance;
};
var isCloseTo = function isCloseTo(value, expected) {
  return value > expected - 0.01 && value < expected + 0.01;
};
var swing = function swing(p) {
  return -Math.cos(p * Math.PI) / 2 + 0.5;
};
var getPointByPageCoordinates = function getPointByPageCoordinates(touch) {
  return {
    x: touch.pageX,
    y: touch.pageY
  };
};
var getPageCoordinatesByTouches = function getPageCoordinatesByTouches(touches) {
  return _toConsumableArray(touches).map(getPointByPageCoordinates);
};

var sum = function sum(a, b) {
  return a + b;
};

var getVectorAvg = function getVectorAvg(vectors) {
  return {
    x: vectors.map(function (_ref) {
      var x = _ref.x;
      return x;
    }).reduce(sum, 0) / vectors.length,
    y: vectors.map(function (_ref2) {
      var y = _ref2.y;
      return y;
    }).reduce(sum, 0) / vectors.length
  };
};
var clamp = function clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
};
var isTouch = function isTouch() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
var shouldInterceptWheel = function shouldInterceptWheel(event) {
  return !(event.ctrlKey || event.metaKey);
};
var hasTranslate3DSupport = function hasTranslate3DSupport() {
  var css = window.CSS;
  return css && css.supports && css.supports("transform", "translate3d(0,0,0)");
};
var getElementSize = function getElementSize(element) {
  if (element) {
    var offsetWidth = element.offsetWidth,
        offsetHeight = element.offsetHeight; // Any DOMElement

    if (offsetWidth && offsetHeight) {
      return {
        width: offsetWidth,
        height: offsetHeight
      };
    } // Svg support


    var style = getComputedStyle(element);
    var width = parseFloat(style.width);
    var height = parseFloat(style.height);

    if (height && width) {
      return {
        width: width,
        height: height
      };
    }
  }

  return {
    width: 0,
    height: 0
  };
};
var make2dTransformValue = function make2dTransformValue(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      scale = _ref3.scale;
  return "scale(".concat(scale, ") translate(").concat(x, "px, ").concat(y, "px)");
};
var make3dTransformValue = function make3dTransformValue(_ref4) {
  var x = _ref4.x,
      y = _ref4.y,
      scale = _ref4.scale;
  return "scale3d(".concat(scale, ",").concat(scale, ", 1) translate3d(").concat(x, "px, ").concat(y, "px, 0)");
};
var calculateVelocity = function calculateVelocity(startPoint, endPoint) {
  return {
    x: endPoint.x - startPoint.x,
    y: endPoint.y - startPoint.y
  };
};
var comparePoints = function comparePoints(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_a__3aZjV {\n  overflow: hidden;\n  touch-action: none;\n}\n.styles_b__1HBpV {\n  transform-origin: 0 0;\n}\n";
var styles = {"a":"styles_a__3aZjV","b":"styles_b__1HBpV"};
styleInject(css);

var noup = function noup() {};
var zeroPoint = {
  x: 0,
  y: 0
};
var document$1 = window.document;
var _html = document$1.documentElement,
    _body = document$1.body;

var PinchZoom =
/*#__PURE__*/
function (_Component) {
  _inherits(PinchZoom, _Component);

  function PinchZoom() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PinchZoom);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PinchZoom)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_velocity", void 0);

    _defineProperty(_assertThisInitialized(_this), "_prevDragMovePoint", null);

    _defineProperty(_assertThisInitialized(_this), "_containerObserver", null);

    _defineProperty(_assertThisInitialized(_this), "_fingers", 0);

    _defineProperty(_assertThisInitialized(_this), "_firstMove", true);

    _defineProperty(_assertThisInitialized(_this), "_hasInteraction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_inAnimation", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialOffset", _objectSpread2({}, zeroPoint));

    _defineProperty(_assertThisInitialized(_this), "_interaction", null);

    _defineProperty(_assertThisInitialized(_this), "_isDoubleTap", false);

    _defineProperty(_assertThisInitialized(_this), "_isOffsetsSet", false);

    _defineProperty(_assertThisInitialized(_this), "_lastDragPosition", null);

    _defineProperty(_assertThisInitialized(_this), "_lastScale", 1);

    _defineProperty(_assertThisInitialized(_this), "_lastTouchStart", 0);

    _defineProperty(_assertThisInitialized(_this), "_lastZoomCenter", null);

    _defineProperty(_assertThisInitialized(_this), "_listenMouseMove", false);

    _defineProperty(_assertThisInitialized(_this), "_nthZoom", 0);

    _defineProperty(_assertThisInitialized(_this), "_offset", _objectSpread2({}, zeroPoint));

    _defineProperty(_assertThisInitialized(_this), "_startTouches", null);

    _defineProperty(_assertThisInitialized(_this), "_updatePlaned", false);

    _defineProperty(_assertThisInitialized(_this), "_wheelTimeOut", null);

    _defineProperty(_assertThisInitialized(_this), "_zoomFactor", 1);

    _defineProperty(_assertThisInitialized(_this), "_initialZoomFactor", 1);

    _defineProperty(_assertThisInitialized(_this), "_ignoreNextClick", false);

    _defineProperty(_assertThisInitialized(_this), "_containerRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "_handleClick", function (clickEvent) {
      if (_this._ignoreNextClick) {
        _this._ignoreNextClick = false;
        clickEvent.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onResize", function () {
      _this._updateInitialZoomFactor();

      _this._setupOffsets();

      _this._update();
    });

    _defineProperty(_assertThisInitialized(_this), "_handlerOnTouchEnd", _this._handlerIfEnable(function (touchEndEvent) {
      _this._fingers = touchEndEvent.touches.length;

      _this._updateInteraction(touchEndEvent);
    }));

    _defineProperty(_assertThisInitialized(_this), "_handlerOnTouchStart", _this._handlerIfEnable(function (touchStartEvent) {
      _this._firstMove = true;
      _this._fingers = touchStartEvent.touches.length;

      _this._detectDoubleTap(touchStartEvent);
    }));

    _defineProperty(_assertThisInitialized(_this), "_handlerOnTouchMove", _this._handlerIfEnable(function (touchMoveEvent) {
      if (_this._isDoubleTap) {
        return;
      }

      _this._collectInertia(touchMoveEvent);

      if (_this._firstMove) {
        _this._updateInteraction(touchMoveEvent);

        if (_this._interaction) {
          cancelEvent(touchMoveEvent);
        }

        _this._startTouches = getPageCoordinatesByTouches(touchMoveEvent.touches);
      } else {
        if (isZoomInteraction(_this._interaction)) {
          if (_this._startTouches && _this._startTouches.length === 2 && touchMoveEvent.touches.length === 2) {
            _this._handleZoom(touchMoveEvent, calculateScale(_this._startTouches, getPageCoordinatesByTouches(touchMoveEvent.touches)));
          }
        } else if (isDragInteraction(_this._interaction)) {
          _this._handleDrag(touchMoveEvent);
        }

        if (_this._interaction) {
          cancelEvent(touchMoveEvent);

          _this._update();
        }
      }

      _this._firstMove = false;
    }));

    _defineProperty(_assertThisInitialized(_this), "_handlerWheel", function (wheelEvent) {
      if (_this.props.shouldInterceptWheel(wheelEvent)) {
        return;
      }

      cancelEvent(wheelEvent);
      var pageX = wheelEvent.pageX,
          pageY = wheelEvent.pageY,
          deltaY = wheelEvent.deltaY,
          deltaMode = wheelEvent.deltaMode;
      var scaleDelta = 1;

      if (isZoomGesture(wheelEvent) || deltaMode === 1) {
        scaleDelta = 15;
      } // $FlowFixMe


      var likeTouchEvent = {
        touches: [{
          pageX: pageX,
          pageY: pageY
        }]
      };

      var center = _this._getOffsetByFirstTouch(likeTouchEvent);

      var dScale = deltaY * scaleDelta;

      _this._stopAnimation();

      _this._scaleTo(_this._zoomFactor - dScale / _this.props.wheelScaleFactor, center);

      _this._update();

      clearTimeout(_this._wheelTimeOut);
      _this._wheelTimeOut = setTimeout(function () {
        return _this._sanitize();
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_this), "_handlers", _this.props.isTouch() ? [["touchstart", _this._handlerOnTouchStart], ["touchend", _this._handlerOnTouchEnd], ["touchmove", _this._handlerOnTouchMove]] : [["mousemove", _this.simulate(_this._handlerOnTouchMove), document$1], ["mousedown", _this.simulate(_this._handlerOnTouchStart)], ["mouseup", _this.simulate(_this._handlerOnTouchEnd), document$1], ["click", _this._handleClick], ["wheel", _this._handlerWheel]]);

    return _this;
  }

  _createClass(PinchZoom, [{
    key: "_handleDragStart",
    value: function _handleDragStart(event) {
      this._ignoreNextClick = true;
      this.props.onDragStart();

      this._stopAnimation();

      this._resetInertia();

      this._lastDragPosition = null;
      this._hasInteraction = true;

      this._handleDrag(event);
    }
  }, {
    key: "_handleDrag",
    value: function _handleDrag(event) {
      var touch = this._getOffsetByFirstTouch(event);

      this._drag(touch, this._lastDragPosition);

      this._offset = this._sanitizeOffset(this._offset);
      this._lastDragPosition = touch;
    }
  }, {
    key: "_resetInertia",
    value: function _resetInertia() {
      this._velocity = null;
      this._prevDragMovePoint = null;
    }
  }, {
    key: "_realizeInertia",
    value: function _realizeInertia() {
      var _this2 = this;

      var _this$props = this.props,
          inertiaFriction = _this$props.inertiaFriction,
          inertia = _this$props.inertia;

      if (!inertia || !this._velocity) {
        return;
      }

      var _this$_velocity = this._velocity,
          x = _this$_velocity.x,
          y = _this$_velocity.y;

      if (x || y) {
        this._stopAnimation();

        this._resetInertia();

        var renderFrame = function renderFrame() {
          x *= inertiaFriction;
          y *= inertiaFriction;

          if (!x && !y) {
            return _this2._stopAnimation();
          }

          var prevOffset = _objectSpread2({}, _this2._offset);

          _this2._addOffset({
            x: x,
            y: y
          });

          _this2._offset = _this2._sanitizeOffset(_this2._offset);

          if (comparePoints(prevOffset, _this2._offset)) {
            return _this2._stopAnimation();
          }

          _this2._update({
            isAnimation: true
          });
        };

        this._animate(renderFrame, {
          duration: 9999
        });
      }
    }
  }, {
    key: "_collectInertia",
    value: function _collectInertia(_ref) {
      var touches = _ref.touches;

      if (!this.props.inertia) {
        return;
      }

      var currentCoordinates = getPageCoordinatesByTouches(touches)[0];
      var prevPoint = this._prevDragMovePoint;

      if (prevPoint) {
        // $FlowFixMe
        this._velocity = calculateVelocity(currentCoordinates, prevPoint);
      }

      this._prevDragMovePoint = currentCoordinates;
    }
  }, {
    key: "_handleDragEnd",
    value: function _handleDragEnd() {
      this.props.onDragEnd();

      this._end();

      this._realizeInertia();
    }
  }, {
    key: "_handleZoomStart",
    value: function _handleZoomStart() {
      this.props.onZoomStart();

      this._stopAnimation();

      this._lastScale = 1;
      this._nthZoom = 0;
      this._lastZoomCenter = null;
      this._hasInteraction = true;
    }
  }, {
    key: "_handleZoom",
    value: function _handleZoom(event, newScale) {
      var touchCenter = getVectorAvg(this._getOffsetTouches(event));
      var scale = newScale / this._lastScale;
      this._lastScale = newScale; // The first touch events are thrown away since they are not precise

      this._nthZoom += 1;

      if (this._nthZoom > 3) {
        this._scale(scale, touchCenter);

        this._drag(touchCenter, this._lastZoomCenter);
      }

      this._lastZoomCenter = touchCenter;
    }
  }, {
    key: "_handleZoomEnd",
    value: function _handleZoomEnd() {
      this.props.onZoomEnd();

      this._end();
    }
  }, {
    key: "_handleDoubleTap",
    value: function _handleDoubleTap(event) {
      var _this3 = this;

      if (this._hasInteraction) {
        return;
      }

      this.props.onDoubleTap();
      this._ignoreNextClick = true;
      var zoomFactor = this._zoomFactor + this.props.tapZoomFactor;
      var startZoomFactor = this._zoomFactor;

      var updateProgress = function updateProgress(progress) {
        _this3._scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
      };

      var center = this._getOffsetByFirstTouch(event);

      this._isDoubleTap = true;

      if (startZoomFactor > zoomFactor) {
        center = this._getCurrentZoomCenter();
      }

      this._animate(updateProgress);
    }
  }, {
    key: "_computeInitialOffset",
    value: function _computeInitialOffset() {
      var rect = this._getContainerRect();

      var _this$_getChildSize = this._getChildSize(),
          width = _this$_getChildSize.width,
          height = _this$_getChildSize.height;

      var x = -abs(width * this._getInitialZoomFactor() - rect.width) / 2;
      var y = -abs(height * this._getInitialZoomFactor() - rect.height) / 2;
      this._initialOffset = {
        x: x,
        y: y
      };
    }
  }, {
    key: "_resetOffset",
    value: function _resetOffset() {
      this._offset = _objectSpread2({}, this._initialOffset);
    }
  }, {
    key: "_setupOffsets",
    value: function _setupOffsets() {
      if (this.props.setOffsetsOnce && this._isOffsetsSet) {
        return;
      }

      this._isOffsetsSet = true;

      this._computeInitialOffset();

      this._resetOffset();
    }
  }, {
    key: "_sanitizeOffset",
    value: function _sanitizeOffset(offset) {
      var rect = this._getContainerRect();

      var _this$_getChildSize2 = this._getChildSize(),
          width = _this$_getChildSize2.width,
          height = _this$_getChildSize2.height;

      var elWidth = width * this._getInitialZoomFactor() * this._zoomFactor;

      var elHeight = height * this._getInitialZoomFactor() * this._zoomFactor;

      var maxX = elWidth - rect.width + this.props.horizontalPadding;
      var maxY = elHeight - rect.height + this.props.verticalPadding;
      var maxOffsetX = max(maxX, 0);
      var maxOffsetY = max(maxY, 0);
      var minOffsetX = min(maxX, 0) - this.props.horizontalPadding;
      var minOffsetY = min(maxY, 0) - this.props.verticalPadding;
      return {
        x: clamp(minOffsetX, maxOffsetX, offset.x),
        y: clamp(minOffsetY, maxOffsetY, offset.y)
      };
    }
  }, {
    key: "alignCenter",
    value: function alignCenter(options) {
      var _this4 = this;

      var _duration$animated$op = _objectSpread2({
        duration: 250,
        animated: true
      }, options),
          x = _duration$animated$op.x,
          y = _duration$animated$op.y,
          scale = _duration$animated$op.scale,
          animated = _duration$animated$op.animated,
          duration = _duration$animated$op.duration;

      var startZoomFactor = this._zoomFactor;

      var startOffset = _objectSpread2({}, this._offset);

      var rect = this._getContainerRect();

      var containerCenter = {
        x: rect.width / 2,
        y: rect.height / 2
      };
      this._zoomFactor = 1;
      this._offset = {
        x: -(containerCenter.x - x),
        y: -(containerCenter.y - y)
      };

      this._scaleTo(scale, containerCenter);

      this._stopAnimation();

      if (!animated) {
        return this._update();
      }

      var diffZoomFactor = this._zoomFactor - startZoomFactor;
      var diffOffset = {
        x: this._offset.x - startOffset.x,
        y: this._offset.y - startOffset.y
      };
      this._zoomFactor = startZoomFactor;
      this._offset = _objectSpread2({}, startOffset);

      var updateFrame = function updateFrame(progress) {
        var x = startOffset.x + diffOffset.x * progress;
        var y = startOffset.y + diffOffset.y * progress;
        _this4._zoomFactor = startZoomFactor + diffZoomFactor * progress;
        _this4._offset = _this4._sanitizeOffset({
          x: x,
          y: y
        });

        _this4._update();
      };

      this._animate(updateFrame, {
        callback: function callback() {
          return _this4._sanitize();
        },
        duration: duration
      });
    }
  }, {
    key: "scaleTo",
    value: function scaleTo(options) {
      var _this5 = this;

      var _duration$animated$op2 = _objectSpread2({
        duration: 250,
        animated: true
      }, options),
          x = _duration$animated$op2.x,
          y = _duration$animated$op2.y,
          scale = _duration$animated$op2.scale,
          animated = _duration$animated$op2.animated,
          duration = _duration$animated$op2.duration;

      var startZoomFactor = this._zoomFactor;

      var startOffset = _objectSpread2({}, this._offset);

      this._zoomFactor = 1;
      this._offset = {
        x: 0,
        y: 0
      };

      this._scaleTo(scale, {
        x: x,
        y: y
      });

      this._stopAnimation();

      if (!animated) {
        return this._update();
      }

      var diffZoomFactor = this._zoomFactor - startZoomFactor;
      var diffOffset = {
        x: this._offset.x - startOffset.x,
        y: this._offset.y - startOffset.y
      };
      this._zoomFactor = startZoomFactor;
      this._offset = _objectSpread2({}, startOffset);

      var updateFrame = function updateFrame(progress) {
        var x = startOffset.x + diffOffset.x * progress;
        var y = startOffset.y + diffOffset.y * progress;
        _this5._zoomFactor = startZoomFactor + diffZoomFactor * progress;
        _this5._offset = {
          x: x,
          y: y
        };

        _this5._update();
      };

      this._animate(updateFrame, {
        callback: function callback() {
          return _this5._sanitize();
        },
        duration: duration
      });
    }
  }, {
    key: "_scaleTo",
    value: function _scaleTo(zoomFactor, center) {
      this._scale(zoomFactor / this._zoomFactor, center);
    }
  }, {
    key: "_scale",
    value: function _scale(scale, center) {
      scale = this._scaleZoomFactor(scale);

      this._addOffset({
        x: (scale - 1) * (center.x + this._offset.x),
        y: (scale - 1) * (center.y + this._offset.y)
      });

      this.props.onZoomUpdate();
    }
  }, {
    key: "_scaleZoomFactor",
    value: function _scaleZoomFactor(scale) {
      var originalZoomFactor = this._zoomFactor;
      this._zoomFactor *= scale;
      this._zoomFactor = clamp(this.props.minZoom, this.props.maxZoom, this._zoomFactor);
      return this._zoomFactor / originalZoomFactor;
    }
  }, {
    key: "_canDrag",
    value: function _canDrag() {
      return this.props.draggableUnZoomed || !isCloseTo(this._zoomFactor, 1);
    }
  }, {
    key: "_drag",
    value: function _drag(center, lastCenter) {
      if (lastCenter) {
        var y = -(center.y - lastCenter.y);
        var x = -(center.x - lastCenter.x);

        if (!this.props.lockDragAxis) {
          this._addOffset({
            x: x,
            y: y
          });
        } else {
          // lock scroll to position that was changed the most
          if (abs(x) > abs(y)) {
            this._addOffset({
              x: x,
              y: 0
            });
          } else {
            this._addOffset({
              y: y,
              x: 0
            });
          }
        }

        this.props.onDragUpdate();
      }
    }
  }, {
    key: "_addOffset",
    value: function _addOffset(offset) {
      var _this$_offset = this._offset,
          x = _this$_offset.x,
          y = _this$_offset.y;
      this._offset = {
        x: x + offset.x,
        y: y + offset.y
      };
    }
  }, {
    key: "_sanitize",
    value: function _sanitize() {
      if (this._zoomFactor < this.props.zoomOutFactor) {
        this._zoomOutAnimation();
      } else if (this._isInsaneOffset()) {
        this._sanitizeOffsetAnimation();
      }
    }
  }, {
    key: "_isInsaneOffset",
    value: function _isInsaneOffset() {
      var offset = this._offset;

      var sanitizedOffset = this._sanitizeOffset(offset);

      return sanitizedOffset.x !== offset.x || sanitizedOffset.y !== offset.y;
    }
  }, {
    key: "_sanitizeOffsetAnimation",
    value: function _sanitizeOffsetAnimation() {
      var _this6 = this;

      var targetOffset = this._sanitizeOffset(this._offset);

      var startOffset = _objectSpread2({}, this._offset);

      var updateProgress = function updateProgress(progress) {
        var x = startOffset.x + progress * (targetOffset.x - startOffset.x);
        var y = startOffset.y + progress * (targetOffset.y - startOffset.y);
        _this6._offset = {
          x: x,
          y: y
        };

        _this6._update();
      };

      this._animate(updateProgress);
    }
  }, {
    key: "_zoomOutAnimation",
    value: function _zoomOutAnimation() {
      var _this7 = this;

      if (this._zoomFactor === 1) {
        return;
      }

      var startZoomFactor = this._zoomFactor;
      var zoomFactor = 1;

      var center = this._getCurrentZoomCenter();

      var updateProgress = function updateProgress(progress) {
        var scaleFactor = startZoomFactor + progress * (zoomFactor - startZoomFactor);

        _this7._scaleTo(scaleFactor, center);
      };

      this._animate(updateProgress);
    }
  }, {
    key: "_getInitialZoomFactor",
    value: function _getInitialZoomFactor() {
      return this._initialZoomFactor;
    }
  }, {
    key: "_getCurrentZoomCenter",
    value: function _getCurrentZoomCenter() {
      var _this$_offset2 = this._offset,
          x = _this$_offset2.x,
          y = _this$_offset2.y;
      var offsetLeft = x - this._initialOffset.x;
      var offsetTop = y - this._initialOffset.y;
      return {
        x: -1 * x - offsetLeft / (1 / this._zoomFactor - 1),
        y: -1 * y - offsetTop / (1 / this._zoomFactor - 1)
      };
    }
  }, {
    key: "_getOffsetByFirstTouch",
    value: function _getOffsetByFirstTouch(event) {
      return this._getOffsetTouches(event)[0];
    }
  }, {
    key: "_getOffsetTouches",
    value: function _getOffsetTouches(event) {
      var _this$props2 = this.props,
          _html = _this$props2._html,
          _body = _this$props2._body;

      var _this$_getContainerRe = this._getContainerRect(),
          top = _this$_getContainerRe.top,
          left = _this$_getContainerRe.left;

      var scrollTop = _html.scrollTop || _body.scrollTop;
      var scrollLeft = _html.scrollLeft || _body.scrollLeft;
      var posTop = top + scrollTop;
      var posLeft = left + scrollLeft;
      return getPageCoordinatesByTouches(event.touches).map(function (_ref2) {
        var x = _ref2.x,
            y = _ref2.y;
        return {
          x: x - posLeft,
          y: y - posTop
        };
      });
    }
  }, {
    key: "_animate",
    value: function _animate(frameFn, options) {
      var _this8 = this;

      var startTime = new Date().getTime();

      var _timeFn$callback$dura = _objectSpread2({
        timeFn: swing,
        callback: function callback() {},
        duration: this.props.animationDuration
      }, options),
          timeFn = _timeFn$callback$dura.timeFn,
          callback = _timeFn$callback$dura.callback,
          duration = _timeFn$callback$dura.duration;

      var renderFrame = function renderFrame() {
        if (!_this8._inAnimation) {
          return;
        }

        var frameTime = new Date().getTime() - startTime;
        var progress = frameTime / duration;

        if (frameTime >= duration) {
          frameFn(1);

          _this8._stopAnimation();

          callback();

          _this8._update();
        } else {
          progress = timeFn(progress);
          frameFn(progress);

          _this8._update({
            isAnimation: true
          });

          requestAnimationFrame(renderFrame);
        }
      };

      this._inAnimation = true;
      requestAnimationFrame(renderFrame);
    }
  }, {
    key: "_stopAnimation",
    value: function _stopAnimation() {
      this._inAnimation = false;
    }
  }, {
    key: "_end",
    value: function _end() {
      this._hasInteraction = false;

      this._sanitize();

      this._update();
    }
  }, {
    key: "_getContainerRect",
    value: function _getContainerRect() {
      var div = this._containerRef.current; // $FlowFixMe

      return div.getBoundingClientRect();
    }
  }, {
    key: "_getChildSize",
    value: function _getChildSize() {
      var div = this._containerRef.current;
      var child = div && div.firstElementChild;
      return getElementSize(child);
    }
  }, {
    key: "_updateInitialZoomFactor",
    value: function _updateInitialZoomFactor() {
      var rect = this._getContainerRect();

      var size = this._getChildSize();

      var xZoomFactor = rect.width / size.width;
      var yZoomFactor = rect.height / size.height;
      this._initialZoomFactor = min(xZoomFactor, yZoomFactor);
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this9 = this;

      var div = this._containerRef.current;

      if (window.ResizeObserver) {
        this._containerObserver = new ResizeObserver(this._onResize);
      } else {
        window.addEventListener("resize", this._onResize);
      }

      this._handlers.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3),
            eventName = _ref4[0],
            fn = _ref4[1],
            target = _ref4[2];

        // $FlowFixMe
        (target || div).addEventListener(eventName, fn, true);
      }); // $FlowFixMe


      _toConsumableArray(div.querySelectorAll("img")).forEach(function (img) {
        return img.addEventListener("load", _this9._onResize);
      });
    }
  }, {
    key: "_unSubscribe",
    value: function _unSubscribe() {
      var div = this._containerRef.current;

      if (this._containerObserver) {
        this._containerObserver.disconnect();

        this._containerObserver = null;
      }

      window.removeEventListener("resize", this._onResize);

      this._handlers.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 3),
            eventName = _ref6[0],
            fn = _ref6[1],
            target = _ref6[2];

        // $FlowFixMe
        (target || div).removeEventListener(eventName, fn, true);
      });
    }
  }, {
    key: "_update",
    value: function _update(options) {
      var _this10 = this;

      if (this._updatePlaned) {
        return;
      }

      var updateFrame = function updateFrame() {
        var scale = _this10._getInitialZoomFactor() * _this10._zoomFactor;

        var x = -_this10._offset.x / scale;
        var y = -_this10._offset.y / scale;

        _this10.props.onUpdate({
          scale: scale,
          x: x,
          y: y
        });
      };

      if (options && options.isAnimation) {
        return updateFrame();
      }

      this._updatePlaned = true;
      requestAnimationFrame(function () {
        _this10._updatePlaned = false;
        updateFrame();
      });
    }
  }, {
    key: "_handlerIfEnable",
    value: function _handlerIfEnable(fn) {
      var _this11 = this;

      return function () {
        if (_this11.props.enabled) {
          fn.apply(void 0, arguments);
        }
      };
    }
  }, {
    key: "_setInteraction",
    value: function _setInteraction(newInteraction, event) {
      var interaction = this._interaction;

      if (interaction !== newInteraction) {
        if (interaction && !newInteraction) {
          if (isZoomInteraction(interaction)) {
            this._handleZoomEnd();
          } else if (isDragInteraction(interaction)) {
            this._handleDragEnd();
          }
        }

        if (isZoomInteraction(newInteraction)) {
          this._handleZoomStart();
        } else if (isDragInteraction(newInteraction)) {
          this._handleDragStart(event);
        }
      }

      this._interaction = newInteraction;
    }
  }, {
    key: "_updateInteraction",
    value: function _updateInteraction(event) {
      var fingers = this._fingers;

      if (fingers === 2) {
        return this._setInteraction("zoom", event);
      }

      if (fingers === 1 && this._canDrag()) {
        return this._setInteraction("drag", event);
      }

      this._setInteraction(null, event);
    }
  }, {
    key: "_detectDoubleTap",
    value: function _detectDoubleTap(event) {
      var time = new Date().getTime();

      if (this._fingers > 1) {
        this._lastTouchStart = 0;
      }

      if (time - this._lastTouchStart < 300) {
        cancelEvent(event);

        this._handleDoubleTap(event);

        if (isZoomInteraction(this._interaction)) {
          this._handleZoomEnd();
        } else if (isDragInteraction(this._interaction)) {
          this._handleDragEnd();
        }
      } else {
        this._isDoubleTap = false;
      }

      if (this._fingers === 1) {
        this._lastTouchStart = time;
      }
    }
  }, {
    key: "simulate",
    value: function simulate(fn) {
      var _this12 = this;

      return function (mouseEvent) {
        var pageX = mouseEvent.pageX,
            pageY = mouseEvent.pageY,
            type = mouseEvent.type;
        var isEnd = type === "mouseup";
        var isStart = type === "mousedown";

        if (isStart) {
          mouseEvent.preventDefault();
          _this12._listenMouseMove = true;
        }

        if (_this12._listenMouseMove) {
          // $FlowFixMe
          mouseEvent.touches = isEnd ? [] : [{
            pageX: pageX,
            pageY: pageY
          }]; // $FlowFixMe

          fn(mouseEvent);
        }

        if (isEnd) {
          _this12._listenMouseMove = false;
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._bindEvents();

      this._update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._stopAnimation();

      this._unSubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          containerProps = _this$props3.containerProps;
      var child = React.Children.only(children);
      var props = containerProps || {};
      return React__default.createElement("div", _extends({}, props, {
        ref: this._containerRef // $FlowFixMe
        ,
        className: cn(styles.a, props.className)
      }), React.cloneElement(child, {
        className: cn(styles.b, child.props.className)
      }));
    }
  }]);

  return PinchZoom;
}(React.Component);

_defineProperty(PinchZoom, "defaultProps", {
  animationDuration: 250,
  draggableUnZoomed: true,
  enabled: true,
  inertia: true,
  inertiaFriction: 0.96,
  horizontalPadding: 0,
  isTouch: isTouch,
  lockDragAxis: false,
  maxZoom: 5,
  minZoom: 0.5,
  onDoubleTap: noup,
  onDragEnd: noup,
  onDragStart: noup,
  onDragUpdate: noup,
  onZoomEnd: noup,
  onZoomStart: noup,
  onZoomUpdate: noup,
  setOffsetsOnce: false,
  shouldInterceptWheel: shouldInterceptWheel,
  tapZoomFactor: 1,
  verticalPadding: 0,
  wheelScaleFactor: 1500,
  zoomOutFactor: 1.3,
  _html: _html,
  _body: _body
});

if (process.env.NODE_ENV !== "production") {
  var _require = require("prop-types"),
      element = _require.element,
      object = _require.object,
      number = _require.number,
      any = _require.any,
      func = _require.func,
      bool = _require.bool;

  PinchZoom.propTypes = {
    children: element,
    containerProps: object,
    wheelScaleFactor: number,
    animationDuration: number,
    draggableUnZoomed: bool,
    enabled: bool,
    horizontalPadding: number,
    lockDragAxis: bool,
    onUpdate: func.isRequired,
    maxZoom: number,
    minZoom: number,
    onDoubleTap: func,
    onDragEnd: func,
    onDragStart: func,
    onDragUpdate: func,
    onZoomEnd: func,
    onZoomStart: func,
    onZoomUpdate: func,
    setOffsetsOnce: bool,
    tapZoomFactor: number,
    verticalPadding: number,
    zoomOutFactor: number,
    isTouch: func,
    _html: any,
    _body: any
  };
}

exports.default = PinchZoom;
exports.hasTranslate3DSupport = hasTranslate3DSupport;
exports.isTouch = isTouch;
exports.make2dTransformValue = make2dTransformValue;
exports.make3dTransformValue = make3dTransformValue;
//# sourceMappingURL=index.js.map
