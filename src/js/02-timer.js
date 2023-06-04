import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
    inputCalendar: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    timer: document.querySelectorAll('.value'),
}
// console.log(refs.timer[1].dataset.hasOwnProperty('hours'));
// console.log(Object.keys(refs.timer[1].dataset));
// console.log(refs.timer[1].textContent=convertMs);
// const now = new Date();
// const selectedDates = new Date('2024');
//const dateCount = convertMs(selectedDates.getTime()-now.getTime()) ;
// refs.timer.forEach((el)=>{
//   const key = Object.keys(el.dataset).toString();
//   el.textContent = dateCount[key]
//   console.log( key);
// })

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const now1 = new Date();
      if (selectedDates[0] < now1) {
        refs.startBtn.setAttribute('disabled','true');
        Notiflix.Notify.failure("Please choose a date in the future");        
      }
      else {
        refs.startBtn.removeAttribute('disabled')        
        }
        
        const countTimer = () => {
          const now = new Date();
          const date = selectedDates[0].getTime()-now.getTime();
          const dateCount = convertMs(selectedDates[0].getTime()-now.getTime());
        refs.timer.forEach((el)=>{
        const key = Object.keys(el.dataset).toString();
        el.textContent = dateCount[key];
        })
      return date}
      
      const interval = () => {
          const timeId = setInterval(()=>{if (countTimer()< 1000) { clearInterval(timeId)} else {countTimer}},1000)
        }
        
        refs.startBtn.addEventListener('click', interval)
      }
  };

refs.startBtn.setAttribute('disabled','true');
const calendar = flatpickr(refs.inputCalendar, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

