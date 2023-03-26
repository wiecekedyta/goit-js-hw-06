let counterValue = 0
const value = document.querySelector("#value");
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
decBtn.addEventListener("click", () => {
    counterValue -= 1;
    console.log(counterValue);
    value.textContent = counterValue;
  });
  incBtn.addEventListener("click", () => {
    counterValue += 1;
    console.log(counterValue);
    value.textContent = counterValue;
  });
  