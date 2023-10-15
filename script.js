const calculate = () => {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function () {
    let answer = eval(screen.value);
    screen.value = answer;
  });

  clear.addEventListener("click", (e) => {
    screen.value = "";
  });
};

calculate();
