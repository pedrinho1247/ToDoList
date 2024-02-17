import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String nome, desc, dt, cat;
        int opcao, prio, status, num;

        CadastroTarefa cadastroTarefas = new CadastroTarefa();

        // Loop para criar as tarefas
        while (true) {
            try {
                System.out.println("O que deseja realizar (Escolha uma opção) : ");
                System.out.println("-----------------------------------------------");
                System.out.println("1. Adicionar uma Tarefa");
                System.out.println("2. Remover uma Tarefa");
                System.out.println("3. Atualizar uma tarefa");
                System.out.println("4. Listar Tarefas");
                System.out.println("5. Classificar por prioridade");
                System.out.println("6. Classificar por categoria");
                System.out.println("7. Classificar por status");
                System.out.println("8. Sair");
                System.out.println("-----------------------------------------------");
                System.out.println("OPÇÃO: ");
                opcao = sc.nextInt();
                sc.nextLine();
            } catch (InputMismatchException e) {
                System.out.println("Valor inserido inválido! Por favor, insira um número correspondente a opção desejada.");
                sc.nextLine();
                continue;
            }

            switch (opcao) {
                case 1:
                    System.out.println("Nome da Tarefa: ");
                    nome = sc.nextLine();
                    System.out.println("Descrição da Tarefa: ");
                    desc = sc.nextLine();
                    System.out.println("Data de término da Tarefa: ");
                    dt = sc.nextLine();
                    System.out.println("Prioridade da Tarefa de 1 a 5: ");
                    prio = sc.nextInt();
                    sc.nextLine();
                    System.out.println("Categoria da Tarefa: ");
                    cat = sc.nextLine();
                    System.out.println("Status [1:ToDo 2:Doing 3:Done] : ");
                    status = sc.nextInt();
                    sc.nextLine();
                    cadastroTarefas.adicionarTarefa(nome, desc, dt, prio, cat, status);
                    break;

                case 2:
                    System.out.println("Tarefa a ser removida: ");
                    num = sc.nextInt();
                    cadastroTarefas.removerTarefa(num);
                    break;

                case 3:
                    // Atualizar uma tarefa
                    break;

                case 4:
                    cadastroTarefas.listarTarefas();
                    break;

                case 5:
                    cadastroTarefas.classificarPorPrioridade();
                    System.out.println("Tarefas classificadas por prioridade:");
                    cadastroTarefas.listarTarefas();
                    break;
                case 6:
                    cadastroTarefas.classificarPorCategoria();
                    System.out.println("Tarefas classificadas por categoria:");
                    cadastroTarefas.listarTarefas();
                    break;
                case 7:
                    cadastroTarefas.classificarPorStatus();
                    System.out.println("Tarefas classificadas por status:");
                    cadastroTarefas.listarTarefas();
                    break;
                case 8:
                    System.out.println("Saindo do programa...");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Opção inválida! Por favor, escolha uma opção válida.");
            }
        }
    }
}
