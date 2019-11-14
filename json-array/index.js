import typeIs from '@tao-zhi-xue-tang/type-is'

class JsonArray {
  // constructor () {
  // }
}

/**
 * 判断给定的值，是否是数组类型
 * @param {Array} target
 * @returns {boolean}
 */
JsonArray.prototype.isArrayType = function (target) {
  if (typeIs.isArray(target)) {
    return true
  }
  throw new Error('不是数组类型')
}

/**
 * 判断传入的参数是什么数据类型
 * @param target
 * @returns {string}
 */
JsonArray.prototype.targetType = function (target) {
  if (typeIs.isNull(target)) {
    return 'null'
  } else if (typeIs.isUndefined(target)) {
    return 'Undefined'
  } else if (typeIs.isBoolean(target)) {
    return 'Boolean'
  } else if (typeIs.isString(target)) {
    return 'String'
  } else if (typeIs.isNumber(target)) {
    return 'Number'
  } else if (typeIs.isObject(target)) {
    return 'Object'
  } else if (typeIs.isSymbol(target)) {
    return 'Symbol'
  } else if (typeIs.isFunction(target)) {
    return 'Function'
  }
}

/**
 * 判断所给的json数组中，每个子对象中某一个属性值是否都是同一数据类型
 * @param {Array} target
 * @param {String} key
 * @returns {boolean}
 */
JsonArray.prototype.detection = function (target, key) {
  const elementType = this.targetType(target[0][key])
  const isTypeSame = target.find(element => {
    return this.targetType(element[key]) !== elementType
  })
  return !isTypeSame
}

/**
 * 对象数组根据某个属性值排序
 * @param {Array} target
 * @param {String} key
 * @returns {Array}
 */
JsonArray.prototype.sortByKey = function (target, key) {
  this.isArrayType(target)
  if (target.length > 0) {
    return target.sort((a, b) => {
      let x = a[key]
      let y = b[key]
      return x - y
    })
  }
}

export default new JsonArray()
