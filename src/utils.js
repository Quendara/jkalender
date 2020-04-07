export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max - 1)) + 2;
};

export const ensureMinMax = (value, min, max) => {
  let ret = value;
  if (value > max) {
    ret = min;
  }
  if (value < min) {
    ret = min;
  }
  return ret;
};

export const leadingZero = (num, size) => {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export const digit = (value, digit) => {
  let ret = "" + value;
  return ret[digit];
};

