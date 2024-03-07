var tarefas = []

//Função Cadastrar 
function cadastro() {
    document.getElementById('editar').style.display = 'none'
;    var nome = document.getElementById('nome').value;
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
document.getElementById('listar').onclick = function(){
    listar();
    document.getElementById('editar').style.display = 'initial';
};

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

document.getElementById('listagem').onclick = function(event) {
    var elementoClicado = event.target.id;

    //Editar
    if (elementoClicado.startsWith("bt-ed")) { 
        var index = parseInt(elementoClicado.replace("bt-ed", "")); 

        document.getElementById('nome').value = tarefas[index].nome;
        document.getElementById('descricao').value = tarefas[index].descricao;
        document.getElementById('data').value = tarefas[index].data;
        document.getElementById('prioridade').value = tarefas[index].prioridade;
        document.getElementById('categoria').value = tarefas[index].categoria;
        document.getElementById('status').value = tarefas[index].status;

        document.getElementById('cadastrar').style.display = 'none';
        document.getElementById('atualizar').style.display = 'initial';

        document.getElementById('atualizar').dataset.index = index;

    //Excluir    
    } else if (elementoClicado.startsWith("bt-ex")) { 
        var index = parseInt(elementoClicado.replace("bt-ex", "")); 
        tarefas.splice(index, 1); 
        alert("Tarefa Excluída com sucesso!");
        listar();
        document.getElementById('editar').style.display = 'none';
    }    
};

// Função para atualizar uma tarefa existente
function atualizarTarefa() {
    var index = document.getElementById('atualizar').dataset.index;
    tarefas[index].nome = document.getElementById('nome').value;
    tarefas[index].descricao = document.getElementById('descricao').value;
    tarefas[index].data = new Date(document.getElementById('data').value);
    tarefas[index].prioridade = document.getElementById('prioridade').value;
    tarefas[index].categoria = document.getElementById('categoria').value;
    tarefas[index].status = document.getElementById('status').value;

    // Limpar o formulário 
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('prioridade').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('status').value = '';

    document.getElementById('cadastrar').style.display = 'initial';
    document.getElementById('atualizar').style.display = 'none';

    // Atualizar 
    listar();
}

document.getElementById('atualizar').onclick = atualizarTarefa;








