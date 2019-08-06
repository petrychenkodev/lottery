let buttons = document.querySelectorAll(".block-1 li");
let counterButtonsBlock1 = 0;
let errorText = document.querySelector(".block-1 p");
let submitBtn = document.querySelector(".block-1 button");
submitBtn.disabled = true;

buttons.forEach(el => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      counterButtonsBlock1--;
    } else {
      el.classList.add("active");
      counterButtonsBlock1++;
    }
    if (counterButtonsBlock1 < 5) {
      errorText.textContent = "Необходимо выбрать всего 5 позиций в карточке";
      submitBtn.disabled = true;
    } else {
      errorText.textContent = "";
      submitBtn.disabled = false;
    }
  });
});
