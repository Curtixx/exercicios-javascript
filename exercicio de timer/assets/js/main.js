const timer = document.querySelector(".timer")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".parar")
const zerar = document.querySelector(".zerar")
let segundos = 0
let relogio
function mostrarHora(segundos){
    let data = new Date(segundos * 1000)
    const teste = data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: "UTC"
    })
    
    timer.innerHTML = teste
}
function começar(){
    relogio = setInterval(function(){
        segundos++
        mostrarHora(segundos)
    }, 1000)
}

iniciar.addEventListener("click", function(e){
    começar()
    timer.style.color = "#000000"
    
})
pausar.addEventListener("click", function(e){
    clearInterval(relogio)
    timer.style.color = "#FF0000"
    
})
zerar.addEventListener("click", function(e){
    clearInterval(relogio)
    segundos = 0
    timer.style.color = "#000000"
    timer.innerHTML = "00:00:00"
    
})