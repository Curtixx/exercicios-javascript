function Calculadora(){
  this.display = document.querySelector(".display");

  this.iniciar = function() {
    this.click();
  }
  this.click = function() {
    document.addEventListener("click", (e)=>{
      const elemento = e.target;
      if(elemento.classList.contains("btn-num")){

        this.MostrarInput(elemento.innerHTML);
      }
      if(elemento.classList.contains("btn-clear")){
        this.clearDisplay();
      }
      if(elemento.classList.contains("btn-del")){
        this.apagarUltimo();
      }
      if(elemento.classList.contains("btn-eq")){
        this.equal();
      }
    })
  }
  this.MostrarInput = function(value) {
    this.display.value += value
  };
  this.clearDisplay = function(){
    this.display.value = ""
  };
  this.apagarUltimo = function() {
    this.display.value = this.display.value.slice(0,-1)
  };
  this.equal = function(){
    try{
      let inputDisplay = this.display.value;
      inputDisplay = eval(inputDisplay);
      
      if(inputDisplay == NaN || inputDisplay == undefined){
        alert("Conta inexistente");
        return
      }
      this.display.value = inputDisplay;
      
    }catch(e){
      alert(`Ocorreu o seguinte erro: ${e}`);
    }
  }
}
const calculadora = new Calculadora();
calculadora.iniciar();