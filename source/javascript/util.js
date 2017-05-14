import diff from './diff'

const util = {
  isArray (arr) {
    return arr instanceof Array
  },
  isString (str) {
    return typeof str === 'string'
  },
  toArray (arrayLike) {
    if (!isArray(arrayLike)) {
      return Array.from ? Array.from(arrayLike) : util.slice(arrayLike)
    }
  },
  slice (arr) {
    return Array.prototype.slice.call(arr)
  },
  setAttr (el, key, value) {
    switch (key) {
      case 'style':
        el.style.cssText = value
        break
      case 'value':
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = value
        } else {
          el.setAttribute(key, value)
        }
        break
      default:
        el.setAttribute(key, value)
        break
    }
  }
}

export default util
