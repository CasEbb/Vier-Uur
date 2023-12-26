import "./style.css";

var ID;
var now = new Date();
var event = new Date();
var sekonds;
var seconds;
event.setHours(15, 25, 0, 0);

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function update() {
  now = new Date();
  sekonds = Math.round((event - now) / 1000);
  seconds = sekonds;
  var minutes = 0;
  var hours = 0;
  while (seconds >= 3600) {
    seconds -= 3600;
    hours++;
  }
  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }
  if (sekonds == 16) {
    document.getElementById("controls").play();
  }
  if (sekonds <= 0) {
    clearInterval(ID);
    document.getElementById("countdown").innerHTML = "🍺";
    document.querySelector(".pyro").style.display = "initial";
  } else {
    document.getElementById("countdown").innerHTML =
      pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  update();
  var seconds = Math.round((event - now) / 1000);
  if (seconds > 0) {
    ID = window.setInterval(update, 900);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  move();
});
