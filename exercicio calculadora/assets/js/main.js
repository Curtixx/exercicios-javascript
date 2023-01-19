function Criarcalculadora(){
  return {

    display: document.querySelector(".display"),
    
    
    
    
    
    get iniciar(){
      this.click
      //this.enter
    },

    get click(){
      document.addEventListener("click", function(e){
        const elemento = e.target;
        if(elemento.classList.contains("btn-num")){
          this.MostrarInput(elemento.innerHTML);
        }
        if(elemento.classList.contains("btn-clear")){
          this.clearDisplay;
        }
        if(elemento.classList.contains("btn-del")){
          this.apagarUltimo;
        }
        if(elemento.classList.contains("btn-eq")){
          this.equal;
        }
      }.bind(this));
    },
    MostrarInput(value){
      this.display.value += value;
    },

    get clearDisplay(){
      this.display.value = "";
    },
    get apagarUltimo(){
      this.display.value = this.display.value.slice(0,-1);
    },
    get equal(){
      try{

      
        let inputDisplay = this.display.value;
        inputDisplay = eval(inputDisplay);
        if(inputDisplay == NaN || inputDisplay == undefined){
          alert("Conta inexistente");
          this.display.value = ""
        }
        this.display.value = inputDisplay;
      } catch(e){
          alert(`Ocorreu o seguinte erro: ${e}`)
        
      }
    },
    /*
    CODIGO UTILIZADO PARA QUANDO O USUARIO CLICAR NO ENTER REALIZAR A CONTA.
    OBS: EU NÃO ESTOU UTILIZANDO POIS EU DESABILITEI O INPUT NO PROPIO HTML PARA A UTILIZAÇÃO DO EVAL()
    
    get enter(){
      this.display.addEventListener("keypress", function(e){
      if(e.key == 'Enter'){
        this.equal;
      }
      }.bind(this))
    }
    */

  };
}
const calculadora = Criarcalculadora();
calculadora.iniciar
