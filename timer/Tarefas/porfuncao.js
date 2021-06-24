const inputt = document.querySelector('.inputt');
const btn = document.querySelector('.btn');
const lista = document.querySelector('.lista');

btn.addEventListener('click', function(){               //clic no botão
    if(!inputt.value) return;
    criaTarefa(inputt.value);
});

inputt.addEventListener('keypress', function(e){
    if(e.keyCode==13){                                                              
        if(!inputt.value) return;                             //click na tecla enter
        criaTarefa(inputt.value);
    }
});
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apaga')){

        el.parentElement.remove();
        salvar();
    }
});



//6
function addlistasalvar(){
    const tarefa = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefa);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
   
}
addlistasalvar();

//5     
function salvar(){
 const listas = lista.querySelectorAll('li');
 const listaDeTarefas = [];
 
                                                    
for (let tarefa of listas){
     let listatarefa = tarefa.innerText; // obs tem que ser innerText                   
    listatarefa = listatarefa.replace(' Apagar', '').trim(); 
    listaDeTarefas.push(listatarefa);
}

const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefa', tarefasJSON);


}

//4
function apagarLi(li){
        li.innerText += '  ';
    const btnApagar = document.createElement('button');
    btnApagar.innerHTML= "Apagar"
    btnApagar.setAttribute('class', 'apaga');
    //botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);

}

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||função 1,2,3, quase terminado||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//3
function limpaInput(){
    inputt.value= '';               //para zerar o input
    inputt.focus();                 //para por o cursor
}
//2  
function criali(){
    const li = document.createElement('li');
    return li;                                                 //esta função cria lis             
}

//1  
function criaTarefa(textoI){
    const li = criali();
    li.innerHTML= textoI;           //local para fazer as chamadas
    lista.appendChild(li);
    limpaInput();
    apagarLi(li);
    salvar();
    
}