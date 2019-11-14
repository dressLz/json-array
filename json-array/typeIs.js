var names = {
  undefined: 'undefined',
  null: 'null',
  boolean: 'boolean',
  string: 'string',
  number: 'number',
  object: 'object',
  symbol: 'symbol',
  function: 'function',
};

/**
 * 判断一个对象是否是 null
 *
 * @param {Object} value 要判断的对象
 * @returns {boolean} 如果 value 是 null，则返回 true
 */
function isNull(value) {
  return value === null;
}

/**
 * 判断一个变量的类型，可以正确的区别 object 和 null
 *
 * @param {any} value 要判断的变量
 * @returns {string} 该变量的类型
 */
function type(value) {
  const typeName = typeof value;
  if (typeName === names.object) {
    // 如果 value 是 object 的话，判断一下是不是 null
    return isNull(value) ? names.null : typeName;
  }
  return typeName;
}

function isUndefined(target) {
  return type(target) === names.undefined;
}
function isNull$1(target) {
  return type(target) === names.null;
}
function isBoolean(target) {
  return type(target) === names.boolean;
}
function isString(target) {
  return type(target) === names.string;
}
function isNumber(target) {
  return type(target) === names.number;
}
function isObject(target) {
  return type(target) === names.object;
}
function isSymbol(target) {
  return type(target) === names.symbol;
}
function isFunction(target) {
  return type(target) === names.function;
}

function isNaN(target) {
  if (type(target) === names.number) {
    return Number.isNaN(target);
  }
  return false;
}
function isInfinity(target) {
  if (type(target) === names.number) {
    return !Number.isFinite(target);
  }
  return false;
}
function isInt(target) {
  if (type(target) === names.number) {
    if (!isNaN(target) && !isInfinity(target)) {
      return Number.isInteger(target);
    }
  }
  return false;
}
function isFloat(target) {
  if (type(target) === names.number) {
    if (!isNaN(target) && !isInfinity(target)) {
      return !Number.isInteger(target);
    }
  }
  return false;
}
function isArray(target) {
  if (type(target) === names.object) {
    return target instanceof Array;
  }
  return false;
}
function isTrue(target) {
  if (type(target) === names.boolean) {
    return target;
  }
  return false;
}
function isFalse(target) {
  if (type(target) === names.boolean) {
    return !target;
  }
  return false;
}
function isTruthy(target) {
  return !!target;
}
function isFalsy(target) {
  return !target;
}
function isNone(target) {
  return [names.null, names.undefined].includes(type(target));
}
function isBlank(target) {
  if (type(target) === names.string) { // 只对 string 有效
    return target.length < 1;
  }
  return true;
}
function isEmpty(target) {
  if (type(target) === names.string) { // 只对 string 有效
    return target.trim().length < 1;
  }
  return true;
}

var index = {
  names,
  type,
  // 基本类型
  isUndefined,
  isNull: isNull$1,
  isBoolean,
  isString,
  isNumber,
  isObject,
  isSymbol,
  isFunction,
  // expand
  isInt,
  isFloat,
  isNaN,
  isInfinity,
  isArray,
  isTrue,
  isFalse,
  isNone,
  isTruthy,
  isFalsy,
  isBlank,
  isEmpty,
};

export default index;
