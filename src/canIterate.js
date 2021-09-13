export default (obj) => {
  try {
    return !!obj[Symbol.iterator];
  } catch (e) {
    return false;
  }
};
