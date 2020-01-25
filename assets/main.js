(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _home = _interopRequireDefault(require("./views/home"));

var _about = _interopRequireDefault(require("./views/about"));

var _topics = _interopRequireDefault(require("./views/topics"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var web = function web() {
  return (0, _inferno.createVNode)(1, "div", null, [(0, _inferno.createVNode)(1, "ul", null, [(0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "/",
    children: "Home"
  }), 2), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "/about",
    children: "About"
  }), 2), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "/topics",
    children: "Topics"
  }), 2)], 4), (0, _inferno.createVNode)(1, "hr"), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
    "exact": true,
    "path": "/",
    "component": _home["default"]
  }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
    "path": "/about",
    "component": _about["default"]
  }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
    "path": "/topics",
    "component": _topics["default"]
  })], 4);
};

var _default = web;
exports["default"] = _default;

},{"./views/about":2,"./views/home":3,"./views/topics":5,"inferno":18,"inferno-router":15}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inferno = require("inferno");

var About = function About() {
  return (0, _inferno.createVNode)(1, "div", null, (0, _inferno.createVNode)(1, "h2", null, "About", 16), 2);
};

var _default = About;
exports["default"] = _default;

},{"inferno":18}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inferno = require("inferno");

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this)); // set initial time:

    _this.state = {
      time: Date.now()
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Promise.resolve(); // update time every second

      this.timer = setInterval(function () {
        _this2.setState({
          time: Date.now()
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // stop when not renderable
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var time = new Date(this.state.time).toLocaleTimeString();
      return (0, _inferno.createVNode)(1, "span", null, time, 0);
    }
  }]);

  return Home;
}(_inferno.Component);

var _default = Home;
exports["default"] = _default;

},{"inferno":18}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inferno = require("inferno");

var Topic = function Topic(_ref) {
  var match = _ref.match;
  return (0, _inferno.createVNode)(1, "div", null, (0, _inferno.createVNode)(1, "h3", null, match.params.topicId, 0), 2);
};

var _default = Topic;
exports["default"] = _default;

},{"inferno":18}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _topic = _interopRequireDefault(require("./topic"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var Topics = function Topics(_ref) {
  var match = _ref.match;
  return (0, _inferno.createVNode)(1, "div", null, [(0, _inferno.createVNode)(1, "h2", null, "Topics", 16), (0, _inferno.createVNode)(1, "ul", null, [(0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "".concat(match.url, "/rendering"),
    children: "Rendering with React"
  }), 2), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "".concat(match.url, "/components"),
    children: "Components"
  }), 2), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "".concat(match.url, "/props-v-state"),
    children: "Props v. State"
  }), 2)], 4), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
    "path": "".concat(match.url, "/:topicId"),
    "component": _topic["default"]
  }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
    "exact": true,
    "path": match.url,
    "render": function render() {
      return (0, _inferno.createVNode)(1, "h3", null, "Please select a topic.", 16);
    }
  })], 4);
};

var _default = Topics;
exports["default"] = _default;

},{"./topic":4,"inferno":18,"inferno-router":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var resolvePathname = _interopDefault(require('resolve-pathname'));
var valueEqual = _interopDefault(require('value-equal'));
var warning = _interopDefault(require('tiny-warning'));
var invariant = _interopDefault(require('tiny-invariant'));

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

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    warning(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    warning(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  }

  function replace(path, state) {
    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;

},{"resolve-pathname":24,"tiny-invariant":25,"tiny-warning":26,"value-equal":29}],7:[function(require,module,exports){
"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var resolvePathname=_interopDefault(require("resolve-pathname")),valueEqual=_interopDefault(require("value-equal"));require("tiny-warning");var invariant=_interopDefault(require("tiny-invariant"));function _extends(){return(_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t}function stripLeadingSlash(t){return"/"===t.charAt(0)?t.substr(1):t}function hasBasename(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}function stripBasename(t,n){return hasBasename(t,n)?t.substr(n.length):t}function stripTrailingSlash(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function parsePath(t){var n=t||"/",e="",a="",r=n.indexOf("#");-1!==r&&(a=n.substr(r),n=n.substr(0,r));var o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===a?"":a}}function createPath(t){var n=t.pathname,e=t.search,a=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r}function createLocation(t,n,e,a){var r;"string"==typeof t?(r=parsePath(t)).state=n:(void 0===(r=_extends({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=resolvePathname(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function locationsAreEqual(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&valueEqual(t.state,n.state)}function createTransitionManager(){var o=null;var a=[];return{setPrompt:function(t){return o=t,function(){o===t&&(o=null)}},confirmTransitionTo:function(t,n,e,a){if(null!=o){var r="function"==typeof o?o(t,n):o;"string"==typeof r?"function"==typeof e?e(r,a):a(!0):a(!1!==r)}else a(!0)},appendListener:function(t){var n=!0;function e(){n&&t.apply(void 0,arguments)}return a.push(e),function(){n=!1,a=a.filter(function(t){return t!==e})}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];a.forEach(function(t){return t.apply(void 0,n)})}}}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(t,n){n(window.confirm(t))}function supportsHistory(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}function isExtraneousPopstateEvent(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}var PopStateEvent="popstate",HashChangeEvent="hashchange";function getHistoryState(){try{return window.history.state||{}}catch(t){return{}}}function createBrowserHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var s=window.history,c=supportsHistory(),n=!supportsPopStateOnHashChange(),e=t,a=e.forceRefresh,h=void 0!==a&&a,r=e.getUserConfirmation,u=void 0===r?getConfirmation:r,o=e.keyLength,i=void 0===o?6:o,f=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"";function l(t){var n=t||{},e=n.key,a=n.state,r=window.location,o=r.pathname+r.search+r.hash;return f&&(o=stripBasename(o,f)),createLocation(o,a,e)}function d(){return Math.random().toString(36).substr(2,i)}var v=createTransitionManager();function p(t){_extends(T,t),T.length=s.length,v.notifyListeners(T.location,T.action)}function g(t){isExtraneousPopstateEvent(t)||w(l(t.state))}function P(){w(l(getHistoryState()))}var m=!1;function w(n){if(m)m=!1,p();else{v.confirmTransitionTo(n,"POP",u,function(t){t?p({action:"POP",location:n}):function(t){var n=T.location,e=H.indexOf(n.key);-1===e&&(e=0);var a=H.indexOf(t.key);-1===a&&(a=0);var r=e-a;r&&(m=!0,L(r))}(n)})}}var y=l(getHistoryState()),H=[y.key];function x(t){return f+createPath(t)}function L(t){s.go(t)}var O=0;function E(t){1===(O+=t)&&1===t?(window.addEventListener(PopStateEvent,g),n&&window.addEventListener(HashChangeEvent,P)):0===O&&(window.removeEventListener(PopStateEvent,g),n&&window.removeEventListener(HashChangeEvent,P))}var S=!1;var T={length:s.length,action:"POP",location:y,createHref:x,push:function(t,n){var i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,"PUSH",u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.pushState({key:e,state:a},null,n),h)window.location.href=n;else{var r=H.indexOf(T.location.key),o=H.slice(0,r+1);o.push(i.key),H=o,p({action:"PUSH",location:i})}else window.location.href=n}})},replace:function(t,n){var o="REPLACE",i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,o,u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.replaceState({key:e,state:a},null,n),h)window.location.replace(n);else{var r=H.indexOf(T.location.key);-1!==r&&(H[r]=i.key),p({action:o,location:i})}else window.location.replace(n)}})},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var n=v.setPrompt(t);return S||(E(1),S=!0),function(){return S&&(S=!1,E(-1)),n()}},listen:function(t){var n=v.appendListener(t);return E(1),function(){E(-1),n()}}};return T}var HashChangeEvent$1="hashchange",HashPathCoders={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function getHashPath(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function pushHashPath(t){window.location.hash=t}function replaceHashPath(t){window.location.replace(stripHash(window.location.href)+"#"+t)}function createHashHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var n=window.history,e=(supportsGoWithoutReloadUsingHash(),t),a=e.getUserConfirmation,i=void 0===a?getConfirmation:a,r=e.hashType,o=void 0===r?"slash":r,s=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"",c=HashPathCoders[o],h=c.encodePath,u=c.decodePath;function f(){var t=u(getHashPath());return s&&(t=stripBasename(t,s)),createLocation(t)}var l=createTransitionManager();function d(t){_extends(E,t),E.length=n.length,l.notifyListeners(E.location,E.action)}var v=!1,p=null;function g(){var t=getHashPath(),n=h(t);if(t!==n)replaceHashPath(n);else{var e=f(),a=E.location;if(!v&&function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash}(a,e))return;if(p===createPath(e))return;p=null,function(n){if(v)v=!1,d();else{l.confirmTransitionTo(n,"POP",i,function(t){t?d({action:"POP",location:n}):function(t){var n=E.location,e=y.lastIndexOf(createPath(n));-1===e&&(e=0);var a=y.lastIndexOf(createPath(t));-1===a&&(a=0);var r=e-a;r&&(v=!0,H(r))}(n)})}}(e)}}var P=getHashPath(),m=h(P);P!==m&&replaceHashPath(m);var w=f(),y=[createPath(w)];function H(t){n.go(t)}var x=0;function L(t){1===(x+=t)&&1===t?window.addEventListener(HashChangeEvent$1,g):0===x&&window.removeEventListener(HashChangeEvent$1,g)}var O=!1;var E={length:n.length,action:"POP",location:w,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=stripHash(window.location.href)),e+"#"+h(s+createPath(t))},push:function(t,n){var o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,"PUSH",i,function(t){if(t){var n=createPath(o),e=h(s+n);if(getHashPath()!==e){p=n,pushHashPath(e);var a=y.lastIndexOf(createPath(E.location)),r=y.slice(0,a+1);r.push(n),y=r,d({action:"PUSH",location:o})}else d()}})},replace:function(t,n){var r="REPLACE",o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,r,i,function(t){if(t){var n=createPath(o),e=h(s+n);getHashPath()!==e&&(p=n,replaceHashPath(e));var a=y.indexOf(createPath(E.location));-1!==a&&(y[a]=n),d({action:r,location:o})}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var n=l.setPrompt(t);return O||(L(1),O=!0),function(){return O&&(O=!1,L(-1)),n()}},listen:function(t){var n=l.appendListener(t);return L(1),function(){L(-1),n()}}};return E}function clamp(t,n,e){return Math.min(Math.max(t,n),e)}function createMemoryHistory(t){void 0===t&&(t={});var n=t,r=n.getUserConfirmation,e=n.initialEntries,a=void 0===e?["/"]:e,o=n.initialIndex,i=void 0===o?0:o,s=n.keyLength,c=void 0===s?6:s,h=createTransitionManager();function u(t){_extends(g,t),g.length=g.entries.length,h.notifyListeners(g.location,g.action)}function f(){return Math.random().toString(36).substr(2,c)}var l=clamp(i,0,a.length-1),d=a.map(function(t){return createLocation(t,void 0,"string"==typeof t?f():t.key||f())}),v=createPath;function p(t){var n=clamp(g.index+t,0,g.entries.length-1),e=g.entries[n];h.confirmTransitionTo(e,"POP",r,function(t){t?u({action:"POP",location:e,index:n}):u()})}var g={length:d.length,action:"POP",location:d[l],index:l,entries:d,createHref:v,push:function(t,n){var a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,"PUSH",r,function(t){if(t){var n=g.index+1,e=g.entries.slice(0);e.length>n?e.splice(n,e.length-n,a):e.push(a),u({action:"PUSH",location:a,index:n,entries:e})}})},replace:function(t,n){var e="REPLACE",a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,e,r,function(t){t&&(g.entries[g.index]=a,u({action:e,location:a}))})},go:p,goBack:function(){p(-1)},goForward:function(){p(1)},canGo:function(t){var n=g.index+t;return 0<=n&&n<g.entries.length},block:function(t){return void 0===t&&(t=!1),h.setPrompt(t)},listen:function(t){return h.appendListener(t)}};return g}exports.createBrowserHistory=createBrowserHistory,exports.createHashHistory=createHashHistory,exports.createMemoryHistory=createMemoryHistory,exports.createLocation=createLocation,exports.locationsAreEqual=locationsAreEqual,exports.parsePath=parsePath,exports.createPath=createPath;

},{"resolve-pathname":24,"tiny-invariant":25,"tiny-warning":26,"value-equal":29}],8:[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/history.min.js');
} else {
  module.exports = require('./cjs/history.js');
}

},{"./cjs/history.js":6,"./cjs/history.min.js":7}],9:[function(require,module,exports){
'use strict';

var INFERNO_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

module.exports = hoistNonReactStatics;
module.exports.default = module.exports;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = require('inferno');

var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
function isNullOrUndef(o) {
    return o === void 0 || o === null;
}
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNull(o) {
    return o === null;
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.error(message);
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}
function findLastDOMFromVNode(vNode) {
    var flags;
    var children;
    while (vNode) {
        flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            return vNode.dom;
        }
        children = vNode.children;
        if (flags & 8192 /* Fragment */) {
            vNode = vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[children.length - 1];
        }
        else if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        else {
            vNode = children;
        }
    }
    return null;
}
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}
function renderFunctionalComponent(vNode, context, props) {
    return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(props, vNode.ref, context) : vNode.type(props, context);
}
function hydrateComponent(vNode, parentDOM, dom, context, isSVG, isClass, lifecycle) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || inferno.EMPTY_OBJ;
    var currentNode;
    if (isClass) {
        var instance = inferno._CI(vNode, type, props, context, isSVG, lifecycle);
        var input = instance.$LI;
        currentNode = hydrateVNode(input, parentDOM, dom, instance.$CX, isSVG, lifecycle);
        inferno._MCCC(ref, instance, lifecycle);
    }
    else {
        var input$1 = inferno._HI(renderFunctionalComponent(vNode, context, props));
        currentNode = hydrateVNode(input$1, parentDOM, dom, context, isSVG, lifecycle);
        vNode.children = input$1;
        inferno._MFCC(vNode, lifecycle);
    }
    return currentNode;
}
function hydrateChildren(parentVNode, parentNode, currentNode, context, isSVG, lifecycle) {
    var childFlags = parentVNode.childFlags;
    var children = parentVNode.children;
    var props = parentVNode.props;
    var flags = parentVNode.flags;
    if (childFlags !== 1 /* HasInvalidChildren */) {
        if (childFlags === 2 /* HasVNodeChildren */) {
            if (isNull(currentNode)) {
                inferno._M(children, parentNode, context, isSVG, null, lifecycle);
            }
            else {
                currentNode = hydrateVNode(children, parentNode, currentNode, context, isSVG, lifecycle);
                currentNode = currentNode ? currentNode.nextSibling : null;
            }
        }
        else if (childFlags === 16 /* HasTextChildren */) {
            if (isNull(currentNode)) {
                parentNode.appendChild(document.createTextNode(children));
            }
            else if (parentNode.childNodes.length !== 1 || currentNode.nodeType !== 3) {
                parentNode.textContent = children;
            }
            else {
                if (currentNode.nodeValue !== children) {
                    currentNode.nodeValue = children;
                }
            }
            currentNode = null;
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            var prevVNodeIsTextNode = false;
            for (var i = 0, len = children.length; i < len; ++i) {
                var child = children[i];
                if (isNull(currentNode) || (prevVNodeIsTextNode && (child.flags & 16 /* Text */) > 0)) {
                    inferno._M(child, parentNode, context, isSVG, currentNode, lifecycle);
                }
                else {
                    currentNode = hydrateVNode(child, parentNode, currentNode, context, isSVG, lifecycle);
                    currentNode = currentNode ? currentNode.nextSibling : null;
                }
                prevVNodeIsTextNode = (child.flags & 16 /* Text */) > 0;
            }
        }
        // clear any other DOM nodes, there should be only a single entry for the root
        if ((flags & 8192 /* Fragment */) === 0) {
            var nextSibling = null;
            while (currentNode) {
                nextSibling = currentNode.nextSibling;
                parentNode.removeChild(currentNode);
                currentNode = nextSibling;
            }
        }
    }
    else if (!isNull(parentNode.firstChild) && !isSamePropsInnerHTML(parentNode, props)) {
        parentNode.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
        if (flags & 448 /* FormElement */) {
            // If element is form element, we need to clear defaultValue also
            parentNode.defaultValue = '';
        }
    }
}
function hydrateElement(vNode, parentDOM, dom, context, isSVG, lifecycle) {
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup");
        }
        inferno._ME(vNode, null, context, isSVG, null, lifecycle);
        parentDOM.replaceChild(vNode.dom, dom);
    }
    else {
        vNode.dom = dom;
        hydrateChildren(vNode, dom, dom.firstChild, context, isSVG, lifecycle);
        if (!isNull(props)) {
            inferno._MP(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        inferno._MR(ref, dom, lifecycle);
    }
    return vNode.dom;
}
function hydrateText(vNode, parentDOM, dom) {
    if (dom.nodeType !== 3) {
        parentDOM.replaceChild((vNode.dom = document.createTextNode(vNode.children)), dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
    return vNode.dom;
}
function hydrateFragment(vNode, parentDOM, dom, context, isSVG, lifecycle) {
    var children = vNode.children;
    if (vNode.childFlags === 2 /* HasVNodeChildren */) {
        hydrateText(children, parentDOM, dom);
        return children.dom;
    }
    hydrateChildren(vNode, parentDOM, dom, context, isSVG, lifecycle);
    return findLastDOMFromVNode(children[children.length - 1]);
}
function hydrateVNode(vNode, parentDOM, currentDom, context, isSVG, lifecycle) {
    var flags = (vNode.flags |= 16384 /* InUse */);
    if (flags & 14 /* Component */) {
        return hydrateComponent(vNode, parentDOM, currentDom, context, isSVG, (flags & 4 /* ComponentClass */) > 0, lifecycle);
    }
    if (flags & 481 /* Element */) {
        return hydrateElement(vNode, parentDOM, currentDom, context, isSVG, lifecycle);
    }
    if (flags & 16 /* Text */) {
        return hydrateText(vNode, parentDOM, currentDom);
    }
    if (flags & 512 /* Void */) {
        return (vNode.dom = currentDom);
    }
    if (flags & 8192 /* Fragment */) {
        return hydrateFragment(vNode, parentDOM, currentDom, context, isSVG, lifecycle);
    }
    {
        throwError(("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
    }
    throwError();
    return null;
}
function hydrate(input, parentDOM, callback) {
    var dom = parentDOM.firstChild;
    if (isNull(dom)) {
        {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup");
        }
        inferno.render(input, parentDOM, callback);
    }
    else {
        var lifecycle = [];
        if (!isInvalid(input)) {
            dom = hydrateVNode(input, parentDOM, dom, {}, false, lifecycle);
        }
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom && (dom = dom.nextSibling)) {
            parentDOM.removeChild(dom);
        }
        if (lifecycle.length > 0) {
            var listener;
            while ((listener = lifecycle.shift()) !== undefined) {
                listener();
            }
        }
    }
    parentDOM.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

exports.hydrate = hydrate;

},{"inferno":18}],11:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("inferno"),n="a runtime error occured! Use Inferno in development environment to find the error.";function r(e){return void 0===e||null===e}function t(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function i(e){return null===e}function o(e){throw e||(e=n),new Error("Inferno Error: "+e)}function u(e,n){var r=document.createElement("i");return r.innerHTML=n,r.innerHTML===e.innerHTML}function f(e){for(var n,r;e;){if(2033&(n=e.flags))return e.dom;r=e.children,e=8192&n?2===e.childFlags?r:r[r.length-1]:4&n?r.$LI:r}return null}function a(e,n){return Boolean(n&&n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html&&u(e,n.dangerouslySetInnerHTML.__html))}function d(e,n,r){return 32768&e.flags?e.type.render(r,e.ref,n):e.type(r,n)}function s(n,r,t,l,i,o,u){var f,a=n.type,s=n.ref,c=n.props||e.EMPTY_OBJ;if(o){var h=e._CI(n,a,c,l,i,u);f=g(h.$LI,r,t,h.$CX,i,u),e._MCCC(s,h,u)}else{var v=e._HI(d(n,l,c));f=g(v,r,t,l,i,u),n.children=v,e._MFCC(n,u)}return f}function c(n,r,t,l,o,u){var f=n.childFlags,d=n.children,s=n.props,c=n.flags;if(1!==f){if(2===f)i(t)?e._M(d,r,l,o,null,u):t=(t=g(d,r,t,l,o,u))?t.nextSibling:null;else if(16===f)i(t)?r.appendChild(document.createTextNode(d)):1!==r.childNodes.length||3!==t.nodeType?r.textContent=d:t.nodeValue!==d&&(t.nodeValue=d),t=null;else if(12&f)for(var h=!1,v=0,m=d.length;v<m;++v){var p=d[v];i(t)||h&&(16&p.flags)>0?e._M(p,r,l,o,t,u):t=(t=g(p,r,t,l,o,u))?t.nextSibling:null,h=(16&p.flags)>0}if(0===(8192&c))for(var C=null;t;)C=t.nextSibling,r.removeChild(t),t=C}else i(r.firstChild)||a(r,s)||(r.textContent="",448&c&&(r.defaultValue=""))}function h(n,t,l,o,u,f){var a=n.props,d=n.className,s=n.flags,h=n.ref;return u=u||(32&s)>0,1!==l.nodeType||l.tagName.toLowerCase()!==n.type?(e._ME(n,null,o,u,null,f),t.replaceChild(n.dom,l)):(n.dom=l,c(n,l,l.firstChild,o,u,f),i(a)||e._MP(n,s,a,l,u),r(d)?""!==l.className&&l.removeAttribute("class"):u?l.setAttribute("class",d):l.className=d,e._MR(h,l,f)),n.dom}function v(e,n,r){if(3!==r.nodeType)n.replaceChild(e.dom=document.createTextNode(e.children),r);else{var t=e.children;r.nodeValue!==t&&(r.nodeValue=t),e.dom=r}return e.dom}function m(e,n,r,t,l,i){var o=e.children;if(2===e.childFlags)return v(o,n,r),o.dom;return c(e,n,r,t,l,i),f(o[o.length-1])}function g(e,n,r,t,l,i){var u=e.flags|=16384;if(14&u)return s(e,n,r,t,l,(4&u)>0,i);if(481&u)return h(e,n,r,t,l,i);if(16&u)return v(e,n,r);if(512&u)return e.dom=r;if(8192&u)return m(e,n,r,t,l,i);return o(),null}function p(n,r,o){var u=r.firstChild;if(i(u))e.render(n,r,o);else{var f=[];for(t(n)||(u=g(n,r,u,{},!1,f));u&&(u=u.nextSibling);)r.removeChild(u);if(f.length>0)for(var a;void 0!==(a=f.shift());)a()}r.$V=n,l(o)&&o()}exports.hydrate=p;

},{"inferno":18}],12:[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./dist/index.cjs.min.js');
} else {
  module.exports = require('./dist/index.cjs.js');
}

},{"./dist/index.cjs.js":10,"./dist/index.cjs.min.js":11}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var inferno = require('inferno');
var history = require('history');
var pathToRegexp = _interopDefault(require('path-to-regexp-es6'));
var hoistNonReactStatics = _interopDefault(require('hoist-non-inferno-statics'));

var isArray = Array.isArray;
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

function warning(condition, message) {
    if (!condition) {
        // tslint:disable-next-line:no-console
        console.error(message);
    }
}
function invariant(condition, format, a, b, c, d, e, f) {
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        }
        else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
}

/**
 * The public API for putting history on context.
 */
var Router = /*@__PURE__*/(function (Component) {
    function Router(props, context) {
        Component.call(this, props, context);
        this.state = {
            match: this.computeMatch(props.history.location.pathname)
        };
    }

    if ( Component ) Router.__proto__ = Component;
    Router.prototype = Object.create( Component && Component.prototype );
    Router.prototype.constructor = Router;
    Router.prototype.getChildContext = function getChildContext () {
        var childContext = combineFrom(this.context.router, null);
        childContext.history = this.props.history;
        childContext.route = {
            location: childContext.history.location,
            match: this.state.match
        };
        return {
            router: childContext
        };
    };
    Router.prototype.computeMatch = function computeMatch (pathname) {
        return {
            isExact: pathname === '/',
            params: {},
            path: '/',
            url: '/'
        };
    };
    Router.prototype.componentWillMount = function componentWillMount () {
        var this$1 = this;

        var ref = this.props;
        var history = ref.history;
        // Do this here so we can setState when a <Redirect> changes the
        // location in componentWillMount. This happens e.g. when doing
        // server rendering using a <StaticRouter>.
        this.unlisten = history.listen(function () {
            this$1.setState({
                match: this$1.computeMatch(history.location.pathname)
            });
        });
    };
    Router.prototype.componentWillUnmount = function componentWillUnmount () {
        this.unlisten();
    };
    Router.prototype.render = function render (props) {
        return props.children;
    };

    return Router;
}(inferno.Component));
{
    Router.prototype.componentWillReceiveProps = function (nextProps) {
        warning(this.props.history === nextProps.history, 'You cannot change <Router history>');
    };
}

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
}
// tslint:disable-next-line:no-empty
var noop = function () { };
var StaticRouter = /*@__PURE__*/(function (Component) {
    function StaticRouter() {
        var this$1 = this;

        Component.apply(this, arguments);
        this.createHref = function (path) { return addLeadingSlash(this$1.props.basename + createURL(path)); };
        this.handlePush = function (location) {
            var ref = this$1.props;
            var basename = ref.basename;
            var context = ref.context;
            context.action = 'PUSH';
            context.location = addBasename(basename, createLocation(location));
            context.url = createURL(context.location);
        };
        this.handleReplace = function (location) {
            var ref = this$1.props;
            var basename = ref.basename;
            var context = ref.context;
            context.action = 'REPLACE';
            context.location = addBasename(basename, createLocation(location));
            context.url = createURL(context.location);
        };
        // tslint:disable-next-line:no-empty
        this.handleListen = function () { return noop; };
        // tslint:disable-next-line:no-empty
        this.handleBlock = function () { return noop; };
    }

    if ( Component ) StaticRouter.__proto__ = Component;
    StaticRouter.prototype = Object.create( Component && Component.prototype );
    StaticRouter.prototype.constructor = StaticRouter;
    StaticRouter.prototype.getChildContext = function getChildContext () {
        return {
            router: {
                staticContext: this.props.context
            }
        };
    };
    StaticRouter.prototype.render = function render (ref) {
        var basename = ref.basename;
        var context = ref.context;
        var location = ref.location;
        var rest = objectWithoutProperties( ref, ["basename", "context", "location"] );
        var props = rest;

        return inferno.createComponentVNode(4 /* ComponentClass */, Router, combineFrom(props, {
            history: {
                action: 'POP',
                block: this.handleBlock,
                createHref: this.createHref,
                go: staticHandler('go'),
                goBack: staticHandler('goBack'),
                goForward: staticHandler('goForward'),
                listen: this.handleListen,
                location: stripBasename(basename, createLocation(location)),
                push: this.handlePush,
                replace: this.handleReplace
            }
        }));
    };

    return StaticRouter;
}(inferno.Component));
StaticRouter.defaultProps = {
    basename: '',
    location: '/'
};
{
    StaticRouter.prototype.componentWillMount = function () {
        warning(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
    };
}
function normalizeLocation(ref) {
    var pathname = ref.pathname; if ( pathname === void 0 ) pathname = '/';
    var search = ref.search;
    var hash = ref.hash;

    return {
        hash: (hash || '') === '#' ? '' : hash,
        pathname: pathname,
        search: (search || '') === '?' ? '' : search
    };
}
function addBasename(basename, location) {
    if (!basename) {
        return location;
    }
    return combineFrom(location, { pathname: addLeadingSlash(basename) + location.pathname });
}
function stripBasename(basename, location) {
    if (!basename) {
        return location;
    }
    var base = addLeadingSlash(basename);
    if (location.pathname.indexOf(base) !== 0) {
        return location;
    }
    return combineFrom(location, { pathname: location.pathname.substr(base.length) });
}
function createLocation(location) {
    return typeof location === 'string' ? history.parsePath(location) : normalizeLocation(location);
}
function createURL(location) {
    return typeof location === 'string' ? location : history.createPath(location);
}
function staticHandler(methodName) {
    return function () {
        invariant(false, 'You cannot %s with <StaticRouter>', methodName);
    };
}

var BrowserRouter = /*@__PURE__*/(function (Component) {
    function BrowserRouter(props, context) {
        Component.call(this, props, context);
        this.history = history.createBrowserHistory(props);
    }

    if ( Component ) BrowserRouter.__proto__ = Component;
    BrowserRouter.prototype = Object.create( Component && Component.prototype );
    BrowserRouter.prototype.constructor = BrowserRouter;
    BrowserRouter.prototype.render = function render () {
        return inferno.createComponentVNode(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return BrowserRouter;
}(inferno.Component));
{
    BrowserRouter.prototype.componentWillMount = function () {
        warning(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
    };
}

var HashRouter = /*@__PURE__*/(function (Component) {
    function HashRouter(props, context) {
        Component.call(this, props, context);
        this.history = history.createHashHistory(props);
    }

    if ( Component ) HashRouter.__proto__ = Component;
    HashRouter.prototype = Object.create( Component && Component.prototype );
    HashRouter.prototype.constructor = HashRouter;
    HashRouter.prototype.render = function render () {
        return inferno.createComponentVNode(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return HashRouter;
}(inferno.Component));
{
    HashRouter.prototype.componentWillMount = function () {
        warning(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
    };
}

var MemoryRouter = /*@__PURE__*/(function (Component) {
    function MemoryRouter(props, context) {
        Component.call(this, props, context);
        this.history = history.createMemoryHistory(props);
    }

    if ( Component ) MemoryRouter.__proto__ = Component;
    MemoryRouter.prototype = Object.create( Component && Component.prototype );
    MemoryRouter.prototype.constructor = MemoryRouter;
    MemoryRouter.prototype.render = function render () {
        return inferno.createComponentVNode(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return MemoryRouter;
}(inferno.Component));
{
    MemoryRouter.prototype.componentWillMount = function () {
        warning(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
    };
}

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
var compilePath = function (pattern, options) {
    var cacheKey = "" + (options.end) + (options.strict) + (options.sensitive);
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    if (cache[pattern]) {
        return cache[pattern];
    }
    var keys = [];
    var re = pathToRegexp(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
    if (cacheCount < cacheLimit) {
        cache[pattern] = compiledPattern;
        cacheCount++;
    }
    return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */
function matchPath(pathname, options) {
    if (typeof options === 'string') {
        options = { path: options };
    }
    var path = options.path; if ( path === void 0 ) path = '/';
    var exact = options.exact; if ( exact === void 0 ) exact = false;
    var strict = options.strict; if ( strict === void 0 ) strict = false;
    var sensitive = options.sensitive; if ( sensitive === void 0 ) sensitive = false;
    var ref = compilePath(path, { end: exact, strict: strict, sensitive: sensitive });
    var re = ref.re;
    var keys = ref.keys;
    var match = re.exec(pathname);
    if (!match) {
        return null;
    }
    var url = match[0];
    var values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        isExact: isExact,
        params: keys.reduce(function (memo, key, index) {
            memo[key.name] = values[index];
            return memo;
        }, {}),
        path: path,
        url: path === '/' && url === '' ? '/' : url // the matched portion of the URL
    };
}

/**
 * The public API for matching a single path and rendering.
 */
var Route = /*@__PURE__*/(function (Component) {
    function Route(props, context) {
        Component.call(this, props, context);
        this.state = {
            match: this.computeMatch(props, context.router)
        };
    }

    if ( Component ) Route.__proto__ = Component;
    Route.prototype = Object.create( Component && Component.prototype );
    Route.prototype.constructor = Route;
    Route.prototype.getChildContext = function getChildContext () {
        var childContext = combineFrom(this.context.router, null);
        childContext.route = {
            location: this.props.location || this.context.router.route.location,
            match: this.state.match
        };
        return {
            router: childContext
        };
    };

    Route.prototype.computeMatch = function computeMatch (ref, router) {
        var computedMatch = ref.computedMatch;
        var location = ref.location;
        var path = ref.path;
        var strict = ref.strict;
        var exact = ref.exact;
        var sensitive = ref.sensitive;

        if (computedMatch) {
            // <Switch> already computed the match for us
            return computedMatch;
        }
        {
            invariant(router, 'You should not use <Route> or withRouter() outside a <Router>');
        }
        var route = router.route;
        var pathname = (location || route.location).pathname;
        return path ? matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
    };
    Route.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, nextContext) {
        {
            warning(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
            warning(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
        }
        this.setState({
            match: this.computeMatch(nextProps, nextContext.router)
        });
    };
    Route.prototype.render = function render () {
        var ref = this.state;
        var match = ref.match;
        var ref$1 = this.props;
        var children = ref$1.children;
        var component = ref$1.component;
        var render = ref$1.render;
        var ref$2 = this.context.router;
        var history = ref$2.history;
        var route = ref$2.route;
        var staticContext = ref$2.staticContext;
        var location = this.props.location || route.location;
        var props = { match: match, location: location, history: history, staticContext: staticContext };
        if (component) {
            {
                if (!isFunction(component)) {
                    throw new Error("Inferno error: <Route /> - 'component' property must be prototype of class or functional component, not vNode.");
                }
            }
            return match ? inferno.createComponentVNode(2 /* ComponentUnknown */, component, props) : null;
        }
        if (render) {
            return match ? render(props, this.context) : null;
        }
        if (typeof children === 'function') {
            return children(props);
        }
        return children;
    };

    return Route;
}(inferno.Component));
{
    Route.prototype.componentWillMount = function () {
        warning(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');
        warning(!(this.props.component && this.props.children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');
        warning(!(this.props.render && this.props.children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
    };
}

function getMatch(ref, route, location) {
    var path = ref.path;
    var exact = ref.exact;
    var strict = ref.strict;
    var sensitive = ref.sensitive;
    var from = ref.from;

    var pathProp = path || from;
    return pathProp ? matchPath(location.pathname, { path: pathProp, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
}
function extractMatchFromChildren(children, route, location) {
    var match;
    var _child;
    if (isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
            _child = children[i];
            if (isArray(_child)) {
                var nestedMatch = extractMatchFromChildren(_child, route, location);
                match = nestedMatch.match;
                _child = nestedMatch._child;
            }
            else {
                match = getMatch(_child.props, route, location);
            }
            if (match) {
                break;
            }
        }
    }
    else {
        match = getMatch(children.props, route, location);
        _child = children;
    }
    return { match: match, _child: _child };
}
var Switch = /*@__PURE__*/(function (Component) {
    function Switch () {
        Component.apply(this, arguments);
    }

    if ( Component ) Switch.__proto__ = Component;
    Switch.prototype = Object.create( Component && Component.prototype );
    Switch.prototype.constructor = Switch;

    Switch.prototype.render = function render () {
        var ref = this.context.router;
        var route = ref.route;
        var ref$1 = this.props;
        var children = ref$1.children;
        var location = this.props.location || route.location;
        if (isInvalid(children)) {
            return null;
        }
        var ref$2 = extractMatchFromChildren(children, route, location);
        var match = ref$2.match;
        var _child = ref$2._child;
        if (match) {
            return inferno.createComponentVNode(_child.flags, _child.type, combineFrom(_child.props, { location: location, computedMatch: match }));
        }
        return null;
    };

    return Switch;
}(inferno.Component));
{
    Switch.prototype.componentWillMount = function () {
        invariant(this.context.router, 'You should not use <Switch> outside a <Router>');
    };
    Switch.prototype.componentWillReceiveProps = function (nextProps) {
        warning(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
        warning(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
    };
}

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var isModifiedEvent = function (event) { return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey); };
function handleClick(ref, event) {
    var props = ref.props;
    var context = ref.context;

    if (props.onClick) {
        props.onClick(event);
    }
    if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore everything but left clicks
        !props.target && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var ref$1 = context.router;
        var history = ref$1.history;
        var replace = props.replace; if ( replace === void 0 ) replace = false;
        var to = props.to;
        if (replace) {
            history.replace(to);
        }
        else {
            history.push(to);
        }
    }
}
/**
 * The public API for rendering a history-aware <a>.
 */
function Link(props, context) {
    var replace = props.replace;
    var children = props.children;
    var className = props.className;
    var to = props.to; if ( to === void 0 ) to = '';
    var innerRef = props.innerRef;
    var rest$1 = objectWithoutProperties$1( props, ["replace", "children", "className", "to", "innerRef"] );
    var rest = rest$1;
    invariant(context.router, 'You should not use <Link> outside a <Router>');
    var href = context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);
    var newProps = combineFrom(rest, null);
    newProps.href = href;
    newProps.onClick = inferno.linkEvent({
        context: context,
        props: props
    }, handleClick);
    return inferno.createVNode(1 /* HtmlElement */, 'a', className, children, 0 /* UnknownChildren */, newProps, null, innerRef);
}

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
function filter(i) {
    return i;
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
function NavLink(ref) {
    var to = ref.to;
    var exact = ref.exact;
    var strict = ref.strict;
    var onClick = ref.onClick;
    var linkLocation = ref.location;
    var activeClassName = ref.activeClassName; if ( activeClassName === void 0 ) activeClassName = 'active';
    var className = ref.className;
    var activeStyle = ref.activeStyle;
    var style = ref.style;
    var getIsActive = ref.isActive;
    var ariaCurrent = ref.ariaCurrent; if ( ariaCurrent === void 0 ) ariaCurrent = 'true';
    var rest$1 = objectWithoutProperties$2( ref, ["to", "exact", "strict", "onClick", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"] );
    var rest = rest$1;

    function linkComponent(ref) {
        var location = ref.location;
        var match = ref.match;

        var isActive = !!(getIsActive ? getIsActive(match, location) : match);
        return inferno.createComponentVNode(8 /* ComponentFunction */, Link, combineFrom({
            'aria-current': isActive && ariaCurrent,
            className: isActive ? [className, activeClassName].filter(filter).join(' ') : className,
            onClick: onClick,
            style: isActive ? combineFrom(style, activeStyle) : style,
            to: to
        }, rest));
    }
    return inferno.createComponentVNode(4 /* ComponentClass */, Route, {
        children: linkComponent,
        exact: exact,
        location: linkLocation,
        path: typeof to === 'object' ? to.pathname : to,
        strict: strict
    });
}

/**
 * The public API for matching a single path and rendering.
 */
var Prompt = /*@__PURE__*/(function (Component) {
    function Prompt () {
        Component.apply(this, arguments);
    }

    if ( Component ) Prompt.__proto__ = Component;
    Prompt.prototype = Object.create( Component && Component.prototype );
    Prompt.prototype.constructor = Prompt;

    Prompt.prototype.enable = function enable (message) {
        if (this.unblock) {
            this.unblock();
        }
        this.unblock = this.context.router.history.block(message);
    };
    Prompt.prototype.disable = function disable () {
        if (this.unblock) {
            this.unblock();
            this.unblock = null;
        }
    };
    Prompt.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');
        if (this.props.when) {
            this.enable(this.props.message);
        }
    };
    Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        if (nextProps.when) {
            if (!this.props.when || this.props.message !== nextProps.message) {
                this.enable(nextProps.message);
            }
        }
        else {
            this.disable();
        }
    };
    Prompt.prototype.componentWillUnmount = function componentWillUnmount () {
        this.disable();
    };
    Prompt.prototype.render = function render () {
        return null;
    };

    return Prompt;
}(inferno.Component));

var Redirect = /*@__PURE__*/(function (Component) {
    function Redirect () {
        Component.apply(this, arguments);
    }

    if ( Component ) Redirect.__proto__ = Component;
    Redirect.prototype = Object.create( Component && Component.prototype );
    Redirect.prototype.constructor = Redirect;

    Redirect.prototype.isStatic = function isStatic () {
        return this.context.router && this.context.router.staticContext;
    };
    Redirect.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');
        if (this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidMount = function componentDidMount () {
        if (!this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
        var prevTo = history.createLocation(prevProps.to);
        var nextTo = history.createLocation(this.props.to);
        if (history.locationsAreEqual(prevTo, nextTo)) {
            // tslint:disable-next-line:no-console
            console.error(("You tried to redirect to the same route you're currently on: \"" + (nextTo.pathname) + (nextTo.search) + "\""));
            return;
        }
        this.perform();
    };
    Redirect.prototype.perform = function perform () {
        var ref = this.context.router;
        var history = ref.history;
        var ref$1 = this.props;
        var push = ref$1.push; if ( push === void 0 ) push = false;
        var to = ref$1.to;
        if (push) {
            history.push(to);
        }
        else {
            history.replace(to);
        }
    };
    Redirect.prototype.render = function render () {
        return null;
    };

    return Redirect;
}(inferno.Component));

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
/**
 * A public higher-order component to access the imperative API
 */
function withRouter(Com) {
    var C = function (props) {
        var wrappedComponentRef = props.wrappedComponentRef;
        var rest = objectWithoutProperties$3( props, ["wrappedComponentRef"] );
        var remainingProps = rest;
        return inferno.createComponentVNode(4 /* ComponentClass */, Route, {
            render: function render(routeComponentProps) {
                return inferno.createComponentVNode(2 /* ComponentUnknown */, Com, combineFrom(remainingProps, routeComponentProps), null, wrappedComponentRef);
            }
        });
    };
    C.displayName = "withRouter(" + (Com.displayName || Com.name) + ")";
    C.WrappedComponent = Com;
    return hoistNonReactStatics(C, Com);
}

exports.BrowserRouter = BrowserRouter;
exports.HashRouter = HashRouter;
exports.Link = Link;
exports.MemoryRouter = MemoryRouter;
exports.NavLink = NavLink;
exports.Prompt = Prompt;
exports.Redirect = Redirect;
exports.Route = Route;
exports.Router = Router;
exports.StaticRouter = StaticRouter;
exports.Switch = Switch;
exports.matchPath = matchPath;
exports.withRouter = withRouter;

},{"history":8,"hoist-non-inferno-statics":9,"inferno":18,"path-to-regexp-es6":20}],14:[function(require,module,exports){
"use strict";function t(t){return t&&"object"===typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("inferno"),o=require("history"),r=t(require("path-to-regexp-es6")),n=t(require("hoist-non-inferno-statics")),i=Array.isArray;function a(t){return null===t||!1===t||!0===t||void 0===t}function c(t,e){var o={};if(t)for(var r in t)o[r]=t[r];if(e)for(var n in e)o[n]=e[n];return o}function p(t,e,o,r,n,i,a,c){if(!t){var p;if(void 0===e)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[o,r,n,i,a,c],u=0;(p=new Error(e.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw p.framesToPop=1,p}}var s=function(t){function e(e,o){t.call(this,e,o),this.state={match:this.computeMatch(e.history.location.pathname)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getChildContext=function(){var t=c(this.context.router,null);return t.history=this.props.history,t.route={location:t.history.location,match:this.state.match},{router:t}},e.prototype.computeMatch=function(t){return{isExact:"/"===t,params:{},path:"/",url:"/"}},e.prototype.componentWillMount=function(){var t=this,e=this.props.history;this.unlisten=e.listen((function(){t.setState({match:t.computeMatch(e.location.pathname)})}))},e.prototype.componentWillUnmount=function(){this.unlisten()},e.prototype.render=function(t){return t.children},e}(e.Component);function u(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(o[r]=t[r]);return o}function h(t){return"/"===t.charAt(0)?t:"/"+t}var l=function(){},f=function(t){function o(){var e=this;t.apply(this,arguments),this.createHref=function(t){return h(e.props.basename+x(t))},this.handlePush=function(t){var o=e.props,r=o.basename,n=o.context;n.action="PUSH",n.location=m(r,v(t)),n.url=x(n.location)},this.handleReplace=function(t){var o=e.props,r=o.basename,n=o.context;n.action="REPLACE",n.location=m(r,v(t)),n.url=x(n.location)},this.handleListen=function(){return l},this.handleBlock=function(){return l}}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},o.prototype.render=function(t){var o=t.basename,r=(t.context,t.location),n=u(t,["basename","context","location"]);return e.createComponentVNode(4,s,c(n,{history:{action:"POP",block:this.handleBlock,createHref:this.createHref,go:C("go"),goBack:C("goBack"),goForward:C("goForward"),listen:this.handleListen,location:d(o,v(r)),push:this.handlePush,replace:this.handleReplace}}))},o}(e.Component);function y(t){var e=t.pathname;void 0===e&&(e="/");var o=t.search,r=t.hash;return{hash:"#"===(r||"")?"":r,pathname:e,search:"?"===(o||"")?"":o}}function m(t,e){if(!t)return e;return c(e,{pathname:h(t)+e.pathname})}function d(t,e){if(!t)return e;var o=h(t);if(0!==e.pathname.indexOf(o))return e;return c(e,{pathname:e.pathname.substr(o.length)})}function v(t){return"string"===typeof t?o.parsePath(t):y(t)}function x(t){return"string"===typeof t?t:o.createPath(t)}function C(t){return function(){p(!1,"You cannot %s with <StaticRouter>",t)}}f.defaultProps={basename:"",location:"/"};var _=function(t){function r(e,r){t.call(this,e,r),this.history=o.createBrowserHistory(e)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.render=function(){return e.createComponentVNode(4,s,{children:this.props.children,history:this.history})},r}(e.Component),b=function(t){function r(e,r){t.call(this,e,r),this.history=o.createHashHistory(e)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.render=function(){return e.createComponentVNode(4,s,{children:this.props.children,history:this.history})},r}(e.Component),g=function(t){function r(e,r){t.call(this,e,r),this.history=o.createMemoryHistory(e)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.render=function(){return e.createComponentVNode(4,s,{children:this.props.children,history:this.history})},r}(e.Component),k={},O=1e4,R=0,w=function(t,e){var o=""+e.end+e.strict+e.sensitive,n=k[o]||(k[o]={});if(n[t])return n[t];var i=[],a={re:r(t,i,e),keys:i};return R<O&&(n[t]=a,R++),a};function N(t,e){"string"===typeof e&&(e={path:e});var o=e.path;void 0===o&&(o="/");var r=e.exact;void 0===r&&(r=!1);var n=e.strict;void 0===n&&(n=!1);var i=e.sensitive;void 0===i&&(i=!1);var a=w(o,{end:r,strict:n,sensitive:i}),c=a.re,p=a.keys,s=c.exec(t);if(!s)return null;var u=s[0],h=s.slice(1),l=t===u;if(r&&!l)return null;return{isExact:l,params:p.reduce((function(t,e,o){return t[e.name]=h[o],t}),{}),path:o,url:"/"===o&&""===u?"/":u}}var P=function(t){function o(e,o){t.call(this,e,o),this.state={match:this.computeMatch(e,o.router)}}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.getChildContext=function(){var t=c(this.context.router,null);return t.route={location:this.props.location||this.context.router.route.location,match:this.state.match},{router:t}},o.prototype.computeMatch=function(t,e){var o=t.computedMatch,r=t.location,n=t.path,i=t.strict,a=t.exact,c=t.sensitive;if(o)return o;var p=e.route,s=(r||p.location).pathname;return n?N(s,{path:n,strict:i,exact:a,sensitive:c}):p.match},o.prototype.componentWillReceiveProps=function(t,e){this.setState({match:this.computeMatch(t,e.router)})},o.prototype.render=function(){var t=this.state.match,o=this.props,r=o.children,n=o.component,i=o.render,a=this.context.router,c=a.history,p=a.route,s=a.staticContext,u={match:t,location:this.props.location||p.location,history:c,staticContext:s};if(n)return t?e.createComponentVNode(2,n,u):null;if(i)return t?i(u,this.context):null;if("function"===typeof r)return r(u);return r},o}(e.Component);function j(t,e,o){var r=t.path,n=t.exact,i=t.strict,a=t.sensitive,c=t.from,p=r||c;return p?N(o.pathname,{path:p,exact:n,strict:i,sensitive:a}):e.match}function M(t,e,o){var r,n;if(i(t))for(var a=0;a<t.length;++a){if(n=t[a],i(n)){var c=M(n,e,o);r=c.match,n=c._child}else r=j(n.props,e,o);if(r)break}else r=j(t.props,e,o),n=t;return{match:r,_child:n}}var V=function(t){function o(){t.apply(this,arguments)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.render=function(){var t=this.context.router.route,o=this.props.children,r=this.props.location||t.location;if(a(o))return null;var n=M(o,t,r),i=n.match,p=n._child;if(i)return e.createComponentVNode(p.flags,p.type,c(p.props,{location:r,computedMatch:i}));return null},o}(e.Component);function S(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(o[r]=t[r]);return o}var H=function(t){return Boolean(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)};function E(t,e){var o=t.props,r=t.context;if(o.onClick&&o.onClick(e),!e.defaultPrevented&&0===e.button&&!o.target&&!H(e)){e.preventDefault();var n=r.router.history,i=o.replace;void 0===i&&(i=!1);var a=o.to;i?n.replace(a):n.push(a)}}function L(t,o){t.replace;var r=t.children,n=t.className,i=t.to;void 0===i&&(i="");var a=t.innerRef,s=S(t,["replace","children","className","to","innerRef"]);p(o.router,"You should not use <Link> outside a <Router>");var u=o.router.history.createHref("string"===typeof i?{pathname:i}:i),h=c(s,null);return h.href=u,h.onClick=e.linkEvent({context:o,props:t},E),e.createVNode(1,"a",n,r,0,h,null,a)}function W(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(o[r]=t[r]);return o}function A(t){return t}function B(t){var o=t.to,r=t.exact,n=t.strict,i=t.onClick,a=t.location,p=t.activeClassName;void 0===p&&(p="active");var s=t.className,u=t.activeStyle,h=t.style,l=t.isActive,f=t.ariaCurrent;void 0===f&&(f="true");var y=W(t,["to","exact","strict","onClick","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return e.createComponentVNode(4,P,{children:function(t){var r=t.location,n=t.match,a=!!(l?l(n,r):n);return e.createComponentVNode(8,L,c({"aria-current":a&&f,className:a?[s,p].filter(A).join(" "):s,onClick:i,style:a?c(h,u):h,to:o},y))},exact:r,location:a,path:"object"===typeof o?o.pathname:o,strict:n})}var q=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.enable=function(t){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(t)},e.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},e.prototype.componentWillMount=function(){p(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},e.prototype.componentWillReceiveProps=function(t){t.when?this.props.when&&this.props.message===t.message||this.enable(t.message):this.disable()},e.prototype.componentWillUnmount=function(){this.disable()},e.prototype.render=function(){return null},e}(e.Component),Y=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){p(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=o.createLocation(t.to),r=o.createLocation(this.props.to);if(o.locationsAreEqual(e,r))return void console.error("You tried to redirect to the same route you're currently on: \""+r.pathname+r.search+'"');this.perform()},e.prototype.perform=function(){var t=this.context.router.history,e=this.props,o=e.push;void 0===o&&(o=!1);var r=e.to;o?t.push(r):t.replace(r)},e.prototype.render=function(){return null},e}(e.Component);function K(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(o[r]=t[r]);return o}function U(t){var o=function(o){var r=o.wrappedComponentRef,n=K(o,["wrappedComponentRef"]);return e.createComponentVNode(4,P,{render:function(o){return e.createComponentVNode(2,t,c(n,o),null,r)}})};return o.displayName="withRouter("+(t.displayName||t.name)+")",o.WrappedComponent=t,n(o,t)}exports.BrowserRouter=_,exports.HashRouter=b,exports.Link=L,exports.MemoryRouter=g,exports.NavLink=B,exports.Prompt=q,exports.Redirect=Y,exports.Route=P,exports.Router=s,exports.StaticRouter=f,exports.Switch=V,exports.matchPath=N,exports.withRouter=U;

},{"history":8,"hoist-non-inferno-statics":9,"inferno":18,"path-to-regexp-es6":20}],15:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"./dist/index.cjs.js":13,"./dist/index.cjs.min.js":14,"dup":12}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return o === void 0 || o === null;
}
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.error(message);
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
// object.event should always be function, otherwise its badly created object.
function isLinkEventObject(o) {
    return !isNull(o) && typeof o === 'object';
}

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var Fragment = '$F';
{
    Object.freeze(EMPTY_OBJ);
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function appendChild(parentDOM, dom) {
    parentDOM.appendChild(dom);
}
function insertOrAppend(parentDOM, newNode, nextNode) {
    if (isNull(nextNode)) {
        appendChild(parentDOM, newNode);
    }
    else {
        parentDOM.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDOM, newDom, lastDom) {
    parentDOM.replaceChild(newDom, lastDom);
}
function removeChild(parentDOM, childNode) {
    parentDOM.removeChild(childNode);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}
function findChildVNode(vNode, startEdge, flags) {
    var children = vNode.children;
    if (flags & 4 /* ComponentClass */) {
        return children.$LI;
    }
    if (flags & 8192 /* Fragment */) {
        return vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
    }
    return children;
}
function findDOMfromVNode(vNode, startEdge) {
    var flags;
    while (vNode) {
        flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            return vNode.dom;
        }
        vNode = findChildVNode(vNode, startEdge, flags);
    }
    return null;
}
function removeVNodeDOM(vNode, parentDOM) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            removeChild(parentDOM, vNode.dom);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    removeVNodeDOM(children[i], parentDOM);
                }
                return;
            }
        }
    } while (vNode);
}
function moveVNodeDOM(vNode, parentDOM, nextNode) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            insertOrAppend(parentDOM, vNode.dom, nextNode);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    moveVNodeDOM(children[i], parentDOM, nextNode);
                }
                return;
            }
        }
    } while (vNode);
}
function getComponentName(instance) {
    // Fallback for IE
    return instance.name || instance.displayName || instance.constructor.name || (instance.toString().match(/^function\s*([^\s(]+)/) || [])[1];
}
function createDerivedState(instance, nextProps, state) {
    if (instance.constructor.getDerivedStateFromProps) {
        return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
    }
    return state;
}
var renderCheck = {
    v: false
};
var options = {
    componentComparator: null,
    createVNode: null,
    renderComplete: null
};
function setTextContent(dom, children) {
    dom.textContent = children;
}
// Calling this function assumes, nextValue is linkEvent
function isLastValueSameLinkEvent(lastValue, nextValue) {
    return (isLinkEventObject(lastValue) &&
        lastValue.event === nextValue.event &&
        lastValue.data === nextValue.data);
}
function mergeUnsetProperties(to, from) {
    for (var propName in from) {
        if (isUndefined(to[propName])) {
            to[propName] = from[propName];
        }
    }
    return to;
}
function safeCall1(method, arg1) {
    return !!isFunction(method) && (method(arg1), true);
}

function getTagName(input) {
    var tagName;
    if (isArray(input)) {
        var arrayText = input.length > 3 ? input.slice(0, 3).toString() + ',...' : input.toString();
        tagName = 'Array(' + arrayText + ')';
    }
    else if (isStringOrNumber(input)) {
        tagName = 'Text(' + input + ')';
    }
    else if (isInvalid(input)) {
        tagName = 'InvalidVNode(' + input + ')';
    }
    else {
        var flags = input.flags;
        if (flags & 481 /* Element */) {
            tagName = "<" + (input.type) + (input.className ? ' class="' + input.className + '"' : '') + ">";
        }
        else if (flags & 16 /* Text */) {
            tagName = "Text(" + (input.children) + ")";
        }
        else if (flags & 1024 /* Portal */) {
            tagName = "Portal*";
        }
        else {
            tagName = "<" + (getComponentName(input.type)) + " />";
        }
    }
    return '>> ' + tagName + '\n';
}
function DEV_ValidateKeys(vNodeTree, forceKeyed) {
    var foundKeys = {};
    for (var i = 0, len = vNodeTree.length; i < len; ++i) {
        var childNode = vNodeTree[i];
        if (isArray(childNode)) {
            return 'Encountered ARRAY in mount, array must be flattened, or normalize used. Location: \n' + getTagName(childNode);
        }
        if (isInvalid(childNode)) {
            if (forceKeyed) {
                return 'Encountered invalid node when preparing to keyed algorithm. Location: \n' + getTagName(childNode);
            }
            else if (Object.keys(foundKeys).length !== 0) {
                return 'Encountered invalid node with mixed keys. Location: \n' + getTagName(childNode);
            }
            continue;
        }
        if (typeof childNode === 'object') {
            if (childNode.isValidated) {
                continue;
            }
            childNode.isValidated = true;
        }
        // Key can be undefined, null too. But typescript complains for no real reason
        var key = childNode.key;
        if (!isNullOrUndef(key) && !isStringOrNumber(key)) {
            return 'Encountered child vNode where key property is not string or number. Location: \n' + getTagName(childNode);
        }
        var children = childNode.children;
        var childFlags = childNode.childFlags;
        if (!isInvalid(children)) {
            var val = (void 0);
            if (childFlags & 12 /* MultipleChildren */) {
                val = DEV_ValidateKeys(children, (childFlags & 8 /* HasKeyedChildren */) !== 0);
            }
            else if (childFlags === 2 /* HasVNodeChildren */) {
                val = DEV_ValidateKeys([children], false);
            }
            if (val) {
                val += getTagName(childNode);
                return val;
            }
        }
        if (forceKeyed && isNullOrUndef(key)) {
            return ('Encountered child without key during keyed algorithm. If this error points to Array make sure children is flat list. Location: \n' +
                getTagName(childNode));
        }
        else if (!forceKeyed && isNullOrUndef(key)) {
            if (Object.keys(foundKeys).length !== 0) {
                return 'Encountered children with key missing. Location: \n' + getTagName(childNode);
            }
            continue;
        }
        if (foundKeys[key]) {
            return 'Encountered two children with same key: {' + key + '}. Location: \n' + getTagName(childNode);
        }
        foundKeys[key] = true;
    }
}
function validateVNodeElementChildren(vNode) {
    {
        if (vNode.childFlags === 1 /* HasInvalidChildren */) {
            return;
        }
        if (vNode.flags & 64 /* InputElement */) {
            throwError("input elements can't have children.");
        }
        if (vNode.flags & 128 /* TextareaElement */) {
            throwError("textarea elements can't have children.");
        }
        if (vNode.flags & 481 /* Element */) {
            var voidTypes = {
                area: true,
                base: true,
                br: true,
                col: true,
                command: true,
                embed: true,
                hr: true,
                img: true,
                input: true,
                keygen: true,
                link: true,
                meta: true,
                param: true,
                source: true,
                track: true,
                wbr: true
            };
            var tag = vNode.type.toLowerCase();
            if (tag === 'media') {
                throwError("media elements can't have children.");
            }
            if (voidTypes[tag]) {
                throwError((tag + " elements can't have children."));
            }
        }
    }
}
function validateKeys(vNode) {
    {
        // Checks if there is any key missing or duplicate keys
        if (vNode.isValidated === false && vNode.children && vNode.flags & 481 /* Element */) {
            var error = DEV_ValidateKeys(Array.isArray(vNode.children) ? vNode.children : [vNode.children], (vNode.childFlags & 8 /* HasKeyedChildren */) > 0);
            if (error) {
                throwError(error + getTagName(vNode));
            }
        }
        vNode.isValidated = true;
    }
}
function throwIfObjectIsNotVNode(input) {
    if (!isNumber(input.flags)) {
        throwError(("normalization received an object that's not a valid VNode, you should stringify it first or fix createVNode flags. Object: \"" + (JSON.stringify(input)) + "\"."));
    }
}

var keyPrefix = '$';
function V(childFlags, children, className, flags, key, props, ref, type) {
    {
        this.isValidated = false;
    }
    this.childFlags = childFlags;
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key === void 0 ? null : key;
    this.props = props === void 0 ? null : props;
    this.ref = ref === void 0 ? null : ref;
    this.type = type;
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    {
        if (flags & 14 /* Component */) {
            throwError('Creating Component vNodes using createVNode is not allowed. Use Inferno.createComponentVNode method.');
        }
    }
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    {
        validateVNodeElementChildren(vNode);
    }
    return vNode;
}
function mergeDefaultHooks(flags, type, ref) {
    if (flags & 4 /* ComponentClass */) {
        return ref;
    }
    var defaultHooks = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultHooks;
    if (isNullOrUndef(defaultHooks)) {
        return ref;
    }
    if (isNullOrUndef(ref)) {
        return defaultHooks;
    }
    return mergeUnsetProperties(ref, defaultHooks);
}
function mergeDefaultProps(flags, type, props) {
    // set default props
    var defaultProps = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultProps;
    if (isNullOrUndef(defaultProps)) {
        return props;
    }
    if (isNullOrUndef(props)) {
        return combineFrom(defaultProps, null);
    }
    return mergeUnsetProperties(props, defaultProps);
}
function resolveComponentFlags(flags, type) {
    if (flags & 12 /* ComponentKnown */) {
        return flags;
    }
    if (type.prototype && type.prototype.render) {
        return 4 /* ComponentClass */;
    }
    if (type.render) {
        return 32776 /* ForwardRefComponent */;
    }
    return 8 /* ComponentFunction */;
}
function createComponentVNode(flags, type, props, key, ref) {
    {
        if (flags & 1 /* HtmlElement */) {
            throwError('Creating element vNodes using createComponentVNode is not allowed. Use Inferno.createVNode method.');
        }
    }
    flags = resolveComponentFlags(flags, type);
    var vNode = new V(1 /* HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return new V(1 /* HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function createFragment(children, childFlags, key) {
    var fragment = createVNode(8192 /* Fragment */, 8192 /* Fragment */, null, children, childFlags, null, key, null);
    switch (fragment.childFlags) {
        case 1 /* HasInvalidChildren */:
            fragment.children = createVoidVNode();
            fragment.childFlags = 2 /* HasVNodeChildren */;
            break;
        case 16 /* HasTextChildren */:
            fragment.children = [createTextVNode(children)];
            fragment.childFlags = 4 /* HasNonKeyedChildren */;
            break;
    }
    return fragment;
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
/*
 * Fragment is different than normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */
function cloneFragment(vNodeToClone) {
    var clonedChildren;
    var oldChildren = vNodeToClone.children;
    var childFlags = vNodeToClone.childFlags;
    if (childFlags === 2 /* HasVNodeChildren */) {
        clonedChildren = directClone(oldChildren);
    }
    else if (childFlags & 12 /* MultipleChildren */) {
        clonedChildren = [];
        for (var i = 0, len = oldChildren.length; i < len; ++i) {
            clonedChildren.push(directClone(oldChildren[i]));
        }
    }
    return createFragment(clonedChildren, childFlags, vNodeToClone.key);
}
function directClone(vNodeToClone) {
    var flags = vNodeToClone.flags & -16385 /* ClearInUse */;
    var props = vNodeToClone.props;
    if (flags & 14 /* Component */) {
        if (!isNull(props)) {
            var propsToClone = props;
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
    }
    if ((flags & 8192 /* Fragment */) === 0) {
        return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
    }
    return cloneFragment(vNodeToClone);
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function createPortal(children, container) {
    var normalizedRoot = normalizeRoot(children);
    return createVNode(1024 /* Portal */, 1024 /* Portal */, null, normalizedRoot, 0 /* UnknownChildren */, null, normalizedRoot.key, container);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    {
                        throwIfObjectIsNotVNode(n);
                    }
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (n.flags & 81920 /* InUseOrNormalized */ || isPrefixedKey) {
                        n = directClone(n);
                    }
                    n.flags |= 65536 /* Normalized */;
                    if (!isPrefixedKey) {
                        if (isNull(oldKey)) {
                            n.key = newKey;
                        }
                        else {
                            n.key = currentKey + oldKey;
                        }
                    }
                    else if (oldKey.substring(0, currentKey.length) !== currentKey) {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    switch (type) {
        case 'svg':
            return 32 /* SvgElement */;
        case 'input':
            return 64 /* InputElement */;
        case 'select':
            return 256 /* SelectElement */;
        case 'textarea':
            return 128 /* TextareaElement */;
        case Fragment:
            return 8192 /* Fragment */;
        default:
            return 1 /* HtmlElement */;
    }
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isStringOrNumber(children)) {
        newChildFlags = 16 /* HasTextChildren */;
        newChildren = children;
    }
    else if (isArray(children)) {
        var len = children.length;
        for (var i = 0; i < len; ++i) {
            var n = children[i];
            if (isInvalid(n) || isArray(n)) {
                newChildren = newChildren || children.slice(0, i);
                _normalizeVNodes(children, newChildren, i, '');
                break;
            }
            else if (isStringOrNumber(n)) {
                newChildren = newChildren || children.slice(0, i);
                newChildren.push(createTextVNode(n, keyPrefix + i));
            }
            else {
                {
                    throwIfObjectIsNotVNode(n);
                }
                var key = n.key;
                var needsCloning = (n.flags & 81920 /* InUseOrNormalized */) > 0;
                var isNullKey = isNull(key);
                var isPrefixed = isString(key) && key[0] === keyPrefix;
                if (needsCloning || isNullKey || isPrefixed) {
                    newChildren = newChildren || children.slice(0, i);
                    if (needsCloning || isPrefixed) {
                        n = directClone(n);
                    }
                    if (isNullKey || isPrefixed) {
                        n.key = keyPrefix + i;
                    }
                    newChildren.push(n);
                }
                else if (newChildren) {
                    newChildren.push(n);
                }
                n.flags |= 65536 /* Normalized */;
            }
        }
        newChildren = newChildren || children;
        if (newChildren.length === 0) {
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            newChildFlags = 8 /* HasKeyedChildren */;
        }
    }
    else {
        newChildren = children;
        newChildren.flags |= 65536 /* Normalized */;
        if (children.flags & 81920 /* InUseOrNormalized */) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
function normalizeRoot(input) {
    if (isInvalid(input) || isStringOrNumber(input)) {
        return createTextVNode(input, null);
    }
    if (isArray(input)) {
        return createFragment(input, 0 /* UnknownChildren */, null);
    }
    return input.flags & 16384 /* InUse */ ? directClone(input) : input;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
    return {
        onClick: v,
        onDblClick: v,
        onFocusIn: v,
        onFocusOut: v,
        onKeyDown: v,
        onKeyPress: v,
        onKeyUp: v,
        onMouseDown: v,
        onMouseMove: v,
        onMouseUp: v,
        onTouchEnd: v,
        onTouchMove: v,
        onTouchStart: v
    };
}
var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var syntheticEvents = getDelegatedEventObject(true);
function updateOrAddSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (!eventsObject) {
        eventsObject = dom.$EV = getDelegatedEventObject(null);
    }
    if (!eventsObject[name]) {
        if (++attachedEventCounts[name] === 1) {
            attachedEvents[name] = attachEventToDocument(name);
        }
    }
    return eventsObject;
}
function unmountSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (eventsObject && eventsObject[name]) {
        if (--attachedEventCounts[name] === 0) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = null;
    }
}
function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
    if (isFunction(nextEvent)) {
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else if (isLinkEventObject(nextEvent)) {
        if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
            return;
        }
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else {
        unmountSyntheticEvent(name, dom);
    }
}
// When browsers fully support event.composedPath we could loop it through instead of using parentNode property
function getTargetNode(event) {
    return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
}
function dispatchEvents(event, isClick, name, eventData) {
    var dom = getTargetNode(event);
    do {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    } while (!isNull(dom));
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
function isPropagationStopped() {
    return this.cancelBubble;
}
function extendEventProperties(event) {
    // Event data needs to be object to save reference to currentTarget getter
    var eventData = {
        dom: document
    };
    event.isDefaultPrevented = isDefaultPrevented;
    event.isPropagationStopped = isPropagationStopped;
    event.stopPropagation = stopPropagation;
    Object.defineProperty(event, 'currentTarget', {
        configurable: true,
        get: function get() {
            return eventData.dom;
        }
    });
    return eventData;
}
function rootClickEvent(name) {
    return function (event) {
        if (event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 17 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.stopPropagation();
            return;
        }
        dispatchEvents(event, true, name, extendEventProperties(event));
    };
}
function rootEvent(name) {
    return function (event) {
        dispatchEvents(event, false, name, extendEventProperties(event));
    };
}
function attachEventToDocument(name) {
    var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
    document.addEventListener(normalizeEventName(name), attachedEvent);
    return attachedEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; ++i) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function attachEvent(dom, eventName, handler) {
    var previousKey = "$" + eventName;
    var previousArgs = dom[previousKey];
    if (previousArgs) {
        if (previousArgs[1].wrapped) {
            return;
        }
        dom.removeEventListener(previousArgs[0], previousArgs[1]);
        dom[previousKey] = null;
    }
    if (isFunction(handler)) {
        dom.addEventListener(eventName, handler);
        dom[previousKey] = [eventName, handler];
    }
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        attachEvent(dom, 'change', wrappedOnChange);
        attachEvent(dom, 'click', emptywrapper);
    }
    else {
        attachEvent(dom, 'input', onTextInputChange);
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptions(vNode, value) {
    if (vNode.type === 'option') {
        updateChildOption(vNode, value);
    }
    else {
        var children = vNode.children;
        var flags = vNode.flags;
        if (flags & 4 /* ComponentClass */) {
            updateChildOptions(children.$LI, value);
        }
        else if (flags & 8 /* ComponentFunction */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; ++i) {
                updateChildOptions(children[i], value);
            }
        }
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (props.value === value || (isArray(value) && value.indexOf(props.value) !== -1)) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    attachEvent(dom, 'change', onSelectChange);
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var index = nextPropsOrEmpty.selectedIndex;
    if (index === -1) {
        dom.selectedIndex = -1;
    }
    var childFlags = vNode.childFlags;
    if (childFlags !== 1 /* HasInvalidChildren */) {
        var value = nextPropsOrEmpty.value;
        if (isNumber(index) && index > -1 && dom.options[index]) {
            value = dom.options[index].value;
        }
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        updateChildOptions(vNode, value);
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    attachEvent(dom, 'input', onTextareaInputChange);
    if (nextPropsOrEmpty.onChange) {
        attachEvent(dom, 'change', wrappedOnChange$1);
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
    return {
        current: null
    };
}
function forwardRef(render) {
    {
        if (!isFunction(render)) {
            warning(("forwardRef requires a render function but was given " + (render === null ? 'null' : typeof render) + "."));
            return;
        }
    }
    return {
        render: render
    };
}
function unmountRef(ref) {
    if (ref) {
        if (!safeCall1(ref, null) && ref.current) {
            ref.current = null;
        }
    }
}
function mountRef(ref, value, lifecycle) {
    if (ref && (isFunction(ref) || ref.current !== void 0)) {
        lifecycle.push(function () {
            if (!safeCall1(ref, value) && ref.current !== void 0) {
                ref.current = value;
            }
        });
    }
}

function remove(vNode, parentDOM) {
    unmount(vNode);
    removeVNodeDOM(vNode, parentDOM);
}
function unmount(vNode) {
    var flags = vNode.flags;
    var children = vNode.children;
    var ref;
    if (flags & 481 /* Element */) {
        ref = vNode.ref;
        var props = vNode.props;
        unmountRef(ref);
        var childFlags = vNode.childFlags;
        if (!isNull(props)) {
            var keys = Object.keys(props);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (syntheticEvents[key]) {
                    unmountSyntheticEvent(key, vNode.dom);
                }
            }
        }
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
    }
    else if (children) {
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(children.componentWillUnmount)) {
                children.componentWillUnmount();
            }
            unmountRef(vNode.ref);
            children.$UN = true;
            unmount(children.$LI);
        }
        else if (flags & 8 /* ComponentFunction */) {
            ref = vNode.ref;
            if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
                ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
            }
            unmount(children);
        }
        else if (flags & 1024 /* Portal */) {
            remove(children, vNode.ref);
        }
        else if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags & 12 /* MultipleChildren */) {
                unmountAllChildren(children);
            }
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; ++i) {
        unmount(children[i]);
    }
}
function clearDOM(dom) {
    // Optimization for clearing dom
    dom.textContent = '';
}
function removeAllChildren(dom, vNode, children) {
    unmountAllChildren(children);
    if (vNode.flags & 8192 /* Fragment */) {
        removeVNodeDOM(vNode, dom);
    }
    else {
        clearDOM(dom);
    }
}

function wrapLinkEvent(nextValue) {
    // This variable makes sure there is no "this" context in callback
    var ev = nextValue.event;
    return function (e) {
        ev(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (isLinkEventObject(nextValue)) {
        if (isLastValueSameLinkEvent(lastValue, nextValue)) {
            return;
        }
        nextValue = wrapLinkEvent(nextValue);
    }
    attachEvent(dom, normalizeEventName(name), nextValue);
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if (isNullOrUndef(nextAttrValue)) {
        dom.removeAttribute('style');
        return;
    }
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle.setProperty(style, value);
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle.removeProperty(style);
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle.setProperty(style, value);
        }
    }
}
function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom) {
    var lastHtml = (lastValue && lastValue.__html) || '';
    var nextHtml = (nextValue && nextValue.__html) || '';
    if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
            if (!isNull(lastVNode)) {
                if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                    unmountAllChildren(lastVNode.children);
                }
                else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                    unmount(lastVNode.children);
                }
                lastVNode.children = null;
                lastVNode.childFlags = 1 /* HasInvalidChildren */;
            }
            dom.innerHTML = nextHtml;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
        case 'selectedIndex':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                break;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'style':
            patchStyle(lastValue, nextValue, dom);
            break;
        case 'dangerouslySetInnerHTML':
            patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom);
            break;
        default:
            if (syntheticEvents[prop]) {
                handleSyntheticEvent(prop, lastValue, nextValue, dom);
            }
            else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function warnAboutOldLifecycles(component) {
    var oldLifecycles = [];
    // Don't warn about react polyfilled components.
    if (component.componentWillMount && component.componentWillMount.__suppressDeprecationWarning !== true) {
        oldLifecycles.push('componentWillMount');
    }
    if (component.componentWillReceiveProps && component.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        oldLifecycles.push('componentWillReceiveProps');
    }
    if (component.componentWillUpdate && component.componentWillUpdate.__suppressDeprecationWarning !== true) {
        oldLifecycles.push('componentWillUpdate');
    }
    if (oldLifecycles.length > 0) {
        warning(("\n      Warning: Unsafe legacy lifecycles will not be called for components using new component APIs.\n      " + (getComponentName(component)) + " contains the following legacy lifecycles:\n      " + (oldLifecycles.join('\n')) + "\n      The above lifecycles should be removed.\n    "));
    }
}
function renderNewInput(instance, props, context) {
    var nextInput = normalizeRoot(instance.render(props, instance.state, context));
    var childContext = context;
    if (isFunction(instance.getChildContext)) {
        childContext = combineFrom(context, instance.getChildContext());
    }
    instance.$CX = childContext;
    return nextInput;
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    var instance = new Component(props, context);
    var usesNewAPI = (instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate));
    instance.$SVG = isSVG;
    instance.$L = lifecycle;
    {
        if (instance.getDerivedStateFromProps) {
            warning(((getComponentName(instance)) + " getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method."));
        }
        if (usesNewAPI) {
            warnAboutOldLifecycles(instance);
        }
    }
    vNode.children = instance;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    if (!usesNewAPI) {
        if (isFunction(instance.componentWillMount)) {
            instance.$BR = true;
            instance.componentWillMount();
            var pending = instance.$PS;
            if (!isNull(pending)) {
                var state = instance.state;
                if (isNull(state)) {
                    instance.state = pending;
                }
                else {
                    for (var key in pending) {
                        state[key] = pending[key];
                    }
                }
                instance.$PS = null;
            }
            instance.$BR = false;
        }
    }
    else {
        instance.state = createDerivedState(instance, props, instance.state);
    }
    instance.$LI = renderNewInput(instance, props, context);
    return instance;
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = (vNode.flags |= 16384 /* InUse */);
    if (flags & 481 /* Element */) {
        mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 4 /* ComponentClass */) {
        mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 8 /* ComponentFunction */) {
        mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        mountFunctionalComponentCallbacks(vNode, lifecycle);
    }
    else if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        mountText(vNode, parentDOM, nextNode);
    }
    else if (flags & 8192 /* Fragment */) {
        mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle);
    }
    else if (flags & 1024 /* Portal */) {
        mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    }
    else {
        // Development validation, in production we don't need to throw because it crashes anyway
        if (typeof vNode === 'object') {
            throwError(("mount() received an object that's not a valid VNode, you should stringify it first, fix createVNode flags or call normalizeChildren. Object: \"" + (JSON.stringify(vNode)) + "\"."));
        }
        else {
            throwError(("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
        }
    }
}
function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
    mount(vNode.children, vNode.ref, context, false, null, lifecycle);
    var placeHolderVNode = createVoidVNode();
    mountText(placeHolderVNode, parentDOM, nextNode);
    vNode.dom = placeHolderVNode.dom;
}
function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle) {
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (childFlags & 12 /* MultipleChildren */ && children.length === 0) {
        childFlags = vNode.childFlags = 2 /* HasVNodeChildren */;
        children = vNode.children = createVoidVNode();
    }
    if (childFlags === 2 /* HasVNodeChildren */) {
        mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
    }
    else {
        mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
    }
}
function mountText(vNode, parentDOM, nextNode) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
}
function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = vNode.flags;
    var props = vNode.props;
    var className = vNode.className;
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    var dom = (vNode.dom = documentCreateElement(vNode.type, (isSVG = isSVG || (flags & 32 /* SvgElement */) > 0)));
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    {
        validateKeys(vNode);
    }
    if (childFlags === 16 /* HasTextChildren */) {
        setTextContent(dom, children);
    }
    else if (childFlags !== 1 /* HasInvalidChildren */) {
        var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            if (children.flags & 16384 /* InUse */) {
                vNode.children = children = directClone(children);
            }
            mount(children, dom, context, childrenIsSVG, null, lifecycle);
        }
        else if (childFlags === 8 /* HasKeyedChildren */ || childFlags === 4 /* HasNonKeyedChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
        }
    }
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    {
        if (isString(vNode.ref)) {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback ref or Inferno.createRef() API instead.');
        }
    }
    mountRef(vNode.ref, dom, lifecycle);
}
function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
    for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        if (child.flags & 16384 /* InUse */) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG, nextNode, lifecycle);
    }
}
function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
    mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
    mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
}
function renderFunctionalComponent(vNode, context) {
    return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(vNode.props || EMPTY_OBJ, vNode.ref, context) : vNode.type(vNode.props || EMPTY_OBJ, context);
}
function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    mount((vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context))), parentDOM, context, isSVG, nextNode, lifecycle);
}
function createClassMountCallback(instance) {
    return function () {
        instance.componentDidMount();
    };
}
function mountClassComponentCallbacks(ref, instance, lifecycle) {
    mountRef(ref, instance, lifecycle);
    {
        if (isStringOrNumber(ref)) {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback ref or Inferno.createRef() API instead.');
        }
        else if (!isNullOrUndef(ref) && typeof ref === 'object' && ref.current === void 0) {
            throwError('functional component lifecycle events are not supported on ES2015 class components.');
        }
    }
    if (isFunction(instance.componentDidMount)) {
        lifecycle.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, vNode) {
    return function () {
        ref.onComponentDidMount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
    };
}
function mountFunctionalComponentCallbacks(vNode, lifecycle) {
    var ref = vNode.ref;
    if (!isNullOrUndef(ref)) {
        safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, vNode));
        }
    }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    unmount(lastVNode);
    if ((nextVNode.flags & lastVNode.flags & 2033 /* DOMRef */) !== 0) {
        mount(nextVNode, null, context, isSVG, null, lifecycle);
        // Single DOM operation, when we have dom references available
        replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
    }
    else {
        mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
        removeVNodeDOM(lastVNode, parentDOM);
    }
}
function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var nextFlags = (nextVNode.flags |= 16384 /* InUse */);
    {
        if (isFunction(options.componentComparator) && lastVNode.flags & nextFlags & 4 /* ComponentClass */) {
            if (options.componentComparator(lastVNode, nextVNode) === false) {
                patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
                return;
            }
        }
    }
    if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* ReCreate */) {
        if (lastVNode.flags & 16384 /* InUse */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
        }
        else {
            // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
            mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (nextFlags & 481 /* Element */) {
        patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
    }
    else if (nextFlags & 4 /* ComponentClass */) {
        patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 8 /* ComponentFunction */) {
        patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 16 /* Text */) {
        patchText(lastVNode, nextVNode);
    }
    else if (nextFlags & 512 /* Void */) {
        nextVNode.dom = lastVNode.dom;
    }
    else if (nextFlags & 8192 /* Fragment */) {
        patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
    }
    else {
        patchPortal(lastVNode, nextVNode, context, lifecycle);
    }
}
function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
    if (lastChildren !== nextChildren) {
        if (lastChildren !== '') {
            parentDOM.firstChild.nodeValue = nextChildren;
        }
        else {
            setTextContent(parentDOM, nextChildren);
        }
    }
}
function patchContentEditableChildren(dom, nextChildren) {
    if (dom.textContent !== nextChildren) {
        dom.textContent = nextChildren;
    }
}
function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    var lastChildren = lastVNode.children;
    var nextChildren = nextVNode.children;
    var lastChildFlags = lastVNode.childFlags;
    var nextChildFlags = nextVNode.childFlags;
    var nextNode = null;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (nextChildFlags & 12 /* MultipleChildren */ && nextChildren.length === 0) {
        nextChildFlags = nextVNode.childFlags = 2 /* HasVNodeChildren */;
        nextChildren = nextVNode.children = createVoidVNode();
    }
    var nextIsSingle = (nextChildFlags & 2 /* HasVNodeChildren */) !== 0;
    if (lastChildFlags & 12 /* MultipleChildren */) {
        var lastLen = lastChildren.length;
        // We need to know Fragment's edge node when
        if (
        // It uses keyed algorithm
        (lastChildFlags & 8 /* HasKeyedChildren */ && nextChildFlags & 8 /* HasKeyedChildren */) ||
            // It transforms from many to single
            nextIsSingle ||
            // It will append more nodes
            (!nextIsSingle && nextChildren.length > lastLen)) {
            // When fragment has multiple children there is always at least one vNode
            nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
        }
    }
    patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
}
function patchPortal(lastVNode, nextVNode, context, lifecycle) {
    var lastContainer = lastVNode.ref;
    var nextContainer = nextVNode.ref;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        removeChild(lastContainer, node);
        appendChild(nextContainer, node);
    }
}
function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
    var dom = (nextVNode.dom = lastVNode.dom);
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var isFormElement = false;
    var hasControlledValue = false;
    var nextPropsOrEmpty;
    isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
    // inlined patchProps  -- starts --
    if (lastProps !== nextProps) {
        var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
        nextPropsOrEmpty = nextProps || EMPTY_OBJ;
        if (nextPropsOrEmpty !== EMPTY_OBJ) {
            isFormElement = (nextFlags & 448 /* FormElement */) > 0;
            if (isFormElement) {
                hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
            }
            for (var prop in nextPropsOrEmpty) {
                var lastValue = lastPropsOrEmpty[prop];
                var nextValue = nextPropsOrEmpty[prop];
                if (lastValue !== nextValue) {
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
        if (lastPropsOrEmpty !== EMPTY_OBJ) {
            for (var prop$1 in lastPropsOrEmpty) {
                if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                    patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
    }
    var nextChildren = nextVNode.children;
    var nextClassName = nextVNode.className;
    // inlined patchProps  -- ends --
    if (lastVNode.className !== nextClassName) {
        if (isNullOrUndef(nextClassName)) {
            dom.removeAttribute('class');
        }
        else if (isSVG) {
            dom.setAttribute('class', nextClassName);
        }
        else {
            dom.className = nextClassName;
        }
    }
    {
        validateKeys(nextVNode);
    }
    if (nextFlags & 4096 /* ContentEditable */) {
        patchContentEditableChildren(dom, nextChildren);
    }
    else {
        patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
    }
    if (isFormElement) {
        processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
    }
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, dom, lifecycle);
    }
}
function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
    unmount(lastChildren);
    mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
    removeVNodeDOM(lastChildren, parentDOM);
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                case 16 /* HasTextChildren */:
                    unmount(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                case 16 /* HasTextChildren */:
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        case 16 /* HasTextChildren */:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    patchSingleTextChild(lastChildren, nextChildren, parentDOM);
                    break;
                case 2 /* HasVNodeChildren */:
                    clearDOM(parentDOM);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    clearDOM(parentDOM);
                    break;
                default:
                    clearDOM(parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        default:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    unmountAllChildren(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                case 2 /* HasVNodeChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    break;
                default:
                    var lastLength = lastChildren.length | 0;
                    var nextLength = nextChildren.length | 0;
                    // Fast path's for both algorithms
                    if (lastLength === 0) {
                        if (nextLength > 0) {
                            mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        }
                    }
                    else if (nextLength === 0) {
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                    }
                    else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
                    }
                    break;
            }
            break;
    }
}
function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
    lifecycle.push(function () {
        instance.componentDidUpdate(lastProps, lastState, snapshot);
    });
}
function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
    var lastState = instance.state;
    var lastProps = instance.props;
    var usesNewAPI = Boolean(instance.$N);
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (usesNewAPI) {
        nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
    }
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
            instance.componentWillUpdate(nextProps, nextState, context);
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        var snapshot = null;
        var nextInput = renderNewInput(instance, nextProps, context);
        if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
            snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
        }
        patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
        // Dont update Last input, until patch has been succesfully executed
        instance.$LI = nextInput;
        if (isFunction(instance.componentDidUpdate)) {
            createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
}
function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = (nextVNode.children = lastVNode.children);
    // If Component has crashed, ignore it to stay functional
    if (isNull(instance)) {
        return;
    }
    instance.$L = lifecycle;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    var nextState = instance.state;
    if (!instance.$N) {
        if (isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing.
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (!isNull(instance.$PS)) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PS = null;
        }
    }
    updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, instance, lifecycle);
    }
}
function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var shouldUpdate = true;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastProps = lastVNode.props;
    var nextHooksDefined = !isNullOrUndef(nextRef);
    var lastInput = lastVNode.children;
    if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
        shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
    }
    if (shouldUpdate !== false) {
        if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
            nextRef.onComponentWillUpdate(lastProps, nextProps);
        }
        var type = nextVNode.type;
        var nextInput = normalizeRoot(nextVNode.flags & 32768 /* ForwardRef */ ? type.render(nextProps, nextRef, context) : type(nextProps, context));
        patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
        nextVNode.children = nextInput;
        if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
            nextRef.onComponentDidUpdate(lastProps, nextProps);
        }
    }
    else {
        nextVNode.children = lastInput;
    }
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = (nextVNode.dom = lastVNode.dom);
    if (nextText !== lastVNode.children) {
        dom.nodeValue = nextText;
    }
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    var lastChild;
    for (; i < commonLength; ++i) {
        nextChild = nextChildren[i];
        lastChild = lastChildren[i];
        if (nextChild.flags & 16384 /* InUse */) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
        lastChildren[i] = nextChild;
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; ++i) {
            nextChild = nextChildren[i];
            if (nextChild.flags & 16384 /* InUse */) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; ++i) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var j = 0;
    var aNode = a[j];
    var bNode = b[j];
    var nextPos;
    var nextNode;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[j] = bNode;
            ++j;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[j];
            bNode = b[j];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[aEnd] = bNode;
            aEnd--;
            bEnd--;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (j > aEnd) {
        if (j <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;
            while (j <= bEnd) {
                bNode = b[j];
                if (bNode.flags & 16384 /* InUse */) {
                    b[j] = bNode = directClone(bNode);
                }
                ++j;
                mount(bNode, dom, context, isSVG, nextNode, lifecycle);
            }
        }
    }
    else if (j > bEnd) {
        while (j <= aEnd) {
            remove(a[j++], dom);
        }
    }
    else {
        patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle);
    }
}
function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle) {
    var aNode;
    var bNode;
    var nextPos;
    var i = 0;
    var aStart = j;
    var bStart = j;
    var aLeft = aEnd - j + 1;
    var bLeft = bEnd - j + 1;
    var sources = new Int32Array(bLeft + 1);
    // Keep track if its possible to remove whole DOM using textContent = '';
    var canRemoveWholeContent = aLeft === aLength;
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLength < 4 || (aLeft | bLeft) < 32) {
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                for (j = bStart; j <= bEnd; j++) {
                    bNode = b[j];
                    if (aNode.key === bNode.key) {
                        sources[j - bStart] = i + 1;
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (aStart < i) {
                                remove(a[aStart++], dom);
                            }
                        }
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.flags & 16384 /* InUse */) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                        ++patched;
                        break;
                    }
                }
                if (!canRemoveWholeContent && j > bEnd) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    else {
        var keyIndex = {};
        // Map keys by their index
        for (i = bStart; i <= bEnd; ++i) {
            keyIndex[b[i].key] = i;
        }
        // Try to patch same keys
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                j = keyIndex[aNode.key];
                if (j !== void 0) {
                    if (canRemoveWholeContent) {
                        canRemoveWholeContent = false;
                        while (i > aStart) {
                            remove(a[aStart++], dom);
                        }
                    }
                    sources[j - bStart] = i + 1;
                    if (pos > j) {
                        moved = true;
                    }
                    else {
                        pos = j;
                    }
                    bNode = b[j];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[j] = bNode = directClone(bNode);
                    }
                    patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                    ++patched;
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    // fast-path: if nothing patched remove all old and add all new
    if (canRemoveWholeContent) {
        removeAllChildren(dom, parentVNode, a);
        mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
    }
    else if (moved) {
        var seq = lis_algorithm(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
            else if (j < 0 || i !== seq[j]) {
                pos = i + bStart;
                bNode = b[pos];
                nextPos = pos + 1;
                moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
            }
            else {
                j--;
            }
        }
    }
    else if (patched !== bLeft) {
        // when patched count doesn't match b length we need to insert those new ones
        // loop backwards so we can use insertBefore
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
        }
    }
}
var result;
var p;
var maxLen = 0;
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var arrI = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var u = 0;
    var v = 0;
    var c = 0;
    var len = arr.length;
    if (len > maxLen) {
        maxLen = len;
        result = new Int32Array(len);
        p = new Int32Array(len);
    }
    for (; i < len; ++i) {
        arrI = arr[i];
        if (arrI !== 0) {
            j = result[k];
            if (arr[j] < arrI) {
                p[i] = j;
                result[++k] = i;
                continue;
            }
            u = 0;
            v = k;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = k + 1;
    var seq = new Int32Array(u);
    v = result[u - 1];
    while (u-- > 0) {
        seq[u] = v;
        v = p[v];
        result[u] = 0;
    }
    return seq;
}

var hasDocumentAvailable = typeof document !== 'undefined';
{
    if (hasDocumentAvailable && !document.body) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = null;
if (hasDocumentAvailable) {
    documentBody = document.body;
    /*
     * Defining $EV and $V properties on Node.prototype
     * fixes v8 "wrong map" de-optimization
     */
    if (window.Node) {
        Node.prototype.$EV = null;
        Node.prototype.$V = null;
    }
}
function __render(input, parentDOM, callback, context) {
    // Development warning
    {
        if (documentBody === parentDOM) {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        if (isInvalid(parentDOM)) {
            throwError(("render target ( DOM ) is mandatory, received " + (parentDOM === null ? 'null' : typeof parentDOM)));
        }
    }
    var lifecycle = [];
    var rootInput = parentDOM.$V;
    renderCheck.v = true;
    if (isNullOrUndef(rootInput)) {
        if (!isNullOrUndef(input)) {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            mount(input, parentDOM, context, false, null, lifecycle);
            parentDOM.$V = input;
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDOM);
            parentDOM.$V = null;
        }
        else {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDOM, context, false, null, lifecycle);
            rootInput = parentDOM.$V = input;
        }
    }
    if (lifecycle.length > 0) {
        callAll(lifecycle);
    }
    renderCheck.v = false;
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput, parentDOM);
    }
}
function render(input, parentDOM, callback, context) {
    if ( callback === void 0 ) callback = null;
    if ( context === void 0 ) context = EMPTY_OBJ;

    __render(input, parentDOM, callback, context);
}
function createRenderer(parentDOM) {
    return function renderer(lastInput, nextInput, callback, context) {
        if (!parentDOM) {
            parentDOM = lastInput;
        }
        render(nextInput, parentDOM, callback, context);
    };
}

var QUEUE = [];
var nextTick = typeof Promise !== 'undefined'
    ? Promise.resolve().then.bind(Promise.resolve())
    : function (a) {
        window.setTimeout(a, 0);
    };
var microTaskPending = false;
function queueStateChanges(component, newState, callback, force) {
    var pending = component.$PS;
    if (isFunction(newState)) {
        newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
    }
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$BR) {
        if (!renderCheck.v) {
            if (QUEUE.length === 0) {
                applyState(component, force, callback);
                return;
            }
        }
        if (QUEUE.indexOf(component) === -1) {
            QUEUE.push(component);
        }
        if (!microTaskPending) {
            microTaskPending = true;
            nextTick(rerender);
        }
        if (isFunction(callback)) {
            var QU = component.$QU;
            if (!QU) {
                QU = component.$QU = [];
            }
            QU.push(callback);
        }
    }
    else if (isFunction(callback)) {
        component.$L.push(callback.bind(component));
    }
}
function callSetStateCallbacks(component) {
    var queue = component.$QU;
    for (var i = 0, len = queue.length; i < len; ++i) {
        queue[i].call(component);
    }
    component.$QU = null;
}
function rerender() {
    var component;
    microTaskPending = false;
    while ((component = QUEUE.pop())) {
        var queue = component.$QU;
        applyState(component, false, queue ? callSetStateCallbacks.bind(null, component) : null);
    }
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        var pendingState = component.$PS;
        component.$PS = null;
        var lifecycle = [];
        renderCheck.v = true;
        updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);
        if (lifecycle.length > 0) {
            callAll(lifecycle);
        }
        renderCheck.v = false;
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    // Public
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$QU = null; // QUEUE
    this.$N = false; // Uses new lifecycle API Flag
    this.$L = null; // Current lifecycle of this component
    this.$SVG = false; // Flag to keep track if component is inside SVG tree
    this.props = props || EMPTY_OBJ;
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback, false);
    }
    else {
        // Development warning
        {
            throwError('cannot update state via setState() in constructor. Instead, assign to `this.state` directly or define a `state = {};`');
        }
    }
};
Component.prototype.render = function render (_nextProps, _nextState, _nextContext) {
    return null;
};

{
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() { };
    /* tslint:disable-next-line*/
    console.log('Inferno is in development mode.');
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        warning("It looks like you're using a minified copy of the development build " +
            'of Inferno. When deploying Inferno apps to production, make sure to use ' +
            'the production build which skips development warnings and is faster. ' +
            'See http://infernojs.org for more details.');
    }
}
var version = "7.3.3";

exports.Component = Component;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.Fragment = Fragment;
exports._CI = createClassComponentInstance;
exports._HI = normalizeRoot;
exports._M = mount;
exports._MCCC = mountClassComponentCallbacks;
exports._ME = mountElement;
exports._MFCC = mountFunctionalComponentCallbacks;
exports._MP = mountProps;
exports._MR = mountRef;
exports.__render = __render;
exports.createComponentVNode = createComponentVNode;
exports.createFragment = createFragment;
exports.createPortal = createPortal;
exports.createRef = createRef;
exports.createRenderer = createRenderer;
exports.createTextVNode = createTextVNode;
exports.createVNode = createVNode;
exports.directClone = directClone;
exports.findDOMfromVNode = findDOMfromVNode;
exports.forwardRef = forwardRef;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.linkEvent = linkEvent;
exports.normalizeProps = normalizeProps;
exports.options = options;
exports.render = render;
exports.rerender = rerender;
exports.version = version;

},{}],17:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function i(e){return"string"===typeof e}function l(e){return"number"===typeof e}function a(e){return null===e}function u(e){return void 0===e}function c(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function f(e,n){if(o(n))return{data:e,event:n};return null}function s(e){return!a(e)&&"object"===typeof e}var d={},p="$F";function v(e){return e.substr(2).toLowerCase()}function h(e,n){e.appendChild(n)}function g(e,n,t){a(t)?h(e,n):e.insertBefore(n,t)}function m(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function y(e,n,t){e.replaceChild(n,t)}function k(e,n){e.removeChild(n)}function $(e){for(var n;void 0!==(n=e.shift());)n()}function b(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function x(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=b(e,n,t)}return null}function C(e,n){do{var t=e.flags;if(2033&t)return void k(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var o=0,i=r.length;o<i;++o)C(r[o],n);return}e=r}}while(e)}function w(e,n,t){do{var r=e.flags;if(2033&r)return void g(n,e.dom,t);var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var i=0,l=o.length;i<l;++i)w(o[i],n,t);return}e=o}}while(e)}function P(e,n,t){if(e.constructor.getDerivedStateFromProps)return c(t,e.constructor.getDerivedStateFromProps(n,t));return t}var F={v:!1},N={componentComparator:null,createVNode:null,renderComplete:null};function V(e,n){e.textContent=n}function S(e,n){return s(e)&&e.event===n.event&&e.data===n.data}function U(e,n){for(var t in n)u(e[t])&&(e[t]=n[t]);return e}function L(e,n){return!!o(e)&&(e(n),!0)}var M="$";function I(e,n,t,r,o,i,l,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===i?null:i,this.ref=void 0===l?null:l,this.type=a}function B(e,n,t,r,o,i,l,a){var u=void 0===o?1:o,c=new I(u,r,t,e,l,i,a,n);return N.createVNode&&N.createVNode(c),0===u&&K(c,c.children),c}function D(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return U(r,o)}function E(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return c(o,null);return U(r,o)}function _(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function A(e,n,t,r,o){var i=new I(1,null,null,e=_(e,n),r,E(e,n,t),D(e,n,o),n);return N.createVNode&&N.createVNode(i),i}function T(e,n){return new I(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function R(e,n,t){var r=B(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=H(),r.childFlags=2;break;case 16:r.children=[T(e)],r.childFlags=4}return r}function W(e){var n=e.props;if(n){var r=e.flags;481&r&&(void 0!==n.children&&t(e.children)&&K(e,n.children),void 0!==n.className&&(e.className=n.className||null,n.className=void 0)),void 0!==n.key&&(e.key=n.key,n.key=void 0),void 0!==n.ref&&(e.ref=8&r?c(e.ref,n.ref):n.ref,n.ref=void 0)}return e}function O(e){var n,t=e.children,r=e.childFlags;if(2===r)n=j(t);else if(12&r){n=[];for(var o=0,i=t.length;o<i;++o)n.push(j(t[o]))}return R(n,r,e.key)}function j(e){var n=-16385&e.flags,t=e.props;if(14&n&&!a(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new I(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return O(e)}function H(){return T("",null)}function Q(e,n){var t=q(e);return B(1024,1024,null,t,0,null,t.key,n)}function X(t,o,l,u){for(var c=t.length;l<c;l++){var f=t[l];if(!r(f)){var s=u+M+l;if(e(f))X(f,o,0,s);else{if(n(f))f=T(f,s);else{var d=f.key,p=i(d)&&d[0]===M;(81920&f.flags||p)&&(f=j(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):a(d)?f.key=s:f.key=u+d}o.push(f)}}}}function G(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case p:return 8192;default:return 1}}function K(t,o){var l,u=1;if(r(o))l=o;else if(n(o))u=16,l=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){l=l||o.slice(0,f),X(o,l,f,"");break}if(n(s))(l=l||o.slice(0,f)).push(T(s,M+f));else{var d=s.key,p=(81920&s.flags)>0,v=a(d),h=i(d)&&d[0]===M;p||v||h?(l=l||o.slice(0,f),(p||h)&&(s=j(s)),(v||h)&&(s.key=M+f),l.push(s)):l&&l.push(s),s.flags|=65536}}u=0===(l=l||o).length?1:8}else(l=o).flags|=65536,81920&o.flags&&(l=j(o)),u=2;return t.children=l,t.childFlags=u,t}function q(t){if(r(t)||n(t))return T(t,null);if(e(t))return R(t,0,null);return 16384&t.flags?j(t):t}var z="http://www.w3.org/1999/xlink",J="http://www.w3.org/XML/1998/namespace",Y={"xlink:actuate":z,"xlink:arcrole":z,"xlink:href":z,"xlink:role":z,"xlink:show":z,"xlink:title":z,"xlink:type":z,"xml:base":J,"xml:lang":J,"xml:space":J};function Z(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var ee=Z(0),ne=Z(null),te=Z(!0);function re(e,n){var t=n.$EV;return t||(t=n.$EV=Z(null)),t[e]||1===++ee[e]&&(ne[e]=ve(e)),t}function oe(e,n){var t=n.$EV;t&&t[e]&&(0===--ee[e]&&(document.removeEventListener(v(e),ne[e]),ne[e]=null),t[e]=null)}function ie(e,n,t,r){if(o(t))re(e,r)[e]=t;else if(s(t)){if(S(n,t))return;re(e,r)[e]=t}else oe(e,r)}function le(e){return o(e.composedPath)?e.composedPath()[0]:e.target}function ae(e,n,t,r){var o=le(e);do{if(n&&o.disabled)return;var i=o.$EV;if(i){var l=i[t];if(l&&(r.dom=o,l.event?l.event(l.data,e):l(e),e.cancelBubble))return}o=o.parentNode}while(!a(o))}function ue(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ce(){return this.defaultPrevented}function fe(){return this.cancelBubble}function se(e){var n={dom:document};return e.isDefaultPrevented=ce,e.isPropagationStopped=fe,e.stopPropagation=ue,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function de(e){return function(n){if(0!==n.button)return void n.stopPropagation();ae(n,!0,e,se(n))}}function pe(e){return function(n){ae(n,!1,e,se(n))}}function ve(e){var n="onClick"===e||"onDblClick"===e?de(e):pe(e);return document.addEventListener(v(e),n),n}function he(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ge(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function me(e,n){var t=function(t){var r=this.$V;if(!r)return;var l=r.props||d,a=r.dom;if(i(e))ge(l,e,t);else for(var u=0;u<e.length;++u)ge(l,e[u],t);if(o(n)){var c=this.$V,f=c.props||d;n(f,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ye(e,n,t){var r="$"+n,i=e[r];if(i){if(i[1].wrapped)return;e.removeEventListener(i[0],i[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ke(e){return"checkbox"===e||"radio"===e}var $e=me("onInput",we),be=me(["onClick","onChange"],we);function xe(e){e.stopPropagation()}function Ce(e,n){ke(n.type)?(ye(e,"change",be),ye(e,"click",xe)):ye(e,"input",$e)}function we(e,n){var r=e.type,o=e.value,i=e.checked,l=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(l)||l===n.multiple||(n.multiple=l),t(a)||u||(n.defaultValue=a+""),ke(r)?(u&&(n.value=o),t(i)||(n.checked=i)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(i)||(n.checked=i)}function Pe(e,n){if("option"===e.type)Fe(e,n);else{var t=e.children,r=e.flags;if(4&r)Pe(t.$LI,n);else if(8&r)Pe(t,n);else if(2===e.childFlags)Pe(t,n);else if(12&e.childFlags)for(var o=0,i=t.length;o<i;++o)Pe(t[o],n)}}function Fe(n,r){var o=n.props||d,i=n.dom;i.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?i.selected=!0:t(r)&&t(o.selected)||(i.selected=o.selected||!1)}xe.wrapped=!0;var Ne=me("onChange",Se);function Ve(e){ye(e,"change",Ne)}function Se(e,n,r,o){var i=Boolean(e.multiple);t(e.multiple)||i===n.multiple||(n.multiple=i);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==o.childFlags){var u=e.value;l(a)&&a>-1&&n.options[a]&&(u=n.options[a].value),r&&t(u)&&(u=e.defaultValue),Pe(o,u)}}var Ue,Le,Me=me("onInput",De),Ie=me("onChange");function Be(e,n){ye(e,"input",Me),n.onChange&&ye(e,"change",Ie)}function De(e,n,r){var o=e.value,i=n.value;if(t(o)){if(r){var l=e.defaultValue;t(l)||l===i||(n.defaultValue=l,n.value=l)}}else i!==o&&(n.defaultValue=o,n.value=o)}function Ee(e,n,t,r,o,i){64&e?we(r,t):256&e?Se(r,t,o,n):128&e&&De(r,t,o),i&&(t.$V=n)}function _e(e,n,t){64&e?Ce(n,t):256&e?Ve(n):128&e&&Be(n,t)}function Ae(e){return e.type&&ke(e.type)?!t(e.checked):!t(e.value)}function Te(){return{current:null}}function Re(e){return{render:e}}function We(e){e&&!L(e,null)&&e.current&&(e.current=null)}function Oe(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){L(e,n)||void 0===e.current||(e.current=n)}))}function je(e,n){He(e),C(e,n)}function He(e){var n,r=e.flags,i=e.children;if(481&r){n=e.ref;var l=e.props;We(n);var u=e.childFlags;if(!a(l))for(var c=Object.keys(l),f=0,s=c.length;f<s;f++){var p=c[f];te[p]&&oe(p,e.dom)}12&u?Qe(i):2===u&&He(i)}else i&&(4&r?(o(i.componentWillUnmount)&&i.componentWillUnmount(),We(e.ref),i.$UN=!0,He(i.$LI)):8&r?(!t(n=e.ref)&&o(n.onComponentWillUnmount)&&n.onComponentWillUnmount(x(e,!0),e.props||d),He(i)):1024&r?je(i,e.ref):8192&r&&12&e.childFlags&&Qe(i))}function Qe(e){for(var n=0,t=e.length;n<t;++n)He(e[n])}function Xe(e){e.textContent=""}function Ge(e,n,t){Qe(t),8192&n.flags?C(n,e):Xe(e)}function Ke(e){var n=e.event;return function(t){n(e.data,t)}}function qe(e,n,t,r){if(s(t)){if(S(n,t))return;t=Ke(t)}ye(r,v(e),t)}function ze(e,n,r){if(t(n))return void r.removeAttribute("style");var o,l,a=r.style;if(i(n))return void(a.cssText=n);if(t(e)||i(e))for(o in n)l=n[o],a.setProperty(o,l);else{for(o in n)(l=n[o])!==e[o]&&a.setProperty(o,l);for(o in e)t(n[o])&&a.removeProperty(o)}}function Je(e,n,r,o){var i=e&&e.__html||"",l=n&&n.__html||"";i!==l&&(t(l)||he(o,l)||(a(r)||(12&r.childFlags?Qe(r.children):2===r.childFlags&&He(r.children),r.children=null,r.childFlags=1),o.innerHTML=l))}function Ye(e,n,r,o,i,l,a){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===e)break;var u=t(r)?"":r;o[e]!==u&&(o[e]=u);break;case"style":ze(n,r,o);break;case"dangerouslySetInnerHTML":Je(n,r,a,o);break;default:te[e]?ie(e,n,r,o):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?qe(e,n,r,o):t(r)?o.removeAttribute(e):i&&Y[e]?o.setAttributeNS(Y[e],e,r):o.setAttribute(e,r)}}function Ze(e,n,t,r,o){var i=!1,l=(448&n)>0;for(var a in l&&(i=Ae(t))&&_e(n,r,t),t)Ye(a,null,t[a],r,o,i,null);l&&Ee(n,e,r,t,!0,i)}function en(e,n,t){var r=q(e.render(n,e.state,t)),i=t;return o(e.getChildContext)&&(i=c(t,e.getChildContext())),e.$CX=i,r}function nn(e,n,t,r,i,l){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=i,u.$L=l,e.children=u,u.$BS=!1,u.context=r,u.props===d&&(u.props=t),c)u.state=P(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var f=u.$PS;if(!a(f)){var s=u.state;if(a(s))u.state=f;else for(var p in f)s[p]=f[p];u.$PS=null}u.$BR=!1}return u.$LI=en(u,t,r),u}function tn(e,n,t,r,o,i){var l=e.flags|=16384;481&l?an(e,n,t,r,o,i):4&l?cn(e,n,t,r,o,i):8&l?(sn(e,n,t,r,o,i),hn(e,i)):512&l||16&l?ln(e,n,o):8192&l?on(e,t,n,r,o,i):1024&l&&rn(e,t,n,o,i)}function rn(e,n,t,r,o){tn(e.children,e.ref,n,!1,null,o);var i=H();ln(i,t,r),e.dom=i.dom}function on(e,n,t,r,o,i){var l=e.children,a=e.childFlags;12&a&&0===l.length&&(a=e.childFlags=2,l=e.children=H()),2===a?tn(l,t,o,r,o,i):un(l,t,n,r,o,i)}function ln(e,n,t){var r=e.dom=document.createTextNode(e.children);a(n)||g(n,r,t)}function an(e,n,r,o,i,l){var u=e.flags,c=e.props,f=e.className,s=e.children,d=e.childFlags,p=e.dom=m(e.type,o=o||(32&u)>0);if(t(f)||""===f||(o?p.setAttribute("class",f):p.className=f),16===d)V(p,s);else if(1!==d){var v=o&&"foreignObject"!==e.type;2===d?(16384&s.flags&&(e.children=s=j(s)),tn(s,p,r,v,null,l)):8!==d&&4!==d||un(s,p,r,v,null,l)}a(n)||g(n,p,i),a(c)||Ze(e,u,c,p,o),Oe(e.ref,p,l)}function un(e,n,t,r,o,i){for(var l=0;l<e.length;++l){var a=e[l];16384&a.flags&&(e[l]=a=j(a)),tn(a,n,t,r,o,i)}}function cn(e,n,t,r,o,i){var l=nn(e,e.type,e.props||d,t,r,i);tn(l.$LI,n,l.$CX,r,o,i),pn(e.ref,l,i)}function fn(e,n){return 32768&e.flags?e.type.render(e.props||d,e.ref,n):e.type(e.props||d,n)}function sn(e,n,t,r,o,i){tn(e.children=q(fn(e,t)),n,t,r,o,i)}function dn(e){return function(){e.componentDidMount()}}function pn(e,n,t){Oe(e,n,t),o(n.componentDidMount)&&t.push(dn(n))}function vn(e,n){return function(){e.onComponentDidMount(x(n,!0),n.props||d)}}function hn(e,n){var r=e.ref;t(r)||(L(r.onComponentWillMount,e.props||d),o(r.onComponentDidMount)&&n.push(vn(r,e)))}function gn(e,n,t,r,o,i){He(e),0!==(n.flags&e.flags&2033)?(tn(n,null,r,o,null,i),y(t,n.dom,e.dom)):(tn(n,t,r,o,x(e,!0),i),C(e,t))}function mn(e,n,t,r,o,i,l){var a=n.flags|=16384;e.flags!==a||e.type!==n.type||e.key!==n.key||2048&a?16384&e.flags?gn(e,n,t,r,o,l):tn(n,t,r,o,i,l):481&a?xn(e,n,r,o,a,l):4&a?Nn(e,n,t,r,o,i,l):8&a?Vn(e,n,t,r,o,i,l):16&a?Sn(e,n):512&a?n.dom=e.dom:8192&a?$n(e,n,t,r,o,l):bn(e,n,r,l)}function yn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:V(t,n))}function kn(e,n){e.textContent!==n&&(e.textContent=n)}function $n(e,n,t,r,o,i){var l=e.children,a=n.children,u=e.childFlags,c=n.childFlags,f=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=H());var s=0!==(2&c);if(12&u){var d=l.length;(8&u&&8&c||s||!s&&a.length>d)&&(f=x(l[d-1],!1).nextSibling)}wn(u,c,l,a,t,r,o,f,e,i)}function bn(e,n,t,o){var i=e.ref,l=n.ref,a=n.children;if(wn(e.childFlags,n.childFlags,e.children,a,i,t,!1,null,e,o),n.dom=e.dom,i!==l&&!r(a)){var u=a.dom;k(i,u),h(l,u)}}function xn(e,n,r,o,i,l){var a,u=n.dom=e.dom,c=e.props,f=n.props,s=!1,p=!1;if(o=o||(32&i)>0,c!==f){var v=c||d;if((a=f||d)!==d)for(var h in(s=(448&i)>0)&&(p=Ae(a)),a){var g=v[h],m=a[h];g!==m&&Ye(h,g,m,u,o,p,e)}if(v!==d)for(var y in v)t(a[y])&&!t(v[y])&&Ye(y,v[y],null,u,o,p,e)}var k=n.children,$=n.className;e.className!==$&&(t($)?u.removeAttribute("class"):o?u.setAttribute("class",$):u.className=$),4096&i?kn(u,k):wn(e.childFlags,n.childFlags,e.children,k,u,r,o&&"foreignObject"!==n.type,null,e,l),s&&Ee(i,n,u,a,!1,p);var b=n.ref,x=e.ref;x!==b&&(We(x),Oe(b,u,l))}function Cn(e,n,t,r,o,i){He(e),un(n,t,r,o,x(e,!0),i),C(e,t)}function wn(e,n,t,r,o,i,l,a,u,c){switch(e){case 2:switch(n){case 2:mn(t,r,o,i,l,a,c);break;case 1:je(t,o);break;case 16:He(t),V(o,r);break;default:Cn(t,r,o,i,l,c)}break;case 1:switch(n){case 2:tn(r,o,i,l,a,c);break;case 1:break;case 16:V(o,r);break;default:un(r,o,i,l,a,c)}break;case 16:switch(n){case 16:yn(t,r,o);break;case 2:Xe(o),tn(r,o,i,l,a,c);break;case 1:Xe(o);break;default:Xe(o),un(r,o,i,l,a,c)}break;default:switch(n){case 16:Qe(t),V(o,r);break;case 2:Ge(o,u,t),tn(r,o,i,l,a,c);break;case 1:Ge(o,u,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&un(r,o,i,l,a,c):0===s?Ge(o,u,t):8===n&&8===e?Ln(t,r,o,i,l,f,s,a,u,c):Un(t,r,o,i,l,f,s,a,c)}}}function Pn(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}function Fn(e,n,t,r,i,l,a,u,f){var s=e.state,d=e.props,p=Boolean(e.$N),v=o(e.shouldComponentUpdate);if(p&&(n=P(e,t,n!==s?c(s,n):n)),a||!v||v&&e.shouldComponentUpdate(t,n,i)){!p&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,i),e.props=t,e.state=n,e.context=i;var h=null,g=en(e,t,i);p&&o(e.getSnapshotBeforeUpdate)&&(h=e.getSnapshotBeforeUpdate(d,s)),mn(e.$LI,g,r,e.$CX,l,u,f),e.$LI=g,o(e.componentDidUpdate)&&Pn(e,d,s,h,f)}else e.props=t,e.state=n,e.context=i}function Nn(e,n,t,r,i,l,u){var f=n.children=e.children;if(a(f))return;f.$L=u;var s=n.props||d,p=n.ref,v=e.ref,h=f.state;if(!f.$N){if(o(f.componentWillReceiveProps)){if(f.$BR=!0,f.componentWillReceiveProps(s,r),f.$UN)return;f.$BR=!1}a(f.$PS)||(h=c(h,f.$PS),f.$PS=null)}Fn(f,h,s,t,r,i,!1,l,u),v!==p&&(We(v),Oe(p,f,u))}function Vn(e,n,r,i,l,a,u){var c=!0,f=n.props||d,s=n.ref,p=e.props,v=!t(s),h=e.children;if(v&&o(s.onComponentShouldUpdate)&&(c=s.onComponentShouldUpdate(p,f)),!1!==c){v&&o(s.onComponentWillUpdate)&&s.onComponentWillUpdate(p,f);var g=n.type,m=q(32768&n.flags?g.render(f,s,i):g(f,i));mn(h,m,r,i,l,a,u),n.children=m,v&&o(s.onComponentDidUpdate)&&s.onComponentDidUpdate(p,f)}else n.children=h}function Sn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function Un(e,n,t,r,o,i,l,a,u){for(var c,f,s=i>l?l:i,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=j(c)),mn(f,c,t,r,o,a,u),e[d]=c;if(i<l)for(d=s;d<l;++d)16384&(c=n[d]).flags&&(c=n[d]=j(c)),tn(c,t,r,o,a,u);else if(i>l)for(d=s;d<i;++d)je(e[d],t)}function Ln(e,n,t,r,o,i,l,a,u,c){var f,s,d=i-1,p=l-1,v=0,h=e[v],g=n[v];e:{for(;h.key===g.key;){if(16384&g.flags&&(n[v]=g=j(g)),mn(h,g,t,r,o,a,c),e[v]=g,++v>d||v>p)break e;h=e[v],g=n[v]}for(h=e[d],g=n[p];h.key===g.key;){if(16384&g.flags&&(n[p]=g=j(g)),mn(h,g,t,r,o,a,c),e[d]=g,p--,v>--d||v>p)break e;h=e[d],g=n[p]}}if(v>d){if(v<=p)for(s=(f=p+1)<l?x(n[f],!0):a;v<=p;)16384&(g=n[v]).flags&&(n[v]=g=j(g)),++v,tn(g,t,r,o,s,c)}else if(v>p)for(;v<=d;)je(e[v++],t);else Mn(e,n,r,i,l,d,p,v,t,o,a,u,c)}function Mn(e,n,t,r,o,i,l,a,u,c,f,s,d){var p,v,h,g=0,m=a,y=a,k=i-a+1,$=l-a+1,b=new Int32Array($+1),C=k===r,P=!1,F=0,N=0;if(o<4||(k|$)<32)for(g=m;g<=i;++g)if(p=e[g],N<$){for(a=y;a<=l;a++)if(v=n[a],p.key===v.key){if(b[a-y]=g+1,C)for(C=!1;m<g;)je(e[m++],u);F>a?P=!0:F=a,16384&v.flags&&(n[a]=v=j(v)),mn(p,v,u,t,c,f,d),++N;break}!C&&a>l&&je(p,u)}else C||je(p,u);else{var V={};for(g=y;g<=l;++g)V[n[g].key]=g;for(g=m;g<=i;++g)if(p=e[g],N<$)if(void 0!==(a=V[p.key])){if(C)for(C=!1;g>m;)je(e[m++],u);b[a-y]=g+1,F>a?P=!0:F=a,16384&(v=n[a]).flags&&(n[a]=v=j(v)),mn(p,v,u,t,c,f,d),++N}else C||je(p,u);else C||je(p,u)}if(C)Ge(u,s,e),un(n,u,t,c,f,d);else if(P){var S=Bn(b);for(a=S.length-1,g=$-1;g>=0;g--)0===b[g]?(16384&(v=n[F=g+y]).flags&&(n[F]=v=j(v)),tn(v,u,t,c,(h=F+1)<o?x(n[h],!0):f,d)):a<0||g!==S[a]?w(v=n[F=g+y],u,(h=F+1)<o?x(n[h],!0):f):a--}else if(N!==$)for(g=$-1;g>=0;g--)0===b[g]&&(16384&(v=n[F=g+y]).flags&&(n[F]=v=j(v)),tn(v,u,t,c,(h=F+1)<o?x(n[h],!0):f,d))}var In=0;function Bn(e){var n=0,t=0,r=0,o=0,i=0,l=0,a=0,u=e.length;for(u>In&&(In=u,Ue=new Int32Array(u),Le=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Ue[o]]<n){Le[t]=r,Ue[++o]=t;continue}for(i=0,l=o;i<l;)e[Ue[a=i+l>>1]]<n?i=a+1:l=a;n<e[Ue[i]]&&(i>0&&(Le[t]=Ue[i-1]),Ue[i]=t)}i=o+1;var c=new Int32Array(i);for(l=Ue[i-1];i-- >0;)c[i]=l,l=Le[l],Ue[i]=0;return c}var Dn="undefined"!==typeof document;function En(e,n,r,i){var l=[],a=n.$V;F.v=!0,t(a)?t(e)||(16384&e.flags&&(e=j(e)),tn(e,n,i,!1,null,l),n.$V=e,a=e):t(e)?(je(a,n),n.$V=null):(16384&e.flags&&(e=j(e)),mn(a,e,n,i,!1,null,l),a=n.$V=e),l.length>0&&$(l),F.v=!1,o(r)&&r(),o(N.renderComplete)&&N.renderComplete(a,n)}function _n(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=d),En(e,n,t,r)}function An(e){return function(n,t,r,o){e||(e=n),_n(t,e,r,o)}}Dn&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Tn=[],Rn="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Wn=!1;function On(e,n,r,i){var l=e.$PS;if(o(n)&&(n=n(l?c(e.state,l):e.state,e.props,e.context)),t(l))e.$PS=n;else for(var a in n)l[a]=n[a];if(e.$BR)o(r)&&e.$L.push(r.bind(e));else{if(!F.v&&0===Tn.length)return void Qn(e,i,r);if(-1===Tn.indexOf(e)&&Tn.push(e),Wn||(Wn=!0,Rn(Hn)),o(r)){var u=e.$QU;u||(u=e.$QU=[]),u.push(r)}}}function jn(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function Hn(){var e;for(Wn=!1;e=Tn.pop();)Qn(e,!1,e.$QU?jn.bind(null,e):null)}function Qn(e,n,t){if(e.$UN)return;if(n||!e.$BR){var r=e.$PS;e.$PS=null;var i=[];F.v=!0,Fn(e,c(e.state,r),e.props,x(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,i),i.length>0&&$(i),F.v=!1}else e.state=e.$PS,e.$PS=null;o(t)&&t.call(e)}var Xn=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.props=e||d,this.context=n||d};Xn.prototype.forceUpdate=function(e){if(this.$UN)return;On(this,{},e,!0)},Xn.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||On(this,e,n,!1)},Xn.prototype.render=function(e,n,t){return null};var Gn="7.3.3";exports.Component=Xn,exports.EMPTY_OBJ=d,exports.Fragment=p,exports._CI=nn,exports._HI=q,exports._M=tn,exports._MCCC=pn,exports._ME=an,exports._MFCC=hn,exports._MP=Ze,exports._MR=Oe,exports.__render=En,exports.createComponentVNode=A,exports.createFragment=R,exports.createPortal=Q,exports.createRef=Te,exports.createRenderer=An,exports.createTextVNode=T,exports.createVNode=B,exports.directClone=j,exports.findDOMfromVNode=x,exports.forwardRef=Re,exports.getFlagsForElementVnode=G,exports.linkEvent=f,exports.normalizeProps=W,exports.options=N,exports.render=_n,exports.rerender=Hn,exports.version=Gn;

},{}],18:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"./dist/index.cjs.js":16,"./dist/index.cjs.min.js":17,"dup":12}],19:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],20:[function(require,module,exports){
var pathToRegExp = require('path-to-regexp')

/**
 * Expose `pathToRegexp` as ES6 module
 */
module.exports = pathToRegExp;
module.exports.parse = pathToRegExp.parse
module.exports.compile = pathToRegExp.compile
module.exports.tokensToFunction = pathToRegExp.tokensToFunction
module.exports.tokensToRegExp = pathToRegExp.tokensToRegExp
module.exports['default'] = module.exports;

},{"path-to-regexp":21}],21:[function(require,module,exports){
var isarray = require('isarray')

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

},{"isarray":19}],22:[function(require,module,exports){
'use strict';

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

module.exports = resolvePathname;

},{}],23:[function(require,module,exports){
"use strict";function isAbsolute(e){return"/"===e.charAt(0)}function spliceOne(e,t){for(var s=t,n=s+1,i=e.length;n<i;s+=1,n+=1)e[s]=e[n];e.pop()}function resolvePathname(e,t){void 0===t&&(t="");var s,n=e&&e.split("/")||[],i=t&&t.split("/")||[],l=e&&isAbsolute(e),r=t&&isAbsolute(t),o=l||r;if(e&&isAbsolute(e)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var u=i[i.length-1];s="."===u||".."===u||""===u}else s=!1;for(var a=0,c=i.length;0<=c;c--){var f=i[c];"."===f?spliceOne(i,c):".."===f?(spliceOne(i,c),a++):a&&(spliceOne(i,c),a--)}if(!o)for(;a--;a)i.unshift("..");!o||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var h=i.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}module.exports=resolvePathname;

},{}],24:[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/resolve-pathname.min.js');
} else {
  module.exports = require('./cjs/resolve-pathname.js');
}

},{"./cjs/resolve-pathname.js":22,"./cjs/resolve-pathname.min.js":23}],25:[function(require,module,exports){
'use strict';

var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

module.exports = invariant;

},{}],26:[function(require,module,exports){
'use strict';

var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;

},{}],27:[function(require,module,exports){
'use strict';

function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

module.exports = valueEqual;

},{}],28:[function(require,module,exports){
"use strict";function valueOf(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function valueEqual(u,r){if(u===r)return!0;if(null==u||null==r)return!1;if(Array.isArray(u))return Array.isArray(r)&&u.length===r.length&&u.every(function(e,u){return valueEqual(e,r[u])});if("object"!=typeof u&&"object"!=typeof r)return!1;var e=valueOf(u),t=valueOf(r);return e!==u||t!==r?valueEqual(e,t):Object.keys(Object.assign({},u,r)).every(function(e){return valueEqual(u[e],r[e])})}module.exports=valueEqual;

},{}],29:[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/value-equal.min.js');
} else {
  module.exports = require('./cjs/value-equal.js');
}

},{"./cjs/value-equal.js":27,"./cjs/value-equal.min.js":28}],30:[function(require,module,exports){
"use strict";

var _inferno = require("inferno");

var _app = _interopRequireDefault(require("../../client/ts/app"));

var _infernoRouter = require("inferno-router");

var _infernoHydrate = require("inferno-hydrate");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var wrapper = (0, _inferno.createComponentVNode)(2, _infernoRouter.BrowserRouter, {
  children: (0, _inferno.createComponentVNode)(2, _app["default"])
});
(0, _infernoHydrate.hydrate)(wrapper, document.getElementById("root"));

},{"../../client/ts/app":1,"inferno":18,"inferno-hydrate":12,"inferno-router":15}]},{},[30]);
