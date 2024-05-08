class Livro {
  constructor(nome, genero, numPaginas, autor) {
    this.nome = nome;
    this.genero = genero;
    this.numPaginas = numPaginas;
    this.autor = autor;
  }
}

var listaLivros = [];
var posicao = '';

const tbLivro = $('#tbLivro');

function cadastrar(objeto, lista) {
  lista.push(objeto);
}

function alterar(objeto, lista, pos) {
  lista[pos] = objeto;
}

function excluir(lista, pos) {
  lista.splice(pos, 1);
}

function listarLivros(lista) {
  let auxHTML = '';
  for (let i = 0; i < lista.length; i++) {
    auxHTML += '<tr>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0">' +
      lista[i].nome +
      '</td>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0">' +
      lista[i].genero +
      '</td>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0">' +
      lista[i].numPaginas +
      '</td>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0">' +
      lista[i].autor +
      '</td>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0"><a href="#" class="btAlterar mx-auto" rel="' +
      i +
      '"></a></td>';
    auxHTML +=
      '<td class="border border-black border-start-0 border-bottom-0"><a href="#" class="btExcluir mx-auto" rel="' +
      i +
      '"></a></td>';
    auxHTML += '<tr>';
  }
  return auxHTML;
}

$(document).ready(() => {
  $('#btSalvar').click(() => {
    let livro = new Livro(
      $('#nome').val(),
      $('#genero').val(),
      $('#numPaginas').val(),
      $('#autor').val()
    );

    if (posicao == '') {
      cadastrar(livro, listaLivros);
    } else {
      alterar(livro, listaLivros, posicao);
      posicao = '';
    }

    $('#tbLivro').html(listarLivros(listaLivros));
    $('input').val('');
  });

  $('#tbLivro').on('click', '.btAlterar', (e) => {
    posicao = e.target.getAttribute('rel');
    $('#nome').val(listaLivros[posicao].nome);
    $('#genero').val(listaLivros[posicao].genero);
    $('#numPaginas').val(listaLivros[posicao].numPaginas);
    $('#autor').val(listaLivros[posicao].autor);
  });

  $('#tbLivro').on('click', '.btExcluir', (e) => {
    if (confirm('Tem certeza que deseja excluir?')) {
      let pos = e.target.getAttribute('rel');
      excluir(listaLivros, pos);
      $('#tbLivro').html(listarLivros(listaLivros));
      posicao = '';
    }
  });

  $('#btLimpar').click(() => {
    $('input').val('');
    posicao = '';
  });

  $('#btExcluirHistorico').click(() => {
    if (confirm('Tem certeza que deseja apagar todos os cadastros?')) {
      $('#tbLivro').empty();
      listaLivros = [];
    }
  });
});
