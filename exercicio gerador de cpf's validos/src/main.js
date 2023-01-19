import './assets/css/style.css'
import Geracpf from "./modules/Gerarcpf"



(function(){
    const gera = new Geracpf();
    const cpfGerado = document.querySelector(".res");
    cpfGerado.innerHTML = gera.gerarDigitos();

})();