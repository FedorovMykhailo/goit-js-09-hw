import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const refs = {
    inputCalendar: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    resetBtn: document.querySelector('button[data-reset]'),
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
let choseDate
let timeId

const interval = () => {
    refs.startBtn.setAttribute("disabled",true)
     timeId = setInterval(()=>{
      if (countTimer()< 1000) { 
        clearInterval(timeId); refs.startBtn.removeEventListener('click',interval)
      } 
      else {countTimer}},1000)
  return timeId}
   
  const resetInterval = () => {
    console.log(timeId);
    clearInterval(timeId);
    refs.timer.forEach((el)=>{
      const key = Object.keys(el.dataset).toString();
      el.textContent = 0;
      })
  }

const countTimer = () => {
  const now = new Date();
  console.log(choseDate);
  console.log(typeof choseDate);
  const date = choseDate.getTime()-now.getTime();
  if (date<1000) {Notiflix.Notify.failure("Please rechoose a date in the future");}
  else {
  const dateCount = convertMs(choseDate.getTime()-now.getTime());
  refs.timer.forEach((el)=>{
  const key = Object.keys(el.dataset).toString();
  el.textContent = dateCount[key];
  })}
return date}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choseDate = selectedDates[0]
      const now1 = new Date();
      console.log(choseDate);
      console.log(typeof now1.getTime());
      console.log(typeof choseDate.getTime());
      if (choseDate < now1) {
        refs.startBtn.setAttribute('disabled','true');
        Notiflix.Notify.failure("Please choose a date in the future");        
      }
      else {
        refs.startBtn.removeAttribute('disabled')    
        }
      
      //   const countTimer = () => {
      //     const now = new Date();
      //     const date = selectedDates[0].getTime()-now.getTime();
      //     const dateCount = convertMs(selectedDates[0].getTime()-now.getTime());
      //   refs.timer.forEach((el)=>{
      //   const key = Object.keys(el.dataset).toString();
      //   el.textContent = dateCount[key];
      //   })
      // return date}
      
      // const interval = () => {
      //   refs.startBtn.setAttribute("disabled",true)
      //      const timeId = setInterval(()=>{
      //       if (countTimer()< 1000) { 
      //         clearInterval(timeId); refs.startBtn.removeEventListener('click',interval)
      //       } 
      //       else {countTimer}},1000)
      //   }
        
        refs.startBtn.addEventListener('click', interval)
        refs.resetBtn.addEventListener('click', resetInterval)
      }
  };

refs.startBtn.setAttribute('disabled','true');
const calendar = flatpickr(refs.inputCalendar, options);

// refs.startBtn.addEventListener('click', interval)
// refs.resetBtn.addEventListener('click', resetInterval)

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

console.log(refs.resetBtn);