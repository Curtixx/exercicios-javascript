import Validacpf from "./Validacpf";

export default class Geracpf{
    random(max = 100000000, min = 999999999 ){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    gerarDigitos(){
        const cpfClear = this.random()
        const primeiroDig = Validacpf.geraDigito(cpfClear)
        const segundoDig = Validacpf.geraDigito(cpfClear + primeiroDig)
        const cpf = cpfClear + primeiroDig + segundoDig
        return this.format(cpf)

    }
    
    format(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }
}
