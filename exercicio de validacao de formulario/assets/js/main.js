class ValidacaoForms{
  constructor(){
    this.forms = document.querySelector(".formulario")
    this.evt()
  }
  evt(){
      this.forms.addEventListener("submit", e =>{
      this.handleSubmit(e)
    })
  }
  handleSubmit(event){
    event.preventDefault()
    const camposValidos = this.validarCampos()
    const senhasValidas = this.validaSenha()
    if(camposValidos && senhasValidas){
      alert("Forms eviado")
      this.forms.submit()
    }
  }
  validarCampos(){
    let valid = true
    for(let e of this.forms.querySelectorAll(".error")){
      e.remove()
    }
    for(let x of this.forms.querySelectorAll(".validar")){
      let label = x.previousElementSibling.innerHTML;
      if(!x.value){
        this.createError(x, `Campo ${label} não pode estar vazio`)
        valid = false
      }
      if(x.classList.contains("cpf")){
        if(!this.validacaoCpf(x)){
          valid = false
        }
      }
      if(x.classList.contains("usuario")){
        if(!this.validaNome(x)){
          valid = false
        }
      }
      return valid

    }
  }
  createError(campo, msg){
    const div = document.createElement("div")
    div.innerHTML = msg
    div.classList.add("error")
    campo.insertAdjacentElement("afterend", div)
    
  }
  validacaoCpf(c){
    const inputcpf = document.getElementById("txtcpf").value.replace(/\D+/g, "")
    const cpf = new Validacao(inputcpf)
    if(!cpf.valida()){
      this.createError(c, "Cpf inválido")
      return false
    }else{
      return true
    }
  }
  validaNome(c){
    const user = c.value
    let valid = true
    if(user.length > 12 || user.length < 3){
      this.createError(c, "Nome inválido o nome precisa ter entre 3 a 12 caracteres")
      valid = false
    }
    if(!user.match(/^[a-zA-Z0-9]+$/g)){
      this.createError(c, "Nome precisa contem apenas letras e/ou numeros")

    }
    return valid
  }
  validaSenha(){
    let valid = true
    const senha = document.querySelector(".senha")
    const senha2 = document.querySelector(".repetir-senha")
    if(senha.value !== senha2.value){
      valid = false
      this.createError(senha, "Ambos campos de senha tem que ser iguais")
      this.createError(senha2, "Ambos campos de senha tem que ser iguais")
    }
    if(senha.value.length > 12 || senha.value.length < 6){
      valid = false
      this.createError(senha, "As senhas precisam ter entre 6 a 12 caracteres")
      this.createError(senha2, "As senhas precisam ter entre 6 a 12 caracteres")

    }
    return valid

  }
}

const valida = new ValidacaoForms()