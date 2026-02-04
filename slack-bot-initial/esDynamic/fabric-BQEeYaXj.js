import { bA as St } from "./main-3gzXighg.js";
function bt(Z, f) {
  for (var ft = 0; ft < f.length; ft++) {
    const ht = f[ft];
    if (typeof ht != "string" && !Array.isArray(ht)) {
      for (const lt in ht)
        if (lt !== "default" && !(lt in Z)) {
          const ct = Object.getOwnPropertyDescriptor(ht, lt);
          ct && Object.defineProperty(Z, lt, ct.get ? ct : {
            enumerable: !0,
            get: () => ht[lt]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Z, Symbol.toStringTag, { value: "Module" }));
}
var pt = {};
const xt = {}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), mt = /* @__PURE__ */ St(wt);
(function(Z) {
  var f = f || { version: "5.3.0" };
  if (Z.fabric = f, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? f.document = document : f.document = document.implementation.createHTMLDocument(""), f.window = window;
  else {
    var ft = mt, ht = new ft.JSDOM(
      decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),
      {
        features: {
          FetchExternalResources: ["img"]
        },
        resources: "usable"
      }
    ).window;
    f.document = ht.document, f.jsdomImplForWrapper = mt.implForWrapper, f.nodeCanvas = mt.Canvas, f.window = ht, DOMParser = f.window.DOMParser;
  }
  f.isTouchSupported = "ontouchstart" in f.window || "ontouchstart" in f.document || f.window && f.window.navigator && f.window.navigator.maxTouchPoints > 0, f.isLikelyNode = typeof Buffer < "u" && typeof window > "u", f.SHARED_ATTRIBUTES = [
    "display",
    "transform",
    "fill",
    "fill-opacity",
    "fill-rule",
    "opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-linecap",
    "stroke-dashoffset",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "id",
    "paint-order",
    "vector-effect",
    "instantiated_by_use",
    "clip-path"
  ], f.DPI = 96, f.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", f.commaWsp = "(?:\\s+,?\\s*|,\\s*)", f.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/ig, f.reNonWord = /[ \n\.,;!\?\-]/, f.fontPaths = {}, f.iMatrix = [1, 0, 0, 1, 0, 0], f.svgNS = "http://www.w3.org/2000/svg", f.perfLimitSizeTotal = 2097152, f.maxCacheSideLimit = 4096, f.minCacheSideLimit = 256, f.charWidthsCache = {}, f.textureSize = 2048, f.disableStyleCopyPaste = !1, f.enableGLFiltering = !0, f.devicePixelRatio = f.window.devicePixelRatio || f.window.webkitDevicePixelRatio || f.window.mozDevicePixelRatio || 1, f.browserShadowBlurConstant = 1, f.arcToSegmentsCache = {}, f.boundsOfCurveCache = {}, f.cachesBoundsOfCurve = !0, f.forceGLPutImageData = !1, f.initFilterBackend = function() {
    if (f.enableGLFiltering && f.isWebglSupported && f.isWebglSupported(f.textureSize))
      return console.log("max texture size: " + f.maxTextureSize), new f.WebglFilterBackend({ tileSize: f.textureSize });
    if (f.Canvas2dFilterBackend)
      return new f.Canvas2dFilterBackend();
  }, typeof document < "u" && typeof window < "u" && (window.fabric = f), function() {
    function c(t, n) {
      if (this.__eventListeners[t]) {
        var a = this.__eventListeners[t];
        n ? a[a.indexOf(n)] = !1 : f.util.array.fill(a, !1);
      }
    }
    function s(t, n) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var a in t)
          this.on(a, t[a]);
      else
        this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(n);
      return this;
    }
    function h(t, n) {
      var a = function() {
        n.apply(this, arguments), this.off(t, a);
      }.bind(this);
      this.on(t, a);
    }
    function o(t, n) {
      if (arguments.length === 1)
        for (var a in t)
          h.call(this, a, t[a]);
      else
        h.call(this, t, n);
      return this;
    }
    function e(t, n) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (t in this.__eventListeners)
          c.call(this, t);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var a in t)
          c.call(this, a, t[a]);
      else
        c.call(this, t, n);
      return this;
    }
    function r(t, n) {
      if (!this.__eventListeners)
        return this;
      var a = this.__eventListeners[t];
      if (!a)
        return this;
      for (var i = 0, l = a.length; i < l; i++)
        a[i] && a[i].call(this, n || {});
      return this.__eventListeners[t] = a.filter(function(u) {
        return u !== !1;
      }), this;
    }
    f.Observable = {
      fire: r,
      on: s,
      once: o,
      off: e
    };
  }(), f.Collection = {
    _objects: [],
    /**
     * Adds objects to collection, Canvas or Group, then renders canvas
     * (if `renderOnAddRemove` is not `false`).
     * in case of Group no changes to bounding box are made.
     * Objects should be instances of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the add method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    add: function() {
      if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
        for (var c = 0, s = arguments.length; c < s; c++)
          this._onObjectAdded(arguments[c]);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the insertAt method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {Object} object Object to insert
     * @param {Number} index Index to insert object at
     * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return {Self} thisArg
     * @chainable
     */
    insertAt: function(c, s, h) {
      var o = this._objects;
      return h ? o[s] = c : o.splice(s, 0, c), this._onObjectAdded && this._onObjectAdded(c), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    /**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
    remove: function() {
      for (var c = this._objects, s, h = !1, o = 0, e = arguments.length; o < e; o++)
        s = c.indexOf(arguments[o]), s !== -1 && (h = !0, c.splice(s, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[o]));
      return this.renderOnAddRemove && h && this.requestRenderAll(), this;
    },
    /**
     * Executes given function for each object in this group
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     * @return {Self} thisArg
     * @chainable
     */
    forEachObject: function(c, s) {
      for (var h = this.getObjects(), o = 0, e = h.length; o < e; o++)
        c.call(s, h[o], o, h);
      return this;
    },
    /**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * since 2.3.5 this method return always a COPY of the array;
     * @param {String} [type] When specified, only objects of this type are returned
     * @return {Array}
     */
    getObjects: function(c) {
      return typeof c > "u" ? this._objects.concat() : this._objects.filter(function(s) {
        return s.type === c;
      });
    },
    /**
     * Returns object at specified index
     * @param {Number} index
     * @return {Self} thisArg
     */
    item: function(c) {
      return this._objects[c];
    },
    /**
     * Returns true if collection contains no objects
     * @return {Boolean} true if collection is empty
     */
    isEmpty: function() {
      return this._objects.length === 0;
    },
    /**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return {Number} Collection size
     */
    size: function() {
      return this._objects.length;
    },
    /**
     * Returns true if collection contains an object
     * @param {Object} object Object to check against
     * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
     * @return {Boolean} `true` if collection contains an object
     */
    contains: function(c, s) {
      return this._objects.indexOf(c) > -1 ? !0 : s ? this._objects.some(function(h) {
        return typeof h.contains == "function" && h.contains(c, !0);
      }) : !1;
    },
    /**
     * Returns number representation of a collection complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this._objects.reduce(function(c, s) {
        return c += s.complexity ? s.complexity() : 0, c;
      }, 0);
    }
  }, f.CommonMethods = {
    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    _setOptions: function(c) {
      for (var s in c)
        this.set(s, c[s]);
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Gradient to
     */
    _initGradient: function(c, s) {
      c && c.colorStops && !(c instanceof f.Gradient) && this.set(s, new f.Gradient(c));
    },
    /**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Pattern to
     * @param {Function} [callback] callback to invoke after pattern load
     */
    _initPattern: function(c, s, h) {
      c && c.source && !(c instanceof f.Pattern) ? this.set(s, new f.Pattern(c, h)) : h && h();
    },
    /**
     * @private
     */
    _setObject: function(c) {
      for (var s in c)
        this._set(s, c[s]);
    },
    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(c, s) {
      return typeof c == "object" ? this._setObject(c) : this._set(c, s), this;
    },
    _set: function(c, s) {
      this[c] = s;
    },
    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(c) {
      var s = this.get(c);
      return typeof s == "boolean" && this.set(c, !s), this;
    },
    /**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
    get: function(c) {
      return this[c];
    }
  }, function(c) {
    var s = Math.sqrt, h = Math.atan2, o = Math.pow, e = Math.PI / 180, r = Math.PI / 2;
    f.util = {
      /**
       * Calculate the cos of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      cos: function(t) {
        if (t === 0)
          return 1;
        t < 0 && (t = -t);
        var n = t / r;
        switch (n) {
          case 1:
          case 3:
            return 0;
          case 2:
            return -1;
        }
        return Math.cos(t);
      },
      /**
       * Calculate the sin of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
      sin: function(t) {
        if (t === 0)
          return 0;
        var n = t / r, a = 1;
        switch (t < 0 && (a = -1), n) {
          case 1:
            return a;
          case 2:
            return 0;
          case 3:
            return -a;
        }
        return Math.sin(t);
      },
      /**
       * Removes value from an array.
       * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
       * @static
       * @memberOf fabric.util
       * @param {Array} array
       * @param {*} value
       * @return {Array} original array
       */
      removeFromArray: function(t, n) {
        var a = t.indexOf(n);
        return a !== -1 && t.splice(a, 1), t;
      },
      /**
       * Returns random number between 2 specified ones.
       * @static
       * @memberOf fabric.util
       * @param {Number} min lower limit
       * @param {Number} max upper limit
       * @return {Number} random value (between min and max)
       */
      getRandomInt: function(t, n) {
        return Math.floor(Math.random() * (n - t + 1)) + t;
      },
      /**
       * Transforms degrees to radians.
       * @static
       * @memberOf fabric.util
       * @param {Number} degrees value in degrees
       * @return {Number} value in radians
       */
      degreesToRadians: function(t) {
        return t * e;
      },
      /**
       * Transforms radians to degrees.
       * @static
       * @memberOf fabric.util
       * @param {Number} radians value in radians
       * @return {Number} value in degrees
       */
      radiansToDegrees: function(t) {
        return t / e;
      },
      /**
       * Rotates `point` around `origin` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {fabric.Point} point The point to rotate
       * @param {fabric.Point} origin The origin of the rotation
       * @param {Number} radians The radians of the angle for the rotation
       * @return {fabric.Point} The new rotated point
       */
      rotatePoint: function(t, n, a) {
        var i = new f.Point(t.x - n.x, t.y - n.y), l = f.util.rotateVector(i, a);
        return new f.Point(l.x, l.y).addEquals(n);
      },
      /**
       * Rotates `vector` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {Object} vector The vector to rotate (x and y)
       * @param {Number} radians The radians of the angle for the rotation
       * @return {Object} The new rotated point
       */
      rotateVector: function(t, n) {
        var a = f.util.sin(n), i = f.util.cos(n), l = t.x * i - t.y * a, u = t.x * a + t.y * i;
        return {
          x: l,
          y: u
        };
      },
      /**
       * Creates a vetor from points represented as a point
       * @static
       * @memberOf fabric.util
       *
       * @typedef {Object} Point
       * @property {number} x
       * @property {number} y
       *
       * @param {Point} from
       * @param {Point} to
       * @returns {Point} vector
       */
      createVector: function(t, n) {
        return new f.Point(n.x - t.x, n.y - t.y);
      },
      /**
       * Calculates angle between 2 vectors using dot product
       * @static
       * @memberOf fabric.util
       * @param {Point} a
       * @param {Point} b
       * @returns the angle in radian between the vectors
       */
      calcAngleBetweenVectors: function(t, n) {
        return Math.acos((t.x * n.x + t.y * n.y) / (Math.hypot(t.x, t.y) * Math.hypot(n.x, n.y)));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} v
       * @returns {Point} vector representing the unit vector of pointing to the direction of `v`
       */
      getHatVector: function(t) {
        return new f.Point(t.x, t.y).multiply(1 / Math.hypot(t.x, t.y));
      },
      /**
       * @static
       * @memberOf fabric.util
       * @param {Point} A
       * @param {Point} B
       * @param {Point} C
       * @returns {{ vector: Point, angle: number }} vector representing the bisector of A and A's angle
       */
      getBisector: function(t, n, a) {
        var i = f.util.createVector(t, n), l = f.util.createVector(t, a), u = f.util.calcAngleBetweenVectors(i, l), d = f.util.calcAngleBetweenVectors(f.util.rotateVector(i, u), l), g = u * (d === 0 ? 1 : -1) / 2;
        return {
          vector: f.util.getHatVector(f.util.rotateVector(i, g)),
          angle: u
        };
      },
      /**
       * Project stroke width on points returning 2 projections for each point as follows:
       * - `miter`: 2 points corresponding to the outer boundary and the inner boundary of stroke.
       * - `bevel`: 2 points corresponding to the bevel boundaries, tangent to the bisector.
       * - `round`: same as `bevel`
       * Used to calculate object's bounding box
       * @static
       * @memberOf fabric.util
       * @param {Point[]} points
       * @param {Object} options
       * @param {number} options.strokeWidth
       * @param {'miter'|'bevel'|'round'} options.strokeLineJoin
       * @param {number} options.strokeMiterLimit https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
       * @param {boolean} options.strokeUniform
       * @param {number} options.scaleX
       * @param {number} options.scaleY
       * @param {boolean} [openPath] whether the shape is open or not, affects the calculations of the first and last points
       * @returns {fabric.Point[]} array of size 2n/4n of all suspected points
       */
      projectStrokeOnPoints: function(t, n, a) {
        var i = [], l = n.strokeWidth / 2, u = n.strokeUniform ? new f.Point(1 / n.scaleX, 1 / n.scaleY) : new f.Point(1, 1), d = function(g) {
          var m = l / Math.hypot(g.x, g.y);
          return new f.Point(g.x * m * u.x, g.y * m * u.y);
        };
        return t.length <= 1 || t.forEach(function(g, m) {
          var v = new f.Point(g.x, g.y), y, w;
          m === 0 ? (w = t[m + 1], y = a ? d(f.util.createVector(w, v)).addEquals(v) : t[t.length - 1]) : m === t.length - 1 ? (y = t[m - 1], w = a ? d(f.util.createVector(y, v)).addEquals(v) : t[0]) : (y = t[m - 1], w = t[m + 1]);
          var M = f.util.getBisector(v, y, w), X = M.vector, W = M.angle, V, N;
          if (n.strokeLineJoin === "miter" && (V = -l / Math.sin(W / 2), N = new f.Point(
            X.x * V * u.x,
            X.y * V * u.y
          ), Math.hypot(N.x, N.y) / l <= n.strokeMiterLimit)) {
            i.push(v.add(N)), i.push(v.subtract(N));
            return;
          }
          V = -l * Math.SQRT2, N = new f.Point(
            X.x * V * u.x,
            X.y * V * u.y
          ), i.push(v.add(N)), i.push(v.subtract(N));
        }), i;
      },
      /**
       * Apply transform t to point p
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Point} p The point to transform
       * @param  {Array} t The transform
       * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
       * @return {fabric.Point} The transformed point
       */
      transformPoint: function(t, n, a) {
        return a ? new f.Point(
          n[0] * t.x + n[2] * t.y,
          n[1] * t.x + n[3] * t.y
        ) : new f.Point(
          n[0] * t.x + n[2] * t.y + n[4],
          n[1] * t.x + n[3] * t.y + n[5]
        );
      },
      /**
       * Returns coordinates of points's bounding rectangle (left, top, width, height)
       * @param {Array} points 4 points array
       * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
       * @return {Object} Object with left, top, width, height properties
       */
      makeBoundingBoxFromPoints: function(t, n) {
        if (n)
          for (var a = 0; a < t.length; a++)
            t[a] = f.util.transformPoint(t[a], n);
        var i = [t[0].x, t[1].x, t[2].x, t[3].x], l = f.util.array.min(i), u = f.util.array.max(i), d = u - l, g = [t[0].y, t[1].y, t[2].y, t[3].y], m = f.util.array.min(g), v = f.util.array.max(g), y = v - m;
        return {
          left: l,
          top: m,
          width: d,
          height: y
        };
      },
      /**
       * Invert transformation t
       * @static
       * @memberOf fabric.util
       * @param {Array} t The transform
       * @return {Array} The inverted transform
       */
      invertTransform: function(t) {
        var n = 1 / (t[0] * t[3] - t[1] * t[2]), a = [n * t[3], -n * t[1], -n * t[2], n * t[0]], i = f.util.transformPoint({ x: t[4], y: t[5] }, a, !0);
        return a[4] = -i.x, a[5] = -i.y, a;
      },
      /**
       * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
       * @static
       * @memberOf fabric.util
       * @param {Number|String} number number to operate on
       * @param {Number} fractionDigits number of fraction digits to "leave"
       * @return {Number}
       */
      toFixed: function(t, n) {
        return parseFloat(Number(t).toFixed(n));
      },
      /**
       * Converts from attribute value to pixel value if applicable.
       * Returns converted pixels or original value not converted.
       * @param {Number|String} value number to operate on
       * @param {Number} fontSize
       * @return {Number|String}
       */
      parseUnit: function(t, n) {
        var a = /\D{0,2}$/.exec(t), i = parseFloat(t);
        switch (n || (n = f.Text.DEFAULT_SVG_FONT_SIZE), a[0]) {
          case "mm":
            return i * f.DPI / 25.4;
          case "cm":
            return i * f.DPI / 2.54;
          case "in":
            return i * f.DPI;
          case "pt":
            return i * f.DPI / 72;
          case "pc":
            return i * f.DPI / 72 * 12;
          case "em":
            return i * n;
          default:
            return i;
        }
      },
      /**
       * Function which always returns `false`.
       * @static
       * @memberOf fabric.util
       * @return {Boolean}
       */
      falseFunction: function() {
        return !1;
      },
      /**
       * Returns klass "Class" object of given namespace
       * @memberOf fabric.util
       * @param {String} type Type of object (eg. 'circle')
       * @param {String} namespace Namespace to get klass "Class" object from
       * @return {Object} klass "Class"
       */
      getKlass: function(t, n) {
        return t = f.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), f.util.resolveNamespace(n)[t];
      },
      /**
       * Returns array of attributes for given svg that fabric parses
       * @memberOf fabric.util
       * @param {String} type Type of svg element (eg. 'circle')
       * @return {Array} string names of supported attributes
       */
      getSvgAttributes: function(t) {
        var n = [
          "instantiated_by_use",
          "style",
          "id",
          "class"
        ];
        switch (t) {
          case "linearGradient":
            n = n.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
            break;
          case "radialGradient":
            n = n.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
            break;
          case "stop":
            n = n.concat(["offset", "stop-color", "stop-opacity"]);
            break;
        }
        return n;
      },
      /**
       * Returns object of given namespace
       * @memberOf fabric.util
       * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
       * @return {Object} Object for given namespace (default fabric)
       */
      resolveNamespace: function(t) {
        if (!t)
          return f;
        var n = t.split("."), a = n.length, i, l = c || f.window;
        for (i = 0; i < a; ++i)
          l = l[n[i]];
        return l;
      },
      /**
       * Loads image element from given url and passes it to a callback
       * @memberOf fabric.util
       * @param {String} url URL representing an image
       * @param {Function} callback Callback; invoked with loaded image
       * @param {*} [context] Context to invoke callback in
       * @param {Object} [crossOrigin] crossOrigin value to set image element to
       */
      loadImage: function(t, n, a, i) {
        if (!t) {
          n && n.call(a, t);
          return;
        }
        var l = f.util.createImage(), u = function() {
          n && n.call(a, l, !1), l = l.onload = l.onerror = null;
        };
        l.onload = u, l.onerror = function() {
          f.log("Error loading " + l.src), n && n.call(a, null, !0), l = l.onload = l.onerror = null;
        }, t.indexOf("data") !== 0 && i !== void 0 && i !== null && (l.crossOrigin = i), t.substring(0, 14) === "data:image/svg" && (l.onload = null, f.util.loadImageInDom(l, u)), l.src = t;
      },
      /**
       * Attaches SVG image with data: URL to the dom
       * @memberOf fabric.util
       * @param {Object} img Image object with data:image/svg src
       * @param {Function} callback Callback; invoked with loaded image
       * @return {Object} DOM element (div containing the SVG image)
       */
      loadImageInDom: function(t, n) {
        var a = f.document.createElement("div");
        a.style.width = a.style.height = "1px", a.style.left = a.style.top = "-100%", a.style.position = "absolute", a.appendChild(t), f.document.querySelector("body").appendChild(a), t.onload = function() {
          n(), a.parentNode.removeChild(a), a = null;
        };
      },
      /**
       * Creates corresponding fabric instances from their object representations
       * @static
       * @memberOf fabric.util
       * @param {Array} objects Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * @param {String} namespace Namespace to get klass "Class" object from
       * @param {Function} reviver Method for further parsing of object elements,
       * called after each fabric object created.
       */
      enlivenObjects: function(t, n, a, i) {
        t = t || [];
        var l = [], u = 0, d = t.length;
        function g() {
          ++u === d && n && n(l.filter(function(m) {
            return m;
          }));
        }
        if (!d) {
          n && n(l);
          return;
        }
        t.forEach(function(m, v) {
          if (!m || !m.type) {
            g();
            return;
          }
          var y = f.util.getKlass(m.type, a);
          y.fromObject(m, function(w, M) {
            M || (l[v] = w), i && i(m, w, M), g();
          });
        });
      },
      /**
       * Creates corresponding fabric instances residing in an object, e.g. `clipPath`
       * @see {@link fabric.Object.ENLIVEN_PROPS}
       * @param {Object} object
       * @param {Object} [context] assign enlived props to this object (pass null to skip this)
       * @param {(objects:fabric.Object[]) => void} callback
       */
      enlivenObjectEnlivables: function(t, n, a) {
        var i = f.Object.ENLIVEN_PROPS.filter(function(l) {
          return !!t[l];
        });
        f.util.enlivenObjects(i.map(function(l) {
          return t[l];
        }), function(l) {
          var u = {};
          i.forEach(function(d, g) {
            u[d] = l[g], n && (n[d] = l[g]);
          }), a && a(u);
        });
      },
      /**
       * Create and wait for loading of patterns
       * @static
       * @memberOf fabric.util
       * @param {Array} patterns Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * called after each fabric object created.
       */
      enlivenPatterns: function(t, n) {
        t = t || [];
        function a() {
          ++l === u && n && n(i);
        }
        var i = [], l = 0, u = t.length;
        if (!u) {
          n && n(i);
          return;
        }
        t.forEach(function(d, g) {
          d && d.source ? new f.Pattern(d, function(m) {
            i[g] = m, a();
          }) : (i[g] = d, a());
        });
      },
      /**
       * Groups SVG elements (usually those retrieved from SVG document)
       * @static
       * @memberOf fabric.util
       * @param {Array} elements SVG elements to group
       * @param {Object} [options] Options object
       * @param {String} path Value to set sourcePath to
       * @return {fabric.Object|fabric.Group}
       */
      groupSVGElements: function(t, n, a) {
        var i;
        return t && t.length === 1 ? (typeof a < "u" && (t[0].sourcePath = a), t[0]) : (n && (n.width && n.height ? n.centerPoint = {
          x: n.width / 2,
          y: n.height / 2
        } : (delete n.width, delete n.height)), i = new f.Group(t, n), typeof a < "u" && (i.sourcePath = a), i);
      },
      /**
       * Populates an object with properties of another object
       * @static
       * @memberOf fabric.util
       * @param {Object} source Source object
       * @param {Object} destination Destination object
       * @return {Array} properties Properties names to include
       */
      populateWithProperties: function(t, n, a) {
        if (a && Array.isArray(a))
          for (var i = 0, l = a.length; i < l; i++)
            a[i] in t && (n[a[i]] = t[a[i]]);
      },
      /**
       * Creates canvas element
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      createCanvasElement: function() {
        return f.document.createElement("canvas");
      },
      /**
       * Creates a canvas element that is a copy of another and is also painted
       * @param {CanvasElement} canvas to copy size and content of
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
      copyCanvasElement: function(t) {
        var n = f.util.createCanvasElement();
        return n.width = t.width, n.height = t.height, n.getContext("2d").drawImage(t, 0, 0), n;
      },
      /**
       * since 2.6.0 moved from canvas instance to utility.
       * @param {CanvasElement} canvasEl to copy size and content of
       * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
       * @param {Number} quality <= 1 and > 0
       * @static
       * @memberOf fabric.util
       * @return {String} data url
       */
      toDataURL: function(t, n, a) {
        return t.toDataURL("image/" + n, a);
      },
      /**
       * Creates image element (works on client and node)
       * @static
       * @memberOf fabric.util
       * @return {HTMLImageElement} HTML image element
       */
      createImage: function() {
        return f.document.createElement("img");
      },
      /**
       * Multiply matrix A by matrix B to nest transformations
       * @static
       * @memberOf fabric.util
       * @param  {Array} a First transformMatrix
       * @param  {Array} b Second transformMatrix
       * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
       * @return {Array} The product of the two transform matrices
       */
      multiplyTransformMatrices: function(t, n, a) {
        return [
          t[0] * n[0] + t[2] * n[1],
          t[1] * n[0] + t[3] * n[1],
          t[0] * n[2] + t[2] * n[3],
          t[1] * n[2] + t[3] * n[3],
          a ? 0 : t[0] * n[4] + t[2] * n[5] + t[4],
          a ? 0 : t[1] * n[4] + t[3] * n[5] + t[5]
        ];
      },
      /**
       * Decomposes standard 2x3 matrix into transform components
       * @static
       * @memberOf fabric.util
       * @param  {Array} a transformMatrix
       * @return {Object} Components of transform
       */
      qrDecompose: function(t) {
        var n = h(t[1], t[0]), a = o(t[0], 2) + o(t[1], 2), i = s(a), l = (t[0] * t[3] - t[2] * t[1]) / i, u = h(t[0] * t[2] + t[1] * t[3], a);
        return {
          angle: n / e,
          scaleX: i,
          scaleY: l,
          skewX: u / e,
          skewY: 0,
          translateX: t[4],
          translateY: t[5]
        };
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle] angle in degrees
       * @return {Number[]} transform matrix
       */
      calcRotateMatrix: function(t) {
        if (!t.angle)
          return f.iMatrix.concat();
        var n = f.util.degreesToRadians(t.angle), a = f.util.cos(n), i = f.util.sin(n);
        return [a, i, -i, a, 0, 0];
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet.
       * is called DimensionsTransformMatrix because those properties are the one that influence
       * the size of the resulting box of the object.
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewY]
       * @return {Number[]} transform matrix
       */
      calcDimensionsMatrix: function(t) {
        var n = typeof t.scaleX > "u" ? 1 : t.scaleX, a = typeof t.scaleY > "u" ? 1 : t.scaleY, i = [
          t.flipX ? -n : n,
          0,
          0,
          t.flipY ? -a : a,
          0,
          0
        ], l = f.util.multiplyTransformMatrices, u = f.util.degreesToRadians;
        return t.skewX && (i = l(
          i,
          [1, 0, Math.tan(u(t.skewX)), 1],
          !0
        )), t.skewY && (i = l(
          i,
          [1, Math.tan(u(t.skewY)), 0, 1],
          !0
        )), i;
      },
      /**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle]
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.translateX]
       * @param  {Number} [options.translateY]
       * @return {Number[]} transform matrix
       */
      composeMatrix: function(t) {
        var n = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0], a = f.util.multiplyTransformMatrices;
        return t.angle && (n = a(n, f.util.calcRotateMatrix(t))), (t.scaleX !== 1 || t.scaleY !== 1 || t.skewX || t.skewY || t.flipX || t.flipY) && (n = a(n, f.util.calcDimensionsMatrix(t))), n;
      },
      /**
       * reset an object transform state to neutral. Top and left are not accounted for
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to transform
       */
      resetObjectTransform: function(t) {
        t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0);
      },
      /**
       * Extract Object transform values
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to read from
       * @return {Object} Components of transform
       */
      saveObjectTransform: function(t) {
        return {
          scaleX: t.scaleX,
          scaleY: t.scaleY,
          skewX: t.skewX,
          skewY: t.skewY,
          angle: t.angle,
          left: t.left,
          flipX: t.flipX,
          flipY: t.flipY,
          top: t.top
        };
      },
      /**
       * Returns true if context has transparent pixel
       * at specified location (taking tolerance into account)
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x x coordinate
       * @param {Number} y y coordinate
       * @param {Number} tolerance Tolerance
       */
      isTransparent: function(t, n, a, i) {
        i > 0 && (n > i ? n -= i : n = 0, a > i ? a -= i : a = 0);
        var l = !0, u, d, g = t.getImageData(n, a, i * 2 || 1, i * 2 || 1), m = g.data.length;
        for (u = 3; u < m && (d = g.data[u], l = d <= 0, l !== !1); u += 4)
          ;
        return g = null, l;
      },
      /**
       * Parse preserveAspectRatio attribute from element
       * @param {string} attribute to be parsed
       * @return {Object} an object containing align and meetOrSlice attribute
       */
      parsePreserveAspectRatioAttribute: function(t) {
        var n = "meet", a = "Mid", i = "Mid", l = t.split(" "), u;
        return l && l.length && (n = l.pop(), n !== "meet" && n !== "slice" ? (u = n, n = "meet") : l.length && (u = l.pop())), a = u !== "none" ? u.slice(1, 4) : "none", i = u !== "none" ? u.slice(5, 8) : "none", {
          meetOrSlice: n,
          alignX: a,
          alignY: i
        };
      },
      /**
       * Clear char widths cache for the given font family or all the cache if no
       * fontFamily is specified.
       * Use it if you know you are loading fonts in a lazy way and you are not waiting
       * for custom fonts to load properly when adding text objects to the canvas.
       * If a text object is added when its own font is not loaded yet, you will get wrong
       * measurement and so wrong bounding boxes.
       * After the font cache is cleared, either change the textObject text content or call
       * initDimensions() to trigger a recalculation
       * @memberOf fabric.util
       * @param {String} [fontFamily] font family to clear
       */
      clearFabricFontCache: function(t) {
        t = (t || "").toLowerCase(), t ? f.charWidthsCache[t] && delete f.charWidthsCache[t] : f.charWidthsCache = {};
      },
      /**
       * Given current aspect ratio, determines the max width and height that can
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Number} ar aspect ratio
       * @param {Number} maximumArea Maximum area you want to achieve
       * @return {Object.x} Limited dimensions by X
       * @return {Object.y} Limited dimensions by Y
       */
      limitDimsByArea: function(t, n) {
        var a = Math.sqrt(n * t), i = Math.floor(n / a);
        return { x: Math.floor(a), y: i };
      },
      capValue: function(t, n, a) {
        return Math.max(t, Math.min(n, a));
      },
      /**
       * Finds the scale for the object source to fit inside the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to fit into destination
       */
      findScaleToFit: function(t, n) {
        return Math.min(n.width / t.width, n.height / t.height);
      },
      /**
       * Finds the scale for the object source to cover entirely the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to cover destination
       */
      findScaleToCover: function(t, n) {
        return Math.max(n.width / t.width, n.height / t.height);
      },
      /**
       * given an array of 6 number returns something like `"matrix(...numbers)"`
       * @memberOf fabric.util
       * @param {Array} transform an array with 6 numbers
       * @return {String} transform matrix for svg
       * @return {Object.y} Limited dimensions by Y
       */
      matrixToSVG: function(t) {
        return "matrix(" + t.map(function(n) {
          return f.util.toFixed(n, f.Object.NUM_FRACTION_DIGITS);
        }).join(" ") + ")";
      },
      /**
       * given an object and a transform, apply the inverse transform to the object,
       * this is equivalent to remove from that object that transformation, so that
       * added in a space with the removed transform, the object will be the same as before.
       * Removing from an object a transform that scale by 2 is like scaling it by 1/2.
       * Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg
       * in the opposite direction.
       * This util is used to add objects inside transformed groups or nested groups.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      removeTransformFromObject: function(t, n) {
        var a = f.util.invertTransform(n), i = f.util.multiplyTransformMatrices(a, t.calcOwnMatrix());
        f.util.applyTransformToObject(t, i);
      },
      /**
       * given an object and a transform, apply the transform to the object.
       * this is equivalent to change the space where the object is drawn.
       * Adding to an object a transform that scale by 2 is like scaling it by 2.
       * This is used when removing an object from an active selection for example.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      addTransformToObject: function(t, n) {
        f.util.applyTransformToObject(
          t,
          f.util.multiplyTransformMatrices(n, t.calcOwnMatrix())
        );
      },
      /**
       * discard an object transform state and apply the one from the matrix.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
      applyTransformToObject: function(t, n) {
        var a = f.util.qrDecompose(n), i = new f.Point(a.translateX, a.translateY);
        t.flipX = !1, t.flipY = !1, t.set("scaleX", a.scaleX), t.set("scaleY", a.scaleY), t.skewX = a.skewX, t.skewY = a.skewY, t.angle = a.angle, t.setPositionByOrigin(i, "center", "center");
      },
      /**
       * given a width and height, return the size of the bounding box
       * that can contains the box with width/height with applied transform
       * described in options.
       * Use to calculate the boxes around objects for controls.
       * @memberOf fabric.util
       * @param {Number} width
       * @param {Number} height
       * @param {Object} options
       * @param {Number} options.scaleX
       * @param {Number} options.scaleY
       * @param {Number} options.skewX
       * @param {Number} options.skewY
       * @return {Object.x} width of containing
       * @return {Object.y} height of containing
       */
      sizeAfterTransform: function(t, n, a) {
        var i = t / 2, l = n / 2, u = [
          {
            x: -i,
            y: -l
          },
          {
            x: i,
            y: -l
          },
          {
            x: -i,
            y: l
          },
          {
            x: i,
            y: l
          }
        ], d = f.util.calcDimensionsMatrix(a), g = f.util.makeBoundingBoxFromPoints(u, d);
        return {
          x: g.width,
          y: g.height
        };
      },
      /**
       * Merges 2 clip paths into one visually equal clip path
       *
       * **IMPORTANT**:\
       * Does **NOT** clone the arguments, clone them proir if necessary.
       *
       * Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
       * Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.
       *
       * In order to handle the `inverted` property we follow logic described in the following cases:\
       * **(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
       * **(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
       * **(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.
       *
       * @memberOf fabric.util
       * @param {fabric.Object} c1
       * @param {fabric.Object} c2
       * @returns {fabric.Object} merged clip path
       */
      mergeClipPaths: function(t, n) {
        var a = t, i = n;
        a.inverted && !i.inverted && (a = n, i = t), f.util.applyTransformToObject(
          i,
          f.util.multiplyTransformMatrices(
            f.util.invertTransform(a.calcTransformMatrix()),
            i.calcTransformMatrix()
          )
        );
        var l = a.inverted && i.inverted;
        return l && (a.inverted = i.inverted = !1), new f.Group([a], { clipPath: i, inverted: l });
      },
      /**
       * @memberOf fabric.util
       * @param {Object} prevStyle first style to compare
       * @param {Object} thisStyle second style to compare
       * @param {boolean} forTextSpans whether to check overline, underline, and line-through properties
       * @return {boolean} true if the style changed
       */
      hasStyleChanged: function(t, n, a) {
        return a = a || !1, t.fill !== n.fill || t.stroke !== n.stroke || t.strokeWidth !== n.strokeWidth || t.fontSize !== n.fontSize || t.fontFamily !== n.fontFamily || t.fontWeight !== n.fontWeight || t.fontStyle !== n.fontStyle || t.textBackgroundColor !== n.textBackgroundColor || t.deltaY !== n.deltaY || a && (t.overline !== n.overline || t.underline !== n.underline || t.linethrough !== n.linethrough);
      },
      /**
       * Returns the array form of a text object's inline styles property with styles grouped in ranges
       * rather than per character. This format is less verbose, and is better suited for storage
       * so it is used in serialization (not during runtime).
       * @memberOf fabric.util
       * @param {object} styles per character styles for a text object
       * @param {String} text the text string that the styles are applied to
       * @return {{start: number, end: number, style: object}[]}
       */
      stylesToArray: function(a, n) {
        for (var a = f.util.object.clone(a, !0), i = n.split(`
`), l = -1, u = {}, d = [], g = 0; g < i.length; g++) {
          if (!a[g]) {
            l += i[g].length;
            continue;
          }
          for (var m = 0; m < i[g].length; m++) {
            l++;
            var v = a[g][m];
            if (v && Object.keys(v).length > 0) {
              var y = f.util.hasStyleChanged(u, v, !0);
              y ? d.push({
                start: l,
                end: l + 1,
                style: v
              }) : d[d.length - 1].end++;
            }
            u = v || {};
          }
        }
        return d;
      },
      /**
       * Returns the object form of the styles property with styles that are assigned per
       * character rather than grouped by range. This format is more verbose, and is
       * only used during runtime (not for serialization/storage)
       * @memberOf fabric.util
       * @param {Array} styles the serialized form of a text object's styles
       * @param {String} text the text string that the styles are applied to
       * @return {Object}
       */
      stylesFromArray: function(t, n) {
        if (!Array.isArray(t))
          return t;
        for (var a = n.split(`
`), i = -1, l = 0, u = {}, d = 0; d < a.length; d++)
          for (var g = 0; g < a[d].length; g++)
            i++, t[l] && t[l].start <= i && i < t[l].end && (u[d] = u[d] || {}, u[d][g] = Object.assign({}, t[l].style), i === t[l].end - 1 && l++);
        return u;
      }
    };
  }(Z), function() {
    var c = Array.prototype.join, s = {
      m: 2,
      l: 2,
      h: 1,
      v: 1,
      c: 6,
      s: 4,
      q: 4,
      t: 2,
      a: 7
    }, h = {
      m: "l",
      M: "L"
    };
    function o(p, b, x, S, E, C, _, T, P, F, D) {
      var R = f.util.cos(p), Y = f.util.sin(p), U = f.util.cos(b), k = f.util.sin(b), O = x * E * U - S * C * k + _, I = S * E * U + x * C * k + T, j = F + P * (-x * E * Y - S * C * R), A = D + P * (-S * E * Y + x * C * R), B = O + P * (x * E * k + S * C * U), G = I + P * (S * E * k - x * C * U);
      return [
        "C",
        j,
        A,
        B,
        G,
        O,
        I
      ];
    }
    function e(p, b, x, S, E, C, _) {
      var T = Math.PI, P = _ * T / 180, F = f.util.sin(P), D = f.util.cos(P), R = 0, Y = 0;
      x = Math.abs(x), S = Math.abs(S);
      var U = -D * p * 0.5 - F * b * 0.5, k = -D * b * 0.5 + F * p * 0.5, O = x * x, I = S * S, j = k * k, A = U * U, B = O * I - O * j - I * A, G = 0;
      if (B < 0) {
        var tt = Math.sqrt(1 - B / (O * I));
        x *= tt, S *= tt;
      } else
        G = (E === C ? -1 : 1) * Math.sqrt(B / (O * j + I * A));
      var Q = G * x * k / S, L = -G * S * U / x, $ = D * Q - F * L + p * 0.5, et = F * Q + D * L + b * 0.5, it = r(1, 0, (U - Q) / x, (k - L) / S), nt = r((U - Q) / x, (k - L) / S, (-U - Q) / x, (-k - L) / S);
      C === 0 && nt > 0 ? nt -= 2 * T : C === 1 && nt < 0 && (nt += 2 * T);
      for (var rt = Math.ceil(Math.abs(nt / T * 2)), at = [], st = nt / rt, ut = 8 / 3 * Math.sin(st / 4) * Math.sin(st / 4) / Math.sin(st / 2), dt = it + st, ot = 0; ot < rt; ot++)
        at[ot] = o(it, dt, D, F, x, S, $, et, ut, R, Y), R = at[ot][5], Y = at[ot][6], it = dt, dt += st;
      return at;
    }
    function r(p, b, x, S) {
      var E = Math.atan2(b, p), C = Math.atan2(S, x);
      return C >= E ? C - E : 2 * Math.PI - (E - C);
    }
    function t(p, b, x, S, E, C, _, T) {
      var P;
      if (f.cachesBoundsOfCurve && (P = c.call(arguments), f.boundsOfCurveCache[P]))
        return f.boundsOfCurveCache[P];
      var F = Math.sqrt, D = Math.min, R = Math.max, Y = Math.abs, U = [], k = [[], []], O, I, j, A, B, G, tt, Q;
      I = 6 * p - 12 * x + 6 * E, O = -3 * p + 9 * x - 9 * E + 3 * _, j = 3 * x - 3 * p;
      for (var L = 0; L < 2; ++L) {
        if (L > 0 && (I = 6 * b - 12 * S + 6 * C, O = -3 * b + 9 * S - 9 * C + 3 * T, j = 3 * S - 3 * b), Y(O) < 1e-12) {
          if (Y(I) < 1e-12)
            continue;
          A = -j / I, 0 < A && A < 1 && U.push(A);
          continue;
        }
        tt = I * I - 4 * j * O, !(tt < 0) && (Q = F(tt), B = (-I + Q) / (2 * O), 0 < B && B < 1 && U.push(B), G = (-I - Q) / (2 * O), 0 < G && G < 1 && U.push(G));
      }
      for (var $, et, it = U.length, nt = it, rt; it--; )
        A = U[it], rt = 1 - A, $ = rt * rt * rt * p + 3 * rt * rt * A * x + 3 * rt * A * A * E + A * A * A * _, k[0][it] = $, et = rt * rt * rt * b + 3 * rt * rt * A * S + 3 * rt * A * A * C + A * A * A * T, k[1][it] = et;
      k[0][nt] = p, k[1][nt] = b, k[0][nt + 1] = _, k[1][nt + 1] = T;
      var at = [
        {
          x: D.apply(null, k[0]),
          y: D.apply(null, k[1])
        },
        {
          x: R.apply(null, k[0]),
          y: R.apply(null, k[1])
        }
      ];
      return f.cachesBoundsOfCurve && (f.boundsOfCurveCache[P] = at), at;
    }
    function n(p, b, x) {
      for (var S = x[1], E = x[2], C = x[3], _ = x[4], T = x[5], P = x[6], F = x[7], D = e(P - p, F - b, S, E, _, T, C), R = 0, Y = D.length; R < Y; R++)
        D[R][1] += p, D[R][2] += b, D[R][3] += p, D[R][4] += b, D[R][5] += p, D[R][6] += b;
      return D;
    }
    function a(p) {
      var b = 0, x = 0, S = p.length, E = 0, C = 0, _, T, P, F = [], D, R, Y;
      for (T = 0; T < S; ++T) {
        switch (P = !1, _ = p[T].slice(0), _[0]) {
          case "l":
            _[0] = "L", _[1] += b, _[2] += x;
          case "L":
            b = _[1], x = _[2];
            break;
          case "h":
            _[1] += b;
          case "H":
            _[0] = "L", _[2] = x, b = _[1];
            break;
          case "v":
            _[1] += x;
          case "V":
            _[0] = "L", x = _[1], _[1] = b, _[2] = x;
            break;
          case "m":
            _[0] = "M", _[1] += b, _[2] += x;
          case "M":
            b = _[1], x = _[2], E = _[1], C = _[2];
            break;
          case "c":
            _[0] = "C", _[1] += b, _[2] += x, _[3] += b, _[4] += x, _[5] += b, _[6] += x;
          case "C":
            R = _[3], Y = _[4], b = _[5], x = _[6];
            break;
          case "s":
            _[0] = "S", _[1] += b, _[2] += x, _[3] += b, _[4] += x;
          case "S":
            D === "C" ? (R = 2 * b - R, Y = 2 * x - Y) : (R = b, Y = x), b = _[3], x = _[4], _[0] = "C", _[5] = _[3], _[6] = _[4], _[3] = _[1], _[4] = _[2], _[1] = R, _[2] = Y, R = _[3], Y = _[4];
            break;
          case "q":
            _[0] = "Q", _[1] += b, _[2] += x, _[3] += b, _[4] += x;
          case "Q":
            R = _[1], Y = _[2], b = _[3], x = _[4];
            break;
          case "t":
            _[0] = "T", _[1] += b, _[2] += x;
          case "T":
            D === "Q" ? (R = 2 * b - R, Y = 2 * x - Y) : (R = b, Y = x), _[0] = "Q", b = _[1], x = _[2], _[1] = R, _[2] = Y, _[3] = b, _[4] = x;
            break;
          case "a":
            _[0] = "A", _[6] += b, _[7] += x;
          case "A":
            P = !0, F = F.concat(n(b, x, _)), b = _[6], x = _[7];
            break;
          case "z":
          case "Z":
            b = E, x = C;
            break;
        }
        P || F.push(_), D = _[0];
      }
      return F;
    }
    function i(p, b, x, S) {
      return Math.sqrt((x - p) * (x - p) + (S - b) * (S - b));
    }
    function l(p) {
      return p * p * p;
    }
    function u(p) {
      return 3 * p * p * (1 - p);
    }
    function d(p) {
      return 3 * p * (1 - p) * (1 - p);
    }
    function g(p) {
      return (1 - p) * (1 - p) * (1 - p);
    }
    function m(p, b, x, S, E, C, _, T) {
      return function(P) {
        var F = l(P), D = u(P), R = d(P), Y = g(P);
        return {
          x: _ * F + E * D + x * R + p * Y,
          y: T * F + C * D + S * R + b * Y
        };
      };
    }
    function v(p, b, x, S, E, C, _, T) {
      return function(P) {
        var F = 1 - P, D = 3 * F * F * (x - p) + 6 * F * P * (E - x) + 3 * P * P * (_ - E), R = 3 * F * F * (S - b) + 6 * F * P * (C - S) + 3 * P * P * (T - C);
        return Math.atan2(R, D);
      };
    }
    function y(p) {
      return p * p;
    }
    function w(p) {
      return 2 * p * (1 - p);
    }
    function M(p) {
      return (1 - p) * (1 - p);
    }
    function X(p, b, x, S, E, C) {
      return function(_) {
        var T = y(_), P = w(_), F = M(_);
        return {
          x: E * T + x * P + p * F,
          y: C * T + S * P + b * F
        };
      };
    }
    function W(p, b, x, S, E, C) {
      return function(_) {
        var T = 1 - _, P = 2 * T * (x - p) + 2 * _ * (E - x), F = 2 * T * (S - b) + 2 * _ * (C - S);
        return Math.atan2(F, P);
      };
    }
    function V(p, b, x) {
      var S = { x: b, y: x }, E, C = 0, _;
      for (_ = 1; _ <= 100; _ += 1)
        E = p(_ / 100), C += i(S.x, S.y, E.x, E.y), S = E;
      return C;
    }
    function N(p, b) {
      for (var x = 0, S = 0, E = p.iterator, C = { x: p.x, y: p.y }, _, T, P = 0.01, F = p.angleFinder, D; S < b && P > 1e-4; )
        _ = E(x), D = x, T = i(C.x, C.y, _.x, _.y), T + S > b ? (x -= P, P /= 2) : (C = _, x += P, S += T);
      return _.angle = F(D), _;
    }
    function H(p) {
      for (var b = 0, x = p.length, S, E = 0, C = 0, _ = 0, T = 0, P = [], F, D, R, Y = 0; Y < x; Y++) {
        switch (S = p[Y], D = {
          x: E,
          y: C,
          command: S[0]
        }, S[0]) {
          case "M":
            D.length = 0, _ = E = S[1], T = C = S[2];
            break;
          case "L":
            D.length = i(E, C, S[1], S[2]), E = S[1], C = S[2];
            break;
          case "C":
            F = m(
              E,
              C,
              S[1],
              S[2],
              S[3],
              S[4],
              S[5],
              S[6]
            ), R = v(
              E,
              C,
              S[1],
              S[2],
              S[3],
              S[4],
              S[5],
              S[6]
            ), D.iterator = F, D.angleFinder = R, D.length = V(F, E, C), E = S[5], C = S[6];
            break;
          case "Q":
            F = X(
              E,
              C,
              S[1],
              S[2],
              S[3],
              S[4]
            ), R = W(
              E,
              C,
              S[1],
              S[2],
              S[3],
              S[4]
            ), D.iterator = F, D.angleFinder = R, D.length = V(F, E, C), E = S[3], C = S[4];
            break;
          case "Z":
          case "z":
            D.destX = _, D.destY = T, D.length = i(E, C, _, T), E = _, C = T;
            break;
        }
        b += D.length, P.push(D);
      }
      return P.push({ length: b, x: E, y: C }), P;
    }
    function z(p, b, x) {
      x || (x = H(p));
      for (var S = 0; b - x[S].length > 0 && S < x.length - 2; )
        b -= x[S].length, S++;
      var E = x[S], C = b / E.length, _ = E.command, T = p[S], P;
      switch (_) {
        case "M":
          return { x: E.x, y: E.y, angle: 0 };
        case "Z":
        case "z":
          return P = new f.Point(E.x, E.y).lerp(
            new f.Point(E.destX, E.destY),
            C
          ), P.angle = Math.atan2(E.destY - E.y, E.destX - E.x), P;
        case "L":
          return P = new f.Point(E.x, E.y).lerp(
            new f.Point(T[1], T[2]),
            C
          ), P.angle = Math.atan2(T[2] - E.y, T[1] - E.x), P;
        case "C":
          return N(E, b);
        case "Q":
          return N(E, b);
      }
    }
    function q(p) {
      var b = [], x = [], S, E, C = f.rePathCommand, _ = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", T = "(" + _ + ")" + f.commaWsp, P = "([01])" + f.commaWsp + "?", F = T + "?" + T + "?" + T + P + P + T + "?(" + _ + ")", D = new RegExp(F, "g"), R, Y, U;
      if (!p || !p.match)
        return b;
      U = p.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);
      for (var k = 0, O, I = U.length; k < I; k++) {
        S = U[k], Y = S.slice(1).trim(), x.length = 0;
        var j = S.charAt(0);
        if (O = [j], j.toLowerCase() === "a")
          for (var A; A = D.exec(Y); )
            for (var B = 1; B < A.length; B++)
              x.push(A[B]);
        else
          for (; R = C.exec(Y); )
            x.push(R[0]);
        for (var B = 0, G = x.length; B < G; B++)
          E = parseFloat(x[B]), isNaN(E) || O.push(E);
        var tt = s[j.toLowerCase()], Q = h[j] || j;
        if (O.length - 1 > tt)
          for (var L = 1, $ = O.length; L < $; L += tt)
            b.push([j].concat(O.slice(L, L + tt))), j = Q;
        else
          b.push(O);
      }
      return b;
    }
    function J(p, b) {
      var x = [], S, E = new f.Point(p[0].x, p[0].y), C = new f.Point(p[1].x, p[1].y), _ = p.length, T = 1, P = 0, F = _ > 2;
      for (b = b || 0, F && (T = p[2].x < C.x ? -1 : p[2].x === C.x ? 0 : 1, P = p[2].y < C.y ? -1 : p[2].y === C.y ? 0 : 1), x.push(["M", E.x - T * b, E.y - P * b]), S = 1; S < _; S++) {
        if (!E.eq(C)) {
          var D = E.midPointFrom(C);
          x.push(["Q", E.x, E.y, D.x, D.y]);
        }
        E = p[S], S + 1 < p.length && (C = p[S + 1]);
      }
      return F && (T = E.x > p[S - 2].x ? 1 : E.x === p[S - 2].x ? 0 : -1, P = E.y > p[S - 2].y ? 1 : E.y === p[S - 2].y ? 0 : -1), x.push(["L", E.x + T * b, E.y + P * b]), x;
    }
    function K(p, b, x) {
      return x && (b = f.util.multiplyTransformMatrices(
        b,
        [1, 0, 0, 1, -x.x, -x.y]
      )), p.map(function(S) {
        for (var E = S.slice(0), C = {}, _ = 1; _ < S.length - 1; _ += 2)
          C.x = S[_], C.y = S[_ + 1], C = f.util.transformPoint(C, b), E[_] = C.x, E[_ + 1] = C.y;
        return E;
      });
    }
    f.util.joinPath = function(p) {
      return p.map(function(b) {
        return b.join(" ");
      }).join(" ");
    }, f.util.parsePath = q, f.util.makePathSimpler = a, f.util.getSmoothPathFromPoints = J, f.util.getPathSegmentsInfo = H, f.util.getBoundsOfCurve = t, f.util.getPointOnPath = z, f.util.transformPath = K;
  }(), function() {
    var c = Array.prototype.slice;
    function s(t, n) {
      for (var a = c.call(arguments, 2), i = [], l = 0, u = t.length; l < u; l++)
        i[l] = a.length ? t[l][n].apply(t[l], a) : t[l][n].call(t[l]);
      return i;
    }
    function h(t, n) {
      return r(t, n, function(a, i) {
        return a >= i;
      });
    }
    function o(t, n) {
      return r(t, n, function(a, i) {
        return a < i;
      });
    }
    function e(t, n) {
      for (var a = t.length; a--; )
        t[a] = n;
      return t;
    }
    function r(t, n, a) {
      if (!(!t || t.length === 0)) {
        var i = t.length - 1, l = n ? t[i][n] : t[i];
        if (n)
          for (; i--; )
            a(t[i][n], l) && (l = t[i][n]);
        else
          for (; i--; )
            a(t[i], l) && (l = t[i]);
        return l;
      }
    }
    f.util.array = {
      fill: e,
      invoke: s,
      min: o,
      max: h
    };
  }(), function() {
    function c(h, o, e) {
      if (e)
        if (!f.isLikelyNode && o instanceof Element)
          h = o;
        else if (o instanceof Array) {
          h = [];
          for (var r = 0, t = o.length; r < t; r++)
            h[r] = c({}, o[r], e);
        } else if (o && typeof o == "object")
          for (var n in o)
            n === "canvas" || n === "group" ? h[n] = null : o.hasOwnProperty(n) && (h[n] = c({}, o[n], e));
        else
          h = o;
      else
        for (var n in o)
          h[n] = o[n];
      return h;
    }
    function s(h, o) {
      return c({}, h, o);
    }
    f.util.object = {
      extend: c,
      clone: s
    }, f.util.object.extend(f.util, f.Observable);
  }(), function() {
    function c(r) {
      return r.replace(/-+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : "";
      });
    }
    function s(r, t) {
      return r.charAt(0).toUpperCase() + (t ? r.slice(1) : r.slice(1).toLowerCase());
    }
    function h(r) {
      return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function o(r) {
      var t = 0, n, a = [];
      for (t = 0, n; t < r.length; t++)
        (n = e(r, t)) !== !1 && a.push(n);
      return a;
    }
    function e(r, t) {
      var n = r.charCodeAt(t);
      if (isNaN(n))
        return "";
      if (n < 55296 || n > 57343)
        return r.charAt(t);
      if (55296 <= n && n <= 56319) {
        if (r.length <= t + 1)
          throw "High surrogate without following low surrogate";
        var a = r.charCodeAt(t + 1);
        if (56320 > a || a > 57343)
          throw "High surrogate without following low surrogate";
        return r.charAt(t) + r.charAt(t + 1);
      }
      if (t === 0)
        throw "Low surrogate without preceding high surrogate";
      var i = r.charCodeAt(t - 1);
      if (55296 > i || i > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    f.util.string = {
      camelize: c,
      capitalize: s,
      escapeXml: h,
      graphemeSplit: o
    };
  }(), function() {
    var c = Array.prototype.slice, s = function() {
    }, h = function() {
      for (var n in { toString: 1 })
        if (n === "toString")
          return !1;
      return !0;
    }(), o = function(n, a, i) {
      for (var l in a)
        l in n.prototype && typeof n.prototype[l] == "function" && (a[l] + "").indexOf("callSuper") > -1 ? n.prototype[l] = /* @__PURE__ */ function(u) {
          return function() {
            var d = this.constructor.superclass;
            this.constructor.superclass = i;
            var g = a[u].apply(this, arguments);
            if (this.constructor.superclass = d, u !== "initialize")
              return g;
          };
        }(l) : n.prototype[l] = a[l], h && (a.toString !== Object.prototype.toString && (n.prototype.toString = a.toString), a.valueOf !== Object.prototype.valueOf && (n.prototype.valueOf = a.valueOf));
    };
    function e() {
    }
    function r(n) {
      for (var a = null, i = this; i.constructor.superclass; ) {
        var l = i.constructor.superclass.prototype[n];
        if (i[n] !== l) {
          a = l;
          break;
        }
        i = i.constructor.superclass.prototype;
      }
      return a ? arguments.length > 1 ? a.apply(this, c.call(arguments, 1)) : a.call(this) : console.log("tried to callSuper " + n + ", method not found in prototype chain", this);
    }
    function t() {
      var n = null, a = c.call(arguments, 0);
      typeof a[0] == "function" && (n = a.shift());
      function i() {
        this.initialize.apply(this, arguments);
      }
      i.superclass = n, i.subclasses = [], n && (e.prototype = n.prototype, i.prototype = new e(), n.subclasses.push(i));
      for (var l = 0, u = a.length; l < u; l++)
        o(i, a[l], n);
      return i.prototype.initialize || (i.prototype.initialize = s), i.prototype.constructor = i, i.prototype.callSuper = r, i;
    }
    f.util.createClass = t;
  }(), function() {
    var c = !!f.document.createElement("div").attachEvent, s = ["touchstart", "touchmove", "touchend"];
    f.util.addListener = function(o, e, r, t) {
      o && o.addEventListener(e, r, c ? !1 : t);
    }, f.util.removeListener = function(o, e, r, t) {
      o && o.removeEventListener(e, r, c ? !1 : t);
    };
    function h(o) {
      var e = o.changedTouches;
      return e && e[0] ? e[0] : o;
    }
    f.util.getPointer = function(o) {
      var e = o.target, r = f.util.getScrollLeftTop(e), t = h(o);
      return {
        x: t.clientX + r.left,
        y: t.clientY + r.top
      };
    }, f.util.isTouchEvent = function(o) {
      return s.indexOf(o.type) > -1 || o.pointerType === "touch";
    };
  }(), function() {
    function c(t, n) {
      var a = t.style;
      if (!a)
        return t;
      if (typeof n == "string")
        return t.style.cssText += ";" + n, n.indexOf("opacity") > -1 ? r(t, n.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
      for (var i in n)
        if (i === "opacity")
          r(t, n[i]);
        else {
          var l = i === "float" || i === "cssFloat" ? typeof a.styleFloat > "u" ? "cssFloat" : "styleFloat" : i;
          a.setProperty(l, n[i]);
        }
      return t;
    }
    var s = f.document.createElement("div"), h = typeof s.style.opacity == "string", o = typeof s.style.filter == "string", e = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, r = function(t) {
      return t;
    };
    h ? r = function(t, n) {
      return t.style.opacity = n, t;
    } : o && (r = function(t, n) {
      var a = t.style;
      return t.currentStyle && !t.currentStyle.hasLayout && (a.zoom = 1), e.test(a.filter) ? (n = n >= 0.9999 ? "" : "alpha(opacity=" + n * 100 + ")", a.filter = a.filter.replace(e, n)) : a.filter += " alpha(opacity=" + n * 100 + ")", t;
    }), f.util.setStyle = c;
  }(), function() {
    var c = Array.prototype.slice;
    function s(g) {
      return typeof g == "string" ? f.document.getElementById(g) : g;
    }
    var h, o = function(g) {
      return c.call(g, 0);
    };
    try {
      h = o(f.document.childNodes) instanceof Array;
    } catch {
    }
    h || (o = function(g) {
      for (var m = new Array(g.length), v = g.length; v--; )
        m[v] = g[v];
      return m;
    });
    function e(g, m) {
      var v = f.document.createElement(g);
      for (var y in m)
        y === "class" ? v.className = m[y] : y === "for" ? v.htmlFor = m[y] : v.setAttribute(y, m[y]);
      return v;
    }
    function r(g, m) {
      g && (" " + g.className + " ").indexOf(" " + m + " ") === -1 && (g.className += (g.className ? " " : "") + m);
    }
    function t(g, m, v) {
      return typeof m == "string" && (m = e(m, v)), g.parentNode && g.parentNode.replaceChild(m, g), m.appendChild(g), m;
    }
    function n(g) {
      for (var m = 0, v = 0, y = f.document.documentElement, w = f.document.body || {
        scrollLeft: 0,
        scrollTop: 0
      }; g && (g.parentNode || g.host) && (g = g.parentNode || g.host, g === f.document ? (m = w.scrollLeft || y.scrollLeft || 0, v = w.scrollTop || y.scrollTop || 0) : (m += g.scrollLeft || 0, v += g.scrollTop || 0), !(g.nodeType === 1 && g.style.position === "fixed")); )
        ;
      return { left: m, top: v };
    }
    function a(g) {
      var m, v = g && g.ownerDocument, y = { left: 0, top: 0 }, w = { left: 0, top: 0 }, M, X = {
        borderLeftWidth: "left",
        borderTopWidth: "top",
        paddingLeft: "left",
        paddingTop: "top"
      };
      if (!v)
        return w;
      for (var W in X)
        w[X[W]] += parseInt(i(g, W), 10) || 0;
      return m = v.documentElement, typeof g.getBoundingClientRect < "u" && (y = g.getBoundingClientRect()), M = n(g), {
        left: y.left + M.left - (m.clientLeft || 0) + w.left,
        top: y.top + M.top - (m.clientTop || 0) + w.top
      };
    }
    var i;
    f.document.defaultView && f.document.defaultView.getComputedStyle ? i = function(g, m) {
      var v = f.document.defaultView.getComputedStyle(g, null);
      return v ? v[m] : void 0;
    } : i = function(g, m) {
      var v = g.style[m];
      return !v && g.currentStyle && (v = g.currentStyle[m]), v;
    }, function() {
      var g = f.document.documentElement.style, m = "userSelect" in g ? "userSelect" : "MozUserSelect" in g ? "MozUserSelect" : "WebkitUserSelect" in g ? "WebkitUserSelect" : "KhtmlUserSelect" in g ? "KhtmlUserSelect" : "";
      function v(w) {
        return typeof w.onselectstart < "u" && (w.onselectstart = f.util.falseFunction), m ? w.style[m] = "none" : typeof w.unselectable == "string" && (w.unselectable = "on"), w;
      }
      function y(w) {
        return typeof w.onselectstart < "u" && (w.onselectstart = null), m ? w.style[m] = "" : typeof w.unselectable == "string" && (w.unselectable = ""), w;
      }
      f.util.makeElementUnselectable = v, f.util.makeElementSelectable = y;
    }();
    function l(g) {
      var m = f.jsdomImplForWrapper(g);
      return m._canvas || m._image;
    }
    function u(g) {
      if (f.isLikelyNode) {
        var m = f.jsdomImplForWrapper(g);
        m && (m._image = null, m._canvas = null, m._currentSrc = null, m._attributes = null, m._classList = null);
      }
    }
    function d(g, m) {
      g.imageSmoothingEnabled = g.imageSmoothingEnabled || g.webkitImageSmoothingEnabled || g.mozImageSmoothingEnabled || g.msImageSmoothingEnabled || g.oImageSmoothingEnabled, g.imageSmoothingEnabled = m;
    }
    f.util.setImageSmoothing = d, f.util.getById = s, f.util.toArray = o, f.util.addClass = r, f.util.makeElement = e, f.util.wrapElement = t, f.util.getScrollLeftTop = n, f.util.getElementOffset = a, f.util.getNodeCanvas = l, f.util.cleanUpJsdomNode = u;
  }(), function() {
    function c(o, e) {
      return o + (/\?/.test(o) ? "&" : "?") + e;
    }
    function s() {
    }
    function h(o, e) {
      e || (e = {});
      var r = e.method ? e.method.toUpperCase() : "GET", t = e.onComplete || function() {
      }, n = new f.window.XMLHttpRequest(), a = e.body || e.parameters;
      return n.onreadystatechange = function() {
        n.readyState === 4 && (t(n), n.onreadystatechange = s);
      }, r === "GET" && (a = null, typeof e.parameters == "string" && (o = c(o, e.parameters))), n.open(r, o, !0), (r === "POST" || r === "PUT") && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(a), n;
    }
    f.util.request = h;
  }(), f.log = console.log, f.warn = console.warn, function() {
    var c = f.util.object.extend, s = f.util.object.clone, h = [];
    f.util.object.extend(h, {
      /**
       * cancel all running animations at the next requestAnimFrame
       * @returns {AnimationContext[]}
       */
      cancelAll: function() {
        var l = this.splice(0);
        return l.forEach(function(u) {
          u.cancel();
        }), l;
      },
      /**
       * cancel all running animations attached to canvas at the next requestAnimFrame
       * @param {fabric.Canvas} canvas
       * @returns {AnimationContext[]}
       */
      cancelByCanvas: function(l) {
        if (!l)
          return [];
        var u = this.filter(function(d) {
          return typeof d.target == "object" && d.target.canvas === l;
        });
        return u.forEach(function(d) {
          d.cancel();
        }), u;
      },
      /**
       * cancel all running animations for target at the next requestAnimFrame
       * @param {*} target
       * @returns {AnimationContext[]}
       */
      cancelByTarget: function(l) {
        var u = this.findAnimationsByTarget(l);
        return u.forEach(function(d) {
          d.cancel();
        }), u;
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {number}
       */
      findAnimationIndex: function(l) {
        return this.indexOf(this.findAnimation(l));
      },
      /**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {AnimationContext | undefined} animation's options object
       */
      findAnimation: function(l) {
        return this.find(function(u) {
          return u.cancel === l;
        });
      },
      /**
       *
       * @param {*} target the object that is assigned to the target property of the animation context
       * @returns {AnimationContext[]} array of animation options object associated with target
       */
      findAnimationsByTarget: function(l) {
        return l ? this.filter(function(u) {
          return u.target === l;
        }) : [];
      }
    });
    function o() {
      return !1;
    }
    function e(l, u, d, g) {
      return -d * Math.cos(l / g * (Math.PI / 2)) + d + u;
    }
    function r(l) {
      l || (l = {});
      var u = !1, d, g = function() {
        var m = f.runningAnimations.indexOf(d);
        return m > -1 && f.runningAnimations.splice(m, 1)[0];
      };
      return d = c(s(l), {
        cancel: function() {
          return u = !0, g();
        },
        currentValue: "startValue" in l ? l.startValue : 0,
        completionRate: 0,
        durationRate: 0
      }), f.runningAnimations.push(d), a(function(m) {
        var v = m || +/* @__PURE__ */ new Date(), y = l.duration || 500, w = v + y, M, X = l.onChange || o, W = l.abort || o, V = l.onComplete || o, N = l.easing || e, H = "startValue" in l ? l.startValue.length > 0 : !1, z = "startValue" in l ? l.startValue : 0, q = "endValue" in l ? l.endValue : 100, J = l.byValue || (H ? z.map(function(K, p) {
          return q[p] - z[p];
        }) : q - z);
        l.onStart && l.onStart(), function K(p) {
          M = p || +/* @__PURE__ */ new Date();
          var b = M > w ? y : M - v, x = b / y, S = H ? z.map(function(C, _) {
            return N(b, z[_], J[_], y);
          }) : N(b, z, J, y), E = Math.abs(H ? (S[0] - z[0]) / J[0] : (S - z) / J);
          if (d.currentValue = H ? S.slice() : S, d.completionRate = E, d.durationRate = x, !u) {
            if (W(S, E, x)) {
              g();
              return;
            }
            if (M > w) {
              d.currentValue = H ? q.slice() : q, d.completionRate = 1, d.durationRate = 1, X(H ? q.slice() : q, 1, 1), V(q, 1, 1), g();
              return;
            } else
              X(S, E, x), a(K);
          }
        }(v);
      }), d.cancel;
    }
    var t = f.window.requestAnimationFrame || f.window.webkitRequestAnimationFrame || f.window.mozRequestAnimationFrame || f.window.oRequestAnimationFrame || f.window.msRequestAnimationFrame || function(l) {
      return f.window.setTimeout(l, 1e3 / 60);
    }, n = f.window.cancelAnimationFrame || f.window.clearTimeout;
    function a() {
      return t.apply(f.window, arguments);
    }
    function i() {
      return n.apply(f.window, arguments);
    }
    f.util.animate = r, f.util.requestAnimFrame = a, f.util.cancelAnimFrame = i, f.runningAnimations = h;
  }(), function() {
    function c(h, o, e) {
      var r = "rgba(" + parseInt(h[0] + e * (o[0] - h[0]), 10) + "," + parseInt(h[1] + e * (o[1] - h[1]), 10) + "," + parseInt(h[2] + e * (o[2] - h[2]), 10);
      return r += "," + (h && o ? parseFloat(h[3] + e * (o[3] - h[3])) : 1), r += ")", r;
    }
    function s(h, o, e, r) {
      var t = new f.Color(h).getSource(), n = new f.Color(o).getSource(), a = r.onComplete, i = r.onChange;
      return r = r || {}, f.util.animate(f.util.object.extend(r, {
        duration: e || 500,
        startValue: t,
        endValue: n,
        byValue: n,
        easing: function(l, u, d, g) {
          var m = r.colorEasing ? r.colorEasing(l, g) : 1 - Math.cos(l / g * (Math.PI / 2));
          return c(u, d, m);
        },
        // has to take in account for color restoring;
        onComplete: function(l, u, d) {
          if (a)
            return a(
              c(n, n, 0),
              u,
              d
            );
        },
        onChange: function(l, u, d) {
          if (i) {
            if (Array.isArray(l))
              return i(
                c(l, l, 0),
                u,
                d
              );
            i(l, u, d);
          }
        }
      }));
    }
    f.util.animateColor = s;
  }(), function() {
    function c(p, b, x, S) {
      return p < Math.abs(b) ? (p = b, S = x / 4) : b === 0 && p === 0 ? S = x / (2 * Math.PI) * Math.asin(1) : S = x / (2 * Math.PI) * Math.asin(b / p), { a: p, c: b, p: x, s: S };
    }
    function s(p, b, x) {
      return p.a * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * x - p.s) * (2 * Math.PI) / p.p);
    }
    function h(p, b, x, S) {
      return x * ((p = p / S - 1) * p * p + 1) + b;
    }
    function o(p, b, x, S) {
      return p /= S / 2, p < 1 ? x / 2 * p * p * p + b : x / 2 * ((p -= 2) * p * p + 2) + b;
    }
    function e(p, b, x, S) {
      return x * (p /= S) * p * p * p + b;
    }
    function r(p, b, x, S) {
      return -x * ((p = p / S - 1) * p * p * p - 1) + b;
    }
    function t(p, b, x, S) {
      return p /= S / 2, p < 1 ? x / 2 * p * p * p * p + b : -x / 2 * ((p -= 2) * p * p * p - 2) + b;
    }
    function n(p, b, x, S) {
      return x * (p /= S) * p * p * p * p + b;
    }
    function a(p, b, x, S) {
      return x * ((p = p / S - 1) * p * p * p * p + 1) + b;
    }
    function i(p, b, x, S) {
      return p /= S / 2, p < 1 ? x / 2 * p * p * p * p * p + b : x / 2 * ((p -= 2) * p * p * p * p + 2) + b;
    }
    function l(p, b, x, S) {
      return -x * Math.cos(p / S * (Math.PI / 2)) + x + b;
    }
    function u(p, b, x, S) {
      return x * Math.sin(p / S * (Math.PI / 2)) + b;
    }
    function d(p, b, x, S) {
      return -x / 2 * (Math.cos(Math.PI * p / S) - 1) + b;
    }
    function g(p, b, x, S) {
      return p === 0 ? b : x * Math.pow(2, 10 * (p / S - 1)) + b;
    }
    function m(p, b, x, S) {
      return p === S ? b + x : x * (-Math.pow(2, -10 * p / S) + 1) + b;
    }
    function v(p, b, x, S) {
      return p === 0 ? b : p === S ? b + x : (p /= S / 2, p < 1 ? x / 2 * Math.pow(2, 10 * (p - 1)) + b : x / 2 * (-Math.pow(2, -10 * --p) + 2) + b);
    }
    function y(p, b, x, S) {
      return -x * (Math.sqrt(1 - (p /= S) * p) - 1) + b;
    }
    function w(p, b, x, S) {
      return x * Math.sqrt(1 - (p = p / S - 1) * p) + b;
    }
    function M(p, b, x, S) {
      return p /= S / 2, p < 1 ? -x / 2 * (Math.sqrt(1 - p * p) - 1) + b : x / 2 * (Math.sqrt(1 - (p -= 2) * p) + 1) + b;
    }
    function X(p, b, x, S) {
      var E = 1.70158, C = 0, _ = x;
      if (p === 0)
        return b;
      if (p /= S, p === 1)
        return b + x;
      C || (C = S * 0.3);
      var T = c(_, x, C, E);
      return -s(T, p, S) + b;
    }
    function W(p, b, x, S) {
      var E = 1.70158, C = 0, _ = x;
      if (p === 0)
        return b;
      if (p /= S, p === 1)
        return b + x;
      C || (C = S * 0.3);
      var T = c(_, x, C, E);
      return T.a * Math.pow(2, -10 * p) * Math.sin((p * S - T.s) * (2 * Math.PI) / T.p) + T.c + b;
    }
    function V(p, b, x, S) {
      var E = 1.70158, C = 0, _ = x;
      if (p === 0)
        return b;
      if (p /= S / 2, p === 2)
        return b + x;
      C || (C = S * (0.3 * 1.5));
      var T = c(_, x, C, E);
      return p < 1 ? -0.5 * s(T, p, S) + b : T.a * Math.pow(2, -10 * (p -= 1)) * Math.sin((p * S - T.s) * (2 * Math.PI) / T.p) * 0.5 + T.c + b;
    }
    function N(p, b, x, S, E) {
      return E === void 0 && (E = 1.70158), x * (p /= S) * p * ((E + 1) * p - E) + b;
    }
    function H(p, b, x, S, E) {
      return E === void 0 && (E = 1.70158), x * ((p = p / S - 1) * p * ((E + 1) * p + E) + 1) + b;
    }
    function z(p, b, x, S, E) {
      return E === void 0 && (E = 1.70158), p /= S / 2, p < 1 ? x / 2 * (p * p * (((E *= 1.525) + 1) * p - E)) + b : x / 2 * ((p -= 2) * p * (((E *= 1.525) + 1) * p + E) + 2) + b;
    }
    function q(p, b, x, S) {
      return x - J(S - p, 0, x, S) + b;
    }
    function J(p, b, x, S) {
      return (p /= S) < 1 / 2.75 ? x * (7.5625 * p * p) + b : p < 2 / 2.75 ? x * (7.5625 * (p -= 1.5 / 2.75) * p + 0.75) + b : p < 2.5 / 2.75 ? x * (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375) + b : x * (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375) + b;
    }
    function K(p, b, x, S) {
      return p < S / 2 ? q(p * 2, 0, x, S) * 0.5 + b : J(p * 2 - S, 0, x, S) * 0.5 + x * 0.5 + b;
    }
    f.util.ease = {
      /**
       * Quadratic easing in
       * @memberOf fabric.util.ease
       */
      easeInQuad: function(p, b, x, S) {
        return x * (p /= S) * p + b;
      },
      /**
       * Quadratic easing out
       * @memberOf fabric.util.ease
       */
      easeOutQuad: function(p, b, x, S) {
        return -x * (p /= S) * (p - 2) + b;
      },
      /**
       * Quadratic easing in and out
       * @memberOf fabric.util.ease
       */
      easeInOutQuad: function(p, b, x, S) {
        return p /= S / 2, p < 1 ? x / 2 * p * p + b : -x / 2 * (--p * (p - 2) - 1) + b;
      },
      /**
       * Cubic easing in
       * @memberOf fabric.util.ease
       */
      easeInCubic: function(p, b, x, S) {
        return x * (p /= S) * p * p + b;
      },
      easeOutCubic: h,
      easeInOutCubic: o,
      easeInQuart: e,
      easeOutQuart: r,
      easeInOutQuart: t,
      easeInQuint: n,
      easeOutQuint: a,
      easeInOutQuint: i,
      easeInSine: l,
      easeOutSine: u,
      easeInOutSine: d,
      easeInExpo: g,
      easeOutExpo: m,
      easeInOutExpo: v,
      easeInCirc: y,
      easeOutCirc: w,
      easeInOutCirc: M,
      easeInElastic: X,
      easeOutElastic: W,
      easeInOutElastic: V,
      easeInBack: N,
      easeOutBack: H,
      easeInOutBack: z,
      easeInBounce: q,
      easeOutBounce: J,
      easeInOutBounce: K
    };
  }(), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, e = s.util.toFixed, r = s.util.parseUnit, t = s.util.multiplyTransformMatrices, n = [
      "path",
      "circle",
      "polygon",
      "polyline",
      "ellipse",
      "rect",
      "line",
      "image",
      "text"
    ], a = ["symbol", "image", "marker", "pattern", "view", "svg"], i = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"], l = ["symbol", "g", "a", "svg", "clipPath", "defs"], u = {
      cx: "left",
      x: "left",
      r: "radius",
      cy: "top",
      y: "top",
      display: "visible",
      visibility: "visible",
      transform: "transformMatrix",
      "fill-opacity": "fillOpacity",
      "fill-rule": "fillRule",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "letter-spacing": "charSpacing",
      "paint-order": "paintFirst",
      "stroke-dasharray": "strokeDashArray",
      "stroke-dashoffset": "strokeDashOffset",
      "stroke-linecap": "strokeLineCap",
      "stroke-linejoin": "strokeLineJoin",
      "stroke-miterlimit": "strokeMiterLimit",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWidth",
      "text-decoration": "textDecoration",
      "text-anchor": "textAnchor",
      opacity: "opacity",
      "clip-path": "clipPath",
      "clip-rule": "clipRule",
      "vector-effect": "strokeUniform",
      "image-rendering": "imageSmoothing"
    }, d = {
      stroke: "strokeOpacity",
      fill: "fillOpacity"
    }, g = "font-size", m = "clip-path";
    s.svgValidTagNamesRegEx = w(n), s.svgViewBoxElementsRegEx = w(a), s.svgInvalidAncestorsRegEx = w(i), s.svgValidParentsRegEx = w(l), s.cssRules = {}, s.gradientDefs = {}, s.clipPaths = {};
    function v(C) {
      return C in u ? u[C] : C;
    }
    function y(C, _, T, P) {
      var F = Array.isArray(_), D;
      if ((C === "fill" || C === "stroke") && _ === "none")
        _ = "";
      else {
        if (C === "strokeUniform")
          return _ === "non-scaling-stroke";
        if (C === "strokeDashArray")
          _ === "none" ? _ = null : _ = _.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (C === "transformMatrix")
          T && T.transformMatrix ? _ = t(
            T.transformMatrix,
            s.parseTransformAttribute(_)
          ) : _ = s.parseTransformAttribute(_);
        else if (C === "visible")
          _ = _ !== "none" && _ !== "hidden", T && T.visible === !1 && (_ = !1);
        else if (C === "opacity")
          _ = parseFloat(_), T && typeof T.opacity < "u" && (_ *= T.opacity);
        else if (C === "textAnchor")
          _ = _ === "start" ? "left" : _ === "end" ? "right" : "center";
        else if (C === "charSpacing")
          D = r(_, P) / P * 1e3;
        else if (C === "paintFirst") {
          var R = _.indexOf("fill"), Y = _.indexOf("stroke"), _ = "fill";
          (R > -1 && Y > -1 && Y < R || R === -1 && Y > -1) && (_ = "stroke");
        } else {
          if (C === "href" || C === "xlink:href" || C === "font")
            return _;
          if (C === "imageSmoothing")
            return _ === "optimizeQuality";
          D = F ? _.map(r) : r(_, P);
        }
      }
      return !F && isNaN(D) ? _ : D;
    }
    function w(C) {
      return new RegExp("^(" + C.join("|") + ")\\b", "i");
    }
    function M(C) {
      for (var _ in d)
        if (!(typeof C[d[_]] > "u" || C[_] === "")) {
          if (typeof C[_] > "u") {
            if (!s.Object.prototype[_])
              continue;
            C[_] = s.Object.prototype[_];
          }
          if (C[_].indexOf("url(") !== 0) {
            var T = new s.Color(C[_]);
            C[_] = T.setAlpha(e(T.getAlpha() * C[d[_]], 2)).toRgba();
          }
        }
      return C;
    }
    function X(C, _) {
      var T, P = [], F, D, R;
      for (D = 0, R = _.length; D < R; D++)
        T = _[D], F = C.getElementsByTagName(T), P = P.concat(Array.prototype.slice.call(F));
      return P;
    }
    s.parseTransformAttribute = function() {
      function C(L, $) {
        var et = s.util.cos($[0]), it = s.util.sin($[0]), nt = 0, rt = 0;
        $.length === 3 && (nt = $[1], rt = $[2]), L[0] = et, L[1] = it, L[2] = -it, L[3] = et, L[4] = nt - (et * nt - it * rt), L[5] = rt - (it * nt + et * rt);
      }
      function _(L, $) {
        var et = $[0], it = $.length === 2 ? $[1] : $[0];
        L[0] = et, L[3] = it;
      }
      function T(L, $, et) {
        L[et] = Math.tan(s.util.degreesToRadians($[0]));
      }
      function P(L, $) {
        L[4] = $[0], $.length === 2 && (L[5] = $[1]);
      }
      var F = s.iMatrix, D = s.reNum, R = s.commaWsp, Y = "(?:(skewX)\\s*\\(\\s*(" + D + ")\\s*\\))", U = "(?:(skewY)\\s*\\(\\s*(" + D + ")\\s*\\))", k = "(?:(rotate)\\s*\\(\\s*(" + D + ")(?:" + R + "(" + D + ")" + R + "(" + D + "))?\\s*\\))", O = "(?:(scale)\\s*\\(\\s*(" + D + ")(?:" + R + "(" + D + "))?\\s*\\))", I = "(?:(translate)\\s*\\(\\s*(" + D + ")(?:" + R + "(" + D + "))?\\s*\\))", j = "(?:(matrix)\\s*\\(\\s*(" + D + ")" + R + "(" + D + ")" + R + "(" + D + ")" + R + "(" + D + ")" + R + "(" + D + ")" + R + "(" + D + ")\\s*\\))", A = "(?:" + j + "|" + I + "|" + O + "|" + k + "|" + Y + "|" + U + ")", B = "(?:" + A + "(?:" + R + "*" + A + ")*)", G = "^\\s*(?:" + B + "?)\\s*$", tt = new RegExp(G), Q = new RegExp(A, "g");
      return function(L) {
        var $ = F.concat(), et = [];
        if (!L || L && !tt.test(L))
          return $;
        L.replace(Q, function(nt) {
          var rt = new RegExp(A).exec(nt).filter(function(ut) {
            return !!ut;
          }), at = rt[1], st = rt.slice(2).map(parseFloat);
          switch (at) {
            case "translate":
              P($, st);
              break;
            case "rotate":
              st[0] = s.util.degreesToRadians(st[0]), C($, st);
              break;
            case "scale":
              _($, st);
              break;
            case "skewX":
              T($, st, 2);
              break;
            case "skewY":
              T($, st, 1);
              break;
            case "matrix":
              $ = st;
              break;
          }
          et.push($.concat()), $ = F.concat();
        });
        for (var it = et[0]; et.length > 1; )
          et.shift(), it = s.util.multiplyTransformMatrices(it, et[0]);
        return it;
      };
    }();
    function W(C, _) {
      var T, P;
      C.replace(/;\s*$/, "").split(";").forEach(function(F) {
        var D = F.split(":");
        T = D[0].trim().toLowerCase(), P = D[1].trim(), _[T] = P;
      });
    }
    function V(C, _) {
      var T, P;
      for (var F in C)
        typeof C[F] > "u" || (T = F.toLowerCase(), P = C[F], _[T] = P);
    }
    function N(C, _) {
      var T = {};
      for (var P in s.cssRules[_])
        if (H(C, P.split(" ")))
          for (var F in s.cssRules[_][P])
            T[F] = s.cssRules[_][P][F];
      return T;
    }
    function H(C, _) {
      var T, P = !0;
      return T = q(C, _.pop()), T && _.length && (P = z(C, _)), T && P && _.length === 0;
    }
    function z(C, _) {
      for (var T, P = !0; C.parentNode && C.parentNode.nodeType === 1 && _.length; )
        P && (T = _.pop()), C = C.parentNode, P = q(C, T);
      return _.length === 0;
    }
    function q(C, _) {
      var T = C.nodeName, P = C.getAttribute("class"), F = C.getAttribute("id"), D, R;
      if (D = new RegExp("^" + T, "i"), _ = _.replace(D, ""), F && _.length && (D = new RegExp("#" + F + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(D, "")), P && _.length)
        for (P = P.split(" "), R = P.length; R--; )
          D = new RegExp("\\." + P[R] + "(?![a-zA-Z\\-]+)", "i"), _ = _.replace(D, "");
      return _.length === 0;
    }
    function J(C, _) {
      var T;
      if (C.getElementById && (T = C.getElementById(_)), T)
        return T;
      var P, F, D, R = C.getElementsByTagName("*");
      for (F = 0, D = R.length; F < D; F++)
        if (P = R[F], _ === P.getAttribute("id"))
          return P;
    }
    function K(C) {
      for (var _ = X(C, ["use", "svg:use"]), T = 0; _.length && T < _.length; ) {
        var P = _[T], F = P.getAttribute("xlink:href") || P.getAttribute("href");
        if (F === null)
          return;
        var D = F.slice(1), R = P.getAttribute("x") || 0, Y = P.getAttribute("y") || 0, U = J(C, D).cloneNode(!0), k = (U.getAttribute("transform") || "") + " translate(" + R + ", " + Y + ")", O, I = _.length, j, A, B, G, tt = s.svgNS;
        if (b(U), /^svg$/i.test(U.nodeName)) {
          var Q = U.ownerDocument.createElementNS(tt, "g");
          for (A = 0, B = U.attributes, G = B.length; A < G; A++)
            j = B.item(A), Q.setAttributeNS(tt, j.nodeName, j.nodeValue);
          for (; U.firstChild; )
            Q.appendChild(U.firstChild);
          U = Q;
        }
        for (A = 0, B = P.attributes, G = B.length; A < G; A++)
          j = B.item(A), !(j.nodeName === "x" || j.nodeName === "y" || j.nodeName === "xlink:href" || j.nodeName === "href") && (j.nodeName === "transform" ? k = j.nodeValue + " " + k : U.setAttribute(j.nodeName, j.nodeValue));
        U.setAttribute("transform", k), U.setAttribute("instantiated_by_use", "1"), U.removeAttribute("id"), O = P.parentNode, O.replaceChild(U, P), _.length === I && T++;
      }
    }
    var p = new RegExp(
      "^\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*$"
    );
    function b(C) {
      if (!s.svgViewBoxElementsRegEx.test(C.nodeName))
        return {};
      var _ = C.getAttribute("viewBox"), T = 1, P = 1, F = 0, D = 0, R, Y, U, k, O = C.getAttribute("width"), I = C.getAttribute("height"), j = C.getAttribute("x") || 0, A = C.getAttribute("y") || 0, B = C.getAttribute("preserveAspectRatio") || "", G = !_ || !(_ = _.match(p)), tt = !O || !I || O === "100%" || I === "100%", Q = G && tt, L = {}, $ = "", et = 0, it = 0;
      if (L.width = 0, L.height = 0, L.toBeParsed = Q, G && (j || A) && C.parentNode && C.parentNode.nodeName !== "#document" && ($ = " translate(" + r(j) + " " + r(A) + ") ", U = (C.getAttribute("transform") || "") + $, C.setAttribute("transform", U), C.removeAttribute("x"), C.removeAttribute("y")), Q)
        return L;
      if (G)
        return L.width = r(O), L.height = r(I), L;
      if (F = -parseFloat(_[1]), D = -parseFloat(_[2]), R = parseFloat(_[3]), Y = parseFloat(_[4]), L.minX = F, L.minY = D, L.viewBoxWidth = R, L.viewBoxHeight = Y, tt ? (L.width = R, L.height = Y) : (L.width = r(O), L.height = r(I), T = L.width / R, P = L.height / Y), B = s.util.parsePreserveAspectRatioAttribute(B), B.alignX !== "none" && (B.meetOrSlice === "meet" && (P = T = T > P ? P : T), B.meetOrSlice === "slice" && (P = T = T > P ? T : P), et = L.width - R * T, it = L.height - Y * T, B.alignX === "Mid" && (et /= 2), B.alignY === "Mid" && (it /= 2), B.alignX === "Min" && (et = 0), B.alignY === "Min" && (it = 0)), T === 1 && P === 1 && F === 0 && D === 0 && j === 0 && A === 0)
        return L;
      if ((j || A) && C.parentNode.nodeName !== "#document" && ($ = " translate(" + r(j) + " " + r(A) + ") "), U = $ + " matrix(" + T + " 0 0 " + P + " " + (F * T + et) + " " + (D * P + it) + ") ", C.nodeName === "svg") {
        for (k = C.ownerDocument.createElementNS(s.svgNS, "g"); C.firstChild; )
          k.appendChild(C.firstChild);
        C.appendChild(k);
      } else
        k = C, k.removeAttribute("x"), k.removeAttribute("y"), U = k.getAttribute("transform") + U;
      return k.setAttribute("transform", U), L;
    }
    function x(C, _) {
      for (; C && (C = C.parentNode); )
        if (C.nodeName && _.test(C.nodeName.replace("svg:", "")) && !C.getAttribute("instantiated_by_use"))
          return !0;
      return !1;
    }
    s.parseSVGDocument = function(C, _, T, P) {
      if (C) {
        K(C);
        var F = s.Object.__uid++, D, R, Y = b(C), U = s.util.toArray(C.getElementsByTagName("*"));
        if (Y.crossOrigin = P && P.crossOrigin, Y.svgUid = F, U.length === 0 && s.isLikelyNode) {
          U = C.selectNodes('//*[name(.)!="svg"]');
          var k = [];
          for (D = 0, R = U.length; D < R; D++)
            k[D] = U[D];
          U = k;
        }
        var O = U.filter(function(j) {
          return b(j), s.svgValidTagNamesRegEx.test(j.nodeName.replace("svg:", "")) && !x(j, s.svgInvalidAncestorsRegEx);
        });
        if (!O || O && !O.length) {
          _ && _([], {});
          return;
        }
        var I = {};
        U.filter(function(j) {
          return j.nodeName.replace("svg:", "") === "clipPath";
        }).forEach(function(j) {
          var A = j.getAttribute("id");
          I[A] = s.util.toArray(j.getElementsByTagName("*")).filter(function(B) {
            return s.svgValidTagNamesRegEx.test(B.nodeName.replace("svg:", ""));
          });
        }), s.gradientDefs[F] = s.getGradientDefs(C), s.cssRules[F] = s.getCSSRules(C), s.clipPaths[F] = I, s.parseElements(O, function(j, A) {
          _ && (_(j, Y, A, U), delete s.gradientDefs[F], delete s.cssRules[F], delete s.clipPaths[F]);
        }, o(Y), T, P);
      }
    };
    function S(C, _) {
      var T = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"], P = "xlink:href", F = _.getAttribute(P).slice(1), D = J(C, F);
      if (D && D.getAttribute(P) && S(C, D), T.forEach(function(Y) {
        D && !_.hasAttribute(Y) && D.hasAttribute(Y) && _.setAttribute(Y, D.getAttribute(Y));
      }), !_.children.length)
        for (var R = D.cloneNode(!0); R.firstChild; )
          _.appendChild(R.firstChild);
      _.removeAttribute(P);
    }
    var E = new RegExp(
      "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + s.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + s.reNum + "))?\\s+(.*)"
    );
    h(s, {
      /**
       * Parses a short font declaration, building adding its properties to a style object
       * @static
       * @function
       * @memberOf fabric
       * @param {String} value font declaration
       * @param {Object} oStyle definition
       */
      parseFontDeclaration: function(C, _) {
        var T = C.match(E);
        if (T) {
          var P = T[1], F = T[3], D = T[4], R = T[5], Y = T[6];
          P && (_.fontStyle = P), F && (_.fontWeight = isNaN(parseFloat(F)) ? F : parseFloat(F)), D && (_.fontSize = r(D)), Y && (_.fontFamily = Y), R && (_.lineHeight = R === "normal" ? 1 : R);
        }
      },
      /**
       * Parses an SVG document, returning all of the gradient declarations found in it
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
       */
      getGradientDefs: function(C) {
        var _ = [
          "linearGradient",
          "radialGradient",
          "svg:linearGradient",
          "svg:radialGradient"
        ], T = X(C, _), P, F = 0, D = {};
        for (F = T.length; F--; )
          P = T[F], P.getAttribute("xlink:href") && S(C, P), D[P.getAttribute("id")] = P;
        return D;
      },
      /**
       * Returns an object of attributes' name/value, given element and an array of attribute names;
       * Parses parent "g" nodes recursively upwards.
       * @static
       * @memberOf fabric
       * @param {DOMElement} element Element to parse
       * @param {Array} attributes Array of attributes to parse
       * @return {Object} object containing parsed attributes' names/values
       */
      parseAttributes: function(C, _, T) {
        if (C) {
          var P, F = {}, D, R;
          typeof T > "u" && (T = C.getAttribute("svgUid")), C.parentNode && s.svgValidParentsRegEx.test(C.parentNode.nodeName) && (F = s.parseAttributes(C.parentNode, _, T));
          var Y = _.reduce(function(B, G) {
            return P = C.getAttribute(G), P && (B[G] = P), B;
          }, {}), U = h(
            N(C, T),
            s.parseStyleAttribute(C)
          );
          Y = h(
            Y,
            U
          ), U[m] && C.setAttribute(m, U[m]), D = R = F.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE, Y[g] && (Y[g] = D = r(Y[g], R));
          var k, O, I = {};
          for (var j in Y)
            k = v(j), O = y(k, Y[j], F, D), I[k] = O;
          I && I.font && s.parseFontDeclaration(I.font, I);
          var A = h(F, I);
          return s.svgValidParentsRegEx.test(C.nodeName) ? A : M(A);
        }
      },
      /**
       * Transforms an array of svg elements to corresponding fabric.* instances
       * @static
       * @memberOf fabric
       * @param {Array} elements Array of elements to parse
       * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
       * @param {Object} [options] Options object
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       */
      parseElements: function(C, _, T, P, F) {
        new s.ElementsParser(C, _, T, P, F).parse();
      },
      /**
       * Parses "style" attribute, retuning an object with values
       * @static
       * @memberOf fabric
       * @param {SVGElement} element Element to parse
       * @return {Object} Objects with values parsed from style attribute of an element
       */
      parseStyleAttribute: function(C) {
        var _ = {}, T = C.getAttribute("style");
        return T && (typeof T == "string" ? W(T, _) : V(T, _)), _;
      },
      /**
       * Parses "points" attribute, returning an array of values
       * @static
       * @memberOf fabric
       * @param {String} points points attribute string
       * @return {Array} array of points
       */
      parsePointsAttribute: function(C) {
        if (!C)
          return null;
        C = C.replace(/,/g, " ").trim(), C = C.split(/\s+/);
        var _ = [], T, P;
        for (T = 0, P = C.length; T < P; T += 2)
          _.push({
            x: parseFloat(C[T]),
            y: parseFloat(C[T + 1])
          });
        return _;
      },
      /**
       * Returns CSS rules for a given SVG document
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} CSS rules of this document
       */
      getCSSRules: function(C) {
        var _ = C.getElementsByTagName("style"), T, P, F = {}, D;
        for (T = 0, P = _.length; T < P; T++) {
          var R = _[T].textContent;
          R = R.replace(/\/\*[\s\S]*?\*\//g, ""), R.trim() !== "" && (D = R.split("}"), D = D.filter(function(Y) {
            return Y.trim();
          }), D.forEach(function(Y) {
            var U = Y.split("{"), k = {}, O = U[1].trim(), I = O.split(";").filter(function(G) {
              return G.trim();
            });
            for (T = 0, P = I.length; T < P; T++) {
              var j = I[T].split(":"), A = j[0].trim(), B = j[1].trim();
              k[A] = B;
            }
            Y = U[0].trim(), Y.split(",").forEach(function(G) {
              G = G.replace(/^svg/i, "").trim(), G !== "" && (F[G] ? s.util.object.extend(F[G], k) : F[G] = s.util.object.clone(k));
            });
          }));
        }
        return F;
      },
      /**
       * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
       * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
       * @memberOf fabric
       * @param {String} url
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromURL: function(C, _, T, P) {
        C = C.replace(/^\n\s*/, "").trim(), new s.util.request(C, {
          method: "get",
          onComplete: F
        });
        function F(D) {
          var R = D.responseXML;
          if (!R || !R.documentElement)
            return _ && _(null), !1;
          s.parseSVGDocument(R.documentElement, function(Y, U, k, O) {
            _ && _(Y, U, k, O);
          }, T, P);
        }
      },
      /**
       * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
       * @memberOf fabric
       * @param {String} string
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
      loadSVGFromString: function(C, _, T, P) {
        var F = new s.window.DOMParser(), D = F.parseFromString(C.trim(), "text/xml");
        s.parseSVGDocument(D.documentElement, function(R, Y, U, k) {
          _(R, Y, U, k);
        }, T, P);
      }
    });
  }(Z), f.ElementsParser = function(c, s, h, o, e, r) {
    this.elements = c, this.callback = s, this.options = h, this.reviver = o, this.svgUid = h && h.svgUid || 0, this.parsingOptions = e, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = r;
  }, function(c) {
    c.parse = function() {
      this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
    }, c.createObjects = function() {
      var s = this;
      this.elements.forEach(function(h, o) {
        h.setAttribute("svgUid", s.svgUid), s.createObject(h, o);
      });
    }, c.findTag = function(s) {
      return f[f.util.string.capitalize(s.tagName.replace("svg:", ""))];
    }, c.createObject = function(s, h) {
      var o = this.findTag(s);
      if (o && o.fromElement)
        try {
          o.fromElement(s, this.createCallback(h, s), this.options);
        } catch (e) {
          f.log(e);
        }
      else
        this.checkIfDone();
    }, c.createCallback = function(s, h) {
      var o = this;
      return function(e) {
        var r;
        o.resolveGradient(e, h, "fill"), o.resolveGradient(e, h, "stroke"), e instanceof f.Image && e._originalElement && (r = e.parsePreserveAspectRatioAttribute(h)), e._removeTransformMatrix(r), o.resolveClipPath(e, h), o.reviver && o.reviver(h, e), o.instances[s] = e, o.checkIfDone();
      };
    }, c.extractPropertyDefinition = function(s, h, o) {
      var e = s[h], r = this.regexUrl;
      if (r.test(e)) {
        r.lastIndex = 0;
        var t = r.exec(e)[1];
        return r.lastIndex = 0, f[o][this.svgUid][t];
      }
    }, c.resolveGradient = function(s, h, o) {
      var e = this.extractPropertyDefinition(s, o, "gradientDefs");
      if (e) {
        var r = h.getAttribute(o + "-opacity"), t = f.Gradient.fromElement(e, s, r, this.options);
        s.set(o, t);
      }
    }, c.createClipPathCallback = function(s, h) {
      return function(o) {
        o._removeTransformMatrix(), o.fillRule = o.clipRule, h.push(o);
      };
    }, c.resolveClipPath = function(s, h) {
      var o = this.extractPropertyDefinition(s, "clipPath", "clipPaths"), e, r, t, n, a, i;
      if (o) {
        n = [], t = f.util.invertTransform(s.calcTransformMatrix());
        for (var l = o[0].parentNode, u = h; u.parentNode && u.getAttribute("clip-path") !== s.clipPath; )
          u = u.parentNode;
        u.parentNode.appendChild(l);
        for (var d = 0; d < o.length; d++)
          e = o[d], r = this.findTag(e), r.fromElement(
            e,
            this.createClipPathCallback(s, n),
            this.options
          );
        n.length === 1 ? o = n[0] : o = new f.Group(n), a = f.util.multiplyTransformMatrices(
          t,
          o.calcTransformMatrix()
        ), o.clipPath && this.resolveClipPath(o, u);
        var i = f.util.qrDecompose(a);
        o.flipX = !1, o.flipY = !1, o.set("scaleX", i.scaleX), o.set("scaleY", i.scaleY), o.angle = i.angle, o.skewX = i.skewX, o.skewY = 0, o.setPositionByOrigin({ x: i.translateX, y: i.translateY }, "center", "center"), s.clipPath = o;
      } else
        delete s.clipPath;
    }, c.checkIfDone = function() {
      --this.numElements === 0 && (this.instances = this.instances.filter(function(s) {
        return s != null;
      }), this.callback(this.instances, this.elements));
    };
  }(f.ElementsParser.prototype), function(c) {
    var s = c.fabric || (c.fabric = {});
    if (s.Point) {
      s.warn("fabric.Point is already defined");
      return;
    }
    s.Point = h;
    function h(o, e) {
      this.x = o, this.y = e;
    }
    h.prototype = /** @lends fabric.Point.prototype */
    {
      type: "point",
      constructor: h,
      /**
       * Adds another point to this one and returns another one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point instance with added values
       */
      add: function(o) {
        return new h(this.x + o.x, this.y + o.y);
      },
      /**
       * Adds another point to this one
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      addEquals: function(o) {
        return this.x += o.x, this.y += o.y, this;
      },
      /**
       * Adds value to this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point} new Point with added value
       */
      scalarAdd: function(o) {
        return new h(this.x + o, this.y + o);
      },
      /**
       * Adds value to this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarAddEquals: function(o) {
        return this.x += o, this.y += o, this;
      },
      /**
       * Subtracts another point from this point and returns a new one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point object with subtracted values
       */
      subtract: function(o) {
        return new h(this.x - o.x, this.y - o.y);
      },
      /**
       * Subtracts another point from this point
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
      subtractEquals: function(o) {
        return this.x -= o.x, this.y -= o.y, this;
      },
      /**
       * Subtracts value from this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      scalarSubtract: function(o) {
        return new h(this.x - o, this.y - o);
      },
      /**
       * Subtracts value from this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      scalarSubtractEquals: function(o) {
        return this.x -= o, this.y -= o, this;
      },
      /**
       * Multiplies this point by a value and returns a new one
       * TODO: rename in scalarMultiply in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      multiply: function(o) {
        return new h(this.x * o, this.y * o);
      },
      /**
       * Multiplies this point by a value
       * TODO: rename in scalarMultiplyEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      multiplyEquals: function(o) {
        return this.x *= o, this.y *= o, this;
      },
      /**
       * Divides this point by a value and returns a new one
       * TODO: rename in scalarDivide in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
      divide: function(o) {
        return new h(this.x / o, this.y / o);
      },
      /**
       * Divides this point by a value
       * TODO: rename in scalarDivideEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
      divideEquals: function(o) {
        return this.x /= o, this.y /= o, this;
      },
      /**
       * Returns true if this point is equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      eq: function(o) {
        return this.x === o.x && this.y === o.y;
      },
      /**
       * Returns true if this point is less than another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lt: function(o) {
        return this.x < o.x && this.y < o.y;
      },
      /**
       * Returns true if this point is less than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      lte: function(o) {
        return this.x <= o.x && this.y <= o.y;
      },
      /**
      
      	     * Returns true if this point is greater another one
      	     * @param {fabric.Point} that
      	     * @return {Boolean}
      	     */
      gt: function(o) {
        return this.x > o.x && this.y > o.y;
      },
      /**
       * Returns true if this point is greater than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
      gte: function(o) {
        return this.x >= o.x && this.y >= o.y;
      },
      /**
       * Returns new point which is the result of linear interpolation with this one and another one
       * @param {fabric.Point} that
       * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
       * @return {fabric.Point}
       */
      lerp: function(o, e) {
        return typeof e > "u" && (e = 0.5), e = Math.max(Math.min(1, e), 0), new h(this.x + (o.x - this.x) * e, this.y + (o.y - this.y) * e);
      },
      /**
       * Returns distance from this point and another one
       * @param {fabric.Point} that
       * @return {Number}
       */
      distanceFrom: function(o) {
        var e = this.x - o.x, r = this.y - o.y;
        return Math.sqrt(e * e + r * r);
      },
      /**
       * Returns the point between this point and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      midPointFrom: function(o) {
        return this.lerp(o);
      },
      /**
       * Returns a new point which is the min of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      min: function(o) {
        return new h(Math.min(this.x, o.x), Math.min(this.y, o.y));
      },
      /**
       * Returns a new point which is the max of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
      max: function(o) {
        return new h(Math.max(this.x, o.x), Math.max(this.y, o.y));
      },
      /**
       * Returns string representation of this point
       * @return {String}
       */
      toString: function() {
        return this.x + "," + this.y;
      },
      /**
       * Sets x/y of this point
       * @param {Number} x
       * @param {Number} y
       * @chainable
       */
      setXY: function(o, e) {
        return this.x = o, this.y = e, this;
      },
      /**
       * Sets x of this point
       * @param {Number} x
       * @chainable
       */
      setX: function(o) {
        return this.x = o, this;
      },
      /**
       * Sets y of this point
       * @param {Number} y
       * @chainable
       */
      setY: function(o) {
        return this.y = o, this;
      },
      /**
       * Sets x/y of this point from another point
       * @param {fabric.Point} that
       * @chainable
       */
      setFromPoint: function(o) {
        return this.x = o.x, this.y = o.y, this;
      },
      /**
       * Swaps x/y of this point and another point
       * @param {fabric.Point} that
       */
      swap: function(o) {
        var e = this.x, r = this.y;
        this.x = o.x, this.y = o.y, o.x = e, o.y = r;
      },
      /**
       * return a cloned instance of the point
       * @return {fabric.Point}
       */
      clone: function() {
        return new h(this.x, this.y);
      }
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {});
    if (s.Intersection) {
      s.warn("fabric.Intersection is already defined");
      return;
    }
    function h(o) {
      this.status = o, this.points = [];
    }
    s.Intersection = h, s.Intersection.prototype = /** @lends fabric.Intersection.prototype */
    {
      constructor: h,
      /**
       * Appends a point to intersection
       * @param {fabric.Point} point
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoint: function(o) {
        return this.points.push(o), this;
      },
      /**
       * Appends points to intersection
       * @param {Array} points
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
      appendPoints: function(o) {
        return this.points = this.points.concat(o), this;
      }
    }, s.Intersection.intersectLineLine = function(o, e, r, t) {
      var n, a = (t.x - r.x) * (o.y - r.y) - (t.y - r.y) * (o.x - r.x), i = (e.x - o.x) * (o.y - r.y) - (e.y - o.y) * (o.x - r.x), l = (t.y - r.y) * (e.x - o.x) - (t.x - r.x) * (e.y - o.y);
      if (l !== 0) {
        var u = a / l, d = i / l;
        0 <= u && u <= 1 && 0 <= d && d <= 1 ? (n = new h("Intersection"), n.appendPoint(new s.Point(o.x + u * (e.x - o.x), o.y + u * (e.y - o.y)))) : n = new h();
      } else
        a === 0 || i === 0 ? n = new h("Coincident") : n = new h("Parallel");
      return n;
    }, s.Intersection.intersectLinePolygon = function(o, e, r) {
      var t = new h(), n = r.length, a, i, l, u;
      for (u = 0; u < n; u++)
        a = r[u], i = r[(u + 1) % n], l = h.intersectLineLine(o, e, a, i), t.appendPoints(l.points);
      return t.points.length > 0 && (t.status = "Intersection"), t;
    }, s.Intersection.intersectPolygonPolygon = function(o, e) {
      var r = new h(), t = o.length, n;
      for (n = 0; n < t; n++) {
        var a = o[n], i = o[(n + 1) % t], l = h.intersectLinePolygon(a, i, e);
        r.appendPoints(l.points);
      }
      return r.points.length > 0 && (r.status = "Intersection"), r;
    }, s.Intersection.intersectPolygonRectangle = function(o, e, r) {
      var t = e.min(r), n = e.max(r), a = new s.Point(n.x, t.y), i = new s.Point(t.x, n.y), l = h.intersectLinePolygon(t, a, o), u = h.intersectLinePolygon(a, n, o), d = h.intersectLinePolygon(n, i, o), g = h.intersectLinePolygon(i, t, o), m = new h();
      return m.appendPoints(l.points), m.appendPoints(u.points), m.appendPoints(d.points), m.appendPoints(g.points), m.points.length > 0 && (m.status = "Intersection"), m;
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {});
    if (s.Color) {
      s.warn("fabric.Color is already defined.");
      return;
    }
    function h(e) {
      e ? this._tryParsingColor(e) : this.setSource([0, 0, 0, 1]);
    }
    s.Color = h, s.Color.prototype = /** @lends fabric.Color.prototype */
    {
      /**
       * @private
       * @param {String|Array} color Color value to parse
       */
      _tryParsingColor: function(e) {
        var r;
        e in h.colorNameMap && (e = h.colorNameMap[e]), e === "transparent" && (r = [255, 255, 255, 0]), r || (r = h.sourceFromHex(e)), r || (r = h.sourceFromRgb(e)), r || (r = h.sourceFromHsl(e)), r || (r = [0, 0, 0, 1]), r && this.setSource(r);
      },
      /**
       * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
       * @private
       * @param {Number} r Red color value
       * @param {Number} g Green color value
       * @param {Number} b Blue color value
       * @return {Array} Hsl color
       */
      _rgbToHsl: function(e, r, t) {
        e /= 255, r /= 255, t /= 255;
        var n, a, i, l = s.util.array.max([e, r, t]), u = s.util.array.min([e, r, t]);
        if (i = (l + u) / 2, l === u)
          n = a = 0;
        else {
          var d = l - u;
          switch (a = i > 0.5 ? d / (2 - l - u) : d / (l + u), l) {
            case e:
              n = (r - t) / d + (r < t ? 6 : 0);
              break;
            case r:
              n = (t - e) / d + 2;
              break;
            case t:
              n = (e - r) / d + 4;
              break;
          }
          n /= 6;
        }
        return [
          Math.round(n * 360),
          Math.round(a * 100),
          Math.round(i * 100)
        ];
      },
      /**
       * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @return {Array}
       */
      getSource: function() {
        return this._source;
      },
      /**
       * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @param {Array} source
       */
      setSource: function(e) {
        this._source = e;
      },
      /**
       * Returns color representation in RGB format
       * @return {String} ex: rgb(0-255,0-255,0-255)
       */
      toRgb: function() {
        var e = this.getSource();
        return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")";
      },
      /**
       * Returns color representation in RGBA format
       * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
       */
      toRgba: function() {
        var e = this.getSource();
        return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + ")";
      },
      /**
       * Returns color representation in HSL format
       * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
       */
      toHsl: function() {
        var e = this.getSource(), r = this._rgbToHsl(e[0], e[1], e[2]);
        return "hsl(" + r[0] + "," + r[1] + "%," + r[2] + "%)";
      },
      /**
       * Returns color representation in HSLA format
       * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
       */
      toHsla: function() {
        var e = this.getSource(), r = this._rgbToHsl(e[0], e[1], e[2]);
        return "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + e[3] + ")";
      },
      /**
       * Returns color representation in HEX format
       * @return {String} ex: FF5555
       */
      toHex: function() {
        var e = this.getSource(), r, t, n;
        return r = e[0].toString(16), r = r.length === 1 ? "0" + r : r, t = e[1].toString(16), t = t.length === 1 ? "0" + t : t, n = e[2].toString(16), n = n.length === 1 ? "0" + n : n, r.toUpperCase() + t.toUpperCase() + n.toUpperCase();
      },
      /**
       * Returns color representation in HEXA format
       * @return {String} ex: FF5555CC
       */
      toHexa: function() {
        var e = this.getSource(), r;
        return r = Math.round(e[3] * 255), r = r.toString(16), r = r.length === 1 ? "0" + r : r, this.toHex() + r.toUpperCase();
      },
      /**
       * Gets value of alpha channel for this color
       * @return {Number} 0-1
       */
      getAlpha: function() {
        return this.getSource()[3];
      },
      /**
       * Sets value of alpha channel for this color
       * @param {Number} alpha Alpha value 0-1
       * @return {fabric.Color} thisArg
       */
      setAlpha: function(e) {
        var r = this.getSource();
        return r[3] = e, this.setSource(r), this;
      },
      /**
       * Transforms color to its grayscale representation
       * @return {fabric.Color} thisArg
       */
      toGrayscale: function() {
        var e = this.getSource(), r = parseInt((e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11).toFixed(0), 10), t = e[3];
        return this.setSource([r, r, r, t]), this;
      },
      /**
       * Transforms color to its black and white representation
       * @param {Number} threshold
       * @return {fabric.Color} thisArg
       */
      toBlackWhite: function(e) {
        var r = this.getSource(), t = (r[0] * 0.3 + r[1] * 0.59 + r[2] * 0.11).toFixed(0), n = r[3];
        return e = e || 127, t = Number(t) < Number(e) ? 0 : 255, this.setSource([t, t, t, n]), this;
      },
      /**
       * Overlays color with another color
       * @param {String|fabric.Color} otherColor
       * @return {fabric.Color} thisArg
       */
      overlayWith: function(e) {
        e instanceof h || (e = new h(e));
        var r = [], t = this.getAlpha(), n = 0.5, a = this.getSource(), i = e.getSource(), l;
        for (l = 0; l < 3; l++)
          r.push(Math.round(a[l] * (1 - n) + i[l] * n));
        return r[3] = t, this.setSource(r), this;
      }
    }, s.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, s.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, s.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, s.Color.colorNameMap = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgrey: "#A9A9A9",
      darkgreen: "#006400",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgrey: "#D3D3D3",
      lightgreen: "#90EE90",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function o(e, r, t) {
      return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (r - e) * 6 * t : t < 1 / 2 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e;
    }
    s.Color.fromRgb = function(e) {
      return h.fromSource(h.sourceFromRgb(e));
    }, s.Color.sourceFromRgb = function(e) {
      var r = e.match(h.reRGBa);
      if (r) {
        var t = parseInt(r[1], 10) / (/%$/.test(r[1]) ? 100 : 1) * (/%$/.test(r[1]) ? 255 : 1), n = parseInt(r[2], 10) / (/%$/.test(r[2]) ? 100 : 1) * (/%$/.test(r[2]) ? 255 : 1), a = parseInt(r[3], 10) / (/%$/.test(r[3]) ? 100 : 1) * (/%$/.test(r[3]) ? 255 : 1);
        return [
          parseInt(t, 10),
          parseInt(n, 10),
          parseInt(a, 10),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, s.Color.fromRgba = h.fromRgb, s.Color.fromHsl = function(e) {
      return h.fromSource(h.sourceFromHsl(e));
    }, s.Color.sourceFromHsl = function(e) {
      var r = e.match(h.reHSLa);
      if (r) {
        var t = (parseFloat(r[1]) % 360 + 360) % 360 / 360, n = parseFloat(r[2]) / (/%$/.test(r[2]) ? 100 : 1), a = parseFloat(r[3]) / (/%$/.test(r[3]) ? 100 : 1), i, l, u;
        if (n === 0)
          i = l = u = a;
        else {
          var d = a <= 0.5 ? a * (n + 1) : a + n - a * n, g = a * 2 - d;
          i = o(g, d, t + 1 / 3), l = o(g, d, t), u = o(g, d, t - 1 / 3);
        }
        return [
          Math.round(i * 255),
          Math.round(l * 255),
          Math.round(u * 255),
          r[4] ? parseFloat(r[4]) : 1
        ];
      }
    }, s.Color.fromHsla = h.fromHsl, s.Color.fromHex = function(e) {
      return h.fromSource(h.sourceFromHex(e));
    }, s.Color.sourceFromHex = function(e) {
      if (e.match(h.reHex)) {
        var r = e.slice(e.indexOf("#") + 1), t = r.length === 3 || r.length === 4, n = r.length === 8 || r.length === 4, a = t ? r.charAt(0) + r.charAt(0) : r.substring(0, 2), i = t ? r.charAt(1) + r.charAt(1) : r.substring(2, 4), l = t ? r.charAt(2) + r.charAt(2) : r.substring(4, 6), u = n ? t ? r.charAt(3) + r.charAt(3) : r.substring(6, 8) : "FF";
        return [
          parseInt(a, 16),
          parseInt(i, 16),
          parseInt(l, 16),
          parseFloat((parseInt(u, 16) / 255).toFixed(2))
        ];
      }
    }, s.Color.fromSource = function(e) {
      var r = new h();
      return r.setSource(e), r;
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], o = ["ns", "nesw", "ew", "nwse"], e = {}, r = "left", t = "top", n = "right", a = "bottom", i = "center", l = {
      top: a,
      bottom: t,
      left: n,
      right: r,
      center: i
    }, u = s.util.radiansToDegrees, d = Math.sign || function(k) {
      return (k > 0) - (k < 0) || +k;
    };
    function g(k, O) {
      var I = k.angle + u(Math.atan2(O.y, O.x)) + 360;
      return Math.round(I % 360 / 45);
    }
    function m(k, O) {
      var I = O.transform.target, j = I.canvas, A = s.util.object.clone(O);
      A.target = I, j && j.fire("object:" + k, A), I.fire(k, O);
    }
    function v(k, O) {
      var I = O.canvas, j = I.uniScaleKey, A = k[j];
      return I.uniformScaling && !A || !I.uniformScaling && A;
    }
    function y(k) {
      return k.originX === i && k.originY === i;
    }
    function w(k, O, I) {
      var j = k.lockScalingX, A = k.lockScalingY;
      return !!(j && A || !O && (j || A) && I || j && O === "x" || A && O === "y");
    }
    function M(k, O, I) {
      var j = "not-allowed", A = v(k, I), B = "";
      if (O.x !== 0 && O.y === 0 ? B = "x" : O.x === 0 && O.y !== 0 && (B = "y"), w(I, B, A))
        return j;
      var G = g(I, O);
      return h[G] + "-resize";
    }
    function X(k, O, I) {
      var j = "not-allowed";
      if (O.x !== 0 && I.lockSkewingY || O.y !== 0 && I.lockSkewingX)
        return j;
      var A = g(I, O) % 4;
      return o[A] + "-resize";
    }
    function W(k, O, I) {
      return k[I.canvas.altActionKey] ? e.skewCursorStyleHandler(k, O, I) : e.scaleCursorStyleHandler(k, O, I);
    }
    function V(k, O, I) {
      var j = k[I.canvas.altActionKey];
      if (O.x === 0)
        return j ? "skewX" : "scaleY";
      if (O.y === 0)
        return j ? "skewY" : "scaleX";
    }
    function N(k, O, I) {
      return I.lockRotation ? "not-allowed" : O.cursorStyle;
    }
    function H(k, O, I, j) {
      return {
        e: k,
        transform: O,
        pointer: {
          x: I,
          y: j
        }
      };
    }
    function z(k) {
      return function(O, I, j, A) {
        var B = I.target, G = B.getCenterPoint(), tt = B.translateToOriginPoint(G, I.originX, I.originY), Q = k(O, I, j, A);
        return B.setPositionByOrigin(tt, I.originX, I.originY), Q;
      };
    }
    function q(k, O) {
      return function(I, j, A, B) {
        var G = O(I, j, A, B);
        return G && m(k, H(I, j, A, B)), G;
      };
    }
    function J(k, O, I, j, A) {
      var B = k.target, G = B.controls[k.corner], tt = B.canvas.getZoom(), Q = B.padding / tt, L = B.toLocalPoint(new s.Point(j, A), O, I);
      return L.x >= Q && (L.x -= Q), L.x <= -Q && (L.x += Q), L.y >= Q && (L.y -= Q), L.y <= Q && (L.y += Q), L.x -= G.offsetX, L.y -= G.offsetY, L;
    }
    function K(k) {
      return k.flipX !== k.flipY;
    }
    function p(k, O, I, j, A) {
      if (k[O] !== 0) {
        var B = k._getTransformedDimensions()[j], G = A / B * k[I];
        k.set(I, G);
      }
    }
    function b(k, O, I, j) {
      var A = O.target, B = A._getTransformedDimensions(0, A.skewY), G = J(O, O.originX, O.originY, I, j), tt = Math.abs(G.x * 2) - B.x, Q = A.skewX, L;
      tt < 2 ? L = 0 : (L = u(
        Math.atan2(tt / A.scaleX, B.y / A.scaleY)
      ), O.originX === r && O.originY === a && (L = -L), O.originX === n && O.originY === t && (L = -L), K(A) && (L = -L));
      var $ = Q !== L;
      if ($) {
        var et = A._getTransformedDimensions().y;
        A.set("skewX", L), p(A, "skewY", "scaleY", "y", et);
      }
      return $;
    }
    function x(k, O, I, j) {
      var A = O.target, B = A._getTransformedDimensions(A.skewX, 0), G = J(O, O.originX, O.originY, I, j), tt = Math.abs(G.y * 2) - B.y, Q = A.skewY, L;
      tt < 2 ? L = 0 : (L = u(
        Math.atan2(tt / A.scaleY, B.x / A.scaleX)
      ), O.originX === r && O.originY === a && (L = -L), O.originX === n && O.originY === t && (L = -L), K(A) && (L = -L));
      var $ = Q !== L;
      if ($) {
        var et = A._getTransformedDimensions().x;
        A.set("skewY", L), p(A, "skewX", "scaleX", "x", et);
      }
      return $;
    }
    function S(k, O, I, j) {
      var A = O.target, B = A.skewX, G, tt = O.originY;
      if (A.lockSkewingX)
        return !1;
      if (B === 0) {
        var Q = J(O, i, i, I, j);
        Q.x > 0 ? G = r : G = n;
      } else
        B > 0 && (G = tt === t ? r : n), B < 0 && (G = tt === t ? n : r), K(A) && (G = G === r ? n : r);
      O.originX = G;
      var L = q("skewing", z(b));
      return L(k, O, I, j);
    }
    function E(k, O, I, j) {
      var A = O.target, B = A.skewY, G, tt = O.originX;
      if (A.lockSkewingY)
        return !1;
      if (B === 0) {
        var Q = J(O, i, i, I, j);
        Q.y > 0 ? G = t : G = a;
      } else
        B > 0 && (G = tt === r ? t : a), B < 0 && (G = tt === r ? a : t), K(A) && (G = G === t ? a : t);
      O.originY = G;
      var L = q("skewing", z(x));
      return L(k, O, I, j);
    }
    function C(k, O, I, j) {
      var A = O, B = A.target, G = B.translateToOriginPoint(B.getCenterPoint(), A.originX, A.originY);
      if (B.lockRotation)
        return !1;
      var tt = Math.atan2(A.ey - G.y, A.ex - G.x), Q = Math.atan2(j - G.y, I - G.x), L = u(Q - tt + A.theta), $ = !0;
      if (B.snapAngle > 0) {
        var et = B.snapAngle, it = B.snapThreshold || et, nt = Math.ceil(L / et) * et, rt = Math.floor(L / et) * et;
        Math.abs(L - rt) < it ? L = rt : Math.abs(L - nt) < it && (L = nt);
      }
      return L < 0 && (L = 360 + L), L %= 360, $ = B.angle !== L, B.angle = L, $;
    }
    function _(k, O, I, j, A) {
      A = A || {};
      var B = O.target, G = B.lockScalingX, tt = B.lockScalingY, Q = A.by, L, $, et, it, nt = v(k, B), rt = w(B, Q, nt), at, st, ut = O.gestureScale;
      if (rt)
        return !1;
      if (ut)
        $ = O.scaleX * ut, et = O.scaleY * ut;
      else {
        if (L = J(O, O.originX, O.originY, I, j), at = Q !== "y" ? d(L.x) : 1, st = Q !== "x" ? d(L.y) : 1, O.signX || (O.signX = at), O.signY || (O.signY = st), B.lockScalingFlip && (O.signX !== at || O.signY !== st))
          return !1;
        if (it = B._getTransformedDimensions(), nt && !Q) {
          var dt = Math.abs(L.x) + Math.abs(L.y), ot = O.original, _t = Math.abs(it.x * ot.scaleX / B.scaleX) + Math.abs(it.y * ot.scaleY / B.scaleY), vt = dt / _t;
          $ = ot.scaleX * vt, et = ot.scaleY * vt;
        } else
          $ = Math.abs(L.x * B.scaleX / it.x), et = Math.abs(L.y * B.scaleY / it.y);
        y(O) && ($ *= 2, et *= 2), O.signX !== at && Q !== "y" && (O.originX = l[O.originX], $ *= -1, O.signX = at), O.signY !== st && Q !== "x" && (O.originY = l[O.originY], et *= -1, O.signY = st);
      }
      var yt = B.scaleX, Ct = B.scaleY;
      return Q ? (Q === "x" && B.set("scaleX", $), Q === "y" && B.set("scaleY", et)) : (!G && B.set("scaleX", $), !tt && B.set("scaleY", et)), yt !== B.scaleX || Ct !== B.scaleY;
    }
    function T(k, O, I, j) {
      return _(k, O, I, j);
    }
    function P(k, O, I, j) {
      return _(k, O, I, j, { by: "x" });
    }
    function F(k, O, I, j) {
      return _(k, O, I, j, { by: "y" });
    }
    function D(k, O, I, j) {
      return k[O.target.canvas.altActionKey] ? e.skewHandlerX(k, O, I, j) : e.scalingY(k, O, I, j);
    }
    function R(k, O, I, j) {
      return k[O.target.canvas.altActionKey] ? e.skewHandlerY(k, O, I, j) : e.scalingX(k, O, I, j);
    }
    function Y(k, O, I, j) {
      var A = O.target, B = J(O, O.originX, O.originY, I, j), G = A.strokeWidth / (A.strokeUniform ? A.scaleX : 1), tt = y(O) ? 2 : 1, Q = A.width, L = Math.abs(B.x * tt / A.scaleX) - G;
      return A.set("width", Math.max(L, 0)), Q !== L;
    }
    function U(k, O, I, j) {
      var A = O.target, B = I - O.offsetX, G = j - O.offsetY, tt = !A.get("lockMovementX") && A.left !== B, Q = !A.get("lockMovementY") && A.top !== G;
      return tt && A.set("left", B), Q && A.set("top", G), (tt || Q) && m("moving", H(k, O, I, j)), tt || Q;
    }
    e.scaleCursorStyleHandler = M, e.skewCursorStyleHandler = X, e.scaleSkewCursorStyleHandler = W, e.rotationWithSnapping = q("rotating", z(C)), e.scalingEqually = q("scaling", z(T)), e.scalingX = q("scaling", z(P)), e.scalingY = q("scaling", z(F)), e.scalingYOrSkewingX = D, e.scalingXOrSkewingY = R, e.changeWidth = q("resizing", z(Y)), e.skewHandlerX = S, e.skewHandlerY = E, e.dragHandler = U, e.scaleOrSkewActionName = V, e.rotationStyleHandler = N, e.fireEvent = m, e.wrapWithFixedAnchor = z, e.wrapWithFireEvent = q, e.getLocalPoint = J, s.controlsUtils = e;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.degreesToRadians, o = s.controlsUtils;
    function e(t, n, a, i, l) {
      i = i || {};
      var u = this.sizeX || i.cornerSize || l.cornerSize, d = this.sizeY || i.cornerSize || l.cornerSize, g = typeof i.transparentCorners < "u" ? i.transparentCorners : l.transparentCorners, m = g ? "stroke" : "fill", v = !g && (i.cornerStrokeColor || l.cornerStrokeColor), y = n, w = a, M;
      t.save(), t.fillStyle = i.cornerColor || l.cornerColor, t.strokeStyle = i.cornerStrokeColor || l.cornerStrokeColor, u > d ? (M = u, t.scale(1, d / u), w = a * u / d) : d > u ? (M = d, t.scale(u / d, 1), y = n * d / u) : M = u, t.lineWidth = 1, t.beginPath(), t.arc(y, w, M / 2, 0, 2 * Math.PI, !1), t[m](), v && t.stroke(), t.restore();
    }
    function r(t, n, a, i, l) {
      i = i || {};
      var u = this.sizeX || i.cornerSize || l.cornerSize, d = this.sizeY || i.cornerSize || l.cornerSize, g = typeof i.transparentCorners < "u" ? i.transparentCorners : l.transparentCorners, m = g ? "stroke" : "fill", v = !g && (i.cornerStrokeColor || l.cornerStrokeColor), y = u / 2, w = d / 2;
      t.save(), t.fillStyle = i.cornerColor || l.cornerColor, t.strokeStyle = i.cornerStrokeColor || l.cornerStrokeColor, t.lineWidth = 1, t.translate(n, a), t.rotate(h(l.angle)), t[m + "Rect"](-y, -w, u, d), v && t.strokeRect(-y, -w, u, d), t.restore();
    }
    o.renderCircleControl = e, o.renderSquareControl = r;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {});
    function h(o) {
      for (var e in o)
        this[e] = o[e];
    }
    s.Control = h, s.Control.prototype = /** @lends fabric.Control.prototype */
    {
      /**
       * keep track of control visibility.
       * mainly for backward compatibility.
       * if you do not want to see a control, you can remove it
       * from the controlset.
       * @type {Boolean}
       * @default true
       */
      visible: !0,
      /**
       * Name of the action that the control will likely execute.
       * This is optional. FabricJS uses to identify what the user is doing for some
       * extra optimizations. If you are writing a custom control and you want to know
       * somewhere else in the code what is going on, you can use this string here.
       * you can also provide a custom getActionName if your control run multiple actions
       * depending on some external state.
       * default to scale since is the most common, used on 4 corners by default
       * @type {String}
       * @default 'scale'
       */
      actionName: "scale",
      /**
       * Drawing angle of the control.
       * NOT used for now, but name marked as needed for internal logic
       * example: to reuse the same drawing function for different rotated controls
       * @type {Number}
       * @default 0
       */
      angle: 0,
      /**
       * Relative position of the control. X
       * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      x: 0,
      /**
       * Relative position of the control. Y
       * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      y: 0,
      /**
       * Horizontal offset of the control from the defined position. In pixels
       * Positive offset moves the control to the right, negative to the left.
       * It used when you want to have position of control that does not scale with
       * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
       * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
       * stay 30 pixels no matter how the object is big. Another example is having 2
       * controls in the corner, that stay in the same position when the object scale.
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
      offsetX: 0,
      /**
       * Vertical offset of the control from the defined position. In pixels
       * Positive offset moves the control to the bottom, negative to the top.
       * @type {Number}
       * @default 0
       */
      offsetY: 0,
      /**
       * Sets the length of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeX: null,
      /**
       * Sets the height of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      sizeY: null,
      /**
       * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeX: null,
      /**
       * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
      touchSizeY: null,
      /**
       * Css cursor style to display when the control is hovered.
       * if the method `cursorStyleHandler` is provided, this property is ignored.
       * @type {String}
       * @default 'crosshair'
       */
      cursorStyle: "crosshair",
      /**
       * If controls has an offsetY or offsetX, draw a line that connects
       * the control to the bounding box
       * @type {Boolean}
       * @default false
       */
      withConnection: !1,
      /**
       * The control actionHandler, provide one to handle action ( control being moved )
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      actionHandler: function() {
      },
      /**
       * The control handler for mouse down, provide one to handle mouse down on control
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseDownHandler: function() {
      },
      /**
       * The control mouseUpHandler, provide one to handle an effect on mouse up.
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
      mouseUpHandler: function() {
      },
      /**
       * Returns control actionHandler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getActionHandler: function() {
        return this.actionHandler;
      },
      /**
       * Returns control mouseDown handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseDownHandler: function() {
        return this.mouseDownHandler;
      },
      /**
       * Returns control mouseUp handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
      getMouseUpHandler: function() {
        return this.mouseUpHandler;
      },
      /**
       * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
       * function you can pass one in the constructor
       * the cursorStyle property
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      cursorStyleHandler: function(o, e) {
        return e.cursorStyle;
      },
      /**
       * Returns the action name. The basic implementation just return the actionName property.
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
      getActionName: function(o, e) {
        return e.actionName;
      },
      /**
       * Returns controls visibility
       * @param {fabric.Object} object on which the control is displayed
       * @param {String} controlKey key where the control is memorized on the
       * @return {Boolean}
       */
      getVisibility: function(o, e) {
        var r = o._controlsVisibility;
        return r && typeof r[e] < "u" ? r[e] : this.visible;
      },
      /**
       * Sets controls visibility
       * @param {Boolean} visibility for the object
       * @return {Void}
       */
      setVisibility: function(o) {
        this.visible = o;
      },
      positionHandler: function(o, e) {
        var r = s.util.transformPoint({
          x: this.x * o.x + this.offsetX,
          y: this.y * o.y + this.offsetY
        }, e);
        return r;
      },
      /**
       * Returns the coords for this control based on object values.
       * @param {Number} objectAngle angle from the fabric object holding the control
       * @param {Number} objectCornerSize cornerSize from the fabric object holding the control (or touchCornerSize if
       *   isTouch is true)
       * @param {Number} centerX x coordinate where the control center should be
       * @param {Number} centerY y coordinate where the control center should be
       * @param {boolean} isTouch true if touch corner, false if normal corner
       */
      calcCornerCoords: function(o, e, r, t, n) {
        var a, i, l, u, d = n ? this.touchSizeX : this.sizeX, g = n ? this.touchSizeY : this.sizeY;
        if (d && g && d !== g) {
          var m = Math.atan2(g, d), v = Math.sqrt(d * d + g * g) / 2, y = m - s.util.degreesToRadians(o), w = Math.PI / 2 - m - s.util.degreesToRadians(o);
          a = v * s.util.cos(y), i = v * s.util.sin(y), l = v * s.util.cos(w), u = v * s.util.sin(w);
        } else {
          var M = d && g ? d : e;
          v = M * 0.7071067812;
          var y = s.util.degreesToRadians(45 - o);
          a = l = v * s.util.cos(y), i = u = v * s.util.sin(y);
        }
        return {
          tl: {
            x: r - u,
            y: t - l
          },
          tr: {
            x: r + a,
            y: t - i
          },
          bl: {
            x: r - a,
            y: t + i
          },
          br: {
            x: r + u,
            y: t + l
          }
        };
      },
      /**
      * Render function for the control.
      * When this function runs the context is unscaled. unrotate. Just retina scaled.
      * all the functions will have to translate to the point left,top before starting Drawing
      * if they want to draw a control where the position is detected.
      * left and top are the result of the positionHandler function
      * @param {RenderingContext2D} ctx the context where the control will be drawn
      * @param {Number} left position of the canvas where we are about to render the control.
      * @param {Number} top position of the canvas where we are about to render the control.
      * @param {Object} styleOverride
      * @param {fabric.Object} fabricObject the object where the control is about to be rendered
      */
      render: function(o, e, r, t, n) {
        switch (t = t || {}, t.cornerStyle || n.cornerStyle) {
          case "circle":
            s.controlsUtils.renderCircleControl.call(this, o, e, r, t, n);
            break;
          default:
            s.controlsUtils.renderSquareControl.call(this, o, e, r, t, n);
        }
      }
    };
  }(Z), function() {
    function c(r, t) {
      var n = r.getAttribute("style"), a = r.getAttribute("offset") || 0, i, l, u, d;
      if (a = parseFloat(a) / (/%$/.test(a) ? 100 : 1), a = a < 0 ? 0 : a > 1 ? 1 : a, n) {
        var g = n.split(/\s*;\s*/);
        for (g[g.length - 1] === "" && g.pop(), d = g.length; d--; ) {
          var m = g[d].split(/\s*:\s*/), v = m[0].trim(), y = m[1].trim();
          v === "stop-color" ? i = y : v === "stop-opacity" && (u = y);
        }
      }
      return i || (i = r.getAttribute("stop-color") || "rgb(0,0,0)"), u || (u = r.getAttribute("stop-opacity")), i = new f.Color(i), l = i.getAlpha(), u = isNaN(parseFloat(u)) ? 1 : parseFloat(u), u *= l * t, {
        offset: a,
        color: i.toRgb(),
        opacity: u
      };
    }
    function s(r) {
      return {
        x1: r.getAttribute("x1") || 0,
        y1: r.getAttribute("y1") || 0,
        x2: r.getAttribute("x2") || "100%",
        y2: r.getAttribute("y2") || 0
      };
    }
    function h(r) {
      return {
        x1: r.getAttribute("fx") || r.getAttribute("cx") || "50%",
        y1: r.getAttribute("fy") || r.getAttribute("cy") || "50%",
        r1: 0,
        x2: r.getAttribute("cx") || "50%",
        y2: r.getAttribute("cy") || "50%",
        r2: r.getAttribute("r") || "50%"
      };
    }
    var o = f.util.object.clone;
    f.Gradient = f.util.createClass(
      /** @lends fabric.Gradient.prototype */
      {
        /**
         * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetX: 0,
        /**
         * Vertical offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
        offsetY: 0,
        /**
         * A transform matrix to apply to the gradient before painting.
         * Imported from svg gradients, is not applied with the current transform in the center.
         * Before this transform is applied, the origin point is at the top left corner of the object
         * plus the addition of offsetY and offsetX.
         * @type Number[]
         * @default null
         */
        gradientTransform: null,
        /**
         * coordinates units for coords.
         * If `pixels`, the number of coords are in the same unit of width / height.
         * If set as `percentage` the coords are still a number, but 1 means 100% of width
         * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
         * allowed values pixels or percentage.
         * @type String
         * @default 'pixels'
         */
        gradientUnits: "pixels",
        /**
         * Gradient type linear or radial
         * @type String
         * @default 'pixels'
         */
        type: "linear",
        /**
         * Constructor
         * @param {Object} options Options object with type, coords, gradientUnits and colorStops
         * @param {Object} [options.type] gradient type linear or radial
         * @param {Object} [options.gradientUnits] gradient units
         * @param {Object} [options.offsetX] SVG import compatibility
         * @param {Object} [options.offsetY] SVG import compatibility
         * @param {Object[]} options.colorStops contains the colorstops.
         * @param {Object} options.coords contains the coords of the gradient
         * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
         * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
         * @return {fabric.Gradient} thisArg
         */
        initialize: function(r) {
          r || (r = {}), r.coords || (r.coords = {});
          var t, n = this;
          Object.keys(r).forEach(function(a) {
            n[a] = r[a];
          }), this.id ? this.id += "_" + f.Object.__uid++ : this.id = f.Object.__uid++, t = {
            x1: r.coords.x1 || 0,
            y1: r.coords.y1 || 0,
            x2: r.coords.x2 || 0,
            y2: r.coords.y2 || 0
          }, this.type === "radial" && (t.r1 = r.coords.r1 || 0, t.r2 = r.coords.r2 || 0), this.coords = t, this.colorStops = r.colorStops.slice();
        },
        /**
         * Adds another colorStop
         * @param {Object} colorStop Object with offset and color
         * @return {fabric.Gradient} thisArg
         */
        addColorStop: function(r) {
          for (var t in r) {
            var n = new f.Color(r[t]);
            this.colorStops.push({
              offset: parseFloat(t),
              color: n.toRgb(),
              opacity: n.getAlpha()
            });
          }
          return this;
        },
        /**
         * Returns object representation of a gradient
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object}
         */
        toObject: function(r) {
          var t = {
            type: this.type,
            coords: this.coords,
            colorStops: this.colorStops,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            gradientUnits: this.gradientUnits,
            gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
          };
          return f.util.populateWithProperties(this, t, r), t;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of an gradient
         * @param {Object} object Object to create a gradient for
         * @return {String} SVG representation of an gradient (linear/radial)
         */
        toSVG: function(r, l) {
          var n = o(this.coords, !0), a, i, l = l || {}, u, d, g = o(this.colorStops, !0), m = n.r1 > n.r2, v = this.gradientTransform ? this.gradientTransform.concat() : f.iMatrix.concat(), y = -this.offsetX, w = -this.offsetY, M = !!l.additionalTransform, X = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
          if (g.sort(function(z, q) {
            return z.offset - q.offset;
          }), X === "objectBoundingBox" ? (y /= r.width, w /= r.height) : (y += r.width / 2, w += r.height / 2), r.type === "path" && this.gradientUnits !== "percentage" && (y -= r.pathOffset.x, w -= r.pathOffset.y), v[4] -= y, v[5] -= w, d = 'id="SVGID_' + this.id + '" gradientUnits="' + X + '"', d += ' gradientTransform="' + (M ? l.additionalTransform + " " : "") + f.util.matrixToSVG(v) + '" ', this.type === "linear" ? u = [
            "<linearGradient ",
            d,
            ' x1="',
            n.x1,
            '" y1="',
            n.y1,
            '" x2="',
            n.x2,
            '" y2="',
            n.y2,
            `">
`
          ] : this.type === "radial" && (u = [
            "<radialGradient ",
            d,
            ' cx="',
            m ? n.x1 : n.x2,
            '" cy="',
            m ? n.y1 : n.y2,
            '" r="',
            m ? n.r1 : n.r2,
            '" fx="',
            m ? n.x2 : n.x1,
            '" fy="',
            m ? n.y2 : n.y1,
            `">
`
          ]), this.type === "radial") {
            if (m)
              for (g = g.concat(), g.reverse(), a = 0, i = g.length; a < i; a++)
                g[a].offset = 1 - g[a].offset;
            var W = Math.min(n.r1, n.r2);
            if (W > 0) {
              var V = Math.max(n.r1, n.r2), N = W / V;
              for (a = 0, i = g.length; a < i; a++)
                g[a].offset += N * (1 - g[a].offset);
            }
          }
          for (a = 0, i = g.length; a < i; a++) {
            var H = g[a];
            u.push(
              "<stop ",
              'offset="',
              H.offset * 100 + "%",
              '" style="stop-color:',
              H.color,
              typeof H.opacity < "u" ? ";stop-opacity: " + H.opacity : ";",
              `"/>
`
            );
          }
          return u.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), u.join("");
        },
        /* _TO_SVG_END_ */
        /**
         * Returns an instance of CanvasGradient
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {CanvasGradient}
         */
        toLive: function(r) {
          var t, n = f.util.object.clone(this.coords), a, i;
          if (this.type) {
            for (this.type === "linear" ? t = r.createLinearGradient(
              n.x1,
              n.y1,
              n.x2,
              n.y2
            ) : this.type === "radial" && (t = r.createRadialGradient(
              n.x1,
              n.y1,
              n.r1,
              n.x2,
              n.y2,
              n.r2
            )), a = 0, i = this.colorStops.length; a < i; a++) {
              var l = this.colorStops[a].color, u = this.colorStops[a].opacity, d = this.colorStops[a].offset;
              typeof u < "u" && (l = new f.Color(l).setAlpha(u).toRgba()), t.addColorStop(d, l);
            }
            return t;
          }
        }
      }
    ), f.util.object.extend(f.Gradient, {
      /* _FROM_SVG_START_ */
      /**
       * Returns {@link fabric.Gradient} instance from an SVG element
       * @static
       * @memberOf fabric.Gradient
       * @param {SVGGradientElement} el SVG gradient element
       * @param {fabric.Object} instance
       * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
       * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly gradients
       * that uses gradientUnits as 'userSpaceOnUse' and percentages.
       * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
       * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
       * @param {Object.number} width width part of the svg tag if viewBox is not specified
       * @param {Object.number} height height part of the svg tag if viewBox is not specified
       * @return {fabric.Gradient} Gradient instance
       * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
       * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
       */
      fromElement: function(r, t, n, a) {
        var i = parseFloat(n) / (/%$/.test(n) ? 100 : 1);
        i = i < 0 ? 0 : i > 1 ? 1 : i, isNaN(i) && (i = 1);
        var l = r.getElementsByTagName("stop"), u, d = r.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", g = r.getAttribute("gradientTransform") || "", m = [], v, y, w = 0, M = 0, X;
        for (r.nodeName === "linearGradient" || r.nodeName === "LINEARGRADIENT" ? (u = "linear", v = s(r)) : (u = "radial", v = h(r)), y = l.length; y--; )
          m.push(c(l[y], i));
        X = f.parseTransformAttribute(g), e(t, v, a, d), d === "pixels" && (w = -t.left, M = -t.top);
        var W = new f.Gradient({
          id: r.getAttribute("id"),
          type: u,
          coords: v,
          colorStops: m,
          gradientUnits: d,
          gradientTransform: X,
          offsetX: w,
          offsetY: M
        });
        return W;
      }
      /* _FROM_SVG_END_ */
    });
    function e(r, t, n, a) {
      var i, l;
      Object.keys(t).forEach(function(u) {
        i = t[u], i === "Infinity" ? l = 1 : i === "-Infinity" ? l = 0 : (l = parseFloat(t[u], 10), typeof i == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(i) && (l *= 0.01, a === "pixels" && ((u === "x1" || u === "x2" || u === "r2") && (l *= n.viewBoxWidth || n.width), (u === "y1" || u === "y2") && (l *= n.viewBoxHeight || n.height)))), t[u] = l;
      });
    }
  }(), function() {
    var c = f.util.toFixed;
    f.Pattern = f.util.createClass(
      /** @lends fabric.Pattern.prototype */
      {
        /**
         * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @type String
         * @default
         */
        repeat: "repeat",
        /**
         * Pattern horizontal offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Pattern vertical offset from object's left/top corner
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
        crossOrigin: "",
        /**
         * transform matrix to change the pattern, imported from svgs.
         * @type Array
         * @default
         */
        patternTransform: null,
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @param {Function} [callback] function to invoke after callback init.
         * @return {fabric.Pattern} thisArg
         */
        initialize: function(s, h) {
          if (s || (s = {}), this.id = f.Object.__uid++, this.setOptions(s), !s.source || s.source && typeof s.source != "string") {
            h && h(this);
            return;
          } else {
            var o = this;
            this.source = f.util.createImage(), f.util.loadImage(s.source, function(e, r) {
              o.source = e, h && h(o, r);
            }, null, this.crossOrigin);
          }
        },
        /**
         * Returns object representation of a pattern
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of a pattern instance
         */
        toObject: function(s) {
          var h = f.Object.NUM_FRACTION_DIGITS, o, e;
          return typeof this.source.src == "string" ? o = this.source.src : typeof this.source == "object" && this.source.toDataURL && (o = this.source.toDataURL()), e = {
            type: "pattern",
            source: o,
            repeat: this.repeat,
            crossOrigin: this.crossOrigin,
            offsetX: c(this.offsetX, h),
            offsetY: c(this.offsetY, h),
            patternTransform: this.patternTransform ? this.patternTransform.concat() : null
          }, f.util.populateWithProperties(this, e, s), e;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a pattern
         * @param {fabric.Object} object
         * @return {String} SVG representation of a pattern
         */
        toSVG: function(s) {
          var h = typeof this.source == "function" ? this.source() : this.source, o = h.width / s.width, e = h.height / s.height, r = this.offsetX / s.width, t = this.offsetY / s.height, n = "";
          return (this.repeat === "repeat-x" || this.repeat === "no-repeat") && (e = 1, t && (e += Math.abs(t))), (this.repeat === "repeat-y" || this.repeat === "no-repeat") && (o = 1, r && (o += Math.abs(r))), h.src ? n = h.src : h.toDataURL && (n = h.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + r + '" y="' + t + '" width="' + o + '" height="' + e + `">
<image x="0" y="0" width="` + h.width + '" height="' + h.height + '" xlink:href="' + n + `"></image>
</pattern>
`;
        },
        /* _TO_SVG_END_ */
        setOptions: function(s) {
          for (var h in s)
            this[h] = s[h];
        },
        /**
         * Returns an instance of CanvasPattern
         * @param {CanvasRenderingContext2D} ctx Context to create pattern
         * @return {CanvasPattern}
         */
        toLive: function(s) {
          var h = this.source;
          return !h || typeof h.src < "u" && (!h.complete || h.naturalWidth === 0 || h.naturalHeight === 0) ? "" : s.createPattern(h, this.repeat);
        }
      }
    );
  }(), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.toFixed;
    if (s.Shadow) {
      s.warn("fabric.Shadow is already defined.");
      return;
    }
    s.Shadow = s.util.createClass(
      /** @lends fabric.Shadow.prototype */
      {
        /**
         * Shadow color
         * @type String
         * @default
         */
        color: "rgb(0,0,0)",
        /**
         * Shadow blur
         * @type Number
         */
        blur: 0,
        /**
         * Shadow horizontal offset
         * @type Number
         * @default
         */
        offsetX: 0,
        /**
         * Shadow vertical offset
         * @type Number
         * @default
         */
        offsetY: 0,
        /**
         * Whether the shadow should affect stroke operations
         * @type Boolean
         * @default
         */
        affectStroke: !1,
        /**
         * Indicates whether toObject should include default values
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `false`, the shadow will scale with the object.
         * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
         * default to false
         * @type Boolean
         * @default
         */
        nonScaling: !1,
        /**
         * Constructor
         * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
         * @return {fabric.Shadow} thisArg
         */
        initialize: function(o) {
          typeof o == "string" && (o = this._parseShadow(o));
          for (var e in o)
            this[e] = o[e];
          this.id = s.Object.__uid++;
        },
        /**
         * @private
         * @param {String} shadow Shadow value to parse
         * @return {Object} Shadow object with color, offsetX, offsetY and blur
         */
        _parseShadow: function(o) {
          var e = o.trim(), r = s.Shadow.reOffsetsAndBlur.exec(e) || [], t = e.replace(s.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
          return {
            color: t.trim(),
            offsetX: parseFloat(r[1], 10) || 0,
            offsetY: parseFloat(r[2], 10) || 0,
            blur: parseFloat(r[3], 10) || 0
          };
        },
        /**
         * Returns a string representation of an instance
         * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
         * @return {String} Returns CSS3 text-shadow declaration
         */
        toString: function() {
          return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns SVG representation of a shadow
         * @param {fabric.Object} object
         * @return {String} SVG representation of a shadow
         */
        toSVG: function(o) {
          var e = 40, r = 40, t = s.Object.NUM_FRACTION_DIGITS, n = s.util.rotateVector(
            { x: this.offsetX, y: this.offsetY },
            s.util.degreesToRadians(-o.angle)
          ), a = 20, i = new s.Color(this.color);
          return o.width && o.height && (e = h((Math.abs(n.x) + this.blur) / o.width, t) * 100 + a, r = h((Math.abs(n.y) + this.blur) / o.height, t) * 100 + a), o.flipX && (n.x *= -1), o.flipY && (n.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + r + '%" height="' + (100 + 2 * r) + '%" x="-' + e + '%" width="' + (100 + 2 * e) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + h(this.blur ? this.blur / 2 : 0, t) + `"></feGaussianBlur>
	<feOffset dx="` + h(n.x, t) + '" dy="' + h(n.y, t) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + i.toRgb() + '" flood-opacity="' + i.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns object representation of a shadow
         * @return {Object} Object representation of a shadow instance
         */
        toObject: function() {
          if (this.includeDefaultValues)
            return {
              color: this.color,
              blur: this.blur,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              affectStroke: this.affectStroke,
              nonScaling: this.nonScaling
            };
          var o = {}, e = s.Shadow.prototype;
          return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(r) {
            this[r] !== e[r] && (o[r] = this[r]);
          }, this), o;
        }
      }
    ), s.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/;
  }(Z), function() {
    if (f.StaticCanvas) {
      f.warn("fabric.StaticCanvas is already defined.");
      return;
    }
    var c = f.util.object.extend, s = f.util.getElementOffset, h = f.util.removeFromArray, o = f.util.toFixed, e = f.util.transformPoint, r = f.util.invertTransform, t = f.util.getNodeCanvas, n = f.util.createCanvasElement, a = new Error("Could not initialize `canvas` element");
    f.StaticCanvas = f.util.createClass(
      f.CommonMethods,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(i, l) {
          l || (l = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(i, l);
        },
        /**
         * Background color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
         * @type {(String|fabric.Pattern)}
         * @default
         */
        backgroundColor: "",
        /**
         * Background image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as background, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        backgroundImage: null,
        /**
         * Overlay color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
         * @since 1.3.9
         * @type {(String|fabric.Pattern)}
         * @default
         */
        overlayColor: "",
        /**
         * Overlay image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
        overlayImage: null,
        /**
         * Indicates whether toObject/toDatalessObject should include default values
         * if set to false, takes precedence over the object value.
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * Indicates whether objects' state should be saved
         * @type Boolean
         * @default
         */
        stateful: !1,
        /**
         * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
         * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
         * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
         * since the renders are quequed and executed one per frame.
         * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
         * Left default to true to do not break documentation and old app, fiddles.
         * @type Boolean
         * @default
         */
        renderOnAddRemove: !0,
        /**
         * Indicates whether object controls (borders/controls) are rendered above overlay image
         * @type Boolean
         * @default
         */
        controlsAboveOverlay: !1,
        /**
         * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
         * @type Boolean
         * @default
         */
        allowTouchScrolling: !1,
        /**
         * Indicates whether this canvas will use image smoothing, this is on by default in browsers
         * @type Boolean
         * @default
         */
        imageSmoothingEnabled: !0,
        /**
         * The transformation (a Canvas 2D API transform matrix) which focuses the viewport
         * @type Array
         * @example <caption>Default transform</caption>
         * canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
         * @example <caption>Scale by 70% and translate toward bottom-right by 50, without skewing</caption>
         * canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
         * @default
         */
        viewportTransform: f.iMatrix.concat(),
        /**
         * if set to false background image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        backgroundVpt: !0,
        /**
         * if set to false overlya image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        overlayVpt: !0,
        /**
         * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
         * @type Boolean
         * @default
         */
        enableRetinaScaling: !0,
        /**
         * Describe canvas element extension over design
         * properties are tl,tr,bl,br.
         * if canvas is not zoomed/panned those points are the four corner of canvas
         * if canvas is viewportTransformed you those points indicate the extension
         * of canvas element in plain untrasformed coordinates
         * The coordinates get updated with @method calcViewportBoundaries.
         * @memberOf fabric.StaticCanvas.prototype
         */
        vptCoords: {},
        /**
         * Based on vptCoords and object.aCoords, skip rendering of objects that
         * are not included in current viewport.
         * May greatly help in applications with crowded canvas and use of zoom/pan
         * If One of the corner of the bounding box of the object is on the canvas
         * the objects get rendered.
         * @memberOf fabric.StaticCanvas.prototype
         * @type Boolean
         * @default
         */
        skipOffscreen: !0,
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the canvas has rendered, and the context is placed in the
         * top left corner of the canvas.
         * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * @private
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         */
        _initStatic: function(i, l) {
          var u = this.requestRenderAllBound;
          this._objects = [], this._createLowerCanvas(i), this._initOptions(l), this.interactive || this._initRetinaScaling(), l.overlayImage && this.setOverlayImage(l.overlayImage, u), l.backgroundImage && this.setBackgroundImage(l.backgroundImage, u), l.backgroundColor && this.setBackgroundColor(l.backgroundColor, u), l.overlayColor && this.setOverlayColor(l.overlayColor, u), this.calcOffset();
        },
        /**
         * @private
         */
        _isRetinaScaling: function() {
          return f.devicePixelRatio > 1 && this.enableRetinaScaling;
        },
        /**
         * @private
         * @return {Number} retinaScaling if applied, otherwise 1;
         */
        getRetinaScaling: function() {
          return this._isRetinaScaling() ? Math.max(1, f.devicePixelRatio) : 1;
        },
        /**
         * @private
         */
        _initRetinaScaling: function() {
          if (this._isRetinaScaling()) {
            var i = f.devicePixelRatio;
            this.__initRetinaScaling(i, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(i, this.upperCanvasEl, this.contextTop);
          }
        },
        __initRetinaScaling: function(i, l, u) {
          l.setAttribute("width", this.width * i), l.setAttribute("height", this.height * i), u.scale(i, i);
        },
        /**
         * Calculates canvas element offset relative to the document
         * This method is also attached as "resize" event handler of window
         * @return {fabric.Canvas} instance
         * @chainable
         */
        calcOffset: function() {
          return this._offset = s(this.lowerCanvasEl), this;
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
         * @param {Function} callback callback to invoke when image is loaded and set as an overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
         * @example <caption>Normal overlayImage with left/top = 0</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage with different properties</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage loaded from cross-origin</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        setOverlayImage: function(i, l, u) {
          return this.__setBgOverlayImage("overlayImage", i, l, u);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
         * @param {Function} callback Callback to invoke when image is loaded and set as background
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
         * @example <caption>Normal backgroundImage with left/top = 0</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage with different properties</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage loaded from cross-origin</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
        // TODO: fix stretched examples
        setBackgroundImage: function(i, l, u) {
          return this.__setBgOverlayImage("backgroundImage", i, l, u);
        },
        /**
         * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
         * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
         * @param {Function} callback Callback to invoke when foreground color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
         * @example <caption>Normal overlayColor - color value</caption>
         * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setOverlayColor: function(i, l) {
          return this.__setBgOverlayColor("overlayColor", i, l);
        },
        /**
         * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
         * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
         * @param {Function} callback Callback to invoke when background color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
         * @example <caption>Normal backgroundColor - color value</caption>
         * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
        setBackgroundColor: function(i, l) {
          return this.__setBgOverlayColor("backgroundColor", i, l);
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
         * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
         * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
         * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay. The first argument is the created image, the second argument is a flag indicating whether an error occurred or not.
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
         */
        __setBgOverlayImage: function(i, l, u, d) {
          return typeof l == "string" ? f.util.loadImage(l, function(g, m) {
            if (g) {
              var v = new f.Image(g, d);
              this[i] = v, v.canvas = this;
            }
            u && u(g, m);
          }, this, d && d.crossOrigin) : (d && l.setOptions(d), this[i] = l, l && (l.canvas = this), u && u(l, !1)), this;
        },
        /**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
         * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
         * @param {(Object|String|null)} color Object with pattern information, color value or null
         * @param {Function} [callback] Callback is invoked when color is set
         */
        __setBgOverlayColor: function(i, l, u) {
          return this[i] = l, this._initGradient(l, i), this._initPattern(l, i, u), this;
        },
        /**
         * @private
         */
        _createCanvasElement: function() {
          var i = n();
          if (!i || (i.style || (i.style = {}), typeof i.getContext > "u"))
            throw a;
          return i;
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initOptions: function(i) {
          var l = this.lowerCanvasEl;
          this._setOptions(i), this.width = this.width || parseInt(l.width, 10) || 0, this.height = this.height || parseInt(l.height, 10) || 0, this.lowerCanvasEl.style && (l.width = this.width, l.height = this.height, l.style.width = this.width + "px", l.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
        },
        /**
         * Creates a bottom canvas
         * @private
         * @param {HTMLElement} [canvasEl]
         */
        _createLowerCanvas: function(i) {
          i && i.getContext ? this.lowerCanvasEl = i : this.lowerCanvasEl = f.util.getById(i) || this._createCanvasElement(), f.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
        },
        /**
         * Returns canvas width (in px)
         * @return {Number}
         */
        getWidth: function() {
          return this.width;
        },
        /**
         * Returns canvas height (in px)
         * @return {Number}
         */
        getHeight: function() {
          return this.height;
        },
        /**
         * Sets width of this canvas instance
         * @param {Number|String} value                         Value to set width to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setWidth: function(i, l) {
          return this.setDimensions({ width: i }, l);
        },
        /**
         * Sets height of this canvas instance
         * @param {Number|String} value                         Value to set height to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setHeight: function(i, l) {
          return this.setDimensions({ height: i }, l);
        },
        /**
         * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
         * @param {Object}        dimensions                    Object with width/height properties
         * @param {Number|String} [dimensions.width]            Width of canvas element
         * @param {Number|String} [dimensions.height]           Height of canvas element
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setDimensions: function(i, l) {
          var u;
          l = l || {};
          for (var d in i)
            u = i[d], l.cssOnly || (this._setBackstoreDimension(d, i[d]), u += "px", this.hasLostContext = !0), l.backstoreOnly || this._setCssDimension(d, u);
          return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), l.cssOnly || this.requestRenderAll(), this;
        },
        /**
         * Helper for setting width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {Number} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setBackstoreDimension: function(i, l) {
          return this.lowerCanvasEl[i] = l, this.upperCanvasEl && (this.upperCanvasEl[i] = l), this.cacheCanvasEl && (this.cacheCanvasEl[i] = l), this[i] = l, this;
        },
        /**
         * Helper for setting css width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {String} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        _setCssDimension: function(i, l) {
          return this.lowerCanvasEl.style[i] = l, this.upperCanvasEl && (this.upperCanvasEl.style[i] = l), this.wrapperEl && (this.wrapperEl.style[i] = l), this;
        },
        /**
         * Returns canvas zoom level
         * @return {Number}
         */
        getZoom: function() {
          return this.viewportTransform[0];
        },
        /**
         * Sets viewport transformation of this canvas instance
         * @param {Array} vpt a Canvas 2D API transform matrix
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setViewportTransform: function(i) {
          var l = this._activeObject, u = this.backgroundImage, d = this.overlayImage, g, m, v;
          for (this.viewportTransform = i, m = 0, v = this._objects.length; m < v; m++)
            g = this._objects[m], g.group || g.setCoords(!0);
          return l && l.setCoords(), u && u.setCoords(!0), d && d.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Sets zoom level of this canvas instance, the zoom centered around point
         * meaning that following zoom to point with the same point will have the visual
         * effect of the zoom originating from that point. The point won't move.
         * It has nothing to do with canvas center or visual center of the viewport.
         * @param {fabric.Point} point to zoom with respect to
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        zoomToPoint: function(i, l) {
          var u = i, d = this.viewportTransform.slice(0);
          i = e(i, r(this.viewportTransform)), d[0] = l, d[3] = l;
          var g = e(i, d);
          return d[4] += u.x - g.x, d[5] += u.y - g.y, this.setViewportTransform(d);
        },
        /**
         * Sets zoom level of this canvas instance
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        setZoom: function(i) {
          return this.zoomToPoint(new f.Point(0, 0), i), this;
        },
        /**
         * Pan viewport so as to place point at top left corner of canvas
         * @param {fabric.Point} point to move to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        absolutePan: function(i) {
          var l = this.viewportTransform.slice(0);
          return l[4] = -i.x, l[5] = -i.y, this.setViewportTransform(l);
        },
        /**
         * Pans viewpoint relatively
         * @param {fabric.Point} point (position vector) to move by
         * @return {fabric.Canvas} instance
         * @chainable true
         */
        relativePan: function(i) {
          return this.absolutePan(new f.Point(
            -i.x - this.viewportTransform[4],
            -i.y - this.viewportTransform[5]
          ));
        },
        /**
         * Returns &lt;canvas> element corresponding to this instance
         * @return {HTMLCanvasElement}
         */
        getElement: function() {
          return this.lowerCanvasEl;
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was added
         */
        _onObjectAdded: function(i) {
          this.stateful && i.setupState(), i._set("canvas", this), i.setCoords(), this.fire("object:added", { target: i }), i.fire("added");
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(i) {
          this.fire("object:removed", { target: i }), i.fire("removed"), delete i.canvas;
        },
        /**
         * Clears specified context of canvas element
         * @param {CanvasRenderingContext2D} ctx Context to clear
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clearContext: function(i) {
          return i.clearRect(0, 0, this.width, this.height), this;
        },
        /**
         * Returns context of canvas where objects are drawn
         * @return {CanvasRenderingContext2D}
         */
        getContext: function() {
          return this.contextContainer;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Renders the canvas
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          var i = this.contextContainer;
          return this.renderCanvas(i, this._objects), this;
        },
        /**
         * Function created to be instance bound at initialization
         * used in requestAnimationFrame rendering
         * Let the fabricJS call it. If you call it manually you could have more
         * animationFrame stacking on to of each other
         * for an imperative rendering, use canvas.renderAll
         * @private
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAndReset: function() {
          this.isRendering = 0, this.renderAll();
        },
        /**
         * Append a renderAll request to next animation frame.
         * unless one is already in progress, in that case nothing is done
         * a boolean flag will avoid appending more.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        requestRenderAll: function() {
          return this.isRendering || (this.isRendering = f.util.requestAnimFrame(this.renderAndResetBound)), this;
        },
        /**
         * Calculate the position of the 4 corner of canvas with current viewportTransform.
         * helps to determinate when an object is in the current rendering viewport using
         * object absolute coordinates ( aCoords )
         * @return {Object} points.tl
         * @chainable
         */
        calcViewportBoundaries: function() {
          var i = {}, l = this.width, u = this.height, d = r(this.viewportTransform);
          return i.tl = e({ x: 0, y: 0 }, d), i.br = e({ x: l, y: u }, d), i.tr = new f.Point(i.br.x, i.tl.y), i.bl = new f.Point(i.tl.x, i.br.y), this.vptCoords = i, i;
        },
        cancelRequestedRender: function() {
          this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
        },
        /**
         * Renders background, objects, overlay and controls.
         * @param {CanvasRenderingContext2D} ctx
         * @param {Array} objects to render
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderCanvas: function(i, l) {
          var u = this.viewportTransform, d = this.clipPath;
          this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(i), f.util.setImageSmoothing(i, this.imageSmoothingEnabled), this.fire("before:render", { ctx: i }), this._renderBackground(i), i.save(), i.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._renderObjects(i, l), i.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(i), d && (d.canvas = this, d.shouldCache(), d._transformDone = !0, d.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(i)), this._renderOverlay(i), this.controlsAboveOverlay && this.interactive && this.drawControls(i), this.fire("after:render", { ctx: i });
        },
        /**
         * Paint the cached clipPath on the lowerCanvasEl
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawClipPathOnCanvas: function(i) {
          var l = this.viewportTransform, u = this.clipPath;
          i.save(), i.transform(l[0], l[1], l[2], l[3], l[4], l[5]), i.globalCompositeOperation = "destination-in", u.transform(i), i.scale(1 / u.zoomX, 1 / u.zoomY), i.drawImage(u._cacheCanvas, -u.cacheTranslationX, -u.cacheTranslationY), i.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} objects to render
         */
        _renderObjects: function(i, l) {
          var u, d;
          for (u = 0, d = l.length; u < d; ++u)
            l[u] && l[u].render(i);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {string} property 'background' or 'overlay'
         */
        _renderBackgroundOrOverlay: function(i, l) {
          var u = this[l + "Color"], d = this[l + "Image"], g = this.viewportTransform, m = this[l + "Vpt"];
          if (!(!u && !d)) {
            if (u) {
              i.save(), i.beginPath(), i.moveTo(0, 0), i.lineTo(this.width, 0), i.lineTo(this.width, this.height), i.lineTo(0, this.height), i.closePath(), i.fillStyle = u.toLive ? u.toLive(i, this) : u, m && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), i.transform(1, 0, 0, 1, u.offsetX || 0, u.offsetY || 0);
              var v = u.gradientTransform || u.patternTransform;
              v && i.transform(v[0], v[1], v[2], v[3], v[4], v[5]), i.fill(), i.restore();
            }
            d && (i.save(), m && i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), d.render(i), i.restore());
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(i) {
          this._renderBackgroundOrOverlay(i, "background");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderOverlay: function(i) {
          this._renderBackgroundOrOverlay(i, "overlay");
        },
        /**
         * Returns coordinates of a center of canvas.
         * Returned value is an object with top and left properties
         * @return {Object} object with "top" and "left" number values
         * @deprecated migrate to `getCenterPoint`
         */
        getCenter: function() {
          return {
            top: this.height / 2,
            left: this.width / 2
          };
        },
        /**
         * Returns coordinates of a center of canvas.
         * @return {fabric.Point} 
         */
        getCenterPoint: function() {
          return new f.Point(this.width / 2, this.height / 2);
        },
        /**
         * Centers object horizontally in the canvas
         * @param {fabric.Object} object Object to center horizontally
         * @return {fabric.Canvas} thisArg
         */
        centerObjectH: function(i) {
          return this._centerObject(i, new f.Point(this.getCenterPoint().x, i.getCenterPoint().y));
        },
        /**
         * Centers object vertically in the canvas
         * @param {fabric.Object} object Object to center vertically
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObjectV: function(i) {
          return this._centerObject(i, new f.Point(i.getCenterPoint().x, this.getCenterPoint().y));
        },
        /**
         * Centers object vertically and horizontally in the canvas
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        centerObject: function(i) {
          var l = this.getCenterPoint();
          return this._centerObject(i, l);
        },
        /**
         * Centers object vertically and horizontally in the viewport
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObject: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, l);
        },
        /**
         * Centers object horizontally in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectH: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, new f.Point(l.x, i.getCenterPoint().y)), this;
        },
        /**
         * Centers object Vertically in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        viewportCenterObjectV: function(i) {
          var l = this.getVpCenter();
          return this._centerObject(i, new f.Point(i.getCenterPoint().x, l.y));
        },
        /**
         * Calculate the point in canvas that correspond to the center of actual viewport.
         * @return {fabric.Point} vpCenter, viewport center
         * @chainable
         */
        getVpCenter: function() {
          var i = this.getCenterPoint(), l = r(this.viewportTransform);
          return e(i, l);
        },
        /**
         * @private
         * @param {fabric.Object} object Object to center
         * @param {fabric.Point} center Center point
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        _centerObject: function(i, l) {
          return i.setPositionByOrigin(l, "center", "center"), i.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Returns dataless JSON representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {String} json string
         */
        toDatalessJSON: function(i) {
          return this.toDatalessObject(i);
        },
        /**
         * Returns object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(i) {
          return this._toObjectMethod("toObject", i);
        },
        /**
         * Returns dataless object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(i) {
          return this._toObjectMethod("toDatalessObject", i);
        },
        /**
         * @private
         */
        _toObjectMethod: function(i, l) {
          var u = this.clipPath, d = {
            version: f.version,
            objects: this._toObjects(i, l)
          };
          return u && !u.excludeFromExport && (d.clipPath = this._toObject(this.clipPath, i, l)), c(d, this.__serializeBgOverlay(i, l)), f.util.populateWithProperties(this, d, l), d;
        },
        /**
         * @private
         */
        _toObjects: function(i, l) {
          return this._objects.filter(function(u) {
            return !u.excludeFromExport;
          }).map(function(u) {
            return this._toObject(u, i, l);
          }, this);
        },
        /**
         * @private
         */
        _toObject: function(i, l, u) {
          var d;
          this.includeDefaultValues || (d = i.includeDefaultValues, i.includeDefaultValues = !1);
          var g = i[l](u);
          return this.includeDefaultValues || (i.includeDefaultValues = d), g;
        },
        /**
         * @private
         */
        __serializeBgOverlay: function(i, l) {
          var u = {}, d = this.backgroundImage, g = this.overlayImage, m = this.backgroundColor, v = this.overlayColor;
          return m && m.toObject ? m.excludeFromExport || (u.background = m.toObject(l)) : m && (u.background = m), v && v.toObject ? v.excludeFromExport || (u.overlay = v.toObject(l)) : v && (u.overlay = v), d && !d.excludeFromExport && (u.backgroundImage = this._toObject(d, i, l)), g && !g.excludeFromExport && (u.overlayImage = this._toObject(g, i, l)), u;
        },
        /* _TO_SVG_START_ */
        /**
         * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
         * a zoomed canvas will then produce zoomed SVG output.
         * @type Boolean
         * @default
         */
        svgViewportTransformation: !0,
        /**
         * Returns SVG representation of canvas
         * @function
         * @param {Object} [options] Options object for SVG output
         * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
         * @param {Object} [options.viewBox] SVG viewbox object
         * @param {Number} [options.viewBox.x] x-coordinate of viewbox
         * @param {Number} [options.viewBox.y] y-coordinate of viewbox
         * @param {Number} [options.viewBox.width] Width of viewbox
         * @param {Number} [options.viewBox.height] Height of viewbox
         * @param {String} [options.encoding=UTF-8] Encoding of SVG output
         * @param {String} [options.width] desired width of svg with or without units
         * @param {String} [options.height] desired height of svg with or without units
         * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
         * @return {String} SVG string
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
         * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
         * @example <caption>Normal SVG output</caption>
         * var svg = canvas.toSVG();
         * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
         * var svg = canvas.toSVG({suppressPreamble: true});
         * @example <caption>SVG output with viewBox attribute</caption>
         * var svg = canvas.toSVG({
         *   viewBox: {
         *     x: 100,
         *     y: 100,
         *     width: 200,
         *     height: 300
         *   }
         * });
         * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
         * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
         * @example <caption>Modify SVG output with reviver function</caption>
         * var svg = canvas.toSVG(null, function(svg) {
         *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
         * });
         */
        toSVG: function(i, l) {
          i || (i = {}), i.reviver = l;
          var u = [];
          return this._setSVGPreamble(u, i), this._setSVGHeader(u, i), this.clipPath && u.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(u, "background"), this._setSVGBgOverlayImage(u, "backgroundImage", l), this._setSVGObjects(u, l), this.clipPath && u.push(`</g>
`), this._setSVGBgOverlayColor(u, "overlay"), this._setSVGBgOverlayImage(u, "overlayImage", l), u.push("</svg>"), u.join("");
        },
        /**
         * @private
         */
        _setSVGPreamble: function(i, l) {
          l.suppressPreamble || i.push(
            '<?xml version="1.0" encoding="',
            l.encoding || "UTF-8",
            `" standalone="no" ?>
`,
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
            `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
          );
        },
        /**
         * @private
         */
        _setSVGHeader: function(i, l) {
          var u = l.width || this.width, d = l.height || this.height, g, m = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', v = f.Object.NUM_FRACTION_DIGITS;
          l.viewBox ? m = 'viewBox="' + l.viewBox.x + " " + l.viewBox.y + " " + l.viewBox.width + " " + l.viewBox.height + '" ' : this.svgViewportTransformation && (g = this.viewportTransform, m = 'viewBox="' + o(-g[4] / g[0], v) + " " + o(-g[5] / g[3], v) + " " + o(this.width / g[0], v) + " " + o(this.height / g[3], v) + '" '), i.push(
            "<svg ",
            'xmlns="http://www.w3.org/2000/svg" ',
            'xmlns:xlink="http://www.w3.org/1999/xlink" ',
            'version="1.1" ',
            'width="',
            u,
            '" ',
            'height="',
            d,
            '" ',
            m,
            `xml:space="preserve">
`,
            "<desc>Created with Fabric.js ",
            f.version,
            `</desc>
`,
            `<defs>
`,
            this.createSVGFontFacesMarkup(),
            this.createSVGRefElementsMarkup(),
            this.createSVGClipPathMarkup(l),
            `</defs>
`
          );
        },
        createSVGClipPathMarkup: function(i) {
          var l = this.clipPath;
          return l ? (l.clipPathId = "CLIPPATH_" + f.Object.__uid++, '<clipPath id="' + l.clipPathId + `" >
` + this.clipPath.toClipPathSVG(i.reviver) + `</clipPath>
`) : "";
        },
        /**
         * Creates markup containing SVG referenced elements like patterns, gradients etc.
         * @return {String}
         */
        createSVGRefElementsMarkup: function() {
          var i = this, l = ["background", "overlay"].map(function(u) {
            var d = i[u + "Color"];
            if (d && d.toLive) {
              var g = i[u + "Vpt"], m = i.viewportTransform, v = {
                width: i.width / (g ? m[0] : 1),
                height: i.height / (g ? m[3] : 1)
              };
              return d.toSVG(
                v,
                { additionalTransform: g ? f.util.matrixToSVG(m) : "" }
              );
            }
          });
          return l.join("");
        },
        /**
         * Creates markup containing SVG font faces,
         * font URLs for font faces must be collected by developers
         * and are not extracted from the DOM by fabricjs
         * @param {Array} objects Array of fabric objects
         * @return {String}
         */
        createSVGFontFacesMarkup: function() {
          var i = "", l = {}, u, d, g, m, v, y, w, M, X, W = f.fontPaths, V = [];
          for (this._objects.forEach(function H(z) {
            V.push(z), z._objects && z._objects.forEach(H);
          }), M = 0, X = V.length; M < X; M++)
            if (u = V[M], d = u.fontFamily, !(u.type.indexOf("text") === -1 || l[d] || !W[d]) && (l[d] = !0, !!u.styles)) {
              g = u.styles;
              for (v in g) {
                m = g[v];
                for (w in m)
                  y = m[w], d = y.fontFamily, !l[d] && W[d] && (l[d] = !0);
              }
            }
          for (var N in l)
            i += [
              `		@font-face {
`,
              "			font-family: '",
              N,
              `';
`,
              "			src: url('",
              W[N],
              `');
`,
              `		}
`
            ].join("");
          return i && (i = [
            '	<style type="text/css">',
            `<![CDATA[
`,
            i,
            "]]>",
            `</style>
`
          ].join("")), i;
        },
        /**
         * @private
         */
        _setSVGObjects: function(i, l) {
          var u, d, g, m = this._objects;
          for (d = 0, g = m.length; d < g; d++)
            u = m[d], !u.excludeFromExport && this._setSVGObject(i, u, l);
        },
        /**
         * @private
         */
        _setSVGObject: function(i, l, u) {
          i.push(l.toSVG(u));
        },
        /**
         * @private
         */
        _setSVGBgOverlayImage: function(i, l, u) {
          this[l] && !this[l].excludeFromExport && this[l].toSVG && i.push(this[l].toSVG(u));
        },
        /**
         * @private
         */
        _setSVGBgOverlayColor: function(i, l) {
          var u = this[l + "Color"], d = this.viewportTransform, g = this.width, m = this.height;
          if (u)
            if (u.toLive) {
              var v = u.repeat, y = f.util.invertTransform(d), w = this[l + "Vpt"], M = w ? f.util.matrixToSVG(y) : "";
              i.push(
                '<rect transform="' + M + " translate(",
                g / 2,
                ",",
                m / 2,
                ')"',
                ' x="',
                u.offsetX - g / 2,
                '" y="',
                u.offsetY - m / 2,
                '" ',
                'width="',
                v === "repeat-y" || v === "no-repeat" ? u.source.width : g,
                '" height="',
                v === "repeat-x" || v === "no-repeat" ? u.source.height : m,
                '" fill="url(#SVGID_' + u.id + ')"',
                `></rect>
`
              );
            } else
              i.push(
                '<rect x="0" y="0" width="100%" height="100%" ',
                'fill="',
                u,
                '"',
                `></rect>
`
              );
        },
        /* _TO_SVG_END_ */
        /**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendToBack: function(i) {
          if (!i)
            return this;
          var l = this._activeObject, u, d, g;
          if (i === l && i.type === "activeSelection")
            for (g = l._objects, u = g.length; u--; )
              d = g[u], h(this._objects, d), this._objects.unshift(d);
          else
            h(this._objects, i), this._objects.unshift(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringToFront: function(i) {
          if (!i)
            return this;
          var l = this._activeObject, u, d, g;
          if (i === l && i.type === "activeSelection")
            for (g = l._objects, u = 0; u < g.length; u++)
              d = g[u], h(this._objects, d), this._objects.push(d);
          else
            h(this._objects, i), this._objects.push(i);
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * Moves an object or a selection down in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        sendBackwards: function(i, l) {
          if (!i)
            return this;
          var u = this._activeObject, d, g, m, v, y, w = 0;
          if (i === u && i.type === "activeSelection")
            for (y = u._objects, d = 0; d < y.length; d++)
              g = y[d], m = this._objects.indexOf(g), m > 0 + w && (v = m - 1, h(this._objects, g), this._objects.splice(v, 0, g)), w++;
          else
            m = this._objects.indexOf(i), m !== 0 && (v = this._findNewLowerIndex(i, m, l), h(this._objects, i), this._objects.splice(v, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewLowerIndex: function(i, l, u) {
          var d, g;
          if (u)
            for (d = l, g = l - 1; g >= 0; --g) {
              var m = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (m) {
                d = g;
                break;
              }
            }
          else
            d = l - 1;
          return d;
        },
        /**
         * Moves an object or a selection up in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        bringForward: function(i, l) {
          if (!i)
            return this;
          var u = this._activeObject, d, g, m, v, y, w = 0;
          if (i === u && i.type === "activeSelection")
            for (y = u._objects, d = y.length; d--; )
              g = y[d], m = this._objects.indexOf(g), m < this._objects.length - 1 - w && (v = m + 1, h(this._objects, g), this._objects.splice(v, 0, g)), w++;
          else
            m = this._objects.indexOf(i), m !== this._objects.length - 1 && (v = this._findNewUpperIndex(i, m, l), h(this._objects, i), this._objects.splice(v, 0, i));
          return this.renderOnAddRemove && this.requestRenderAll(), this;
        },
        /**
         * @private
         */
        _findNewUpperIndex: function(i, l, u) {
          var d, g, m;
          if (u)
            for (d = l, g = l + 1, m = this._objects.length; g < m; ++g) {
              var v = i.intersectsWithObject(this._objects[g]) || i.isContainedWithinObject(this._objects[g]) || this._objects[g].isContainedWithinObject(i);
              if (v) {
                d = g;
                break;
              }
            }
          else
            d = l + 1;
          return d;
        },
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {Number} index Position to move to
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        moveTo: function(i, l) {
          return h(this._objects, i), this._objects.splice(l, 0, i), this.renderOnAddRemove && this.requestRenderAll();
        },
        /**
         * Clears a canvas element and dispose objects
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          return this.isRendering && (f.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(i) {
            i.dispose && i.dispose();
          }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), f.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), f.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
        },
        /**
         * Returns a string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
        }
      }
    ), c(f.StaticCanvas.prototype, f.Observable), c(f.StaticCanvas.prototype, f.Collection), c(f.StaticCanvas.prototype, f.DataURLExporter), c(
      f.StaticCanvas,
      /** @lends fabric.StaticCanvas */
      {
        /**
         * @static
         * @type String
         * @default
         */
        EMPTY_JSON: '{"objects": [], "background": "white"}',
        /**
         * Provides a way to check support of some of the canvas methods
         * (either those of HTMLCanvasElement itself, or rendering context)
         *
         * @param {String} methodName Method to check support for;
         *                            Could be one of "setLineDash"
         * @return {Boolean | null} `true` if method is supported (or at least exists),
         *                          `null` if canvas element or context can not be initialized
         */
        supports: function(i) {
          var l = n();
          if (!l || !l.getContext)
            return null;
          var u = l.getContext("2d");
          if (!u)
            return null;
          switch (i) {
            case "setLineDash":
              return typeof u.setLineDash < "u";
            default:
              return null;
          }
        }
      }
    ), f.StaticCanvas.prototype.toJSON = f.StaticCanvas.prototype.toObject, f.isLikelyNode && (f.StaticCanvas.prototype.createPNGStream = function() {
      var i = t(this.lowerCanvasEl);
      return i && i.createPNGStream();
    }, f.StaticCanvas.prototype.createJPEGStream = function(i) {
      var l = t(this.lowerCanvasEl);
      return l && l.createJPEGStream(i);
    });
  }(), f.BaseBrush = f.util.createClass(
    /** @lends fabric.BaseBrush.prototype */
    {
      /**
       * Color of a brush
       * @type String
       * @default
       */
      color: "rgb(0, 0, 0)",
      /**
       * Width of a brush, has to be a Number, no string literals
       * @type Number
       * @default
       */
      width: 1,
      /**
       * Shadow object representing shadow of this shape.
       * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
       * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
       * @type fabric.Shadow
       * @default
       */
      shadow: null,
      /**
       * Line endings style of a brush (one of "butt", "round", "square")
       * @type String
       * @default
       */
      strokeLineCap: "round",
      /**
       * Corner style of a brush (one of "bevel", "round", "miter")
       * @type String
       * @default
       */
      strokeLineJoin: "round",
      /**
       * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
       * @type Number
       * @default
       */
      strokeMiterLimit: 10,
      /**
       * Stroke Dash Array.
       * @type Array
       * @default
       */
      strokeDashArray: null,
      /**
       * When `true`, the free drawing is limited to the whiteboard size. Default to false.
       * @type Boolean
       * @default false
      */
      limitedToCanvasSize: !1,
      /**
       * Sets brush styles
       * @private
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(c) {
        c.strokeStyle = this.color, c.lineWidth = this.width, c.lineCap = this.strokeLineCap, c.miterLimit = this.strokeMiterLimit, c.lineJoin = this.strokeLineJoin, c.setLineDash(this.strokeDashArray || []);
      },
      /**
       * Sets the transformation on given context
       * @param {RenderingContext2d} ctx context to render on
       * @private
       */
      _saveAndTransform: function(c) {
        var s = this.canvas.viewportTransform;
        c.save(), c.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
      },
      /**
       * Sets brush shadow styles
       * @private
       */
      _setShadow: function() {
        if (this.shadow) {
          var c = this.canvas, s = this.shadow, h = c.contextTop, o = c.getZoom();
          c && c._isRetinaScaling() && (o *= f.devicePixelRatio), h.shadowColor = s.color, h.shadowBlur = s.blur * o, h.shadowOffsetX = s.offsetX * o, h.shadowOffsetY = s.offsetY * o;
        }
      },
      needsFullRender: function() {
        var c = new f.Color(this.color);
        return c.getAlpha() < 1 || !!this.shadow;
      },
      /**
       * Removes brush shadow styles
       * @private
       */
      _resetShadow: function() {
        var c = this.canvas.contextTop;
        c.shadowColor = "", c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
      },
      /**
       * Check is pointer is outside canvas boundaries
       * @param {Object} pointer
       * @private
      */
      _isOutSideCanvas: function(c) {
        return c.x < 0 || c.x > this.canvas.getWidth() || c.y < 0 || c.y > this.canvas.getHeight();
      }
    }
  ), function() {
    f.PencilBrush = f.util.createClass(
      f.BaseBrush,
      /** @lends fabric.PencilBrush.prototype */
      {
        /**
         * Discard points that are less than `decimate` pixel distant from each other
         * @type Number
         * @default 0.4
         */
        decimate: 0.4,
        /**
         * Draws a straight line between last recorded point to current pointer
         * Used for `shift` functionality
         *
         * @type boolean
         * @default false
         */
        drawStraightLine: !1,
        /**
         * The event modifier key that makes the brush draw a straight line.
         * If `null` or 'none' or any other string that is not a modifier key the feature is disabled.
         * @type {'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null}
         */
        straightLineKey: "shiftKey",
        /**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.PencilBrush} Instance of a pencil brush
         */
        initialize: function(c) {
          this.canvas = c, this._points = [];
        },
        needsFullRender: function() {
          return this.callSuper("needsFullRender") || this._hasStraightLine;
        },
        /**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
        _drawSegment: function(c, s, h) {
          var o = s.midPointFrom(h);
          return c.quadraticCurveTo(s.x, s.y, o.x, o.y), o;
        },
        /**
         * Invoked on mouse down
         * @param {Object} pointer
         */
        onMouseDown: function(c, s) {
          this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], this._prepareForDrawing(c), this._captureDrawingPath(c), this._render());
        },
        /**
         * Invoked on mouse move
         * @param {Object} pointer
         */
        onMouseMove: function(c, s) {
          if (this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], !(this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c)) && this._captureDrawingPath(c) && this._points.length > 1))
            if (this.needsFullRender())
              this.canvas.clearContext(this.canvas.contextTop), this._render();
            else {
              var h = this._points, o = h.length, e = this.canvas.contextTop;
              this._saveAndTransform(e), this.oldEnd && (e.beginPath(), e.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(e, h[o - 2], h[o - 1], !0), e.stroke(), e.restore();
            }
        },
        /**
         * Invoked on mouse up
         */
        onMouseUp: function(c) {
          return this.canvas._isMainEvent(c.e) ? (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1) : !0;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _prepareForDrawing: function(c) {
          var s = new f.Point(c.x, c.y);
          this._reset(), this._addPoint(s), this.canvas.contextTop.moveTo(s.x, s.y);
        },
        /**
         * @private
         * @param {fabric.Point} point Point to be added to points array
         */
        _addPoint: function(c) {
          return this._points.length > 1 && c.eq(this._points[this._points.length - 1]) ? !1 : (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(c), !0);
        },
        /**
         * Clear points array and set contextTop canvas style.
         * @private
         */
        _reset: function() {
          this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
        },
        /**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
        _captureDrawingPath: function(c) {
          var s = new f.Point(c.x, c.y);
          return this._addPoint(s);
        },
        /**
         * Draw a smooth path on the topCanvas using quadraticCurveTo
         * @private
         * @param {CanvasRenderingContext2D} [ctx]
         */
        _render: function(c) {
          var s, h, o = this._points[0], e = this._points[1];
          if (c = c || this.canvas.contextTop, this._saveAndTransform(c), c.beginPath(), this._points.length === 2 && o.x === e.x && o.y === e.y) {
            var r = this.width / 1e3;
            o = new f.Point(o.x, o.y), e = new f.Point(e.x, e.y), o.x -= r, e.x += r;
          }
          for (c.moveTo(o.x, o.y), s = 1, h = this._points.length; s < h; s++)
            this._drawSegment(c, o, e), o = this._points[s], e = this._points[s + 1];
          c.lineTo(o.x, o.y), c.stroke(), c.restore();
        },
        /**
         * Converts points to SVG path
         * @param {Array} points Array of points
         * @return {(string|number)[][]} SVG path commands
         */
        convertPointsToSVGPath: function(c) {
          var s = this.width / 1e3;
          return f.util.getSmoothPathFromPoints(c, s);
        },
        /**
         * @private
         * @param {(string|number)[][]} pathData SVG path commands
         * @returns {boolean}
         */
        _isEmptySVGPath: function(c) {
          var s = f.util.joinPath(c);
          return s === "M 0 0 Q 0 0 0 0 L 0 0";
        },
        /**
         * Creates fabric.Path object to add on canvas
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         */
        createPath: function(c) {
          var s = new f.Path(c, {
            fill: null,
            stroke: this.color,
            strokeWidth: this.width,
            strokeLineCap: this.strokeLineCap,
            strokeMiterLimit: this.strokeMiterLimit,
            strokeLineJoin: this.strokeLineJoin,
            strokeDashArray: this.strokeDashArray
          });
          return this.shadow && (this.shadow.affectStroke = !0, s.shadow = new f.Shadow(this.shadow)), s;
        },
        /**
         * Decimate points array with the decimate value
         */
        decimatePoints: function(c, s) {
          if (c.length <= 2)
            return c;
          var h = this.canvas.getZoom(), o = Math.pow(s / h, 2), e, r = c.length - 1, t = c[0], n = [t], a;
          for (e = 1; e < r - 1; e++)
            a = Math.pow(t.x - c[e].x, 2) + Math.pow(t.y - c[e].y, 2), a >= o && (t = c[e], n.push(t));
          return n.push(c[r]), n;
        },
        /**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to the fabric canvas.
         */
        _finalizeAndAddPath: function() {
          var c = this.canvas.contextTop;
          c.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
          var s = this.convertPointsToSVGPath(this._points);
          if (this._isEmptySVGPath(s)) {
            this.canvas.requestRenderAll();
            return;
          }
          var h = this.createPath(s);
          this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: h }), this.canvas.add(h), this.canvas.requestRenderAll(), h.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: h });
        }
      }
    );
  }(), f.CircleBrush = f.util.createClass(
    f.BaseBrush,
    /** @lends fabric.CircleBrush.prototype */
    {
      /**
       * Width of a brush
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.CircleBrush} Instance of a circle brush
       */
      initialize: function(c) {
        this.canvas = c, this.points = [];
      },
      /**
       * Invoked inside on mouse down and mouse move
       * @param {Object} pointer
       */
      drawDot: function(c) {
        var s = this.addPoint(c), h = this.canvas.contextTop;
        this._saveAndTransform(h), this.dot(h, s), h.restore();
      },
      dot: function(c, s) {
        c.fillStyle = s.fill, c.beginPath(), c.arc(s.x, s.y, s.radius, 0, Math.PI * 2, !1), c.closePath(), c.fill();
      },
      /**
       * Invoked on mouse down
       */
      onMouseDown: function(c) {
        this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(c);
      },
      /**
       * Render the full state of the brush
       * @private
       */
      _render: function() {
        var c = this.canvas.contextTop, s, h, o = this.points;
        for (this._saveAndTransform(c), s = 0, h = o.length; s < h; s++)
          this.dot(c, o[s]);
        c.restore();
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(c) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(c), this._render()) : this.drawDot(c));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var c = this.canvas.renderOnAddRemove, s, h;
        this.canvas.renderOnAddRemove = !1;
        var o = [];
        for (s = 0, h = this.points.length; s < h; s++) {
          var e = this.points[s], r = new f.Circle({
            radius: e.radius,
            left: e.x,
            top: e.y,
            originX: "center",
            originY: "center",
            fill: e.fill
          });
          this.shadow && (r.shadow = new f.Shadow(this.shadow)), o.push(r);
        }
        var t = new f.Group(o);
        t.canvas = this.canvas, this.canvas.fire("before:path:created", { path: t }), this.canvas.add(t), this.canvas.fire("path:created", { path: t }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
      },
      /**
       * @param {Object} pointer
       * @return {fabric.Point} Just added pointer point
       */
      addPoint: function(c) {
        var s = new f.Point(c.x, c.y), h = f.util.getRandomInt(
          Math.max(0, this.width - 20),
          this.width + 20
        ) / 2, o = new f.Color(this.color).setAlpha(f.util.getRandomInt(0, 100) / 100).toRgba();
        return s.radius = h, s.fill = o, this.points.push(s), s;
      }
    }
  ), f.SprayBrush = f.util.createClass(
    f.BaseBrush,
    /** @lends fabric.SprayBrush.prototype */
    {
      /**
       * Width of a spray
       * @type Number
       * @default
       */
      width: 10,
      /**
       * Density of a spray (number of dots per chunk)
       * @type Number
       * @default
       */
      density: 20,
      /**
       * Width of spray dots
       * @type Number
       * @default
       */
      dotWidth: 1,
      /**
       * Width variance of spray dots
       * @type Number
       * @default
       */
      dotWidthVariance: 1,
      /**
       * Whether opacity of a dot should be random
       * @type Boolean
       * @default
       */
      randomOpacity: !1,
      /**
       * Whether overlapping dots (rectangles) should be removed (for performance reasons)
       * @type Boolean
       * @default
       */
      optimizeOverlapping: !0,
      /**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.SprayBrush} Instance of a spray brush
       */
      initialize: function(c) {
        this.canvas = c, this.sprayChunks = [];
      },
      /**
       * Invoked on mouse down
       * @param {Object} pointer
       */
      onMouseDown: function(c) {
        this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(c), this.render(this.sprayChunkPoints);
      },
      /**
       * Invoked on mouse move
       * @param {Object} pointer
       */
      onMouseMove: function(c) {
        this.limitedToCanvasSize === !0 && this._isOutSideCanvas(c) || (this.addSprayChunk(c), this.render(this.sprayChunkPoints));
      },
      /**
       * Invoked on mouse up
       */
      onMouseUp: function() {
        var c = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        for (var s = [], h = 0, o = this.sprayChunks.length; h < o; h++)
          for (var e = this.sprayChunks[h], r = 0, t = e.length; r < t; r++) {
            var n = new f.Rect({
              width: e[r].width,
              height: e[r].width,
              left: e[r].x + 1,
              top: e[r].y + 1,
              originX: "center",
              originY: "center",
              fill: this.color
            });
            s.push(n);
          }
        this.optimizeOverlapping && (s = this._getOptimizedRects(s));
        var a = new f.Group(s);
        this.shadow && a.set("shadow", new f.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.fire("path:created", { path: a }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
      },
      /**
       * @private
       * @param {Array} rects
       */
      _getOptimizedRects: function(c) {
        var s = {}, h, o, e;
        for (o = 0, e = c.length; o < e; o++)
          h = c[o].left + "" + c[o].top, s[h] || (s[h] = c[o]);
        var r = [];
        for (h in s)
          r.push(s[h]);
        return r;
      },
      /**
       * Render new chunk of spray brush
       */
      render: function(c) {
        var s = this.canvas.contextTop, h, o;
        for (s.fillStyle = this.color, this._saveAndTransform(s), h = 0, o = c.length; h < o; h++) {
          var e = c[h];
          typeof e.opacity < "u" && (s.globalAlpha = e.opacity), s.fillRect(e.x, e.y, e.width, e.width);
        }
        s.restore();
      },
      /**
       * Render all spray chunks
       */
      _render: function() {
        var c = this.canvas.contextTop, s, h;
        for (c.fillStyle = this.color, this._saveAndTransform(c), s = 0, h = this.sprayChunks.length; s < h; s++)
          this.render(this.sprayChunks[s]);
        c.restore();
      },
      /**
       * @param {Object} pointer
       */
      addSprayChunk: function(c) {
        this.sprayChunkPoints = [];
        var s, h, o, e = this.width / 2, r;
        for (r = 0; r < this.density; r++) {
          s = f.util.getRandomInt(c.x - e, c.x + e), h = f.util.getRandomInt(c.y - e, c.y + e), this.dotWidthVariance ? o = f.util.getRandomInt(
            // bottom clamp width to 1
            Math.max(1, this.dotWidth - this.dotWidthVariance),
            this.dotWidth + this.dotWidthVariance
          ) : o = this.dotWidth;
          var t = new f.Point(s, h);
          t.width = o, this.randomOpacity && (t.opacity = f.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(t);
        }
        this.sprayChunks.push(this.sprayChunkPoints);
      }
    }
  ), f.PatternBrush = f.util.createClass(
    f.PencilBrush,
    /** @lends fabric.PatternBrush.prototype */
    {
      getPatternSrc: function() {
        var c = 20, s = 5, h = f.util.createCanvasElement(), o = h.getContext("2d");
        return h.width = h.height = c + s, o.fillStyle = this.color, o.beginPath(), o.arc(c / 2, c / 2, c / 2, 0, Math.PI * 2, !1), o.closePath(), o.fill(), h;
      },
      getPatternSrcFunction: function() {
        return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
      },
      /**
       * Creates "pattern" instance property
       * @param {CanvasRenderingContext2D} ctx
       */
      getPattern: function(c) {
        return c.createPattern(this.source || this.getPatternSrc(), "repeat");
      },
      /**
       * Sets brush styles
       * @param {CanvasRenderingContext2D} ctx
       */
      _setBrushStyles: function(c) {
        this.callSuper("_setBrushStyles", c), c.strokeStyle = this.getPattern(c);
      },
      /**
       * Creates path
       */
      createPath: function(c) {
        var s = this.callSuper("createPath", c), h = s._getLeftTopCoords().scalarAdd(s.strokeWidth / 2);
        return s.stroke = new f.Pattern({
          source: this.source || this.getPatternSrcFunction(),
          offsetX: -h.x,
          offsetY: -h.y
        }), s;
      }
    }
  ), function() {
    var c = f.util.getPointer, s = f.util.degreesToRadians, h = f.util.isTouchEvent;
    f.Canvas = f.util.createClass(
      f.StaticCanvas,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(e, r) {
          r || (r = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(e, r), this._initInteractive(), this._createCacheCanvas();
        },
        /**
         * When true, objects can be transformed by one side (unproportionally)
         * when dragged on the corners that normally would not do that.
         * @type Boolean
         * @default
         * @since fabric 4.0 // changed name and default value
         */
        uniformScaling: !0,
        /**
         * Indicates which key switches uniform scaling.
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * totally wrong named. this sounds like `uniform scaling`
         * if Canvas.uniformScaling is true, pressing this will set it to false
         * and viceversa.
         * @since 1.6.2
         * @type String
         * @default
         */
        uniScaleKey: "shiftKey",
        /**
         * When true, objects use center point as the origin of scale transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, objects use center point as the origin of rotate transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !1,
        /**
         * Indicates which key enable centered Transform
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        centeredKey: "altKey",
        /**
         * Indicates which key enable alternate action on corner
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
        altActionKey: "shiftKey",
        /**
         * Indicates that canvas is interactive. This property should not be changed.
         * @type Boolean
         * @default
         */
        interactive: !0,
        /**
         * Indicates whether group selection should be enabled
         * @type Boolean
         * @default
         */
        selection: !0,
        /**
         * Indicates which key or keys enable multiple click selection
         * Pass value as a string or array of strings
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or empty or containing any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.2
         * @type String|Array
         * @default
         */
        selectionKey: "shiftKey",
        /**
         * Indicates which key enable alternative selection
         * in case of target overlapping with active object
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * For a series of reason that come from the general expectations on how
         * things should work, this feature works only for preserveObjectStacking true.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.5
         * @type null|String
         * @default
         */
        altSelectionKey: null,
        /**
         * Color of selection
         * @type String
         * @default
         */
        selectionColor: "rgba(100, 100, 255, 0.3)",
        // blue
        /**
         * Default dash array pattern
         * If not empty the selection border is dashed
         * @type Array
         */
        selectionDashArray: [],
        /**
         * Color of the border of selection (usually slightly darker than color of selection itself)
         * @type String
         * @default
         */
        selectionBorderColor: "rgba(255, 255, 255, 0.3)",
        /**
         * Width of a line used in object/group selection
         * @type Number
         * @default
         */
        selectionLineWidth: 1,
        /**
         * Select only shapes that are fully contained in the dragged selection rectangle.
         * @type Boolean
         * @default
         */
        selectionFullyContained: !1,
        /**
         * Default cursor value used when hovering over an object on canvas
         * @type String
         * @default
         */
        hoverCursor: "move",
        /**
         * Default cursor value used when moving an object on canvas
         * @type String
         * @default
         */
        moveCursor: "move",
        /**
         * Default cursor value used for the entire canvas
         * @type String
         * @default
         */
        defaultCursor: "default",
        /**
         * Cursor value used during free drawing
         * @type String
         * @default
         */
        freeDrawingCursor: "crosshair",
        /**
         * Cursor value used for disabled elements ( corners with disabled action )
         * @type String
         * @since 2.0.0
         * @default
         */
        notAllowedCursor: "not-allowed",
        /**
         * Default element class that's given to wrapper (div) element of canvas
         * @type String
         * @default
         */
        containerClass: "canvas-container",
        /**
         * When true, object detection happens on per-pixel basis rather than on per-bounding-box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * Number of pixels around target pixel to tolerate (consider active) during object detection
         * @type Number
         * @default
         */
        targetFindTolerance: 0,
        /**
         * When true, target detection is skipped. Target detection will return always undefined.
         * click selection won't work anymore, events will fire with no targets.
         * if something is selected before setting it to true, it will be deselected at the first click.
         * area selection will still work. check the `selection` property too.
         * if you deactivate both, you should look into staticCanvas.
         * @type Boolean
         * @default
         */
        skipTargetFind: !1,
        /**
         * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
         * After mousedown, mousemove creates a shape,
         * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
         * @type Boolean
         * @default
         */
        isDrawingMode: !1,
        /**
         * Indicates whether objects should remain in current stack position when selected.
         * When false objects are brought to top and rendered as part of the selection group
         * @type Boolean
         * @default
         */
        preserveObjectStacking: !1,
        /**
         * Indicates the angle that an object will lock to while rotating.
         * @type Number
         * @since 1.6.7
         * @default
         */
        snapAngle: 0,
        /**
         * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
         * When `null`, the snapThreshold will default to the snapAngle.
         * @type null|Number
         * @since 1.6.7
         * @default
         */
        snapThreshold: null,
        /**
         * Indicates if the right click on canvas can output the context menu or not
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        stopContextMenu: !1,
        /**
         * Indicates if the canvas can fire right click events
         * @type Boolean
         * @since 1.6.5
         * @default
         */
        fireRightClick: !1,
        /**
         * Indicates if the canvas can fire middle click events
         * @type Boolean
         * @since 1.7.8
         * @default
         */
        fireMiddleClick: !1,
        /**
         * Keep track of the subTargets for Mouse Events
         * @type fabric.Object[]
         */
        targets: [],
        /**
         * When the option is enabled, PointerEvent is used instead of MouseEvent.
         * @type Boolean
         * @default
         */
        enablePointerEvents: !1,
        /**
         * Keep track of the hovered target
         * @type fabric.Object
         * @private
         */
        _hoveredTarget: null,
        /**
         * hold the list of nested targets hovered
         * @type fabric.Object[]
         * @private
         */
        _hoveredTargets: [],
        /**
         * @private
         */
        _initInteractive: function() {
          this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = f.PencilBrush && new f.PencilBrush(this), this.calcOffset();
        },
        /**
         * Divides objects in two groups, one to render immediately
         * and one to render as activeGroup.
         * @return {Array} objects to render immediately and pushes the other in the activeGroup.
         */
        _chooseObjectsToRender: function() {
          var e = this.getActiveObjects(), r, t, n;
          if (e.length > 0 && !this.preserveObjectStacking) {
            t = [], n = [];
            for (var a = 0, i = this._objects.length; a < i; a++)
              r = this._objects[a], e.indexOf(r) === -1 ? t.push(r) : n.push(r);
            e.length > 1 && (this._activeObject._objects = n), t.push.apply(t, n);
          } else
            t = this._objects;
          return t;
        },
        /**
         * Renders both the top canvas and the secondary container canvas.
         * @return {fabric.Canvas} instance
         * @chainable
         */
        renderAll: function() {
          this.contextTopDirty && !this._groupSelector && !this.isDrawingMode && (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
          var e = this.contextContainer;
          return this.renderCanvas(e, this._chooseObjectsToRender()), this;
        },
        renderTopLayer: function(e) {
          e.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(e), this.contextTopDirty = !0), e.restore();
        },
        /**
         * Method to render only the top canvas.
         * Also used to render the group selection box.
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        renderTop: function() {
          var e = this.contextTop;
          return this.clearContext(e), this.renderTopLayer(e), this.fire("after:render"), this;
        },
        /**
         * @private
         */
        _normalizePointer: function(e, r) {
          var t = e.calcTransformMatrix(), n = f.util.invertTransform(t), a = this.restorePointerVpt(r);
          return f.util.transformPoint(a, n);
        },
        /**
         * Returns true if object is transparent at a certain location
         * @param {fabric.Object} target Object to check
         * @param {Number} x Left coordinate
         * @param {Number} y Top coordinate
         * @return {Boolean}
         */
        isTargetTransparent: function(e, r, t) {
          if (e.shouldCache() && e._cacheCanvas && e !== this._activeObject) {
            var n = this._normalizePointer(e, { x: r, y: t }), a = Math.max(e.cacheTranslationX + n.x * e.zoomX, 0), i = Math.max(e.cacheTranslationY + n.y * e.zoomY, 0), g = f.util.isTransparent(
              e._cacheContext,
              Math.round(a),
              Math.round(i),
              this.targetFindTolerance
            );
            return g;
          }
          var l = this.contextCache, u = e.selectionBackgroundColor, d = this.viewportTransform;
          e.selectionBackgroundColor = "", this.clearContext(l), l.save(), l.transform(d[0], d[1], d[2], d[3], d[4], d[5]), e.render(l), l.restore(), e.selectionBackgroundColor = u;
          var g = f.util.isTransparent(
            l,
            r,
            t,
            this.targetFindTolerance
          );
          return g;
        },
        /**
         * takes an event and determines if selection key has been pressed
         * @private
         * @param {Event} e Event object
         */
        _isSelectionKeyPressed: function(e) {
          var r = !1;
          return Array.isArray(this.selectionKey) ? r = !!this.selectionKey.find(function(t) {
            return e[t] === !0;
          }) : r = e[this.selectionKey], r;
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _shouldClearSelection: function(e, r) {
          var t = this.getActiveObjects(), n = this._activeObject;
          return !r || r && n && t.length > 1 && t.indexOf(r) === -1 && n !== r && !this._isSelectionKeyPressed(e) || r && !r.evented || r && !r.selectable && n && n !== r;
        },
        /**
         * centeredScaling from object can't override centeredScaling from canvas.
         * this should be fixed, since object setting should take precedence over canvas.
         * also this should be something that will be migrated in the control properties.
         * as ability to define the origin of the transformation that the control provide.
         * @private
         * @param {fabric.Object} target
         * @param {String} action
         * @param {Boolean} altKey
         */
        _shouldCenterTransform: function(e, r, t) {
          if (e) {
            var n;
            return r === "scale" || r === "scaleX" || r === "scaleY" || r === "resizing" ? n = this.centeredScaling || e.centeredScaling : r === "rotate" && (n = this.centeredRotation || e.centeredRotation), n ? !t : t;
          }
        },
        /**
         * should disappear before release 4.0
         * @private
         */
        _getOriginFromCorner: function(e, r) {
          var t = {
            x: e.originX,
            y: e.originY
          };
          return r === "ml" || r === "tl" || r === "bl" ? t.x = "right" : (r === "mr" || r === "tr" || r === "br") && (t.x = "left"), r === "tl" || r === "mt" || r === "tr" ? t.y = "bottom" : (r === "bl" || r === "mb" || r === "br") && (t.y = "top"), t;
        },
        /**
         * @private
         * @param {Boolean} alreadySelected true if target is already selected
         * @param {String} corner a string representing the corner ml, mr, tl ...
         * @param {Event} e Event object
         * @param {fabric.Object} [target] inserted back to help overriding. Unused
         */
        _getActionFromCorner: function(e, r, t, n) {
          if (!r || !e)
            return "drag";
          var a = n.controls[r];
          return a.getActionName(t, a, n);
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _setupCurrentTransform: function(e, r, t) {
          if (r) {
            var n = this.getPointer(e), a = r.__corner, i = r.controls[a], l = t && a ? i.getActionHandler(e, r, i) : f.controlsUtils.dragHandler, u = this._getActionFromCorner(t, a, e, r), d = this._getOriginFromCorner(r, a), g = e[this.centeredKey], m = {
              target: r,
              action: u,
              actionHandler: l,
              corner: a,
              scaleX: r.scaleX,
              scaleY: r.scaleY,
              skewX: r.skewX,
              skewY: r.skewY,
              // used by transation
              offsetX: n.x - r.left,
              offsetY: n.y - r.top,
              originX: d.x,
              originY: d.y,
              ex: n.x,
              ey: n.y,
              lastX: n.x,
              lastY: n.y,
              // unsure they are useful anymore.
              // left: target.left,
              // top: target.top,
              theta: s(r.angle),
              // end of unsure
              width: r.width * r.scaleX,
              shiftKey: e.shiftKey,
              altKey: g,
              original: f.util.saveObjectTransform(r)
            };
            this._shouldCenterTransform(r, u, g) && (m.originX = "center", m.originY = "center"), m.original.originX = d.x, m.original.originY = d.y, this._currentTransform = m, this._beforeTransform(e);
          }
        },
        /**
         * Set the cursor type of the canvas element
         * @param {String} value Cursor type of the canvas element.
         * @see http://www.w3.org/TR/css3-ui/#cursor
         */
        setCursor: function(e) {
          this.upperCanvasEl.style.cursor = e;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx to draw the selection on
         */
        _drawSelection: function(e) {
          var r = this._groupSelector, t = new f.Point(r.ex, r.ey), n = f.util.transformPoint(t, this.viewportTransform), a = new f.Point(r.ex + r.left, r.ey + r.top), i = f.util.transformPoint(a, this.viewportTransform), l = Math.min(n.x, i.x), u = Math.min(n.y, i.y), d = Math.max(n.x, i.x), g = Math.max(n.y, i.y), m = this.selectionLineWidth / 2;
          this.selectionColor && (e.fillStyle = this.selectionColor, e.fillRect(l, u, d - l, g - u)), !(!this.selectionLineWidth || !this.selectionBorderColor) && (e.lineWidth = this.selectionLineWidth, e.strokeStyle = this.selectionBorderColor, l += m, u += m, d -= m, g -= m, f.Object.prototype._setLineDash.call(this, e, this.selectionDashArray), e.strokeRect(l, u, d - l, g - u));
        },
        /**
         * Method that determines what object we are clicking on
         * the skipGroup parameter is for internal use, is needed for shift+click action
         * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
         * or the outside part of the corner.
         * @param {Event} e mouse event
         * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
         * @return {fabric.Object} the target found
         */
        findTarget: function(e, r) {
          if (!this.skipTargetFind) {
            var t = !0, n = this.getPointer(e, t), a = this._activeObject, i = this.getActiveObjects(), l, u, d = h(e), g = i.length > 1 && !r || i.length === 1;
            if (this.targets = [], g && a._findTargetCorner(n, d) || i.length > 1 && !r && a === this._searchPossibleTargets([a], n))
              return a;
            if (i.length === 1 && a === this._searchPossibleTargets([a], n))
              if (this.preserveObjectStacking)
                l = a, u = this.targets, this.targets = [];
              else
                return a;
            var m = this._searchPossibleTargets(this._objects, n);
            return e[this.altSelectionKey] && m && l && m !== l && (m = l, this.targets = u), m;
          }
        },
        /**
         * Checks point is inside the object.
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @param {fabric.Object} obj Object to test against
         * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
         * @return {Boolean} true if point is contained within an area of given object
         * @private
         */
        _checkTarget: function(e, r, t) {
          if (r && r.visible && r.evented && // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
          // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
          r.containsPoint(e))
            if ((this.perPixelTargetFind || r.perPixelTargetFind) && !r.isEditing) {
              var n = this.isTargetTransparent(r, t.x, t.y);
              if (!n)
                return !0;
            } else
              return !0;
        },
        /**
         * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
         * @param {Array} [objects] objects array to look into
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @return {fabric.Object} object that contains pointer
         * @private
         */
        _searchPossibleTargets: function(e, r) {
          for (var t, n = e.length, a; n--; ) {
            var i = e[n], l = i.group ? this._normalizePointer(i.group, r) : r;
            if (this._checkTarget(l, i, r)) {
              t = e[n], t.subTargetCheck && t instanceof f.Group && (a = this._searchPossibleTargets(t._objects, r), a && this.targets.push(a));
              break;
            }
          }
          return t;
        },
        /**
         * Returns pointer coordinates without the effect of the viewport
         * @param {Object} pointer with "x" and "y" number values
         * @return {Object} object with "x" and "y" number values
         */
        restorePointerVpt: function(e) {
          return f.util.transformPoint(
            e,
            f.util.invertTransform(this.viewportTransform)
          );
        },
        /**
         * Returns pointer coordinates relative to canvas.
         * Can return coordinates with or without viewportTransform.
         * ignoreZoom false gives back coordinates that represent
         * the point clicked on canvas element.
         * ignoreZoom true gives back coordinates after being processed
         * by the viewportTransform ( sort of coordinates of what is displayed
         * on the canvas where you are clicking.
         * ignoreZoom true = HTMLElement coordinates relative to top,left
         * ignoreZoom false, default = fabric space coordinates, the same used for shape position
         * To interact with your shapes top and left you want to use ignoreZoom true
         * most of the time, while ignoreZoom false will give you coordinates
         * compatible with the object.oCoords system.
         * of the time.
         * @param {Event} e
         * @param {Boolean} ignoreZoom
         * @return {Object} object with "x" and "y" number values
         */
        getPointer: function(e, r) {
          if (this._absolutePointer && !r)
            return this._absolutePointer;
          if (this._pointer && r)
            return this._pointer;
          var t = c(e), n = this.upperCanvasEl, a = n.getBoundingClientRect(), i = a.width || 0, l = a.height || 0, u;
          (!i || !l) && ("top" in a && "bottom" in a && (l = Math.abs(a.top - a.bottom)), "right" in a && "left" in a && (i = Math.abs(a.right - a.left))), this.calcOffset(), t.x = t.x - this._offset.left, t.y = t.y - this._offset.top, r || (t = this.restorePointerVpt(t));
          var d = this.getRetinaScaling();
          return d !== 1 && (t.x /= d, t.y /= d), i === 0 || l === 0 ? u = { width: 1, height: 1 } : u = {
            width: n.width / i,
            height: n.height / l
          }, {
            x: t.x * u.width,
            y: t.y * u.height
          };
        },
        /**
         * @private
         * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
         */
        _createUpperCanvas: function() {
          var e = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), r = this.lowerCanvasEl, t = this.upperCanvasEl;
          t ? t.className = "" : (t = this._createCanvasElement(), this.upperCanvasEl = t), f.util.addClass(t, "upper-canvas " + e), this.wrapperEl.appendChild(t), this._copyCanvasStyle(r, t), this._applyCanvasStyle(t), this.contextTop = t.getContext("2d");
        },
        /**
         * Returns context of top canvas where interactions are drawn
         * @returns {CanvasRenderingContext2D}
         */
        getTopContext: function() {
          return this.contextTop;
        },
        /**
         * @private
         */
        _createCacheCanvas: function() {
          this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
        },
        /**
         * @private
         */
        _initWrapperElement: function() {
          this.wrapperEl = f.util.wrapElement(this.lowerCanvasEl, "div", {
            class: this.containerClass
          }), f.util.setStyle(this.wrapperEl, {
            width: this.width + "px",
            height: this.height + "px",
            position: "relative"
          }), f.util.makeElementUnselectable(this.wrapperEl);
        },
        /**
         * @private
         * @param {HTMLElement} element canvas element to apply styles on
         */
        _applyCanvasStyle: function(e) {
          var r = this.width || e.width, t = this.height || e.height;
          f.util.setStyle(e, {
            position: "absolute",
            width: r + "px",
            height: t + "px",
            left: 0,
            top: 0,
            "touch-action": this.allowTouchScrolling ? "manipulation" : "none",
            "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none"
          }), e.width = r, e.height = t, f.util.makeElementUnselectable(e);
        },
        /**
         * Copy the entire inline style from one element (fromEl) to another (toEl)
         * @private
         * @param {Element} fromEl Element style is copied from
         * @param {Element} toEl Element copied style is applied to
         */
        _copyCanvasStyle: function(e, r) {
          r.style.cssText = e.style.cssText;
        },
        /**
         * Returns context of canvas where object selection is drawn
         * @return {CanvasRenderingContext2D}
         */
        getSelectionContext: function() {
          return this.contextTop;
        },
        /**
         * Returns &lt;canvas> element on which object selection is drawn
         * @return {HTMLCanvasElement}
         */
        getSelectionElement: function() {
          return this.upperCanvasEl;
        },
        /**
         * Returns currently active object
         * @return {fabric.Object} active object
         */
        getActiveObject: function() {
          return this._activeObject;
        },
        /**
         * Returns an array with the current selected objects
         * @return {fabric.Object} active object
         */
        getActiveObjects: function() {
          var e = this._activeObject;
          return e ? e.type === "activeSelection" && e._objects ? e._objects.slice(0) : [e] : [];
        },
        /**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
        _onObjectRemoved: function(e) {
          e === this._activeObject && (this.fire("before:selection:cleared", { target: e }), this._discardActiveObject(), this.fire("selection:cleared", { target: e }), e.fire("deselected")), e === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", e);
        },
        /**
         * @private
         * Compares the old activeObject with the current one and fires correct events
         * @param {fabric.Object} obj old activeObject
         */
        _fireSelectionEvents: function(e, r) {
          var t = !1, n = this.getActiveObjects(), a = [], i = [];
          e.forEach(function(l) {
            n.indexOf(l) === -1 && (t = !0, l.fire("deselected", {
              e: r,
              target: l
            }), i.push(l));
          }), n.forEach(function(l) {
            e.indexOf(l) === -1 && (t = !0, l.fire("selected", {
              e: r,
              target: l
            }), a.push(l));
          }), e.length > 0 && n.length > 0 ? t && this.fire("selection:updated", {
            e: r,
            selected: a,
            deselected: i
          }) : n.length > 0 ? this.fire("selection:created", {
            e: r,
            selected: a
          }) : e.length > 0 && this.fire("selection:cleared", {
            e: r,
            deselected: i
          });
        },
        /**
         * Sets given object as the only active object on canvas
         * @param {fabric.Object} object Object to set as an active one
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        setActiveObject: function(e, r) {
          var t = this.getActiveObjects();
          return this._setActiveObject(e, r), this._fireSelectionEvents(t, r), this;
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to setActiveObject but without firing
         * any event. There is commitment to have this stay this way.
         * This is the functional part of setActiveObject.
         * @private
         * @param {Object} object to set as active
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {Boolean} true if the selection happened
         */
        _setActiveObject: function(e, r) {
          return this._activeObject === e || !this._discardActiveObject(r, e) || e.onSelect({ e: r }) ? !1 : (this._activeObject = e, !0);
        },
        /**
         * This is a private method for now.
         * This is supposed to be equivalent to discardActiveObject but without firing
         * any events. There is commitment to have this stay this way.
         * This is the functional part of discardActiveObject.
         * @param {Event} [e] Event (passed along when firing "object:deselected")
         * @param {Object} object to set as active
         * @return {Boolean} true if the selection happened
         * @private
         */
        _discardActiveObject: function(e, r) {
          var t = this._activeObject;
          if (t) {
            if (t.onDeselect({ e, object: r }))
              return !1;
            this._activeObject = null;
          }
          return !0;
        },
        /**
         * Discards currently active object and fire events. If the function is called by fabric
         * as a consequence of a mouse event, the event is passed as a parameter and
         * sent to the fire function for the custom events. When used as a method the
         * e param does not have any application.
         * @param {event} e
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        discardActiveObject: function(e) {
          var r = this.getActiveObjects(), t = this.getActiveObject();
          return r.length && this.fire("before:selection:cleared", { target: t, e }), this._discardActiveObject(e), this._fireSelectionEvents(r, e), this;
        },
        /**
         * Clears a canvas element and removes all event listeners
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        dispose: function() {
          var e = this.wrapperEl;
          return this.removeListeners(), e.removeChild(this.upperCanvasEl), e.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function(r) {
            f.util.cleanUpJsdomNode(this[r]), this[r] = void 0;
          }.bind(this)), e.parentNode && e.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, f.StaticCanvas.prototype.dispose.call(this), this;
        },
        /**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
        clear: function() {
          return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
        },
        /**
         * Draws objects' controls (borders/controls)
         * @param {CanvasRenderingContext2D} ctx Context to render controls on
         */
        drawControls: function(e) {
          var r = this._activeObject;
          r && r._renderControls(e);
        },
        /**
         * @private
         */
        _toObject: function(e, r, t) {
          var n = this._realizeGroupTransformOnObject(e), a = this.callSuper("_toObject", e, r, t);
          return this._unwindGroupTransformOnObject(e, n), a;
        },
        /**
         * Realises an object's group transformation on it
         * @private
         * @param {fabric.Object} [instance] the object to transform (gets mutated)
         * @returns the original values of instance which were changed
         */
        _realizeGroupTransformOnObject: function(e) {
          if (e.group && e.group.type === "activeSelection" && this._activeObject === e.group) {
            var r = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"], t = {};
            return r.forEach(function(n) {
              t[n] = e[n];
            }), f.util.addTransformToObject(e, this._activeObject.calcOwnMatrix()), t;
          } else
            return null;
        },
        /**
         * Restores the changed properties of instance
         * @private
         * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
         * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
         */
        _unwindGroupTransformOnObject: function(e, r) {
          r && e.set(r);
        },
        /**
         * @private
         */
        _setSVGObject: function(e, r, t) {
          var n = this._realizeGroupTransformOnObject(r);
          this.callSuper("_setSVGObject", e, r, t), this._unwindGroupTransformOnObject(r, n);
        },
        setViewportTransform: function(e) {
          this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), f.StaticCanvas.prototype.setViewportTransform.call(this, e);
        }
      }
    );
    for (var o in f.StaticCanvas)
      o !== "prototype" && (f.Canvas[o] = f.StaticCanvas[o]);
  }(), function() {
    var c = f.util.addListener, s = f.util.removeListener, h = 3, o = 2, e = 1, r = { passive: !1 };
    function t(n, a) {
      return n.button && n.button === a - 1;
    }
    f.util.object.extend(
      f.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * Contains the id of the touch event that owns the fabric transform
         * @type Number
         * @private
         */
        mainTouchId: null,
        /**
         * Adds mouse listeners to canvas
         * @private
         */
        _initEventListeners: function() {
          this.removeListeners(), this._bindEvents(), this.addOrRemove(c, "add");
        },
        /**
         * return an event prefix pointer or mouse.
         * @private
         */
        _getEventPrefix: function() {
          return this.enablePointerEvents ? "pointer" : "mouse";
        },
        addOrRemove: function(n, a) {
          var i = this.upperCanvasEl, l = this._getEventPrefix();
          n(f.window, "resize", this._onResize), n(i, l + "down", this._onMouseDown), n(i, l + "move", this._onMouseMove, r), n(i, l + "out", this._onMouseOut), n(i, l + "enter", this._onMouseEnter), n(i, "wheel", this._onMouseWheel), n(i, "contextmenu", this._onContextMenu), n(i, "dblclick", this._onDoubleClick), n(i, "dragover", this._onDragOver), n(i, "dragenter", this._onDragEnter), n(i, "dragleave", this._onDragLeave), n(i, "drop", this._onDrop), this.enablePointerEvents || n(i, "touchstart", this._onTouchStart, r), typeof eventjs < "u" && a in eventjs && (eventjs[a](i, "gesture", this._onGesture), eventjs[a](i, "drag", this._onDrag), eventjs[a](i, "orientation", this._onOrientationChange), eventjs[a](i, "shake", this._onShake), eventjs[a](i, "longpress", this._onLongPress));
        },
        /**
         * Removes all event listeners
         */
        removeListeners: function() {
          this.addOrRemove(s, "remove");
          var n = this._getEventPrefix();
          s(f.document, n + "up", this._onMouseUp), s(f.document, "touchend", this._onTouchEnd, r), s(f.document, n + "move", this._onMouseMove, r), s(f.document, "touchmove", this._onMouseMove, r);
        },
        /**
         * @private
         */
        _bindEvents: function() {
          this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js gesture
         * @param {Event} [self] Inner Event object
         */
        _onGesture: function(n, a) {
          this.__onTransformGesture && this.__onTransformGesture(n, a);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js drag
         * @param {Event} [self] Inner Event object
         */
        _onDrag: function(n, a) {
          this.__onDrag && this.__onDrag(n, a);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on wheel event
         */
        _onMouseWheel: function(n) {
          this.__onMouseWheel(n);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseOut: function(n) {
          var a = this._hoveredTarget;
          this.fire("mouse:out", { target: a, e: n }), this._hoveredTarget = null, a && a.fire("mouseout", { e: n });
          var i = this;
          this._hoveredTargets.forEach(function(l) {
            i.fire("mouse:out", { target: a, e: n }), l && a.fire("mouseout", { e: n });
          }), this._hoveredTargets = [];
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseenter
         */
        _onMouseEnter: function(n) {
          !this._currentTransform && !this.findTarget(n) && (this.fire("mouse:over", { target: null, e: n }), this._hoveredTarget = null, this._hoveredTargets = []);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js orientation change
         * @param {Event} [self] Inner Event object
         */
        _onOrientationChange: function(n, a) {
          this.__onOrientationChange && this.__onOrientationChange(n, a);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onShake: function(n, a) {
          this.__onShake && this.__onShake(n, a);
        },
        /**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
        _onLongPress: function(n, a) {
          this.__onLongPress && this.__onLongPress(n, a);
        },
        /**
         * prevent default to allow drop event to be fired
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         */
        _onDragOver: function(n) {
          n.preventDefault();
          var a = this._simpleEventHandler("dragover", n);
          this._fireEnterLeaveEvents(a, n);
        },
        /**
         * `drop:before` is a an event that allow you to schedule logic
         * before the `drop` event. Prefer `drop` event always, but if you need
         * to run some drop-disabling logic on an event, since there is no way
         * to handle event handlers ordering, use `drop:before`
         * @param {Event} e
         */
        _onDrop: function(n) {
          return this._simpleEventHandler("drop:before", n), this._simpleEventHandler("drop", n);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onContextMenu: function(n) {
          return this.stopContextMenu && (n.stopPropagation(), n.preventDefault()), !1;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onDoubleClick: function(n) {
          this._cacheTransformEventData(n), this._handleEvent(n, "dblclick"), this._resetTransformEventData(n);
        },
        /**
         * Return a the id of an event.
         * returns either the pointerId or the identifier or 0 for the mouse event
         * @private
         * @param {Event} evt Event object
         */
        getPointerId: function(n) {
          var a = n.changedTouches;
          return a ? a[0] && a[0].identifier : this.enablePointerEvents ? n.pointerId : -1;
        },
        /**
         * Determines if an event has the id of the event that is considered main
         * @private
         * @param {evt} event Event object
         */
        _isMainEvent: function(n) {
          return n.isPrimary === !0 ? !0 : n.isPrimary === !1 ? !1 : n.type === "touchend" && n.touches.length === 0 ? !0 : n.changedTouches ? n.changedTouches[0].identifier === this.mainTouchId : !0;
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchStart: function(n) {
          n.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(n)), this.__onMouseDown(n), this._resetTransformEventData();
          var a = this.upperCanvasEl, i = this._getEventPrefix();
          c(f.document, "touchend", this._onTouchEnd, r), c(f.document, "touchmove", this._onMouseMove, r), s(a, i + "down", this._onMouseDown);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDown: function(n) {
          this.__onMouseDown(n), this._resetTransformEventData();
          var a = this.upperCanvasEl, i = this._getEventPrefix();
          s(a, i + "move", this._onMouseMove, r), c(f.document, i + "up", this._onMouseUp), c(f.document, i + "move", this._onMouseMove, r);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onTouchEnd: function(n) {
          if (!(n.touches.length > 0)) {
            this.__onMouseUp(n), this._resetTransformEventData(), this.mainTouchId = null;
            var a = this._getEventPrefix();
            s(f.document, "touchend", this._onTouchEnd, r), s(f.document, "touchmove", this._onMouseMove, r);
            var i = this;
            this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
              c(i.upperCanvasEl, a + "down", i._onMouseDown), i._willAddMouseDown = 0;
            }, 400);
          }
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUp: function(n) {
          this.__onMouseUp(n), this._resetTransformEventData();
          var a = this.upperCanvasEl, i = this._getEventPrefix();
          this._isMainEvent(n) && (s(f.document, i + "up", this._onMouseUp), s(f.document, i + "move", this._onMouseMove, r), c(a, i + "move", this._onMouseMove, r));
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMove: function(n) {
          !this.allowTouchScrolling && n.preventDefault && n.preventDefault(), this.__onMouseMove(n);
        },
        /**
         * @private
         */
        _onResize: function() {
          this.calcOffset();
        },
        /**
         * Decides whether the canvas should be redrawn in mouseup and mousedown events.
         * @private
         * @param {Object} target
         */
        _shouldRender: function(n) {
          var a = this._activeObject;
          return !!a != !!n || a && n && a !== n ? !0 : (a && a.isEditing, !1);
        },
        /**
         * Method that defines the actions when mouse is released on canvas.
         * The method resets the currentTransform parameters, store the image corner
         * position in the image object and render the canvas on top.
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseUp: function(n) {
          var a, i = this._currentTransform, l = this._groupSelector, u = !1, d = !l || l.left === 0 && l.top === 0;
          if (this._cacheTransformEventData(n), a = this._target, this._handleEvent(n, "up:before"), t(n, h)) {
            this.fireRightClick && this._handleEvent(n, "up", h, d);
            return;
          }
          if (t(n, o)) {
            this.fireMiddleClick && this._handleEvent(n, "up", o, d), this._resetTransformEventData();
            return;
          }
          if (this.isDrawingMode && this._isCurrentlyDrawing) {
            this._onMouseUpInDrawingMode(n);
            return;
          }
          if (this._isMainEvent(n)) {
            if (i && (this._finalizeCurrentTransform(n), u = i.actionPerformed), !d) {
              var g = a === this._activeObject;
              this._maybeGroupObjects(n), u || (u = this._shouldRender(a) || !g && a === this._activeObject);
            }
            var m, v;
            if (a) {
              if (m = a._findTargetCorner(
                this.getPointer(n, !0),
                f.util.isTouchEvent(n)
              ), a.selectable && a !== this._activeObject && a.activeOn === "up")
                this.setActiveObject(a, n), u = !0;
              else {
                var y = a.controls[m], w = y && y.getMouseUpHandler(n, a, y);
                w && (v = this.getPointer(n), w(n, i, v.x, v.y));
              }
              a.isMoving = !1;
            }
            if (i && (i.target !== a || i.corner !== m)) {
              var M = i.target && i.target.controls[i.corner], X = M && M.getMouseUpHandler(n, a, y);
              v = v || this.getPointer(n), X && X(n, i, v.x, v.y);
            }
            this._setCursorFromEvent(n, a), this._handleEvent(n, "up", e, d), this._groupSelector = null, this._currentTransform = null, a && (a.__corner = 0), u ? this.requestRenderAll() : d || this.renderTop();
          }
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @return {Fabric.Object} target return the the target found, for internal reasons.
         */
        _simpleEventHandler: function(n, a) {
          var i = this.findTarget(a), l = this.targets, u = {
            e: a,
            target: i,
            subTargets: l
          };
          if (this.fire(n, u), i && i.fire(n, u), !l)
            return i;
          for (var d = 0; d < l.length; d++)
            l[d].fire(n, u);
          return i;
        },
        /**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @param {fabric.Object} targetObj receiving event
         * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
         * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
         */
        _handleEvent: function(n, a, i, l) {
          var u = this._target, d = this.targets || [], g = {
            e: n,
            target: u,
            subTargets: d,
            button: i || e,
            isClick: l || !1,
            pointer: this._pointer,
            absolutePointer: this._absolutePointer,
            transform: this._currentTransform
          };
          a === "up" && (g.currentTarget = this.findTarget(n), g.currentSubTargets = this.targets), this.fire("mouse:" + a, g), u && u.fire("mouse" + a, g);
          for (var m = 0; m < d.length; m++)
            d[m].fire("mouse" + a, g);
        },
        /**
         * @private
         * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
         */
        _finalizeCurrentTransform: function(n) {
          var a = this._currentTransform, i = a.target, l = {
            e: n,
            target: i,
            transform: a,
            action: a.action
          };
          i._scaling && (i._scaling = !1), i.setCoords(), (a.actionPerformed || this.stateful && i.hasStateChanged()) && this._fire("modified", l);
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        _onMouseDownInDrawingMode: function(n) {
          this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(n).requestRenderAll();
          var a = this.getPointer(n);
          this.freeDrawingBrush.onMouseDown(a, { e: n, pointer: a }), this._handleEvent(n, "down");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        _onMouseMoveInDrawingMode: function(n) {
          if (this._isCurrentlyDrawing) {
            var a = this.getPointer(n);
            this.freeDrawingBrush.onMouseMove(a, { e: n, pointer: a });
          }
          this.setCursor(this.freeDrawingCursor), this._handleEvent(n, "move");
        },
        /**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
        _onMouseUpInDrawingMode: function(n) {
          var a = this.getPointer(n);
          this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: n, pointer: a }), this._handleEvent(n, "up");
        },
        /**
         * Method that defines the actions when mouse is clicked on canvas.
         * The method inits the currentTransform parameters and renders all the
         * canvas so the current image can be placed on the top canvas and the rest
         * in on the container one.
         * @private
         * @param {Event} e Event object fired on mousedown
         */
        __onMouseDown: function(n) {
          this._cacheTransformEventData(n), this._handleEvent(n, "down:before");
          var a = this._target;
          if (t(n, h)) {
            this.fireRightClick && this._handleEvent(n, "down", h);
            return;
          }
          if (t(n, o)) {
            this.fireMiddleClick && this._handleEvent(n, "down", o);
            return;
          }
          if (this.isDrawingMode) {
            this._onMouseDownInDrawingMode(n);
            return;
          }
          if (this._isMainEvent(n) && !this._currentTransform) {
            var i = this._pointer;
            this._previousPointer = i;
            var l = this._shouldRender(a), u = this._shouldGroup(n, a);
            if (this._shouldClearSelection(n, a) ? this.discardActiveObject(n) : u && (this._handleGrouping(n, a), a = this._activeObject), this.selection && (!a || !a.selectable && !a.isEditing && a !== this._activeObject) && (this._groupSelector = {
              ex: this._absolutePointer.x,
              ey: this._absolutePointer.y,
              top: 0,
              left: 0
            }), a) {
              var d = a === this._activeObject;
              a.selectable && a.activeOn === "down" && this.setActiveObject(a, n);
              var g = a._findTargetCorner(
                this.getPointer(n, !0),
                f.util.isTouchEvent(n)
              );
              if (a.__corner = g, a === this._activeObject && (g || !u)) {
                this._setupCurrentTransform(n, a, d);
                var m = a.controls[g], i = this.getPointer(n), v = m && m.getMouseDownHandler(n, a, m);
                v && v(n, this._currentTransform, i.x, i.y);
              }
            }
            this._handleEvent(n, "down"), (l || u) && this.requestRenderAll();
          }
        },
        /**
         * reset cache form common information needed during event processing
         * @private
         */
        _resetTransformEventData: function() {
          this._target = null, this._pointer = null, this._absolutePointer = null;
        },
        /**
         * Cache common information needed during event processing
         * @private
         * @param {Event} e Event object fired on event
         */
        _cacheTransformEventData: function(n) {
          this._resetTransformEventData(), this._pointer = this.getPointer(n, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(n) || null;
        },
        /**
         * @private
         */
        _beforeTransform: function(n) {
          var a = this._currentTransform;
          this.stateful && a.target.saveState(), this.fire("before:transform", {
            e: n,
            transform: a
          });
        },
        /**
         * Method that defines the actions when mouse is hovering the canvas.
         * The currentTransform parameter will define whether the user is rotating/scaling/translating
         * an image or neither of them (only hovering). A group selection is also possible and would cancel
         * all any other type of action.
         * In case of an image transformation only the top canvas will be rendered.
         * @private
         * @param {Event} e Event object fired on mousemove
         */
        __onMouseMove: function(n) {
          this._handleEvent(n, "move:before"), this._cacheTransformEventData(n);
          var a, i;
          if (this.isDrawingMode) {
            this._onMouseMoveInDrawingMode(n);
            return;
          }
          if (this._isMainEvent(n)) {
            var l = this._groupSelector;
            l ? (i = this._absolutePointer, l.left = i.x - l.ex, l.top = i.y - l.ey, this.renderTop()) : this._currentTransform ? this._transformObject(n) : (a = this.findTarget(n) || null, this._setCursorFromEvent(n, a), this._fireOverOutEvents(a, n)), this._handleEvent(n, "move"), this._resetTransformEventData();
          }
        },
        /**
         * Manage the mouseout, mouseover events for the fabric object on the canvas
         * @param {Fabric.Object} target the target where the target from the mousemove event
         * @param {Event} e Event object fired on mousemove
         * @private
         */
        _fireOverOutEvents: function(n, a) {
          var i = this._hoveredTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
          this.fireSyntheticInOutEvents(n, a, {
            oldTarget: i,
            evtOut: "mouseout",
            canvasEvtOut: "mouse:out",
            evtIn: "mouseover",
            canvasEvtIn: "mouse:over"
          });
          for (var g = 0; g < d; g++)
            this.fireSyntheticInOutEvents(u[g], a, {
              oldTarget: l[g],
              evtOut: "mouseout",
              evtIn: "mouseover"
            });
          this._hoveredTarget = n, this._hoveredTargets = this.targets.concat();
        },
        /**
         * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the onDrag event
         * @param {Event} e Event object fired on ondrag
         * @private
         */
        _fireEnterLeaveEvents: function(n, a) {
          var i = this._draggedoverTarget, l = this._hoveredTargets, u = this.targets, d = Math.max(l.length, u.length);
          this.fireSyntheticInOutEvents(n, a, {
            oldTarget: i,
            evtOut: "dragleave",
            evtIn: "dragenter"
          });
          for (var g = 0; g < d; g++)
            this.fireSyntheticInOutEvents(u[g], a, {
              oldTarget: l[g],
              evtOut: "dragleave",
              evtIn: "dragenter"
            });
          this._draggedoverTarget = n;
        },
        /**
         * Manage the synthetic in/out events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the supported events
         * @param {Event} e Event object fired
         * @param {Object} config configuration for the function to work
         * @param {String} config.targetName property on the canvas where the old target is stored
         * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
         * @param {String} config.evtOut name of the event to fire for out
         * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
         * @param {String} config.evtIn name of the event to fire for in
         * @private
         */
        fireSyntheticInOutEvents: function(n, a, i) {
          var l, u, d = i.oldTarget, g, m, v = d !== n, y = i.canvasEvtIn, w = i.canvasEvtOut;
          v && (l = { e: a, target: n, previousTarget: d }, u = { e: a, target: d, nextTarget: n }), m = n && v, g = d && v, g && (w && this.fire(w, u), d.fire(i.evtOut, u)), m && (y && this.fire(y, l), n.fire(i.evtIn, l));
        },
        /**
         * Method that defines actions when an Event Mouse Wheel
         * @param {Event} e Event object fired on mouseup
         */
        __onMouseWheel: function(n) {
          this._cacheTransformEventData(n), this._handleEvent(n, "wheel"), this._resetTransformEventData();
        },
        /**
         * @private
         * @param {Event} e Event fired on mousemove
         */
        _transformObject: function(n) {
          var a = this.getPointer(n), i = this._currentTransform;
          i.reset = !1, i.shiftKey = n.shiftKey, i.altKey = n[this.centeredKey], this._performTransformAction(n, i, a), i.actionPerformed && this.requestRenderAll();
        },
        /**
         * @private
         */
        _performTransformAction: function(n, a, i) {
          var l = i.x, u = i.y, d = a.action, g = !1, m = a.actionHandler;
          m && (g = m(n, a, l, u)), d === "drag" && g && (a.target.isMoving = !0, this.setCursor(a.target.moveCursor || this.moveCursor)), a.actionPerformed = a.actionPerformed || g;
        },
        /**
         * @private
         */
        _fire: f.controlsUtils.fireEvent,
        /**
         * Sets the cursor depending on where the canvas is being hovered.
         * Note: very buggy in Opera
         * @param {Event} e Event object
         * @param {Object} target Object that the mouse is hovering, if so.
         */
        _setCursorFromEvent: function(n, a) {
          if (!a)
            return this.setCursor(this.defaultCursor), !1;
          var i = a.hoverCursor || this.hoverCursor, l = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, u = (!l || !l.contains(a)) && a._findTargetCorner(this.getPointer(n, !0));
          u ? this.setCursor(this.getCornerCursor(u, a, n)) : (a.subTargetCheck && this.targets.concat().reverse().map(function(d) {
            i = d.hoverCursor || i;
          }), this.setCursor(i));
        },
        /**
         * @private
         */
        getCornerCursor: function(n, a, i) {
          var l = a.controls[n];
          return l.cursorStyleHandler(i, l, a);
        }
      }
    );
  }(), function() {
    var c = Math.min, s = Math.max;
    f.util.object.extend(
      f.Canvas.prototype,
      /** @lends fabric.Canvas.prototype */
      {
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         * @return {Boolean}
         */
        _shouldGroup: function(h, o) {
          var e = this._activeObject;
          return e && this._isSelectionKeyPressed(h) && o && o.selectable && this.selection && (e !== o || e.type === "activeSelection") && !o.onSelect({ e: h });
        },
        /**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
        _handleGrouping: function(h, o) {
          var e = this._activeObject;
          e.__corner || o === e && (o = this.findTarget(h, !0), !o || !o.selectable) || (e && e.type === "activeSelection" ? this._updateActiveSelection(o, h) : this._createActiveSelection(o, h));
        },
        /**
         * @private
         */
        _updateActiveSelection: function(h, o) {
          var e = this._activeObject, r = e._objects.slice(0);
          e.contains(h) ? (e.removeWithUpdate(h), this._hoveredTarget = h, this._hoveredTargets = this.targets.concat(), e.size() === 1 && this._setActiveObject(e.item(0), o)) : (e.addWithUpdate(h), this._hoveredTarget = e, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(r, o);
        },
        /**
         * @private
         */
        _createActiveSelection: function(h, o) {
          var e = this.getActiveObjects(), r = this._createGroup(h);
          this._hoveredTarget = r, this._setActiveObject(r, o), this._fireSelectionEvents(e, o);
        },
        /**
         * @private
         * @param {Object} target
         */
        _createGroup: function(h) {
          var o = this._objects, e = o.indexOf(this._activeObject) < o.indexOf(h), r = e ? [this._activeObject, h] : [h, this._activeObject];
          return this._activeObject.isEditing && this._activeObject.exitEditing(), new f.ActiveSelection(r, {
            canvas: this
          });
        },
        /**
         * @private
         * @param {Event} e mouse event
         */
        _groupSelectedObjects: function(h) {
          var o = this._collectObjects(h), e;
          o.length === 1 ? this.setActiveObject(o[0], h) : o.length > 1 && (e = new f.ActiveSelection(o.reverse(), {
            canvas: this
          }), this.setActiveObject(e, h));
        },
        /**
         * @private
         */
        _collectObjects: function(h) {
          for (var o = [], e, r = this._groupSelector.ex, t = this._groupSelector.ey, n = r + this._groupSelector.left, a = t + this._groupSelector.top, i = new f.Point(c(r, n), c(t, a)), l = new f.Point(s(r, n), s(t, a)), u = !this.selectionFullyContained, d = r === n && t === a, g = this._objects.length; g-- && (e = this._objects[g], !(!(!e || !e.selectable || !e.visible) && (u && e.intersectsWithRect(i, l, !0) || e.isContainedWithinRect(i, l, !0) || u && e.containsPoint(i, null, !0) || u && e.containsPoint(l, null, !0)) && (o.push(e), d))); )
            ;
          return o.length > 1 && (o = o.filter(function(m) {
            return !m.onSelect({ e: h });
          })), o;
        },
        /**
         * @private
         */
        _maybeGroupObjects: function(h) {
          this.selection && this._groupSelector && this._groupSelectedObjects(h), this.setCursor(this.defaultCursor), this._groupSelector = null;
        }
      }
    );
  }(), function() {
    f.util.object.extend(
      f.StaticCanvas.prototype,
      /** @lends fabric.StaticCanvas.prototype */
      {
        /**
         * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
         * @param {Object} [options] Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
         * @example <caption>Generate jpeg dataURL with lower quality</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'jpeg',
         *   quality: 0.8
         * });
         * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   left: 100,
         *   top: 100,
         *   width: 200,
         *   height: 200
         * });
         * @example <caption>Generate double scaled png dataURL</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   multiplier: 2
         * });
         */
        toDataURL: function(c) {
          c || (c = {});
          var s = c.format || "png", h = c.quality || 1, o = (c.multiplier || 1) * (c.enableRetinaScaling ? this.getRetinaScaling() : 1), e = this.toCanvasElement(o, c);
          return f.util.toDataURL(e, s, h);
        },
        /**
         * Create a new HTMLCanvas element painted with the current canvas content.
         * No need to resize the actual one or repaint it.
         * Will transfer object ownership to a new canvas, paint it, and set everything back.
         * This is an intermediary step used to get to a dataUrl but also it is useful to
         * create quick image copies of a canvas without passing for the dataUrl string
         * @param {Number} [multiplier] a zoom factor.
         * @param {Object} [cropping] Cropping informations
         * @param {Number} [cropping.left] Cropping left offset.
         * @param {Number} [cropping.top] Cropping top offset.
         * @param {Number} [cropping.width] Cropping width.
         * @param {Number} [cropping.height] Cropping height.
         */
        toCanvasElement: function(c, s) {
          c = c || 1, s = s || {};
          var h = (s.width || this.width) * c, o = (s.height || this.height) * c, e = this.getZoom(), r = this.width, t = this.height, n = e * c, a = this.viewportTransform, i = (a[4] - (s.left || 0)) * c, l = (a[5] - (s.top || 0)) * c, u = this.interactive, d = [n, 0, 0, n, i, l], g = this.enableRetinaScaling, m = f.util.createCanvasElement(), v = this.contextTop;
          return m.width = h, m.height = o, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = d, this.width = h, this.height = o, this.calcViewportBoundaries(), this.renderCanvas(m.getContext("2d"), this._objects), this.viewportTransform = a, this.width = r, this.height = t, this.calcViewportBoundaries(), this.interactive = u, this.enableRetinaScaling = g, this.contextTop = v, m;
        }
      }
    );
  }(), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Populates canvas with data from the specified JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
       * @example <caption>loadFromJSON</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
       * @example <caption>loadFromJSON with reviver</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
       *   // `o` = json object
       *   // `object` = fabric.Object instance
       *   // ... do some stuff ...
       * });
       */
      loadFromJSON: function(c, s, h) {
        if (c) {
          var o = typeof c == "string" ? JSON.parse(c) : f.util.object.clone(c), e = this, r = o.clipPath, t = this.renderOnAddRemove;
          return this.renderOnAddRemove = !1, delete o.clipPath, this._enlivenObjects(o.objects, function(n) {
            e.clear(), e._setBgOverlay(o, function() {
              r ? e._enlivenObjects([r], function(a) {
                e.clipPath = a[0], e.__setupCanvas.call(e, o, n, t, s);
              }) : e.__setupCanvas.call(e, o, n, t, s);
            });
          }, h), this;
        }
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Array} restored canvas objects
       * @param {Function} cached renderOnAddRemove callback
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      __setupCanvas: function(c, s, h, o) {
        var e = this;
        s.forEach(function(r, t) {
          e.insertAt(r, t);
        }), this.renderOnAddRemove = h, delete c.objects, delete c.backgroundImage, delete c.overlayImage, delete c.background, delete c.overlay, this._setOptions(c), this.renderAll(), o && o();
      },
      /**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
      _setBgOverlay: function(c, s) {
        var h = {
          backgroundColor: !1,
          overlayColor: !1,
          backgroundImage: !1,
          overlayImage: !1
        };
        if (!c.backgroundImage && !c.overlayImage && !c.background && !c.overlay) {
          s && s();
          return;
        }
        var o = function() {
          h.backgroundImage && h.overlayImage && h.backgroundColor && h.overlayColor && s && s();
        };
        this.__setBgOverlay("backgroundImage", c.backgroundImage, h, o), this.__setBgOverlay("overlayImage", c.overlayImage, h, o), this.__setBgOverlay("backgroundColor", c.background, h, o), this.__setBgOverlay("overlayColor", c.overlay, h, o);
      },
      /**
       * @private
       * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
       * @param {(Object|String)} value Value to set
       * @param {Object} loaded Set loaded property to true if property is set
       * @param {Object} callback Callback function to invoke after property is set
       */
      __setBgOverlay: function(c, s, h, o) {
        var e = this;
        if (!s) {
          h[c] = !0, o && o();
          return;
        }
        c === "backgroundImage" || c === "overlayImage" ? f.util.enlivenObjects([s], function(r) {
          e[c] = r[0], h[c] = !0, o && o();
        }) : this["set" + f.util.string.capitalize(c, !0)](s, function() {
          h[c] = !0, o && o();
        });
      },
      /**
       * @private
       * @param {Array} objects
       * @param {Function} callback
       * @param {Function} [reviver]
       */
      _enlivenObjects: function(c, s, h) {
        if (!c || c.length === 0) {
          s && s([]);
          return;
        }
        f.util.enlivenObjects(c, function(o) {
          s && s(o);
        }, null, h);
      },
      /**
       * @private
       * @param {String} format
       * @param {Function} callback
       */
      _toDataURL: function(c, s) {
        this.clone(function(h) {
          s(h.toDataURL(c));
        });
      },
      /**
       * @private
       * @param {String} format
       * @param {Number} multiplier
       * @param {Function} callback
       */
      _toDataURLWithMultiplier: function(c, s, h) {
        this.clone(function(o) {
          h(o.toDataURLWithMultiplier(c, s));
        });
      },
      /**
       * Clones canvas instance
       * @param {Object} [callback] Receives cloned instance as a first argument
       * @param {Array} [properties] Array of properties to include in the cloned canvas and children
       */
      clone: function(c, s) {
        var h = JSON.stringify(this.toJSON(s));
        this.cloneWithoutData(function(o) {
          o.loadFromJSON(h, function() {
            c && c(o);
          });
        });
      },
      /**
       * Clones canvas instance without cloning existing data.
       * This essentially copies canvas dimensions, clipping properties, etc.
       * but leaves data empty (so that you can populate it with your own)
       * @param {Object} [callback] Receives cloned instance as a first argument
       */
      cloneWithoutData: function(c) {
        var s = f.util.createCanvasElement();
        s.width = this.width, s.height = this.height;
        var h = new f.Canvas(s);
        this.backgroundImage ? (h.setBackgroundImage(this.backgroundImage.src, function() {
          h.renderAll(), c && c(h);
        }), h.backgroundImageOpacity = this.backgroundImageOpacity, h.backgroundImageStretch = this.backgroundImageStretch) : c && c(h);
      }
    }
  ), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, e = s.util.toFixed, r = s.util.string.capitalize, t = s.util.degreesToRadians, n = !s.isLikelyNode, a = 2;
    s.Object || (s.Object = s.util.createClass(
      s.CommonMethods,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Type of an object (rect, circle, path, etc.).
         * Note that this property is meant to be read-only and not meant to be modified.
         * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
         * @type String
         * @default
         */
        type: "object",
        /**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originX: "left",
        /**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
        originY: "top",
        /**
         * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
         * @type Number
         * @default
         */
        top: 0,
        /**
         * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
         * @type Number
         * @default
         */
        left: 0,
        /**
         * Object width
         * @type Number
         * @default
         */
        width: 0,
        /**
         * Object height
         * @type Number
         * @default
         */
        height: 0,
        /**
         * Object scale factor (horizontal)
         * @type Number
         * @default
         */
        scaleX: 1,
        /**
         * Object scale factor (vertical)
         * @type Number
         * @default
         */
        scaleY: 1,
        /**
         * When true, an object is rendered as flipped horizontally
         * @type Boolean
         * @default
         */
        flipX: !1,
        /**
         * When true, an object is rendered as flipped vertically
         * @type Boolean
         * @default
         */
        flipY: !1,
        /**
         * Opacity of an object
         * @type Number
         * @default
         */
        opacity: 1,
        /**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
        angle: 0,
        /**
         * Angle of skew on x axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewX: 0,
        /**
         * Angle of skew on y axes of an object (in degrees)
         * @type Number
         * @default
         */
        skewY: 0,
        /**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
        cornerSize: 13,
        /**
         * Size of object's controlling corners when touch interaction is detected
         * @type Number
         * @default
         */
        touchCornerSize: 24,
        /**
         * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
         * @type Boolean
         * @default
         */
        transparentCorners: !0,
        /**
         * Default cursor value used when hovering over this object on canvas
         * @type String
         * @default
         */
        hoverCursor: null,
        /**
         * Default cursor value used when moving this object on canvas
         * @type String
         * @default
         */
        moveCursor: null,
        /**
         * Padding between object and its controlling borders (in pixels)
         * @type Number
         * @default
         */
        padding: 0,
        /**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
        borderColor: "rgb(178,204,255)",
        /**
         * Array specifying dash pattern of an object's borders (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        borderDashArray: null,
        /**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
        cornerColor: "rgb(178,204,255)",
        /**
         * Color of controlling corners of an object (when it's active and transparentCorners false)
         * @since 1.6.2
         * @type String
         * @default
         */
        cornerStrokeColor: null,
        /**
         * Specify style of control, 'rect' or 'circle'
         * @since 1.6.2
         * @type String
         */
        cornerStyle: "rect",
        /**
         * Array specifying dash pattern of an object's control (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
        cornerDashArray: null,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: !1,
        /**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: !0,
        /**
         * Color of object's fill
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        fill: "rgb(0,0,0)",
        /**
         * Fill rule used to fill an object
         * accepted values are nonzero, evenodd
         * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
         * @type String
         * @default
         */
        fillRule: "nonzero",
        /**
         * Composite rule used for canvas globalCompositeOperation
         * @type String
         * @default
         */
        globalCompositeOperation: "source-over",
        /**
         * Background color of an object.
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        backgroundColor: "",
        /**
         * Selection Background color of an object. colored layer behind the object when it is active.
         * does not mix good with globalCompositeOperation methods.
         * @type String
         * @default
         */
        selectionBackgroundColor: "",
        /**
         * When defined, an object is rendered via stroke and this property specifies its color
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Width of a stroke used to render this object
         * @type Number
         * @default
         */
        strokeWidth: 1,
        /**
         * Array specifying dash pattern of an object's stroke (stroke must be defined)
         * @type Array
         */
        strokeDashArray: null,
        /**
         * Line offset of an object's stroke
         * @type Number
         * @default
         */
        strokeDashOffset: 0,
        /**
         * Line endings style of an object's stroke (one of "butt", "round", "square")
         * @type String
         * @default
         */
        strokeLineCap: "butt",
        /**
         * Corner style of an object's stroke (one of "bevel", "round", "miter")
         * @type String
         * @default
         */
        strokeLineJoin: "miter",
        /**
         * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
         * @type Number
         * @default
         */
        strokeMiterLimit: 4,
        /**
         * Shadow object representing shadow of this shape
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
        borderOpacityWhenMoving: 0.4,
        /**
         * Scale factor of object's controlling borders
         * bigger number will make a thicker border
         * border is 1, so this is basically a border thickness
         * since there is no way to change the border itself.
         * @type Number
         * @default
         */
        borderScaleFactor: 1,
        /**
         * Minimum allowed scale value of an object
         * @type Number
         * @default
         */
        minScaleLimit: 0,
        /**
         * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
         * But events still fire on it.
         * @type Boolean
         * @default
         */
        selectable: !0,
        /**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
        evented: !0,
        /**
         * When set to `false`, an object is not rendered on canvas
         * @type Boolean
         * @default
         */
        visible: !0,
        /**
         * When set to `false`, object's controls are not displayed and can not be used to manipulate object
         * @type Boolean
         * @default
         */
        hasControls: !0,
        /**
         * When set to `false`, object's controlling borders are not rendered
         * @type Boolean
         * @default
         */
        hasBorders: !0,
        /**
         * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
         * @type Boolean
         * @default
         */
        perPixelTargetFind: !1,
        /**
         * When `false`, default object's values are not included in its serialization
         * @type Boolean
         * @default
         */
        includeDefaultValues: !0,
        /**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
        lockMovementX: !1,
        /**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
        lockMovementY: !1,
        /**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
        lockRotation: !1,
        /**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingX: !1,
        /**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingY: !1,
        /**
         * When `true`, object horizontal skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingX: !1,
        /**
         * When `true`, object vertical skewing is locked
         * @type Boolean
         * @default
         */
        lockSkewingY: !1,
        /**
         * When `true`, object cannot be flipped by scaling into negative values
         * @type Boolean
         * @default
         */
        lockScalingFlip: !1,
        /**
         * When `true`, object is not exported in OBJECT/JSON
         * @since 1.6.3
         * @type Boolean
         * @default
         */
        excludeFromExport: !1,
        /**
         * When `true`, object is cached on an additional canvas.
         * When `false`, object is not cached unless necessary ( clipPath )
         * default to true
         * @since 1.7.0
         * @type Boolean
         * @default true
         */
        objectCaching: n,
        /**
         * When `true`, object properties are checked for cache invalidation. In some particular
         * situation you may want this to be disabled ( spray brush, very big, groups)
         * or if your application does not allow you to modify properties for groups child you want
         * to disable it for groups.
         * default to false
         * since 1.7.0
         * @type Boolean
         * @default false
         */
        statefullCache: !1,
        /**
         * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
         * too much and will be redrawn with correct details at the end of scaling.
         * this setting is performance and application dependant.
         * default to true
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        noScaleCache: !0,
        /**
         * When `false`, the stoke width will scale with the object.
         * When `true`, the stroke will always match the exact pixel size entered for stroke width.
         * this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
         * default to false
         * @since 2.6.0
         * @type Boolean
         * @default false
         * @type Boolean
         * @default false
         */
        strokeUniform: !1,
        /**
         * When set to `true`, object's cache will be rerendered next render call.
         * since 1.7.0
         * @type Boolean
         * @default true
         */
        dirty: !0,
        /**
         * keeps the value of the last hovered corner during mouse move.
         * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
         * It should be private, but there is no harm in using it as
         * a read-only property.
         * @type number|string|any
         * @default 0
         */
        __corner: 0,
        /**
         * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
         * @type String
         * @default
         */
        paintFirst: "fill",
        /**
         * When 'down', object is set to active on mousedown/touchstart
         * When 'up', object is set to active on mouseup/touchend
         * Experimental. Let's see if this breaks anything before supporting officially
         * @private
         * since 4.4.0
         * @type String
         * @default 'down'
         */
        activeOn: "down",
        /**
         * List of properties to consider when checking if state
         * of an object is changed (fabric.Object#hasStateChanged)
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
        /**
         * List of properties to consider for animating colors.
         * @type Array
         */
        colorProperties: "fill stroke backgroundColor".split(" "),
        /**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the object has rendered, and the context is placed in the center
         * of the object cacheCanvas.
         * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
         * @type fabric.Object
         */
        clipPath: void 0,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will make the object clip to the outside of the clipPath
         * since 2.4.0
         * @type boolean
         * @default false
         */
        inverted: !1,
        /**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will have its top and left relative to canvas, and will
         * not be influenced by the object transform. This will make the clipPath relative
         * to the canvas, but clipping just a particular object.
         * WARNING this is beta, this feature may change or be renamed.
         * since 2.4.0
         * @type boolean
         * @default false
         */
        absolutePositioned: !1,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(i) {
          i && this.setOptions(i);
        },
        /**
         * Create a the canvas used to keep the cached copy of the object
         * @private
         */
        _createCacheCanvas: function() {
          this._cacheProperties = {}, this._cacheCanvas = s.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
        },
        /**
         * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
         * and each side do not cross fabric.cacheSideLimit
         * those numbers are configurable so that you can get as much detail as you want
         * making bargain with performances.
         * @param {Object} dims
         * @param {Object} dims.width width of canvas
         * @param {Object} dims.height height of canvas
         * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _limitCacheSize: function(i) {
          var l = s.perfLimitSizeTotal, u = i.width, d = i.height, g = s.maxCacheSideLimit, m = s.minCacheSideLimit;
          if (u <= g && d <= g && u * d <= l)
            return u < m && (i.width = m), d < m && (i.height = m), i;
          var v = u / d, y = s.util.limitDimsByArea(v, l), w = s.util.capValue, M = w(m, y.x, g), X = w(m, y.y, g);
          return u > M && (i.zoomX /= u / M, i.width = M, i.capped = !0), d > X && (i.zoomY /= d / X, i.height = X, i.capped = !0), i;
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @return {Object}.x width of object to be cached
         * @return {Object}.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var i = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), u = l.x * i.scaleX / this.scaleX, d = l.y * i.scaleY / this.scaleY;
          return {
            // for sure this ALIASING_LIMIT is slightly creating problem
            // in situation in which the cache canvas gets an upper limit
            // also objectScale contains already scaleX and scaleY
            width: u + a,
            height: d + a,
            zoomX: i.scaleX,
            zoomY: i.scaleY,
            x: u,
            y: d
          };
        },
        /**
         * Update width and height of the canvas for cache
         * returns true or false if canvas needed resize.
         * @private
         * @return {Boolean} true if the canvas has been resized
         */
        _updateCacheCanvas: function() {
          var i = this.canvas;
          if (this.noScaleCache && i && i._currentTransform) {
            var l = i._currentTransform.target, u = i._currentTransform.action;
            if (this === l && u.slice && u.slice(0, 5) === "scale")
              return !1;
          }
          var d = this._cacheCanvas, g = this._limitCacheSize(this._getCacheCanvasDimensions()), m = s.minCacheSideLimit, v = g.width, y = g.height, w, M, X = g.zoomX, W = g.zoomY, V = v !== this.cacheWidth || y !== this.cacheHeight, N = this.zoomX !== X || this.zoomY !== W, H = V || N, z = 0, q = 0, J = !1;
          if (V) {
            var K = this._cacheCanvas.width, p = this._cacheCanvas.height, b = v > K || y > p, x = (v < K * 0.9 || y < p * 0.9) && K > m && p > m;
            J = b || x, b && !g.capped && (v > m || y > m) && (z = v * 0.1, q = y * 0.1);
          }
          return this instanceof s.Text && this.path && (H = !0, J = !0, z += this.getHeightOfLine(0) * this.zoomX, q += this.getHeightOfLine(0) * this.zoomY), H ? (J ? (d.width = Math.ceil(v + z), d.height = Math.ceil(y + q)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, d.width, d.height)), w = g.x / 2, M = g.y / 2, this.cacheTranslationX = Math.round(d.width / 2 - w) + w, this.cacheTranslationY = Math.round(d.height / 2 - M) + M, this.cacheWidth = v, this.cacheHeight = y, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(X, W), this.zoomX = X, this.zoomY = W, !0) : !1;
        },
        /**
         * Sets object's properties from options
         * @param {Object} [options] Options object
         */
        setOptions: function(i) {
          this._setOptions(i), this._initGradient(i.fill, "fill"), this._initGradient(i.stroke, "stroke"), this._initPattern(i.fill, "fill"), this._initPattern(i.stroke, "stroke");
        },
        /**
         * Transforms context when rendering an object
         * @param {CanvasRenderingContext2D} ctx Context
         */
        transform: function(i) {
          var l = this.group && !this.group._transformDone || this.group && this.canvas && i === this.canvas.contextTop, u = this.calcTransformMatrix(!l);
          i.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
        },
        /**
         * Returns an object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(i) {
          var l = s.Object.NUM_FRACTION_DIGITS, u = {
            type: this.type,
            version: s.version,
            originX: this.originX,
            originY: this.originY,
            left: e(this.left, l),
            top: e(this.top, l),
            width: e(this.width, l),
            height: e(this.height, l),
            fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
            stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
            strokeWidth: e(this.strokeWidth, l),
            strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap: this.strokeLineCap,
            strokeDashOffset: this.strokeDashOffset,
            strokeLineJoin: this.strokeLineJoin,
            strokeUniform: this.strokeUniform,
            strokeMiterLimit: e(this.strokeMiterLimit, l),
            scaleX: e(this.scaleX, l),
            scaleY: e(this.scaleY, l),
            angle: e(this.angle, l),
            flipX: this.flipX,
            flipY: this.flipY,
            opacity: e(this.opacity, l),
            shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
            visible: this.visible,
            backgroundColor: this.backgroundColor,
            fillRule: this.fillRule,
            paintFirst: this.paintFirst,
            globalCompositeOperation: this.globalCompositeOperation,
            skewX: e(this.skewX, l),
            skewY: e(this.skewY, l)
          };
          return this.clipPath && !this.clipPath.excludeFromExport && (u.clipPath = this.clipPath.toObject(i), u.clipPath.inverted = this.clipPath.inverted, u.clipPath.absolutePositioned = this.clipPath.absolutePositioned), s.util.populateWithProperties(this, u, i), this.includeDefaultValues || (u = this._removeDefaultValues(u)), u;
        },
        /**
         * Returns (dataless) object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toDatalessObject: function(i) {
          return this.toObject(i);
        },
        /**
         * @private
         * @param {Object} object
         */
        _removeDefaultValues: function(i) {
          var l = s.util.getKlass(i.type).prototype, u = l.stateProperties;
          return u.forEach(function(d) {
            d === "left" || d === "top" || (i[d] === l[d] && delete i[d], Array.isArray(i[d]) && Array.isArray(l[d]) && i[d].length === 0 && l[d].length === 0 && delete i[d]);
          }), i;
        },
        /**
         * Returns a string representation of an instance
         * @return {String}
         */
        toString: function() {
          return "#<fabric." + r(this.type) + ">";
        },
        /**
         * Return the object scale factor counting also the group scaling
         * @return {Object} object with scaleX and scaleY properties
         */
        getObjectScaling: function() {
          if (!this.group)
            return {
              scaleX: this.scaleX,
              scaleY: this.scaleY
            };
          var i = s.util.qrDecompose(this.calcTransformMatrix());
          return { scaleX: Math.abs(i.scaleX), scaleY: Math.abs(i.scaleY) };
        },
        /**
         * Return the object scale factor counting also the group scaling, zoom and retina
         * @return {Object} object with scaleX and scaleY properties
         */
        getTotalObjectScaling: function() {
          var i = this.getObjectScaling(), l = i.scaleX, u = i.scaleY;
          if (this.canvas) {
            var d = this.canvas.getZoom(), g = this.canvas.getRetinaScaling();
            l *= d * g, u *= d * g;
          }
          return { scaleX: l, scaleY: u };
        },
        /**
         * Return the object opacity counting also the group property
         * @return {Number}
         */
        getObjectOpacity: function() {
          var i = this.opacity;
          return this.group && (i *= this.group.getObjectOpacity()), i;
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Object} thisArg
         */
        _set: function(i, l) {
          var u = i === "scaleX" || i === "scaleY", d = this[i] !== l, g = !1;
          return u && (l = this._constrainScale(l)), i === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : i === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : i === "shadow" && l && !(l instanceof s.Shadow) ? l = new s.Shadow(l) : i === "dirty" && this.group && this.group.set("dirty", l), this[i] = l, d && (g = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(i) > -1 ? (this.dirty = !0, g && this.group.set("dirty", !0)) : g && this.stateProperties.indexOf(i) > -1 && this.group.set("dirty", !0)), this;
        },
        /**
         * This callback function is called by the parent group of an object every
         * time a non-delegated property changes on the group. It is passed the key
         * and value as parameters. Not adding in this function's signature to avoid
         * Travis build error about unused variables.
         */
        setOnGroup: function() {
        },
        /**
         * Retrieves viewportTransform from Object's canvas if possible
         * @method getViewportTransform
         * @memberOf fabric.Object.prototype
         * @return {Array}
         */
        getViewportTransform: function() {
          return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : s.iMatrix.concat();
        },
        /*
         * @private
         * return if the object would be visible in rendering
         * @memberOf fabric.Object.prototype
         * @return {Boolean}
         */
        isNotVisible: function() {
          return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
        },
        /**
         * Renders an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(i) {
          this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (i.save(), this._setupCompositeOperation(i), this.drawSelectionBackground(i), this.transform(i), this._setOpacity(i), this._setShadow(i, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(i)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(i), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), i.restore());
        },
        renderCache: function(i) {
          i = i || {}, (!this._cacheCanvas || !this._cacheContext) && this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, i.forClipping), this.dirty = !1);
        },
        /**
         * Remove cacheCanvas and its dimensions from the objects
         */
        _removeCacheCanvas: function() {
          this._cacheCanvas = null, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
        },
        /**
         * return true if the object will draw a stroke
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when stroke happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the stroke is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasStroke: function() {
          return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
        },
        /**
         * return true if the object will draw a fill
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when fill happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the fill is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
        hasFill: function() {
          return this.fill && this.fill !== "transparent";
        },
        /**
         * When set to `true`, force the object to have its own cache, even if it is inside a group
         * it may be needed when your object behave in a particular way on the cache and always needs
         * its own isolated canvas to render correctly.
         * Created to be overridden
         * since 1.7.12
         * @returns Boolean
         */
        needsItsOwnCache: function() {
          return !!(this.paintFirst === "stroke" && this.hasFill() && this.hasStroke() && typeof this.shadow == "object" || this.clipPath);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * used by Group.shouldCache to know if child has a shadow recursively
         * @return {Boolean}
         */
        willDrawShadow: function() {
          return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
        },
        /**
         * Execute the drawing operation for an object clipPath
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Object} clipPath
         */
        drawClipPathOnCache: function(i, l) {
          if (i.save(), l.inverted ? i.globalCompositeOperation = "destination-out" : i.globalCompositeOperation = "destination-in", l.absolutePositioned) {
            var u = s.util.invertTransform(this.calcTransformMatrix());
            i.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
          }
          l.transform(i), i.scale(1 / l.zoomX, 1 / l.zoomY), i.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), i.restore();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(i, l) {
          var u = this.fill, d = this.stroke;
          l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(i)) : this._renderBackground(i), this._render(i), this._drawClipPath(i, this.clipPath), this.fill = u, this.stroke = d;
        },
        /**
         * Prepare clipPath state and cache and draw it on instance's cache
         * @param {CanvasRenderingContext2D} ctx
         * @param {fabric.Object} clipPath
         */
        _drawClipPath: function(i, l) {
          l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(i, l));
        },
        /**
         * Paint the cached copy of the object on the target context.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(i) {
          i.scale(1 / this.zoomX, 1 / this.zoomY), i.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
        },
        /**
         * Check if cache is dirty
         * @param {Boolean} skipCanvas skip canvas checks because this object is painted
         * on parent canvas.
         */
        isCacheDirty: function(i) {
          if (this.isNotVisible())
            return !1;
          if (this._cacheCanvas && this._cacheContext && !i && this._updateCacheCanvas())
            return !0;
          if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
            if (this._cacheCanvas && this._cacheContext && !i) {
              var l = this.cacheWidth / this.zoomX, u = this.cacheHeight / this.zoomY;
              this._cacheContext.clearRect(-l / 2, -u / 2, l, u);
            }
            return !0;
          }
          return !1;
        },
        /**
         * Draws a background for the object big as its untransformed dimensions
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderBackground: function(i) {
          if (this.backgroundColor) {
            var l = this._getNonTransformedDimensions();
            i.fillStyle = this.backgroundColor, i.fillRect(
              -l.x / 2,
              -l.y / 2,
              l.x,
              l.y
            ), this._removeShadow(i);
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setOpacity: function(i) {
          this.group && !this.group._transformDone ? i.globalAlpha = this.getObjectOpacity() : i.globalAlpha *= this.opacity;
        },
        _setStrokeStyles: function(i, l) {
          var u = l.stroke;
          u && (i.lineWidth = l.strokeWidth, i.lineCap = l.strokeLineCap, i.lineDashOffset = l.strokeDashOffset, i.lineJoin = l.strokeLineJoin, i.miterLimit = l.strokeMiterLimit, u.toLive ? u.gradientUnits === "percentage" || u.gradientTransform || u.patternTransform ? this._applyPatternForTransformedGradient(i, u) : (i.strokeStyle = u.toLive(i, this), this._applyPatternGradientTransform(i, u)) : i.strokeStyle = l.stroke);
        },
        _setFillStyles: function(i, l) {
          var u = l.fill;
          u && (u.toLive ? (i.fillStyle = u.toLive(i, this), this._applyPatternGradientTransform(i, l.fill)) : i.fillStyle = u);
        },
        _setClippingProperties: function(i) {
          i.globalAlpha = 1, i.strokeStyle = "transparent", i.fillStyle = "#000000";
        },
        /**
         * @private
         * Sets line dash
         * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
         * @param {Array} dashArray array representing dashes
         */
        _setLineDash: function(i, l) {
          !l || l.length === 0 || (1 & l.length && l.push.apply(l, l), i.setLineDash(l));
        },
        /**
         * Renders controls and borders for the object
         * the context here is not transformed
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         */
        _renderControls: function(i, l) {
          var u = this.getViewportTransform(), d = this.calcTransformMatrix(), g, m, v;
          l = l || {}, m = typeof l.hasBorders < "u" ? l.hasBorders : this.hasBorders, v = typeof l.hasControls < "u" ? l.hasControls : this.hasControls, d = s.util.multiplyTransformMatrices(u, d), g = s.util.qrDecompose(d), i.save(), i.translate(g.translateX, g.translateY), i.lineWidth = 1 * this.borderScaleFactor, this.group || (i.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (g.angle -= 180), i.rotate(t(this.group ? g.angle : this.angle)), l.forActiveSelection || this.group ? m && this.drawBordersInGroup(i, g, l) : m && this.drawBorders(i, l), v && this.drawControls(i, l), i.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _setShadow: function(i) {
          if (this.shadow) {
            var l = this.shadow, u = this.canvas, d, g = u && u.viewportTransform[0] || 1, m = u && u.viewportTransform[3] || 1;
            l.nonScaling ? d = { scaleX: 1, scaleY: 1 } : d = this.getObjectScaling(), u && u._isRetinaScaling() && (g *= s.devicePixelRatio, m *= s.devicePixelRatio), i.shadowColor = l.color, i.shadowBlur = l.blur * s.browserShadowBlurConstant * (g + m) * (d.scaleX + d.scaleY) / 4, i.shadowOffsetX = l.offsetX * g * d.scaleX, i.shadowOffsetY = l.offsetY * m * d.scaleY;
          }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _removeShadow: function(i) {
          this.shadow && (i.shadowColor = "", i.shadowBlur = i.shadowOffsetX = i.shadowOffsetY = 0);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
        _applyPatternGradientTransform: function(i, l) {
          if (!l || !l.toLive)
            return { offsetX: 0, offsetY: 0 };
          var u = l.gradientTransform || l.patternTransform, d = -this.width / 2 + l.offsetX || 0, g = -this.height / 2 + l.offsetY || 0;
          return l.gradientUnits === "percentage" ? i.transform(this.width, 0, 0, this.height, d, g) : i.transform(1, 0, 0, 1, d, g), u && i.transform(u[0], u[1], u[2], u[3], u[4], u[5]), { offsetX: d, offsetY: g };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderPaintInOrder: function(i) {
          this.paintFirst === "stroke" ? (this._renderStroke(i), this._renderFill(i)) : (this._renderFill(i), this._renderStroke(i));
        },
        /**
         * @private
         * function that actually render something on the context.
         * empty here to allow Obects to work on tests to benchmark fabric functionalites
         * not related to rendering
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function() {
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderFill: function(i) {
          this.fill && (i.save(), this._setFillStyles(i, this), this.fillRule === "evenodd" ? i.fill("evenodd") : i.fill(), i.restore());
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderStroke: function(i) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(i), i.save(), this.strokeUniform && this.group) {
              var l = this.getObjectScaling();
              i.scale(1 / l.scaleX, 1 / l.scaleY);
            } else this.strokeUniform && i.scale(1 / this.scaleX, 1 / this.scaleY);
            this._setLineDash(i, this.strokeDashArray), this._setStrokeStyles(i, this), i.stroke(), i.restore();
          }
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Gradient} filler a fabric gradient instance
         */
        _applyPatternForTransformedGradient: function(i, l) {
          var u = this._limitCacheSize(this._getCacheCanvasDimensions()), d = s.util.createCanvasElement(), g, m = this.canvas.getRetinaScaling(), v = u.x / this.scaleX / m, y = u.y / this.scaleY / m;
          d.width = v, d.height = y, g = d.getContext("2d"), g.beginPath(), g.moveTo(0, 0), g.lineTo(v, 0), g.lineTo(v, y), g.lineTo(0, y), g.closePath(), g.translate(v / 2, y / 2), g.scale(
            u.zoomX / this.scaleX / m,
            u.zoomY / this.scaleY / m
          ), this._applyPatternGradientTransform(g, l), g.fillStyle = l.toLive(i), g.fill(), i.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), i.scale(
            m * this.scaleX / u.zoomX,
            m * this.scaleY / u.zoomY
          ), i.strokeStyle = g.createPattern(d, "no-repeat");
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
        },
        /**
         * This function is an helper for svg import. it decompose the transformMatrix
         * and assign properties to object.
         * untransformed coordinates
         * @private
         * @chainable
         */
        _assignTransformMatrixProps: function() {
          if (this.transformMatrix) {
            var i = s.util.qrDecompose(this.transformMatrix);
            this.flipX = !1, this.flipY = !1, this.set("scaleX", i.scaleX), this.set("scaleY", i.scaleY), this.angle = i.angle, this.skewX = i.skewX, this.skewY = 0;
          }
        },
        /**
         * This function is an helper for svg import. it removes the transform matrix
         * and set to object properties that fabricjs can handle
         * @private
         * @param {Object} preserveAspectRatioOptions
         * @return {thisArg}
         */
        _removeTransformMatrix: function(i) {
          var l = this._findCenterFromElement();
          this.transformMatrix && (this._assignTransformMatrixProps(), l = s.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, i && (this.scaleX *= i.scaleX, this.scaleY *= i.scaleY, this.cropX = i.cropX, this.cropY = i.cropY, l.x += i.offsetLeft, l.y += i.offsetTop, this.width = i.width, this.height = i.height), this.setPositionByOrigin(l, "center", "center");
        },
        /**
         * Clones an instance, using a callback method will work for every object.
         * @param {Function} callback Callback is invoked with a clone as a first argument
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         */
        clone: function(i, l) {
          var u = this.toObject(l);
          this.constructor.fromObject ? this.constructor.fromObject(u, i) : s.Object._fromObject("Object", u, i);
        },
        /**
         * Creates an instance of fabric.Image out of an object
         * makes use of toCanvasElement.
         * Once this method was based on toDataUrl and loadImage, so it also had a quality
         * and format option. toCanvasElement is faster and produce no loss of quality.
         * If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
         * toCanvasElement and then toBlob from the obtained canvas is also a good option.
         * This method is sync now, but still support the callback because we did not want to break.
         * When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.
         * @param {Function} callback callback, invoked with an instance as a first argument
         * @param {Object} [options] for clone as image, passed to toDataURL
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {fabric.Object} thisArg
         */
        cloneAsImage: function(i, l) {
          var u = this.toCanvasElement(l);
          return i && i(new s.Image(u)), this;
        },
        /**
         * Converts an object into a HTMLCanvas element
         * @param {Object} options Options object
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
         */
        toCanvasElement: function(i) {
          i || (i = {});
          var l = s.util, u = l.saveObjectTransform(this), d = this.group, g = this.shadow, m = Math.abs, v = (i.multiplier || 1) * (i.enableRetinaScaling ? s.devicePixelRatio : 1);
          delete this.group, i.withoutTransform && l.resetObjectTransform(this), i.withoutShadow && (this.shadow = null);
          var y = s.util.createCanvasElement(), w = this.getBoundingRect(!0, !0), M = this.shadow, X, W = { x: 0, y: 0 }, V, N, H;
          M && (V = M.blur, M.nonScaling ? X = { scaleX: 1, scaleY: 1 } : X = this.getObjectScaling(), W.x = 2 * Math.round(m(M.offsetX) + V) * m(X.scaleX), W.y = 2 * Math.round(m(M.offsetY) + V) * m(X.scaleY)), N = w.width + W.x, H = w.height + W.y, y.width = Math.ceil(N), y.height = Math.ceil(H);
          var z = new s.StaticCanvas(y, {
            enableRetinaScaling: !1,
            renderOnAddRemove: !1,
            skipOffscreen: !1
          });
          i.format === "jpeg" && (z.backgroundColor = "#fff"), this.setPositionByOrigin(new s.Point(z.width / 2, z.height / 2), "center", "center");
          var q = this.canvas;
          z.add(this);
          var J = z.toCanvasElement(v || 1, i);
          return this.shadow = g, this.set("canvas", q), d && (this.group = d), this.set(u).setCoords(), z._objects = [], z.dispose(), z = null, J;
        },
        /**
         * Converts an object into a data-url-like string
         * @param {Object} options Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         */
        toDataURL: function(i) {
          return i || (i = {}), s.util.toDataURL(this.toCanvasElement(i), i.format || "png", i.quality || 1);
        },
        /**
         * Returns true if specified type is identical to the type of an instance
         * @param {String} type Type to check against
         * @return {Boolean}
         */
        isType: function(i) {
          return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === i;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance (is 1 unless subclassed)
         */
        complexity: function() {
          return 1;
        },
        /**
         * Returns a JSON representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} JSON
         */
        toJSON: function(i) {
          return this.toObject(i);
        },
        /**
         * Sets "angle" of an instance with centered rotation
         * @param {Number} angle Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        rotate: function(i) {
          var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
          return l && this._setOriginToCenter(), this.set("angle", i), l && this._resetOrigin(), this;
        },
        /**
         * Centers object horizontally on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerH: function() {
          return this.canvas && this.canvas.centerObjectH(this), this;
        },
        /**
         * Centers object horizontally on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterH: function() {
          return this.canvas && this.canvas.viewportCenterObjectH(this), this;
        },
        /**
         * Centers object vertically on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        centerV: function() {
          return this.canvas && this.canvas.centerObjectV(this), this;
        },
        /**
         * Centers object vertically on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenterV: function() {
          return this.canvas && this.canvas.viewportCenterObjectV(this), this;
        },
        /**
         * Centers object vertically and horizontally on canvas to which is was added last
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        center: function() {
          return this.canvas && this.canvas.centerObject(this), this;
        },
        /**
         * Centers object on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        viewportCenter: function() {
          return this.canvas && this.canvas.viewportCenterObject(this), this;
        },
        /**
         * Returns coordinates of a pointer relative to an object
         * @param {Event} e Event to operate upon
         * @param {Object} [pointer] Pointer to operate upon (instead of event)
         * @return {Object} Coordinates of a pointer (x, y)
         */
        getLocalPointer: function(i, l) {
          l = l || this.canvas.getPointer(i);
          var u = new s.Point(l.x, l.y), d = this._getLeftTopCoords();
          return this.angle && (u = s.util.rotatePoint(
            u,
            d,
            t(-this.angle)
          )), {
            x: u.x - d.x,
            y: u.y - d.y
          };
        },
        /**
         * Sets canvas globalCompositeOperation for specific object
         * custom composition operation for the particular object can be specified using globalCompositeOperation property
         * @param {CanvasRenderingContext2D} ctx Rendering canvas context
         */
        _setupCompositeOperation: function(i) {
          this.globalCompositeOperation && (i.globalCompositeOperation = this.globalCompositeOperation);
        },
        /**
         * cancel instance's running animations
         * override if necessary to dispose artifacts such as `clipPath`
         */
        dispose: function() {
          s.runningAnimations && s.runningAnimations.cancelByTarget(this);
        }
      }
    ), s.util.createAccessors && s.util.createAccessors(s.Object), h(s.Object.prototype, s.Observable), s.Object.NUM_FRACTION_DIGITS = 2, s.Object.ENLIVEN_PROPS = ["clipPath"], s.Object._fromObject = function(i, l, u, d) {
      var g = s[i];
      l = o(l, !0), s.util.enlivenPatterns([l.fill, l.stroke], function(m) {
        typeof m[0] < "u" && (l.fill = m[0]), typeof m[1] < "u" && (l.stroke = m[1]), s.util.enlivenObjectEnlivables(l, l, function() {
          var v = d ? new g(l[d], l) : new g(l);
          u && u(v);
        });
      });
    }, s.Object.__uid = 0);
  }(Z), function() {
    var c = f.util.degreesToRadians, s = {
      left: -0.5,
      center: 0,
      right: 0.5
    }, h = {
      top: -0.5,
      center: 0,
      bottom: 0.5
    };
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Translates the coordinates from a set of origin to another (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToGivenOrigin: function(o, e, r, t, n) {
          var a = o.x, i = o.y, l, u, d;
          return typeof e == "string" ? e = s[e] : e -= 0.5, typeof t == "string" ? t = s[t] : t -= 0.5, l = t - e, typeof r == "string" ? r = h[r] : r -= 0.5, typeof n == "string" ? n = h[n] : n -= 0.5, u = n - r, (l || u) && (d = this._getTransformedDimensions(), a = o.x + l * d.x, i = o.y + u * d.y), new f.Point(a, i);
        },
        /**
         * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToCenterPoint: function(o, e, r) {
          var t = this.translateToGivenOrigin(o, e, r, "center", "center");
          return this.angle ? f.util.rotatePoint(t, o, c(this.angle)) : t;
        },
        /**
         * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
         * @param {fabric.Point} center The point which corresponds to center of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        translateToOriginPoint: function(o, e, r) {
          var t = this.translateToGivenOrigin(o, "center", "center", e, r);
          return this.angle ? f.util.rotatePoint(t, o, c(this.angle)) : t;
        },
        /**
         * Returns the real center coordinates of the object
         * @return {fabric.Point}
         */
        getCenterPoint: function() {
          var o = new f.Point(this.left, this.top);
          return this.translateToCenterPoint(o, this.originX, this.originY);
        },
        /**
         * Returns the coordinates of the object based on center coordinates
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @return {fabric.Point}
         */
        // getOriginPoint: function(center) {
        //   return this.translateToOriginPoint(center, this.originX, this.originY);
        // },
        /**
         * Returns the coordinates of the object as if it has a different origin
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        getPointByOrigin: function(o, e) {
          var r = this.getCenterPoint();
          return this.translateToOriginPoint(r, o, e);
        },
        /**
         * Returns the point in local coordinates
         * @param {fabric.Point} point The point relative to the global coordinate system
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
        toLocalPoint: function(o, e, r) {
          var t = this.getCenterPoint(), n, a;
          return typeof e < "u" && typeof r < "u" ? n = this.translateToGivenOrigin(t, "center", "center", e, r) : n = new f.Point(this.left, this.top), a = new f.Point(o.x, o.y), this.angle && (a = f.util.rotatePoint(a, t, -c(this.angle))), a.subtractEquals(n);
        },
        /**
         * Returns the point in global coordinates
         * @param {fabric.Point} The point relative to the local coordinate system
         * @return {fabric.Point}
         */
        // toGlobalPoint: function(point) {
        //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
        // },
        /**
         * Sets the position of the object taking into consideration the object's origin
         * @param {fabric.Point} pos The new position of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {void}
         */
        setPositionByOrigin: function(o, e, r) {
          var t = this.translateToCenterPoint(o, e, r), n = this.translateToOriginPoint(t, this.originX, this.originY);
          this.set("left", n.x), this.set("top", n.y);
        },
        /**
         * @param {String} to One of 'left', 'center', 'right'
         */
        adjustPosition: function(o) {
          var e = c(this.angle), r = this.getScaledWidth(), t = f.util.cos(e) * r, n = f.util.sin(e) * r, a, i;
          typeof this.originX == "string" ? a = s[this.originX] : a = this.originX - 0.5, typeof o == "string" ? i = s[o] : i = o - 0.5, this.left += t * (i - a), this.top += n * (i - a), this.setCoords(), this.originX = o;
        },
        /**
         * Sets the origin/position of the object to it's center point
         * @private
         * @return {void}
         */
        _setOriginToCenter: function() {
          this._originalOriginX = this.originX, this._originalOriginY = this.originY;
          var o = this.getCenterPoint();
          this.originX = "center", this.originY = "center", this.left = o.x, this.top = o.y;
        },
        /**
         * Resets the origin/position of the object to it's original origin
         * @private
         * @return {void}
         */
        _resetOrigin: function() {
          var o = this.translateToOriginPoint(
            this.getCenterPoint(),
            this._originalOriginX,
            this._originalOriginY
          );
          this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = o.x, this.top = o.y, this._originalOriginX = null, this._originalOriginY = null;
        },
        /**
         * @private
         */
        _getLeftTopCoords: function() {
          return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
        }
      }
    );
  }(), function() {
    function c(r) {
      return [
        new f.Point(r.tl.x, r.tl.y),
        new f.Point(r.tr.x, r.tr.y),
        new f.Point(r.br.x, r.br.y),
        new f.Point(r.bl.x, r.bl.y)
      ];
    }
    var s = f.util, h = s.degreesToRadians, o = s.multiplyTransformMatrices, e = s.transformPoint;
    s.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Describe object's corner position in canvas element coordinates.
         * properties are depending on control keys and padding the main controls.
         * each property is an object with x, y and corner.
         * The `corner` property contains in a similar manner the 4 points of the
         * interactive area of the corner.
         * The coordinates depends from the controls positionHandler and are used
         * to draw and locate controls
         * @memberOf fabric.Object.prototype
         */
        oCoords: null,
        /**
         * Describe object's corner position in canvas object absolute coordinates
         * properties are tl,tr,bl,br and describe the four main corner.
         * each property is an object with x, y, instance of Fabric.Point.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, top, left.
         * Those coordinates are useful to understand where an object is. They get updated
         * with oCoords but they do not need to be updated when zoom or panning change.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcACoords();
         * @memberOf fabric.Object.prototype
         */
        aCoords: null,
        /**
         * Describe object's corner position in canvas element coordinates.
         * includes padding. Used of object detection.
         * set and refreshed with setCoords.
         * @memberOf fabric.Object.prototype
         */
        lineCoords: null,
        /**
         * storage for object transform matrix
         */
        ownMatrixCache: null,
        /**
         * storage for object full transform matrix
         */
        matrixCache: null,
        /**
         * custom controls interface
         * controls are added by default_controls.js
         */
        controls: {},
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * @param {Boolean} absolute will return aCoords if true or lineCoords
         * @return {Object} {tl, tr, br, bl} points
         */
        _getCoords: function(r, t) {
          return t ? r ? this.calcACoords() : this.calcLineCoords() : ((!this.aCoords || !this.lineCoords) && this.setCoords(!0), r ? this.aCoords : this.lineCoords);
        },
        /**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * The coords are returned in an array.
         * @return {Array} [tl, tr, br, bl] of points
         */
        getCoords: function(r, t) {
          return c(this._getCoords(r, t));
        },
        /**
         * Checks if object intersects with an area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with an area formed by 2 points
         */
        intersectsWithRect: function(r, t, n, a) {
          var i = this.getCoords(n, a), l = f.Intersection.intersectPolygonRectangle(
            i,
            r,
            t
          );
          return l.status === "Intersection";
        },
        /**
         * Checks if object intersects with another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with another object
         */
        intersectsWithObject: function(r, t, n) {
          var a = f.Intersection.intersectPolygonPolygon(
            this.getCoords(t, n),
            r.getCoords(t, n)
          );
          return a.status === "Intersection" || r.isContainedWithinObject(this, t, n) || this.isContainedWithinObject(r, t, n);
        },
        /**
         * Checks if object is fully contained within area of another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area of another object
         */
        isContainedWithinObject: function(r, t, n) {
          for (var a = this.getCoords(t, n), i = t ? r.aCoords : r.lineCoords, l = 0, u = r._getImageLines(i); l < 4; l++)
            if (!r.containsPoint(a[l], u))
              return !1;
          return !0;
        },
        /**
         * Checks if object is fully contained within area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area formed by 2 points
         */
        isContainedWithinRect: function(r, t, n, a) {
          var i = this.getBoundingRect(n, a);
          return i.left >= r.x && i.left + i.width <= t.x && i.top >= r.y && i.top + i.height <= t.y;
        },
        /**
         * Checks if point is inside the object
         * @param {fabric.Point} point Point to check against
         * @param {Object} [lines] object returned from @method _getImageLines
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if point is inside the object
         */
        containsPoint: function(r, l, n, a) {
          var i = this._getCoords(n, a), l = l || this._getImageLines(i), u = this._findCrossPoints(r, l);
          return u !== 0 && u % 2 === 1;
        },
        /**
         * Checks if object is contained within the canvas with current viewportTransform
         * the check is done stopping at first point that appears on screen
         * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
         * @return {Boolean} true if object is fully or partially contained within canvas
         */
        isOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var t = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br, a = this.getCoords(!0, r);
          return a.some(function(i) {
            return i.x <= n.x && i.x >= t.x && i.y <= n.y && i.y >= t.y;
          }) || this.intersectsWithRect(t, n, !0, r) ? !0 : this._containsCenterOfCanvas(t, n, r);
        },
        /**
         * Checks if the object contains the midpoint between canvas extremities
         * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
         * @private
         * @param {Fabric.Point} pointTL Top Left point
         * @param {Fabric.Point} pointBR Top Right point
         * @param {Boolean} calculate use coordinates of current position instead of .oCoords
         * @return {Boolean} true if the object contains the point
         */
        _containsCenterOfCanvas: function(r, t, n) {
          var a = { x: (r.x + t.x) / 2, y: (r.y + t.y) / 2 };
          return !!this.containsPoint(a, null, !0, n);
        },
        /**
         * Checks if object is partially contained within the canvas with current viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is partially contained within canvas
         */
        isPartiallyOnScreen: function(r) {
          if (!this.canvas)
            return !1;
          var t = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br;
          if (this.intersectsWithRect(t, n, !0, r))
            return !0;
          var a = this.getCoords(!0, r).every(function(i) {
            return (i.x >= n.x || i.x <= t.x) && (i.y >= n.y || i.y <= t.y);
          });
          return a && this._containsCenterOfCanvas(t, n, r);
        },
        /**
         * Method that returns an object with the object edges in it, given the coordinates of the corners
         * @private
         * @param {Object} oCoords Coordinates of the object corners
         */
        _getImageLines: function(r) {
          var t = {
            topline: {
              o: r.tl,
              d: r.tr
            },
            rightline: {
              o: r.tr,
              d: r.br
            },
            bottomline: {
              o: r.br,
              d: r.bl
            },
            leftline: {
              o: r.bl,
              d: r.tl
            }
          };
          return t;
        },
        /**
         * Helper method to determine how many cross points are between the 4 object edges
         * and the horizontal line determined by a point on canvas
         * @private
         * @param {fabric.Point} point Point to check
         * @param {Object} lines Coordinates of the object being evaluated
         */
        // remove yi, not used but left code here just in case.
        _findCrossPoints: function(r, t) {
          var n, a, i, l, u, d = 0, g;
          for (var m in t)
            if (g = t[m], !(g.o.y < r.y && g.d.y < r.y) && !(g.o.y >= r.y && g.d.y >= r.y) && (g.o.x === g.d.x && g.o.x >= r.x ? u = g.o.x : (n = 0, a = (g.d.y - g.o.y) / (g.d.x - g.o.x), i = r.y - n * r.x, l = g.o.y - a * g.o.x, u = -(i - l) / (n - a)), u >= r.x && (d += 1), d === 2))
              break;
          return d;
        },
        /**
         * Returns coordinates of object's bounding rectangle (left, top, width, height)
         * the box is intended as aligned to axis of canvas.
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
         * @return {Object} Object with left, top, width, height properties
         */
        getBoundingRect: function(r, t) {
          var n = this.getCoords(r, t);
          return s.makeBoundingBoxFromPoints(n);
        },
        /**
         * Returns width of an object's bounding box counting transformations
         * before 2.0 it was named getWidth();
         * @return {Number} width value
         */
        getScaledWidth: function() {
          return this._getTransformedDimensions().x;
        },
        /**
         * Returns height of an object bounding box counting transformations
         * before 2.0 it was named getHeight();
         * @return {Number} height value
         */
        getScaledHeight: function() {
          return this._getTransformedDimensions().y;
        },
        /**
         * Makes sure the scale is valid and modifies it if necessary
         * @private
         * @param {Number} value
         * @return {Number}
         */
        _constrainScale: function(r) {
          return Math.abs(r) < this.minScaleLimit ? r < 0 ? -this.minScaleLimit : this.minScaleLimit : r === 0 ? 1e-4 : r;
        },
        /**
         * Scales an object (equally by x and y)
         * @param {Number} value Scale factor
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scale: function(r) {
          return this._set("scaleX", r), this._set("scaleY", r), this.setCoords();
        },
        /**
         * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New width value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToWidth: function(r, t) {
          var n = this.getBoundingRect(t).width / this.getScaledWidth();
          return this.scale(r / this.width / n);
        },
        /**
         * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New height value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
        scaleToHeight: function(r, t) {
          var n = this.getBoundingRect(t).height / this.getScaledHeight();
          return this.scale(r / this.height / n);
        },
        calcLineCoords: function() {
          var r = this.getViewportTransform(), t = this.padding, n = h(this.angle), a = s.cos(n), i = s.sin(n), l = a * t, u = i * t, d = l + u, g = l - u, m = this.calcACoords(), v = {
            tl: e(m.tl, r),
            tr: e(m.tr, r),
            bl: e(m.bl, r),
            br: e(m.br, r)
          };
          return t && (v.tl.x -= g, v.tl.y -= d, v.tr.x += d, v.tr.y -= g, v.bl.x -= d, v.bl.y += g, v.br.x += g, v.br.y += d), v;
        },
        calcOCoords: function() {
          var r = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), n = this.getViewportTransform(), a = o(n, t), i = o(a, r), i = o(i, [1 / n[0], 0, 0, 1 / n[3], 0, 0]), l = this._calculateCurrentDimensions(), u = {};
          return this.forEachControl(function(d, g, m) {
            u[g] = d.positionHandler(l, i, m);
          }), u;
        },
        calcACoords: function() {
          var r = this._calcRotateMatrix(), t = this._calcTranslateMatrix(), n = o(t, r), a = this._getTransformedDimensions(), i = a.x / 2, l = a.y / 2;
          return {
            // corners
            tl: e({ x: -i, y: -l }, n),
            tr: e({ x: i, y: -l }, n),
            bl: e({ x: -i, y: l }, n),
            br: e({ x: i, y: l }, n)
          };
        },
        /**
         * Sets corner and controls position coordinates based on current angle, width and height, left and top.
         * oCoords are used to find the corners
         * aCoords are used to quickly find an object on the canvas
         * lineCoords are used to quickly find object during pointer events.
         * See {@link https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords} and {@link http://fabricjs.com/fabric-gotchas}
         *
         * @param {Boolean} [skipCorners] skip calculation of oCoords.
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setCoords: function(r) {
          return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), r ? this : (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords(), this);
        },
        /**
         * calculate rotation matrix of an object
         * @return {Array} rotation matrix for the object
         */
        _calcRotateMatrix: function() {
          return s.calcRotateMatrix(this);
        },
        /**
         * calculate the translation matrix for an object transform
         * @return {Array} rotation matrix for the object
         */
        _calcTranslateMatrix: function() {
          var r = this.getCenterPoint();
          return [1, 0, 0, 1, r.x, r.y];
        },
        transformMatrixKey: function(r) {
          var t = "_", n = "";
          return !r && this.group && (n = this.group.transformMatrixKey(r) + t), n + this.top + t + this.left + t + this.scaleX + t + this.scaleY + t + this.skewX + t + this.skewY + t + this.angle + t + this.originX + t + this.originY + t + this.width + t + this.height + t + this.strokeWidth + this.flipX + this.flipY;
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties.
         * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
         * There are some situation in which this is useful to avoid the fake rotation.
         * @return {Array} transform matrix for the object
         */
        calcTransformMatrix: function(r) {
          var t = this.calcOwnMatrix();
          if (r || !this.group)
            return t;
          var n = this.transformMatrixKey(r), a = this.matrixCache || (this.matrixCache = {});
          return a.key === n ? a.value : (this.group && (t = o(this.group.calcTransformMatrix(!1), t)), a.key = n, a.value = t, t);
        },
        /**
         * calculate transform matrix that represents the current transformations from the
         * object's properties, this matrix does not include the group transformation
         * @return {Array} transform matrix for the object
         */
        calcOwnMatrix: function() {
          var r = this.transformMatrixKey(!0), t = this.ownMatrixCache || (this.ownMatrixCache = {});
          if (t.key === r)
            return t.value;
          var n = this._calcTranslateMatrix(), a = {
            angle: this.angle,
            translateX: n[4],
            translateY: n[5],
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            flipX: this.flipX,
            flipY: this.flipY
          };
          return t.key = r, t.value = s.composeMatrix(a), t.value;
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getNonTransformedDimensions: function() {
          var r = this.strokeWidth, t = this.width + r, n = this.height + r;
          return { x: t, y: n };
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param {Number} skewX, a value to override current skewX
         * @param {Number} skewY, a value to override current skewY
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
        _getTransformedDimensions: function(r, t) {
          typeof r > "u" && (r = this.skewX), typeof t > "u" && (t = this.skewY);
          var n, a, i, l = r === 0 && t === 0;
          if (this.strokeUniform ? (a = this.width, i = this.height) : (n = this._getNonTransformedDimensions(), a = n.x, i = n.y), l)
            return this._finalizeDimensions(a * this.scaleX, i * this.scaleY);
          var u = s.sizeAfterTransform(a, i, {
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: r,
            skewY: t
          });
          return this._finalizeDimensions(u.x, u.y);
        },
        /*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param Number width width of the bbox
         * @param Number height height of the bbox
         * @private
         * @return {Object} .x finalized width dimension
         * @return {Object} .y finalized height dimension
         */
        _finalizeDimensions: function(r, t) {
          return this.strokeUniform ? { x: r + this.strokeWidth, y: t + this.strokeWidth } : { x: r, y: t };
        },
        /*
         * Calculate object dimensions for controls box, including padding and canvas zoom.
         * and active selection
         * private
         */
        _calculateCurrentDimensions: function() {
          var r = this.getViewportTransform(), t = this._getTransformedDimensions(), n = e(t, r, !0);
          return n.scalarAdd(2 * this.padding);
        }
      }
    );
  }(), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Moves an object to the bottom of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendToBack: function() {
        return this.group ? f.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
      },
      /**
       * Moves an object to the top of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringToFront: function() {
        return this.group ? f.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
      },
      /**
       * Moves an object down in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      sendBackwards: function(c) {
        return this.group ? f.StaticCanvas.prototype.sendBackwards.call(this.group, this, c) : this.canvas && this.canvas.sendBackwards(this, c), this;
      },
      /**
       * Moves an object up in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      bringForward: function(c) {
        return this.group ? f.StaticCanvas.prototype.bringForward.call(this.group, this, c) : this.canvas && this.canvas.bringForward(this, c), this;
      },
      /**
       * Moves an object to specified level in stack of drawn objects
       * @param {Number} index New position of object
       * @return {fabric.Object} thisArg
       * @chainable
       */
      moveTo: function(c) {
        return this.group && this.group.type !== "activeSelection" ? f.StaticCanvas.prototype.moveTo.call(this.group, this, c) : this.canvas && this.canvas.moveTo(this, c), this;
      }
    }
  ), function() {
    function c(h, o) {
      if (o) {
        if (o.toLive)
          return h + ": url(#SVGID_" + o.id + "); ";
        var e = new f.Color(o), r = h + ": " + e.toRgb() + "; ", t = e.getAlpha();
        return t !== 1 && (r += h + "-opacity: " + t.toString() + "; "), r;
      } else return h + ": none; ";
    }
    var s = f.util.toFixed;
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var o = this.fillRule ? this.fillRule : "nonzero", e = this.strokeWidth ? this.strokeWidth : "0", r = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", t = this.strokeDashOffset ? this.strokeDashOffset : "0", n = this.strokeLineCap ? this.strokeLineCap : "butt", a = this.strokeLineJoin ? this.strokeLineJoin : "miter", i = this.strokeMiterLimit ? this.strokeMiterLimit : "4", l = typeof this.opacity < "u" ? this.opacity : "1", u = this.visible ? "" : " visibility: hidden;", d = h ? "" : this.getSvgFilter(), g = c("fill", this.fill), m = c("stroke", this.stroke);
          return [
            m,
            "stroke-width: ",
            e,
            "; ",
            "stroke-dasharray: ",
            r,
            "; ",
            "stroke-linecap: ",
            n,
            "; ",
            "stroke-dashoffset: ",
            t,
            "; ",
            "stroke-linejoin: ",
            a,
            "; ",
            "stroke-miterlimit: ",
            i,
            "; ",
            g,
            "fill-rule: ",
            o,
            "; ",
            "opacity: ",
            l,
            ";",
            d,
            u
          ].join("");
        },
        /**
         * Returns styles-string for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
         * @return {String}
         */
        getSvgSpanStyles: function(h, o) {
          var e = "; ", t = h.fontFamily ? "font-family: " + (h.fontFamily.indexOf("'") === -1 && h.fontFamily.indexOf('"') === -1 ? "'" + h.fontFamily + "'" : h.fontFamily) + e : "", r = h.strokeWidth ? "stroke-width: " + h.strokeWidth + e : "", t = t, n = h.fontSize ? "font-size: " + h.fontSize + "px" + e : "", a = h.fontStyle ? "font-style: " + h.fontStyle + e : "", i = h.fontWeight ? "font-weight: " + h.fontWeight + e : "", l = h.fill ? c("fill", h.fill) : "", u = h.stroke ? c("stroke", h.stroke) : "", d = this.getSvgTextDecoration(h), g = h.deltaY ? "baseline-shift: " + -h.deltaY + "; " : "";
          return d && (d = "text-decoration: " + d + e), [
            u,
            r,
            t,
            n,
            a,
            i,
            d,
            l,
            g,
            o ? "white-space: pre; " : ""
          ].join("");
        },
        /**
         * Returns text-decoration property for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @return {String}
         */
        getSvgTextDecoration: function(h) {
          return ["overline", "underline", "line-through"].filter(function(o) {
            return h[o.replace("-", "")];
          }).join(" ");
        },
        /**
         * Returns filter for svg shadow
         * @return {String}
         */
        getSvgFilter: function() {
          return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
        },
        /**
         * Returns id attribute for svg output
         * @return {String}
         */
        getSvgCommons: function() {
          return [
            this.id ? 'id="' + this.id + '" ' : "",
            this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""
          ].join("");
        },
        /**
         * Returns transform-string for svg-export
         * @param {Boolean} use the full transform or the single object one.
         * @return {String}
         */
        getSvgTransform: function(h, o) {
          var e = h ? this.calcTransformMatrix() : this.calcOwnMatrix(), r = 'transform="' + f.util.matrixToSVG(e);
          return r + (o || "") + '" ';
        },
        _setSVGBg: function(h) {
          if (this.backgroundColor) {
            var o = f.Object.NUM_FRACTION_DIGITS;
            h.push(
              "		<rect ",
              this._getFillAttributes(this.backgroundColor),
              ' x="',
              s(-this.width / 2, o),
              '" y="',
              s(-this.height / 2, o),
              '" width="',
              s(this.width, o),
              '" height="',
              s(this.height, o),
              `"></rect>
`
            );
          }
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(h) {
          return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(h), { reviver: h });
        },
        /**
         * @private
         */
        _createBaseClipPathSVGMarkup: function(h, o) {
          o = o || {};
          var e = o.reviver, r = o.additionalTransform || "", t = [
            this.getSvgTransform(!0, r),
            this.getSvgCommons()
          ].join(""), n = h.indexOf("COMMON_PARTS");
          return h[n] = t, e ? e(h.join("")) : h.join("");
        },
        /**
         * @private
         */
        _createBaseSVGMarkup: function(h, o) {
          o = o || {};
          var e = o.noStyle, r = o.reviver, t = e ? "" : 'style="' + this.getSvgStyles() + '" ', n = o.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", a = this.clipPath, i = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", l = a && a.absolutePositioned, u = this.stroke, d = this.fill, g = this.shadow, m, v = [], y, w = h.indexOf("COMMON_PARTS"), M = o.additionalTransform;
          return a && (a.clipPathId = "CLIPPATH_" + f.Object.__uid++, y = '<clipPath id="' + a.clipPathId + `" >
` + a.toClipPathSVG(r) + `</clipPath>
`), l && v.push(
            "<g ",
            n,
            this.getSvgCommons(),
            ` >
`
          ), v.push(
            "<g ",
            this.getSvgTransform(!1),
            l ? "" : n + this.getSvgCommons(),
            ` >
`
          ), m = [
            t,
            i,
            e ? "" : this.addPaintOrder(),
            " ",
            M ? 'transform="' + M + '" ' : ""
          ].join(""), h[w] = m, d && d.toLive && v.push(d.toSVG(this)), u && u.toLive && v.push(u.toSVG(this)), g && v.push(g.toSVG(this)), a && v.push(y), v.push(h.join("")), v.push(`</g>
`), l && v.push(`</g>
`), r ? r(v.join("")) : v.join("");
        },
        addPaintOrder: function() {
          return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
        }
      }
    );
  }(), function() {
    var c = f.util.object.extend, s = "stateProperties";
    function h(e, r, t) {
      var n = {}, a = !0;
      t.forEach(function(i) {
        n[i] = e[i];
      }), c(e[r], n, a);
    }
    function o(e, r, t) {
      if (e === r)
        return !0;
      if (Array.isArray(e)) {
        if (!Array.isArray(r) || e.length !== r.length)
          return !1;
        for (var n = 0, a = e.length; n < a; n++)
          if (!o(e[n], r[n]))
            return !1;
        return !0;
      } else if (e && typeof e == "object") {
        var i = Object.keys(e), l;
        if (!r || typeof r != "object" || !t && i.length !== Object.keys(r).length)
          return !1;
        for (var n = 0, a = i.length; n < a; n++)
          if (l = i[n], !(l === "canvas" || l === "group") && !o(e[l], r[l]))
            return !1;
        return !0;
      }
    }
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Returns true if object state (one of its state properties) was changed
         * @param {String} [propertySet] optional name for the set of property we want to save
         * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
         */
        hasStateChanged: function(e) {
          e = e || s;
          var r = "_" + e;
          return Object.keys(this[r]).length < this[e].length ? !0 : !o(this[r], this, !0);
        },
        /**
         * Saves state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        saveState: function(e) {
          var r = e && e.propertySet || s, t = "_" + r;
          return this[t] ? (h(this, t, this[r]), e && e.stateProperties && h(this, t, e.stateProperties), this) : this.setupState(e);
        },
        /**
         * Setups state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
        setupState: function(e) {
          e = e || {};
          var r = e.propertySet || s;
          return e.propertySet = r, this["_" + r] = {}, this.saveState(e), this;
        }
      }
    );
  }(), function() {
    var c = f.util.degreesToRadians;
    f.util.object.extend(
      f.Object.prototype,
      /** @lends fabric.Object.prototype */
      {
        /**
         * Determines which corner has been clicked
         * @private
         * @param {Object} pointer The pointer indicating the mouse position
         * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
         */
        _findTargetCorner: function(s, h) {
          if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
            return !1;
          var o = s.x, e = s.y, r, t, n = Object.keys(this.oCoords), a = n.length - 1, i;
          for (this.__corner = 0; a >= 0; a--)
            if (i = n[a], !!this.isControlVisible(i) && (t = this._getImageLines(h ? this.oCoords[i].touchCorner : this.oCoords[i].corner), r = this._findCrossPoints({ x: o, y: e }, t), r !== 0 && r % 2 === 1))
              return this.__corner = i, i;
          return !1;
        },
        /**
         * Calls a function for each control. The function gets called,
         * with the control, the object that is calling the iterator and the control's key
         * @param {Function} fn function to iterate over the controls over
         */
        forEachControl: function(s) {
          for (var h in this.controls)
            s(this.controls[h], h, this);
        },
        /**
         * Sets the coordinates of the draggable boxes in the corners of
         * the image used to scale/rotate it.
         * note: if we would switch to ROUND corner area, all of this would disappear.
         * everything would resolve to a single point and a pythagorean theorem for the distance
         * @private
         */
        _setCornerCoords: function() {
          var s = this.oCoords;
          for (var h in s) {
            var o = this.controls[h];
            s[h].corner = o.calcCornerCoords(
              this.angle,
              this.cornerSize,
              s[h].x,
              s[h].y,
              !1
            ), s[h].touchCorner = o.calcCornerCoords(
              this.angle,
              this.touchCornerSize,
              s[h].x,
              s[h].y,
              !0
            );
          }
        },
        /**
         * Draws a colored layer behind the object, inside its selection borders.
         * Requires public options: padding, selectionBackgroundColor
         * this function is called when the context is transformed
         * has checks to be skipped when the object is on a staticCanvas
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawSelectionBackground: function(s) {
          if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
            return this;
          s.save();
          var h = this.getCenterPoint(), o = this._calculateCurrentDimensions(), e = this.canvas.viewportTransform;
          return s.translate(h.x, h.y), s.scale(1 / e[0], 1 / e[3]), s.rotate(c(this.angle)), s.fillStyle = this.selectionBackgroundColor, s.fillRect(-o.x / 2, -o.y / 2, o.x, o.y), s.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBorders: function(s, h) {
          h = h || {};
          var o = this._calculateCurrentDimensions(), e = this.borderScaleFactor, r = o.x + e, t = o.y + e, n = typeof h.hasControls < "u" ? h.hasControls : this.hasControls, a = !1;
          return s.save(), s.strokeStyle = h.borderColor || this.borderColor, this._setLineDash(s, h.borderDashArray || this.borderDashArray), s.strokeRect(
            -r / 2,
            -t / 2,
            r,
            t
          ), n && (s.beginPath(), this.forEachControl(function(i, l, u) {
            i.withConnection && i.getVisibility(u, l) && (a = !0, s.moveTo(i.x * r, i.y * t), s.lineTo(
              i.x * r + i.offsetX,
              i.y * t + i.offsetY
            ));
          }), a && s.stroke()), s.restore(), this;
        },
        /**
         * Draws borders of an object's bounding box when it is inside a group.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {object} options object representing current object parameters
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawBordersInGroup: function(s, h, o) {
          o = o || {};
          var e = f.util.sizeAfterTransform(this.width, this.height, h), r = this.strokeWidth, t = this.strokeUniform, n = this.borderScaleFactor, a = e.x + r * (t ? this.canvas.getZoom() : h.scaleX) + n, i = e.y + r * (t ? this.canvas.getZoom() : h.scaleY) + n;
          return s.save(), this._setLineDash(s, o.borderDashArray || this.borderDashArray), s.strokeStyle = o.borderColor || this.borderColor, s.strokeRect(
            -a / 2,
            -i / 2,
            a,
            i
          ), s.restore(), this;
        },
        /**
         * Draws corners of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: cornerSize, padding
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
        drawControls: function(s, h) {
          h = h || {}, s.save();
          var o = this.canvas.getRetinaScaling(), e, r;
          return s.setTransform(o, 0, 0, o, 0, 0), s.strokeStyle = s.fillStyle = h.cornerColor || this.cornerColor, this.transparentCorners || (s.strokeStyle = h.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(s, h.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (e = this.group.calcTransformMatrix()), this.forEachControl(function(t, n, a) {
            r = a.oCoords[n], t.getVisibility(a, n) && (e && (r = f.util.transformPoint(r, e)), t.render(s, r.x, r.y, h, a));
          }), s.restore(), this;
        },
        /**
         * Returns true if the specified control is visible, false otherwise.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @returns {Boolean} true if the specified control is visible, false otherwise
         */
        isControlVisible: function(s) {
          return this.controls[s] && this.controls[s].getVisibility(this, s);
        },
        /**
         * Sets the visibility of the specified control.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @param {Boolean} visible true to set the specified control visible, false otherwise
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlVisible: function(s, h) {
          return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[s] = h, this;
        },
        /**
         * Sets the visibility state of object controls.
         * @param {Object} [options] Options object
         * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
         * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
         * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
         * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
         * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
         * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
         * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
         * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
         * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setControlsVisibility: function(s) {
          s || (s = {});
          for (var h in s)
            this.setControlVisible(h, s[h]);
          return this;
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to deselect this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onDeselect: function() {
        },
        /**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to select this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
        onSelect: function() {
        }
      }
    );
  }(), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Animation duration (in ms) for fx* methods
       * @type Number
       * @default
       */
      FX_DURATION: 500,
      /**
       * Centers object horizontally with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectH: function(c, s) {
        s = s || {};
        var h = function() {
        }, o = s.onComplete || h, e = s.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.left,
          endValue: this.getCenterPoint().x,
          duration: this.FX_DURATION,
          onChange: function(t) {
            c.set("left", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            c.setCoords(), o();
          }
        });
      },
      /**
       * Centers object vertically with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxCenterObjectV: function(c, s) {
        s = s || {};
        var h = function() {
        }, o = s.onComplete || h, e = s.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.top,
          endValue: this.getCenterPoint().y,
          duration: this.FX_DURATION,
          onChange: function(t) {
            c.set("top", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            c.setCoords(), o();
          }
        });
      },
      /**
       * Same as `fabric.Canvas#remove` but animated
       * @param {fabric.Object} object Object to remove
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
      fxRemove: function(c, s) {
        s = s || {};
        var h = function() {
        }, o = s.onComplete || h, e = s.onChange || h, r = this;
        return f.util.animate({
          target: this,
          startValue: c.opacity,
          endValue: 0,
          duration: this.FX_DURATION,
          onChange: function(t) {
            c.set("opacity", t), r.requestRenderAll(), e();
          },
          onComplete: function() {
            r.remove(c), o();
          }
        });
      }
    }
  ), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * Animates object's properties
       * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
       * @param {Number|Object} value Value to animate property to (if string was given first) or options object
       * @return {fabric.Object} thisArg
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
       * @return {fabric.AnimationContext | fabric.AnimationContext[]} animation context (or an array if passed multiple properties)
       *
       * As object — multiple properties
       *
       * object.animate({ left: ..., top: ... });
       * object.animate({ left: ..., top: ... }, { duration: ... });
       *
       * As string — one property
       *
       * object.animate('left', ...);
       * object.animate('left', { duration: ... });
       *
       */
      animate: function() {
        if (arguments[0] && typeof arguments[0] == "object") {
          var c = [], s, h, o = [];
          for (s in arguments[0])
            c.push(s);
          for (var e = 0, r = c.length; e < r; e++)
            s = c[e], h = e !== r - 1, o.push(this._animate(s, arguments[0][s], arguments[1], h));
          return o;
        } else
          return this._animate.apply(this, arguments);
      },
      /**
       * @private
       * @param {String} property Property to animate
       * @param {String} to Value to animate to
       * @param {Object} [options] Options object
       * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
       */
      _animate: function(c, s, h, o) {
        var e = this, r;
        s = s.toString(), h ? h = f.util.object.clone(h) : h = {}, ~c.indexOf(".") && (r = c.split("."));
        var t = e.colorProperties.indexOf(c) > -1 || r && e.colorProperties.indexOf(r[1]) > -1, n = r ? this.get(r[0])[r[1]] : this.get(c);
        "from" in h || (h.from = n), t || (~s.indexOf("=") ? s = n + parseFloat(s.replace("=", "")) : s = parseFloat(s));
        var a = {
          target: this,
          startValue: h.from,
          endValue: s,
          byValue: h.by,
          easing: h.easing,
          duration: h.duration,
          abort: h.abort && function(i, l, u) {
            return h.abort.call(e, i, l, u);
          },
          onChange: function(i, l, u) {
            r ? e[r[0]][r[1]] = i : e.set(c, i), !o && h.onChange && h.onChange(i, l, u);
          },
          onComplete: function(i, l, u) {
            o || (e.setCoords(), h.onComplete && h.onComplete(i, l, u));
          }
        };
        return t ? f.util.animateColor(a.startValue, a.endValue, a.duration, a) : f.util.animate(a);
      }
    }
  ), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.object.clone, e = { x1: 1, x2: 1, y1: 1, y2: 1 };
    if (s.Line) {
      s.warn("fabric.Line is already defined");
      return;
    }
    s.Line = s.util.createClass(
      s.Object,
      /** @lends fabric.Line.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "line",
        /**
         * x value or first line edge
         * @type Number
         * @default
         */
        x1: 0,
        /**
         * y value or first line edge
         * @type Number
         * @default
         */
        y1: 0,
        /**
         * x value or second line edge
         * @type Number
         * @default
         */
        x2: 0,
        /**
         * y value or second line edge
         * @type Number
         * @default
         */
        y2: 0,
        cacheProperties: s.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
        /**
         * Constructor
         * @param {Array} [points] Array of points
         * @param {Object} [options] Options object
         * @return {fabric.Line} thisArg
         */
        initialize: function(t, n) {
          t || (t = [0, 0, 0, 0]), this.callSuper("initialize", n), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(n);
        },
        /**
         * @private
         * @param {Object} [options] Options
         */
        _setWidthHeight: function(t) {
          t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY();
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         */
        _set: function(t, n) {
          return this.callSuper("_set", t, n), typeof e[t] < "u" && this._setWidthHeight(), this;
        },
        /**
         * @private
         * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
         */
        _getLeftToOriginX: r(
          {
            // property names
            origin: "originX",
            axis1: "x1",
            axis2: "x2",
            dimension: "width"
          },
          {
            // possible values of origin
            nearest: "left",
            center: "center",
            farthest: "right"
          }
        ),
        /**
         * @private
         * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
         */
        _getTopToOriginY: r(
          {
            // property names
            origin: "originY",
            axis1: "y1",
            axis2: "y2",
            dimension: "height"
          },
          {
            // possible values of origin
            nearest: "top",
            center: "center",
            farthest: "bottom"
          }
        ),
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(t) {
          t.beginPath();
          var n = this.calcLinePoints();
          t.moveTo(n.x1, n.y1), t.lineTo(n.x2, n.y2), t.lineWidth = this.strokeWidth;
          var a = t.strokeStyle;
          t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = a;
        },
        /**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
        _findCenterFromElement: function() {
          return {
            x: (this.x1 + this.x2) / 2,
            y: (this.y1 + this.y2) / 2
          };
        },
        /**
         * Returns object representation of an instance
         * @method toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(t) {
          return h(this.callSuper("toObject", t), this.calcLinePoints());
        },
        /*
         * Calculate object dimensions from its properties
         * @private
         */
        _getNonTransformedDimensions: function() {
          var t = this.callSuper("_getNonTransformedDimensions");
          return this.strokeLineCap === "butt" && (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)), t;
        },
        /**
         * Recalculates line points given width and height
         * @private
         */
        calcLinePoints: function() {
          var t = this.x1 <= this.x2 ? -1 : 1, n = this.y1 <= this.y2 ? -1 : 1, a = t * this.width * 0.5, i = n * this.height * 0.5, l = t * this.width * -0.5, u = n * this.height * -0.5;
          return {
            x1: a,
            x2: l,
            y1: i,
            y2: u
          };
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var t = this.calcLinePoints();
          return [
            "<line ",
            "COMMON_PARTS",
            'x1="',
            t.x1,
            '" y1="',
            t.y1,
            '" x2="',
            t.x2,
            '" y2="',
            t.y2,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), s.Line.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), s.Line.fromElement = function(t, n, a) {
      a = a || {};
      var i = s.parseAttributes(t, s.Line.ATTRIBUTE_NAMES), l = [
        i.x1 || 0,
        i.y1 || 0,
        i.x2 || 0,
        i.y2 || 0
      ];
      n(new s.Line(l, h(i, a)));
    }, s.Line.fromObject = function(t, n) {
      function a(l) {
        delete l.points, n && n(l);
      }
      var i = o(t, !0);
      i.points = [t.x1, t.y1, t.x2, t.y2], s.Object._fromObject("Line", i, a, "points");
    };
    function r(t, n) {
      var a = t.origin, i = t.axis1, l = t.axis2, u = t.dimension, d = n.nearest, g = n.center, m = n.farthest;
      return function() {
        switch (this.get(a)) {
          case d:
            return Math.min(this.get(i), this.get(l));
          case g:
            return Math.min(this.get(i), this.get(l)) + 0.5 * this.get(u);
          case m:
            return Math.max(this.get(i), this.get(l));
        }
      };
    }
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.degreesToRadians;
    if (s.Circle) {
      s.warn("fabric.Circle is already defined.");
      return;
    }
    s.Circle = s.util.createClass(
      s.Object,
      /** @lends fabric.Circle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "circle",
        /**
         * Radius of this circle
         * @type Number
         * @default
         */
        radius: 0,
        /**
         * degrees of start of the circle.
         * probably will change to degrees in next major version
         * @type Number 0 - 359
         * @default 0
         */
        startAngle: 0,
        /**
         * End angle of the circle
         * probably will change to degrees in next major version
         * @type Number 1 - 360
         * @default 360
         */
        endAngle: 360,
        cacheProperties: s.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Circle} thisArg
         */
        _set: function(e, r) {
          return this.callSuper("_set", e, r), e === "radius" && this.setRadius(r), this;
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(e) {
          return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(e));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var e, r = 0, t = 0, n = (this.endAngle - this.startAngle) % 360;
          if (n === 0)
            e = [
              "<circle ",
              "COMMON_PARTS",
              'cx="' + r + '" cy="' + t + '" ',
              'r="',
              this.radius,
              `" />
`
            ];
          else {
            var a = h(this.startAngle), i = h(this.endAngle), l = this.radius, u = s.util.cos(a) * l, d = s.util.sin(a) * l, g = s.util.cos(i) * l, m = s.util.sin(i) * l, v = n > 180 ? "1" : "0";
            e = [
              '<path d="M ' + u + " " + d,
              " A " + l + " " + l,
              " 0 ",
              +v + " 1",
              " " + g + " " + m,
              '" ',
              "COMMON_PARTS",
              ` />
`
            ];
          }
          return e;
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(e) {
          e.beginPath(), e.arc(
            0,
            0,
            this.radius,
            h(this.startAngle),
            h(this.endAngle),
            !1
          ), this._renderPaintInOrder(e);
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusX: function() {
          return this.get("radius") * this.get("scaleX");
        },
        /**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRadiusY: function() {
          return this.get("radius") * this.get("scaleY");
        },
        /**
         * Sets radius of an object (and updates width accordingly)
         * @return {fabric.Circle} thisArg
         */
        setRadius: function(e) {
          return this.radius = e, this.set("width", e * 2).set("height", e * 2);
        }
      }
    ), s.Circle.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), s.Circle.fromElement = function(e, r) {
      var t = s.parseAttributes(e, s.Circle.ATTRIBUTE_NAMES);
      if (!o(t))
        throw new Error("value of `r` attribute is required and can not be negative");
      t.left = (t.left || 0) - t.radius, t.top = (t.top || 0) - t.radius, r(new s.Circle(t));
    };
    function o(e) {
      return "radius" in e && e.radius >= 0;
    }
    s.Circle.fromObject = function(e, r) {
      s.Object._fromObject("Circle", e, r);
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {});
    if (s.Triangle) {
      s.warn("fabric.Triangle is already defined");
      return;
    }
    s.Triangle = s.util.createClass(
      s.Object,
      /** @lends fabric.Triangle.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "triangle",
        /**
         * Width is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        width: 100,
        /**
         * Height is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
        height: 100,
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          var o = this.width / 2, e = this.height / 2;
          h.beginPath(), h.moveTo(-o, e), h.lineTo(0, -e), h.lineTo(o, e), h.closePath(), this._renderPaintInOrder(h);
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = this.width / 2, o = this.height / 2, e = [
            -h + " " + o,
            "0 " + -o,
            h + " " + o
          ].join(",");
          return [
            "<polygon ",
            "COMMON_PARTS",
            'points="',
            e,
            '" />'
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), s.Triangle.fromObject = function(h, o) {
      return s.Object._fromObject("Triangle", h, o);
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = Math.PI * 2;
    if (s.Ellipse) {
      s.warn("fabric.Ellipse is already defined.");
      return;
    }
    s.Ellipse = s.util.createClass(
      s.Object,
      /** @lends fabric.Ellipse.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "ellipse",
        /**
         * Horizontal radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {fabric.Ellipse} thisArg
         */
        initialize: function(o) {
          this.callSuper("initialize", o), this.set("rx", o && o.rx || 0), this.set("ry", o && o.ry || 0);
        },
        /**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Ellipse} thisArg
         */
        _set: function(o, e) {
          switch (this.callSuper("_set", o, e), o) {
            case "rx":
              this.rx = e, this.set("width", e * 2);
              break;
            case "ry":
              this.ry = e, this.set("height", e * 2);
              break;
          }
          return this;
        },
        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRx: function() {
          return this.get("rx") * this.get("scaleX");
        },
        /**
         * Returns Vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
        getRy: function() {
          return this.get("ry") * this.get("scaleY");
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(o) {
          return this.callSuper("toObject", ["rx", "ry"].concat(o));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          return [
            "<ellipse ",
            "COMMON_PARTS",
            'cx="0" cy="0" ',
            'rx="',
            this.rx,
            '" ry="',
            this.ry,
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
        _render: function(o) {
          o.beginPath(), o.save(), o.transform(1, 0, 0, this.ry / this.rx, 0, 0), o.arc(
            0,
            0,
            this.rx,
            0,
            h,
            !1
          ), o.restore(), this._renderPaintInOrder(o);
        }
      }
    ), s.Ellipse.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), s.Ellipse.fromElement = function(o, e) {
      var r = s.parseAttributes(o, s.Ellipse.ATTRIBUTE_NAMES);
      r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, e(new s.Ellipse(r));
    }, s.Ellipse.fromObject = function(o, e) {
      s.Object._fromObject("Ellipse", o, e);
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend;
    if (s.Rect) {
      s.warn("fabric.Rect is already defined");
      return;
    }
    s.Rect = s.util.createClass(
      s.Object,
      /** @lends fabric.Rect.prototype */
      {
        /**
         * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: s.Object.prototype.stateProperties.concat("rx", "ry"),
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "rect",
        /**
         * Horizontal border radius
         * @type Number
         * @default
         */
        rx: 0,
        /**
         * Vertical border radius
         * @type Number
         * @default
         */
        ry: 0,
        cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"),
        /**
         * Constructor
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(o) {
          this.callSuper("initialize", o), this._initRxRy();
        },
        /**
         * Initializes rx/ry attributes
         * @private
         */
        _initRxRy: function() {
          this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(o) {
          var e = this.rx ? Math.min(this.rx, this.width / 2) : 0, r = this.ry ? Math.min(this.ry, this.height / 2) : 0, t = this.width, n = this.height, a = -this.width / 2, i = -this.height / 2, l = e !== 0 || r !== 0, u = 1 - 0.5522847498;
          o.beginPath(), o.moveTo(a + e, i), o.lineTo(a + t - e, i), l && o.bezierCurveTo(a + t - u * e, i, a + t, i + u * r, a + t, i + r), o.lineTo(a + t, i + n - r), l && o.bezierCurveTo(a + t, i + n - u * r, a + t - u * e, i + n, a + t - e, i + n), o.lineTo(a + e, i + n), l && o.bezierCurveTo(a + u * e, i + n, a, i + n - u * r, a, i + n - r), o.lineTo(a, i + r), l && o.bezierCurveTo(a, i + u * r, a + u * e, i, a + e, i), o.closePath(), this._renderPaintInOrder(o);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(o) {
          return this.callSuper("toObject", ["rx", "ry"].concat(o));
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var o = -this.width / 2, e = -this.height / 2;
          return [
            "<rect ",
            "COMMON_PARTS",
            'x="',
            o,
            '" y="',
            e,
            '" rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" width="',
            this.width,
            '" height="',
            this.height,
            `" />
`
          ];
        }
        /* _TO_SVG_END_ */
      }
    ), s.Rect.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), s.Rect.fromElement = function(o, e, r) {
      if (!o)
        return e(null);
      r = r || {};
      var t = s.parseAttributes(o, s.Rect.ATTRIBUTE_NAMES);
      t.left = t.left || 0, t.top = t.top || 0, t.height = t.height || 0, t.width = t.width || 0;
      var n = new s.Rect(h(r ? s.util.object.clone(r) : {}, t));
      n.visible = n.visible && n.width > 0 && n.height > 0, e(n);
    }, s.Rect.fromObject = function(o, e) {
      return s.Object._fromObject("Rect", o, e);
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.util.array.min, e = s.util.array.max, r = s.util.toFixed, t = s.util.projectStrokeOnPoints;
    if (s.Polyline) {
      s.warn("fabric.Polyline is already defined");
      return;
    }
    s.Polyline = s.util.createClass(
      s.Object,
      /** @lends fabric.Polyline.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polyline",
        /**
         * Points array
         * @type Array
         * @default
         */
        points: null,
        /**
         * WARNING: Feature in progress
         * Calculate the exact bounding box taking in account strokeWidth on acute angles
         * this will be turned to true by default on fabric 6.0
         * maybe will be left in as an optimization since calculations may be slow
         * @deprecated
         * @type Boolean
         * @default false
         */
        exactBoundingBox: !1,
        cacheProperties: s.Object.prototype.cacheProperties.concat("points"),
        /**
         * Constructor
         * @param {Array} points Array of points (where each point is an object with x and y)
         * @param {Object} [options] Options object
         * @return {fabric.Polyline} thisArg
         * @example
         * var poly = new fabric.Polyline([
         *     { x: 10, y: 10 },
         *     { x: 50, y: 30 },
         *     { x: 40, y: 70 },
         *     { x: 60, y: 50 },
         *     { x: 100, y: 150 },
         *     { x: 40, y: 100 }
         *   ], {
         *   stroke: 'red',
         *   left: 100,
         *   top: 100
         * });
         */
        initialize: function(n, a) {
          a = a || {}, this.points = n || [], this.callSuper("initialize", a), this._setPositionDimensions(a);
        },
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return t(this.points, this, !0);
        },
        _setPositionDimensions: function(n) {
          var a = this._calcDimensions(n), i, l = this.exactBoundingBox ? this.strokeWidth : 0;
          this.width = a.width - l, this.height = a.height - l, n.fromSVG || (i = this.translateToGivenOrigin(
            {
              // this looks bad, but is one way to keep it optional for now.
              x: a.left - this.strokeWidth / 2 + l / 2,
              y: a.top - this.strokeWidth / 2 + l / 2
            },
            "left",
            "top",
            this.originX,
            this.originY
          )), typeof n.left > "u" && (this.left = n.fromSVG ? a.left : i.x), typeof n.top > "u" && (this.top = n.fromSVG ? a.top : i.y), this.pathOffset = {
            x: a.left + this.width / 2 + l / 2,
            y: a.top + this.height / 2 + l / 2
          };
        },
        /**
         * Calculate the polygon min and max point from points array,
         * returning an object with left, top, width, height to measure the
         * polygon size
         * @return {Object} object.left X coordinate of the polygon leftmost point
         * @return {Object} object.top Y coordinate of the polygon topmost point
         * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
         * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
         * @private
         */
        _calcDimensions: function() {
          var n = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, a = o(n, "x") || 0, i = o(n, "y") || 0, l = e(n, "x") || 0, u = e(n, "y") || 0, d = l - a, g = u - i;
          return {
            left: a,
            top: i,
            width: d,
            height: g
          };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(n) {
          return h(this.callSuper("toObject", n), {
            points: this.points.concat()
          });
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          for (var n = [], a = this.pathOffset.x, i = this.pathOffset.y, l = s.Object.NUM_FRACTION_DIGITS, u = 0, d = this.points.length; u < d; u++)
            n.push(
              r(this.points[u].x - a, l),
              ",",
              r(this.points[u].y - i, l),
              " "
            );
          return [
            "<" + this.type + " ",
            "COMMON_PARTS",
            'points="',
            n.join(""),
            `" />
`
          ];
        },
        /* _TO_SVG_END_ */
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        commonRender: function(n) {
          var a, i = this.points.length, l = this.pathOffset.x, u = this.pathOffset.y;
          if (!i || isNaN(this.points[i - 1].y))
            return !1;
          n.beginPath(), n.moveTo(this.points[0].x - l, this.points[0].y - u);
          for (var d = 0; d < i; d++)
            a = this.points[d], n.lineTo(a.x - l, a.y - u);
          return !0;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(n) {
          this.commonRender(n) && this._renderPaintInOrder(n);
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.get("points").length;
        }
      }
    ), s.Polyline.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polyline.fromElementGenerator = function(n) {
      return function(a, i, l) {
        if (!a)
          return i(null);
        l || (l = {});
        var u = s.parsePointsAttribute(a.getAttribute("points")), d = s.parseAttributes(a, s[n].ATTRIBUTE_NAMES);
        d.fromSVG = !0, i(new s[n](u, h(d, l)));
      };
    }, s.Polyline.fromElement = s.Polyline.fromElementGenerator("Polyline"), s.Polyline.fromObject = function(n, a) {
      return s.Object._fromObject("Polyline", n, a, "points");
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.projectStrokeOnPoints;
    if (s.Polygon) {
      s.warn("fabric.Polygon is already defined");
      return;
    }
    s.Polygon = s.util.createClass(
      s.Polyline,
      /** @lends fabric.Polygon.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "polygon",
        /**
         * @private
         */
        _projectStrokeOnPoints: function() {
          return h(this.points, this);
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(o) {
          this.commonRender(o) && (o.closePath(), this._renderPaintInOrder(o));
        }
      }
    ), s.Polygon.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polygon.fromElement = s.Polyline.fromElementGenerator("Polygon"), s.Polygon.fromObject = function(o, e) {
      s.Object._fromObject("Polygon", o, e, "points");
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.array.min, o = s.util.array.max, e = s.util.object.extend, r = s.util.object.clone, t = s.util.toFixed;
    if (s.Path) {
      s.warn("fabric.Path is already defined");
      return;
    }
    s.Path = s.util.createClass(
      s.Object,
      /** @lends fabric.Path.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "path",
        /**
         * Array of path points
         * @type Array
         * @default
         */
        path: null,
        cacheProperties: s.Object.prototype.cacheProperties.concat("path", "fillRule"),
        stateProperties: s.Object.prototype.stateProperties.concat("path"),
        /**
         * Constructor
         * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
         * @param {Object} [options] Options object
         * @return {fabric.Path} thisArg
         */
        initialize: function(n, a) {
          a = r(a || {}), delete a.path, this.callSuper("initialize", a), this._setPath(n || [], a);
        },
        /**
        * @private
        * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
        * @param {Object} [options] Options object
        */
        _setPath: function(n, a) {
          this.path = s.util.makePathSimpler(
            Array.isArray(n) ? n : s.util.parsePath(n)
          ), s.Polyline.prototype._setPositionDimensions.call(this, a || {});
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _renderPathCommands: function(n) {
          var a, i = 0, l = 0, u = 0, d = 0, g = 0, m = 0, v = -this.pathOffset.x, y = -this.pathOffset.y;
          n.beginPath();
          for (var w = 0, M = this.path.length; w < M; ++w)
            switch (a = this.path[w], a[0]) {
              case "L":
                u = a[1], d = a[2], n.lineTo(u + v, d + y);
                break;
              case "M":
                u = a[1], d = a[2], i = u, l = d, n.moveTo(u + v, d + y);
                break;
              case "C":
                u = a[5], d = a[6], g = a[3], m = a[4], n.bezierCurveTo(
                  a[1] + v,
                  a[2] + y,
                  g + v,
                  m + y,
                  u + v,
                  d + y
                );
                break;
              case "Q":
                n.quadraticCurveTo(
                  a[1] + v,
                  a[2] + y,
                  a[3] + v,
                  a[4] + y
                ), u = a[3], d = a[4], g = a[1], m = a[2];
                break;
              case "z":
              case "Z":
                u = i, d = l, n.closePath();
                break;
            }
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
        _render: function(n) {
          this._renderPathCommands(n), this._renderPaintInOrder(n);
        },
        /**
         * Returns string representation of an instance
         * @return {String} string representation of an instance
         */
        toString: function() {
          return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(n) {
          return e(this.callSuper("toObject", n), {
            path: this.path.map(function(a) {
              return a.slice();
            })
          });
        },
        /**
         * Returns dataless object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(n) {
          var a = this.toObject(["sourcePath"].concat(n));
          return a.sourcePath && delete a.path, a;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var n = s.util.joinPath(this.path);
          return [
            "<path ",
            "COMMON_PARTS",
            'd="',
            n,
            '" stroke-linecap="round" ',
            `/>
`
          ];
        },
        _getOffsetTransform: function() {
          var n = s.Object.NUM_FRACTION_DIGITS;
          return " translate(" + t(-this.pathOffset.x, n) + ", " + t(-this.pathOffset.y, n) + ")";
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(n) {
          var a = this._getOffsetTransform();
          return "	" + this._createBaseClipPathSVGMarkup(
            this._toSVG(),
            { reviver: n, additionalTransform: a }
          );
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(n) {
          var a = this._getOffsetTransform();
          return this._createBaseSVGMarkup(this._toSVG(), { reviver: n, additionalTransform: a });
        },
        /* _TO_SVG_END_ */
        /**
         * Returns number representation of an instance complexity
         * @return {Number} complexity of this instance
         */
        complexity: function() {
          return this.path.length;
        },
        /**
         * @private
         */
        _calcDimensions: function() {
          for (var n = [], a = [], i, l = 0, u = 0, d = 0, g = 0, m, v = 0, y = this.path.length; v < y; ++v) {
            switch (i = this.path[v], i[0]) {
              case "L":
                d = i[1], g = i[2], m = [];
                break;
              case "M":
                d = i[1], g = i[2], l = d, u = g, m = [];
                break;
              case "C":
                m = s.util.getBoundsOfCurve(
                  d,
                  g,
                  i[1],
                  i[2],
                  i[3],
                  i[4],
                  i[5],
                  i[6]
                ), d = i[5], g = i[6];
                break;
              case "Q":
                m = s.util.getBoundsOfCurve(
                  d,
                  g,
                  i[1],
                  i[2],
                  i[1],
                  i[2],
                  i[3],
                  i[4]
                ), d = i[3], g = i[4];
                break;
              case "z":
              case "Z":
                d = l, g = u;
                break;
            }
            m.forEach(function(H) {
              n.push(H.x), a.push(H.y);
            }), n.push(d), a.push(g);
          }
          var w = h(n) || 0, M = h(a) || 0, X = o(n) || 0, W = o(a) || 0, V = X - w, N = W - M;
          return {
            left: w,
            top: M,
            width: V,
            height: N
          };
        }
      }
    ), s.Path.fromObject = function(n, a) {
      if (typeof n.sourcePath == "string") {
        var i = n.sourcePath;
        s.loadSVGFromURL(i, function(l) {
          var u = l[0];
          u.setOptions(n), n.clipPath ? s.util.enlivenObjects([n.clipPath], function(d) {
            u.clipPath = d[0], a && a(u);
          }) : a && a(u);
        });
      } else
        s.Object._fromObject("Path", n, a, "path");
    }, s.Path.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(["d"]), s.Path.fromElement = function(n, a, i) {
      var l = s.parseAttributes(n, s.Path.ATTRIBUTE_NAMES);
      l.fromSVG = !0, a(new s.Path(l.d, e(l, i)));
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.array.min, o = s.util.array.max;
    s.Group || (s.Group = s.util.createClass(
      s.Object,
      s.Collection,
      /** @lends fabric.Group.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "group",
        /**
         * Width of stroke
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
         * @type Boolean
         * @default
         */
        subTargetCheck: !1,
        /**
         * Groups are container, do not render anything on theyr own, ence no cache properties
         * @type Array
         * @default
         */
        cacheProperties: [],
        /**
         * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
         * available setting this boolean to true.
         * @type Boolean
         * @since 2.0.0
         * @default
         */
        useSetOnGroup: !1,
        /**
         * Constructor
         * @param {Object} objects Group objects
         * @param {Object} [options] Options object
         * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
         * @return {Object} thisArg
         */
        initialize: function(e, r, t) {
          r = r || {}, this._objects = [], t && this.callSuper("initialize", r), this._objects = e || [];
          for (var n = this._objects.length; n--; )
            this._objects[n].group = this;
          if (t)
            this._updateObjectsACoords();
          else {
            var a = r && r.centerPoint;
            r.originX !== void 0 && (this.originX = r.originX), r.originY !== void 0 && (this.originY = r.originY), a || this._calcBounds(), this._updateObjectsCoords(a), delete r.centerPoint, this.callSuper("initialize", r);
          }
          this.setCoords();
        },
        /**
         * @private
         */
        _updateObjectsACoords: function() {
          for (var e = !0, r = this._objects.length; r--; )
            this._objects[r].setCoords(e);
        },
        /**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
        _updateObjectsCoords: function(r) {
          for (var r = r || this.getCenterPoint(), t = this._objects.length; t--; )
            this._updateObjectCoords(this._objects[t], r);
        },
        /**
         * @private
         * @param {Object} object
         * @param {fabric.Point} center, current center of group.
         */
        _updateObjectCoords: function(e, r) {
          var t = e.left, n = e.top, a = !0;
          e.set({
            left: t - r.x,
            top: n - r.y
          }), e.group = this, e.setCoords(a);
        },
        /**
         * Returns string represenation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.Group: (" + this.complexity() + ")>";
        },
        /**
         * Adds an object to a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        addWithUpdate: function(e) {
          var r = !!this.group;
          return this._restoreObjectsState(), s.util.resetObjectTransform(this), e && (r && s.util.removeTransformFromObject(e, this.group.calcTransformMatrix()), this._objects.push(e), e.group = this, e._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, r ? this.group.addWithUpdate() : this.setCoords(), this;
        },
        /**
         * Removes an object from a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
        removeWithUpdate: function(e) {
          return this._restoreObjectsState(), s.util.resetObjectTransform(this), this.remove(e), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
        },
        /**
         * @private
         */
        _onObjectAdded: function(e) {
          this.dirty = !0, e.group = this, e._set("canvas", this.canvas);
        },
        /**
         * @private
         */
        _onObjectRemoved: function(e) {
          this.dirty = !0, delete e.group;
        },
        /**
         * @private
         */
        _set: function(e, r) {
          var t = this._objects.length;
          if (this.useSetOnGroup)
            for (; t--; )
              this._objects[t].setOnGroup(e, r);
          if (e === "canvas")
            for (; t--; )
              this._objects[t]._set(e, r);
          s.Object.prototype._set.call(this, e, r);
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toObject: function(e) {
          var r = this.includeDefaultValues, t = this._objects.filter(function(a) {
            return !a.excludeFromExport;
          }).map(function(a) {
            var i = a.includeDefaultValues;
            a.includeDefaultValues = r;
            var l = a.toObject(e);
            return a.includeDefaultValues = i, l;
          }), n = s.Object.prototype.toObject.call(this, e);
          return n.objects = t, n;
        },
        /**
         * Returns object representation of an instance, in dataless mode.
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
        toDatalessObject: function(e) {
          var r, t = this.sourcePath;
          if (t)
            r = t;
          else {
            var n = this.includeDefaultValues;
            r = this._objects.map(function(i) {
              var l = i.includeDefaultValues;
              i.includeDefaultValues = n;
              var u = i.toDatalessObject(e);
              return i.includeDefaultValues = l, u;
            });
          }
          var a = s.Object.prototype.toDatalessObject.call(this, e);
          return a.objects = r, a;
        },
        /**
         * Renders instance on a given context
         * @param {CanvasRenderingContext2D} ctx context to render instance on
         */
        render: function(e) {
          this._transformDone = !0, this.callSuper("render", e), this._transformDone = !1;
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group is already cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          var e = s.Object.prototype.shouldCache.call(this);
          if (e) {
            for (var r = 0, t = this._objects.length; r < t; r++)
              if (this._objects[r].willDrawShadow())
                return this.ownCaching = !1, !1;
          }
          return e;
        },
        /**
         * Check if this object or a child object will cast a shadow
         * @return {Boolean}
         */
        willDrawShadow: function() {
          if (s.Object.prototype.willDrawShadow.call(this))
            return !0;
          for (var e = 0, r = this._objects.length; e < r; e++)
            if (this._objects[e].willDrawShadow())
              return !0;
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return this.ownCaching || this.group && this.group.isOnACache();
        },
        /**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawObject: function(e) {
          for (var r = 0, t = this._objects.length; r < t; r++)
            this._objects[r].render(e);
          this._drawClipPath(e, this.clipPath);
        },
        /**
         * Check if cache is dirty
         */
        isCacheDirty: function(e) {
          if (this.callSuper("isCacheDirty", e))
            return !0;
          if (!this.statefullCache)
            return !1;
          for (var r = 0, t = this._objects.length; r < t; r++)
            if (this._objects[r].isCacheDirty(!0)) {
              if (this._cacheCanvas) {
                var n = this.cacheWidth / this.zoomX, a = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect(-n / 2, -a / 2, n, a);
              }
              return !0;
            }
          return !1;
        },
        /**
         * Restores original state of each of group objects (original state is that which was before group was created).
         * if the nested boolean is true, the original state will be restored just for the
         * first group and not for all the group chain
         * @private
         * @param {Boolean} nested tell the function to restore object state up to the parent group and not more
         * @return {fabric.Group} thisArg
         * @chainable
         */
        _restoreObjectsState: function() {
          var e = this.calcOwnMatrix();
          return this._objects.forEach(function(r) {
            s.util.addTransformToObject(r, e), delete r.group, r.setCoords();
          }), this;
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        destroy: function() {
          return this._objects.forEach(function(e) {
            e.set("dirty", !0);
          }), this._restoreObjectsState();
        },
        dispose: function() {
          this.callSuper("dispose"), this.forEachObject(function(e) {
            e.dispose && e.dispose();
          }), this._objects = [];
        },
        /**
         * make a group an active selection, remove the group from canvas
         * the group has to be on canvas for this to work.
         * @return {fabric.ActiveSelection} thisArg
         * @chainable
         */
        toActiveSelection: function() {
          if (this.canvas) {
            var e = this._objects, r = this.canvas;
            this._objects = [];
            var t = this.toObject();
            delete t.objects;
            var n = new s.ActiveSelection([]);
            return n.set(t), n.type = "activeSelection", r.remove(this), e.forEach(function(a) {
              a.group = n, a.dirty = !0, r.add(a);
            }), n.canvas = r, n._objects = e, r._activeObject = n, n.setCoords(), n;
          }
        },
        /**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
        ungroupOnCanvas: function() {
          return this._restoreObjectsState();
        },
        /**
         * Sets coordinates of all objects inside group
         * @return {fabric.Group} thisArg
         * @chainable
         */
        setObjectsCoords: function() {
          var e = !0;
          return this.forEachObject(function(r) {
            r.setCoords(e);
          }), this;
        },
        /**
         * @private
         */
        _calcBounds: function(e) {
          for (var r = [], t = [], n, a, i, l = ["tr", "br", "bl", "tl"], u = 0, d = this._objects.length, g, m = l.length; u < d; ++u) {
            for (n = this._objects[u], i = n.calcACoords(), g = 0; g < m; g++)
              a = l[g], r.push(i[a].x), t.push(i[a].y);
            n.aCoords = i;
          }
          this._getBounds(r, t, e);
        },
        /**
         * @private
         */
        _getBounds: function(e, r, t) {
          var n = new s.Point(h(e), h(r)), a = new s.Point(o(e), o(r)), i = n.y || 0, l = n.x || 0, u = a.x - n.x || 0, d = a.y - n.y || 0;
          this.width = u, this.height = d, t || this.setPositionByOrigin({ x: l, y: i }, "left", "top");
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function(e) {
          for (var r = ["<g ", "COMMON_PARTS", ` >
`], t = 0, n = this._objects.length; t < n; t++)
            r.push("		", this._objects[t].toSVG(e));
          return r.push(`</g>
`), r;
        },
        /**
         * Returns styles-string for svg-export, specific version for group
         * @return {String}
         */
        getSvgStyles: function() {
          var e = typeof this.opacity < "u" && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", r = this.visible ? "" : " visibility: hidden;";
          return [
            e,
            this.getSvgFilter(),
            r
          ].join("");
        },
        /**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toClipPathSVG: function(e) {
          for (var r = [], t = 0, n = this._objects.length; t < n; t++)
            r.push("	", this._objects[t].toClipPathSVG(e));
          return this._createBaseClipPathSVGMarkup(r, { reviver: e });
        }
        /* _TO_SVG_END_ */
      }
    ), s.Group.fromObject = function(e, r) {
      var t = e.objects, n = s.util.object.clone(e, !0);
      if (delete n.objects, typeof t == "string") {
        s.loadSVGFromURL(t, function(a) {
          var i = s.util.groupSVGElements(a, e, t), l = n.clipPath;
          delete n.clipPath, i.set(n), l ? s.util.enlivenObjects([l], function(u) {
            i.clipPath = u[0], r && r(i);
          }) : r && r(i);
        });
        return;
      }
      s.util.enlivenObjects(t, function(a) {
        s.util.enlivenObjectEnlivables(e, n, function() {
          r && r(new s.Group(a, n, !0));
        });
      });
    });
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {});
    s.ActiveSelection || (s.ActiveSelection = s.util.createClass(
      s.Group,
      /** @lends fabric.ActiveSelection.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "activeSelection",
        /**
         * Constructor
         * @param {Object} objects ActiveSelection objects
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
        initialize: function(h, o) {
          o = o || {}, this._objects = h || [];
          for (var e = this._objects.length; e--; )
            this._objects[e].group = this;
          o.originX && (this.originX = o.originX), o.originY && (this.originY = o.originY), this._calcBounds(), this._updateObjectsCoords(), s.Object.prototype.initialize.call(this, o), this.setCoords();
        },
        /**
         * Change te activeSelection to a normal group,
         * High level function that automatically adds it to canvas as
         * active object. no events fired.
         * @since 2.0.0
         * @return {fabric.Group}
         */
        toGroup: function() {
          var h = this._objects.concat();
          this._objects = [];
          var o = s.Object.prototype.toObject.call(this), e = new s.Group([]);
          if (delete o.type, e.set(o), h.forEach(function(t) {
            t.canvas.remove(t), t.group = e;
          }), e._objects = h, !this.canvas)
            return e;
          var r = this.canvas;
          return r.add(e), r._activeObject = e, e.setCoords(), e;
        },
        /**
         * If returns true, deselection is cancelled.
         * @since 2.0.0
         * @return {Boolean} [cancel]
         */
        onDeselect: function() {
          return this.destroy(), !1;
        },
        /**
         * Returns string representation of a group
         * @return {String}
         */
        toString: function() {
          return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * @return {Boolean}
         */
        shouldCache: function() {
          return !1;
        },
        /**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
        isOnACache: function() {
          return !1;
        },
        /**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         * @param {Object} [childrenOverride] properties to override the children overrides
         */
        _renderControls: function(h, o, e) {
          h.save(), h.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", h, o), e = e || {}, typeof e.hasControls > "u" && (e.hasControls = !1), e.forActiveSelection = !0;
          for (var r = 0, t = this._objects.length; r < t; r++)
            this._objects[r]._renderControls(h, e);
          h.restore();
        }
      }
    ), s.ActiveSelection.fromObject = function(h, o) {
      s.util.enlivenObjects(h.objects, function(e) {
        delete h.objects, o && o(new s.ActiveSelection(e, h, !0));
      });
    });
  }(Z), function(c) {
    var s = f.util.object.extend;
    if (c.fabric || (c.fabric = {}), c.fabric.Image) {
      f.warn("fabric.Image is already defined.");
      return;
    }
    f.Image = f.util.createClass(
      f.Object,
      /** @lends fabric.Image.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "image",
        /**
         * Width of a stroke.
         * For image quality a stroke multiple of 2 gives better results.
         * @type Number
         * @default
         */
        strokeWidth: 0,
        /**
         * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
         * This allows for relative urls as image src.
         * @since 2.7.0
         * @type Boolean
         * @default
         */
        srcFromAttribute: !1,
        /**
         * private
         * contains last value of scaleX to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleX: 1,
        /**
         * private
         * contains last value of scaleY to detect
         * if the Image got resized after the last Render
         * @type Number
         */
        _lastScaleY: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingX: 1,
        /**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
        _filterScalingY: 1,
        /**
         * minimum scale factor under which any resizeFilter is triggered to resize the image
         * 0 will disable the automatic resize. 1 will trigger automatically always.
         * number bigger than 1 are not implemented yet.
         * @type Number
         */
        minimumScaleTrigger: 0.5,
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: f.Object.prototype.stateProperties.concat("cropX", "cropY"),
        /**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
        cacheProperties: f.Object.prototype.cacheProperties.concat("cropX", "cropY"),
        /**
         * key used to retrieve the texture representing this image
         * @since 2.0.0
         * @type String
         * @default
         */
        cacheKey: "",
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropX: 0,
        /**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
        cropY: 0,
        /**
         * Indicates whether this canvas will use image smoothing when painting this image.
         * Also influence if the cacheCanvas for this image uses imageSmoothing
         * @since 4.0.0-beta.11
         * @type Boolean
         * @default
         */
        imageSmoothing: !0,
        /**
         * Constructor
         * Image can be initialized with any canvas drawable or a string.
         * The string should be a url and will be loaded as an image.
         * Canvas and Image element work out of the box, while videos require extra code to work.
         * Please check video element events for seeking.
         * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} element Image element
         * @param {Object} [options] Options object
         * @param {function} [callback] callback function to call after eventual filters applied.
         * @return {fabric.Image} thisArg
         */
        initialize: function(h, o) {
          o || (o = {}), this.filters = [], this.cacheKey = "texture" + f.Object.__uid++, this.callSuper("initialize", o), this._initElement(h, o);
        },
        /**
         * Returns image element which this instance if based on
         * @return {HTMLImageElement} Image element
         */
        getElement: function() {
          return this._element || {};
        },
        /**
         * Sets image element for this instance to a specified one.
         * If filters defined they are applied to new image.
         * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
         * @param {HTMLImageElement} element
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setElement: function(h, o) {
          return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = h, this._originalElement = h, this._initConfig(o), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
        },
        /**
         * Delete a single texture if in webgl mode
         */
        removeTexture: function(h) {
          var o = f.filterBackend;
          o && o.evictCachesForKey && o.evictCachesForKey(h);
        },
        /**
         * Delete textures, reference to elements and eventually JSDOM cleanup
         */
        dispose: function() {
          this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function(h) {
            f.util.cleanUpJsdomNode(this[h]), this[h] = void 0;
          }.bind(this));
        },
        /**
         * Get the crossOrigin value (of the corresponding image element)
         */
        getCrossOrigin: function() {
          return this._originalElement && (this._originalElement.crossOrigin || null);
        },
        /**
         * Returns original size of an image
         * @return {Object} Object with "width" and "height" properties
         */
        getOriginalSize: function() {
          var h = this.getElement();
          return {
            width: h.naturalWidth || h.width,
            height: h.naturalHeight || h.height
          };
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _stroke: function(h) {
          if (!(!this.stroke || this.strokeWidth === 0)) {
            var o = this.width / 2, e = this.height / 2;
            h.beginPath(), h.moveTo(-o, -e), h.lineTo(o, -e), h.lineTo(o, e), h.lineTo(-o, e), h.lineTo(-o, -e), h.closePath();
          }
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(h) {
          var o = [];
          this.filters.forEach(function(r) {
            r && o.push(r.toObject());
          });
          var e = s(
            this.callSuper(
              "toObject",
              ["cropX", "cropY"].concat(h)
            ),
            {
              src: this.getSrc(),
              crossOrigin: this.getCrossOrigin(),
              filters: o
            }
          );
          return this.resizeFilter && (e.resizeFilter = this.resizeFilter.toObject()), e;
        },
        /**
         * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
         * @return {Boolean}
         */
        hasCrop: function() {
          return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
        },
        /* _TO_SVG_START_ */
        /**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
        _toSVG: function() {
          var h = [], o = [], e, r = this._element, t = -this.width / 2, n = -this.height / 2, a = "", i = "";
          if (!r)
            return [];
          if (this.hasCrop()) {
            var l = f.Object.__uid++;
            h.push(
              '<clipPath id="imageCrop_' + l + `">
`,
              '	<rect x="' + t + '" y="' + n + '" width="' + this.width + '" height="' + this.height + `" />
`,
              `</clipPath>
`
            ), a = ' clip-path="url(#imageCrop_' + l + ')" ';
          }
          if (this.imageSmoothing || (i = '" image-rendering="optimizeSpeed'), o.push(
            "	<image ",
            "COMMON_PARTS",
            'xlink:href="',
            this.getSvgSrc(!0),
            '" x="',
            t - this.cropX,
            '" y="',
            n - this.cropY,
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="',
            r.width || r.naturalWidth,
            '" height="',
            r.height || r.height,
            i,
            '"',
            a,
            `></image>
`
          ), this.stroke || this.strokeDashArray) {
            var u = this.fill;
            this.fill = null, e = [
              "	<rect ",
              'x="',
              t,
              '" y="',
              n,
              '" width="',
              this.width,
              '" height="',
              this.height,
              '" style="',
              this.getSvgStyles(),
              `"/>
`
            ], this.fill = u;
          }
          return this.paintFirst !== "fill" ? h = h.concat(e, o) : h = h.concat(o, e), h;
        },
        /* _TO_SVG_END_ */
        /**
         * Returns source of an image
         * @param {Boolean} filtered indicates if the src is needed for svg
         * @return {String} Source of an image
         */
        getSrc: function(h) {
          var o = h ? this._element : this._originalElement;
          return o ? o.toDataURL ? o.toDataURL() : this.srcFromAttribute ? o.getAttribute("src") : o.src : this.src || "";
        },
        /**
         * Sets source of an image
         * @param {String} src Source string (URL)
         * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
         * @param {Object} [options] Options object
         * @param {String} [options.crossOrigin] crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @return {fabric.Image} thisArg
         * @chainable
         */
        setSrc: function(h, o, e) {
          return f.util.loadImage(h, function(r, t) {
            this.setElement(r, e), this._setWidthHeight(), o && o(this, t);
          }, this, e && e.crossOrigin), this;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of an instance
         */
        toString: function() {
          return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
        },
        applyResizeFilters: function() {
          var h = this.resizeFilter, o = this.minimumScaleTrigger, e = this.getTotalObjectScaling(), r = e.scaleX, t = e.scaleY, n = this._filteredEl || this._originalElement;
          if (this.group && this.set("dirty", !0), !h || r > o && t > o) {
            this._element = n, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, this._lastScaleY = t;
            return;
          }
          f.filterBackend || (f.filterBackend = f.initFilterBackend());
          var a = f.util.createCanvasElement(), i = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, l = n.width, u = n.height;
          a.width = l, a.height = u, this._element = a, this._lastScaleX = h.scaleX = r, this._lastScaleY = h.scaleY = t, f.filterBackend.applyFilters(
            [h],
            n,
            l,
            u,
            this._element,
            i
          ), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height;
        },
        /**
         * Applies filters assigned to this image (from "filters" array) or from filter param
         * @method applyFilters
         * @param {Array} filters to be applied
         * @param {Boolean} forResizing specify if the filter operation is a resize operation
         * @return {thisArg} return the fabric.Image object
         * @chainable
         */
        applyFilters: function(h) {
          if (h = h || this.filters || [], h = h.filter(function(n) {
            return n && !n.isNeutralState();
          }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), h.length === 0)
            return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
          var o = this._originalElement, e = o.naturalWidth || o.width, r = o.naturalHeight || o.height;
          if (this._element === this._originalElement) {
            var t = f.util.createCanvasElement();
            t.width = e, t.height = r, this._element = t, this._filteredEl = t;
          } else
            this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, e, r), this._lastScaleX = 1, this._lastScaleY = 1;
          return f.filterBackend || (f.filterBackend = f.initFilterBackend()), f.filterBackend.applyFilters(
            h,
            this._originalElement,
            e,
            r,
            this._element,
            this.cacheKey
          ), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(h) {
          f.util.setImageSmoothing(h, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(h), this._renderPaintInOrder(h);
        },
        /**
         * Paint the cached copy of the object on the target context.
         * it will set the imageSmoothing for the draw operation
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        drawCacheOnCanvas: function(h) {
          f.util.setImageSmoothing(h, this.imageSmoothing), f.Object.prototype.drawCacheOnCanvas.call(this, h);
        },
        /**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * This is the special image version where we would like to avoid caching where possible.
         * Essentially images do not benefit from caching. They may require caching, and in that
         * case we do it. Also caching an image usually ends in a loss of details.
         * A full performance audit should be done.
         * @return {Boolean}
         */
        shouldCache: function() {
          return this.needsItsOwnCache();
        },
        _renderFill: function(h) {
          var o = this._element;
          if (o) {
            var e = this._filterScalingX, r = this._filterScalingY, t = this.width, n = this.height, a = Math.min, i = Math.max, l = i(this.cropX, 0), u = i(this.cropY, 0), d = o.naturalWidth || o.width, g = o.naturalHeight || o.height, m = l * e, v = u * r, y = a(t * e, d - m), w = a(n * r, g - v), M = -t / 2, X = -n / 2, W = a(t, d / e - l), V = a(n, g / r - u);
            o && h.drawImage(o, m, v, y, w, M, X, W, V);
          }
        },
        /**
         * needed to check if image needs resize
         * @private
         */
        _needsResize: function() {
          var h = this.getTotalObjectScaling();
          return h.scaleX !== this._lastScaleX || h.scaleY !== this._lastScaleY;
        },
        /**
         * @private
         */
        _resetWidthHeight: function() {
          this.set(this.getOriginalSize());
        },
        /**
         * The Image class's initialization method. This method is automatically
         * called by the constructor.
         * @private
         * @param {HTMLImageElement|String} element The element representing the image
         * @param {Object} [options] Options object
         */
        _initElement: function(h, o) {
          this.setElement(f.util.getById(h), o), f.util.addClass(this.getElement(), f.Image.CSS_CANVAS);
        },
        /**
         * @private
         * @param {Object} [options] Options object
         */
        _initConfig: function(h) {
          h || (h = {}), this.setOptions(h), this._setWidthHeight(h);
        },
        /**
         * @private
         * @param {Array} filters to be initialized
         * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
         */
        _initFilters: function(h, o) {
          h && h.length ? f.util.enlivenObjects(h, function(e) {
            o && o(e);
          }, "fabric.Image.filters") : o && o();
        },
        /**
         * @private
         * Set the width and the height of the image object, using the element or the
         * options.
         * @param {Object} [options] Object with width/height properties
         */
        _setWidthHeight: function(h) {
          h || (h = {});
          var o = this.getElement();
          this.width = h.width || o.naturalWidth || o.width || 0, this.height = h.height || o.naturalHeight || o.height || 0;
        },
        /**
         * Calculate offset for center and scale factor for the image in order to respect
         * the preserveAspectRatio attribute
         * @private
         * @return {Object}
         */
        parsePreserveAspectRatioAttribute: function() {
          var h = f.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), o = this._element.width, e = this._element.height, r = 1, t = 1, n = 0, a = 0, i = 0, l = 0, u, d = this.width, g = this.height, m = { width: d, height: g };
          return h && (h.alignX !== "none" || h.alignY !== "none") ? (h.meetOrSlice === "meet" && (r = t = f.util.findScaleToFit(this._element, m), u = (d - o * r) / 2, h.alignX === "Min" && (n = -u), h.alignX === "Max" && (n = u), u = (g - e * t) / 2, h.alignY === "Min" && (a = -u), h.alignY === "Max" && (a = u)), h.meetOrSlice === "slice" && (r = t = f.util.findScaleToCover(this._element, m), u = o - d / r, h.alignX === "Mid" && (i = u / 2), h.alignX === "Max" && (i = u), u = e - g / t, h.alignY === "Mid" && (l = u / 2), h.alignY === "Max" && (l = u), o = d / r, e = g / t)) : (r = d / o, t = g / e), {
            width: o,
            height: e,
            scaleX: r,
            scaleY: t,
            offsetLeft: n,
            offsetTop: a,
            cropX: i,
            cropY: l
          };
        }
      }
    ), f.Image.CSS_CANVAS = "canvas-img", f.Image.prototype.getSvgSrc = f.Image.prototype.getSrc, f.Image.fromObject = function(h, o) {
      var e = f.util.object.clone(h);
      f.util.loadImage(e.src, function(r, t) {
        if (t) {
          o && o(null, !0);
          return;
        }
        f.Image.prototype._initFilters.call(e, e.filters, function(n) {
          e.filters = n || [], f.Image.prototype._initFilters.call(e, [e.resizeFilter], function(a) {
            e.resizeFilter = a[0], f.util.enlivenObjectEnlivables(e, e, function() {
              var i = new f.Image(r, e);
              o(i, !1);
            });
          });
        });
      }, null, e.crossOrigin);
    }, f.Image.fromURL = function(h, o, e) {
      f.util.loadImage(h, function(r, t) {
        o && o(new f.Image(r, e), t);
      }, null, e && e.crossOrigin);
    }, f.Image.ATTRIBUTE_NAMES = f.SHARED_ATTRIBUTES.concat(
      "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")
    ), f.Image.fromElement = function(h, o, e) {
      var r = f.parseAttributes(h, f.Image.ATTRIBUTE_NAMES);
      f.Image.fromURL(
        r["xlink:href"],
        o,
        s(e ? f.util.object.clone(e) : {}, r)
      );
    };
  }(Z), f.util.object.extend(
    f.Object.prototype,
    /** @lends fabric.Object.prototype */
    {
      /**
       * @private
       * @return {Number} angle value
       */
      _getAngleValueForStraighten: function() {
        var c = this.angle % 360;
        return c > 0 ? Math.round((c - 1) / 90) * 90 : Math.round(c / 90) * 90;
      },
      /**
       * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
       * @return {fabric.Object} thisArg
       * @chainable
       */
      straighten: function() {
        return this.rotate(this._getAngleValueForStraighten());
      },
      /**
       * Same as {@link fabric.Object.prototype.straighten} but with animation
       * @param {Object} callbacks Object with callback functions
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Object} thisArg
       */
      fxStraighten: function(c) {
        c = c || {};
        var s = function() {
        }, h = c.onComplete || s, o = c.onChange || s, e = this;
        return f.util.animate({
          target: this,
          startValue: this.get("angle"),
          endValue: this._getAngleValueForStraighten(),
          duration: this.FX_DURATION,
          onChange: function(r) {
            e.rotate(r), o();
          },
          onComplete: function() {
            e.setCoords(), h();
          }
        });
      }
    }
  ), f.util.object.extend(
    f.StaticCanvas.prototype,
    /** @lends fabric.StaticCanvas.prototype */
    {
      /**
       * Straightens object, then rerenders canvas
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
      straightenObject: function(c) {
        return c.straighten(), this.requestRenderAll(), this;
      },
      /**
       * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       */
      fxStraightenObject: function(c) {
        return c.fxStraighten({
          onChange: this.requestRenderAllBound
        });
      }
    }
  ), function() {
    function c(h, o) {
      var e = "precision " + o + ` float;
void main(){}`, r = h.createShader(h.FRAGMENT_SHADER);
      return h.shaderSource(r, e), h.compileShader(r), !!h.getShaderParameter(r, h.COMPILE_STATUS);
    }
    f.isWebglSupported = function(h) {
      if (f.isLikelyNode)
        return !1;
      h = h || f.WebglFilterBackend.prototype.tileSize;
      var o = document.createElement("canvas"), e = o.getContext("webgl") || o.getContext("experimental-webgl"), r = !1;
      if (e) {
        f.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), r = f.maxTextureSize >= h;
        for (var t = ["highp", "mediump", "lowp"], n = 0; n < 3; n++)
          if (c(e, t[n])) {
            f.webGlPrecision = t[n];
            break;
          }
      }
      return this.isSupported = r, r;
    }, f.WebglFilterBackend = s;
    function s(h) {
      h && h.tileSize && (this.tileSize = h.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    s.prototype = /** @lends fabric.WebglFilterBackend.prototype */
    {
      tileSize: 2048,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
       */
      setupGLContext: function(h, o) {
        this.dispose(), this.createWebGLCanvas(h, o), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(h, o);
      },
      /**
       * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
       * putImageData is faster than drawImage for that specific operation.
       */
      chooseFastestCopyGLTo2DMethod: function(h, o) {
        var e = typeof window.performance < "u", r;
        try {
          new ImageData(1, 1), r = !0;
        } catch {
          r = !1;
        }
        var t = typeof ArrayBuffer < "u", n = typeof Uint8ClampedArray < "u";
        if (e && r && t && n) {
          var a = f.util.createCanvasElement(), i = new ArrayBuffer(h * o * 4);
          if (f.forceGLPutImageData) {
            this.imageBuffer = i, this.copyGLTo2D = gt;
            return;
          }
          var l = {
            imageBuffer: i,
            destinationWidth: h,
            destinationHeight: o,
            targetCanvas: a
          }, u, d, g;
          a.width = h, a.height = o, u = window.performance.now(), ct.call(l, this.gl, l), d = window.performance.now() - u, u = window.performance.now(), gt.call(l, this.gl, l), g = window.performance.now() - u, d > g ? (this.imageBuffer = i, this.copyGLTo2D = gt) : this.copyGLTo2D = ct;
        }
      },
      /**
       * Create a canvas element and associated WebGL context and attaches them as
       * class properties to the GLFilterBackend class.
       */
      createWebGLCanvas: function(h, o) {
        var e = f.util.createCanvasElement();
        e.width = h, e.height = o;
        var r = {
          alpha: !0,
          premultipliedAlpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1
        }, t = e.getContext("webgl", r);
        t || (t = e.getContext("experimental-webgl", r)), t && (t.clearColor(0, 0, 0, 0), this.canvas = e, this.gl = t);
      },
      /**
       * Attempts to apply the requested filters to the source provided, drawing the filtered output
       * to the provided target canvas.
       *
       * @param {Array} filters The filters to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
       * @param {Number} width The width of the source input.
       * @param {Number} height The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
       * omitted, caching will be skipped.
       */
      applyFilters: function(h, o, e, r, t, n) {
        var a = this.gl, i;
        n && (i = this.getCachedTexture(n, o));
        var l = {
          originalWidth: o.width || o.originalWidth,
          originalHeight: o.height || o.originalHeight,
          sourceWidth: e,
          sourceHeight: r,
          destinationWidth: e,
          destinationHeight: r,
          context: a,
          sourceTexture: this.createTexture(a, e, r, !i && o),
          targetTexture: this.createTexture(a, e, r),
          originalTexture: i || this.createTexture(a, e, r, !i && o),
          passes: h.length,
          webgl: !0,
          aPosition: this.aPosition,
          programCache: this.programCache,
          pass: 0,
          filterBackend: this,
          targetCanvas: t
        }, u = a.createFramebuffer();
        return a.bindFramebuffer(a.FRAMEBUFFER, u), h.forEach(function(d) {
          d && d.applyTo(l);
        }), lt(l), this.copyGLTo2D(a, l), a.bindTexture(a.TEXTURE_2D, null), a.deleteTexture(l.sourceTexture), a.deleteTexture(l.targetTexture), a.deleteFramebuffer(u), t.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), l;
      },
      /**
       * Detach event listeners, remove references, and clean up caches.
       */
      dispose: function() {
        this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
      },
      /**
       * Wipe out WebGL-related caches.
       */
      clearWebGLCaches: function() {
        this.programCache = {}, this.textureCache = {};
      },
      /**
       * Create a WebGL texture object.
       *
       * Accepts specific dimensions to initialize the texture to or a source image.
       *
       * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
       * @param {Number} width The width to initialize the texture at.
       * @param {Number} height The height to initialize the texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
       * @param {Number} filterType gl.NEAREST or gl.LINEAR usually, webgl numeri constants
       * @returns {WebGLTexture}
       */
      createTexture: function(h, o, e, r, t) {
        var n = h.createTexture();
        return h.bindTexture(h.TEXTURE_2D, n), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, t || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, t || h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), r ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, r) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, o, e, 0, h.RGBA, h.UNSIGNED_BYTE, null), n;
      },
      /**
       * Can be optionally used to get a texture from the cache array
       *
       * If an existing texture is not found, a new texture is created and cached.
       *
       * @param {String} uniqueId A cache key to use to find an existing texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
       * texture cache entry if one does not already exist.
       */
      getCachedTexture: function(h, o) {
        if (this.textureCache[h])
          return this.textureCache[h];
        var e = this.createTexture(
          this.gl,
          o.width,
          o.height,
          o
        );
        return this.textureCache[h] = e, e;
      },
      /**
       * Clear out cached resources related to a source image that has been
       * filtered previously.
       *
       * @param {String} cacheKey The cache key provided when the source image was filtered.
       */
      evictCachesForKey: function(h) {
        this.textureCache[h] && (this.gl.deleteTexture(this.textureCache[h]), delete this.textureCache[h]);
      },
      copyGLTo2D: ct,
      /**
       * Attempt to extract GPU information strings from a WebGL context.
       *
       * Useful information when debugging or blacklisting specific GPUs.
       *
       * @returns {Object} A GPU info object with renderer and vendor strings.
       */
      captureGPUInfo: function() {
        if (this.gpuInfo)
          return this.gpuInfo;
        var h = this.gl, o = { renderer: "", vendor: "" };
        if (!h)
          return o;
        var e = h.getExtension("WEBGL_debug_renderer_info");
        if (e) {
          var r = h.getParameter(e.UNMASKED_RENDERER_WEBGL), t = h.getParameter(e.UNMASKED_VENDOR_WEBGL);
          r && (o.renderer = r.toLowerCase()), t && (o.vendor = t.toLowerCase());
        }
        return this.gpuInfo = o, o;
      }
    };
  }();
  function lt(c) {
    var s = c.targetCanvas, h = s.width, o = s.height, e = c.destinationWidth, r = c.destinationHeight;
    (h !== e || o !== r) && (s.width = e, s.height = r);
  }
  function ct(c, s) {
    var h = c.canvas, o = s.targetCanvas, e = o.getContext("2d");
    e.translate(0, o.height), e.scale(1, -1);
    var r = h.height - o.height;
    e.drawImage(
      h,
      0,
      r,
      o.width,
      o.height,
      0,
      0,
      o.width,
      o.height
    );
  }
  function gt(c, s) {
    var h = s.targetCanvas, o = h.getContext("2d"), e = s.destinationWidth, r = s.destinationHeight, t = e * r * 4, n = new Uint8Array(this.imageBuffer, 0, t), a = new Uint8ClampedArray(this.imageBuffer, 0, t);
    c.readPixels(0, 0, e, r, c.RGBA, c.UNSIGNED_BYTE, n);
    var i = new ImageData(a, e, r);
    o.putImageData(i, 0, 0);
  }
  (function() {
    var c = function() {
    };
    f.Canvas2dFilterBackend = s;
    function s() {
    }
    s.prototype = /** @lends fabric.Canvas2dFilterBackend.prototype */
    {
      evictCachesForKey: c,
      dispose: c,
      clearWebGLCaches: c,
      /**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
      resources: {},
      /**
       * Apply a set of filters against a source image and draw the filtered output
       * to the provided destination canvas.
       *
       * @param {EnhancedFilter} filters The filter to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
       * @param {Number} sourceWidth The width of the source input.
       * @param {Number} sourceHeight The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       */
      applyFilters: function(h, o, e, r, t) {
        var n = t.getContext("2d");
        n.drawImage(o, 0, 0, e, r);
        var a = n.getImageData(0, 0, e, r), i = n.getImageData(0, 0, e, r), l = {
          sourceWidth: e,
          sourceHeight: r,
          imageData: a,
          originalEl: o,
          originalImageData: i,
          canvasEl: t,
          ctx: n,
          filterBackend: this
        };
        return h.forEach(function(u) {
          u.applyTo(l);
        }), (l.imageData.width !== e || l.imageData.height !== r) && (t.width = l.imageData.width, t.height = l.imageData.height), n.putImageData(l.imageData, 0, 0), l;
      }
    };
  })(), f.Image = f.Image || {}, f.Image.filters = f.Image.filters || {}, f.Image.filters.BaseFilter = f.util.createClass(
    /** @lends fabric.Image.filters.BaseFilter.prototype */
    {
      /**
       * Filter type
       * @param {String} type
       * @default
       */
      type: "BaseFilter",
      /**
       * Array of attributes to send with buffers. do not modify
       * @private
       */
      vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
      fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`,
      /**
       * Constructor
       * @param {Object} [options] Options object
       */
      initialize: function(c) {
        c && this.setOptions(c);
      },
      /**
       * Sets filter's properties from options
       * @param {Object} [options] Options object
       */
      setOptions: function(c) {
        for (var s in c)
          this[s] = c[s];
      },
      /**
       * Compile this filter's shader program.
       *
       * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
       * @param {String} fragmentSource fragmentShader source for compilation
       * @param {String} vertexSource vertexShader source for compilation
       */
      createProgram: function(c, s, h) {
        s = s || this.fragmentSource, h = h || this.vertexSource, f.webGlPrecision !== "highp" && (s = s.replace(
          /precision highp float/g,
          "precision " + f.webGlPrecision + " float"
        ));
        var o = c.createShader(c.VERTEX_SHADER);
        if (c.shaderSource(o, h), c.compileShader(o), !c.getShaderParameter(o, c.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Vertex shader compile error for " + this.type + ": " + c.getShaderInfoLog(o)
          );
        var e = c.createShader(c.FRAGMENT_SHADER);
        if (c.shaderSource(e, s), c.compileShader(e), !c.getShaderParameter(e, c.COMPILE_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            "Fragment shader compile error for " + this.type + ": " + c.getShaderInfoLog(e)
          );
        var r = c.createProgram();
        if (c.attachShader(r, o), c.attachShader(r, e), c.linkProgram(r), !c.getProgramParameter(r, c.LINK_STATUS))
          throw new Error(
            // eslint-disable-next-line prefer-template
            'Shader link error for "${this.type}" ' + c.getProgramInfoLog(r)
          );
        var t = this.getAttributeLocations(c, r), n = this.getUniformLocations(c, r) || {};
        return n.uStepW = c.getUniformLocation(r, "uStepW"), n.uStepH = c.getUniformLocation(r, "uStepH"), {
          program: r,
          attributeLocations: t,
          uniformLocations: n
        };
      },
      /**
       * Return a map of attribute names to WebGLAttributeLocation objects.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
       * @returns {Object} A map of attribute names to attribute locations.
       */
      getAttributeLocations: function(c, s) {
        return {
          aPosition: c.getAttribLocation(s, "aPosition")
        };
      },
      /**
       * Return a map of uniform names to WebGLUniformLocation objects.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
       * @returns {Object} A map of uniform names to uniform locations.
       */
      getUniformLocations: function() {
        return {};
      },
      /**
       * Send attribute data from this filter to its shader program on the GPU.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} attributeLocations A map of shader attribute names to their locations.
       */
      sendAttributeData: function(c, s, h) {
        var o = s.aPosition, e = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, e), c.enableVertexAttribArray(o), c.vertexAttribPointer(o, 2, c.FLOAT, !1, 0, 0), c.bufferData(c.ARRAY_BUFFER, h, c.STATIC_DRAW);
      },
      _setupFrameBuffer: function(c) {
        var s = c.context, h, o;
        c.passes > 1 ? (h = c.destinationWidth, o = c.destinationHeight, (c.sourceWidth !== h || c.sourceHeight !== o) && (s.deleteTexture(c.targetTexture), c.targetTexture = c.filterBackend.createTexture(s, h, o)), s.framebufferTexture2D(
          s.FRAMEBUFFER,
          s.COLOR_ATTACHMENT0,
          s.TEXTURE_2D,
          c.targetTexture,
          0
        )) : (s.bindFramebuffer(s.FRAMEBUFFER, null), s.finish());
      },
      _swapTextures: function(c) {
        c.passes--, c.pass++;
        var s = c.targetTexture;
        c.targetTexture = c.sourceTexture, c.sourceTexture = s;
      },
      /**
       * Generic isNeutral implementation for one parameter based filters.
       * Used only in image applyFilters to discard filters that will not have an effect
       * on the image
       * Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )
       * @param {Object} options
       **/
      isNeutralState: function() {
        var c = this.mainParameter, s = f.Image.filters[this.type].prototype;
        if (c)
          if (Array.isArray(s[c])) {
            for (var h = s[c].length; h--; )
              if (this[c][h] !== s[c][h])
                return !1;
            return !0;
          } else
            return s[c] === this[c];
        else
          return !1;
      },
      /**
       * Apply this filter to the input image data provided.
       *
       * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyTo: function(c) {
        c.webgl ? (this._setupFrameBuffer(c), this.applyToWebGL(c), this._swapTextures(c)) : this.applyTo2d(c);
      },
      /**
       * Retrieves the cached shader.
       * @param {Object} options
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      retrieveShader: function(c) {
        return c.programCache.hasOwnProperty(this.type) || (c.programCache[this.type] = this.createProgram(c.context)), c.programCache[this.type];
      },
      /**
       * Apply this filter using webgl.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.originalTexture The texture of the original input image.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
      applyToWebGL: function(c) {
        var s = c.context, h = this.retrieveShader(c);
        c.pass === 0 && c.originalTexture ? s.bindTexture(s.TEXTURE_2D, c.originalTexture) : s.bindTexture(s.TEXTURE_2D, c.sourceTexture), s.useProgram(h.program), this.sendAttributeData(s, h.attributeLocations, c.aPosition), s.uniform1f(h.uniformLocations.uStepW, 1 / c.sourceWidth), s.uniform1f(h.uniformLocations.uStepH, 1 / c.sourceHeight), this.sendUniformData(s, h.uniformLocations), s.viewport(0, 0, c.destinationWidth, c.destinationHeight), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
      },
      bindAdditionalTexture: function(c, s, h) {
        c.activeTexture(h), c.bindTexture(c.TEXTURE_2D, s), c.activeTexture(c.TEXTURE0);
      },
      unbindAdditionalTexture: function(c, s) {
        c.activeTexture(s), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE0);
      },
      getMainParameter: function() {
        return this[this.mainParameter];
      },
      setMainParameter: function(c) {
        this[this.mainParameter] = c;
      },
      /**
       * Send uniform data from this filter to its shader program on the GPU.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} uniformLocations A map of shader uniform names to their locations.
       */
      sendUniformData: function() {
      },
      /**
       * If needed by a 2d filter, this functions can create an helper canvas to be used
       * remember that options.targetCanvas is available for use till end of chain.
       */
      createHelpLayer: function(c) {
        if (!c.helpLayer) {
          var s = document.createElement("canvas");
          s.width = c.sourceWidth, s.height = c.sourceHeight, c.helpLayer = s;
        }
      },
      /**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
      toObject: function() {
        var c = { type: this.type }, s = this.mainParameter;
        return s && (c[s] = this[s]), c;
      },
      /**
       * Returns a JSON representation of an instance
       * @return {Object} JSON
       */
      toJSON: function() {
        return this.toObject();
      }
    }
  ), f.Image.filters.BaseFilter.fromObject = function(c, s) {
    var h = new f.Image.filters[c.type](c);
    return s && s(h), h;
  }, function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.ColorMatrix = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.ColorMatrix.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "ColorMatrix",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`,
        /**
         * Colormatrix for pixels.
         * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
         * outside the -1, 1 range.
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Array} matrix array of 20 numbers.
         * @default
         */
        matrix: [
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        mainParameter: "matrix",
        /**
         * Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
         * to save some calculation
         * @type Boolean
         * @default true
         */
        colorsOnly: !0,
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.callSuper("initialize", e), this.matrix = this.matrix.slice(0);
        },
        /**
         * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n = t.length, a = this.matrix, i, l, u, d, g, m = this.colorsOnly;
          for (g = 0; g < n; g += 4)
            i = t[g], l = t[g + 1], u = t[g + 2], m ? (t[g] = i * a[0] + l * a[1] + u * a[2] + a[4] * 255, t[g + 1] = i * a[5] + l * a[6] + u * a[7] + a[9] * 255, t[g + 2] = i * a[10] + l * a[11] + u * a[12] + a[14] * 255) : (d = t[g + 3], t[g] = i * a[0] + l * a[1] + u * a[2] + d * a[3] + a[4] * 255, t[g + 1] = i * a[5] + l * a[6] + u * a[7] + d * a[8] + a[9] * 255, t[g + 2] = i * a[10] + l * a[11] + u * a[12] + d * a[13] + a[14] * 255, t[g + 3] = i * a[15] + l * a[16] + u * a[17] + d * a[18] + a[19] * 255);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uColorMatrix: e.getUniformLocation(r, "uColorMatrix"),
            uConstants: e.getUniformLocation(r, "uConstants")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.matrix, n = [
            t[0],
            t[1],
            t[2],
            t[3],
            t[5],
            t[6],
            t[7],
            t[8],
            t[10],
            t[11],
            t[12],
            t[13],
            t[15],
            t[16],
            t[17],
            t[18]
          ], a = [t[4], t[9], t[14], t[19]];
          e.uniformMatrix4fv(r.uColorMatrix, !1, n), e.uniform4fv(r.uConstants, a);
        }
      }
    ), s.Image.filters.ColorMatrix.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Brightness = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Brightness.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Brightness",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`,
        /**
         * Brightness value, from -1 to 1.
         * translated to -255 to 255 for 2d
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Number} brightness
         * @default
         */
        brightness: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "brightness",
        /**
        * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
        *
        * @param {Object} options
        * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
        */
        applyTo2d: function(e) {
          if (this.brightness !== 0) {
            var r = e.imageData, t = r.data, n, a = t.length, i = Math.round(this.brightness * 255);
            for (n = 0; n < a; n += 4)
              t[n] = t[n] + i, t[n + 1] = t[n + 1] + i, t[n + 2] = t[n + 2] + i;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uBrightness: e.getUniformLocation(r, "uBrightness")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uBrightness, this.brightness);
        }
      }
    ), s.Image.filters.Brightness.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, e = s.util.createClass;
    o.Convolute = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.Convolute.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Convolute",
        /*
         * Opaque value (true/false)
         */
        opaque: !1,
        /*
         * matrix for the filter, max 9x9
         */
        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: {
          Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`,
          Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`,
          Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`
        },
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Convolute.prototype
         * @param {Object} [options] Options object
         * @param {Boolean} [options.opaque=false] Opaque value (true/false)
         * @param {Array} [options.matrix] Filter matrix
         */
        /**
        * Retrieves the cached shader.
        * @param {Object} options
        * @param {WebGLRenderingContext} options.context The GL context used for rendering.
        * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
        */
        retrieveShader: function(r) {
          var t = Math.sqrt(this.matrix.length), n = this.type + "_" + t + "_" + (this.opaque ? 1 : 0), a = this.fragmentSource[n];
          return r.programCache.hasOwnProperty(n) || (r.programCache[n] = this.createProgram(r.context, a)), r.programCache[n];
        },
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          var t = r.imageData, n = t.data, a = this.matrix, i = Math.round(Math.sqrt(a.length)), l = Math.floor(i / 2), u = t.width, d = t.height, g = r.ctx.createImageData(u, d), m = g.data, v = this.opaque ? 1 : 0, y, w, M, X, W, V, N, H, z, q, J, K, p;
          for (J = 0; J < d; J++)
            for (q = 0; q < u; q++) {
              for (W = (J * u + q) * 4, y = 0, w = 0, M = 0, X = 0, p = 0; p < i; p++)
                for (K = 0; K < i; K++)
                  N = J + p - l, V = q + K - l, !(N < 0 || N >= d || V < 0 || V >= u) && (H = (N * u + V) * 4, z = a[p * i + K], y += n[H] * z, w += n[H + 1] * z, M += n[H + 2] * z, v || (X += n[H + 3] * z));
              m[W] = y, m[W + 1] = w, m[W + 2] = M, v ? m[W + 3] = n[W + 3] : m[W + 3] = X;
            }
          r.imageData = g;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uMatrix: r.getUniformLocation(t, "uMatrix"),
            uOpaque: r.getUniformLocation(t, "uOpaque"),
            uHalfSize: r.getUniformLocation(t, "uHalfSize"),
            uSize: r.getUniformLocation(t, "uSize")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          r.uniform1fv(t.uMatrix, this.matrix);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            opaque: this.opaque,
            matrix: this.matrix
          });
        }
      }
    ), s.Image.filters.Convolute.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Grayscale = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Grayscale.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Grayscale",
        fragmentSource: {
          average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`,
          lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`,
          luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}`
        },
        /**
         * Grayscale mode, between 'average', 'lightness', 'luminosity'
         * @param {String} type
         * @default
         */
        mode: "average",
        mainParameter: "mode",
        /**
         * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n, a = t.length, i, l = this.mode;
          for (n = 0; n < a; n += 4)
            l === "average" ? i = (t[n] + t[n + 1] + t[n + 2]) / 3 : l === "lightness" ? i = (Math.min(t[n], t[n + 1], t[n + 2]) + Math.max(t[n], t[n + 1], t[n + 2])) / 2 : l === "luminosity" && (i = 0.21 * t[n] + 0.72 * t[n + 1] + 0.07 * t[n + 2]), t[n] = i, t[n + 1] = i, t[n + 2] = i;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode;
          if (!e.programCache.hasOwnProperty(r)) {
            var t = this.fragmentSource[this.mode];
            e.programCache[r] = this.createProgram(e.context, t);
          }
          return e.programCache[r];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uMode: e.getUniformLocation(r, "uMode")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = 1;
          e.uniform1i(r.uMode, t);
        },
        /**
         * Grayscale filter isNeutralState implementation
         * The filter is never neutral
         * on the image
         **/
        isNeutralState: function() {
          return !1;
        }
      }
    ), s.Image.filters.Grayscale.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Invert = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Invert.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Invert",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`,
        /**
         * Filter invert. if false, does nothing
         * @param {Boolean} invert
         * @default
         */
        invert: !0,
        mainParameter: "invert",
        /**
         * Apply the Invert operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n, a = t.length;
          for (n = 0; n < a; n += 4)
            t[n] = 255 - t[n], t[n + 1] = 255 - t[n + 1], t[n + 2] = 255 - t[n + 2];
        },
        /**
         * Invert filter isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function() {
          return !this.invert;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uInvert: e.getUniformLocation(r, "uInvert")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1i(r.uInvert, this.invert);
        }
      }
    ), s.Image.filters.Invert.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, e = s.util.createClass;
    o.Noise = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.Noise.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Noise",
        /**
         * Fragment source for the noise program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "noise",
        /**
         * Noise value, from
         * @param {Number} noise
         * @default
         */
        noise: 0,
        /**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(r) {
          if (this.noise !== 0) {
            var t = r.imageData, n = t.data, a, i = n.length, l = this.noise, u;
            for (a = 0, i = n.length; a < i; a += 4)
              u = (0.5 - Math.random()) * l, n[a] += u, n[a + 1] += u, n[a + 2] += u;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uNoise: r.getUniformLocation(t, "uNoise"),
            uSeed: r.getUniformLocation(t, "uSeed")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          r.uniform1f(t.uNoise, this.noise / 255), r.uniform1f(t.uSeed, Math.random());
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            noise: this.noise
          });
        }
      }
    ), s.Image.filters.Noise.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Pixelate = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Pixelate.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Pixelate",
        blocksize: 4,
        mainParameter: "blocksize",
        /**
         * Fragment source for the Pixelate program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`,
        /**
         * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n = r.height, a = r.width, i, l, u, d, g, m, v, y, w, M, X;
          for (l = 0; l < n; l += this.blocksize)
            for (u = 0; u < a; u += this.blocksize)
              for (i = l * 4 * a + u * 4, d = t[i], g = t[i + 1], m = t[i + 2], v = t[i + 3], M = Math.min(l + this.blocksize, n), X = Math.min(u + this.blocksize, a), y = l; y < M; y++)
                for (w = u; w < X; w++)
                  i = y * 4 * a + w * 4, t[i] = d, t[i + 1] = g, t[i + 2] = m, t[i + 3] = v;
        },
        /**
         * Indicate when the filter is not gonna apply changes to the image
         **/
        isNeutralState: function() {
          return this.blocksize === 1;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uBlocksize: e.getUniformLocation(r, "uBlocksize"),
            uStepW: e.getUniformLocation(r, "uStepW"),
            uStepH: e.getUniformLocation(r, "uStepH")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uBlocksize, this.blocksize);
        }
      }
    ), s.Image.filters.Pixelate.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.extend, o = s.Image.filters, e = s.util.createClass;
    o.RemoveColor = e(
      o.BaseFilter,
      /** @lends fabric.Image.filters.RemoveColor.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "RemoveColor",
        /**
         * Color to remove, in any format understood by fabric.Color.
         * @param {String} type
         * @default
         */
        color: "#FFFFFF",
        /**
         * Fragment source for the brightness program
         */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`,
        /**
         * distance to actual color, as value up or down from each r,g,b
         * between 0 and 1
         **/
        distance: 0.02,
        /**
         * For color to remove inside distance, use alpha channel for a smoother deletion
         * NOT IMPLEMENTED YET
         **/
        useAlpha: !1,
        /**
         * Constructor
         * @memberOf fabric.Image.filters.RemoveWhite.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.color=#RRGGBB] Threshold value
         * @param {Number} [options.distance=10] Distance value
         */
        /**
         * Applies filter to canvas element
         * @param {Object} canvasEl Canvas element to apply filter to
         */
        applyTo2d: function(r) {
          var t = r.imageData, n = t.data, a, i = this.distance * 255, l, u, d, g = new s.Color(this.color).getSource(), m = [
            g[0] - i,
            g[1] - i,
            g[2] - i
          ], v = [
            g[0] + i,
            g[1] + i,
            g[2] + i
          ];
          for (a = 0; a < n.length; a += 4)
            l = n[a], u = n[a + 1], d = n[a + 2], l > m[0] && u > m[1] && d > m[2] && l < v[0] && u < v[1] && d < v[2] && (n[a + 3] = 0);
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(r, t) {
          return {
            uLow: r.getUniformLocation(t, "uLow"),
            uHigh: r.getUniformLocation(t, "uHigh")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(r, t) {
          var n = new s.Color(this.color).getSource(), a = parseFloat(this.distance), i = [
            0 + n[0] / 255 - a,
            0 + n[1] / 255 - a,
            0 + n[2] / 255 - a,
            1
          ], l = [
            n[0] / 255 + a,
            n[1] / 255 + a,
            n[2] / 255 + a,
            1
          ];
          r.uniform4fv(t.uLow, i), r.uniform4fv(t.uHigh, l);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return h(this.callSuper("toObject"), {
            color: this.color,
            distance: this.distance
          });
        }
      }
    ), s.Image.filters.RemoveColor.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass, e = {
      Brownie: [
        0.5997,
        0.34553,
        -0.27082,
        0,
        0.186,
        -0.0377,
        0.86095,
        0.15059,
        0,
        -0.1449,
        0.24113,
        -0.07441,
        0.44972,
        0,
        -0.02965,
        0,
        0,
        0,
        1,
        0
      ],
      Vintage: [
        0.62793,
        0.32021,
        -0.03965,
        0,
        0.03784,
        0.02578,
        0.64411,
        0.03259,
        0,
        0.02926,
        0.0466,
        -0.08512,
        0.52416,
        0,
        0.02023,
        0,
        0,
        0,
        1,
        0
      ],
      Kodachrome: [
        1.12855,
        -0.39673,
        -0.03992,
        0,
        0.24991,
        -0.16404,
        1.08352,
        -0.05498,
        0,
        0.09698,
        -0.16786,
        -0.56034,
        1.60148,
        0,
        0.13972,
        0,
        0,
        0,
        1,
        0
      ],
      Technicolor: [
        1.91252,
        -0.85453,
        -0.09155,
        0,
        0.04624,
        -0.30878,
        1.76589,
        -0.10601,
        0,
        -0.27589,
        -0.2311,
        -0.75018,
        1.84759,
        0,
        0.12137,
        0,
        0,
        0,
        1,
        0
      ],
      Polaroid: [
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      Sepia: [
        0.393,
        0.769,
        0.189,
        0,
        0,
        0.349,
        0.686,
        0.168,
        0,
        0,
        0.272,
        0.534,
        0.131,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ],
      BlackWhite: [
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        1.5,
        1.5,
        1.5,
        0,
        -1,
        0,
        0,
        0,
        1,
        0
      ]
    };
    for (var r in e)
      h[r] = o(
        h.ColorMatrix,
        /** @lends fabric.Image.filters.Sepia.prototype */
        {
          /**
           * Filter type
           * @param {String} type
           * @default
           */
          type: r,
          /**
           * Colormatrix for the effect
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
          matrix: e[r],
          /**
           * Lock the matrix export for this kind of static, parameter less filters.
           */
          mainParameter: !1,
          /**
           * Lock the colormatrix on the color part, skipping alpha
           */
          colorsOnly: !0
        }
      ), s.Image.filters[r].fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric, h = s.Image.filters, o = s.util.createClass;
    h.BlendColor = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blend.prototype */
      {
        type: "BlendColor",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         * @type String
         * @default
         **/
        color: "#F95C63",
        /**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend color operation.
         * @type Number
         * @default
         **/
        alpha: 1,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
          screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
          add: `gl_FragColor.rgb += uColor.rgb;
`,
          diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
          subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
          lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
          darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
          exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
          overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`,
          tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
`
        },
        /**
         * build the fragment source for the filters, joining the common part with
         * the specific one.
         * @param {String} mode the mode of the filter, a key of this.fragmentSource
         * @return {String} the source to be compiled
         * @private
         */
        buildSource: function(e) {
          return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[e] + `}
}`;
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode, t;
          return e.programCache.hasOwnProperty(r) || (t = this.buildSource(this.mode), e.programCache[r] = this.createProgram(e.context, t)), e.programCache[r];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n = t.length, a, i, l, u, d, g, m, v = 1 - this.alpha;
          m = new s.Color(this.color).getSource(), a = m[0] * this.alpha, i = m[1] * this.alpha, l = m[2] * this.alpha;
          for (var y = 0; y < n; y += 4)
            switch (u = t[y], d = t[y + 1], g = t[y + 2], this.mode) {
              case "multiply":
                t[y] = u * a / 255, t[y + 1] = d * i / 255, t[y + 2] = g * l / 255;
                break;
              case "screen":
                t[y] = 255 - (255 - u) * (255 - a) / 255, t[y + 1] = 255 - (255 - d) * (255 - i) / 255, t[y + 2] = 255 - (255 - g) * (255 - l) / 255;
                break;
              case "add":
                t[y] = u + a, t[y + 1] = d + i, t[y + 2] = g + l;
                break;
              case "diff":
              case "difference":
                t[y] = Math.abs(u - a), t[y + 1] = Math.abs(d - i), t[y + 2] = Math.abs(g - l);
                break;
              case "subtract":
                t[y] = u - a, t[y + 1] = d - i, t[y + 2] = g - l;
                break;
              case "darken":
                t[y] = Math.min(u, a), t[y + 1] = Math.min(d, i), t[y + 2] = Math.min(g, l);
                break;
              case "lighten":
                t[y] = Math.max(u, a), t[y + 1] = Math.max(d, i), t[y + 2] = Math.max(g, l);
                break;
              case "overlay":
                t[y] = a < 128 ? 2 * u * a / 255 : 255 - 2 * (255 - u) * (255 - a) / 255, t[y + 1] = i < 128 ? 2 * d * i / 255 : 255 - 2 * (255 - d) * (255 - i) / 255, t[y + 2] = l < 128 ? 2 * g * l / 255 : 255 - 2 * (255 - g) * (255 - l) / 255;
                break;
              case "exclusion":
                t[y] = a + u - 2 * a * u / 255, t[y + 1] = i + d - 2 * i * d / 255, t[y + 2] = l + g - 2 * l * g / 255;
                break;
              case "tint":
                t[y] = a + u * v, t[y + 1] = i + d * v, t[y + 2] = l + g * v;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uColor: e.getUniformLocation(r, "uColor")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = new s.Color(this.color).getSource();
          t[0] = this.alpha * t[0] / 255, t[1] = this.alpha * t[1] / 255, t[2] = this.alpha * t[2] / 255, t[3] = this.alpha, e.uniform4fv(r.uColor, t);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            color: this.color,
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), s.Image.filters.BlendColor.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric, h = s.Image.filters, o = s.util.createClass;
    h.BlendImage = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.BlendImage.prototype */
      {
        type: "BlendImage",
        /**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
        image: null,
        /**
         * Blend mode for the filter (one of "multiply", "mask")
         * @type String
         * @default
         **/
        mode: "multiply",
        /**
         * alpha value. represent the strength of the blend image operation.
         * not implemented.
         **/
        alpha: 1,
        vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`,
        /**
         * Fragment source for the Multiply program
         */
        fragmentSource: {
          multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`,
          mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}`
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(e) {
          var r = this.type + "_" + this.mode, t = this.fragmentSource[this.mode];
          return e.programCache.hasOwnProperty(r) || (e.programCache[r] = this.createProgram(e.context, t)), e.programCache[r];
        },
        applyToWebGL: function(e) {
          var r = e.context, t = this.createTexture(e.filterBackend, this.image);
          this.bindAdditionalTexture(r, t, r.TEXTURE1), this.callSuper("applyToWebGL", e), this.unbindAdditionalTexture(r, r.TEXTURE1);
        },
        createTexture: function(e, r) {
          return e.getCachedTexture(r.cacheKey, r._element);
        },
        /**
         * Calculate a transformMatrix to adapt the image to blend over
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        calculateMatrix: function() {
          var e = this.image, r = e._element.width, t = e._element.height;
          return [
            1 / e.scaleX,
            0,
            0,
            0,
            1 / e.scaleY,
            0,
            -e.left / r,
            -e.top / t,
            1
          ];
        },
        /**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = e.filterBackend.resources, n = r.data, a = n.length, i = r.width, l = r.height, u, d, g, m, v, y, w, M, X, W, V = this.image, N;
          t.blendImage || (t.blendImage = s.util.createCanvasElement()), X = t.blendImage, W = X.getContext("2d"), X.width !== i || X.height !== l ? (X.width = i, X.height = l) : W.clearRect(0, 0, i, l), W.setTransform(V.scaleX, 0, 0, V.scaleY, V.left, V.top), W.drawImage(V._element, 0, 0, i, l), N = W.getImageData(0, 0, i, l).data;
          for (var H = 0; H < a; H += 4)
            switch (v = n[H], y = n[H + 1], w = n[H + 2], M = n[H + 3], u = N[H], d = N[H + 1], g = N[H + 2], m = N[H + 3], this.mode) {
              case "multiply":
                n[H] = v * u / 255, n[H + 1] = y * d / 255, n[H + 2] = w * g / 255, n[H + 3] = M * m / 255;
                break;
              case "mask":
                n[H + 3] = m;
                break;
            }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uTransformMatrix: e.getUniformLocation(r, "uTransformMatrix"),
            uImage: e.getUniformLocation(r, "uImage")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.calculateMatrix();
          e.uniform1i(r.uImage, 1), e.uniformMatrix3fv(r.uTransformMatrix, !1, t);
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            image: this.image && this.image.toObject(),
            mode: this.mode,
            alpha: this.alpha
          };
        }
      }
    ), s.Image.filters.BlendImage.fromObject = function(e, r) {
      s.Image.fromObject(e.image, function(t) {
        var n = s.util.object.clone(e);
        n.image = t, r(new s.Image.filters.BlendImage(n));
      });
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = Math.pow, o = Math.floor, e = Math.sqrt, r = Math.abs, t = Math.round, n = Math.sin, a = Math.ceil, i = s.Image.filters, l = s.util.createClass;
    i.Resize = l(
      i.BaseFilter,
      /** @lends fabric.Image.filters.Resize.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Resize",
        /**
         * Resize type
         * for webgl resizeType is just lanczos, for canvas2d can be:
         * bilinear, hermite, sliceHack, lanczos.
         * @param {String} resizeType
         * @default
         */
        resizeType: "hermite",
        /**
         * Scale factor for resizing, x axis
         * @param {Number} scaleX
         * @default
         */
        scaleX: 1,
        /**
         * Scale factor for resizing, y axis
         * @param {Number} scaleY
         * @default
         */
        scaleY: 1,
        /**
         * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
         * @param {Number} lanczosLobes
         * @default
         */
        lanczosLobes: 3,
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(u, d) {
          return {
            uDelta: u.getUniformLocation(d, "uDelta"),
            uTaps: u.getUniformLocation(d, "uTaps")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(u, d) {
          u.uniform2fv(d.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), u.uniform1fv(d.uTaps, this.taps);
        },
        /**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        retrieveShader: function(u) {
          var d = this.getFilterWindow(), g = this.type + "_" + d;
          if (!u.programCache.hasOwnProperty(g)) {
            var m = this.generateShader(d);
            u.programCache[g] = this.createProgram(u.context, m);
          }
          return u.programCache[g];
        },
        getFilterWindow: function() {
          var u = this.tempScale;
          return Math.ceil(this.lanczosLobes / u);
        },
        getTaps: function() {
          for (var u = this.lanczosCreate(this.lanczosLobes), d = this.tempScale, g = this.getFilterWindow(), m = new Array(g), v = 1; v <= g; v++)
            m[v - 1] = u(v * d);
          return m;
        },
        /**
         * Generate vertex and shader sources from the necessary steps numbers
         * @param {Number} filterWindow
         */
        generateShader: function(m) {
          for (var d = new Array(m), g = this.fragmentSourceTOP, m, v = 1; v <= m; v++)
            d[v - 1] = v + ".0 * uDelta";
          return g += "uniform float uTaps[" + m + `];
`, g += `void main() {
`, g += `  vec4 color = texture2D(uTexture, vTexCoord);
`, g += `  float sum = 1.0;
`, d.forEach(function(y, w) {
            g += "  color += texture2D(uTexture, vTexCoord + " + y + ") * uTaps[" + w + `];
`, g += "  color += texture2D(uTexture, vTexCoord - " + y + ") * uTaps[" + w + `];
`, g += "  sum += 2.0 * uTaps[" + w + `];
`;
          }), g += `  gl_FragColor = color / sum;
`, g += "}", g;
        },
        fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`,
        /**
         * Apply the resize filter to the image
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(u) {
          u.webgl ? (u.passes++, this.width = u.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = u.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), u.destinationWidth = this.dW, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceWidth = u.destinationWidth, this.height = u.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), u.destinationHeight = this.dH, this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u), u.sourceHeight = u.destinationHeight) : this.applyTo2d(u);
        },
        isNeutralState: function() {
          return this.scaleX === 1 && this.scaleY === 1;
        },
        lanczosCreate: function(u) {
          return function(d) {
            if (d >= u || d <= -u)
              return 0;
            if (d < 11920929e-14 && d > -11920929e-14)
              return 1;
            d *= Math.PI;
            var g = d / u;
            return n(d) / d * n(g) / g;
          };
        },
        /**
         * Applies filter to canvas element
         * @memberOf fabric.Image.filters.Resize.prototype
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
        applyTo2d: function(u) {
          var d = u.imageData, g = this.scaleX, m = this.scaleY;
          this.rcpScaleX = 1 / g, this.rcpScaleY = 1 / m;
          var v = d.width, y = d.height, w = t(v * g), M = t(y * m), X;
          this.resizeType === "sliceHack" ? X = this.sliceByTwo(u, v, y, w, M) : this.resizeType === "hermite" ? X = this.hermiteFastResize(u, v, y, w, M) : this.resizeType === "bilinear" ? X = this.bilinearFiltering(u, v, y, w, M) : this.resizeType === "lanczos" && (X = this.lanczosResize(u, v, y, w, M)), u.imageData = X;
        },
        /**
         * Filter sliceByTwo
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        sliceByTwo: function(u, d, g, m, v) {
          var y = u.imageData, w = 0.5, M = !1, X = !1, W = d * w, V = g * w, N = s.filterBackend.resources, H, z, q = 0, J = 0, K = d, p = 0;
          for (N.sliceByTwo || (N.sliceByTwo = document.createElement("canvas")), H = N.sliceByTwo, (H.width < d * 1.5 || H.height < g) && (H.width = d * 1.5, H.height = g), z = H.getContext("2d"), z.clearRect(0, 0, d * 1.5, g), z.putImageData(y, 0, 0), m = o(m), v = o(v); !M || !X; )
            d = W, g = V, m < o(W * w) ? W = o(W * w) : (W = m, M = !0), v < o(V * w) ? V = o(V * w) : (V = v, X = !0), z.drawImage(H, q, J, d, g, K, p, W, V), q = K, J = p, p += V;
          return z.getImageData(q, J, m, v);
        },
        /**
         * Filter lanczosResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        lanczosResize: function(u, d, g, m, v) {
          function y(x) {
            var S, E, C, _, T, P, F, D, R, Y, U;
            for (p.x = (x + 0.5) * V, b.x = o(p.x), S = 0; S < v; S++) {
              for (p.y = (S + 0.5) * N, b.y = o(p.y), T = 0, P = 0, F = 0, D = 0, R = 0, E = b.x - q; E <= b.x + q; E++)
                if (!(E < 0 || E >= d)) {
                  Y = o(1e3 * r(E - p.x)), K[Y] || (K[Y] = {});
                  for (var k = b.y - J; k <= b.y + J; k++)
                    k < 0 || k >= g || (U = o(1e3 * r(k - p.y)), K[Y][U] || (K[Y][U] = W(e(h(Y * H, 2) + h(U * z, 2)) / 1e3)), C = K[Y][U], C > 0 && (_ = (k * d + E) * 4, T += C, P += C * w[_], F += C * w[_ + 1], D += C * w[_ + 2], R += C * w[_ + 3]));
                }
              _ = (S * m + x) * 4, X[_] = P / T, X[_ + 1] = F / T, X[_ + 2] = D / T, X[_ + 3] = R / T;
            }
            return ++x < m ? y(x) : M;
          }
          var w = u.imageData.data, M = u.ctx.createImageData(m, v), X = M.data, W = this.lanczosCreate(this.lanczosLobes), V = this.rcpScaleX, N = this.rcpScaleY, H = 2 / this.rcpScaleX, z = 2 / this.rcpScaleY, q = a(V * this.lanczosLobes / 2), J = a(N * this.lanczosLobes / 2), K = {}, p = {}, b = {};
          return y(0);
        },
        /**
         * bilinearFiltering
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        bilinearFiltering: function(u, d, g, m, v) {
          var y, w, M, X, W, V, N, H, z, q, J, K, p = 0, b, x = this.rcpScaleX, S = this.rcpScaleY, E = 4 * (d - 1), C = u.imageData, _ = C.data, T = u.ctx.createImageData(m, v), P = T.data;
          for (N = 0; N < v; N++)
            for (H = 0; H < m; H++)
              for (W = o(x * H), V = o(S * N), z = x * H - W, q = S * N - V, b = 4 * (V * d + W), J = 0; J < 4; J++)
                y = _[b + J], w = _[b + 4 + J], M = _[b + E + J], X = _[b + E + 4 + J], K = y * (1 - z) * (1 - q) + w * z * (1 - q) + M * q * (1 - z) + X * z * q, P[p++] = K;
          return T;
        },
        /**
         * hermiteFastResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
        hermiteFastResize: function(u, d, g, m, v) {
          for (var y = this.rcpScaleX, w = this.rcpScaleY, M = a(y / 2), X = a(w / 2), W = u.imageData, V = W.data, N = u.ctx.createImageData(m, v), H = N.data, z = 0; z < v; z++)
            for (var q = 0; q < m; q++) {
              for (var J = (q + z * m) * 4, K = 0, p = 0, b = 0, x = 0, S = 0, E = 0, C = 0, _ = (z + 0.5) * w, T = o(z * w); T < (z + 1) * w; T++)
                for (var P = r(_ - (T + 0.5)) / X, F = (q + 0.5) * y, D = P * P, R = o(q * y); R < (q + 1) * y; R++) {
                  var Y = r(F - (R + 0.5)) / M, U = e(D + Y * Y);
                  U > 1 && U < -1 || (K = 2 * U * U * U - 3 * U * U + 1, K > 0 && (Y = 4 * (R + T * d), C += K * V[Y + 3], b += K, V[Y + 3] < 255 && (K = K * V[Y + 3] / 250), x += K * V[Y], S += K * V[Y + 1], E += K * V[Y + 2], p += K));
                }
              H[J] = x / p, H[J + 1] = S / p, H[J + 2] = E / p, H[J + 3] = C / b;
            }
          return N;
        },
        /**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
        toObject: function() {
          return {
            type: this.type,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            resizeType: this.resizeType,
            lanczosLobes: this.lanczosLobes
          };
        }
      }
    ), s.Image.filters.Resize.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Contrast = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Contrast.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Contrast",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`,
        /**
         * contrast value, range from -1 to 1.
         * @param {Number} contrast
         * @default 0
         */
        contrast: 0,
        mainParameter: "contrast",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Contrast.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
         */
        /**
          * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8Array to be filtered.
          */
        applyTo2d: function(e) {
          if (this.contrast !== 0) {
            var r = e.imageData, t, a, n = r.data, a = n.length, i = Math.floor(this.contrast * 255), l = 259 * (i + 255) / (255 * (259 - i));
            for (t = 0; t < a; t += 4)
              n[t] = l * (n[t] - 128) + 128, n[t + 1] = l * (n[t + 1] - 128) + 128, n[t + 2] = l * (n[t + 2] - 128) + 128;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uContrast: e.getUniformLocation(r, "uContrast")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uContrast, this.contrast);
        }
      }
    ), s.Image.filters.Contrast.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Saturation = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Saturation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Saturation",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`,
        /**
         * Saturation value, from -1 to 1.
         * Increases/decreases the color saturation.
         * A value of 0 has no effect.
         * 
         * @param {Number} saturation
         * @default
         */
        saturation: 0,
        mainParameter: "saturation",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Saturate.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
         */
        /**
         * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          if (this.saturation !== 0) {
            var r = e.imageData, t = r.data, n = t.length, a = -this.saturation, i, l;
            for (i = 0; i < n; i += 4)
              l = Math.max(t[i], t[i + 1], t[i + 2]), t[i] += l !== t[i] ? (l - t[i]) * a : 0, t[i + 1] += l !== t[i + 1] ? (l - t[i + 1]) * a : 0, t[i + 2] += l !== t[i + 2] ? (l - t[i + 2]) * a : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uSaturation: e.getUniformLocation(r, "uSaturation")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uSaturation, -this.saturation);
        }
      }
    ), s.Image.filters.Saturation.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Vibrance = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Vibrance.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Vibrance",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`,
        /**
         * Vibrance value, from -1 to 1.
         * Increases/decreases the saturation of more muted colors with less effect on saturated colors.
         * A value of 0 has no effect.
         * 
         * @param {Number} vibrance
         * @default
         */
        vibrance: 0,
        mainParameter: "vibrance",
        /**
         * Constructor
         * @memberOf fabric.Image.filters.Vibrance.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.vibrance=0] Vibrance value for the image (between -1 and 1)
         */
        /**
         * Apply the Vibrance operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
        applyTo2d: function(e) {
          if (this.vibrance !== 0) {
            var r = e.imageData, t = r.data, n = t.length, a = -this.vibrance, i, l, u, d;
            for (i = 0; i < n; i += 4)
              l = Math.max(t[i], t[i + 1], t[i + 2]), u = (t[i] + t[i + 1] + t[i + 2]) / 3, d = Math.abs(l - u) * 2 / 255 * a, t[i] += l !== t[i] ? (l - t[i]) * d : 0, t[i + 1] += l !== t[i + 1] ? (l - t[i + 1]) * d : 0, t[i + 2] += l !== t[i + 2] ? (l - t[i + 2]) * d : 0;
          }
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uVibrance: e.getUniformLocation(r, "uVibrance")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform1f(r.uVibrance, -this.vibrance);
        }
      }
    ), s.Image.filters.Vibrance.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Blur = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Blur.prototype */
      {
        type: "Blur",
        /*
        'gl_FragColor = vec4(0.0);',
        'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
        'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
        'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
        */
        /* eslint-disable max-len */
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`,
        /* eslint-enable max-len */
        /**
         * blur value, in percentage of image dimensions.
         * specific to keep the image blur constant at different resolutions
         * range between 0 and 1.
         * @type Number
         * @default
         */
        blur: 0,
        mainParameter: "blur",
        applyTo: function(e) {
          e.webgl ? (this.aspectRatio = e.sourceWidth / e.sourceHeight, e.passes++, this._setupFrameBuffer(e), this.horizontal = !0, this.applyToWebGL(e), this._swapTextures(e), this._setupFrameBuffer(e), this.horizontal = !1, this.applyToWebGL(e), this._swapTextures(e)) : this.applyTo2d(e);
        },
        applyTo2d: function(e) {
          e.imageData = this.simpleBlur(e);
        },
        simpleBlur: function(e) {
          var r = e.filterBackend.resources, t, n, a = e.imageData.width, i = e.imageData.height;
          r.blurLayer1 || (r.blurLayer1 = s.util.createCanvasElement(), r.blurLayer2 = s.util.createCanvasElement()), t = r.blurLayer1, n = r.blurLayer2, (t.width !== a || t.height !== i) && (n.width = t.width = a, n.height = t.height = i);
          var l = t.getContext("2d"), u = n.getContext("2d"), d = 15, g, m, v, y, w = this.blur * 0.06 * 0.5;
          for (l.putImageData(e.imageData, 0, 0), u.clearRect(0, 0, a, i), y = -d; y <= d; y++)
            g = (Math.random() - 0.5) / 4, m = y / d, v = w * m * a + g, u.globalAlpha = 1 - Math.abs(m), u.drawImage(t, v, g), l.drawImage(n, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, n.width, n.height);
          for (y = -d; y <= d; y++)
            g = (Math.random() - 0.5) / 4, m = y / d, v = w * m * i + g, u.globalAlpha = 1 - Math.abs(m), u.drawImage(t, g, v), l.drawImage(n, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, n.width, n.height);
          e.ctx.drawImage(t, 0, 0);
          var M = e.ctx.getImageData(0, 0, t.width, t.height);
          return l.globalAlpha = 1, l.clearRect(0, 0, t.width, t.height), M;
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            delta: e.getUniformLocation(r, "uDelta")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          var t = this.chooseRightDelta();
          e.uniform2fv(r.delta, t);
        },
        /**
         * choose right value of image percentage to blur with
         * @returns {Array} a numeric array with delta values
         */
        chooseRightDelta: function() {
          var e = 1, r = [0, 0], t;
          return this.horizontal ? this.aspectRatio > 1 && (e = 1 / this.aspectRatio) : this.aspectRatio < 1 && (e = this.aspectRatio), t = e * this.blur * 0.12, this.horizontal ? r[0] = t : r[1] = t, r;
        }
      }
    ), h.Blur.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Gamma = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Gamma.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "Gamma",
        fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`,
        /**
         * Gamma array value, from 0.01 to 2.2.
         * @param {Array} gamma
         * @default
         */
        gamma: [1, 1, 1],
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "gamma",
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.gamma = [1, 1, 1], h.BaseFilter.prototype.initialize.call(this, e);
        },
        /**
         * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
        applyTo2d: function(e) {
          var r = e.imageData, t = r.data, n = this.gamma, a = t.length, i = 1 / n[0], l = 1 / n[1], u = 1 / n[2], d;
          for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), d = 0, a = 256; d < a; d++)
            this.rVals[d] = Math.pow(d / 255, i) * 255, this.gVals[d] = Math.pow(d / 255, l) * 255, this.bVals[d] = Math.pow(d / 255, u) * 255;
          for (d = 0, a = t.length; d < a; d += 4)
            t[d] = this.rVals[t[d]], t[d + 1] = this.gVals[t[d + 1]], t[d + 2] = this.bVals[t[d + 2]];
        },
        /**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
        getUniformLocations: function(e, r) {
          return {
            uGamma: e.getUniformLocation(r, "uGamma")
          };
        },
        /**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
        sendUniformData: function(e, r) {
          e.uniform3fv(r.uGamma, this.gamma);
        }
      }
    ), s.Image.filters.Gamma.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.Composed = o(
      h.BaseFilter,
      /** @lends fabric.Image.filters.Composed.prototype */
      {
        type: "Composed",
        /**
         * A non sparse array of filters to apply
         */
        subFilters: [],
        /**
         * Constructor
         * @param {Object} [options] Options object
         */
        initialize: function(e) {
          this.callSuper("initialize", e), this.subFilters = this.subFilters.slice(0);
        },
        /**
         * Apply this container's filters to the input image provided.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be applied.
         */
        applyTo: function(e) {
          e.passes += this.subFilters.length - 1, this.subFilters.forEach(function(r) {
            r.applyTo(e);
          });
        },
        /**
         * Serialize this filter into JSON.
         *
         * @returns {Object} A JSON representation of this filter.
         */
        toObject: function() {
          return s.util.object.extend(this.callSuper("toObject"), {
            subFilters: this.subFilters.map(function(e) {
              return e.toObject();
            })
          });
        },
        isNeutralState: function() {
          return !this.subFilters.some(function(e) {
            return !e.isNeutralState();
          });
        }
      }
    ), s.Image.filters.Composed.fromObject = function(e, r) {
      var t = e.subFilters || [], n = t.map(function(i) {
        return new s.Image.filters[i.type](i);
      }), a = new s.Image.filters.Composed({ subFilters: n });
      return r && r(a), a;
    };
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.Image.filters, o = s.util.createClass;
    h.HueRotation = o(
      h.ColorMatrix,
      /** @lends fabric.Image.filters.HueRotation.prototype */
      {
        /**
         * Filter type
         * @param {String} type
         * @default
         */
        type: "HueRotation",
        /**
         * HueRotation value, from -1 to 1.
         * the unit is radians
         * @param {Number} myParameter
         * @default
         */
        rotation: 0,
        /**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
        mainParameter: "rotation",
        calculateMatrix: function() {
          var e = this.rotation * Math.PI, r = s.util.cos(e), t = s.util.sin(e), n = 1 / 3, a = Math.sqrt(n) * t, i = 1 - r;
          this.matrix = [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ], this.matrix[0] = r + i / 3, this.matrix[1] = n * i - a, this.matrix[2] = n * i + a, this.matrix[5] = n * i + a, this.matrix[6] = r + n * i, this.matrix[7] = n * i - a, this.matrix[10] = n * i - a, this.matrix[11] = n * i + a, this.matrix[12] = r + n * i;
        },
        /**
         * HueRotation isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
        isNeutralState: function(e) {
          return this.calculateMatrix(), h.BaseFilter.prototype.isNeutralState.call(this, e);
        },
        /**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
        applyTo: function(e) {
          this.calculateMatrix(), h.BaseFilter.prototype.applyTo.call(this, e);
        }
      }
    ), s.Image.filters.HueRotation.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(Z), function(c) {
    var s = c.fabric || (c.fabric = {}), h = s.util.object.clone;
    if (s.Text) {
      s.warn("fabric.Text is already defined");
      return;
    }
    var o = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
    s.Text = s.util.createClass(
      s.Object,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Properties which when set cause object to change dimensions
         * @type Array
         * @private
         */
        _dimensionAffectingProps: [
          "fontSize",
          "fontWeight",
          "fontFamily",
          "fontStyle",
          "lineHeight",
          "text",
          "charSpacing",
          "textAlign",
          "styles",
          "path",
          "pathStartOffset",
          "pathSide",
          "pathAlign"
        ],
        /**
         * @private
         */
        _reNewline: /\r?\n/,
        /**
         * Use this regular expression to filter for whitespaces that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpacesAndTabs: /[ \t\r]/g,
        /**
         * Use this regular expression to filter for whitespace that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reSpaceAndTab: /[ \t\r]/,
        /**
         * Use this regular expression to filter consecutive groups of non spaces.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
        _reWords: /\S+/g,
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "text",
        /**
         * Font size (in pixels)
         * @type Number
         * @default
         */
        fontSize: 40,
        /**
         * Font weight (e.g. bold, normal, 400, 600, 800)
         * @type {(Number|String)}
         * @default
         */
        fontWeight: "normal",
        /**
         * Font family
         * @type String
         * @default
         */
        fontFamily: "Times New Roman",
        /**
         * Text decoration underline.
         * @type Boolean
         * @default
         */
        underline: !1,
        /**
         * Text decoration overline.
         * @type Boolean
         * @default
         */
        overline: !1,
        /**
         * Text decoration linethrough.
         * @type Boolean
         * @default
         */
        linethrough: !1,
        /**
         * Text alignment. Possible values: "left", "center", "right", "justify",
         * "justify-left", "justify-center" or "justify-right".
         * @type String
         * @default
         */
        textAlign: "left",
        /**
         * Font style . Possible values: "", "normal", "italic" or "oblique".
         * @type String
         * @default
         */
        fontStyle: "normal",
        /**
         * Line height
         * @type Number
         * @default
         */
        lineHeight: 1.16,
        /**
         * Superscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        superscript: {
          size: 0.6,
          // fontSize factor
          baseline: -0.35
          // baseline-shift factor (upwards)
        },
        /**
         * Subscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
        subscript: {
          size: 0.6,
          // fontSize factor
          baseline: 0.11
          // baseline-shift factor (downwards)
        },
        /**
         * Background color of text lines
         * @type String
         * @default
         */
        textBackgroundColor: "",
        /**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
        stateProperties: s.Object.prototype.stateProperties.concat(o),
        /**
         * List of properties to consider when checking if cache needs refresh
         * @type Array
         */
        cacheProperties: s.Object.prototype.cacheProperties.concat(o),
        /**
         * When defined, an object is rendered via stroke and this property specifies its color.
         * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
         * @type String
         * @default
         */
        stroke: null,
        /**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
         * @type fabric.Shadow
         * @default
         */
        shadow: null,
        /**
         * fabric.Path that the text should follow.
         * since 4.6.0 the path will be drawn automatically.
         * if you want to make the path visible, give it a stroke and strokeWidth or fill value
         * if you want it to be hidden, assign visible = false to the path.
         * This feature is in BETA, and SVG import/export is not yet supported.
         * @type fabric.Path
         * @example
         * var textPath = new fabric.Text('Text on a path', {
         *     top: 150,
         *     left: 150,
         *     textAlign: 'center',
         *     charSpacing: -50,
         *     path: new fabric.Path('M 0 0 C 50 -100 150 -100 200 0', {
         *         strokeWidth: 1,
         *         visible: false
         *     }),
         *     pathSide: 'left',
         *     pathStartOffset: 0
         * });
         * @default
         */
        path: null,
        /**
         * Offset amount for text path starting position
         * Only used when text has a path
         * @type Number
         * @default
         */
        pathStartOffset: 0,
        /**
         * Which side of the path the text should be drawn on.
         * Only used when text has a path
         * @type {String} 'left|right'
         * @default
         */
        pathSide: "left",
        /**
         * How text is aligned to the path. This property determines
         * the perpendicular position of each character relative to the path.
         * (one of "baseline", "center", "ascender", "descender")
         * This feature is in BETA, and its behavior may change
         * @type String
         * @default
         */
        pathAlign: "baseline",
        /**
         * @private
         */
        _fontSizeFraction: 0.222,
        /**
         * @private
         */
        offsets: {
          underline: 0.1,
          linethrough: -0.315,
          overline: -0.88
        },
        /**
         * Text Line proportion to font Size (in pixels)
         * @type Number
         * @default
         */
        _fontSizeMult: 1.13,
        /**
         * additional space between characters
         * expressed in thousands of em unit
         * @type Number
         * @default
         */
        charSpacing: 0,
        /**
         * Object containing character styles - top-level properties -> line numbers,
         * 2nd-level properties - character numbers
         * @type Object
         * @default
         */
        styles: null,
        /**
         * Reference to a context to measure text char or couple of chars
         * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
         * once created it will be referenced on fabric._measuringContext to avoid creating a canvas for every
         * text object created.
         * @type {CanvasRenderingContext2D}
         * @default
         */
        _measuringContext: null,
        /**
         * Baseline shift, styles only, keep at 0 for the main text object
         * @type {Number}
         * @default
         */
        deltaY: 0,
        /**
         * WARNING: EXPERIMENTAL. NOT SUPPORTED YET
         * determine the direction of the text.
         * This has to be set manually together with textAlign and originX for proper
         * experience.
         * some interesting link for the future
         * https://www.w3.org/International/questions/qa-bidi-unicode-controls
         * @since 4.5.0
         * @type {String} 'ltr|rtl'
         * @default
         */
        direction: "ltr",
        /**
         * Array of properties that define a style unit (of 'styles').
         * @type {Array}
         * @default
         */
        _styleProperties: [
          "stroke",
          "strokeWidth",
          "fill",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "fontStyle",
          "underline",
          "overline",
          "linethrough",
          "deltaY",
          "textBackgroundColor"
        ],
        /**
         * contains characters bounding boxes
         */
        __charBounds: [],
        /**
         * use this size when measuring text. To avoid IE11 rounding errors
         * @type {Number}
         * @default
         * @readonly
         * @private
         */
        CACHE_FONT_SIZE: 400,
        /**
         * contains the min text width to avoid getting 0
         * @type {Number}
         * @default
         */
        MIN_TEXT_WIDTH: 2,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        initialize: function(e, r) {
          this.styles = r ? r.styles || {} : {}, this.text = e, this.__skipDimension = !0, this.callSuper("initialize", r), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
        },
        /**
         * If text has a path, it will add the extra information needed
         * for path and text calculations
         * @return {fabric.Text} thisArg
         */
        setPathInfo: function() {
          var e = this.path;
          e && (e.segmentsInfo = s.util.getPathSegmentsInfo(e.path));
        },
        /**
         * Return a context for measurement of text string.
         * if created it gets stored for reuse
         * this is for internal use, please do not use it
         * @private
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
        getMeasuringContext: function() {
          return s._measuringContext || (s._measuringContext = this.canvas && this.canvas.contextCache || s.util.createCanvasElement().getContext("2d")), s._measuringContext;
        },
        /**
         * @private
         * Divides text into lines of text and lines of graphemes.
         */
        _splitText: function() {
          var e = this._splitTextIntoLines(this.text);
          return this.textLines = e.lines, this._textLines = e.graphemeLines, this._unwrappedTextLines = e._unwrappedLines, this._text = e.graphemeText, e;
        },
        /**
         * Initialize or update text dimensions.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         */
        initDimensions: function() {
          this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
        },
        /**
         * Enlarge space boxes and shift the others
         */
        enlargeSpaces: function() {
          for (var e, r, t, n, a, i, l, u = 0, d = this._textLines.length; u < d; u++)
            if (!(this.textAlign !== "justify" && (u === d - 1 || this.isEndOfWrapping(u))) && (n = 0, a = this._textLines[u], r = this.getLineWidth(u), r < this.width && (l = this.textLines[u].match(this._reSpacesAndTabs)))) {
              t = l.length, e = (this.width - r) / t;
              for (var g = 0, m = a.length; g <= m; g++)
                i = this.__charBounds[u][g], this._reSpaceAndTab.test(a[g]) ? (i.width += e, i.kernedWidth += e, i.left += n, n += e) : i.left += n;
            }
        },
        /**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @return {Boolean}
         */
        isEndOfWrapping: function(e) {
          return e === this._textLines.length - 1;
        },
        /**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * It return always for text and Itext.
         * @return Number
         */
        missingNewlineOffset: function() {
          return 1;
        },
        /**
         * Returns string representation of an instance
         * @return {String} String representation of text object
         */
        toString: function() {
          return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
        },
        /**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @param {Object} dim.x width of object to be cached
         * @param {Object} dim.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
        _getCacheCanvasDimensions: function() {
          var e = this.callSuper("_getCacheCanvasDimensions"), r = this.fontSize;
          return e.width += r * e.zoomX, e.height += r * e.zoomY, e;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(e) {
          var r = this.path;
          r && !r.isNotVisible() && r._render(e), this._setTextStyles(e), this._renderTextLinesBackground(e), this._renderTextDecoration(e, "underline"), this._renderText(e), this._renderTextDecoration(e, "overline"), this._renderTextDecoration(e, "linethrough");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderText: function(e) {
          this.paintFirst === "stroke" ? (this._renderTextStroke(e), this._renderTextFill(e)) : (this._renderTextFill(e), this._renderTextStroke(e));
        },
        /**
         * Set the font parameter of the context with the object properties or with charStyle
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [charStyle] object with font style properties
         * @param {String} [charStyle.fontFamily] Font Family
         * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
         * @param {String} [charStyle.fontWeight] Font weight
         * @param {String} [charStyle.fontStyle] Font style (italic|normal)
         */
        _setTextStyles: function(e, r, t) {
          if (e.textBaseline = "alphabetical", this.path)
            switch (this.pathAlign) {
              case "center":
                e.textBaseline = "middle";
                break;
              case "ascender":
                e.textBaseline = "top";
                break;
              case "descender":
                e.textBaseline = "bottom";
                break;
            }
          e.font = this._getFontDeclaration(r, t);
        },
        /**
         * calculate and return the text Width measuring each line.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {Number} Maximum width of fabric.Text object
         */
        calcTextWidth: function() {
          for (var e = this.getLineWidth(0), r = 1, t = this._textLines.length; r < t; r++) {
            var n = this.getLineWidth(r);
            n > e && (e = n);
          }
          return e;
        },
        /**
         * @private
         * @param {String} method Method name ("fillText" or "strokeText")
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Text to render
         * @param {Number} left Left position of text
         * @param {Number} top Top position of text
         * @param {Number} lineIndex Index of a line in a text
         */
        _renderTextLine: function(e, r, t, n, a, i) {
          this._renderChars(e, r, t, n, a, i);
        },
        /**
         * Renders the text background for lines, taking care of style
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextLinesBackground: function(e) {
          if (!(!this.textBackgroundColor && !this.styleHas("textBackgroundColor"))) {
            for (var r, t, n = e.fillStyle, a, i, l = this._getLeftOffset(), u = this._getTopOffset(), d = 0, g = 0, m, v, y = this.path, w, M = 0, X = this._textLines.length; M < X; M++) {
              if (r = this.getHeightOfLine(M), !this.textBackgroundColor && !this.styleHas("textBackgroundColor", M)) {
                u += r;
                continue;
              }
              a = this._textLines[M], t = this._getLineLeftOffset(M), g = 0, d = 0, i = this.getValueOfPropertyAt(M, 0, "textBackgroundColor");
              for (var W = 0, V = a.length; W < V; W++)
                m = this.__charBounds[M][W], v = this.getValueOfPropertyAt(M, W, "textBackgroundColor"), y ? (e.save(), e.translate(m.renderLeft, m.renderTop), e.rotate(m.angle), e.fillStyle = v, v && e.fillRect(
                  -m.width / 2,
                  -r / this.lineHeight * (1 - this._fontSizeFraction),
                  m.width,
                  r / this.lineHeight
                ), e.restore()) : v !== i ? (w = l + t + d, this.direction === "rtl" && (w = this.width - w - g), e.fillStyle = i, i && e.fillRect(
                  w,
                  u,
                  g,
                  r / this.lineHeight
                ), d = m.left, g = m.width, i = v) : g += m.kernedWidth;
              v && !y && (w = l + t + d, this.direction === "rtl" && (w = this.width - w - g), e.fillStyle = v, e.fillRect(
                w,
                u,
                g,
                r / this.lineHeight
              )), u += r;
            }
            e.fillStyle = n, this._removeShadow(e);
          }
        },
        /**
         * @private
         * @param {Object} decl style declaration for cache
         * @param {String} decl.fontFamily fontFamily
         * @param {String} decl.fontStyle fontStyle
         * @param {String} decl.fontWeight fontWeight
         * @return {Object} reference to cache
         */
        getFontCache: function(e) {
          var r = e.fontFamily.toLowerCase();
          s.charWidthsCache[r] || (s.charWidthsCache[r] = {});
          var t = s.charWidthsCache[r], n = e.fontStyle.toLowerCase() + "_" + (e.fontWeight + "").toLowerCase();
          return t[n] || (t[n] = {}), t[n];
        },
        /**
         * measure and return the width of a single character.
         * possibly overridden to accommodate different measure logic or
         * to hook some external lib for character measurement
         * @private
         * @param {String} _char, char to be measured
         * @param {Object} charStyle style of char to be measured
         * @param {String} [previousChar] previous char
         * @param {Object} [prevCharStyle] style of previous char
         */
        _measureChar: function(e, r, t, n) {
          var a = this.getFontCache(r), i = this._getFontDeclaration(r), l = this._getFontDeclaration(n), u = t + e, d = i === l, g, m, v, y = r.fontSize / this.CACHE_FONT_SIZE, w;
          if (t && a[t] !== void 0 && (v = a[t]), a[e] !== void 0 && (w = g = a[e]), d && a[u] !== void 0 && (m = a[u], w = m - v), g === void 0 || v === void 0 || m === void 0) {
            var M = this.getMeasuringContext();
            this._setTextStyles(M, r, !0);
          }
          return g === void 0 && (w = g = M.measureText(e).width, a[e] = g), v === void 0 && d && t && (v = M.measureText(t).width, a[t] = v), d && m === void 0 && (m = M.measureText(u).width, a[u] = m, w = m - v), { width: g * y, kernedWidth: w * y };
        },
        /**
         * Computes height of character at given position
         * @param {Number} line the line index number
         * @param {Number} _char the character index number
         * @return {Number} fontSize of the character
         */
        getHeightOfChar: function(e, r) {
          return this.getValueOfPropertyAt(e, r, "fontSize");
        },
        /**
         * measure a text line measuring all characters.
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        measureLine: function(e) {
          var r = this._measureLine(e);
          return this.charSpacing !== 0 && (r.width -= this._getWidthOfCharSpacing()), r.width < 0 && (r.width = 0), r;
        },
        /**
         * measure every grapheme of a line, populating __charBounds
         * @param {Number} lineIndex
         * @return {Object} object.width total width of characters
         * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
         */
        _measureLine: function(e) {
          var r = 0, t, n, a = this._textLines[e], i, l, u = 0, d = new Array(a.length), g = 0, m, v, y = this.path, w = this.pathSide === "right";
          for (this.__charBounds[e] = d, t = 0; t < a.length; t++)
            n = a[t], l = this._getGraphemeBox(n, e, t, i), d[t] = l, r += l.kernedWidth, i = n;
          if (d[t] = {
            left: l ? l.left + l.width : 0,
            width: 0,
            kernedWidth: 0,
            height: this.fontSize
          }, y) {
            switch (v = y.segmentsInfo[y.segmentsInfo.length - 1].length, m = s.util.getPointOnPath(y.path, 0, y.segmentsInfo), m.x += y.pathOffset.x, m.y += y.pathOffset.y, this.textAlign) {
              case "left":
                g = w ? v - r : 0;
                break;
              case "center":
                g = (v - r) / 2;
                break;
              case "right":
                g = w ? 0 : v - r;
                break;
            }
            for (g += this.pathStartOffset * (w ? -1 : 1), t = w ? a.length - 1 : 0; w ? t >= 0 : t < a.length; w ? t-- : t++)
              l = d[t], g > v ? g %= v : g < 0 && (g += v), this._setGraphemeOnPath(g, l, m), g += l.kernedWidth;
          }
          return { width: r, numOfSpaces: u };
        },
        /**
         * Calculate the angle  and the left,top position of the char that follow a path.
         * It appends it to graphemeInfo to be reused later at rendering
         * @private
         * @param {Number} positionInPath to be measured
         * @param {Object} graphemeInfo current grapheme box information
         * @param {Object} startingPoint position of the point
         */
        _setGraphemeOnPath: function(e, r, t) {
          var n = e + r.kernedWidth / 2, a = this.path, i = s.util.getPointOnPath(a.path, n, a.segmentsInfo);
          r.renderLeft = i.x - t.x, r.renderTop = i.y - t.y, r.angle = i.angle + (this.pathSide === "right" ? Math.PI : 0);
        },
        /**
         * Measure and return the info of a single grapheme.
         * needs the the info of previous graphemes already filled
         * @private
         * @param {String} grapheme to be measured
         * @param {Number} lineIndex index of the line where the char is
         * @param {Number} charIndex position in the line
         * @param {String} [prevGrapheme] character preceding the one to be measured
         */
        _getGraphemeBox: function(e, r, t, n, a) {
          var i = this.getCompleteStyleDeclaration(r, t), l = n ? this.getCompleteStyleDeclaration(r, t - 1) : {}, u = this._measureChar(e, i, n, l), d = u.kernedWidth, g = u.width, m;
          this.charSpacing !== 0 && (m = this._getWidthOfCharSpacing(), g += m, d += m);
          var v = {
            width: g,
            left: 0,
            height: i.fontSize,
            kernedWidth: d,
            deltaY: i.deltaY
          };
          if (t > 0 && !a) {
            var y = this.__charBounds[r][t - 1];
            v.left = y.left + y.width + u.kernedWidth - u.width;
          }
          return v;
        },
        /**
         * Calculate height of line at 'lineIndex'
         * @param {Number} lineIndex index of line to calculate
         * @return {Number}
         */
        getHeightOfLine: function(e) {
          if (this.__lineHeights[e])
            return this.__lineHeights[e];
          for (var r = this._textLines[e], t = this.getHeightOfChar(e, 0), n = 1, a = r.length; n < a; n++)
            t = Math.max(this.getHeightOfChar(e, n), t);
          return this.__lineHeights[e] = t * this.lineHeight * this._fontSizeMult;
        },
        /**
         * Calculate text box height
         */
        calcTextHeight: function() {
          for (var e, r = 0, t = 0, n = this._textLines.length; t < n; t++)
            e = this.getHeightOfLine(t), r += t === n - 1 ? e / this.lineHeight : e;
          return r;
        },
        /**
         * @private
         * @return {Number} Left offset
         */
        _getLeftOffset: function() {
          return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
        },
        /**
         * @private
         * @return {Number} Top offset
         */
        _getTopOffset: function() {
          return -this.height / 2;
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} method Method name ("fillText" or "strokeText")
         */
        _renderTextCommon: function(e, r) {
          e.save();
          for (var t = 0, n = this._getLeftOffset(), a = this._getTopOffset(), i = 0, l = this._textLines.length; i < l; i++) {
            var u = this.getHeightOfLine(i), d = u / this.lineHeight, g = this._getLineLeftOffset(i);
            this._renderTextLine(
              r,
              e,
              this._textLines[i],
              n + g,
              a + t + d,
              i
            ), t += u;
          }
          e.restore();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextFill: function(e) {
          !this.fill && !this.styleHas("fill") || this._renderTextCommon(e, "fillText");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextStroke: function(e) {
          (!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(e), e.save(), this._setLineDash(e, this.strokeDashArray), e.beginPath(), this._renderTextCommon(e, "strokeText"), e.closePath(), e.restore());
        },
        /**
         * @private
         * @param {String} method fillText or strokeText.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} line Content of the line, splitted in an array by grapheme
         * @param {Number} left
         * @param {Number} top
         * @param {Number} lineIndex
         */
        _renderChars: function(e, r, t, n, a, i) {
          var l = this.getHeightOfLine(i), u = this.textAlign.indexOf("justify") !== -1, d, g, m = "", v, y = 0, w, M = this.path, X = !u && this.charSpacing === 0 && this.isEmptyStyles(i) && !M, W = this.direction === "ltr", V = this.direction === "ltr" ? 1 : -1, N, H = r.canvas.getAttribute("dir");
          if (r.save(), H !== this.direction && (r.canvas.setAttribute("dir", W ? "ltr" : "rtl"), r.direction = W ? "ltr" : "rtl", r.textAlign = W ? "left" : "right"), a -= l * this._fontSizeFraction / this.lineHeight, X) {
            this._renderChar(e, r, i, 0, t.join(""), n, a, l), r.restore();
            return;
          }
          for (var z = 0, q = t.length - 1; z <= q; z++)
            w = z === q || this.charSpacing || M, m += t[z], v = this.__charBounds[i][z], y === 0 ? (n += V * (v.kernedWidth - v.width), y += v.width) : y += v.kernedWidth, u && !w && this._reSpaceAndTab.test(t[z]) && (w = !0), w || (d = d || this.getCompleteStyleDeclaration(i, z), g = this.getCompleteStyleDeclaration(i, z + 1), w = s.util.hasStyleChanged(d, g, !1)), w && (M ? (r.save(), r.translate(v.renderLeft, v.renderTop), r.rotate(v.angle), this._renderChar(e, r, i, z, m, -y / 2, 0, l), r.restore()) : (N = n, this._renderChar(e, r, i, z, m, N, a, l)), m = "", d = g, n += V * y, y = 0);
          r.restore();
        },
        /**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {fabric.Gradient} filler a fabric gradient instance
         * @return {CanvasPattern} a pattern to use as fill/stroke style
         */
        _applyPatternGradientTransformText: function(e) {
          var r = s.util.createCanvasElement(), t, n = this.width + this.strokeWidth, a = this.height + this.strokeWidth;
          return r.width = n, r.height = a, t = r.getContext("2d"), t.beginPath(), t.moveTo(0, 0), t.lineTo(n, 0), t.lineTo(n, a), t.lineTo(0, a), t.closePath(), t.translate(n / 2, a / 2), t.fillStyle = e.toLive(t), this._applyPatternGradientTransform(t, e), t.fill(), t.createPattern(r, "no-repeat");
        },
        handleFiller: function(e, r, t) {
          var n, a;
          return t.toLive ? t.gradientUnits === "percentage" || t.gradientTransform || t.patternTransform ? (n = -this.width / 2, a = -this.height / 2, e.translate(n, a), e[r] = this._applyPatternGradientTransformText(t), { offsetX: n, offsetY: a }) : (e[r] = t.toLive(e, this), this._applyPatternGradientTransform(e, t)) : (e[r] = t, { offsetX: 0, offsetY: 0 });
        },
        _setStrokeStyles: function(e, r) {
          return e.lineWidth = r.strokeWidth, e.lineCap = this.strokeLineCap, e.lineDashOffset = this.strokeDashOffset, e.lineJoin = this.strokeLineJoin, e.miterLimit = this.strokeMiterLimit, this.handleFiller(e, "strokeStyle", r.stroke);
        },
        _setFillStyles: function(e, r) {
          return this.handleFiller(e, "fillStyle", r.fill);
        },
        /**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {String} _char
         * @param {Number} left Left coordinate
         * @param {Number} top Top coordinate
         * @param {Number} lineHeight Height of the line
         */
        _renderChar: function(e, r, t, n, a, i, l) {
          var u = this._getStyleDeclaration(t, n), d = this.getCompleteStyleDeclaration(t, n), g = e === "fillText" && d.fill, m = e === "strokeText" && d.stroke && d.strokeWidth, v, y;
          !m && !g || (r.save(), g && (v = this._setFillStyles(r, d)), m && (y = this._setStrokeStyles(r, d)), r.font = this._getFontDeclaration(d), u && u.textBackgroundColor && this._removeShadow(r), u && u.deltaY && (l += u.deltaY), g && r.fillText(a, i - v.offsetX, l - v.offsetY), m && r.strokeText(a, i - y.offsetX, l - y.offsetY), r.restore());
        },
        /**
         * Turns the character into a 'superior figure' (i.e. 'superscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSuperscript: function(e, r) {
          return this._setScript(e, r, this.superscript);
        },
        /**
         * Turns the character into an 'inferior figure' (i.e. 'subscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        setSubscript: function(e, r) {
          return this._setScript(e, r, this.subscript);
        },
        /**
         * Applies 'schema' at given position
         * @private
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @param {Number} schema
         * @returns {fabric.Text} thisArg
         * @chainable
         */
        _setScript: function(e, r, t) {
          var n = this.get2DCursorLocation(e, !0), a = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "fontSize"), i = this.getValueOfPropertyAt(n.lineIndex, n.charIndex, "deltaY"), l = { fontSize: a * t.size, deltaY: i + a * t.baseline };
          return this.setSelectionStyles(l, e, r), this;
        },
        /**
         * @private
         * @param {Number} lineIndex index text line
         * @return {Number} Line left offset
         */
        _getLineLeftOffset: function(e) {
          var r = this.getLineWidth(e), t = this.width - r, n = this.textAlign, a = this.direction, l, i = 0, l = this.isEndOfWrapping(e);
          return n === "justify" || n === "justify-center" && !l || n === "justify-right" && !l || n === "justify-left" && !l ? 0 : (n === "center" && (i = t / 2), n === "right" && (i = t), n === "justify-center" && (i = t / 2), n === "justify-right" && (i = t), a === "rtl" && (i -= t), i);
        },
        /**
         * @private
         */
        _clearCache: function() {
          this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
        },
        /**
         * @private
         */
        _shouldClearDimensionCache: function() {
          var e = this._forceClearCache;
          return e || (e = this.hasStateChanged("_dimensionAffectingProps")), e && (this.dirty = !0, this._forceClearCache = !1), e;
        },
        /**
         * Measure a single line given its index. Used to calculate the initial
         * text bounding box. The values are calculated and stored in __lineWidths cache.
         * @private
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
        getLineWidth: function(e) {
          if (this.__lineWidths[e] !== void 0)
            return this.__lineWidths[e];
          var r = this.measureLine(e), t = r.width;
          return this.__lineWidths[e] = t, t;
        },
        _getWidthOfCharSpacing: function() {
          return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
        },
        /**
         * Retrieves the value of property at given character position
         * @param {Number} lineIndex the line number
         * @param {Number} charIndex the character number
         * @param {String} property the property name
         * @returns the value of 'property'
         */
        getValueOfPropertyAt: function(e, r, t) {
          var n = this._getStyleDeclaration(e, r);
          return n && typeof n[t] < "u" ? n[t] : this[t];
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _renderTextDecoration: function(e, r) {
          if (!(!this[r] && !this.styleHas(r))) {
            for (var t, n, a, i, l, u, d, g, m = this._getLeftOffset(), v = this._getTopOffset(), y, w, M, X, W, V, N, H, z = this.path, q = this._getWidthOfCharSpacing(), J = this.offsets[r], K = 0, p = this._textLines.length; K < p; K++) {
              if (t = this.getHeightOfLine(K), !this[r] && !this.styleHas(r, K)) {
                v += t;
                continue;
              }
              d = this._textLines[K], V = t / this.lineHeight, i = this._getLineLeftOffset(K), w = 0, M = 0, g = this.getValueOfPropertyAt(K, 0, r), H = this.getValueOfPropertyAt(K, 0, "fill"), y = v + V * (1 - this._fontSizeFraction), n = this.getHeightOfChar(K, 0), l = this.getValueOfPropertyAt(K, 0, "deltaY");
              for (var b = 0, x = d.length; b < x; b++)
                if (X = this.__charBounds[K][b], W = this.getValueOfPropertyAt(K, b, r), N = this.getValueOfPropertyAt(K, b, "fill"), a = this.getHeightOfChar(K, b), u = this.getValueOfPropertyAt(K, b, "deltaY"), z && W && N)
                  e.save(), e.fillStyle = H, e.translate(X.renderLeft, X.renderTop), e.rotate(X.angle), e.fillRect(
                    -X.kernedWidth / 2,
                    J * a + u,
                    X.kernedWidth,
                    this.fontSize / 15
                  ), e.restore();
                else if ((W !== g || N !== H || a !== n || u !== l) && M > 0) {
                  var S = m + i + w;
                  this.direction === "rtl" && (S = this.width - S - M), g && H && (e.fillStyle = H, e.fillRect(
                    S,
                    y + J * n + l,
                    M,
                    this.fontSize / 15
                  )), w = X.left, M = X.width, g = W, H = N, n = a, l = u;
                } else
                  M += X.kernedWidth;
              var S = m + i + w;
              this.direction === "rtl" && (S = this.width - S - M), e.fillStyle = N, W && N && e.fillRect(
                S,
                y + J * n + l,
                M - q,
                this.fontSize / 15
              ), v += t;
            }
            this._removeShadow(e);
          }
        },
        /**
         * return font declaration string for canvas context
         * @param {Object} [styleObject] object
         * @returns {String} font declaration formatted for canvas context.
         */
        _getFontDeclaration: function(e, r) {
          var t = e || this, n = this.fontFamily, a = s.Text.genericFonts.indexOf(n.toLowerCase()) > -1, i = n === void 0 || n.indexOf("'") > -1 || n.indexOf(",") > -1 || n.indexOf('"') > -1 || a ? t.fontFamily : '"' + t.fontFamily + '"';
          return [
            // node-canvas needs "weight style", while browsers need "style weight"
            // verify if this can be fixed in JSDOM
            s.isLikelyNode ? t.fontWeight : t.fontStyle,
            s.isLikelyNode ? t.fontStyle : t.fontWeight,
            r ? this.CACHE_FONT_SIZE + "px" : t.fontSize + "px",
            i
          ].join(" ");
        },
        /**
         * Renders text instance on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(e) {
          this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", e)));
        },
        /**
         * Returns the text as an array of lines.
         * @param {String} text text to split
         * @returns {Array} Lines in the text
         */
        _splitTextIntoLines: function(e) {
          for (var r = e.split(this._reNewline), t = new Array(r.length), n = [`
`], a = [], i = 0; i < r.length; i++)
            t[i] = s.util.string.graphemeSplit(r[i]), a = a.concat(t[i], n);
          return a.pop(), { _unwrappedLines: t, lines: r, graphemeText: a, graphemeLines: t };
        },
        /**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
        toObject: function(e) {
          var r = o.concat(e), t = this.callSuper("toObject", r);
          return t.styles = s.util.stylesToArray(this.styles, this.text), t.path && (t.path = this.path.toObject()), t;
        },
        /**
         * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
         * @param {String|Object} key Property name or object (if object, iterate over the object properties)
         * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        set: function(e, r) {
          this.callSuper("set", e, r);
          var t = !1, n = !1;
          if (typeof e == "object")
            for (var a in e)
              a === "path" && this.setPathInfo(), t = t || this._dimensionAffectingProps.indexOf(a) !== -1, n = n || a === "path";
          else
            t = this._dimensionAffectingProps.indexOf(e) !== -1, n = e === "path";
          return n && this.setPathInfo(), t && (this.initDimensions(), this.setCoords()), this;
        },
        /**
         * Returns complexity of an instance
         * @return {Number} complexity
         */
        complexity: function() {
          return 1;
        }
      }
    ), s.Text.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(
      "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")
    ), s.Text.DEFAULT_SVG_FONT_SIZE = 16, s.Text.fromElement = function(e, r, t) {
      if (!e)
        return r(null);
      var n = s.parseAttributes(e, s.Text.ATTRIBUTE_NAMES), a = n.textAnchor || "left";
      if (t = s.util.object.extend(t ? h(t) : {}, n), t.top = t.top || 0, t.left = t.left || 0, n.textDecoration) {
        var i = n.textDecoration;
        i.indexOf("underline") !== -1 && (t.underline = !0), i.indexOf("overline") !== -1 && (t.overline = !0), i.indexOf("line-through") !== -1 && (t.linethrough = !0), delete t.textDecoration;
      }
      "dx" in n && (t.left += n.dx), "dy" in n && (t.top += n.dy), "fontSize" in t || (t.fontSize = s.Text.DEFAULT_SVG_FONT_SIZE);
      var l = "";
      "textContent" in e ? l = e.textContent : "firstChild" in e && e.firstChild !== null && "data" in e.firstChild && e.firstChild.data !== null && (l = e.firstChild.data), l = l.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
      var u = t.strokeWidth;
      t.strokeWidth = 0;
      var d = new s.Text(l, t), g = d.getScaledHeight() / d.height, m = (d.height + d.strokeWidth) * d.lineHeight - d.height, v = m * g, y = d.getScaledHeight() + v, w = 0;
      a === "center" && (w = d.getScaledWidth() / 2), a === "right" && (w = d.getScaledWidth()), d.set({
        left: d.left - w,
        top: d.top - (y - d.fontSize * (0.07 + d._fontSizeFraction)) / d.lineHeight,
        strokeWidth: typeof u < "u" ? u : 1
      }), r(d);
    }, s.Text.fromObject = function(e, r) {
      var t = h(e), n = e.path;
      return delete t.path, s.Object._fromObject("Text", t, function(a) {
        a.styles = s.util.stylesFromArray(e.styles, e.text), n ? s.Object._fromObject("Path", n, function(i) {
          a.set("path", i), r(a);
        }, "path") : r(a);
      }, "text");
    }, s.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], s.util.createAccessors && s.util.createAccessors(s.Text);
  }(Z), function() {
    f.util.object.extend(
      f.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
        isEmptyStyles: function(c) {
          if (!this.styles || typeof c < "u" && !this.styles[c])
            return !0;
          var s = typeof c > "u" ? this.styles : { line: this.styles[c] };
          for (var h in s)
            for (var o in s[h])
              for (var e in s[h][o])
                return !1;
          return !0;
        },
        /**
         * Returns true if object has a style property or has it ina specified line
         * This function is used to detect if a text will use a particular property or not.
         * @param {String} property to check for
         * @param {Number} lineIndex to check the style on
         * @return {Boolean}
         */
        styleHas: function(c, s) {
          if (!this.styles || !c || c === "" || typeof s < "u" && !this.styles[s])
            return !1;
          var h = typeof s > "u" ? this.styles : { 0: this.styles[s] };
          for (var o in h)
            for (var e in h[o])
              if (typeof h[o][e][c] < "u")
                return !0;
          return !1;
        },
        /**
         * Check if characters in a text have a value for a property
         * whose value matches the textbox's value for that property.  If so,
         * the character-level property is deleted.  If the character
         * has no other properties, then it is also deleted.  Finally,
         * if the line containing that character has no other characters
         * then it also is deleted.
         *
         * @param {string} property The property to compare between characters and text.
         */
        cleanStyle: function(c) {
          if (!this.styles || !c || c === "")
            return !1;
          var s = this.styles, h = 0, o, e, r = !0, t = 0, n;
          for (var a in s) {
            o = 0;
            for (var i in s[a]) {
              var n = s[a][i], l = n.hasOwnProperty(c);
              h++, l ? (e ? n[c] !== e && (r = !1) : e = n[c], n[c] === this[c] && delete n[c]) : r = !1, Object.keys(n).length !== 0 ? o++ : delete s[a][i];
            }
            o === 0 && delete s[a];
          }
          for (var u = 0; u < this._textLines.length; u++)
            t += this._textLines[u].length;
          r && h === t && (this[c] = e, this.removeStyle(c));
        },
        /**
         * Remove a style property or properties from all individual character styles
         * in a text object.  Deletes the character style object if it contains no other style
         * props.  Deletes a line style object if it contains no other character styles.
         *
         * @param {String} props The property to remove from character styles.
         */
        removeStyle: function(c) {
          if (!(!this.styles || !c || c === "")) {
            var s = this.styles, h, o, e;
            for (o in s) {
              h = s[o];
              for (e in h)
                delete h[e][c], Object.keys(h[e]).length === 0 && delete h[e];
              Object.keys(h).length === 0 && delete s[o];
            }
          }
        },
        /**
         * @private
         */
        _extendStyles: function(c, s) {
          var h = this.get2DCursorLocation(c);
          this._getLineStyle(h.lineIndex) || this._setLineStyle(h.lineIndex), this._getStyleDeclaration(h.lineIndex, h.charIndex) || this._setStyleDeclaration(h.lineIndex, h.charIndex, {}), f.util.object.extend(this._getStyleDeclaration(h.lineIndex, h.charIndex), s);
        },
        /**
         * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
         * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
         * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. useful to manage styles.
         */
        get2DCursorLocation: function(c, s) {
          typeof c > "u" && (c = this.selectionStart);
          for (var h = s ? this._unwrappedTextLines : this._textLines, o = h.length, e = 0; e < o; e++) {
            if (c <= h[e].length)
              return {
                lineIndex: e,
                charIndex: c
              };
            c -= h[e].length + this.missingNewlineOffset(e);
          }
          return {
            lineIndex: e - 1,
            charIndex: h[e - 1].length < c ? h[e - 1].length : c
          };
        },
        /**
         * Gets style of a current selection/cursor (at the start position)
         * if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @param {Boolean} [complete] get full style or not
         * @return {Array} styles an array with one, zero or more Style objects
         */
        getSelectionStyles: function(c, s, h) {
          typeof c > "u" && (c = this.selectionStart || 0), typeof s > "u" && (s = this.selectionEnd || c);
          for (var o = [], e = c; e < s; e++)
            o.push(this.getStyleAtPosition(e, h));
          return o;
        },
        /**
         * Gets style of a current selection/cursor position
         * @param {Number} position  to get styles at
         * @param {Boolean} [complete] full style if true
         * @return {Object} style Style object at a specified index
         * @private
         */
        getStyleAtPosition: function(c, s) {
          var h = this.get2DCursorLocation(c), o = s ? this.getCompleteStyleDeclaration(h.lineIndex, h.charIndex) : this._getStyleDeclaration(h.lineIndex, h.charIndex);
          return o || {};
        },
        /**
         * Sets style of a current selection, if no selection exist, do not set anything.
         * @param {Object} [styles] Styles object
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @return {fabric.IText} thisArg
         * @chainable
         */
        setSelectionStyles: function(c, s, h) {
          typeof s > "u" && (s = this.selectionStart || 0), typeof h > "u" && (h = this.selectionEnd || s);
          for (var o = s; o < h; o++)
            this._extendStyles(o, c);
          return this._forceClearCache = !0, this;
        },
        /**
         * get the reference, not a clone, of the style object for a given character
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Object} style object
         */
        _getStyleDeclaration: function(c, s) {
          var h = this.styles && this.styles[c];
          return h ? h[s] : null;
        },
        /**
         * return a new object that contains all the style property for a character
         * the object returned is newly created
         * @param {Number} lineIndex of the line where the character is
         * @param {Number} charIndex position of the character on the line
         * @return {Object} style object
         */
        getCompleteStyleDeclaration: function(c, s) {
          for (var h = this._getStyleDeclaration(c, s) || {}, o = {}, e, r = 0; r < this._styleProperties.length; r++)
            e = this._styleProperties[r], o[e] = typeof h[e] > "u" ? this[e] : h[e];
          return o;
        },
        /**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
        _setStyleDeclaration: function(c, s, h) {
          this.styles[c][s] = h;
        },
        /**
         *
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
        _deleteStyleDeclaration: function(c, s) {
          delete this.styles[c][s];
        },
        /**
         * @param {Number} lineIndex
         * @return {Boolean} if the line exists or not
         * @private
         */
        _getLineStyle: function(c) {
          return !!this.styles[c];
        },
        /**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @private
         */
        _setLineStyle: function(c) {
          this.styles[c] = {};
        },
        /**
         * @param {Number} lineIndex
         * @private
         */
        _deleteLineStyle: function(c) {
          delete this.styles[c];
        }
      }
    );
  }(), function() {
    function c(s) {
      s.textDecoration && (s.textDecoration.indexOf("underline") > -1 && (s.underline = !0), s.textDecoration.indexOf("line-through") > -1 && (s.linethrough = !0), s.textDecoration.indexOf("overline") > -1 && (s.overline = !0), delete s.textDecoration);
    }
    f.IText = f.util.createClass(
      f.Text,
      f.Observable,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Type of an object
         * @type String
         * @default
         */
        type: "i-text",
        /**
         * Index where text selection starts (or where cursor is when there is no selection)
         * @type Number
         * @default
         */
        selectionStart: 0,
        /**
         * Index where text selection ends
         * @type Number
         * @default
         */
        selectionEnd: 0,
        /**
         * Color of text selection
         * @type String
         * @default
         */
        selectionColor: "rgba(17,119,255,0.3)",
        /**
         * Indicates whether text is in editing mode
         * @type Boolean
         * @default
         */
        isEditing: !1,
        /**
         * Indicates whether a text can be edited
         * @type Boolean
         * @default
         */
        editable: !0,
        /**
         * Border color of text object while it's in editing mode
         * @type String
         * @default
         */
        editingBorderColor: "rgba(102,153,255,0.25)",
        /**
         * Width of cursor (in px)
         * @type Number
         * @default
         */
        cursorWidth: 2,
        /**
         * Color of text cursor color in editing mode.
         * if not set (default) will take color from the text.
         * if set to a color value that fabric can understand, it will
         * be used instead of the color of the text at the current position.
         * @type String
         * @default
         */
        cursorColor: "",
        /**
         * Delay between cursor blink (in ms)
         * @type Number
         * @default
         */
        cursorDelay: 1e3,
        /**
         * Duration of cursor fadein (in ms)
         * @type Number
         * @default
         */
        cursorDuration: 600,
        /**
         * Indicates whether internal text char widths can be cached
         * @type Boolean
         * @default
         */
        caching: !0,
        /**
         * DOM container to append the hiddenTextarea.
         * An alternative to attaching to the document.body.
         * Useful to reduce laggish redraw of the full document.body tree and
         * also with modals event capturing that won't let the textarea take focus.
         * @type HTMLElement
         * @default
         */
        hiddenTextareaContainer: null,
        /**
         * @private
         */
        _reSpace: /\s|\n/,
        /**
         * @private
         */
        _currentCursorOpacity: 0,
        /**
         * @private
         */
        _selectionDirection: null,
        /**
         * @private
         */
        _abortCursorAnimation: !1,
        /**
         * @private
         */
        __widthOfSpace: [],
        /**
         * Helps determining when the text is in composition, so that the cursor
         * rendering is altered.
         */
        inCompositionMode: !1,
        /**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.IText} thisArg
         */
        initialize: function(s, h) {
          this.callSuper("initialize", s, h), this.initBehavior();
        },
        /**
         * Sets selection start (left boundary of a selection)
         * @param {Number} index Index to set selection start to
         */
        setSelectionStart: function(s) {
          s = Math.max(s, 0), this._updateAndFire("selectionStart", s);
        },
        /**
         * Sets selection end (right boundary of a selection)
         * @param {Number} index Index to set selection end to
         */
        setSelectionEnd: function(s) {
          s = Math.min(s, this.text.length), this._updateAndFire("selectionEnd", s);
        },
        /**
         * @private
         * @param {String} property 'selectionStart' or 'selectionEnd'
         * @param {Number} index new position of property
         */
        _updateAndFire: function(s, h) {
          this[s] !== h && (this._fireSelectionChanged(), this[s] = h), this._updateTextarea();
        },
        /**
         * Fires the even of selection changed
         * @private
         */
        _fireSelectionChanged: function() {
          this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
        },
        /**
         * Initialize text dimensions. Render all text on given context
         * or on a offscreen canvas to get the text width with measureText.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         * @private
         */
        initDimensions: function() {
          this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        render: function(s) {
          this.clearContextTop(), this.callSuper("render", s), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
        },
        /**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
        _render: function(s) {
          this.callSuper("_render", s);
        },
        /**
         * Prepare and clean the contextTop
         */
        clearContextTop: function(s) {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var h = this.canvas.contextTop, o = this.canvas.viewportTransform;
            h.save(), h.transform(o[0], o[1], o[2], o[3], o[4], o[5]), this.transform(h), this._clearTextArea(h), s || h.restore();
          }
        },
        /**
         * Renders cursor or selection (depending on what exists)
         * it does on the contextTop. If contextTop is not available, do nothing.
         */
        renderCursorOrSelection: function() {
          if (!(!this.isEditing || !this.canvas || !this.canvas.contextTop)) {
            var s = this._getCursorBoundaries(), h = this.canvas.contextTop;
            this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(s, h) : this.renderSelection(s, h), h.restore();
          }
        },
        _clearTextArea: function(s) {
          var h = this.width + 4, o = this.height + 4;
          s.clearRect(-h / 2, -o / 2, h, o);
        },
        /**
         * Returns cursor boundaries (left, top, leftOffset, topOffset)
         * @private
         * @param {Array} chars Array of characters
         * @param {String} typeOfBoundaries
         */
        _getCursorBoundaries: function(s) {
          typeof s > "u" && (s = this.selectionStart);
          var h = this._getLeftOffset(), o = this._getTopOffset(), e = this._getCursorBoundariesOffsets(s);
          return {
            left: h,
            top: o,
            leftOffset: e.left,
            topOffset: e.top
          };
        },
        /**
         * @private
         */
        _getCursorBoundariesOffsets: function(s) {
          if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
            return this.cursorOffsetCache;
          var h, o, e, r = 0, t = 0, n, a = this.get2DCursorLocation(s);
          e = a.charIndex, o = a.lineIndex;
          for (var i = 0; i < o; i++)
            r += this.getHeightOfLine(i);
          h = this._getLineLeftOffset(o);
          var l = this.__charBounds[o][e];
          return l && (t = l.left), this.charSpacing !== 0 && e === this._textLines[o].length && (t -= this._getWidthOfCharSpacing()), n = {
            top: r,
            left: h + (t > 0 ? t : 0)
          }, this.direction === "rtl" && (n.left *= -1), this.cursorOffsetCache = n, this.cursorOffsetCache;
        },
        /**
         * Renders cursor
         * @param {Object} boundaries
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderCursor: function(s, h) {
          var o = this.get2DCursorLocation(), e = o.lineIndex, r = o.charIndex > 0 ? o.charIndex - 1 : 0, t = this.getValueOfPropertyAt(e, r, "fontSize"), n = this.scaleX * this.canvas.getZoom(), a = this.cursorWidth / n, i = s.topOffset, l = this.getValueOfPropertyAt(e, r, "deltaY");
          i += (1 - this._fontSizeFraction) * this.getHeightOfLine(e) / this.lineHeight - t * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(s, h), h.fillStyle = this.cursorColor || this.getValueOfPropertyAt(e, r, "fill"), h.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, h.fillRect(
            s.left + s.leftOffset - a / 2,
            i + s.top + l,
            a,
            t
          );
        },
        /**
         * Renders text selection
         * @param {Object} boundaries Object with left/top/leftOffset/topOffset
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
        renderSelection: function(s, h) {
          for (var o = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, e = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, r = this.textAlign.indexOf("justify") !== -1, t = this.get2DCursorLocation(o), n = this.get2DCursorLocation(e), a = t.lineIndex, i = n.lineIndex, l = t.charIndex < 0 ? 0 : t.charIndex, u = n.charIndex < 0 ? 0 : n.charIndex, d = a; d <= i; d++) {
            var g = this._getLineLeftOffset(d) || 0, m = this.getHeightOfLine(d), v = 0, y = 0, w = 0;
            if (d === a && (y = this.__charBounds[a][l].left), d >= a && d < i)
              w = r && !this.isEndOfWrapping(d) ? this.width : this.getLineWidth(d) || 5;
            else if (d === i)
              if (u === 0)
                w = this.__charBounds[i][u].left;
              else {
                var M = this._getWidthOfCharSpacing();
                w = this.__charBounds[i][u - 1].left + this.__charBounds[i][u - 1].width - M;
              }
            v = m, (this.lineHeight < 1 || d === i && this.lineHeight > 1) && (m /= this.lineHeight);
            var X = s.left + g + y, W = w - y, V = m, N = 0;
            this.inCompositionMode ? (h.fillStyle = this.compositionColor || "black", V = 1, N = m) : h.fillStyle = this.selectionColor, this.direction === "rtl" && (X = this.width - X - W), h.fillRect(
              X,
              s.top + s.topOffset + N,
              W,
              V
            ), s.topOffset += v;
          }
        },
        /**
         * High level function to know the height of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns fontSize of char at the current cursor
         * Unused from the library, is for the end user
         * @return {Number} Character font size
         */
        getCurrentCharFontSize: function() {
          var s = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(s.l, s.c, "fontSize");
        },
        /**
         * High level function to know the color of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns color (fill) of char at the current cursor
         * if the text object has a pattern or gradient for filler, it will return that.
         * Unused by the library, is for the end user
         * @return {String | fabric.Gradient | fabric.Pattern} Character color (fill)
         */
        getCurrentCharColor: function() {
          var s = this._getCurrentCharIndex();
          return this.getValueOfPropertyAt(s.l, s.c, "fill");
        },
        /**
         * Returns the cursor position for the getCurrent.. functions
         * @private
         */
        _getCurrentCharIndex: function() {
          var s = this.get2DCursorLocation(this.selectionStart, !0), h = s.charIndex > 0 ? s.charIndex - 1 : 0;
          return { l: s.lineIndex, c: h };
        }
      }
    ), f.IText.fromObject = function(s, h) {
      var o = f.util.stylesFromArray(s.styles, s.text), e = Object.assign({}, s, { styles: o });
      if (c(e), e.styles)
        for (var r in e.styles)
          for (var t in e.styles[r])
            c(e.styles[r][t]);
      f.Object._fromObject("IText", e, h, "text");
    };
  }(), function() {
    var c = f.util.object.clone;
    f.util.object.extend(
      f.IText.prototype,
      /** @lends fabric.IText.prototype */
      {
        /**
         * Initializes all the interactive behavior of IText
         */
        initBehavior: function() {
          this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        },
        onDeselect: function() {
          this.isEditing && this.exitEditing(), this.selected = !1;
        },
        /**
         * Initializes "added" event handler
         */
        initAddedHandler: function() {
          var s = this;
          this.on("added", function() {
            var h = s.canvas;
            h && (h._hasITextHandlers || (h._hasITextHandlers = !0, s._initCanvasHandlers(h)), h._iTextInstances = h._iTextInstances || [], h._iTextInstances.push(s));
          });
        },
        initRemovedHandler: function() {
          var s = this;
          this.on("removed", function() {
            var h = s.canvas;
            h && (h._iTextInstances = h._iTextInstances || [], f.util.removeFromArray(h._iTextInstances, s), h._iTextInstances.length === 0 && (h._hasITextHandlers = !1, s._removeCanvasHandlers(h)));
          });
        },
        /**
         * register canvas event to manage exiting on other instances
         * @private
         */
        _initCanvasHandlers: function(s) {
          s._mouseUpITextHandler = function() {
            s._iTextInstances && s._iTextInstances.forEach(function(h) {
              h.__isMousedown = !1;
            });
          }, s.on("mouse:up", s._mouseUpITextHandler);
        },
        /**
         * remove canvas event to manage exiting on other instances
         * @private
         */
        _removeCanvasHandlers: function(s) {
          s.off("mouse:up", s._mouseUpITextHandler);
        },
        /**
         * @private
         */
        _tick: function() {
          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
        },
        /**
         * @private
         */
        _animateCursor: function(s, h, o, e) {
          var r;
          return r = {
            isAborted: !1,
            abort: function() {
              this.isAborted = !0;
            }
          }, s.animate("_currentCursorOpacity", h, {
            duration: o,
            onComplete: function() {
              r.isAborted || s[e]();
            },
            onChange: function() {
              s.canvas && s.selectionStart === s.selectionEnd && s.renderCursorOrSelection();
            },
            abort: function() {
              return r.isAborted;
            }
          }), r;
        },
        /**
         * @private
         */
        _onTickComplete: function() {
          var s = this;
          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
            s._currentTickCompleteState = s._animateCursor(s, 0, this.cursorDuration / 2, "_tick");
          }, 100);
        },
        /**
         * Initializes delayed cursor
         */
        initDelayedCursor: function(s) {
          var h = this, o = s ? 0 : this.cursorDelay;
          this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
            h._tick();
          }, o);
        },
        /**
         * Aborts cursor animation and clears all timeouts
         */
        abortCursorAnimation: function() {
          var s = this._currentTickState || this._currentTickCompleteState, h = this.canvas;
          this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, s && h && h.clearContext(h.contextTop || h.contextContainer);
        },
        /**
         * Selects entire text
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectAll: function() {
          return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Returns selected text
         * @return {String}
         */
        getSelectedText: function() {
          return this._text.slice(this.selectionStart, this.selectionEnd).join("");
        },
        /**
         * Find new selection index representing start of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryLeft: function(s) {
          var h = 0, o = s - 1;
          if (this._reSpace.test(this._text[o]))
            for (; this._reSpace.test(this._text[o]); )
              h++, o--;
          for (; /\S/.test(this._text[o]) && o > -1; )
            h++, o--;
          return s - h;
        },
        /**
         * Find new selection index representing end of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findWordBoundaryRight: function(s) {
          var h = 0, o = s;
          if (this._reSpace.test(this._text[o]))
            for (; this._reSpace.test(this._text[o]); )
              h++, o++;
          for (; /\S/.test(this._text[o]) && o < this._text.length; )
            h++, o++;
          return s + h;
        },
        /**
         * Find new selection index representing start of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryLeft: function(s) {
          for (var h = 0, o = s - 1; !/\n/.test(this._text[o]) && o > -1; )
            h++, o--;
          return s - h;
        },
        /**
         * Find new selection index representing end of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
        findLineBoundaryRight: function(s) {
          for (var h = 0, o = s; !/\n/.test(this._text[o]) && o < this._text.length; )
            h++, o++;
          return s + h;
        },
        /**
         * Finds index corresponding to beginning or end of a word
         * @param {Number} selectionStart Index of a character
         * @param {Number} direction 1 or -1
         * @return {Number} Index of the beginning or end of a word
         */
        searchWordBoundary: function(s, h) {
          for (var o = this._text, e = this._reSpace.test(o[s]) ? s - 1 : s, r = o[e], t = f.reNonWord; !t.test(r) && e > 0 && e < o.length; )
            e += h, r = o[e];
          return t.test(r) && (e += h === 1 ? 0 : 1), e;
        },
        /**
         * Selects a word based on the index
         * @param {Number} selectionStart Index of a character
         */
        selectWord: function(s) {
          s = s || this.selectionStart;
          var h = this.searchWordBoundary(s, -1), o = this.searchWordBoundary(s, 1);
          this.selectionStart = h, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
        },
        /**
         * Selects a line based on the index
         * @param {Number} selectionStart Index of a character
         * @return {fabric.IText} thisArg
         * @chainable
         */
        selectLine: function(s) {
          s = s || this.selectionStart;
          var h = this.findLineBoundaryLeft(s), o = this.findLineBoundaryRight(s);
          return this.selectionStart = h, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this;
        },
        /**
         * Enters editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        enterEditing: function(s) {
          if (!(this.isEditing || !this.editable))
            return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(s), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
        },
        exitEditingOnOthers: function(s) {
          s._iTextInstances && s._iTextInstances.forEach(function(h) {
            h.selected = !1, h.isEditing && h.exitEditing();
          });
        },
        /**
         * Initializes "mousemove" event handler
         */
        initMouseMoveHandler: function() {
          this.canvas.on("mouse:move", this.mouseMoveHandler);
        },
        /**
         * @private
         */
        mouseMoveHandler: function(s) {
          if (!(!this.__isMousedown || !this.isEditing)) {
            document.activeElement !== this.hiddenTextarea && this.hiddenTextarea.focus();
            var h = this.getSelectionStartFromPointer(s.e), o = this.selectionStart, e = this.selectionEnd;
            (h !== this.__selectionStartOnMouseDown || o === e) && (o === h || e === h) || (h > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = h) : (this.selectionStart = h, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== o || this.selectionEnd !== e) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
          }
        },
        /**
         * @private
         */
        _setEditingProps: function() {
          this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
        },
        /**
         * convert from textarea to grapheme indexes
         */
        fromStringToGraphemeSelection: function(s, h, o) {
          var e = o.slice(0, s), r = f.util.string.graphemeSplit(e).length;
          if (s === h)
            return { selectionStart: r, selectionEnd: r };
          var t = o.slice(s, h), n = f.util.string.graphemeSplit(t).length;
          return { selectionStart: r, selectionEnd: r + n };
        },
        /**
         * convert from fabric to textarea values
         */
        fromGraphemeToStringSelection: function(s, h, o) {
          var e = o.slice(0, s), r = e.join("").length;
          if (s === h)
            return { selectionStart: r, selectionEnd: r };
          var t = o.slice(s, h), n = t.join("").length;
          return { selectionStart: r, selectionEnd: r + n };
        },
        /**
         * @private
         */
        _updateTextarea: function() {
          if (this.cursorOffsetCache = {}, !!this.hiddenTextarea) {
            if (!this.inCompositionMode) {
              var s = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
              this.hiddenTextarea.selectionStart = s.selectionStart, this.hiddenTextarea.selectionEnd = s.selectionEnd;
            }
            this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateFromTextArea: function() {
          if (this.hiddenTextarea) {
            this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
            var s = this.fromStringToGraphemeSelection(
              this.hiddenTextarea.selectionStart,
              this.hiddenTextarea.selectionEnd,
              this.hiddenTextarea.value
            );
            this.selectionEnd = this.selectionStart = s.selectionEnd, this.inCompositionMode || (this.selectionStart = s.selectionStart), this.updateTextareaPosition();
          }
        },
        /**
         * @private
         */
        updateTextareaPosition: function() {
          if (this.selectionStart === this.selectionEnd) {
            var s = this._calcTextareaPosition();
            this.hiddenTextarea.style.left = s.left, this.hiddenTextarea.style.top = s.top;
          }
        },
        /**
         * @private
         * @return {Object} style contains style for hiddenTextarea
         */
        _calcTextareaPosition: function() {
          if (!this.canvas)
            return { x: 1, y: 1 };
          var s = this.inCompositionMode ? this.compositionStart : this.selectionStart, h = this._getCursorBoundaries(s), o = this.get2DCursorLocation(s), e = o.lineIndex, r = o.charIndex, t = this.getValueOfPropertyAt(e, r, "fontSize") * this.lineHeight, n = h.leftOffset, a = this.calcTransformMatrix(), i = {
            x: h.left + n,
            y: h.top + h.topOffset + t
          }, l = this.canvas.getRetinaScaling(), u = this.canvas.upperCanvasEl, d = u.width / l, g = u.height / l, m = d - t, v = g - t, y = u.clientWidth / d, w = u.clientHeight / g;
          return i = f.util.transformPoint(i, a), i = f.util.transformPoint(i, this.canvas.viewportTransform), i.x *= y, i.y *= w, i.x < 0 && (i.x = 0), i.x > m && (i.x = m), i.y < 0 && (i.y = 0), i.y > v && (i.y = v), i.x += this.canvas._offset.left, i.y += this.canvas._offset.top, { left: i.x + "px", top: i.y + "px", fontSize: t + "px", charHeight: t };
        },
        /**
         * @private
         */
        _saveEditingProps: function() {
          this._savedProps = {
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            lockMovementX: this.lockMovementX,
            lockMovementY: this.lockMovementY,
            hoverCursor: this.hoverCursor,
            selectable: this.selectable,
            defaultCursor: this.canvas && this.canvas.defaultCursor,
            moveCursor: this.canvas && this.canvas.moveCursor
          };
        },
        /**
         * @private
         */
        _restoreEditingProps: function() {
          this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
        },
        /**
         * Exits from editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
        exitEditing: function() {
          var s = this._textBeforeEdit !== this.text, h = this.hiddenTextarea;
          return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, h && (h.blur && h.blur(), h.parentNode && h.parentNode.removeChild(h)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), s && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), s && this.canvas.fire("object:modified", { target: this })), this;
        },
        /**
         * @private
         */
        _removeExtraneousStyles: function() {
          for (var s in this.styles)
            this._textLines[s] || delete this.styles[s];
        },
        /**
         * remove and reflow a style block from start to end.
         * @param {Number} start linear start position for removal (included in removal)
         * @param {Number} end linear end position for removal ( excluded from removal )
         */
        removeStyleFromTo: function(s, h) {
          var o = this.get2DCursorLocation(s, !0), e = this.get2DCursorLocation(h, !0), r = o.lineIndex, t = o.charIndex, n = e.lineIndex, a = e.charIndex, i, l;
          if (r !== n) {
            if (this.styles[r])
              for (i = t; i < this._unwrappedTextLines[r].length; i++)
                delete this.styles[r][i];
            if (this.styles[n])
              for (i = a; i < this._unwrappedTextLines[n].length; i++)
                l = this.styles[n][i], l && (this.styles[r] || (this.styles[r] = {}), this.styles[r][t + i - a] = l);
            for (i = r + 1; i <= n; i++)
              delete this.styles[i];
            this.shiftLineStyles(n, r - n);
          } else if (this.styles[r]) {
            l = this.styles[r];
            var u = a - t, d, g;
            for (i = t; i < a; i++)
              delete l[i];
            for (g in this.styles[r])
              d = parseInt(g, 10), d >= a && (l[d - u] = l[g], delete l[g]);
          }
        },
        /**
         * Shifts line styles up or down
         * @param {Number} lineIndex Index of a line
         * @param {Number} offset Can any number?
         */
        shiftLineStyles: function(s, h) {
          var o = c(this.styles);
          for (var e in this.styles) {
            var r = parseInt(e, 10);
            r > s && (this.styles[r + h] = o[r], o[r - h] || delete this.styles[r]);
          }
        },
        restartCursorIfNeeded: function() {
          (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
        },
        /**
         * Handle insertion of more consecutive style lines for when one or more
         * newlines gets added to the text. Since current style needs to be shifted
         * first we shift the current style of the number lines needed, then we add
         * new lines from the last to the first.
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} qty number of lines to add
         * @param {Array} copiedStyle Array of objects styles
         */
        insertNewlineStyleObject: function(s, h, o, e) {
          var r, t = {}, n = !1, a = this._unwrappedTextLines[s].length === h;
          o || (o = 1), this.shiftLineStyles(s, o), this.styles[s] && (r = this.styles[s][h === 0 ? h : h - 1]);
          for (var i in this.styles[s]) {
            var l = parseInt(i, 10);
            l >= h && (n = !0, t[l - h] = this.styles[s][i], a && h === 0 || delete this.styles[s][i]);
          }
          var u = !1;
          for (n && !a && (this.styles[s + o] = t, u = !0), u && o--; o > 0; )
            e && e[o - 1] ? this.styles[s + o] = { 0: c(e[o - 1]) } : r ? this.styles[s + o] = { 0: c(r) } : delete this.styles[s + o], o--;
          this._forceClearCache = !0;
        },
        /**
         * Inserts style object for a given line/char index
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} quantity number Style object to insert, if given
         * @param {Array} copiedStyle array of style objects
         */
        insertCharStyleObject: function(s, h, o, e) {
          this.styles || (this.styles = {});
          var r = this.styles[s], t = r ? c(r) : {};
          o || (o = 1);
          for (var n in t) {
            var a = parseInt(n, 10);
            a >= h && (r[a + o] = t[a], t[a - o] || delete r[a]);
          }
          if (this._forceClearCache = !0, e) {
            for (; o--; )
              Object.keys(e[o]).length && (this.styles[s] || (this.styles[s] = {}), this.styles[s][h + o] = c(e[o]));
            return;
          }
          if (r)
            for (var i = r[h ? h - 1 : 1]; i && o--; )
              this.styles[s][h + o] = c(i);
        },
        /**
         * Inserts style object(s)
         * @param {Array} insertedText Characters at the location where style is inserted
         * @param {Number} start cursor index for inserting style
         * @param {Array} [copiedStyle] array of style objects to insert.
         */
        insertNewStyleBlock: function(s, h, o) {
          for (var e = this.get2DCursorLocation(h, !0), r = [0], t = 0, n = 0; n < s.length; n++)
            s[n] === `
` ? (t++, r[t] = 0) : r[t]++;
          r[0] > 0 && (this.insertCharStyleObject(e.lineIndex, e.charIndex, r[0], o), o = o && o.slice(r[0] + 1)), t && this.insertNewlineStyleObject(
            e.lineIndex,
            e.charIndex + r[0],
            t
          );
          for (var n = 1; n < t; n++)
            r[n] > 0 ? this.insertCharStyleObject(e.lineIndex + n, 0, r[n], o) : o && this.styles[e.lineIndex + n] && o[0] && (this.styles[e.lineIndex + n][0] = o[0]), o = o && o.slice(r[n] + 1);
          r[n] > 0 && this.insertCharStyleObject(e.lineIndex + n, 0, r[n], o);
        },
        /**
         * Set the selectionStart and selectionEnd according to the new position of cursor
         * mimic the key - mouse navigation when shift is pressed.
         */
        setSelectionStartEndWithShift: function(s, h, o) {
          o <= s ? (h === s ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = s), this.selectionStart = o) : o > s && o < h ? this._selectionDirection === "right" ? this.selectionEnd = o : this.selectionStart = o : (h === s ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = h), this.selectionEnd = o);
        },
        setSelectionInBoundaries: function() {
          var s = this.text.length;
          this.selectionStart > s ? this.selectionStart = s : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > s ? this.selectionEnd = s : this.selectionEnd < 0 && (this.selectionEnd = 0);
        }
      }
    );
  }(), f.util.object.extend(
    f.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes "dbclick" event handler
       */
      initDoubleClickSimulation: function() {
        this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
      },
      /**
       * Default event handler to simulate triple click
       * @private
       */
      onMouseDown: function(c) {
        if (this.canvas) {
          this.__newClickTime = +/* @__PURE__ */ new Date();
          var s = c.pointer;
          this.isTripleClick(s) && (this.fire("tripleclick", c), this._stopEvent(c.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = s, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
        }
      },
      isTripleClick: function(c) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === c.x && this.__lastPointer.y === c.y;
      },
      /**
       * @private
       */
      _stopEvent: function(c) {
        c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation();
      },
      /**
       * Initializes event handlers related to cursor or selection
       */
      initCursorSelectionHandlers: function() {
        this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
      },
      /**
       * Default handler for double click, select a word
       */
      doubleClickHandler: function(c) {
        this.isEditing && this.selectWord(this.getSelectionStartFromPointer(c.e));
      },
      /**
       * Default handler for triple click, select a line
       */
      tripleClickHandler: function(c) {
        this.isEditing && this.selectLine(this.getSelectionStartFromPointer(c.e));
      },
      /**
       * Initializes double and triple click event handlers
       */
      initClicks: function() {
        this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
      },
      /**
       * Default event handler for the basic functionalities needed on _mouseDown
       * can be overridden to do something different.
       * Scope of this implementation is: find the click position, set selectionStart
       * find selectionEnd, initialize the drawing of either cursor or selection area
       * initializing a mousedDown on a text area will cancel fabricjs knowledge of
       * current compositionMode. It will be set to false.
       */
      _mouseDownHandler: function(c) {
        !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(c.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
      },
      /**
       * Default event handler for the basic functionalities needed on mousedown:before
       * can be overridden to do something different.
       * Scope of this implementation is: verify the object is already selected when mousing down
       */
      _mouseDownHandlerBefore: function(c) {
        !this.canvas || !this.editable || c.e.button && c.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
      },
      /**
       * Initializes "mousedown" event handler
       */
      initMousedownHandler: function() {
        this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
      },
      /**
       * Initializes "mouseup" event handler
       */
      initMouseupHandler: function() {
        this.on("mouseup", this.mouseUpHandler);
      },
      /**
       * standard handler for mouse up, overridable
       * @private
       */
      mouseUpHandler: function(c) {
        if (this.__isMousedown = !1, !(!this.editable || this.group || c.transform && c.transform.actionPerformed || c.e.button && c.e.button !== 1)) {
          if (this.canvas) {
            var s = this.canvas._activeObject;
            if (s && s !== this)
              return;
          }
          this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(c.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
        }
      },
      /**
       * Changes cursor location in a text depending on passed pointer (x/y) object
       * @param {Event} e Event object
       */
      setCursorByClick: function(c) {
        var s = this.getSelectionStartFromPointer(c), h = this.selectionStart, o = this.selectionEnd;
        c.shiftKey ? this.setSelectionStartEndWithShift(h, o, s) : (this.selectionStart = s, this.selectionEnd = s), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Returns index of a character corresponding to where an object was clicked
       * @param {Event} e Event object
       * @return {Number} Index of a character
       */
      getSelectionStartFromPointer: function(c) {
        for (var s = this.getLocalPointer(c), h = 0, o = 0, e = 0, r = 0, t = 0, n, a, i = 0, l = this._textLines.length; i < l && e <= s.y; i++)
          e += this.getHeightOfLine(i) * this.scaleY, t = i, i > 0 && (r += this._textLines[i - 1].length + this.missingNewlineOffset(i - 1));
        n = this._getLineLeftOffset(t), o = n * this.scaleX, a = this._textLines[t], this.direction === "rtl" && (s.x = this.width * this.scaleX - s.x + o);
        for (var u = 0, d = a.length; u < d && (h = o, o += this.__charBounds[t][u].kernedWidth * this.scaleX, o <= s.x); u++)
          r++;
        return this._getNewSelectionStartFromOffset(s, h, o, r, d);
      },
      /**
       * @private
       */
      _getNewSelectionStartFromOffset: function(c, s, h, o, e) {
        var r = c.x - s, t = h - c.x, n = t > r || t < 0 ? 0 : 1, a = o + n;
        return this.flipX && (a = e - a), a > this._text.length && (a = this._text.length), a;
      }
    }
  ), f.util.object.extend(
    f.IText.prototype,
    /** @lends fabric.IText.prototype */
    {
      /**
       * Initializes hidden textarea (needed to bring up keyboard in iOS)
       */
      initHiddenTextarea: function() {
        this.hiddenTextarea = f.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
        var c = this._calcTextareaPosition();
        this.hiddenTextarea.style.cssText = "position: absolute; top: " + c.top + "; left: " + c.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + c.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : f.document.body.appendChild(this.hiddenTextarea), f.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), f.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), f.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), f.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), f.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), f.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (f.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
      },
      /**
       * For functionalities on keyDown
       * Map a special key to a function of the instance/prototype
       * If you need different behaviour for ESC or TAB or arrows, you have to change
       * this map setting the name of a function that you build on the fabric.Itext or
       * your prototype.
       * the map change will affect all Instances unless you need for only some text Instances
       * in that case you have to clone this object and assign your Instance.
       * this.keysMap = fabric.util.object.clone(this.keysMap);
       * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
       */
      keysMap: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorRight",
        36: "moveCursorLeft",
        37: "moveCursorLeft",
        38: "moveCursorUp",
        39: "moveCursorRight",
        40: "moveCursorDown"
      },
      keysMapRtl: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorLeft",
        36: "moveCursorRight",
        37: "moveCursorRight",
        38: "moveCursorUp",
        39: "moveCursorLeft",
        40: "moveCursorDown"
      },
      /**
       * For functionalities on keyUp + ctrl || cmd
       */
      ctrlKeysMapUp: {
        67: "copy",
        88: "cut"
      },
      /**
       * For functionalities on keyDown + ctrl || cmd
       */
      ctrlKeysMapDown: {
        65: "selectAll"
      },
      onClick: function() {
        this.hiddenTextarea && this.hiddenTextarea.focus();
      },
      /**
       * Handles keydown event
       * only used for arrows and combination of modifier keys.
       * @param {Event} e Event object
       */
      onKeyDown: function(c) {
        if (this.isEditing) {
          var s = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
          if (c.keyCode in s)
            this[s[c.keyCode]](c);
          else if (c.keyCode in this.ctrlKeysMapDown && (c.ctrlKey || c.metaKey))
            this[this.ctrlKeysMapDown[c.keyCode]](c);
          else
            return;
          c.stopImmediatePropagation(), c.preventDefault(), c.keyCode >= 33 && c.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
        }
      },
      /**
       * Handles keyup event
       * We handle KeyUp because ie11 and edge have difficulties copy/pasting
       * if a copy/cut event fired, keyup is dismissed
       * @param {Event} e Event object
       */
      onKeyUp: function(c) {
        if (!this.isEditing || this._copyDone || this.inCompositionMode) {
          this._copyDone = !1;
          return;
        }
        if (c.keyCode in this.ctrlKeysMapUp && (c.ctrlKey || c.metaKey))
          this[this.ctrlKeysMapUp[c.keyCode]](c);
        else
          return;
        c.stopImmediatePropagation(), c.preventDefault(), this.canvas && this.canvas.requestRenderAll();
      },
      /**
       * Handles onInput event
       * @param {Event} e Event object
       */
      onInput: function(c) {
        var s = this.fromPaste;
        if (this.fromPaste = !1, c && c.stopPropagation(), !!this.isEditing) {
          var h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, o = this._text.length, e = h.length, r, t, n = e - o, a = this.selectionStart, i = this.selectionEnd, l = a !== i, u, d, g;
          if (this.hiddenTextarea.value === "") {
            this.styles = {}, this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
            return;
          }
          var m = this.fromStringToGraphemeSelection(
            this.hiddenTextarea.selectionStart,
            this.hiddenTextarea.selectionEnd,
            this.hiddenTextarea.value
          ), v = a > m.selectionStart;
          l ? (r = this._text.slice(a, i), n += i - a) : e < o && (v ? r = this._text.slice(i + n, i) : r = this._text.slice(a, a - n)), t = h.slice(m.selectionEnd - n, m.selectionEnd), r && r.length && (t.length && (u = this.getSelectionStyles(a, a + 1, !1), u = t.map(function() {
            return u[0];
          })), l ? (d = a, g = i) : v ? (d = i - r.length, g = i) : (d = i, g = i + r.length), this.removeStyleFromTo(d, g)), t.length && (s && t.join("") === f.copiedText && !f.disableStyleCopyPaste && (u = f.copiedTextStyle), this.insertNewStyleBlock(t, a, u)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
        }
      },
      /**
       * Composition start
       */
      onCompositionStart: function() {
        this.inCompositionMode = !0;
      },
      /**
       * Composition end
       */
      onCompositionEnd: function() {
        this.inCompositionMode = !1;
      },
      // /**
      //  * Composition update
      //  */
      onCompositionUpdate: function(c) {
        this.compositionStart = c.target.selectionStart, this.compositionEnd = c.target.selectionEnd, this.updateTextareaPosition();
      },
      /**
       * Copies selected text
       * @param {Event} e Event object
       */
      copy: function() {
        this.selectionStart !== this.selectionEnd && (f.copiedText = this.getSelectedText(), f.disableStyleCopyPaste ? f.copiedTextStyle = null : f.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
      },
      /**
       * Pastes text
       * @param {Event} e Event object
       */
      paste: function() {
        this.fromPaste = !0;
      },
      /**
       * @private
       * @param {Event} e Event object
       * @return {Object} Clipboard data object
       */
      _getClipboardData: function(c) {
        return c && c.clipboardData || f.window.clipboardData;
      },
      /**
       * Finds the width in pixels before the cursor on the same line
       * @private
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @return {Number} widthBeforeCursor width before cursor
       */
      _getWidthBeforeCursor: function(c, s) {
        var h = this._getLineLeftOffset(c), o;
        return s > 0 && (o = this.__charBounds[c][s - 1], h += o.left + o.width), h;
      },
      /**
       * Gets start offset of a selection
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getDownCursorOffset: function(c, s) {
        var h = this._getSelectionForOffset(c, s), o = this.get2DCursorLocation(h), e = o.lineIndex;
        if (e === this._textLines.length - 1 || c.metaKey || c.keyCode === 34)
          return this._text.length - h;
        var r = o.charIndex, t = this._getWidthBeforeCursor(e, r), n = this._getIndexOnLine(e + 1, t), a = this._textLines[e].slice(r);
        return a.length + n + 1 + this.missingNewlineOffset(e);
      },
      /**
       * private
       * Helps finding if the offset should be counted from Start or End
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      _getSelectionForOffset: function(c, s) {
        return c.shiftKey && this.selectionStart !== this.selectionEnd && s ? this.selectionEnd : this.selectionStart;
      },
      /**
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
      getUpCursorOffset: function(c, s) {
        var h = this._getSelectionForOffset(c, s), o = this.get2DCursorLocation(h), e = o.lineIndex;
        if (e === 0 || c.metaKey || c.keyCode === 33)
          return -h;
        var r = o.charIndex, t = this._getWidthBeforeCursor(e, r), n = this._getIndexOnLine(e - 1, t), a = this._textLines[e].slice(0, r), i = this.missingNewlineOffset(e - 1);
        return -this._textLines[e - 1].length + n - a.length + (1 - i);
      },
      /**
       * for a given width it founds the matching character.
       * @private
       */
      _getIndexOnLine: function(c, s) {
        for (var h = this._textLines[c], o = this._getLineLeftOffset(c), e = o, r = 0, t, n, a = 0, i = h.length; a < i; a++)
          if (t = this.__charBounds[c][a].width, e += t, e > s) {
            n = !0;
            var l = e - t, u = e, d = Math.abs(l - s), g = Math.abs(u - s);
            r = g < d ? a : a - 1;
            break;
          }
        return n || (r = h.length - 1), r;
      },
      /**
       * Moves cursor down
       * @param {Event} e Event object
       */
      moveCursorDown: function(c) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", c);
      },
      /**
       * Moves cursor up
       * @param {Event} e Event object
       */
      moveCursorUp: function(c) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", c);
      },
      /**
       * Moves cursor up or down, fires the events
       * @param {String} direction 'Up' or 'Down'
       * @param {Event} e Event object
       */
      _moveCursorUpOrDown: function(c, s) {
        var h = "get" + c + "CursorOffset", o = this[h](s, this._selectionDirection === "right");
        s.shiftKey ? this.moveCursorWithShift(o) : this.moveCursorWithoutShift(o), o !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor with shift
       * @param {Number} offset
       */
      moveCursorWithShift: function(c) {
        var s = this._selectionDirection === "left" ? this.selectionStart + c : this.selectionEnd + c;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, s), c !== 0;
      },
      /**
       * Moves cursor up without shift
       * @param {Number} offset
       */
      moveCursorWithoutShift: function(c) {
        return c < 0 ? (this.selectionStart += c, this.selectionEnd = this.selectionStart) : (this.selectionEnd += c, this.selectionStart = this.selectionEnd), c !== 0;
      },
      /**
       * Moves cursor left
       * @param {Event} e Event object
       */
      moveCursorLeft: function(c) {
        this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", c);
      },
      /**
       * @private
       * @return {Boolean} true if a change happened
       */
      _move: function(c, s, h) {
        var o;
        if (c.altKey)
          o = this["findWordBoundary" + h](this[s]);
        else if (c.metaKey || c.keyCode === 35 || c.keyCode === 36)
          o = this["findLineBoundary" + h](this[s]);
        else
          return this[s] += h === "Left" ? -1 : 1, !0;
        if (typeof o < "u" && this[s] !== o)
          return this[s] = o, !0;
      },
      /**
       * @private
       */
      _moveLeft: function(c, s) {
        return this._move(c, s, "Left");
      },
      /**
       * @private
       */
      _moveRight: function(c, s) {
        return this._move(c, s, "Right");
      },
      /**
       * Moves cursor left without keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithoutShift: function(c) {
        var s = !0;
        return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (s = this._moveLeft(c, "selectionStart")), this.selectionEnd = this.selectionStart, s;
      },
      /**
       * Moves cursor left while keeping selection
       * @param {Event} e
       */
      moveCursorLeftWithShift: function(c) {
        if (this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd)
          return this._moveLeft(c, "selectionEnd");
        if (this.selectionStart !== 0)
          return this._selectionDirection = "left", this._moveLeft(c, "selectionStart");
      },
      /**
       * Moves cursor right
       * @param {Event} e Event object
       */
      moveCursorRight: function(c) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", c);
      },
      /**
       * Moves cursor right or Left, fires event
       * @param {String} direction 'Left', 'Right'
       * @param {Event} e Event object
       */
      _moveCursorLeftOrRight: function(c, s) {
        var h = "moveCursor" + c + "With";
        this._currentCursorOpacity = 1, s.shiftKey ? h += "Shift" : h += "outShift", this[h](s) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      },
      /**
       * Moves cursor right while keeping selection
       * @param {Event} e
       */
      moveCursorRightWithShift: function(c) {
        if (this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd)
          return this._moveRight(c, "selectionStart");
        if (this.selectionEnd !== this._text.length)
          return this._selectionDirection = "right", this._moveRight(c, "selectionEnd");
      },
      /**
       * Moves cursor right without keeping selection
       * @param {Event} e Event object
       */
      moveCursorRightWithoutShift: function(c) {
        var s = !0;
        return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (s = this._moveRight(c, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, s;
      },
      /**
       * Removes characters from start/end
       * start/end ar per grapheme position in _text array.
       *
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      removeChars: function(c, s) {
        typeof s > "u" && (s = c + 1), this.removeStyleFromTo(c, s), this._text.splice(c, s - c), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      },
      /**
       * insert characters at start position, before start position.
       * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
       * if style array is provided, it must be as the same length of text in graphemes
       * if end is provided and is bigger than start, old text is replaced.
       * start/end ar per grapheme position in _text array.
       *
       * @param {String} text text to insert
       * @param {Array} style array of style objects
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
      insertChars: function(c, s, h, o) {
        typeof o > "u" && (o = h), o > h && this.removeStyleFromTo(h, o);
        var e = f.util.string.graphemeSplit(c);
        this.insertNewStyleBlock(e, h, s), this._text = [].concat(this._text.slice(0, h), e, this._text.slice(o)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
      }
    }
  ), function() {
    var c = f.util.toFixed, s = /  +/g;
    f.util.object.extend(
      f.Text.prototype,
      /** @lends fabric.Text.prototype */
      {
        /**
         * Returns SVG representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        _toSVG: function() {
          var h = this._getSVGLeftTopOffsets(), o = this._getSVGTextAndBg(h.textTop, h.textLeft);
          return this._wrapSVGTextAndBg(o);
        },
        /**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
        toSVG: function(h) {
          return this._createBaseSVGMarkup(
            this._toSVG(),
            { reviver: h, noStyle: !0, withShadow: !0 }
          );
        },
        /**
         * @private
         */
        _getSVGLeftTopOffsets: function() {
          return {
            textLeft: -this.width / 2,
            textTop: -this.height / 2,
            lineTop: this.getHeightOfLine(0)
          };
        },
        /**
         * @private
         */
        _wrapSVGTextAndBg: function(h) {
          var o = !0, e = this.getSvgTextDecoration(this);
          return [
            h.textBgRects.join(""),
            '		<text xml:space="preserve" ',
            this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "",
            this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
            this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
            this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "",
            e ? 'text-decoration="' + e + '" ' : "",
            'style="',
            this.getSvgStyles(o),
            '"',
            this.addPaintOrder(),
            " >",
            h.textSpans.join(""),
            `</text>
`
          ];
        },
        /**
         * @private
         * @param {Number} textTopOffset Text top offset
         * @param {Number} textLeftOffset Text left offset
         * @return {Object}
         */
        _getSVGTextAndBg: function(h, o) {
          var e = [], r = [], t = h, n;
          this._setSVGBg(r);
          for (var a = 0, i = this._textLines.length; a < i; a++)
            n = this._getLineLeftOffset(a), (this.textBackgroundColor || this.styleHas("textBackgroundColor", a)) && this._setSVGTextLineBg(r, a, o + n, t), this._setSVGTextLineText(e, a, o + n, t), t += this.getHeightOfLine(a);
          return {
            textSpans: e,
            textBgRects: r
          };
        },
        /**
         * @private
         */
        _createTextCharSpan: function(h, o, e, r) {
          var t = h !== h.trim() || h.match(s), n = this.getSvgSpanStyles(o, t), a = n ? 'style="' + n + '"' : "", i = o.deltaY, l = "", u = f.Object.NUM_FRACTION_DIGITS;
          return i && (l = ' dy="' + c(i, u) + '" '), [
            '<tspan x="',
            c(e, u),
            '" y="',
            c(r, u),
            '" ',
            l,
            a,
            ">",
            f.util.string.escapeXml(h),
            "</tspan>"
          ].join("");
        },
        _setSVGTextLineText: function(h, o, e, r) {
          var t = this.getHeightOfLine(o), n = this.textAlign.indexOf("justify") !== -1, a, i, l = "", u, d, g = 0, m = this._textLines[o], v;
          r += t * (1 - this._fontSizeFraction) / this.lineHeight;
          for (var y = 0, w = m.length - 1; y <= w; y++)
            v = y === w || this.charSpacing, l += m[y], u = this.__charBounds[o][y], g === 0 ? (e += u.kernedWidth - u.width, g += u.width) : g += u.kernedWidth, n && !v && this._reSpaceAndTab.test(m[y]) && (v = !0), v || (a = a || this.getCompleteStyleDeclaration(o, y), i = this.getCompleteStyleDeclaration(o, y + 1), v = f.util.hasStyleChanged(a, i, !0)), v && (d = this._getStyleDeclaration(o, y) || {}, h.push(this._createTextCharSpan(l, d, e, r)), l = "", a = i, e += g, g = 0);
        },
        _pushTextBgRect: function(h, o, e, r, t, n) {
          var a = f.Object.NUM_FRACTION_DIGITS;
          h.push(
            "		<rect ",
            this._getFillAttributes(o),
            ' x="',
            c(e, a),
            '" y="',
            c(r, a),
            '" width="',
            c(t, a),
            '" height="',
            c(n, a),
            `"></rect>
`
          );
        },
        _setSVGTextLineBg: function(h, o, e, r) {
          for (var t = this._textLines[o], n = this.getHeightOfLine(o) / this.lineHeight, a = 0, i = 0, l, u, d = this.getValueOfPropertyAt(o, 0, "textBackgroundColor"), g = 0, m = t.length; g < m; g++)
            l = this.__charBounds[o][g], u = this.getValueOfPropertyAt(o, g, "textBackgroundColor"), u !== d ? (d && this._pushTextBgRect(
              h,
              d,
              e + i,
              r,
              a,
              n
            ), i = l.left, a = l.width, d = u) : a += l.kernedWidth;
          u && this._pushTextBgRect(
            h,
            u,
            e + i,
            r,
            a,
            n
          );
        },
        /**
         * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
         * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
         *
         * @private
         * @param {*} value
         * @return {String}
         */
        _getFillAttributes: function(h) {
          var o = h && typeof h == "string" ? new f.Color(h) : "";
          return !o || !o.getSource() || o.getAlpha() === 1 ? 'fill="' + h + '"' : 'opacity="' + o.getAlpha() + '" fill="' + o.setAlpha(1).toRgb() + '"';
        },
        /**
         * @private
         */
        _getSVGLineTopOffset: function(h) {
          for (var o = 0, e = 0, r = 0; r < h; r++)
            o += this.getHeightOfLine(r);
          return e = this.getHeightOfLine(r), {
            lineTop: o,
            offset: (this._fontSizeMult - this._fontSizeFraction) * e / (this.lineHeight * this._fontSizeMult)
          };
        },
        /**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
        getSvgStyles: function(h) {
          var o = f.Object.prototype.getSvgStyles.call(this, h);
          return o + " white-space: pre;";
        }
      }
    );
  }(), function(c) {
    var s = c.fabric || (c.fabric = {});
    s.Textbox = s.util.createClass(s.IText, s.Observable, {
      /**
       * Type of an object
       * @type String
       * @default
       */
      type: "textbox",
      /**
       * Minimum width of textbox, in pixels.
       * @type Number
       * @default
       */
      minWidth: 20,
      /**
       * Minimum calculated width of a textbox, in pixels.
       * fixed to 2 so that an empty textbox cannot go to 0
       * and is still selectable without text.
       * @type Number
       * @default
       */
      dynamicMinWidth: 2,
      /**
       * Cached array of text wrapping.
       * @type Array
       */
      __cachedLines: null,
      /**
       * Override standard Object class values
       */
      lockScalingFlip: !0,
      /**
       * Override standard Object class values
       * Textbox needs this on false
       */
      noScaleCache: !1,
      /**
       * Properties which when set cause object to change dimensions
       * @type Object
       * @private
       */
      _dimensionAffectingProps: s.Text.prototype._dimensionAffectingProps.concat("width"),
      /**
       * Use this regular expression to split strings in breakable lines
       * @private
       */
      _wordJoiners: /[ \t\r]/,
      /**
       * Use this boolean property in order to split strings that have no white space concept.
       * this is a cheap way to help with chinese/japanese
       * @type Boolean
       * @since 2.6.0
       */
      splitByGrapheme: !1,
      /**
       * Unlike superclass's version of this function, Textbox does not update
       * its width.
       * @private
       * @override
       */
      initDimensions: function() {
        this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      },
      /**
       * Generate an object that translates the style object so that it is
       * broken up by visual lines (new lines and automatic wrapping).
       * The original text styles object is broken up by actual lines (new lines only),
       * which is only sufficient for Text / IText
       * @private
       */
      _generateStyleMap: function(h) {
        for (var o = 0, e = 0, r = 0, t = {}, n = 0; n < h.graphemeLines.length; n++)
          h.graphemeText[r] === `
` && n > 0 ? (e = 0, r++, o++) : !this.splitByGrapheme && this._reSpaceAndTab.test(h.graphemeText[r]) && n > 0 && (e++, r++), t[n] = { line: o, offset: e }, r += h.graphemeLines[n].length, e += h.graphemeLines[n].length;
        return t;
      },
      /**
       * Returns true if object has a style property or has it on a specified line
       * @param {Number} lineIndex
       * @return {Boolean}
       */
      styleHas: function(h, o) {
        if (this._styleMap && !this.isWrapping) {
          var e = this._styleMap[o];
          e && (o = e.line);
        }
        return s.Text.prototype.styleHas.call(this, h, o);
      },
      /**
       * Returns true if object has no styling or no styling in a line
       * @param {Number} lineIndex , lineIndex is on wrapped lines.
       * @return {Boolean}
       */
      isEmptyStyles: function(h) {
        if (!this.styles)
          return !0;
        var o = 0, e = h + 1, r, t, n = !1, a = this._styleMap[h], i = this._styleMap[h + 1];
        a && (h = a.line, o = a.offset), i && (e = i.line, n = e === h, r = i.offset), t = typeof h > "u" ? this.styles : { line: this.styles[h] };
        for (var l in t)
          for (var u in t[l])
            if (u >= o && (!n || u < r))
              for (var d in t[l][u])
                return !1;
        return !0;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _getStyleDeclaration: function(h, o) {
        if (this._styleMap && !this.isWrapping) {
          var e = this._styleMap[h];
          if (!e)
            return null;
          h = e.line, o = e.offset + o;
        }
        return this.callSuper("_getStyleDeclaration", h, o);
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @param {Object} style
       * @private
       */
      _setStyleDeclaration: function(h, o, e) {
        var r = this._styleMap[h];
        h = r.line, o = r.offset + o, this.styles[h][o] = e;
      },
      /**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
      _deleteStyleDeclaration: function(h, o) {
        var e = this._styleMap[h];
        h = e.line, o = e.offset + o, delete this.styles[h][o];
      },
      /**
       * probably broken need a fix
       * Returns the real style line that correspond to the wrapped lineIndex line
       * Used just to verify if the line does exist or not.
       * @param {Number} lineIndex
       * @returns {Boolean} if the line exists or not
       * @private
       */
      _getLineStyle: function(h) {
        var o = this._styleMap[h];
        return !!this.styles[o.line];
      },
      /**
       * Set the line style to an empty object so that is initialized
       * @param {Number} lineIndex
       * @param {Object} style
       * @private
       */
      _setLineStyle: function(h) {
        var o = this._styleMap[h];
        this.styles[o.line] = {};
      },
      /**
       * Wraps text using the 'width' property of Textbox. First this function
       * splits text on newlines, so we preserve newlines entered by the user.
       * Then it wraps each line using the width of the Textbox by calling
       * _wrapLine().
       * @param {Array} lines The string array of text that is split into lines
       * @param {Number} desiredWidth width you want to wrap to
       * @returns {Array} Array of lines
       */
      _wrapText: function(h, o) {
        var e = [], r;
        for (this.isWrapping = !0, r = 0; r < h.length; r++)
          e = e.concat(this._wrapLine(h[r], r, o));
        return this.isWrapping = !1, e;
      },
      /**
       * Helper function to measure a string of text, given its lineIndex and charIndex offset
       * it gets called when charBounds are not available yet.
       * @param {CanvasRenderingContext2D} ctx
       * @param {String} text
       * @param {number} lineIndex
       * @param {number} charOffset
       * @returns {number}
       * @private
       */
      _measureWord: function(h, o, e) {
        var r = 0, t, n = !0;
        e = e || 0;
        for (var a = 0, i = h.length; a < i; a++) {
          var l = this._getGraphemeBox(h[a], o, a + e, t, n);
          r += l.kernedWidth, t = h[a];
        }
        return r;
      },
      /**
       * Wraps a line of text using the width of the Textbox and a context.
       * @param {Array} line The grapheme array that represent the line
       * @param {Number} lineIndex
       * @param {Number} desiredWidth width you want to wrap the line to
       * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
       * @returns {Array} Array of line(s) into which the given text is wrapped
       * to.
       */
      _wrapLine: function(h, o, e, X) {
        var t = 0, n = this.splitByGrapheme, a = [], i = [], l = n ? s.util.string.graphemeSplit(h) : h.split(this._wordJoiners), u = "", d = 0, g = n ? "" : " ", m = 0, v = 0, y = 0, w = !0, M = this._getWidthOfCharSpacing(), X = X || 0;
        l.length === 0 && l.push([]), e -= X;
        for (var W = 0; W < l.length; W++)
          u = n ? l[W] : s.util.string.graphemeSplit(l[W]), m = this._measureWord(u, o, d), d += u.length, t += v + m - M, t > e && !w ? (a.push(i), i = [], t = m, w = !0) : t += M, !w && !n && i.push(g), i = i.concat(u), v = n ? 0 : this._measureWord([g], o, d), d++, w = !1, m > y && (y = m);
        return W && a.push(i), y + X > this.dynamicMinWidth && (this.dynamicMinWidth = y - M + X), a;
      },
      /**
       * Detect if the text line is ended with an hard break
       * text and itext do not have wrapping, return false
       * @param {Number} lineIndex text to split
       * @return {Boolean}
       */
      isEndOfWrapping: function(h) {
        return !this._styleMap[h + 1] || this._styleMap[h + 1].line !== this._styleMap[h].line;
      },
      /**
       * Detect if a line has a linebreak and so we need to account for it when moving
       * and counting style.
       * @return Number
       */
      missingNewlineOffset: function(h) {
        return this.splitByGrapheme ? this.isEndOfWrapping(h) ? 1 : 0 : 1;
      },
      /**
      * Gets lines of text to render in the Textbox. This function calculates
      * text wrapping on the fly every time it is called.
      * @param {String} text text to split
      * @returns {Array} Array of lines in the Textbox.
      * @override
      */
      _splitTextIntoLines: function(h) {
        for (var o = s.Text.prototype._splitTextIntoLines.call(this, h), e = this._wrapText(o.lines, this.width), r = new Array(e.length), t = 0; t < e.length; t++)
          r[t] = e[t].join("");
        return o.lines = r, o.graphemeLines = e, o;
      },
      getMinWidth: function() {
        return Math.max(this.minWidth, this.dynamicMinWidth);
      },
      _removeExtraneousStyles: function() {
        var h = {};
        for (var o in this._styleMap)
          this._textLines[o] && (h[this._styleMap[o].line] = 1);
        for (var o in this.styles)
          h[o] || delete this.styles[o];
      },
      /**
       * Returns object representation of an instance
       * @method toObject
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} object representation of an instance
       */
      toObject: function(h) {
        return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(h));
      }
    }), s.Textbox.fromObject = function(h, o) {
      var e = s.util.stylesFromArray(h.styles, h.text), r = Object.assign({}, h, { styles: e });
      return s.Object._fromObject("Textbox", r, o, "text");
    };
  }(Z), function() {
    var c = f.controlsUtils, s = c.scaleSkewCursorStyleHandler, h = c.scaleCursorStyleHandler, o = c.scalingEqually, e = c.scalingYOrSkewingX, r = c.scalingXOrSkewingY, t = c.scaleOrSkewActionName, n = f.Object.prototype.controls;
    if (n.ml = new f.Control({
      x: -0.5,
      y: 0,
      cursorStyleHandler: s,
      actionHandler: r,
      getActionName: t
    }), n.mr = new f.Control({
      x: 0.5,
      y: 0,
      cursorStyleHandler: s,
      actionHandler: r,
      getActionName: t
    }), n.mb = new f.Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: s,
      actionHandler: e,
      getActionName: t
    }), n.mt = new f.Control({
      x: 0,
      y: -0.5,
      cursorStyleHandler: s,
      actionHandler: e,
      getActionName: t
    }), n.tl = new f.Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: h,
      actionHandler: o
    }), n.tr = new f.Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: h,
      actionHandler: o
    }), n.bl = new f.Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: h,
      actionHandler: o
    }), n.br = new f.Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: h,
      actionHandler: o
    }), n.mtr = new f.Control({
      x: 0,
      y: -0.5,
      actionHandler: c.rotationWithSnapping,
      cursorStyleHandler: c.rotationStyleHandler,
      offsetY: -40,
      withConnection: !0,
      actionName: "rotate"
    }), f.Textbox) {
      var a = f.Textbox.prototype.controls = {};
      a.mtr = n.mtr, a.tr = n.tr, a.br = n.br, a.tl = n.tl, a.bl = n.bl, a.mt = n.mt, a.mb = n.mb, a.mr = new f.Control({
        x: 0.5,
        y: 0,
        actionHandler: c.changeWidth,
        cursorStyleHandler: s,
        actionName: "resizing"
      }), a.ml = new f.Control({
        x: -0.5,
        y: 0,
        actionHandler: c.changeWidth,
        cursorStyleHandler: s,
        actionName: "resizing"
      });
    }
  }();
})(pt);
const Ot = /* @__PURE__ */ bt({
  __proto__: null
}, [pt]);
export {
  pt as a,
  Ot as f
};
//# sourceMappingURL=fabric-BQEeYaXj.js.map
