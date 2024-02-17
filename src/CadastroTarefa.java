import java.util.ArrayList;
import java.util.Comparator;

class CadastroTarefa {
    ArrayList<Tarefa> lista = new ArrayList<>();

    public void adicionarTarefa(String nome, String descricao, String dataTermino, int prioridade, String categoria, int status) {
        Tarefa novaTarefa = new Tarefa(nome, descricao, dataTermino, prioridade, categoria, status);
        lista.add(novaTarefa);
        lista.sort(Comparator.comparingInt(Tarefa::getPrioridade).reversed());
    }

    public void listarTarefas() {
        if (lista.isEmpty()) {
            System.out.println("Não há tarefas cadastradas.");
        } else {
            System.out.println("Lista de Tarefas:");
            for (Tarefa tarefa : lista) {
                System.out.println(tarefa);
            }
        }
    }

    public void removerTarefa(int index) {
        System.out.println("Lista de Tarefas:");
        for (int i = 0; i < lista.size(); i++) {
            System.out.println("Índice: " + i + ", Nome: " + lista.get(i).nome);
        }
        if (index >= 0 && index < lista.size()) {
            lista.remove(index);
            System.out.println("Tarefa removida com sucesso.");
        } else {
            System.out.println("Índice inválido. Não foi possível remover a tarefa.");
        }
    }

    public void classificarPorPrioridade() {
        lista.sort(Comparator.comparingInt(Tarefa::getPrioridade).reversed());
    }

    // Método para classificar tarefas por categoria
    public void classificarPorCategoria() {
        lista.sort(Comparator.comparing(Tarefa::getCategoria).reversed());
    }

    // Método para classificar tarefas por status
    public void classificarPorStatus() {
        lista.sort(Comparator.comparingInt(Tarefa::getStatus).reversed());
    }

}

class Tarefa {
    String nome;
    String descricao;
    String dataTermino;
    int prioridade;
    String categoria;
    int status;

    public Tarefa(String nome, String descricao, String dataTermino, int prioridade, String categoria, int status) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataTermino = dataTermino;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public String getCategoria() {
        return categoria;
    }

    public int getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return "Nome: " + nome + "\nDescrição: " + descricao + "\nData de Término: " + dataTermino +
                "\nPrioridade: " + prioridade + "\nCategoria: " + categoria + "\nStatus: " + status +
                "\n----------------------------------";
    }
}
