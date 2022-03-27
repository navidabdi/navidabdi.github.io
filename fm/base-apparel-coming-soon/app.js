const comingSoonForm = document.querySelector('.coming-soon-form');
const emailInput = document.querySelector('.email-input input');
const submitEmailBtn = document.querySelector('.email-input button');

submitEmailBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (
    emailInput.value === '' ||
    emailInput.value === undefined ||
    !emailInput.value.match(mailformat)
  ) {
    comingSoonForm.classList.remove('valid');
    comingSoonForm.classList.add('error');
  } else {
    comingSoonForm.classList.remove('error');
    comingSoonForm.classList.add('valid');
  }
});
