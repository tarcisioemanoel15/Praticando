const meutimer = document.querySelector('.meutimer')

function segundos(seg){
    let data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}
console.log(segundos(10))
let seg = 0;
let timer;
function contador(){
    timer = setInterval(function(){
        seg++
        meutimer.innerHTML = (segundos(seg));
    },1000)
}

document.addEventListener('click', function(e){
const el = e.target;

if(el.classList.contains('iniciar')){
    meutimer.classList.remove('corA')
    clearInterval(timer);
    contador(segundos)
}
if(el.classList.contains('pausar')){
    meutimer.classList.add('corA')
    clearInterval(timer);
    
}
if(el.classList.contains('zerar')){
    meutimer.classList.remove('corA')
    clearInterval(timer);
    seg = 0;
    meutimer.innerHTML= '00:00:00';
}

});


