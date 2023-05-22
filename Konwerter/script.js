const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    two.textContent = "°F";
    one.textContent = "°C";
    result.textContent = "";
  }
};

const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      tempConvertCtoF();
    } else {
      tempConvertFtoC();
    }
  } else {
    result.textContent = "musisz podać jakąś wartość";
  }
};

const tempConvertFtoC = () => {
  let fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°F to ${fahrenheit.toFixed(1)}°C`;
  converter.value = "";
};

const tempConvertCtoF = () => {
  let celcius = ((converter.value - 32) * 5) / 9;
  result.textContent = `${converter.value}°C to ${celcius.toFixed(1)}°F`;
  converter.value = "";
};

const reset = () => {
  result.textContent = "";
  converter.value = "";
};

convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
