import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const emailField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');
const savedData = localStorage.getItem('feedback-form-state');
const parsedSavedData = JSON.parse(savedData);

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

if (parsedSavedData) {
  emailField.value = parsedSavedData.email;
  messageField.value = parsedSavedData.message;
}

function handleInput(event) {
  const email = form.email.value;
  const message = form.message.value;

  console.log(`Email: ${email}, message: ${message}`);

  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(`Email: ${email.value}, message: ${message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
