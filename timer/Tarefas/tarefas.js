
const inputTarefa = document.querySelector('.inputTarefas');
const btnTarefa = document.querySelector('.btn');
const tarefas = document.querySelector('.tarefas');



inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      if (!inputTarefa.value) return;             
      criaTarefa(inputTarefa.value);
    }
});




btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;        
    criaTarefa(inputTarefa.value);
});





document.addEventListener('click', function(e) {
    const el = e.target;
  
    if (el.classList.contains('apagar')) {     
      el.parentElement.remove();
      salvarTarefas();
    }
});



//__________________________________________________________
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function criaLi() {
    const li = document.createElement('li');   
    return li;
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function limpaInput() {
    inputTarefa.value = '';       
    inputTarefa.focus();
}  
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);      
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); 
      listaDeTarefas.push(tarefaTexto);
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {                     
      criaTarefa(tarefa);
    }
}
  adicionaTarefasSalvas();