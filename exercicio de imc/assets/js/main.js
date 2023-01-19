const form = document.querySelector(".form")
const result = document.querySelector("#result")
form.addEventListener("submit", function(e){
    e.preventDefault()
    const inputpeso = e.target.querySelector("#peso").value
    const inputaltura = e.target.querySelector("#altura").value
    const peso = Number(inputpeso)
    const altura = Number(inputaltura)

    if(peso >= 360 || altura >= 3){
        return setResult("Valores invalidos", false)
    }else{
        if(getimc(peso,altura) < 18.5){
            return setResult("Abaixo do peso", true)
        }
        else if(getimc(peso, altura) > 18.5 && getimc(peso,altura) <= 24.9){
            return setResult("Peso normal", true)
        }
        else if(getimc(peso,altura) > 25 && getimc(peso,altura) <= 29.9){
            return setResult("Sobre peso", true)
        }
        else if(getimc(peso,altura) > 30 && getimc(peso,altura) <=34.9){
            return setResult("Obesidade grau 1", true)
        }
        else if(getimc(peso,altura) > 35 && getimc(peso,altura) <= 39.9){
            return setResult("Obesidade grau 2", true)
        }
        else if(getimc(peso, altura) >= 40){
            return setResult("Obesidade grau 3", true)
        }
        
    }
})
function getimc(peso, altura){
    const imc = peso/altura **2
    return imc.toFixed(1)
}
function setResult(msg, validacao){
    if(validacao == false){
        result.style.background = "#FF0000"
        result.innerHTML = msg
    }else if(validacao == true){
        result.style.background = "#00FF00"
        result.innerHTML = msg
    }
    
}