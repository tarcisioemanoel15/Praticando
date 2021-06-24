const btn = document.querySelector('.btn-login');
const form = document.querySelector('form');

btn.addEventListener('click', event =>{
event.preventDefault();
form.classList.add('form-hide');
});



/*sumir com a barra de rolagem */
form.addEventListener('animationstart', event => {
if (event.animationName === 'down'){
    document.querySelector('body').style.overflow = ('hidden')
}
});

/*Remover do formulario o HTML */
form.addEventListener('animationend', (event) => {
    if (event.animationName === 'down'){
        form.style.display ='none';
        document.querySelector('body').style.overflow = ('none')
    }
});
