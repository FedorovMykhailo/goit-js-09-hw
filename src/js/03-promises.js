import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
}

function createPromise(position, delay) {
  return new Promise((resolve,reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    setTimeout( () =>{    
      if (shouldResolve) {
        resolve({position,delay});
      }
      else {
        reject({position,delay});
      }},delay);
    })
}

const onSubmit = (event) => {
  event.preventDefault();
  console.log(refs.amount.value);
  if (Number.parseInt(refs.amount.value)<0 || Number.parseInt(refs.step.value)<0 || Number.parseInt(refs.delay.value)<0)
  {Notiflix.Notify.failure("Enter positive values ​​in all fields");}
  else {
  let localDelay = Number.parseInt(refs.delay.value);
  const localStep = Number.parseInt(refs.step.value);
  for (let index = 1; index <= refs.amount.value; index++) {
  createPromise(index, localDelay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
  localDelay += localStep;}
}}

refs.form.addEventListener('submit', onSubmit);