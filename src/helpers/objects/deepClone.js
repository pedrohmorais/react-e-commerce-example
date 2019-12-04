function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  if (obj === null) return null;

  if (typeof obj === 'object') {
    const clone = {};

    Object.keys(obj).forEach((key) => {
      clone[key] = deepClone(obj[key]);
    });

    return clone;
  }

  return obj;
}

export default deepClone;
