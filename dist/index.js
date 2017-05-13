(function(_g){(function(f){if(typeof exports==='object'&&typeof module!=='undefined'){module.exports=f()}else if(typeof define==='function'&&define.amd){define([],f.bind(_g))}else{f()}})(function(define,module,exports){var _m =(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props || {};
  this.children = _util2.default.isArray(children) ? children : [];
}

Element.prototype.render = function () {
  console.log(this);
  var el = document.createElement(this.tagName);

  var props = this.props;
  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      _util2.default.setAttr(el, prop, props[prop]);
    }
  }

  this.children.map(function (child) {
    var childEle = child instanceof Element ? child.render() : document.createTextNode(child);
    el.appendChild(childEle);
  });

  return el;
};

exports.default = Element;

},{"./util":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  isArray: function isArray(arr) {
    return arr instanceof Array;
  },
  toArray: function toArray(arrayLike) {
    if (!isArray(arrayLike)) {
      return Array.from ? Array.from(arrayLike) : util.slice(arrayLike);
    }
  },
  slice: function slice(arr) {
    return Array.prototype.slice.call(arr);
  },
  setAttr: function setAttr(el, key, value) {
    switch (key) {
      case 'style':
        el.style.cssText = value;
        break;
      case 'value':
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = value;
        } else {
          el.setAttribute(key, value);
        }
        break;
      default:
        el.setAttribute(key, value);
        break;
    }
  }
};

exports.default = util;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvamF2YXNjcmlwdC9lbGVtZW50LmpzIiwic291cmNlL2phdmFzY3JpcHQvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxTQUFTLE9BQVQsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsRUFBNEM7QUFDMUMsT0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLE9BQUssS0FBTCxHQUFhLFNBQVMsRUFBdEI7QUFDQSxPQUFLLFFBQUwsR0FBZ0IsZUFBSyxPQUFMLENBQWEsUUFBYixJQUF5QixRQUF6QixHQUFvQyxFQUFwRDtBQUNEOztBQUVELFFBQVEsU0FBUixDQUFrQixNQUFsQixHQUEyQixZQUFZO0FBQ3JDLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxNQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLEtBQUssT0FBNUIsQ0FBVDs7QUFFQSxNQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLE9BQUssSUFBSSxJQUFULElBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUksTUFBTSxjQUFOLENBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDOUIscUJBQUssT0FBTCxDQUFhLEVBQWIsRUFBaUIsSUFBakIsRUFBdUIsTUFBTSxJQUFOLENBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGlCQUFTO0FBQ3pCLFFBQUksV0FBVyxpQkFBaUIsT0FBakIsR0FBMkIsTUFBTSxNQUFOLEVBQTNCLEdBQTRDLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUEzRDtBQUNBLE9BQUcsV0FBSCxDQUFlLFFBQWY7QUFDRCxHQUhEOztBQUtBLFNBQU8sRUFBUDtBQUNELENBakJEOztrQkFtQmUsTzs7Ozs7Ozs7QUMzQmYsSUFBTSxPQUFPO0FBQ1gsU0FEVyxtQkFDRixHQURFLEVBQ0c7QUFDWixXQUFPLGVBQWUsS0FBdEI7QUFDRCxHQUhVO0FBSVgsU0FKVyxtQkFJRixTQUpFLEVBSVM7QUFDbEIsUUFBSSxDQUFDLFFBQVEsU0FBUixDQUFMLEVBQXlCO0FBQ3ZCLGFBQU8sTUFBTSxJQUFOLEdBQWEsTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFiLEdBQXFDLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FBNUM7QUFDRDtBQUNGLEdBUlU7QUFTWCxPQVRXLGlCQVNKLEdBVEksRUFTQztBQUNWLFdBQU8sTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLEdBQTNCLENBQVA7QUFDRCxHQVhVO0FBWVgsU0FaVyxtQkFZRixFQVpFLEVBWUUsR0FaRixFQVlPLEtBWlAsRUFZYztBQUN2QixZQUFRLEdBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxXQUFHLEtBQUgsQ0FBUyxPQUFULEdBQW1CLEtBQW5CO0FBQ0E7QUFDRixXQUFLLE9BQUw7QUFDRSxZQUFJLEdBQUcsT0FBSCxLQUFlLE9BQWYsSUFBMEIsR0FBRyxPQUFILEtBQWUsVUFBN0MsRUFBeUQ7QUFDdkQsYUFBRyxLQUFILEdBQVcsS0FBWDtBQUNELFNBRkQsTUFFTztBQUNMLGFBQUcsWUFBSCxDQUFnQixHQUFoQixFQUFxQixLQUFyQjtBQUNEO0FBQ0Q7QUFDRjtBQUNFLFdBQUcsWUFBSCxDQUFnQixHQUFoQixFQUFxQixLQUFyQjtBQUNBO0FBYko7QUFlRDtBQTVCVSxDQUFiOztrQkErQmUsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmZ1bmN0aW9uIEVsZW1lbnQgKHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbikge1xuICB0aGlzLnRhZ05hbWUgPSB0YWdOYW1lXG4gIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLmNoaWxkcmVuID0gdXRpbC5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW11cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyh0aGlzKVxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnTmFtZSlcblxuICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXG4gIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHV0aWwuc2V0QXR0cihlbCwgcHJvcCwgcHJvcHNbcHJvcF0pXG4gICAgfVxuICB9XG5cbiAgdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgIGxldCBjaGlsZEVsZSA9IGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudCA/IGNoaWxkLnJlbmRlcigpIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpXG4gICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGRFbGUpXG4gIH0pXG5cbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRcbiIsImNvbnN0IHV0aWwgPSB7XG4gIGlzQXJyYXkgKGFycikge1xuICAgIHJldHVybiBhcnIgaW5zdGFuY2VvZiBBcnJheVxuICB9LFxuICB0b0FycmF5IChhcnJheUxpa2UpIHtcbiAgICBpZiAoIWlzQXJyYXkoYXJyYXlMaWtlKSkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20gPyBBcnJheS5mcm9tKGFycmF5TGlrZSkgOiB1dGlsLnNsaWNlKGFycmF5TGlrZSlcbiAgICB9XG4gIH0sXG4gIHNsaWNlIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKVxuICB9LFxuICBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbFxuIl19
var _r=_m(1);_g.Sjf=_g.SjfDataBind=_r;return _r;})})(typeof window!=='undefined'?window:(typeof global!=='undefined'?global:(typeof self!=='undefined'?self:this)));