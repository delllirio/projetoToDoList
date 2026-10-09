const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa === '') {
    alert('ERRO: Digite uma diretiva válida para registrar!');
    return;
  }

  const li = document.createElement('li');

  const btnConcluir = document.createElement('button');
  btnConcluir.textContent = 'OK';
  btnConcluir.className = 'btn-concluir';

  btnConcluir.addEventListener('click', function () {
    li.classList.toggle('concluida');
  });

  const spanTexto = document.createElement('span');
  spanTexto.textContent = textoTarefa;
  spanTexto.className = 'conteudo-tarefa';

  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = '✕';
  btnExcluir.className = 'btn-excluir';

  btnExcluir.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(btnConcluir);
  li.appendChild(spanTexto);
  li.appendChild(btnExcluir);
  listaTarefas.appendChild(li);

  inputTarefa.value = '';
  inputTarefa.focus();
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});