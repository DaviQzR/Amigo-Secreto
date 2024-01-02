let amigos = [];

function adicionar() {
  let amigo = document.getElementById(`nome-amigo`);
  let lista = document.getElementById(`lista-amigos`);

  // Validar se o campo de amigo não está vazio
  if (amigo.value.trim() === "") {
    alert("Por favor, insira um nome de amigo.");
    return;
  }

  // Verificar se o nome já está na lista
  if (amigos.includes(amigo.value)) {
    alert("Já existe um amigo com esse nome. Por favor, escolha um nome diferente.");
    return;
  }

  amigos.push(amigo.value);

  if (lista.textContent === "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + `, ` + amigo.value;
  }

  amigo.value = "";

  atualizarLista(); // Adicionando a chamada da função para atualizar a lista
}

function sortear() {
  // Validar se há pelo menos quatro amigos para sortear
  if (amigos.length < 4) {
    alert("Por favor, adicione pelo menos quatro amigos para realizar o sorteio.");
    return;
  }

  embaralha(amigos);
  let sorteio = document.getElementById(`lista-sorteio`);

  for (let i = 0; i < amigos.length; i++) {
    if (i === amigos.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ` --> ` + amigos[0] + `<br>`;
    } else {
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ` --> ` + amigos[i + 1] + `<br>`;
    }
  }
}

function excluirAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] =
      [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function atualizarLista() {
  let lista = document.getElementById('lista-amigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    // Cria um elemento de parágrafo para cada amigo
    let paragrafo = document.createElement('p');
    paragrafo.textContent = amigos[i];

    // Adiciona um evento de clique para excluir o amigo
    paragrafo.addEventListener('click', function() {
      excluirAmigo(i);
    });

    // Adiciona o parágrafo à lista
    lista.appendChild(paragrafo);
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}
