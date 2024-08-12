package br.com.fiap.fintech.TESTES.TesteDespesa;

import br.com.fiap.fintech.JDBC.DespesaDAO;
import java.util.Scanner;

public class TesteDeletarDespesa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DespesaDAO dao = new DespesaDAO();

        System.out.println("Digite o ID da despesa que você quer deletar:");
        int id = scanner.nextInt();
        scanner.nextLine();

        dao.removerDespesa(id);

    }
}
