import util from './util'

function Element (tagName, props, children) {
  this.tagName = tagName
  this.props = props || {}
  this.children = util.isArray(children) ? children : []
}

Element.prototype.render = function () {
  console.log(this)
  let el = document.createElement(this.tagName)

  let props = this.props
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      util.setAttr(el, prop, props[prop])
    }
  }

  this.children.map(child => {
    let childEle = child instanceof Element ? child.render() : document.createTextNode(child)
    el.appendChild(childEle)
  })

  return el
}

export default Element
