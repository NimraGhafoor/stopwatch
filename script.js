
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let timerDisplay = document.getElementById("timer");

let startTime, updatedTime, difference, interval;
let running = false;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    interval = setInterval(updateTimer, 10);
    running = true;
    startBtn.disabled = true;
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(interval);
    difference = new Date().getTime() - startTime;
    running = false;
    startBtn.disabled = false;
  }
}

function resetTimer() {
  clearInterval(interval);
  timerDisplay.textContent = "00:00:000";
  running = false;
  difference = 0;
  startBtn.disabled = false;
}

function updateTimer() {
  updatedTime = new Date().getTime() - startTime;

  let minutes = Math.floor(updatedTime / 60000);
  let seconds = Math.floor((updatedTime % 60000) / 1000);
  let milliseconds = updatedTime % 1000;

  timerDisplay.textContent =
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + ":" +
    (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
