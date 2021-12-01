const throttle = require('lodash.throttle');

refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackEmail: document.querySelector('input[name="email"]'),
  feedbackMessage: document.querySelector('textarea[name="message"]'),
};

refs.feedbackEmail.addEventListener('input', throttle(onTextarealInput, 500));
refs.feedbackMessage.addEventListener('input', throttle(onTextarealInput, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);

const SAVE_FORM = 'feedback-form-state';

const objInput = {};
populateTextarea();

function onTextarealInput(evt) {
  objInput[evt.target.name] = evt.target.value;

  const stringObjInput = JSON.stringify(objInput);

  localStorage.setItem(`SAVE_FORM`, stringObjInput);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem('SAVE_FORM');

  // objInput clear
  for (const key in objInput) {
    delete objInput[key];
  }
}

function populateTextarea() {
  const savedEl = JSON.parse(localStorage.getItem('SAVE_FORM'));

  if (savedEl) {
    if (savedEl.email) {
      refs.feedbackEmail.value = savedEl.email;
      objInput['email'] = savedEl.email;
    }
    if (savedEl.message) {
      refs.feedbackMessage.value = savedEl.message;
      objInput['message'] = savedEl.message;
    }
  }
}
