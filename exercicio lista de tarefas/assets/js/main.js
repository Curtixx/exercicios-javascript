const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn');
const tarefas = document.querySelector('.tarefas');
const h1 = document.querySelector(".data")
const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
h1.innerHTML += dataAtual + ":"


function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (inputTarefa.value.trim() === ""){
      return
    }else{
      criaTarefa(inputTarefa.value);
      inputTarefa.value =""
    }
    
  }
});



function btnexcluir(li) {
  li.innerText += ' ';
  const btnexcluir = document.createElement('button');
  btnexcluir.innerText = 'Apagar';
  btnexcluir.setAttribute('class', 'excluir');
  btnexcluir.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(btnexcluir);
}

function criaTarefa(input) {
  const li = criaLi();
  li.innerText = input;
  tarefas.appendChild(li);
  btnexcluir(li);
  salvar();
}

btnTarefa.addEventListener('click', function() {
  if (inputTarefa.value.trim() === ""){
    return
  }else{
    criaTarefa(inputTarefa.value);
    inputTarefa.value = ""
    
  }
  
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('excluir')) {
    el.parentElement.remove();
    salvar();
  }
});

function salvar() {
  const listaTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of listaTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
