const convert = require("./convert-temp");

const selectsFromTemp = document.getElementById("from-temp");
const selectsToTemp = document.getElementById("to-temp");
const inputToConvertTemp = document.getElementById("input-to-convert");
const convertResult = document.getElementById("convert-result");
const inputBgColor = document.querySelector("#input-bg-color");

inputToConvertTemp.addEventListener("input", (e) => {
  let result = convert(
    selectsFromTemp.value,
    selectsToTemp.value,
    inputToConvertTemp.value
  );
  convertResult.value = result;
});

selectsFromTemp.addEventListener("change", (e) => {
  let result = convert(
    selectsFromTemp.value,
    selectsToTemp.value,
    inputToConvertTemp.value
  );
  convertResult.value = result;
});

selectsToTemp.addEventListener("change", (e) => {
  let result = convert(
    selectsFromTemp.value,
    selectsToTemp.value,
    inputToConvertTemp.value
  );
  convertResult.value = result;
});

document.querySelector("#submit-bg-color").addEventListener("click", (e) => {
  document.body.style.backgroundColor = inputBgColor.value;
});

inputBgColor.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.body.style.backgroundColor = e.value;
    document.querySelector("#submit-bg-color").click();
  }
});
