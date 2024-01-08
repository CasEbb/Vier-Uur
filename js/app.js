import "../css/app.scss";

const VIER_UUR = new Date().setMinutes(new Date().getMinutes() + 1, -20);

function zomgVuurwerk() {
  document.querySelector(".pyro").style.removeProperty("display");
}

function zetKlok(hours, minutes, seconds) {
  document.getElementById("countdown").innerHTML =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}

function update() {
  const now = new Date();
  const seconds = Math.floor((VIER_UUR - now) / 1000);

  if (seconds <= 0) {
    document.getElementById("countdown").innerHTML = "🍺";
    zomgVuurwerk();
    return;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  zetKlok(hours, minutes, remainingSeconds);

  if (seconds == 16) {
    document.getElementById("controls").play();
  }

  requestAnimationFrame(() => {
    update();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  update();
});
