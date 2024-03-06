var tarefas = []

//Função Cadastrar 
function cadastro() {
    var nome = document.getElementById('nome').value;
    var descricao = document.getElementById('descricao').value;
    var data = new Date(document.getElementById('data').value);
    var prioridade = document.getElementById('prioridade').value
    var categoria = document.getElementById('categoria').value
    var status = document.getElementById('status').value

    var tarefa = {
        nome: nome,
        descricao: descricao,
        data: data,
        prioridade: prioridade,
        categoria: categoria,
        status: status
    };

    tarefas.push(tarefa);
    console.log(tarefas);

}

//Cadastrar -> Formuçário
document.getElementById('cadastrar').onclick = cadastro;

function listar(){

    document.getElementById('listagem').innerHTML = '';

    var html = '';

    for(var i = 0; i < tarefas.length; i++) {
        html += `
            <table>
                <tr>
                    <th><span> Nome: </span></th>
                    <td><span>${tarefas[i].nome}</span></td>
                </tr>
                <tr>
                    <th><span> Descrição: </span></th>
                    <td><span>${tarefas[i].descricao}</span></td>
                </tr>
                <tr>
                    <th><span> Data: </span></th>
                    <td><span>${tarefas[i].data}</span></td>
                </tr>
                <tr>
                    <th><span> Prioridade: </span></th>
                    <td><span>${tarefas[i].prioridade}</span></td>
                </tr>
                <tr>
                    <th><span> Categoria: </span></th>
                    <td><span>${tarefas[i].categoria}</span></td>
                </tr>
                <tr>
                    <th><span> Status: </span></th>
                    <td><span>${tarefas[i].status}</span></td>
                </tr>
                <tr class="edicao">
                    <th><button type="button" class="btn btn-warning" id="bt-ed${i}">Editar</button></th>
                    <th><button type="button" class="btn btn-danger" id="bt-ex${i}">Excluir</button></span></th>
                </tr>
            </table>
            <br>
        `;
    }

    document.getElementById('listagem').innerHTML += html;
}

//Listar -> Ordem adicionada
document.getElementById('listar').onclick = listar;

//Limpar tela (Ok)
document.getElementById('limpar').onclick = function() {
    tarefas = []
    document.getElementById('listagem').innerHTML = '';
}

//Editar
document.getElementById('editar').onclick = function () {

    var edicoes = document.getElementsByClassName('edicao');
    for(var t = 0; t < edicoes.length; t++) {
        edicoes[t].style.display = "block";
    }

}

//Excluir
document.getElementById('listagem').onclick = function(event) {
    var elementoClicado = event.target.id;
    if (elementoClicado.startsWith("bt-ex")) { 
        var index = parseInt(elementoClicado.replace("bt-ex", "")); 
        tarefas.splice(index, 1) 
        alert("Tarefa Excluida com sucesso!")
        listar();
    }    
}


    // // Adicionando evento de mudança ao elemento select
    // document.getElementById('eventos').onchange = function() {
    //     var selectedIndex = this.selectedIndex;
    //     // Preencher os inputs com os valores correspondentes
    //     document.getElementById('nome').value = tarefas[selectedIndex].nome;
    //     document.getElementById('descricao').value = tarefas[selectedIndex].descricao;
    //     document.getElementById('data').value = tarefas[selectedIndex].data;
    //     document.getElementById('prioridade').value = tarefas[selectedIndex].prioridade;
    //     document.getElementById('categoria').value = tarefas[selectedIndex].categoria;
    //     document.getElementById('status').value = tarefas[selectedIndex].status;
    // };

    // // Adicionando evento de clique ao botão 'Salvar edição'
    // document.getElementById('editar').onclick = function() {
    //     var selectedIndex = document.getElementById('eventos').selectedIndex;
    //     // Atualizar os valores correspondentes no array 'tarefas'
    //     tarefas[selectedIndex].nome = document.getElementById('nome').value;
    //     tarefas[selectedIndex].descricao = document.getElementById('descricao').value;
    //     tarefas[selectedIndex].data = document.getElementById('data').value;
    //     tarefas[selectedIndex].prioridade = document.getElementById('prioridade').value;
    //     tarefas[selectedIndex].categoria = document.getElementById('categoria').value;
    //     tarefas[selectedIndex].status = document.getElementById('status').value;

    //     // Atualizar a lista de eventos
    //     document.getElementById('eventos').innerHTML = '';
    //     for (var c = 0; c < tarefas.length; c++) {
    //         document.getElementById('eventos').innerHTML += '<option id="opcao_' + c + '">' + tarefas[c].nome + '</option>';
    //     }

    //     document.getElementById('editar').innerHTML = 'Editar';
    //     document.getElementById('cadastrar').style.display = 'initial';
    //     document.getElementById('listar').style.display = 'initial';
    //     document.getElementById('limpar').style.display = 'initial';
    //     document.getElementById('listagem').innerHTML = '';
    // };








