// TIME =================================================================
function leadingZero(value) {
  if (value < 10) {
    return (value = `0${value}`);
  } else {
    return value;
  }
}

function setTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time = `${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(
    seconds
  )}`;
  let timeElement = document.querySelector("h1");
  timeElement.innerHTML = `${time}`;
}

// Runs the setTime function every second
//(1 sec = 1000 ms) to update seconds
setInterval(setTime, 1000);

// CLOCK ================================================================
const secondsElement = document.querySelector(".second-hand");
const minutesElement = document.querySelector(".min-hand");
const hoursElement = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Turns seconds (based 60) into degrees (based 360),
  // so that 0 seconds = 0 degrees and 60 seconds = 360 degrees
  // and compensated the initial rotation by adding 90
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  // Styles the seconds hand with a rotation of secondsDegrees
  secondsElement.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesElement.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursElement.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Runs the setDate function every second
//(1 sec = 1000 ms) to update clock
setInterval(setDate, 1000);
