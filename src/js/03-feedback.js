refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackEmail: document.querySelector('input[name="email"]'),
  feedbackMessage: document.querySelector('textarea[name="message"]'),
};
const throttle = require('lodash.throttle');
const SAVE_FORM = 'feedback-form-state';

refs.feedbackEmail.addEventListener('input', throttle(onTextarealInput, 500));
refs.feedbackMessage.addEventListener('input', throttle(onTextarealInput, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);

populateTextarea();

const objInput = {};

function onTextarealInput(evt) {
  objInput[evt.target.name] = evt.target.value;
  console.log('obj', evt.target.name);
  const stringObjInput = JSON.stringify(objInput);

  localStorage.setItem(`SAVE_FORM`, stringObjInput);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('data-input', JSON.parse(localStorage.getItem('SAVE_FORM')));

  evt.currentTarget.reset();
  localStorage.removeItem('SAVE_FORM');
}

function populateTextarea() {
  const savedEl = JSON.parse(localStorage.getItem('SAVE_FORM'));

  if (savedEl) {
    if (savedEl.email) {
      refs.feedbackEmail.value = savedEl.email;
    }
    if (savedEl.message) {
      refs.feedbackMessage.value = savedEl.message;
    }
  }
}
