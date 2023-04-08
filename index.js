const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = (seconds) => {
  const itemId = setInterval(() => {
    let hours = Math.floor(seconds / 60 / 60) % 24;
    let minut = Math.floor(seconds / 60) % 60;
    let secund = Math.floor(seconds % 60);
    secund = secund < 10 ? "0" + secund : secund;
    minut = minut < 10 ? "0" + minut : minut;
    hours = hours < 10 ? "0" + hours : hours;
    timerEl.textContent = `${hours}:${minut}:${secund}`;
    seconds--;
    if (seconds < 0) {
      seconds = 0;
      timerEl.textContent = "Таймер окончен";
      setTimeout(() => {
        clearInterval(itemId);
        if (timerEl.textContent === "Таймер окончен") {
          timerEl.remove();
        }
      }, 2000);
    }
  }, 1000);
};

const animateTimer = inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^\d.]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  inputEl.value = "";
  createTimerAnimator(seconds);
});
