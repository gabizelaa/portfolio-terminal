package br.com.fiap.fintech.TESTES.TesteDespesa;

import br.com.fiap.fintech.JDBC.DespesaDAO;
import br.com.fiap.fintech.MODELOS.Despesa;
import java.util.Scanner;

public class TesteAtualizaDespesa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DespesaDAO dao = new DespesaDAO();

        System.out.println("Digite o ID do usuário: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o código (ID) da despesa que deseja atualizar: ");
        int cdDespesa = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o valor da despesa:");
        double valor = Double.parseDouble(scanner.nextLine());
        scanner.nextLine();

        System.out.println("Digite a descrição da despesa:");
        String descricao = scanner.nextLine();

        System.out.println("Digite a data da despesa:");
        String data = scanner.nextLine();

        scanner.close();

        Despesa despesa = new Despesa(valor, id, descricao, data);
        despesa.setCodigoTransacao(cdDespesa);

        dao.atualizarDespesa(despesa);
    }
}
