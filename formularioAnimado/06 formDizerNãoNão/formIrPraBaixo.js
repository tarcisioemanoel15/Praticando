const btn = document.querySelector('.btn-login');
const form = document.querySelector('form');

btn.addEventListener('click', event =>{
event.preventDefault();


/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
/*Fazer o formulario dizer nãoNão */
const fields = [...document.querySelectorAll(".input-block input")];

fields.forEach(field => {
    if(field.value === "")form.classList.add('validate-error');   
});

const formError = document.querySelector('.validate-error');
if(formError) {
    formError.addEventListener('animationend', (event) => {
        if(event.animationName === 'nono'){
            formError.classList.remove('validate-error');
        }
    });
}else{
    form.classList.add('form-hide');
}

/*fim do naoNão */
/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
});


/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/


/*sumir com a barra de rolagem */
form.addEventListener('animationstart', event => {
if (event.animationName === 'down'){
    document.querySelector('body').style.overflow = ('hidden')
}
});

/*Remover o formulario do HTML */
form.addEventListener('animationend', (event) => {
    if (event.animationName === 'down'){
        form.style.display ='none';
        document.querySelector('body').style.overflow = ('none')
    }
});


/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////*/

/*Fim do formulario animado */
/*cubos subindo de baixo para cima
em diferntes tamanhos e Jirando*/
