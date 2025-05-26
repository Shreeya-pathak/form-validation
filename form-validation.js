const form = document.getElementById('registrationForm');

const fields = [
  { id: 'name', validator: value => value.trim() !== '', errorId: 'nameError' },
  { id: 'email', validator: value => /^\S+@\S+\.\S+$/.test(value), errorId: 'emailError' },
  { id: 'password', validator: value => value.length >= 6, errorId: 'passwordError' },
  { id: 'birthdate', validator: value => value !== '', errorId: 'birthdateError' }
];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isFormValid = true;

  fields.forEach(({ id, validator, errorId }) => {
    const input = document.getElementById(id);
    const errorMsg = document.getElementById(errorId);
    if (!validator(input.value)) {
      isFormValid = false;
      input.classList.add('error');
      errorMsg.classList.add('active');
    } else {
      input.classList.remove('error');
      errorMsg.classList.remove('active');
    }
  });

  if (isFormValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
