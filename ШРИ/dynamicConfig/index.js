module.exports = function (configValue /* (key: string) => string */) {
  let currentConfig = "first";

  const makeDynamicConfig = (obj) => {
    const dynamicObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && !Array.isArray(value)) {
        dynamicObj[key] = makeDynamicConfig(value);
      } else if (Array.isArray(value)) {
        dynamicObj[key] = value.map((item) => {
          if (typeof item === "object" && !Array.isArray(item)) {
            return makeDynamicConfig(item);
          } else if (typeof item === "string" && item.startsWith("dynamic:")) {
            const configKey = item.slice(8);
            return dynamicConfigValue(configKey);
          } else {
            return item;
          }
        });
      } else if (typeof value === "string" && value.startsWith("dynamic:")) {
        const configKey = value.slice(8);
        dynamicObj[key] = dynamicConfigValue(configKey);
      } else {
        dynamicObj[key] = value;
      }
    }
    return dynamicObj;
  };

  const dynamicConfigValue = (key) => {
    return `${currentConfig}:${configValue(key)}`;
  };

  const changeConfig = (newConfig) => {
    currentConfig = newConfig;
  };

  return {
    makeDynamicConfig,
    dynamicConfigValue,
    changeConfig,
  };
};
