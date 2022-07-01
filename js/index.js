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
  const minuts = time.getMinutes()
  const seconds = time.getSeconds()

  hourEL.style.transform = `translate(-50%, -100%) rotate(30deg)`




  // console.log(time)
}
setTime()