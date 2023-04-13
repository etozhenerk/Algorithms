const TimeLimitedCache = function () {
  this.keys = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existTime = Date.now() + duration;

  if (this.keys.has(key)) {
    const currentKey = this.keys.get(key);

    currentKey.value = value;
    currentKey.existTime = existTime;

    return true;
  } else {
    this.keys.set(key, { value: value, existTime: existTime });

    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.keys.has(key)) {
    const currentKey = this.keys.get(key);

    if (currentKey.existTime < Date.now()) {
      this.keys.delete(key);

      return -1;
    } else {
      return currentKey.value;
    }
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (const currentKey of this.keys.values()) {
    if (currentKey.existTime >= Date.now()) {
      count++;
    }
  }
  return count;
};
