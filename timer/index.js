let meutimer = document.querySelector('.meutimer')
function segundos(seg){
    let data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:  false,
        timeZone: 'UTC'
    });
}
console.log(segundos(10));


let seg = 0;
let timer;
function cr(){
timer = setInterval(function(){
    seg++
    meutimer.innerHTML= (segundos(seg));
});
//,1000
}


document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('iniciar')){
        clearInterval(timer)
        cr(segundos);
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer)
        meutimer.classList.add('cor')
    }
    if(el.classList.contains('zerar')){
        meutimer.classList.remove('cor')
        clearInterval(timer);
        meutimer.innerHTML= '00:00:00';
        seg = 0;
    }
    
    
        


})

