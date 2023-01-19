class Validacao{
    constructor(){
         this.click()
    }
    click(){
        document.addEventListener("click", (e) =>{
            const element = e.target
            if(element.classList.contains("verificar")){
                let inputcpf = document.getElementById("txtcpf").value
                let h3 = document.getElementById("txtvalidacao")
                //let cpf = "123.456.789-10"
                let cpforiginalclean = inputcpf.replace(/\D+/g, "")
                let cpforiginal = Array.from(cpforiginalclean)
                let cpfclean = inputcpf.replace(/\D+/g, "")
                let Arraycpf = Array.from(cpfclean)
                let primeiroDig = 0
                let segundoDig =0
                if(inputcpf.length < 14 || inputcpf.length > 14){
                    return
                }
                this.criarnumeros = function(){
                    let numeros = []
                    for(let i =2; i < 11; i++){
                        numeros.unshift(i)
                    }
                    return numeros
                    
                }
                this.removerultimos = function(){
                    for(let i = 0; i < 2; i++){
                        Arraycpf.pop()
                    }
                    return Arraycpf.map(Number)
                }
                
                this.Contagerarprimeiro = function(a1,a2){
                    let gerarprimeiro = []
                    for(let i =0; i <= a1.length-1; i++){
                        gerarprimeiro.push(a1[i] * a2[i])
                    }
                    
                    let soma = gerarprimeiro.reduce(function(s, i){
                        return s+i
                    })
                    return soma
                }
                this.Gerarprimeiro = function(soma){
                    let resto = soma % 11
                    if(resto < 2){
                        primeiroDig = 0
                    }else{
                        primeiroDig = 11 - resto
                    }
                    return String(primeiroDig)
                }
                this.Contasegundo = function(){
                    Arraycpf.push(this.Gerarprimeiro(this.Contagerarprimeiro(this.criarnumeros(), this.removerultimos()))
                    )
                    let arraynumero = Arraycpf.map(Number)
                    let numeros = []
                    let arrayconta = []
                    for(let i = 2; i < 12; i++){
                        numeros.unshift(i)
                    }
                    for(let i =0; i <=Arraycpf.length-1;i++){
                        arrayconta.push(Arraycpf[i] * numeros[i])
                    }
                    let soma = arrayconta.reduce(function(s, i){
                        return s+i
                    })
                    let resto = soma % 11
                    if(resto < 2){
                        segundoDig = 0 
                    }else{
                        segundoDig = 11-resto
                    }
                    
                    Arraycpf.push(String(segundoDig))
                    
                    if(cpforiginal.join("") === Arraycpf.join("")){
                        h3.innerHTML = "VALIDO"  
                        h3.style.color = "#00FF00"
                        return true
                    }else if(cpforiginal.join("") !== Arraycpf.join("")){
                        h3.innerHTML = "INVALIDO"
                        h3.style.color = "#FF0000"
                        return false
                    }
                    
                }
                this.Contasegundo()
                this.Gerarprimeiro(this.Contagerarprimeiro(this.criarnumeros(), this.removerultimos()))
            
            }
            
        })
    }

}
const validacao = new Validacao()
console.log(validacao)