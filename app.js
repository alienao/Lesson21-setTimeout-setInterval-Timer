let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let time;

document.formTimer.start.onclick = () => start();
document.formTimer.pause.onclick = () => pause();
document.formTimer.stop.onclick = () => stop();
document.formTimer.reset.onclick = () => reset();

function start() {
  pause();
  time = setInterval(() => {
    timer();
  }, 10);
}

function pause() {
  clearInterval(time);
}

function stop() {
  clearInterval(time);
  document.getElementById("forStop").innerText =
    `${returnData(hour)}:` +
    `${returnData(minute)}:` +
    `${returnData(second)}:` +
    `${returnData(millisecond)}`;
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("millisecond").innerText = "000";
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  document.getElementById("millisecond").innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}
