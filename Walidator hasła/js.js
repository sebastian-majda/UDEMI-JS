const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "Masz bardzo dobre hasło!";
    p.style.color = "lime";
  } else if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "Masz  dobre hasło!";
    p.style.color = "gold";
  } else {
    p.textContent = "Masz  niepoprawne hasło!";
    p.style.color = "hotpink";
  }
};

pass.addEventListener("keyup", showMsg);
