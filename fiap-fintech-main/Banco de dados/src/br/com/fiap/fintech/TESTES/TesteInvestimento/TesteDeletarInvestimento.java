package br.com.fiap.fintech.TESTES.TesteInvestimento;

import br.com.fiap.fintech.JDBC.InvestimentoDAO;
import java.util.Scanner;

public class TesteDeletarInvestimento {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        InvestimentoDAO dao = new InvestimentoDAO();

        System.out.println("Digite o código (ID) do investimento que deseja remover: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        dao.removerInvestimento(id);

    }
}
