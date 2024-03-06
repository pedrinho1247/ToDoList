var tarefas = []

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

//Listar -> Ordem adicionada
document.getElementById('listar').onclick = function() {

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
            </table>
            <br>
        `;
    }

    document.getElementById('listagem').innerHTML += html;
}

//Limpar tela
document.getElementById('limpar').onclick = function() {
    tarefas = []
    document.getElementById('listagem').innerHTML = '';
}

//Editar
document.getElementById('editar').onclick = function () {
    document.getElementById('editar').innerHTML = 'Salvar edição';
    document.getElementById('cadastrar').style.display = 'none';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('limpar').style.display = 'none';

    document.getElementById('listagem').innerHTML = '';

    var html = 
    '<div class="col-md-4">'+
        '<label for="eventos" class="form-label">Eventos</label>'+
        '<select id="eventos" class="form-select">';

    for (var c = 0; c < tarefas.length; c++) {
        html += '<option id="opcao_' + c + '">' + tarefas[c].nome + '</option>';
    }

    html += '</select></div>';

    document.getElementById('listagem').innerHTML += html;

    // Adicionando evento de mudança ao elemento select
    document.getElementById('eventos').onchange = function() {
        var selectedIndex = this.selectedIndex;
        // Preencher os inputs com os valores correspondentes
        document.getElementById('nome').value = tarefas[selectedIndex].nome;
        document.getElementById('descricao').value = tarefas[selectedIndex].descricao;
        document.getElementById('data').value = tarefas[selectedIndex].data;
        document.getElementById('prioridade').value = tarefas[selectedIndex].prioridade;
        document.getElementById('categoria').value = tarefas[selectedIndex].categoria;
        document.getElementById('status').value = tarefas[selectedIndex].status;
    };

    // Adicionando evento de clique ao botão 'Salvar edição'
    document.getElementById('editar').onclick = function() {
        var selectedIndex = document.getElementById('eventos').selectedIndex;
        // Atualizar os valores correspondentes no array 'tarefas'
        tarefas[selectedIndex].nome = document.getElementById('nome').value;
        tarefas[selectedIndex].descricao = document.getElementById('descricao').value;
        tarefas[selectedIndex].data = document.getElementById('data').value;
        tarefas[selectedIndex].prioridade = document.getElementById('prioridade').value;
        tarefas[selectedIndex].categoria = document.getElementById('categoria').value;
        tarefas[selectedIndex].status = document.getElementById('status').value;

        // Atualizar a lista de eventos
        document.getElementById('eventos').innerHTML = '';
        for (var c = 0; c < tarefas.length; c++) {
            document.getElementById('eventos').innerHTML += '<option id="opcao_' + c + '">' + tarefas[c].nome + '</option>';
        }

        document.getElementById('editar').innerHTML = 'Editar';
        document.getElementById('cadastrar').style.display = 'initial';
        document.getElementById('listar').style.display = 'initial';
        document.getElementById('limpar').style.display = 'initial';
        document.getElementById('listagem').innerHTML = '';
    };
};

//Corrigir BUG...


// Função para lidar com o clique no botão "Excluir"
function handleDeleteClick() {
    var selectedIndex = document.getElementById('eventos').selectedIndex;
    // Remover a tarefa selecionada do array 'tarefas'
    tarefas.splice(selectedIndex, 1);

    // Atualizar a lista de eventos
    document.getElementById('eventos').innerHTML = '';
    for (var c = 0; c < tarefas.length; c++) {
        document.getElementById('eventos').innerHTML += '<option id="opcao_' + c + '">' + tarefas[c].nome + '</option>';
    }

    // Resetar os campos de entrada e a listagem
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('prioridade').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('status').value = '';
    document.getElementById('listagem').innerHTML = '';

    document.getElementById('cadastrar').style.display = 'initial';
    document.getElementById('listar').style.display = 'initial';
    document.getElementById('limpar').style.display = 'initial';
    document.getElementById('editar').innerHTML = 'Editar';
    document.getElementById('listagem').innerHTML = '';
}

// Adicionar o evento de clique ao botão 'Excluir'
document.getElementById('excluir').addEventListener('click', handleDeleteClick);








