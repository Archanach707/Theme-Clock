const hourEL = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')
const secondEL = document.querySelector('.second')
const timeEL = document.querySelector('.time')
const dateEL = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }

})

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();

  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  // console.log(time)
}


// https://www.thiscodeworks.com/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers-stack-overflow-javascript/603cc9b889ee500014f6252d

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()

setInterval(setTime, 1000)