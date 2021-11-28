/*
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v3.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof
        module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).noframe = t()
}(this, function () {
    "use strict";
    function t() {
        for (var e = 0, t = 0, o = arguments.length;
            t < o;
            t++)e += arguments[t].length;
        for (var n = Array(e), i = 0, t = 0;
            t < o;
            t++)for (var f = arguments[t], r = 0, d = f.length;
                r < d;
                r++ , i++)n[i] = f[r];
        return n
    } return function (e, a) {
        return ("string" == typeof e ? t(document.querySelectorAll(e)) : "length" in e ? t(e) : [e]).forEach(function (e) {
            var t, o, n, i = void 0 !== a && document.querySelector(a), f = i ? document.querySelector(a) : e.parentElement, r = e.offsetHeight, d = e.offsetWidth, l = e.style;
            i ? (t = window.getComputedStyle(f, null).getPropertyValue("max-width"), l.width = "100%", l.maxHeight = "calc(" + t + " * " + r + " / " + d + ")") : (l.display = "block", l.marginLeft = "auto", l.marginRight = "auto", o = d > f.offsetWidth ? f.offsetWidth : d, n = d > f.offsetWidth ? o * r / d : d * (r / d), l.maxHeight = n + "px", l.width = o + "px");
            var u = 100 * r / d;
            l.height = u + "vw", l.maxWidth = "100%"
        })
    }
});

