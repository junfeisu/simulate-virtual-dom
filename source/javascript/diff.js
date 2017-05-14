import listDiff from 'list-diff2'
import util from './util'

const TEXT = 0
const PROPS = 1
const REPLACE = 2

function diff (oldDOM, newDOM) {
  let index = 0
  let differences = {}
  diffNode(oldDOM, newDOM, index, differences)
  return differences
}

function diffNode (oldDOM, newDOM, index, differences) {
  let currentDifferences = []
  if (newDOM) {
    console.log(listDiff(newDOM.key, oldDOM.key, ''))
    if (util.isString(newDOM) && util.isString(newDOM)) {
      if (newDOM !== oldDOM) {
        currentDifferences.push({type: TEXT, content: newDOM})
      }
    } else if (newDOM.tagName === oldDOM.tagName && newDOM.key === oldDOM.key) {
      let propDiffs = diffProps(oldDOM, newDOM)
      if (propDiffs) {
        currentDifferences.push({type: PROPS, content: propDiffs})
      }
      if (newDOM.children && newDOM.children.length) {
        newDOM.children.map(child => {
          diffChildren(oldDOM.children, newDOM.children, index, differences, currentDifferences)
        })
      }
    } else {
      currentDifferences.push({type: REPLACE, content: newDOM})
    }

    if (currentDifferences.length) {
      differences[index] = currentDifferences
    }

  }
}

function diffProps (oldDOM, newDOM) {
  let propDifferences = []
  let count = 0

  for (let key in newDOM.props) {
    if (newDOM[key] !== oldDOM[key]) {
      propDifferences[key] = newDOM[key]
      count++
    }
  }

  return count === 0 ? null : propDifferences
}

function diffChildren (oldChildren, newChildren, index, differences, currentDifferences) {
  let diffChildren = listDiff(oldChildren, newChildren)
  console.log(diffChildren)
  // if (!oldChildren || !newChildren) {
  //   currentDifferences.push()
  // }
}

export default diff
