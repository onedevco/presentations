var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// ../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function noop() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
      var refProp = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (refProp !== undefined ? refProp : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function validateChildKeys(node) {
      isValidElement(node) ? node._store && (node._store.validated = 1) : typeof node === "object" && node !== null && node.$$typeof === REACT_LAZY_TYPE && (node._payload.status === "fulfilled" ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ioInfo = payload._ioInfo;
        ioInfo != null && (ioInfo.start = ioInfo.end = performance.now());
        ioInfo = payload._result;
        var thenable = ioInfo();
        thenable.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1) {
            payload._status = 1;
            payload._result = moduleObject;
            var _ioInfo = payload._ioInfo;
            _ioInfo != null && (_ioInfo.end = performance.now());
            thenable.status === undefined && (thenable.status = "fulfilled", thenable.value = moduleObject);
          }
        }, function(error) {
          if (payload._status === 0 || payload._status === -1) {
            payload._status = 2;
            payload._result = error;
            var _ioInfo2 = payload._ioInfo;
            _ioInfo2 != null && (_ioInfo2.end = performance.now());
            thenable.status === undefined && (thenable.status = "rejected", thenable.reason = error);
          }
        });
        ioInfo = payload._ioInfo;
        if (ioInfo != null) {
          ioInfo.value = thenable;
          var displayName = thenable.displayName;
          typeof displayName === "string" && (ioInfo.name = displayName);
        }
        payload._status === -1 && (payload._status = 0, payload._result = thenable);
      }
      if (payload._status === 1)
        return ioInfo = payload._result, ioInfo === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ioInfo), "default" in ioInfo || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ioInfo), ioInfo.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function releaseAsyncTransition() {
      ReactSharedInternals.asyncTransitions--;
    }
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    };
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      actQueue: null,
      asyncTransitions: 0,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    var fnName = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = fnName;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        validateChildKeys(arguments[key]);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++)
        validateChildKeys(arguments[i]);
      i = {};
      var key = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      key && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      ctor = { _status: -1, _result: ctor };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: ctor,
        _init: lazyInitializer
      }, ioInfo = {
        name: "lazy",
        start: -1,
        end: -1,
        value: null,
        owner: null,
        debugStack: Error("react-stack-top-frame"),
        debugTask: console.createTask ? console.createTask("lazy()") : null
      };
      ctor._ioInfo = ioInfo;
      lazyType._debugInfo = [{ awaited: ioInfo }];
      return lazyType;
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      currentTransition._updatedFibers = new Set;
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), prevTransition !== null && currentTransition.types !== null && (prevTransition.types !== null && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
      return resolveDispatcher().useEffectEvent(callback);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.2.4";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// ../../node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development());
  if (false) {} else {
    module.exports = react_development;
  }
});

// ../../node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react());
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
      var refProp = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (refProp !== undefined ? refProp : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
      isValidElement(node) ? node._store && (node._store.validated = 1) : typeof node === "object" && node !== null && node.$$typeof === REACT_LAZY_TYPE && (node._payload.status === "fulfilled" ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// ../../node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development());
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// traction-mockups.jsx
var import_react3 = __toESM(require_react(), 1);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react(), 1);

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react(), 1);

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = import_react.forwardRef(({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  absoluteStrokeWidth,
  className = "",
  children,
  iconNode,
  ...rest
}, ref) => import_react.createElement("svg", {
  ref,
  ...defaultAttributes,
  width: size,
  height: size,
  stroke: color,
  strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
  className: mergeClasses("lucide", className),
  ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
  ...rest
}, [
  ...iconNode.map(([tag, attrs]) => import_react.createElement(tag, attrs)),
  ...Array.isArray(children) ? children : [children]
]));

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = import_react2.forwardRef(({ className, ...props }, ref) => import_react2.createElement(Icon, {
    ref,
    iconNode,
    className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
    ...props
  }));
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/book-open.js
var __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
var BookOpen = createLucideIcon("book-open", __iconNode);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode2);

// ../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode3 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode3);

// ../../node_modules/lucide-react/dist/esm/icons/circle.js
var __iconNode4 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
var Circle = createLucideIcon("circle", __iconNode4);

// ../../node_modules/lucide-react/dist/esm/icons/clock.js
var __iconNode5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
var Clock = createLucideIcon("clock", __iconNode5);

// ../../node_modules/lucide-react/dist/esm/icons/dollar-sign.js
var __iconNode6 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
var DollarSign = createLucideIcon("dollar-sign", __iconNode6);

// ../../node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode7 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
var FileText = createLucideIcon("file-text", __iconNode7);

// ../../node_modules/lucide-react/dist/esm/icons/mail.js
var __iconNode8 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
var Mail = createLucideIcon("mail", __iconNode8);

// ../../node_modules/lucide-react/dist/esm/icons/message-square.js
var __iconNode9 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
var MessageSquare = createLucideIcon("message-square", __iconNode9);

// ../../node_modules/lucide-react/dist/esm/icons/pen-tool.js
var __iconNode10 = [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn"
    }
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e"
    }
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
];
var PenTool = createLucideIcon("pen-tool", __iconNode10);

// ../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var __iconNode11 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
var RefreshCw = createLucideIcon("refresh-cw", __iconNode11);

// ../../node_modules/lucide-react/dist/esm/icons/settings.js
var __iconNode12 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Settings = createLucideIcon("settings", __iconNode12);

// ../../node_modules/lucide-react/dist/esm/icons/share-2.js
var __iconNode13 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
var Share2 = createLucideIcon("share-2", __iconNode13);

// ../../node_modules/lucide-react/dist/esm/icons/sparkles.js
var __iconNode14 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
var Sparkles = createLucideIcon("sparkles", __iconNode14);

// ../../node_modules/lucide-react/dist/esm/icons/target.js
var __iconNode15 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
var Target = createLucideIcon("target", __iconNode15);

// ../../node_modules/lucide-react/dist/esm/icons/trending-up.js
var __iconNode16 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
var TrendingUp = createLucideIcon("trending-up", __iconNode16);

// ../../node_modules/lucide-react/dist/esm/icons/zap.js
var __iconNode17 = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
var Zap = createLucideIcon("zap", __iconNode17);
// traction-mockups.jsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var colors = {
  primary: "#028090",
  primaryLight: "#03a5a5",
  secondary: "#00A896",
  accent: "#02C39A",
  dark: "#1a1a2e",
  darkMuted: "#2d2d44",
  light: "#f8fafa",
  white: "#ffffff",
  gray: "#6b7280",
  grayLight: "#e5e7eb",
  success: "#10b981",
  warning: "#f59e0b"
};
var Navigation = ({ currentView, setCurrentView }) => {
  const [menuOpen, setMenuOpen] = import_react3.useState(false);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("nav", {
    className: "bg-white border-b border-gray-200 px-6 py-4",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
      className: "flex items-center justify-between max-w-7xl mx-auto",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
          className: "flex items-center gap-8",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  className: "w-8 h-8 rounded-lg flex items-center justify-center",
                  style: { backgroundColor: colors.primary },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TrendingUp, {
                    className: "w-5 h-5 text-white"
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                  className: "font-bold text-xl",
                  style: { color: colors.dark },
                  children: "Traction"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "hidden md:flex items-center gap-6",
              children: ["Dashboard", "Playbook", "Create", "Learn"].map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                onClick: () => setCurrentView(item.toLowerCase()),
                className: `text-sm font-medium transition-colors ${currentView === item.toLowerCase() ? "text-teal-600" : "text-gray-600 hover:text-gray-900"}`,
                children: item
              }, item, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
              className: "p-2 rounded-lg hover:bg-gray-100 transition-colors",
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Settings, {
                className: "w-5 h-5 text-gray-600"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center",
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                className: "text-white text-sm font-medium",
                children: "NW"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
var OnboardingView = ({ onComplete }) => {
  const [step, setStep] = import_react3.useState(0);
  const [answers, setAnswers] = import_react3.useState({});
  const questions = [
    {
      id: "product",
      question: "What's your product?",
      subtext: "Tell me about what you're building",
      type: "text",
      placeholder: "e.g., A project management tool for remote teams..."
    },
    {
      id: "stage",
      question: "Where are you in your journey?",
      subtext: "This helps me tailor recommendations",
      type: "select",
      options: [
        { value: "idea", label: "Just an idea", desc: "Still validating the concept" },
        { value: "building", label: "Building MVP", desc: "Product in development" },
        { value: "launched", label: "Launched", desc: "Live with some users" },
        { value: "growing", label: "Growing", desc: "Finding product-market fit" }
      ]
    },
    {
      id: "marketing",
      question: "What marketing have you tried?",
      subtext: "Select all that apply",
      type: "multi",
      options: [
        { value: "content", label: "Blog / Content", icon: FileText },
        { value: "social", label: "Social Media", icon: Share2 },
        { value: "email", label: "Email Marketing", icon: Mail },
        { value: "paid", label: "Paid Ads", icon: DollarSign },
        { value: "none", label: "Nothing yet", icon: Circle }
      ]
    },
    {
      id: "challenge",
      question: "What's your biggest marketing challenge?",
      subtext: "Be honest - this helps me help you",
      type: "select",
      options: [
        { value: "direction", label: "Don't know where to start", desc: "Overwhelmed by options" },
        { value: "consistency", label: "Can't stay consistent", desc: "Marketing in bursts" },
        { value: "results", label: "Not seeing results", desc: "Trying things but they don't work" },
        { value: "time", label: "No time for marketing", desc: "Too busy building product" }
      ]
    }
  ];
  const currentQuestion = questions[step];
  const progress = (step + 1) / questions.length * 100;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "min-h-screen",
    style: { backgroundColor: colors.light },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
        className: "h-1 bg-gray-200",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
          className: "h-full transition-all duration-500",
          style: { width: `${progress}%`, backgroundColor: colors.primary }
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
        className: "max-w-2xl mx-auto px-6 py-16",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "flex items-center gap-2 mb-12",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "w-10 h-10 rounded-xl flex items-center justify-center",
                style: { backgroundColor: colors.primary },
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TrendingUp, {
                  className: "w-6 h-6 text-white"
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                className: "font-bold text-2xl",
                style: { color: colors.dark },
                children: "Traction"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                className: "text-sm font-medium mb-2",
                style: { color: colors.primary },
                children: [
                  "Question ",
                  step + 1,
                  " of ",
                  questions.length
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h1", {
                className: "text-3xl font-bold mb-2",
                style: { color: colors.dark },
                children: currentQuestion.question
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                className: "text-gray-500",
                children: currentQuestion.subtext
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "mb-8",
            children: [
              currentQuestion.type === "text" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("textarea", {
                className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors text-lg",
                rows: 4,
                placeholder: currentQuestion.placeholder,
                value: answers[currentQuestion.id] || "",
                onChange: (e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
              }, undefined, false, undefined, this),
              currentQuestion.type === "select" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "space-y-3",
                children: currentQuestion.options.map((option) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                  onClick: () => setAnswers({ ...answers, [currentQuestion.id]: option.value }),
                  className: `w-full p-4 rounded-xl border-2 text-left transition-all ${answers[currentQuestion.id] === option.value ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "font-medium",
                      style: { color: colors.dark },
                      children: option.label
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "text-sm text-gray-500",
                      children: option.desc
                    }, undefined, false, undefined, this)
                  ]
                }, option.value, true, undefined, this))
              }, undefined, false, undefined, this),
              currentQuestion.type === "multi" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "grid grid-cols-2 gap-3",
                children: currentQuestion.options.map((option) => {
                  const Icon2 = option.icon;
                  const selected = (answers[currentQuestion.id] || []).includes(option.value);
                  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                    onClick: () => {
                      const current = answers[currentQuestion.id] || [];
                      const updated = selected ? current.filter((v) => v !== option.value) : [...current, option.value];
                      setAnswers({ ...answers, [currentQuestion.id]: updated });
                    },
                    className: `p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${selected ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: `w-10 h-10 rounded-lg flex items-center justify-center ${selected ? "bg-teal-500" : "bg-gray-100"}`,
                        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Icon2, {
                          className: `w-5 h-5 ${selected ? "text-white" : "text-gray-500"}`
                        }, undefined, false, undefined, this)
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                        className: "font-medium",
                        style: { color: colors.dark },
                        children: option.label
                      }, undefined, false, undefined, this)
                    ]
                  }, option.value, true, undefined, this);
                })
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "flex justify-between",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                onClick: () => setStep(Math.max(0, step - 1)),
                className: `px-6 py-3 rounded-lg font-medium transition-colors ${step === 0 ? "invisible" : "text-gray-600 hover:bg-gray-100"}`,
                children: "Back"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                onClick: () => {
                  if (step < questions.length - 1) {
                    setStep(step + 1);
                  } else {
                    onComplete();
                  }
                },
                className: "px-8 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-transform hover:scale-105",
                style: { backgroundColor: colors.primary },
                children: [
                  step < questions.length - 1 ? "Continue" : "See my plan",
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ChevronRight, {
                    className: "w-5 h-5"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var DashboardView = ({ setCurrentView }) => {
  const actions = [
    {
      id: 1,
      title: "Write your positioning statement",
      desc: "Define how you want customers to think about your product",
      type: "Playbook",
      priority: "high",
      time: "15 min",
      icon: Target
    },
    {
      id: 2,
      title: "Create your first LinkedIn post",
      desc: "Announce your product to your network",
      type: "Content",
      priority: "medium",
      time: "10 min",
      icon: PenTool
    },
    {
      id: 3,
      title: "Set up email capture on your site",
      desc: "Start building your audience before launch",
      type: "Growth",
      priority: "medium",
      time: "20 min",
      icon: Mail
    }
  ];
  const recentInsight = {
    title: "Your technical content performs 3x better",
    desc: "Posts about how you built features get much more engagement than product announcements. Consider doing more behind-the-scenes content.",
    source: "Based on your last 2 weeks of activity"
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "min-h-screen",
    style: { backgroundColor: colors.light },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Navigation, {
        currentView: "dashboard",
        setCurrentView
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("main", {
        className: "max-w-7xl mx-auto px-6 py-8",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h1", {
                className: "text-2xl font-bold mb-1",
                style: { color: colors.dark },
                children: "Good morning, Nigel \uD83D\uDC4B"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                className: "text-gray-500",
                children: "Here's what to focus on today"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "grid lg:grid-cols-3 gap-6",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "lg:col-span-2 space-y-6",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "flex items-center gap-3",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                style: { backgroundColor: `${colors.primary}15` },
                                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Zap, {
                                  className: "w-5 h-5",
                                  style: { color: colors.primary }
                                }, undefined, false, undefined, this)
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                children: [
                                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h2", {
                                    className: "font-semibold",
                                    style: { color: colors.dark },
                                    children: "Your Next Actions"
                                  }, undefined, false, undefined, this),
                                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                                    className: "text-sm text-gray-500",
                                    children: "AI-recommended based on your stage"
                                  }, undefined, false, undefined, this)
                                ]
                              }, undefined, true, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                            className: "text-sm font-medium",
                            style: { color: colors.primary },
                            children: "View all"
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "space-y-4",
                        children: actions.map((action, idx) => {
                          const Icon2 = action.icon;
                          return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: `p-4 rounded-xl border-2 transition-all cursor-pointer hover:border-teal-300 ${idx === 0 ? "border-teal-500 bg-teal-50" : "border-gray-100 bg-gray-50"}`,
                            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                              className: "flex items-start gap-4",
                              children: [
                                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                  className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${idx === 0 ? "bg-teal-500" : "bg-gray-200"}`,
                                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Icon2, {
                                    className: `w-5 h-5 ${idx === 0 ? "text-white" : "text-gray-500"}`
                                  }, undefined, false, undefined, this)
                                }, undefined, false, undefined, this),
                                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                  className: "flex-1",
                                  children: [
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                      className: "flex items-center gap-2 mb-1",
                                      children: [
                                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                                          className: "font-medium",
                                          style: { color: colors.dark },
                                          children: action.title
                                        }, undefined, false, undefined, this),
                                        idx === 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                          className: "px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700",
                                          children: "Recommended"
                                        }, undefined, false, undefined, this)
                                      ]
                                    }, undefined, true, undefined, this),
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                                      className: "text-sm text-gray-500 mb-2",
                                      children: action.desc
                                    }, undefined, false, undefined, this),
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                      className: "flex items-center gap-3 text-xs text-gray-400",
                                      children: [
                                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Clock, {
                                              className: "w-3 h-3"
                                            }, undefined, false, undefined, this),
                                            action.time
                                          ]
                                        }, undefined, true, undefined, this),
                                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                          className: "px-2 py-0.5 rounded-full bg-gray-100",
                                          children: action.type
                                        }, undefined, false, undefined, this)
                                      ]
                                    }, undefined, true, undefined, this)
                                  ]
                                }, undefined, true, undefined, this),
                                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ChevronRight, {
                                  className: "w-5 h-5 text-gray-400 flex-shrink-0"
                                }, undefined, false, undefined, this)
                              ]
                            }, undefined, true, undefined, this)
                          }, action.id, false, undefined, this);
                        })
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white",
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "flex items-start gap-4",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                          className: "w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0",
                          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Sparkles, {
                            className: "w-5 h-5 text-white"
                          }, undefined, false, undefined, this)
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                              className: "text-teal-100 text-sm font-medium mb-1",
                              children: "Latest Insight"
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                              className: "font-semibold text-lg mb-2",
                              children: recentInsight.title
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                              className: "text-teal-100 text-sm mb-3",
                              children: recentInsight.desc
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                              className: "text-teal-200 text-xs",
                              children: recentInsight.source
                            }, undefined, false, undefined, this)
                          ]
                        }, undefined, true, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                        className: "font-semibold mb-4",
                        style: { color: colors.dark },
                        children: "Your Progress"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "mb-6",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                className: "text-gray-500",
                                children: "Marketing Foundations"
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                className: "font-medium",
                                style: { color: colors.primary },
                                children: "35%"
                              }, undefined, false, undefined, this)
                            ]
                          }, undefined, true, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "h-2 bg-gray-100 rounded-full overflow-hidden",
                            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                              className: "h-full rounded-full",
                              style: { width: "35%", backgroundColor: colors.primary }
                            }, undefined, false, undefined, this)
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "space-y-3",
                        children: [
                          { label: "Positioning", done: true },
                          { label: "Target customer", done: true },
                          { label: "Messaging", done: false, current: true },
                          { label: "Channel strategy", done: false }
                        ].map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                          className: "flex items-center gap-3",
                          children: [
                            item.done ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CircleCheckBig, {
                              className: "w-5 h-5 text-teal-500"
                            }, undefined, false, undefined, this) : item.current ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                              className: "w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center",
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                className: "w-2 h-2 rounded-full bg-teal-500"
                              }, undefined, false, undefined, this)
                            }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Circle, {
                              className: "w-5 h-5 text-gray-300"
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                              className: `text-sm ${item.done ? "text-gray-500" : item.current ? "font-medium text-gray-900" : "text-gray-400"}`,
                              children: item.label
                            }, undefined, false, undefined, this)
                          ]
                        }, item.label, true, undefined, this))
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                        className: "font-semibold mb-4",
                        style: { color: colors.dark },
                        children: "Quick Actions"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "space-y-2",
                        children: [
                          { label: "Log a check-in", icon: MessageSquare, color: colors.primary },
                          { label: "Create content", icon: PenTool, color: colors.secondary },
                          { label: "View playbook", icon: BookOpen, color: colors.accent }
                        ].map((item) => {
                          const Icon2 = item.icon;
                          return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                            className: "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left",
                            children: [
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                                className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                style: { backgroundColor: `${item.color}15` },
                                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Icon2, {
                                  className: "w-4 h-4",
                                  style: { color: item.color }
                                }, undefined, false, undefined, this)
                              }, undefined, false, undefined, this),
                              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
                                className: "text-sm font-medium",
                                style: { color: colors.dark },
                                children: item.label
                              }, undefined, false, undefined, this)
                            ]
                          }, item.label, true, undefined, this);
                        })
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var CheckInView = ({ setCurrentView }) => {
  const [checkInStep, setCheckInStep] = import_react3.useState(0);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "min-h-screen",
    style: { backgroundColor: colors.light },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Navigation, {
        currentView: "dashboard",
        setCurrentView
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("main", {
        className: "max-w-2xl mx-auto px-6 py-12",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
          className: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "flex items-center gap-3 mb-8",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center",
                  style: { backgroundColor: `${colors.primary}15` },
                  children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RefreshCw, {
                    className: "w-6 h-6",
                    style: { color: colors.primary }
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h1", {
                      className: "text-xl font-bold",
                      style: { color: colors.dark },
                      children: "Weekly Check-in"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                      className: "text-gray-500 text-sm",
                      children: "Let's see what's working for you"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            checkInStep === 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("label", {
                      className: "block text-sm font-medium mb-2",
                      style: { color: colors.dark },
                      children: "What marketing did you do this week?"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("textarea", {
                      className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
                      rows: 3,
                      placeholder: "e.g., Posted 3 times on LinkedIn, sent out an email to my list..."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("label", {
                      className: "block text-sm font-medium mb-2",
                      style: { color: colors.dark },
                      children: "What results did you see?"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("textarea", {
                      className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
                      rows: 3,
                      placeholder: "e.g., Got 50 likes on one post, 3 people signed up for the waitlist..."
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("label", {
                      className: "block text-sm font-medium mb-3",
                      style: { color: colors.dark },
                      children: "How do you feel about this week's marketing?"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "flex gap-3",
                      children: ["\uD83D\uDE1E", "\uD83D\uDE10", "\uD83D\uDE42", "\uD83D\uDE0A", "\uD83E\uDD29"].map((emoji, idx) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                        className: "w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-2xl",
                        children: emoji
                      }, idx, false, undefined, this))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                  onClick: () => setCheckInStep(1),
                  className: "w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]",
                  style: { backgroundColor: colors.primary },
                  children: "Submit Check-in"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            checkInStep === 1 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  className: "text-center py-4",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4",
                      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Sparkles, {
                        className: "w-8 h-8 text-teal-600"
                      }, undefined, false, undefined, this)
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h2", {
                      className: "text-xl font-bold mb-2",
                      style: { color: colors.dark },
                      children: "Analyzing your week..."
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                      className: "text-gray-500",
                      children: "Finding patterns in what's working"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  className: "bg-teal-50 border border-teal-200 rounded-xl p-6",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                      className: "font-semibold mb-3",
                      style: { color: colors.dark },
                      children: "\uD83C\uDFAF Key Insight"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                      className: "text-gray-700 mb-4",
                      children: 'Your LinkedIn post about "behind the scenes" got 3x more engagement than your product announcement. Your audience responds to authenticity and process content.'
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                      className: "text-sm text-teal-700 font-medium",
                      children: 'Recommendation: Create more "building in public" content this week.'
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                  className: "bg-gray-50 rounded-xl p-6",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                      className: "font-semibold mb-3",
                      style: { color: colors.dark },
                      children: "\uD83D\uDCCA This Week's Numbers"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "grid grid-cols-3 gap-4",
                      children: [
                        { label: "Posts", value: "3", change: "+1" },
                        { label: "Engagement", value: "127", change: "+45%" },
                        { label: "Signups", value: "3", change: "+2" }
                      ].map((stat) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "text-center",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "text-2xl font-bold",
                            style: { color: colors.dark },
                            children: stat.value
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "text-xs text-gray-500 mb-1",
                            children: stat.label
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "text-xs text-teal-600 font-medium",
                            children: stat.change
                          }, undefined, false, undefined, this)
                        ]
                      }, stat.label, true, undefined, this))
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                  onClick: () => setCurrentView("dashboard"),
                  className: "w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]",
                  style: { backgroundColor: colors.primary },
                  children: "Back to Dashboard"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var ContentCreatorView = ({ setCurrentView }) => {
  const [contentType, setContentType] = import_react3.useState("linkedin");
  const [prompt, setPrompt] = import_react3.useState("");
  const [generated, setGenerated] = import_react3.useState(false);
  const contentTypes = [
    { id: "linkedin", label: "LinkedIn Post", icon: Share2 },
    { id: "email", label: "Email", icon: Mail },
    { id: "blog", label: "Blog Post", icon: FileText },
    { id: "ad", label: "Ad Copy", icon: DollarSign }
  ];
  const sampleOutput = `\uD83D\uDE80 We spent 6 months building the wrong thing.

Here's what we learned:

We were so focused on features that we forgot to ask: "Does anyone actually want this?"

After talking to 50 potential customers, we realized:
• They didn't need more features
• They needed fewer, better ones
• Our "killer feature" was actually confusing

The pivot was painful but necessary.

Now? We're growing 20% week over week.

The lesson: Talk to customers before you write a single line of code.

What's the biggest lesson you've learned building your product?

#buildinpublic #startups #productdevelopment`;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "min-h-screen",
    style: { backgroundColor: colors.light },
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Navigation, {
        currentView: "create",
        setCurrentView
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("main", {
        className: "max-w-6xl mx-auto px-6 py-8",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h1", {
                className: "text-2xl font-bold mb-1",
                style: { color: colors.dark },
                children: "Create Content"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                className: "text-gray-500",
                children: "AI-powered content that sounds like you"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "grid lg:grid-cols-2 gap-6",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h2", {
                    className: "font-semibold mb-4",
                    style: { color: colors.dark },
                    children: "What do you want to create?"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "flex gap-2 mb-6",
                    children: contentTypes.map((type) => {
                      const Icon2 = type.icon;
                      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                        onClick: () => setContentType(type.id),
                        className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${contentType === type.id ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Icon2, {
                            className: "w-4 h-4"
                          }, undefined, false, undefined, this),
                          type.label
                        ]
                      }, type.id, true, undefined, this);
                    })
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("label", {
                            className: "block text-sm font-medium mb-2",
                            style: { color: colors.dark },
                            children: "What's the topic or message?"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("textarea", {
                            className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
                            rows: 4,
                            placeholder: "e.g., Share a lesson I learned about customer research...",
                            value: prompt,
                            onChange: (e) => setPrompt(e.target.value)
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("label", {
                            className: "block text-sm font-medium mb-2",
                            style: { color: colors.dark },
                            children: "Tone"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                            className: "flex gap-2",
                            children: ["Professional", "Casual", "Storytelling", "Educational"].map((tone) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                              className: "px-4 py-2 rounded-lg text-sm border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all",
                              children: tone
                            }, tone, false, undefined, this))
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                        onClick: () => setGenerated(true),
                        className: "w-full py-3 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]",
                        style: { backgroundColor: colors.primary },
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Sparkles, {
                            className: "w-5 h-5"
                          }, undefined, false, undefined, this),
                          "Generate Content"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "mt-6 p-4 bg-teal-50 rounded-xl",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                        className: "text-sm font-medium mb-2",
                        style: { color: colors.primary },
                        children: "\uD83D\uDCA1 Tip based on your data"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                        className: "text-sm text-gray-600",
                        children: 'Your audience engages most with personal stories and lessons learned. Try framing this as "what I learned" or "my mistake was..."'
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h2", {
                        className: "font-semibold",
                        style: { color: colors.dark },
                        children: "Generated Content"
                      }, undefined, false, undefined, this),
                      generated && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "flex gap-2",
                        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                          className: "p-2 rounded-lg hover:bg-gray-100 transition-colors",
                          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RefreshCw, {
                            className: "w-4 h-4 text-gray-500"
                          }, undefined, false, undefined, this)
                        }, undefined, false, undefined, this)
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  !generated ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "h-64 flex items-center justify-center text-gray-400",
                    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                      className: "text-center",
                      children: [
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PenTool, {
                          className: "w-12 h-12 mx-auto mb-3 opacity-50"
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                          children: "Your generated content will appear here"
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "p-4 bg-gray-50 rounded-xl whitespace-pre-line text-sm",
                        style: { color: colors.dark },
                        children: sampleOutput
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "flex gap-2",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                            className: "flex-1 py-2 rounded-lg font-medium text-white",
                            style: { backgroundColor: colors.primary },
                            children: "Copy to Clipboard"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
                            className: "flex-1 py-2 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors",
                            children: "Edit"
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
                        className: "p-4 bg-yellow-50 border border-yellow-200 rounded-xl",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("h3", {
                            className: "text-sm font-medium text-yellow-800 mb-1",
                            children: "Before you post"
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
                            className: "text-sm text-yellow-700",
                            children: "Best time to post on LinkedIn for your audience: Tuesday 9am or Thursday 2pm"
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
function App() {
  const [view, setView] = import_react3.useState("onboarding");
  const [onboarded, setOnboarded] = import_react3.useState(false);
  const handleOnboardingComplete = () => {
    setOnboarded(true);
    setView("dashboard");
  };
  const demoViews = ["onboarding", "dashboard", "checkin", "create"];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
        className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-4",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
            className: "text-xs text-gray-400",
            children: "View:"
          }, undefined, false, undefined, this),
          demoViews.map((v) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
            onClick: () => setView(v),
            className: `px-3 py-1 rounded-full text-sm font-medium transition-colors ${view === v ? "bg-teal-500" : "hover:bg-gray-700"}`,
            children: v.charAt(0).toUpperCase() + v.slice(1)
          }, v, false, undefined, this))
        ]
      }, undefined, true, undefined, this),
      view === "onboarding" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(OnboardingView, {
        onComplete: handleOnboardingComplete
      }, undefined, false, undefined, this),
      view === "dashboard" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DashboardView, {
        setCurrentView: setView
      }, undefined, false, undefined, this),
      view === "checkin" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CheckInView, {
        setCurrentView: setView
      }, undefined, false, undefined, this),
      view === "create" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ContentCreatorView, {
        setCurrentView: setView
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
export {
  App as default
};
