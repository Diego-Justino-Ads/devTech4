function buscarDados(event) {
    fetch("http://localhost:8080/conta/contas") 
    .then(result => result.json())
    .then(dados => exibirNaTela(dados))
}

function exibirNaTela(dados) {
    console.log(dados);
    let tabela = `<table> <th>Agencia</th>`
    for (let index = 0; index < dados.length; index++) {
        tabela += `<tr><td>${dados[0].agencia}</td></tr>`
        
    }
    tabela += `</table>`;
    document.getElementById("dados").innerHTML = tabela;
}