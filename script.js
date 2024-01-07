const createAccountBtn = document.querySelector('#create-account-btn');
const password = document.querySelector('#password-field');
const passwordContainer = document.querySelector('.password');
const confirmPassword = document.querySelector('#confirm-password-field');
const email = document.querySelector(`#email-field`);
const emailContainer = document.querySelector('.email');
const allFields = document.querySelectorAll('input');

let hasClass = (parent, className) => {
  return Array.from(parent.children).some(child => child.classList.contains(className));
}

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

let checkValidEmail = () => {
  if (!isEmailValid(email.value) && !hasClass(email.parentElement, 'error-msg-email')) {
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error-msg-email');
    errorMsg.innerHTML = '* Please Enter A Valid Email';
    errorMsg.setAttribute('style', 'color: red; font-size: 10px');
    email.parentElement.appendChild(errorMsg);
  } else if (isEmailValid(email.value)) {
      let errorElm = email.parentElement.querySelector('.error-msg-email');
      if (errorElm) {
        email.parentElement.removeChild(errorElm);
      }
  }
}

let checkRequiredFields = () => {
  allFields.forEach(field => {
    if (field.value === "" && !hasClass(field.parentElement, 'error-msg-empty')) {
      let errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg-empty');
      errorMsg.innerHTML = '* This Field is Required';
      errorMsg.setAttribute('style', 'color: red; font-size: 10px');
      field.parentElement.appendChild(errorMsg);
    } else if (field.value !== "") {
      let errorElm = field.parentElement.querySelector('.error-msg-empty');
      if (errorElm) {
        field.parentElement.removeChild(errorElm);
      }
    }
  });
}

let checkPassword = () => {
  if (password.value !== confirmPassword.value && !hasClass(passwordContainer, 'error-msg')) {
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error-msg');
    errorMsg.innerHTML = '* Passwords do not match';
    errorMsg.setAttribute('style', 'color: red; font-size: 10px');
    passwordContainer.appendChild(errorMsg);
  } else if (password.value === confirmPassword.value) {
    let errorElm = passwordContainer.querySelector('.error-msg');
    if (errorElm) {
      passwordContainer.removeChild(errorElm);
    }
  }
}

createAccountBtn.addEventListener('click', () => {
  checkPassword();
  checkRequiredFields();
  checkValidEmail();
});
