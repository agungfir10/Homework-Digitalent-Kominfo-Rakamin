const r = "reamur",
  f = "fahrenheit",
  c = "celcius",
  k = "kelvin";

let convert = (from, to, temp) => {
  if (from === r) {
    if (to === f) {
      temp = temp * 2.25 + 32;
    } else if (to === c) {
      temp = temp * 1.25;
    } else if (to === k) {
      temp = temp * 1.25 + 273 / 15;
    } else {
      temp = temp;
    }
  } else if (from === f) {
    if (to === r) {
      temp = (temp - 32) / 2.25;
    } else if (to === c) {
      temp = ((temp - 32) * 5) / 9;
    } else if (to === k) {
      temp = ((temp - 32) * 5) / 9 + 273.15;
    } else {
      temp = temp;
    }
  } else if (from === c) {
    if (to === f) {
      temp = (temp * 9) / 5 + 32;
    } else if (to === r) {
      temp = (temp * 4) / 5;
    } else if (to === k) {
      temp = temp + 273.15;
    } else {
      temp = temp;
    }
  } else if (from === k) {
    if (to === f) {
      temp = ((temp - 273.15) * 9) / 5 + 32;
    } else if (to === c) {
      temp = temp - 273.15;
    } else if (to === r) {
      temp = (temp - 273.15) * 0.8;
    } else {
      temp = temp;
    }
  }
  let result =
    temp % 1 != 0 ? Math.round((temp + Number.EPSILON) * 100) / 100 : temp;
  return result;
};

module.exports = convert;
