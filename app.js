const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
  } else {
    password.classList.remove('error');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const fields = ['firstName', 'lastName', 'email', 'password'];
  fields.forEach(field => {
      const input = document.getElementById(field);
      const errorElement = document.getElementById(field + 'Error');
      if (!input.value) {
          errorElement.textContent = `${field} cannot be empty`;
          valid = false;
      } else if (field === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
          errorElement.textContent = 'Looks like this is not an email';
          valid = false;
      } else {
          errorElement.textContent = '';
      }
  });
  if (valid) {
      // Submit the form or perform further actions
  }
});
