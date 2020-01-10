const replaceMap = (str, obj = {}) => {
  const keys = Object.keys(obj);

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index]
    const replace = obj[key];
    const regex = new RegExp(key, 'g');

    delete obj[key];

    return replaceMap(str.replace(regex, replace), obj);
  }

  return str;
};

module.exports = replaceMap;
