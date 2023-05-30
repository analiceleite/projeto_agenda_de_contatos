//VARIAVEIS

var form = document.getElementById('formulario')

var corpoAgenda = document.querySelector('.corpoTabela')

var linhas = '';

var nomes = []
var ddds = []
var numeros = []

// EVENTLISTENER

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

const imgCheck = '<img src="./Imagens/check.jpg"alt="check">';

//FUNCTIONS

function adicionaLinha(){
    var inputNome = document.querySelector('.Nome').value;
    var inputDDD = parseInt(document.querySelector('.DDD').value);
    var inputNumero = parseInt(document.querySelector('.Telefone').value);

    nomes.push(inputNome);
    ddds.push(inputDDD);
    numeros.push(inputNumero);

    var linha = '<tr class="itemNovo">';
    linha += `<td>${inputNome}`;
    linha += `<td>${inputDDD}`;
    linha += `<td>${inputNumero}`;
    linha += `<td>${Adicionado = imgCheck}</td>`

    linhas += linha;
}

function atualizaTabela(){
    corpoAgenda.innerHTML = linhas
}

