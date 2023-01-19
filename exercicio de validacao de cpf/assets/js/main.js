function Validacao(cpfinput){
    Object.defineProperty(this, "cpfclean", {
        enumerable: true,
        get: function(){
            return cpfinput.replace(/\D+/g, "")
        }
    })
}
Validacao.prototype.valida = function(){
    if(typeof this.cpfclean === "undefined"){
        return false
    }else if(this.cpfclean.length !== 11){
        return false
    }
    else if(this.isSequencia()){
        return false
    }
    const cpfParcial = this.cpfclean.slice(0,-2)
    const primeiroDig = this.criaDigito(cpfParcial)
    const segundoDig = this.criaDigito(cpfParcial + primeiroDig)
    const novoCpf = cpfParcial + primeiroDig + segundoDig
    return novoCpf === this.cpfclean
}
Validacao.prototype.criaDigito = function(cpfP){
    const Arraycpf = Array.from(cpfP)
    let regressivo = Arraycpf.length+1
    const total = Arraycpf.reduce((acumulador, value) =>{
        acumulador += (regressivo * Number(value))
        regressivo --
        return acumulador
    },0)
    const  dig = 11 - (total % 11)
    return dig > 9 ? "0" : String(dig)
}
Validacao.prototype.isSequencia = function(){
    const sequencia = this.cpfclean[0].repeat(this.cpfclean.length)
    return sequencia === this.cpfclean
}
document.addEventListener("click", (e)=>{
    const inputcpf = document.getElementById("txtcpf").value

    const h3 = document.getElementById("txtvalidacao")
    const element = e.target
    if(element.classList.contains("verificar")){
        const cpf = new Validacao(inputcpf)
        if(cpf.valida()){
            h3.innerHTML = "CPF VALIDO!"
            h3.style.color = "#00FF00"
        }else{
            h3.innerHTML = "CPF INVALIDO!"
            h3.style.color = "#FF0000"
        }
    }
    

})
