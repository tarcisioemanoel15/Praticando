const btn = document.querySelector('.btn-login');
const form = document.querySelector('form');

btn.addEventListener('click', event =>{
event.preventDefault();
form.classList.add('form-hide');
});