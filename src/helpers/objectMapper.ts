export default (sourceObject, destObject) => {
  Object.keys(sourceObject).forEach((key) => {
    destObject[key] = sourceObject[key];
  });

  return destObject;
};
