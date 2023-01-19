
const h1 = document.querySelector(".container h1")
const time = Date.now()
const data = new Date(time) 
const dia = data.getDay()
const diaNumero = data.getDate()
const mes = data.toLocaleString("default", {month: "long"})
const ano = data.getFullYear()
const hora = data.getHours()
const minuto = data.getMinutes()
function getDiasemana(dia){

     switch (dia){
          case 0:
               diasemana = "Domingo"
               return diasemana.toLowerCase()
          case 1:
               diasemana = "Segunda-Feira"
               return diasemana.toLowerCase()
          case 2:
               diasemana = "Terça-Feira"
               return diasemana.toLowerCase()
          case 3:
               diasemana = "Quarta-Feira"
               return diasemana.toLowerCase()
          case 4:
               diasemana = "Quinta-Feira"
               return diasemana.toLowerCase()
          case 5:
               diasemana = "Sexta-Feira"
               return diasemana.toLowerCase()
          case 6:
               diasemana = "Sábado"
               return diasemana.toLowerCase()
          default:
               diasemana = ""
               return diasemana

     }
}
h1.innerHTML = `${getDiasemana(dia)}, ${diaNumero} ${mes} de ${ano} ${hora}:${minuto}`
