function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
}

function isObject(value) {
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === "object" || type === "function";
}

function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  // Check if the object is directly from Object.prototype
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
